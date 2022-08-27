<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\ParserMovieResource;
use Goutte\Client;

class ParserMovieController extends Controller
{
    public function index()
    {
        $client = new Client();
        $url = 'https://rezka.ag/';
        $crawler = $client->request('GET', $url);

        $moviesImages = $crawler->filter('#newest-slider-content > .b-content__inline_item > .b-content__inline_item-cover')
            ->each(function ($node) {
                return $node->filter('img')->attr('src');
            });

        $movieDetails = $crawler->filter('#newest-slider-content > .b-content__inline_item > .b-content__inline_item-link')->each(function ($node) {
            return $node->text();
        });

        $novelties = ['images' => $moviesImages, 'details' => $movieDetails];

        return response()->json($novelties);
    }
}
