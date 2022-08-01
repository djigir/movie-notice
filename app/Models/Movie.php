<?php

namespace App\Models;

use App\Models\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;
    use Filterable;

    protected $table = 'movies';
    protected $guarded = false;

    protected $with = ['genres'];

    /* Relations */
    public function genres()
    {
        return $this->belongsToMany(
            Genre::class,
            'movie_genres',
            'movie_id',
            'genre_id'
        );
    }
}
