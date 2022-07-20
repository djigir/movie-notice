<template>
    <div class="card">
        <div class="card-body tab-content">
            <div class="tab-pane active" id="movie">
                <h6 class="text-center fw-bold">Добавление фильма</h6>
                <hr>
                <form>
                    <div class="form-group">
                        <label for="title">Название фильма</label>
                        <input v-model="title" type="text" id="title" class="form-control" placeholder="Название фильма">
                    </div>
                    <div class="form-group">
                        <label for="description">Описание</label>
                        <input v-model="description" id="description" type="text" class="form-control" placeholder="Добавте ваше описание к фильму">
                    </div>
                    <div class="form-group">
                        <label for="actors">Актеры</label>
                        <input v-model="actors" id="actors" type="text" class="form-control" placeholder="Введите актеров">
                    </div>
                    <div class="form-group">
                        <label for="release_year">Год выпуска</label>
                        <Datepicker
                            id="release_year"
                            yearPicker
                            v-model="release_year"
                            autoApply
                            placeholder="Выберите дату выхода фильма"
                        >
                        </Datepicker>
                    </div>

                    <button  class="btn btn-dark">
                        Редактировать
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import Datepicker from "@vuepic/vue-datepicker";
    import '@vuepic/vue-datepicker/dist/main.css'

    export default {
        name: "Edit",

        components: { Datepicker},

        data() {
            return {
                title: '',
                description: '',
                actors: '',
                release_year: null,
            }
        },

        mounted() {
            this.getMovie()
        },

        methods: {
            getMovie() {
                axios.get(`/api/movie/${this.$route.params.id}`)
                .then(res => {
                    this.title = res.data.title
                    this.description = res.data.description
                    this.actors = res.data.actors
                    this.release_year = res.data.release_year
                    console.log(res)
                })
            },

            update() {
                // TODO написать обновление
            }
        }
    }
</script>

<style scoped>

</style>
