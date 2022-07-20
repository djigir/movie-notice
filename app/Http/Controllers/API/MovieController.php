<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Movie\StoreRequest;
use App\Http\Resources\IndexMovieResource;
use App\Http\Resources\MovieResource;
use App\Models\Movie;
use Carbon\Carbon;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function index()
    {
        $movies = Movie::all()->sortByDesc('created_at');
        return IndexMovieResource::collection($movies);
    }


    public function create()
    {
        //
    }


    public function store(StoreRequest $request)
    {
        $data = $request->validated();

//        $data['release_year'] = Carbon::parse($data['release_date'])->format('Y-m-d');
        $movie = Movie::create($data);

        return new MovieResource($movie);
    }


    public function show(Movie $movie)
    {
        return $movie;
//        return new MovieResource($movie);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
        //
    }


    public function destroy($id)
    {
        //
    }
}
