<template>


    <div class="container-fluid m-5 p-2 rounded mx-auto bg-light shadow">
        <!-- App title section -->
        <div class="row m-1 p-4">
            <div class="col">
                <div class="p-1 h1 text-primary text-center mx-auto display-inline-block">
                    <h2 class="text-center fw-bold">Редактирование фильма</h2>
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
                                    <img :src="previewImage" alt="movie-img" width="540" height="340">
                                </div>

                            </div>
                        </div>
                        <button :disabled="!isDisabled" @click.prevent="update" class="btn btn-warning store-btn mt-3">
                            Обновить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    const DEFAULT_IMAGE = 'https://mizez.com/custom/mizez/img/general/no-image-available.png'

    import Datepicker from "@vuepic/vue-datepicker";
    import '@vuepic/vue-datepicker/dist/main.css'
    import StarRating from 'vue-star-rating'
    import VueMultiselect from 'vue-multiselect/src/Multiselect.vue';

    export default {
        name: "Edit",

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
                is_viewed: null,
                rating: null,
                genres: [],
                genres_options: [],
                image: DEFAULT_IMAGE
            }
        },

        mounted() {
            this.getMovie()
            this.getGenres()
        },

        methods: {
            getMovie() {
                axios.get(`/api/movie/${this.$route.params.id}`)
                .then(res => {
                    this.title = res.data.data.title
                    this.genres = res.data.data.genres
                    this.description = res.data.data.description
                    this.actors = res.data.data.actors
                    this.release_year = res.data.data.release_year
                    this.is_viewed = Boolean(res.data.data.is_viewed)
                    this.rating = Number(res.data.data.rating)
                    this.image = res.data.data.image
                })
            },

            getGenres() {
                axios.get('/api/genre')
                .then( res => {
                    this.genres_options = res.data.data
                })
            },

            update() {
                axios.patch(`/api/movie/${this.$route.params.id}`, {
                    title: this.title,
                    genres: this.genres,
                    description: this.description,
                    actors: this.actors,
                    release_year: this.release_year,
                    is_viewed: this.is_viewed,
                    rating: this.rating,
                    image: this.image === '' ? DEFAULT_IMAGE : this.image
                })
                .then( res => {
                    this.$router.push({name: 'movie.show', params: {id: this.$route.params.id}})
                })
            }
        },

        computed: {
            isDisabled() {
                return this.title
            },

            previewImage() {
                return this.image === '' ? DEFAULT_IMAGE : this.image
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
</style>
