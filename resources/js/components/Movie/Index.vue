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
                        <div class="user-select-none">
                            <strong>Всего: </strong>{{ movies_total }}
                            |
                            <strong>Показано: </strong>{{ movies_to === null ? 0 : movies_to }}
                            <strong>Из: </strong>{{ movies_total }}
                        </div>
                        <div class="fas fa-angle-right px-2"></div>
                        <div id="navigator" class="text-primary"></div>
                    </div>
                </div>
                <div class="d-sm-flex align-items-sm-center py-sm-3 px-md-3 location">

                    <input v-model="search" type="text" required placeholder="Поиск (название, описание или актер)" class="mx-sm-2 mx-3 my-sm-0 my-2 form-control border-1 add-todo-input bg-transparent rounded" style="max-width: 330px">


                    <select @click="sortColumn($event)" class="mx-md-5 mx-sm-1 mx-3 my-sm-0 my-2 form-control" id="sort-column-select" style="max-width: 200px">
                        <option value="created_at" selected>По дате добавления</option>
                        <option value="rating">По рейтингу</option>
                        <option value="release_year">По году выпуска</option>
                        <option value="is_viewed">(Не) Просмотренные</option>
                    </select>

                    <select @change="sortDirection($event)" class="mx-sm-2 mx-3 my-sm-0 my-2 form-control" id="sort-direction-select" style="max-width: 200px">
                        <option value="desc" selected>По убыванию</option>
                        <option value="asc">По возрастанию</option>
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
                                        </div>
                                        <div :class="isViewedClass(movie.is_viewed)" class="ms-auto code fw-bold">
                                            {{ isViewedText(movie.is_viewed) }}
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
                                            <span class="fw-bold">Жанры: </span>
                                            <span v-for="genre in movie.genres" class="genre">
                                                <router-link to="/">
                                                    {{ genre.title }}
                                                </router-link>
                                            </span>
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
                                            | {{ new Date(movie.created_at).toLocaleTimeString([], {timeStyle: 'short'}) }}
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
                movies_total: null,
                movies_to: null,
            }
        },

        mounted() {
            this.getMovies()
            this.getGenres()
        },

        // updated() {
        //     this.selectedFilterOptions()
        // },

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

                    this.movies_total = res.data.meta.total
                    this.movies_to = res.data.meta.to
                })
            },

            getGenres() {
                axios.get('/api/genre')
                .then( res => {
                    this.genres_options = res.data.data
                })
            },

            isViewedText(is_viewed) {
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

            // selectedFilterOptions() {
            //     // console.log(this.genre, this.search, this.sort_column, this.sort_direction, this.viewed)
            //     // this.selected_filter_options = e.title
            //     console.log(this.genre)
            //
            //     let genre = 'Все'
            //     let search = this.search
            //     let sort_column = 'По дате добавления'
            //     let sort_direction = 'По убыванию'
            //     let is_viewed = 'Все'
            //     let years = 'Все'
            //
            //     this.selected_filter_options = `Жанр: ${genre},
            //     Поиск по: ${search},
            //     Сортировка: ${sort_column},
            //     Тип сортировки: ${sort_direction},
            //     Статус: ${is_viewed},
            //     Годы: ${years}`
            //
            //     this.genres_options.forEach(element => {
            //         if (this.genre != null && element.id === this.genre) {
            //             return this.selected_filter_options = element.title
            //         }
            //     })
            //
            // },

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
        border: 1px solid gray;
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
        /*text-decoration: none;*/
        color: #222
    }

    a:hover {
        color: gray;
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
            width: 140px;
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

    /* add comma after genre title */
    .genre + .genre:before {
        content: ", ";
    }

    .name a{
        text-decoration: none;
    }
</style>
