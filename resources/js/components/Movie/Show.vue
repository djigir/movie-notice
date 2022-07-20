<template>

    <!-- Main content -->
    <section class="content" v-if="movie">
        <div class="container-fluid">
            <!-- Small boxes (Stat box) -->
            <div class="row">
                <div class="col-2 mb-4">
                    <router-link class="btn btn-block btn-warning" :to="{name: 'movie.edit', params: {id: this.movie.id}}">
                        Редактировать
                    </router-link>
                </div>

                <div class="col-2 mb-4">
                        <button class="btn btn-block btn-danger">Удалить</button>
                </div>

                <div class="col-12">
                    <h4 class="text-center">Вы находитесь на странице фильма: <strong>{{ this.movie.title }}</strong></h4>
                    <div class="card">
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
                                    <td>Описание</td>
                                    <td>{{ this.movie.description }}</td>
                                </tr>
                                <tr class="text-center">
                                    <td>Год выпуска</td>
                                    <td>{{ this.movie.release_year }}</td>
                                </tr>
                                <tr class="text-center">
                                    <td>Дата создания</td>
                                    <td>{{ this.movie.created_at }}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>
                </div>
                <!-- ./col -->

            </div>

        </div>
    </section>

</template>

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
        },
    }
</script>

<style scoped>

</style>
