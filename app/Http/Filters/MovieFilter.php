<?php


namespace App\Http\Filters;


use Illuminate\Database\Eloquent\Builder;

class MovieFilter extends AbstractFilter
{
    const SELECTED_GENRE = 'selected_genre';

    protected function getCallback(): array
    {
        return [
            self::SELECTED_GENRE => [$this, 'selected_genre'],
        ];
    }

    protected function selected_genre(Builder $builder, $value)
    {
        $builder->whereHas('genres', function ($b) use ($value) {
            $b->whereIn('genre_id', $value);
        });
    }
}
