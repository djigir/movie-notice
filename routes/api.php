<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(\App\Http\Controllers\API\ParserMovieController::class)
    ->prefix('parse')
    ->group(function () {
        Route::get('movies', 'index');
        Route::get('new-movie-show/{link}', [\App\Http\Controllers\API\ParserMovieController::class, 'show']);
    });

Route::group(['middleware' => 'auth:sanctum'], function () {

    Route::get('/genre', [\App\Http\Controllers\API\GenreController::class, 'index']);

    Route::get('/years-range', [\App\Http\Controllers\API\MovieController::class, 'yearsRange']);

    Route::resource('/profile', \App\Http\Controllers\API\ProfileController::class)
        ->except(['create', 'store', 'edit']);

    Route::resource('movie', \App\Http\Controllers\API\MovieController::class)
        ->except(['create', 'edit']);
});

