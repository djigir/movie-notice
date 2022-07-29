<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Genre>
 */
class GenreFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $genres = [
            'Аниме',
            'Арт-хаус',
            'Биография',
            'Боевик',
            'Вестерн',
            'Военный',
            'Детектив',
            'Детский',
            'Документальный',
            'Драма',
            'Исторический',
            'Комедия',
            'Криминал',
            'Мелодрама',
            'Мистика',
            'Музыка',
            'Мюзикл',
            'Научная фантастика',
            'Приключения',
            'Романтика',
            'Семейный',
            'Спорт',
            'ТВ-шоу',
            'Триллер',
            'Ужасы',
            'Фантастика',
            'Фэнтези',
        ];

        $v = '';
        foreach ($genres as $genre) {
            $v = $genre;
        }

        return [
            'title' => $v,
        ];
    }
}
