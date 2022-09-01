<?php


namespace App\Service;


use App\Http\Filters\MovieFilter;
use App\Models\Movie;
use Goutte\Client;
use Illuminate\Support\Facades\DB;

class MovieService
{
    const DEFAULT_IMAGE = 'https://mizez.com/custom/mizez/img/general/no-image-available.png';
    const PER_PAGE = 6;
    const HDrezka_URL = 'https://rezka.ag';

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

    public function getNewMoviesFromHDrezka()
    {
        /** TODO доделать кеширование парсинга **/
        $client = new Client();
        $url = self::HDrezka_URL;
        $crawler = $client->request('GET', $url);

        $parsedMovies = $crawler->filter('#newest-slider-content > .b-content__inline_item')
            ->each(function ($node) use ($url) {
                return [
                    'image' => $node->filter('.b-content__inline_item-cover')->filter('img')->attr('src'),
                    'details' => $node->filter('.b-content__inline_item-link')->text(),
                    'link' => $url . $node->filter('.b-content__inline_item-link')->filter('a')->attr('href')
                ];
            });

        $movies = [];
        foreach ($parsedMovies as $movie) {
            $details = explode(',', $movie['details']);
            // убераю лишние  символы в названии
            $title = str_replace('- ...', '', $details[0]);
            // нахожу год в строке с названием
            preg_match('/\d{4}/', $title, $match);
            // получаю только название фильма без года
            $title = str_replace($match[0], '', $title);
            $movies[] = [
                'image' => $movie['image'],
                'title' => trim($title),
                'year' => trim($match[0]),
                'country' => trim($details[1]),
                'genre' => trim($details[2]),
                'link' => $movie['link']
            ];
        }
        return $movies;
    }
}
