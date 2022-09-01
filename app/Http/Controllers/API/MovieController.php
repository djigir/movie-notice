<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\Movie\IndexRequest;
use App\Http\Requests\API\Movie\StoreRequest;
use App\Http\Requests\API\Movie\UpdateRequest;
use App\Http\Resources\IndexMovieResource;
use App\Http\Resources\MovieResource;
use App\Models\Movie;
use App\Service\MovieService;

class MovieController extends Controller
{

    /**
     * @var MovieService
     */
    private MovieService $movieService;

    public function __construct(MovieService $movieService)
    {
        $this->movieService = $movieService;
    }

    public function index(IndexRequest $request)
    {
        $data = $request->validated();
        $movies = $this->movieService->showMovies($data);

        return IndexMovieResource::collection($movies);
    }


    public function store(StoreRequest $request)
    {
        $data = $request->validated();
        $this->movieService->movieStore($data);

        return response([]);
    }


    public function show(Movie $movie)
    {
        return new MovieResource($movie);
    }


    public function update(UpdateRequest $request, Movie $movie)
    {
        $data = $request->validated();
        $this->movieService->movieUpdate($data, $movie);

        return response([]);
    }


    public function destroy(Movie $movie)
    {
        $movie->delete();
        return response([]);
    }

    public function yearsRange()
    {
        $maxYear = auth()->user()->movies()->orderBy('release_year', 'DESC')->first()->release_year;
        $minYear = auth()->user()->movies()->orderBy('release_year', 'ASC')->first()->release_year;

        $result = [
            'years' => [
                'max' => $maxYear,
                'min' => $minYear
            ]
        ];

        return response()->json($result);
    }
}
