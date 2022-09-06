<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Service\MovieService;
use Illuminate\Http\Request;
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
        $movies = Cache::remember('new_movies', now()->addWeek(), function () {
            return $this->movieService->getNewMoviesFromHDrezka();
        });

        return response()->json($movies);
    }

    public function show(Request $request)
    {
        dd(11111);
        return response()->json(11111);
    }
}
