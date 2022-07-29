<template>

<!-- container если что поменять епросто без флуид -->
    <div class="container-fluid m-5 p-2 rounded mx-auto bg-light shadow">
        <!-- App title section -->
        <div class="row m-1 p-4">
            <div class="col">
                <div class="p-1 h1 text-primary text-center mx-auto display-inline-block">
                    <h2 class="text-center fw-bold">Фильмы</h2>
                </div>
            </div>
        </div>
        <!-- Create todo section -->
        <div class="row m-1 p-3">
            <div class="col col-11 mx-auto">
                <div class="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                    <div class="col">
                        <input v-model="search" class="form-control search-inp form-control-lg border-0 add-todo-input bg-transparent rounded" type="text" placeholder="Введите название, описание или актера для поиска! ">
                    </div>
                </div>
            </div>
        </div>
        <div class="p-2 mx-4 border-black-25 border-bottom"></div>
        <!-- View options section -->
        <div class="row m-1 p-3 px-5 justify-content-end">
            <div class="col-auto d-flex align-items-center">
                <label class="text-secondary my-2 pr-2 view-opt-label">Жанр:</label>
                <!-- genre  -->
                <select @change="genreFilter($event)" class="custom-select custom-select-sm btn my-2">
                    <option value="all" selected class="fw-bold">Все</option>
                    <option v-for="genre_option in genres_options" :value="genre_option.id">{{ genre_option.title }}</option>
                </select>
            </div>
            <div class="col-auto d-flex align-items-center">
                <label class="text-secondary my-2 pr-2 view-opt-label">Фильтр:</label>
                <select @click="sortColumn($event)" class="custom-select custom-select-sm btn my-2">
                    <option value="all" selected>Все</option>
                    <option value="is_viewed_false">Не просмотренные</option>
                    <option value="created_at">По дате добавления</option>
                    <option value="release_year">По году выпуска</option>
                    <option value="is_viewed_true">Просмотренные</option>

                </select>
            </div>
            <div class="col-auto d-flex align-items-center px-1 pr-3">
                <label class="text-secondary my-2 pr-2 view-opt-label">Сортировка:</label>
                <select @change="sortDirection($event)" class="custom-select custom-select-sm btn my-2">
                    <option value="desc" selected>По убыванию</option>
                    <option value="asc">По возрастанию</option>

                </select>
            </div>

            <div class="col-auto d-flex align-items-center px-1 pr-3" style="margin-left: 1rem;">
                <router-link :to="{ name: 'movie.create' }" class="btn btn-primary">
                    Добавить Фильм
                </router-link>
            </div>

        </div>
        <!-- Todo list section -->
        <div class="row mx-1 px-5 pb-3 w-80">
            <div class="col mx-auto">
                <!-- Todo Item 1 -->
                <div class="row px-3 align-items-center todo-item rounded">

                    <div class="table-responsive mt-4">
                        <table class="table text-center table-hover">
                            <thead>
                            <tr>
                                <th scope="col">№</th>
                                <th scope="col">Название</th>
                                <th scope="col">Жанры</th>
                                <th scope="col">Картинка</th>
                                <th scope="col">Описание</th>
                                <th scope="col">Актеры</th>
                                <th scope="col">Год выпуска</th>
                                <th scope="col">Просмотренно</th>
                                <th scope="col">Рейтинг</th>
                                <th scope="col">Добавлено</th>
                                <th colspan="3">Действия</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(movie, index) in movies.data">
                                <th scope="row">{{ index+1 }}</th>
                                <td>
                                    <router-link :to="{name: 'movie.show', params: {id: movie.id}}">
                                        {{ movie.title }}
                                    </router-link>
                                </td>
                                <td>
                                    <!-- TODO Посмотреть что можно сделать по стилям убрать br жедательно! -->
                                    <router-link to="/" v-for="genre in movie.genres">
                                        {{ genre.title }}
                                        <br>
                                    </router-link>
                                </td>
                                <td>
                                    <img :src="movie.image" alt="movie-image" width="150">
                                </td>
                                <td>{{ movie.description }}</td>
                                <td>{{ movie.actors }}</td>
                                <td>
                                    <a href="#">
                                        {{ movie.release_year }}
                                    </a>
                                </td>
                                <td>
                                    <a :class="movie.is_viewed === 1 ? 'text-success' : 'text-danger'" class="fw-bold" href="#">
                                        {{ isViewedText(movie) }}
                                    </a>
                                </td>
                                <td>
                                    <a href="#">
                                        {{ movie.rating }}
                                    </a>
                                </td>
                                <td>
                                    <a href="">
                                        {{ new Date(movie.created_at).toLocaleDateString() }}
                                    </a>
                                    |{{ new Date(movie.created_at).toLocaleTimeString([], {timeStyle: 'short'}) }}
                                </td>
                                <td>
                                    <router-link :to="{name: 'movie.show', params: {id: movie.id}}" style="color: #0571ed">
                                        <i class="fa-solid fa-eye"></i>
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="{name: 'movie.edit', params: {id: movie.id}}" style="color: #f0c905">
                                        <i class="fa-solid fa-pen"></i>
                                    </router-link>
                                </td>
                                <td>
                                    <a @click.prevent="deleteMovie(movie.id)" style="color: #ed0707">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!-- START Pagination -->
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3 d-flex">
                    <ul class="pagination mx-auto">
                        <LaravelVuePagination :data="movies" @pagination-change-page="getMovies" />
                    </ul>
                </div>
            </div>
        </div>
        <!-- END  Pagination -->
    </div>



</template>

<script>
    import LaravelVuePagination from 'laravel-vue-pagination';

    export default {
        name: "Index",

        components: { LaravelVuePagination },

        data() {
            return {
                movies: {},
                genres_options: [],
                selected_genre: [],
                search: null,
                sort_column: 'created_at',
                sort_direction: 'desc',
            }
        },

        mounted() {
            this.getMovies()
            this.getGenres()
        },

        watch: {
            search(after, before) {
                this.getMovies()
            }
        },

        methods: {
            getMovies(page = 1) {
                axios.get(`api/movie?page=${page}`, {
                    params: {
                        search: this.search,
                        sort_column: this.sort_column,
                        sort_direction: this.sort_direction,
                        // selected_genre: [this.selected_genre]

                    }
                })
                .then(res => {
                    this.movies = res.data
                })
            },


            sortColumn(event) {
                console.log(event.target.value)
            },

            sortDirection(event) {
                console.log(event.target.value)

                // console.log(event.target.value)
                // this.sort_column = event.target.value
                // this.getMovies()
            },

            genreFilter(event) {
                this.selected_genre = event.target.value
                this.getMovies()
            },

            getGenres() {
                axios.get('/api/genre')
                .then( res => {
                    this.genres_options = res.data.data
                })
            },

            isViewedText(movie) {
                return movie.is_viewed === 1 ? 'Да' : 'Нет'
            },

            deleteMovie(id) {
                axios.delete(`/api/movie/${id}`)
                .then(res => {
                    this.getMovies()
                })
            },
        },


    }
</script>

<style scoped>
    /* TODO убрать подсветку инпута ПОИСКА при клике   */
    .view-opt-label {
        margin-right: 8px;

    }

    .custom-select-sm {
        border: 1px solid #0D6EFD;
    }
</style>
