<template>

    <section class="show-movie" v-if="movie">

        <!-- TODO  -->

        <div class="col-2 mb-4">
            <router-link class="btn btn-block btn-warning" :to="{name: 'movie.edit', params: {id: this.movie.id}}">
                Редактировать
            </router-link>
        </div>

        <div class="col-2 mb-4">
            <button class="btn btn-block btn-danger">Удалить</button>
        </div>
        <!-- TODO  -->

        <div class="container-fluid m-5 p-2 rounded mx-auto bg-light shadow">
        <!-- App title section -->
        <div class="row m-1 p-4">
            <div class="col">
                <div class="p-1 h1 text-primary text-center mx-auto display-inline-block">
                    <h2 class="text-center fw-bold">Страница фильма:
                        <strong class="text-dark">{{ this.movie.title }}</strong>
                    </h2>
                </div>
            </div>
        </div>
        <!--hr -->
        <div class="p-2 mx-4 border-black-25 border-bottom"></div>


            <div class="card-body table-responsive">
                <table class="table table-hover text-nowrap">
                    <tbody>
                    <tr class="text-center">
                        <td>ID</td>
                        <td>{{ this.movie.id }}</td>
                    </tr>
                    <tr class="text-center">
                        <td>Название</td>
                        <td>{{ this.movie.title }}</td>
                    </tr>
                    <tr class="text-center">
                        <td style="vertical-align: middle;">Жанры</td>
                        <td>
                            <span v-for="genre in this.movie.genres">
                                {{ genre.title }}
                                <br>
                            </span>
                        </td>
                    </tr>
                    <tr class="text-center">
                        <td>Описание</td>
                        <td>{{ this.movie.description }}</td>
                    </tr>
                    <tr class="text-center">
                        <td>Актеры</td>
                        <td>{{ this.movie.actors }}</td>
                    </tr>
                    <tr class="text-center">
                        <td>Год выпуска</td>
                        <td>{{ this.movie.release_year }}</td>
                    </tr>
                    <tr class="text-center">
                        <td>Просмотрено</td>
                        <td :class="this.movie.is_viewed === 1 ? 'text-success' : 'text-danger'" class="fw-bold">
                            {{ isViewedText(this.movie) }}
                        </td>
                    </tr>
                    <tr class="text-center">
                        <td>Рейтинг</td>
                        <td>{{ this.movie.rating }}</td>
                    </tr>
                    <tr class="text-center">
                        <td>Дата создания</td>
                        <td>
                            {{ new Date(this.movie.created_at).toLocaleDateString() }}
                            | <span class="text-primary">{{ new Date(movie.created_at).toLocaleTimeString([], {timeStyle: 'short'}) }}</span>
                        </td>
                    </tr>
                    <tr class="text-center">
                        <td style="vertical-align: middle;">Картинка</td>
                        <td>
                            <img :src="this.movie.image" alt="movie-img" width="540" height="340">
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

    </div>
    </section>


</template>
<!-- TODO если неь жанров вывести какую-то надпись -->
<script>
    export default {
        name: "Show",

        data() {
            return {
                movie: null
            }
        },

        mounted() {
            this.getMovie()
        },

        methods: {
            getMovie() {
                axios.get(`/api/movie/${this.$route.params.id}`)
                .then(res => {
                    this.movie = res.data.data
                })
            },

            isViewedText(movie) {
                return movie.is_viewed === 1 ? 'Да' : 'Нет'
            },
        },
    }
</script>

<style scoped>

</style>
