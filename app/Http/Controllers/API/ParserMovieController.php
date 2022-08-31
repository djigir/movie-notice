<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Goutte\Client;

class ParserMovieController extends Controller
{
    public function index()
    {
        /** TODO доделать кеширование парсинга **/
        $client = new Client();
        $url = 'https://rezka.ag/';
        $crawler = $client->request('GET', $url);

        $moviesImages = $crawler->filter('#newest-slider-content > .b-content__inline_item > .b-content__inline_item-cover')
            ->each(function ($node) {
                return $node->filter('img')->attr('src');
            });

        $parseMovieDetails = $crawler->filter('#newest-slider-content > .b-content__inline_item > .b-content__inline_item-link')->each(function ($node) {
            return $node->text();
        });

        $movieDetails = [];
        foreach ($parseMovieDetails as $key => $movieDetail) {
            $details = explode(',', $movieDetail);
            // убераю лишние  символы в названии
            $title = str_replace('- ...', '', $details[0]);
            // нахожу год в строке с названием
            preg_match('/\d{4}/', $title, $match);
            // получаю только название фильма без года
            $title = str_replace($match[0], '', $title);

            $movieDetails[]  = [
                'title' => $title,
                'year' => $match[0],
                'country' => $details[1],
                'genre' => $details[2]
            ];
        }


        $novelties = ['images' => $moviesImages, 'details' => $movieDetails];

        return response()->json($novelties);
    }

    public function show()
    {
        dd(1111);
    }
}
