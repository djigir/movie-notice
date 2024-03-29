<?php

namespace Database\Seeders;

use App\Models\Genre;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
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

        foreach ($genres as $genre) {
            Genre::create(['title' => $genre]);
        }

        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
