<?php


namespace App\Service;


use App\Models\Movie;
use Illuminate\Support\Facades\DB;

class MovieService
{
    public function movieStore($data)
    {
        try {
            DB::beginTransaction();

            if (isset($data['genres'])) {
                // get only id from genres array
                $genreIds = array_column($data['genres'], 'id');
                unset($data['genres']);
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
