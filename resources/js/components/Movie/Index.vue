<template>

    <div class="col-12">
        <div class="card">
            <div class="card-body tab-content">
                <div class="tab-pane active" id="movies">

<!--                    <div class="container">-->
<!--                        <div class="row">-->
<!--                            <div class="col">-->
<!--                                <h6 class="text-center fw-bold">Фильмы</h6>-->
<!--                            </div>-->
<!--                            <div class="col">-->
<!--                                <router-link :to="{ name: 'movie.create' }" class="btn btn-success">-->
<!--                                    Добавить Фильм-->
<!--                                </router-link>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                     </div>-->

                    <div class="app-page-title">
                        <div class="page-title-wrapper">
                            <div class="page-title-heading">
                                <div class="page-title-icon">
                                    <i class="pe-7s-car icon-gradient bg-mean-fruit"></i>
                                </div>
                                <div>Analytics Dashboard
                                    <div class="page-title-subheading">This is an example dashboard created using build-in elements and components.</div>
                                </div>
                            </div>
                            <div class="page-title-actions">
                                <button type="button" data-toggle="tooltip" title="" data-placement="bottom" class="btn-shadow mr-3 btn btn-dark" data-original-title="Example Tooltip">
                                    <i class="fa fa-star"></i>
                                </button>
                                <div class="d-inline-block dropdown">
                                    <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn-shadow dropdown-toggle btn btn-info">
<span class="btn-icon-wrapper pr-2 opacity-7">
<i class="fa fa-business-time fa-w-20"></i>
</span>
                                        Buttons
                                    </button>
                                    <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right">
                                        <ul class="nav flex-column">
                                            <li class="nav-item">
                                                <a class="nav-link">
                                                    <i class="nav-link-icon lnr-inbox"></i>
                                                    <span> Inbox</span>
                                                    <div class="ml-auto badge badge-pill badge-secondary">86</div>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link">
                                                    <i class="nav-link-icon lnr-book"></i>
                                                    <span> Book</span>
                                                    <div class="ml-auto badge badge-pill badge-danger">5</div>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link">
                                                    <i class="nav-link-icon lnr-picture"></i>
                                                    <span> Picture</span>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a disabled="" class="nav-link disabled">
                                                    <i class="nav-link-icon lnr-file-empty"></i>
                                                    <span> File Disabled</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div> </div>
                    </div>



                    <hr>
                        <table class="table text-center">
                            <thead>
                            <tr>
                                <th scope="col">№</th>
                                <th scope="col">Название</th>
                                <th scope="col">Описание</th>
                                <th scope="col">Актеры</th>
                                <th scope="col">Год выпуска</th>
                                <th scope="col">Добавленно</th>
                                <th colspan="3">Действия</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="movie in movies">
                                <th scope="row">{{ movie.id }}</th>
                                <td>
                                    <router-link :to="{name: 'movie.show', params: {id: movie.id}}">
                                        {{ movie.title }}
                                    </router-link>
                                </td>
                                <td>{{ movie.description }}</td>
                                <td>{{ movie.actors }}</td>
                                <td>
                                    <a href="#">
                                        {{ movie.release_year }}
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

</template>

<script>

    export default {
        name: "Index",

        data() {
            return {
                movies: null,
            }
        },

        mounted() {
            this.getMovies()
        },

        methods: {
            getMovies() {
                axios.get('api/movie')
                .then(res => {
                    this.movies = res.data.data
                })
            },

            deleteMovie(id) {
                axios.delete(`/api/movie/${id}`)
                .then(res => {
                    this.getMovies()
                })
            }
        },


    }
</script>

<style scoped>
    .app-theme-white .app-page-title {
        background: rgba(255,255,255,.45);
    }

    .app-page-title {
        padding: 30px;
        margin: -30px -30px 30px;
        position: relative;
    }
    
</style>
