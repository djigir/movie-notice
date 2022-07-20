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

<!--                        locale="ru"-->
<!--                        :format-locale="ru"-->
<!--                        format="d-MMMM-yyyy"-->
<!--                        v-model="release_date"-->
<!--                        type="date"-->
<!--                        cancelText="Выйти"-->
<!--                        selectText="Выбрать"-->
<!--                        showNowButton-->
<!--                        nowButtonLabel="Текущая дата"-->
<!--                        :enableTimePicker="false"-->

                        <Datepicker
                            id="release_year"
                            yearPicker
                            v-model="release_year"
                            autoApply
                            placeholder="Выберите дату выхода фильма"
                        >
                        </Datepicker>
                    </div>

                    <button @click.prevent="store" class="btn btn-dark">
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
    // import { ru } from 'date-fns/locale';
    import router from '../../router';

    export default {
        name: "Create",

        components: { Datepicker},

        data() {
            return {
                title: '',
                description: '',
                actors: '',
                release_year: null,
                // ru,
            }
        },

        methods: {

            store() {
                // TODO пофиксить роут что бы писать без localhost
                axios.post('/api/movie', {
                    title: this.title,
                    description: this.description,
                    actors: this.actors,
                    release_year: this.release_year
                })
                .then( res => {
                    console.log(res)
                    router.push({name: 'movie.index'})
                })
            }
        }
    }
</script>

<style scoped>
    button {
        margin-top: 1rem;
    }
</style>
