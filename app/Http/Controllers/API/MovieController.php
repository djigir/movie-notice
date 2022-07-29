<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Filters\MovieFilter;
use App\Http\Requests\API\Movie\IndexRequest;
use App\Http\Requests\API\Movie\StoreRequest;
use App\Http\Requests\API\Movie\UpdateRequest;
use App\Http\Resources\IndexMovieResource;
use App\Http\Resources\MovieResource;
use App\Models\Movie;
use App\Service\MovieService;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function __construct(MovieService $movieService)
    {
        $this->movieService = $movieService;
    }

    public function index(IndexRequest $request)
    {
        $movies = Movie::with('genres')
            ->where('title', 'LIKE', '%'.$request->get('search').'%')
            ->orWhere('description', 'LIKE', '%'.$request->get('search').'%')
//            ->orderByDesc('created_at')
            ->orderBy($request->get('sort_column'), $request->get('sort_direction'))
            ->paginate(7);

//        $data = $request->validated();
//
//        $filter = app()->make(MovieFilter::class, ['queryParams' => array_filter($data)]);
//
//        $movies = Movie::filter($filter)->paginate(4, ['*'], 'page', $data['page']);

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
}
