<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Movie\StoreRequest;
use App\Http\Requests\Movie\UpdateRequest;
use App\Http\Resources\IndexMovieResource;
use App\Http\Resources\MovieResource;
use App\Models\Movie;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function index(Request $request)
    {
        $movies = Movie::where('title', 'LIKE', '%'.$request->get('search').'%')
            ->orWhere('description', 'LIKE', '%'.$request->get('search').'%')
            ->orderByDesc('created_at')
            ->paginate(7);
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
