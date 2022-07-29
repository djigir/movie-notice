<template>

    <div class="container-fluid m-5 p-2 rounded mx-auto bg-light shadow">
        <!-- App title section -->
        <div class="row m-1 p-4">
            <div class="col">
                <div class="p-1 h1 text-primary text-center mx-auto display-inline-block">
                    <h2 class="text-center fw-bold">Добавление фильма</h2>
                </div>
            </div>
        </div>
        <!--hr -->
        <div class="p-2 mx-4 border-black-25 border-bottom"></div>

        <!-- Todo list section -->
        <div class="row mx-1 px-5 pb-3 w-80 mt-5">
            <div class="col mx-auto">
                <!-- Todo Item 1 -->
                <div class="row px-3 align-items-center todo-item rounded">

                    <div class="container">
                        <div class="row">
                            <!-- col-md-6 можно поделить на 2 части -->
                            <div class="col-12">
                                <div class="mb-3">
                                    <label for="title" class="form-label">Название фильма</label>
                                    <input v-model="title" type="text" class="form-control" id="title" placeholder="Введите название фильма" aria-describedby="title_error" required>
                                </div>
                                <div class="mb-3">
                                    <div class="form-group shadow-textarea">
                                        <label for="description">Описание</label>
                                        <textarea v-model="description" class="form-control z-depth-1" id="description" rows="3" placeholder="Добавте ваше описание к фильму">

                                        </textarea>
                                    </div>
                                </div>

                                <div class="mb-3">
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
                                <div class="mb-3">
                                    <div class="form-group shadow-textarea">
                                        <label for="actors">Актеры</label>
                                        <textarea v-model="actors" class="form-control z-depth-1" id="actors" rows="3" placeholder="Добавте актеров к фильму если вы их знаете">

                                        </textarea>
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label class="typo__label">Жанры</label>
                                    <VueMultiselect
                                        v-model="genres"
                                        :options="genres_options"
                                        :multiple="true"
                                        :close-on-select="true"
                                        :preserve-search="true"
                                        label="title"
                                        placeholder="Выберите жанры"
                                        track-by="title"
                                    />
                                </div>

                                <div class="mb-3 form-check">
                                    <input v-model="is_viewed" type="checkbox" class="form-check-input" id="is_viewed">
                                    <label class="form-check-label" for="is_viewed">Просмотренно</label>
                                </div>

                                <div class="mb-3 form-check rating-form">

                                    <label for="rating" id="rating-label" class="form-check-label">Рейтинг:</label>
                                    <star-rating id="rating" class="rating-stars"
                                         v-model:rating="rating"
                                         :increment="0.5"
                                         :max-rating="10"
                                         :star-size="18"
                                    />

                                </div>

                                <div class="mb-3">
                                    <label for="movie-image">Картинка</label>
                                    <input v-model="image" type="text" class="form-control" id="movie-image" placeholder="Вставте ссылку на картинку к фильму">
                                </div>
                                <div class="preview-movie-image">
                                    <img :src="defaultImage" alt="movie-img" width="540" height="340">
                                </div>

                            </div>
                        </div>
                        <button :disabled="!isDisabled" @click.prevent="store" class="btn btn-primary store-btn">
                            Создать
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'
    import StarRating from 'vue-star-rating'
    import VueMultiselect from 'vue-multiselect/src/Multiselect.vue';

    export default {
        name: "Create",

        components: {
            Datepicker,
            StarRating,
            VueMultiselect
        },


        data() {

            return {
                title: '',
                description: '',
                actors: '',
                release_year: null,
                is_viewed: 0,
                errors: null,
                rating: null,
                genres: [],
                genres_options: [],
                image: 'https://mizez.com/custom/mizez/img/general/no-image-available.png'
            }
        },

        mounted() {
            this.getGenres()
        },

        methods: {
            getGenres() {
                axios.get('/api/genre')
                .then( res => {
                    this.genres_options = res.data.data
                })
            },

            store() {
                axios.post('/api/movie', {
                    title: this.title,
                    description: this.description,
                    actors: this.actors,
                    genres: this.genres,
                    release_year: this.release_year,
                    is_viewed: this.is_viewed,
                    rating: this.rating,
                    image: this.image
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
            },

            defaultImage() {
                return this.image === '' ? 'https://mizez.com/custom/mizez/img/general/no-image-available.png' : this.image
            }
        }
    }
</script>

<style scoped>

    .rating-form {
        padding-left: 0!important;
    }

    #rating-label {
        margin-right: 5px;
    }

    .rating-stars {
        margin: 0!important;
        padding: 0!important;
    }

    .store-btn {
        margin-top: 1rem;
    }
</style>
