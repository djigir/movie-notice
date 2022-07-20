<template>

    <div class="col-12">
        <div class="card">
            <div class="card-body tab-content">
                <div class="tab-pane active" id="movies">
                    <h6 class="text-center fw-bold">Фильмы</h6>
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
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="movie in movies">
                                <th scope="row">{{ movie.id }}</th>
                                <td>
                                    <a href="#">
                                        {{ movie.title }}
                                    </a>
                                </td>
                                <td>{{ movie.description }}</td>
                                <td>{{ movie.actors }}</td>
                                <td>
                                    <a href="">
                                        {{ movie.release_year }}
                                    </a>
                                </td>
                                <td>
                                    <a href="">
                                        {{ new Date(movie.created_at).toLocaleDateString() }}
                                    </a>
                                    /
                                    {{ new Date(movie.created_at).toLocaleTimeString([], {timeStyle: 'short'}) }}
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
    import { moment } from 'moment'

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
            }
        },


    }
</script>

<style scoped>

</style>
