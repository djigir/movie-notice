<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Movie\StoreRequest;
use App\Http\Requests\Movie\UpdateRequest;
use App\Http\Resources\IndexMovieResource;
use App\Http\Resources\MovieResource;
use App\Models\Movie;

class MovieController extends Controller
{
    public function index()
    {
        $movies = Movie::all()->sortByDesc('created_at');
        return IndexMovieResource::collection($movies);
    }


    public function store(StoreRequest $request)
    {
        $data = $request->validated();
        Movie::create($data);

        return response([]);
    }


    public function show(Movie $movie)
    {
        return new MovieResource($movie);
    }


    public function update(UpdateRequest $request, Movie $movie)
    {
        $data = $request->validated();
        $movie->update($data);

        return response([]);
    }


    public function destroy(Movie $movie)
    {
        $movie->delete();
        return response([]);
    }
}
