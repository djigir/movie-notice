<template>

    <section class="movie-section py-5">
        <div class="row gx-5 justify-content-center ">
            <div class="col-lg-8 col-xl-6">
                <div class="text-center">
                    <h2 class="fw-bolder">Фильмы</h2>
                    <p class="lead fw-normal text-muted mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad.</p>
                    <router-link :to="{ name: 'movie.create' }" class="btn btn-primary add-movie-btn text-light">
                        Добавить Фильм
                    </router-link>
                </div>
            </div>
        </div>

        <div class="container my-sm-5 border p-0 bg-sec-light mt-5">
            <div id="content">
                <div class="bg-light p-2 px-md-4 px-3 shadow-sm">
                    <div class="d-flex align-items-center">
                        <div class="user-select-none">Показхано такое количестов из такого доделать</div>
                        <div class="fas fa-angle-right px-2"></div>
                        <div id="navigator" class="text-primary"></div>
                    </div>
                </div>
                <div class="d-sm-flex align-items-sm-center py-sm-3 px-md-3 location">

                    <input v-model="search" type="text" required placeholder="Введите название, описание или актера для поиска!" class="mx-sm-2 mx-3 my-sm-0 my-2 form-control border-1 add-todo-input bg-transparent rounded" style="max-width: 320px">


                    <select @click="sortColumn($event)" class="mx-md-2 mx-sm-1 mx-3 my-sm-0 my-2 form-control" id="sort-column-select" style="max-width: 200px">
                        <option value="created_at" selected>По дате добавления</option>
                        <option value="rating">По рейтингу</option>
                        <option value="release_year">По году выпуска</option>
                        <option value="is_viewed">(Не) Просмотренные</option>
                    </select>


                    <select @click="sortColumn($event)" class="mx-sm-2 mx-3 my-sm-0 my-2 form-control" id="sort-column-select" style="max-width: 200px">
                        <option value="created_at" selected>По дате добавления</option>
                        <option value="rating">По рейтингу</option>
                        <option value="release_year">По году выпуска</option>
                        <option value="is_viewed">(Не) Просмотренные</option>
                    </select>

                    <button @click.prevent="resetFilter()" class="btn btn-danger mx-3 my-sm-0 mb-2">Сбросить фильтр</button>
                </div>
                <div class="d-sm-flex">
                    <div class="me-sm-2">
                        <div id="filter" class="p-2 bg-light ms-md-4 ms-sm-2 border">
                            <div class="border-bottom h5 text-uppercase">Фильтр</div>
                            <div class="box border-bottom">
                                <div class="box-label text-uppercase d-flex align-items-center">Жанр <button class="btn ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#inner-box" aria-expanded="false" aria-controls="inner-box"> <span class="fas fa-plus"></span> </button> </div>
                                <div id="inner-box" class="collapse show">
                                    <select @change="genreFilter($event)" class="custom-select custom-select-sm btn my-2">
                                        <option value="all" selected class="fw-bold">Все</option>
                                        <option v-for="genre_option in genres_options" :value="genre_option.id">{{ genre_option.title }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="box border-bottom">
                                <div class="box-label text-uppercase d-flex align-items-center">Статус <button class="btn ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#property" aria-expanded="false" aria-controls="property"> <span class="fas fa-plus"></span> </button> </div>
                                <div id="property" class="collapse show">
                                    <div class="my-1">
                                        <label class="tick">Не просмотреные
                                            <input @change="changeIsViewedValue($event)" v-model="viewed" type="checkbox">
                                            <span class="check"></span>
                                        </label>
                                        <!-- TODO сделать аналог для  Просмотреные -->
                                        <label class="tick mt-2">Просмотреные
                                            <input @change="changeIsViewedValue($event)" v-model="viewed" type="checkbox">
                                            <span class="check"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="box">
                                <div class="box-label text-uppercase d-flex align-items-center">Год <button class="btn ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#amenities" aria-expanded="false" aria-controls="amenities"> <span class="fas fa-plus"></span> </button> </div>
                                <div id="amenities" class="collapse show">
                                    <div class="my-1">
                                        <label class="tick">Parking
                                            <input type="checkbox" checked="checked">
                                               <span class="check"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white p-2 border" id="hotels">
                        <div v-for="(movie, index) in movies.data" class="hotel py-2 px-2 pb-4 border-bottom">
                            <div class="row">
                                <div class="col-lg-3">
                                    <img :src="movie.image" alt="" class="hotel-img">
                                </div>
                                <div class="col-lg-9">
                                    <div class="d-md-flex align-items-md-center">
                                        <div class="name">
                                            <router-link :to="{name: 'movie.show', params: {id: movie.id}}">
                                                {{ movie.title }}
                                            </router-link>
<!--                                            <span class="city fw-bold"> ( {{ movie.release_year }} )</span>-->
                                        </div>
                                        <div :class="isViewedClass(movie.is_viewed)" class="ms-auto code fw-bold">
                                            {{ isViewedText2(movie.is_viewed) }}
                                        </div>
                                    </div>
                                    <div class="rating">
                                        <star-rating id="rating" class="rating-stars"
                                            v-model:rating="movie.rating"
                                             :read-only="true"
                                            :max-rating="10"
                                            :star-size="12"
                                        />
                                    </div>
                                    <div class="d-flex flex-column pt-1">
                                        <div>
                                            <span class="fw-bold">Год выхода:</span> {{ movie.release_year }}
                                        </div>
                                        <div>
                                            <span class="fw-bold">Описание:</span> {{ movie.description }}
                                        </div>
                                        <div>
                                            <span class="fw-bold">Актеры:</span> {{ movie.actors }}
                                        </div>
                                        <div>
                                            <span class="fw-bold">Добавленно: </span>
                                            <a href="">
                                                {{ new Date(movie.created_at).toLocaleDateString() }}
                                            </a>
                                            {{ new Date(movie.created_at).toLocaleTimeString([], {timeStyle: 'short'}) }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-end mt-4">
                                <router-link :to="{ name: 'movie.show', params: {id: movie.id} }" class="btn btn-success text-uppercase">
                                    Посмотреть
                                </router-link>
                                <router-link :to="{ name: 'movie.edit', params: {id: movie.id} }" class="btn enquiry text-uppercase mx-2">
                                    Редактировать
                                </router-link>
                            </div>
                        </div>
                        <!-- START  Pagination -->
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 offset-lg-3 d-flex mt-3">
                                    <ul class="pagination mx-auto">
                                        <LaravelVuePagination :data="movies" @pagination-change-page="getMovies" />
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- END  Pagination -->
                    </div>
                </div>
            </div>
        </div>
    </section>






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



<!--    <section class="py-5">-->
<!--        <div class="container px-5 my-5">-->
<!--            <div class="row gx-5 justify-content-center">-->
<!--                <div class="col-lg-8 col-xl-6">-->
<!--                    <div class="text-center">-->
<!--                        <h2 class="fw-bolder">Фильмы</h2>-->
<!--                        <p class="lead fw-normal text-muted mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad.</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="row gx-5">-->
<!--                <div v-for="(movie, index) in movies.data" class="col-lg-4 mb-5">-->
<!--                    <div class="card h-100 shadow border-0">-->
<!--                        <img class="card-img-top" :src="movie.image" alt="movie-image">-->
<!--                        <div class="card-body p-4">-->
<!--                            <div class="badge bg-primary bg-gradient rounded-pill mb-2">News</div>-->
<!--                            <a class="text-decoration-none link-dark stretched-link" href="#!">-->
<!--                                <h5 class="card-title mb-3">-->
<!--                                    {{ movie.title }}</h5>-->
<!--                            </a>-->
<!--                            <p class="card-text mb-0">-->
<!--                                {{ movie.description }}-->
<!--                            </p>-->
<!--                        </div>-->
<!--                        <div class="card-footer p-4 pt-0 bg-transparent border-top-0">-->
<!--                            <div class="d-flex align-items-end justify-content-between">-->
<!--                                <div class="d-flex align-items-center">-->

<!--                                    <div class="small">-->
<!--                                        <div class="fw-bold">Kelly Rowan</div>-->
<!--                                        <div class="text-muted">March 12, 2022 · 6 min read</div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            &lt;!&ndash; Call to action&ndash;&gt;-->
<!--            <aside class="bg-primary bg-gradient rounded-3 p-4 p-sm-5 mt-5">-->
<!--                <div class="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">-->
<!--                    <div class="mb-4 mb-xl-0">-->
<!--                        <div class="fs-3 fw-bold text-white">New products, delivered to you.</div>-->
<!--                        <div class="text-white-50">Sign up for our newsletter for the latest updates.</div>-->
<!--                    </div>-->
<!--                    <div class="ms-xl-4">-->
<!--                        <div class="input-group mb-2">-->
<!--                            <input class="form-control" type="text" placeholder="Email address..." aria-label="Email address..." aria-describedby="button-newsletter">-->
<!--                            <button class="btn btn-outline-light" id="button-newsletter" type="button">Sign up</button>-->
<!--                        </div>-->
<!--                        <div class="small text-white-50">We care about privacy, and will never share your data.</div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </aside>-->
<!--        </div>-->
<!--    </section>-->



</template>

<script>
    import LaravelVuePagination from 'laravel-vue-pagination';
    import StarRating from 'vue-star-rating'

    export default {
        name: "Index",

        components: { LaravelVuePagination, StarRating },

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

            // удалить потом
            isViewedText(movie) {
                return movie.is_viewed === 1 ? 'Да' : 'Нет'
            },

            isViewedText2(is_viewed) {
                return is_viewed === 1 ? 'Просмотрено' : 'Не просмотрено'
            },

            isViewedClass(is_viewed) {
                return is_viewed === 1 ? 'text-success' : 'text-danger'
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

    /* Range style */

    .range-slider {
        width: 300px;
        margin: auto;
        text-align: center;
        position: relative;
        height: 6em;
    }

    .range-slider input[type=range] {
        position: absolute;
        left: 0;
        bottom: 0;
    }

    input[type=number] {
        border: 1px solid #ddd;
        text-align: center;
        font-size: 1.6em;
        -moz-appearance: textfield;
    }

    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    input[type=number]:invalid,
    input[type=number]:out-of-range {
        border: 2px solid #ff6347;
    }

    input[type=range] {
        -webkit-appearance: none;
        width: 100%;
    }

    input[type=range]:focus {
        outline: none;
    }

    input[type=range]:focus::-webkit-slider-runnable-track {
        background: #2497e3;
    }

    input[type=range]:focus::-ms-fill-lower {
        background: #2497e3;
    }

    input[type=range]:focus::-ms-fill-upper {
        background: #2497e3;
    }

    input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 5px;
        cursor: pointer;
        animate: 0.2s;
        background: #2497e3;
        border-radius: 1px;
        box-shadow: none;
        border: 0;
    }

    input[type=range]::-webkit-slider-thumb {
        z-index: 2;
        position: relative;
        box-shadow: 0px 0px 0px #000;
        border: 1px solid #2497e3;
        height: 18px;
        width: 18px;
        border-radius: 25px;
        background: #a1d0ff;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -7px;
    }


    #navbar-toggler-icon {
        left: 7%;
        height: 40px;
        width: 40px;
        text-align: center;
        background: #1b1b1b;
        border-radius: 3px;
        cursor: pointer;
        z-index: 5;
        transition: left 0.4s ease
    }

    #navbar-toggler-icon.click {
        position: absolute;
        left: 210px;
        top: 0;
        background-color: #747474
    }

    #navbar-toggler-icon.click span:before {
        content: '\f00d'
    }

    .sidebar {
        position: absolute;
        width: 220px;
        height: 100%;
        background-color: #161616;
        color: #fff;
        transform: translateX(-100%) scale(0);
        left: 0;
        transition: transform .2s ease-in-out
    }

    .sidebar.show {
        transform: translateX(0%) scale(1)
    }

    #side-nav {
        float: left;
        width: 18%
    }

    #content {
        float: right;
        width: 82%
    }

    a {
        text-decoration: none;
        color: #222
    }

    #content .user-select-none {
        user-select: none
    }

    nav ul .brand img {
        object-fit: contain;
        width: 100px;
        height: 70px
    }

    nav ul {
        height: 100%;
        width: 100%;
        list-style: none;
        padding: 0;
        margin-bottom: 0
    }

    nav ul li {
        line-height: 50px
    }

    nav ul li a {
        color: #e5e5e5;
        text-decoration: none;
        display: block;
        width: 100%;
        padding-left: 20px;
        border-left: 4px solid transparent
    }

    nav ul li a:hover {
        color: #fff;
        background-color: #2e2e2e
    }

    nav ul li.active a {
        color: #ffff;
        background-color: #747474;
        border-left: 4px solid #ffa500
    }

    .fa-phone {
        transform: rotate(90deg)
    }

    .location input[type="text"] {
        max-width: 200px;
        border-radius: 0px;
        border: 1px solid #444
    }

    .location input[type="text"]::placeholder {
        color: #444
    }

    .location input[type="text"]:focus,
    input[type="submit"]:focus {
        box-shadow: none
    }

    input[type="submit"] {
        border-radius: 0;
        width: 120px
    }

    .box {
        padding: 10px
    }

    .btn:focus {
        box-shadow: none
    }

    .box-label {
        color: #11698e;
        font-size: 0.9rem;
        font-weight: 800
    }

    .box-label .btn {
        padding: 0;
        font-size: 0.8rem
    }

    label {
        cursor: pointer
    }

    .tick {
        display: block;
        position: relative;
        padding-left: 23px;
        cursor: pointer;
        font-size: 0.9rem;
        margin: 0
    }

    .tick input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0
    }

    .check {
        position: absolute;
        top: 1px;
        left: 0;
        height: 18px;
        width: 18px;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 3px
    }

    .tick:hover input~.check {
        background-color: #f3f3f3
    }

    .tick input:checked~.check {
        background-color: #ffffff
    }

    .check:after {
        content: "";
        position: absolute;
        display: none
    }

    .tick input:checked~.check:after {
        display: block;
        transform: rotate(45deg) scale(1)
    }

    .tick .check:after {
        left: 6px;
        top: 2px;
        width: 5px;
        height: 10px;
        border: solid rgb(0, 0, 0);
        border-width: 0 3px 3px 0;
        transform: rotate(45deg) scale(2)
    }

    .hotel .hotel-img {
        width: 200px;
        object-fit: contain
    }

    .hotel .name {
        font-size: 1.2rem;
        font-weight: 700
    }

    .hotel .name .city {
        font-weight: normal;
        font-size: 0.85rem
    }

    /*#filter {*/
    /*    width: 200px*/
    /*}*/

    .hotel .fas,
    .hotel .far {
        font-size: .8rem
    }

    .hotel .fas.fa-star {
        color: #ffa500
    }

    .hotel .tags {
        font-size: 0.8rem
    }

    .hotel .btn {
        width: 150px;
        border-radius: 0
    }

    .hotel .btn.enquiry {
        background-color: #ff761b;
        color: #fff
    }

    .hotel .btn.enquiry:hover {
        background-color: #fc771fef
    }

    #hotels {
        width: 100%
    }

    @media(min-width: 1399.6px) {
        #navbar-toggler-icon {
            display: none
        }
    }

    @media(max-width: 1399.5px) {
        #navbar-toggler-icon {
            display: block;
            z-index: 11
        }

        #side-nav {
            float: none;
            width: 250px;
            background-color: #161616f5;
            z-index: 10
        }

        #content {
            float: none;
            width: 100%
        }
    }

    @media(max-width: 1199.5px) {
        .hotel .hotel-img {
            width: 170px
        }

        #side-nav {
            height: initial
        }
    }

    @media(max-width: 767.5px) {
        .hotel .city {
            display: block
        }

        .hotel .btn {
            width: 120px;
            font-size: 0.85rem
        }

        input[type="submit"] {
            width: 100px;
            font-size: 0.9rem;
            margin-right: 10px
        }
    }

    @media(max-width: 575.5px) {

        #filter,
        #hotels {
            width: 95%;
            margin: 15px
        }
    }

    @media(max-width: 410px) {

        #filter,
        #hotels {
            width: 93%;
            margin: 10px
        }
    }

    /* delete sr-only class in pagination */
    ::v-deep .sr-only{display:none !important}
</style>
