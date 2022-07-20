<template>

    <div class="card">
        <div class="card-body tab-content">
            <div class="tab-pane active" id="movie">
                <h6 class="text-center fw-bold">Добавление фильма</h6>
                <hr>
                <form>
                    <div class="form-group">
                        <template v-for="error in errors">
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                {{ error }}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>

                        </template>
                        <label for="title">Название фильма</label>
                        <input v-model="title" type="text" id="title" class="form-control" placeholder="Название фильма" style="margin-bottom: 1.5rem;">
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

                    <button :disabled="!isDisabled" @click.prevent="store" class="btn btn-dark store-btn">
                        Создать
                    </button>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'

    export default {
        name: "Create",

        components: { Datepicker},

        data() {
            return {
                title: '',
                description: '',
                actors: '',
                release_year: null,
                errors: null,
            }
        },

        methods: {

            store() {
                axios.post('/api/movie', {
                    title: this.title,
                    description: this.description,
                    actors: this.actors,
                    release_year: this.release_year
                })
                .then( res => {
                    console.log(res)
                    this.$router.push({name: 'movie.index'})
                })
                .catch(err => {
                    console.log(err.response.data.errors)
                    this.errors = err.response.data.errors
                })
            }
        },

        computed: {
            isDisabled() {
                return this.title
            }
        }
    }
</script>

<style scoped>
    .store-btn {
        margin-top: 1rem;
    }
</style>
