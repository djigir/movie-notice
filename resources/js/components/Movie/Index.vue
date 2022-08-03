<template>

    <div class="container-fluid m-5 p-2 rounded mx-auto bg-light shadow">
        <!-- App title section -->
        <div class="row m-1 p-4">
            <div class="col">
                <!-- text-right -->
                <div class="p-1 h1 text-primary mx-auto display-inline-block">
                    <h2 class="text-center fw-bold">Фильмы</h2>
                    <router-link :to="{ name: 'movie.create' }" class="btn btn-primary add-movie-btn">
                        Добавить Фильм
                    </router-link>
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
                <input @change="changeIsViewedValue($event)" v-model="viewed" type="checkbox" class="form-check-input" id="is_viewed">
                <label class="form-check-label" for="is_viewed">Только не просмотреные</label>
            </div>
            <div class="col-auto d-flex align-items-center">
                <select @change="genreFilter($event)" class="custom-select custom-select-sm btn my-2">
                    <option value="all" selected class="fw-bold">Все</option>
                    <option v-for="genre_option in genres_options" :value="genre_option.id">{{ genre_option.title }}</option>
                </select>
            </div>
            <div class="col-auto d-flex align-items-center">
                <select @click="sortColumn($event)" class="custom-select custom-select-sm btn my-2" id="sort-column-select">
                    <option value="created_at" selected>По дате добавления</option>
                    <option value="rating">По рейтингу</option>
                    <option value="release_year">По году выпуска</option>
                    <option value="is_viewed">(Не) Просмотренные</option>
                </select>
            </div>
            <div class="col-auto d-flex align-items-center px-1 pr-3">
                <select @change="sortDirection($event)" class="custom-select custom-select-sm btn my-2" id="sort-direction-select">
                    <option value="desc" selected>По убыванию</option>
                    <option value="asc">По возрастанию</option>
                </select>
            </div>

            <div class="col-auto d-flex align-items-center px-1 pr-3" style="margin-left: 1rem;">
                <button @click.prevent="resetFilter()" class="btn btn-secondary">Сбросить</button>
            </div>

        </div>
        <!-- list section -->
        <div class="row mx-1 px-5 pb-3 w-80">
            <div class="col mx-auto">
                <!-- Item 1 -->
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
                                    <br>
                                    {{ new Date(movie.created_at).toLocaleTimeString([], {timeStyle: 'short'}) }}
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
                genre: null,
                search: '',
                sort_column: 'created_at',
                sort_direction: 'desc',
                viewed: false,
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
                        genre: this.genre,
                        viewed: this.viewed
                    }
                })
                .then(res => {
                    this.movies = res.data
                })
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


            sortColumn(event) {
                this.sort_column = event.target.value
                this.getMovies()
            },

            sortDirection(event) {
                this.sort_direction = event.target.value
                this.getMovies()
            },

            genreFilter(event) {
                this.genre = event.target.value
                this.getMovies()
            },

            changeIsViewedValue() {
                this.getMovies()
            },

            resetFilter() {
                this.genres_options = this.getGenres()
                this.genre = 'all'
                this.search = ''
                this.sort_column = 'created_at'
                this.sort_direction = 'desc'
                this.viewed = false
                // reset selected value in layout
                document.getElementById('sort-column-select').value = this.sort_column
                document.getElementById('sort-direction-select').value = this.sort_direction

                this.getMovies()
            },
        },

    }
</script>

<style scoped>
    /* TODO убрать подсветку инпута ПОИСКА при клике   */
    .view-opt-label {
        margin-right: 8px;

    }

    .add-movie-btn{
        margin-left:20px;
    }

    #is_viewed {
        margin-top: 0!important;
        margin-right: 5px;
    }

    .custom-select-sm {
        border: 1px solid #0D6EFD;
    }
</style>
