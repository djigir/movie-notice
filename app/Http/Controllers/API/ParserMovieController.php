<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Service\MovieService;
use Illuminate\Support\Facades\Cache;

class ParserMovieController extends Controller
{
    /**
     * @var MovieService
     */
    private MovieService $movieService;

    public function __construct(MovieService $movieService)
    {
        $this->movieService = $movieService;
    }

    public function index()
    {
//        $movies = $this->movieService->getNewMoviesFromHDrezka();
        /* TODO добавить больше времени для кеша */
        $movies = Cache::remember('new_movies', now()->addMinutes(1), function () {
            return $this->movieService->getNewMoviesFromHDrezka();
        });

        return response()->json($movies);
    }

    public function show()
    {
        dd(1111);
    }
}
