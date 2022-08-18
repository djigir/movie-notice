<?php


namespace App\Service;


use App\Http\Filters\MovieFilter;
use App\Models\Movie;
use Illuminate\Support\Facades\DB;

class MovieService
{
    const DEFAULT_IMAGE = 'https://mizez.com/custom/mizez/img/general/no-image-available.png';
    const PER_PAGE = 6;

    public function showMovies($data)
    {
        $filter = app()->make(MovieFilter::class, ['queryParams' => array_filter($data)]);

        return auth()->user()->movies()->filter($filter)
            ->orderBy($data['sort_column'], $data['sort_direction'])
            ->paginate(self::PER_PAGE, ['*'], 'page', $data['page']);
    }

    public function movieStore($data)
    {
        $data['user_id'] = auth()->user()->id;

        try {
            DB::beginTransaction();

            if (isset($data['genres'])) {
                // get only id from genres array
                $genreIds = array_column($data['genres'], 'id');
                unset($data['genres']);
            }

            if(!filter_var($data['image'], FILTER_VALIDATE_URL)) {
                $data['image'] = self::DEFAULT_IMAGE;
            }

            $movie = Movie::create($data);

            if (isset($genreIds)) {
                $movie->genres()->attach($genreIds);
            }

            DB::commit();

        } catch (\Exception $exception) {
            DB::rollBack();
            abort(500);
        }
    }

    public function movieUpdate($data, $movie)
    {
        try {
            DB::beginTransaction();

            if (isset($data['genres'])) {
                // get only id from genres array
                $genreIds = array_column($data['genres'], 'id');
                unset($data['genres']);
            }

            if(is_null($data['image']) || !filter_var($data['image'], FILTER_VALIDATE_URL)) {
                $data['image'] = self::DEFAULT_IMAGE;
            }


            $movie->update($data);

            if (isset($genreIds)) {
                $movie->genres()->sync($genreIds);
            }

            DB::commit();

        } catch (\Exception $exception) {
            DB::rollBack();
            abort(500);
        }
    }
}
