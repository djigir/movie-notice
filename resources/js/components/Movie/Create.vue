<template>

    <section class="create-movie mb-5 pb-5">
        <!-- breadcrumbs -->
        <div class="row gx-5 justify-content-center mt-5">
            <div class="col-lg-8 col-xl-6">
                <div class="text-center">
                    <h2 class="fw-bolder">Добавление фильма</h2>
                    <p class="lead fw-normal text-muted mb-3">
                        На этой странице вы можете сохранить фильм в вашу коллекцию, добавив название, описание, картинку и т.д
                    </p>
                </div>
            </div>
        </div>
        <!-- breadcrumbs -->

        <div class="container rounded bg-white mt-5">
            <div class="row">
                <div class="col-md-4 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img :src="previewImage" class="mt-5" alt="movie-img" width="250">
                        <span class="mt-2"><b>Картинка к вашему фильму</b></span>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="d-flex flex-row align-items-center back"><i class="fa fa-long-arrow-left mr-1 mb-1"></i>
                                <button class="btn btn-outline-info">Вернуться назад</button>
                            </div>
                            <h5 class="text-right">Форма для добавления</h5>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-6">
                                <input v-model="title" type="text" class="form-control" placeholder="Название">
                            </div>
                            <div class="col-md-6">
                                <Datepicker
                                    yearPicker
                                    v-model="release_year"
                                    autoApply
                                    placeholder="Выберите дату выхода фильма"
                                >
                                </Datepicker>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <textarea v-model="description" class="form-control" placeholder="Добавте ваше описание к фильму">
                                </textarea>
                            </div>
                            <div class="col-md-6">
                                <textarea v-model="actors" class="form-control" placeholder="Добавте актеров к фильму если вы их знаете">
                                </textarea>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6">
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
                            <div class="col-md-6">
                                <label for="rating" id="rating-label" class="form-check-label mt-2">Рейтинг:</label>
                                <star-rating id="rating" class="rating-stars d-inline-block"
                                    v-model:rating="rating"
                                    :increment="0.5"
                                    :max-rating="10"
                                    :star-size="18"
                                />
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-12">
                                <input v-model="image" type="text" class="form-control" id="movie-image" placeholder="Вставте ссылку на картинку к фильму">
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <input v-model="is_viewed" type="checkbox" class="form-check-input" id="is_viewed">
                                <label class="form-check-label ms-1" for="is_viewed">Просмотренно</label>
                            </div>
                        </div>
                        <div class="mt-5 text-right">
                            <button :disabled="!isDisabled" @click.prevent="store" class="btn btn-success" type="button">
                                Создать
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
    const DEFAULT_IMAGE = 'https://mizez.com/custom/mizez/img/general/no-image-available.png';

    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css';
    import StarRating from 'vue-star-rating';
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
                image: '',
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
            },
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

    .store-btn {
        margin-top: 1rem;
    }

    .form-control:focus {
        box-shadow: none;
        border-color: #BA68C8;
    }

    .profile-button {
        background: #BA68C8;
        box-shadow: none;
        border: none;
    }

    .profile-button:hover {
        background: #682773;
    }

    .profile-button:focus {
        background: #682773;
        box-shadow: none;
    }

    .profile-button:active {
        background: #682773;
        box-shadow: none;
    }

    .back:hover {
        color: #682773;
        cursor: pointer;
    }

</style>
