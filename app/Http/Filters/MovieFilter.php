<?php


namespace App\Http\Filters;


use Illuminate\Database\Eloquent\Builder;

class MovieFilter extends AbstractFilter
{
    const GENRE = 'genre';
    const VIEWED = 'viewed';
    const SEARCH = 'search';

    protected function getCallback(): array
    {
        return [
            self::GENRE => [$this, 'genre'],
            self::VIEWED => [$this, 'viewed'],
            self::SEARCH => [$this, 'search']
        ];
    }

    protected function genre(Builder $builder, $value)
    {
        if ($value !== 'all') {
            $builder->whereHas('genres', function ($b) use ($value) {
                $b->where('genre_id', $value);
            });
        }
    }

    protected function viewed(Builder $builder, $value)
    {
        /** check "VALUE" need exactly as a "STRING" because it comes from front-end like "STRING" **/
        if ($value == 'false') {
            $builder->where('is_viewed', 0);
        }

        if ($value == 'true') {
            $builder->where('is_viewed', 1);
        }
    }

    protected function search(Builder $builder, $value)
    {
        // TODO исправить поиск если нажмимаю "Показать только не просмотреные" при поиске показывает и те и те
        $builder->where('title', 'LIKE', '%'.$value.'%')
            ->orWhere('description', 'LIKE', '%'.$value.'%')
            ->orWhere('actors', 'LIKE', '%'.$value.'%');
    }


}
