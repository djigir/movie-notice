<template>

    <section class="movie-details" v-if="movie">

        <PageHeader
            class="mt-5"
            :title="movie.title"
            :description="'Вы находитесь на странице просмотра фильма здесь вы можете посмотреть все данные о фильме, а так же почитать отзывы'"
            :isButton="true"
            :to="{ name: 'movie.index' }"
        >
            <slot>Назад к списку</slot>
        </PageHeader>

        <div class="container mt-5 mb-5">
            <div class="row">
                <div class="col-md-7">
                    <img :src="movie.image" alt="project-image" class="rounded" style="max-height: 425px">
                    <div class="project-info-box">
                        <p><b>Тип информации: </b>
                            <router-link to="/" class="ms-1">Мои данные</router-link>
                            <router-link :to="{ name: 'movie.info' }" class="ms-1">HD rezka</router-link>
                            <router-link to="/" class="ms-1">КиноПоиск</router-link>
                        </p>
                    </div><!-- / project-info-box -->
                    <!-- доделать таб тут и парсить данныке -->
                    <div class="additional-info project-info-box mt-0">
                        <p><b>Тип информации: </b>
                            kdflksdlkflkd
                        </p>
                        <p><b>Тип информации: </b>
                            kdflksdlkflkd
                        </p>
                        <p>dksakds</p>
                        <p>dksakds</p>
                        <p>dksakds</p>
                        <p>dksakds</p>
                    </div>
                </div><!-- / column -->

                <div class="col-md-5">

                    <div class="project-info-box mt-0">
                        <p><b>Название: </b> {{ movie.title }}</p>
                        <p><b>Год выхода: </b> {{ movie.release_year }}</p>
                        <p><b>Жанры: </b>
                            <span v-for="genre in movie.genres" class="genre">
                                <a>
                                    {{ genre.title }}
                                </a>
                            </span>
                        </p>
                        <p><b>Актеры: </b> {{ movie.actors }}</p>
                        <p><b>Статус: </b>
                            <span :class="isViewedClass(movie.is_viewed)">
                                {{ isViewedText(movie.is_viewed) }}
                            </span>
                        </p>
                        <p><b>Рейтинг: </b>
                            <VueStarRating id="rating" class="rating-stars d-inline-block"
                                 v-model:rating="movie.rating"
                                 :increment="0.5"
                                 :read-only="true"
                                 :max-rating="10"
                                 :star-size="16"
                            />
                        </p>
                        <p class="mb-0"><b>Добавлено: </b>
                            {{ new Date(this.movie.created_at).toLocaleDateString() }}
                             : {{ new Date(movie.created_at).toLocaleTimeString([], {timeStyle: 'short'}) }}
                            <i class="fa-regular fa-clock"></i>
                        </p>
                    </div><!-- / project-info-box -->

                    <div class="project-info-box mt-0">
                        <h5 style="color: #686c6d"><b>Описание:</b></h5>
                        <p class="mb-0">{{ movie.description }}</p>
                    </div><!-- / project-info-box -->

                    <div class="project-info-box mt-0 mb-0">
                        <p class="mb-0">
                            <span class="fw-bold mr-10 va-middle hide-mobile">Действия:</span>
                            <router-link class="btn btn-block btn-warning ms-2"
                                         :to="{name: 'movie.edit', params: {id: this.movie.id, metaTitle: `MovieNotes|Редактирование фильма ${movie.title}`}}">
                                Редактировать
                            </router-link>
                            <button @click="deleteMovie(movie.id)" class="btn btn-block btn-danger ms-3">Удалить</button>
                        </p>
                    </div><!-- / project-info-box -->
                </div><!-- / column -->
            </div>
        </div>
    </section>

</template>
<!-- TODO если неь жанров вывести какую-то надпись -->
<script>
    const DEFAULT_IMAGE = 'https://mizez.com/custom/mizez/img/general/no-image-available.png';

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

            deleteMovie(id) {

                this.$swal.fire({
                    title: `Вы действительно хотитие удалить фильм "${this.movie.title}"?`,
                    icon: 'question',
                    showCloseButton: true,
                    showConfirmButton: true,
                    confirmButtonText: 'Да',
                    confirmButtonColor: '#dc3545',
                    showCancelButton: true,
                    cancelButtonText: 'Отмена',
                }).then(res => {

                    if (res.isConfirmed) {
                        const Toast = this.$swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.addEventListener('mouseenter', this.$swal.stopTimer)
                                toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                            }
                        })

                        Toast.fire({
                            icon: 'success',
                            title: `Фильм "${this.movie.title}" был успешно удален!`
                        })

                        axios.delete(`/api/movie/${id}`)
                        .then(res => {
                            this.$router.push({name: 'movie.index'})
                        })
                    }
                })

            },

            isViewedText(is_viewed) {
                return is_viewed === 1 ? 'Просмотрено' : 'Не просмотрено'
            },

            isViewedClass(is_viewed) {
                return is_viewed === 1 ? 'text-success' : 'text-danger'
            },
        },
    }
</script>

<style scoped>

    .project {
        margin: 15px 0;
    }

    .no-gutter .project {
        margin: 0 !important;
        padding: 0 !important;
    }

    .has-spacer {
        margin-left: 30px;
        margin-right: 30px;
        margin-bottom: 30px;
    }

    .has-spacer-extra-space {
        margin-left: 30px;
        margin-right: 30px;
        margin-bottom: 30px;
    }

    .has-side-spacer {
        margin-left: 30px;
        margin-right: 30px;
    }

    .project-title {
        font-size: 1.25rem;
    }

    .project-skill {
        font-size: 0.9rem;
        font-weight: 400;
        letter-spacing: 0.06rem;
    }

    .project-info-box {
        margin: 15px 0;
        background-color: #fff;
        padding: 30px 40px;
        border-radius: 5px;
    }

    .project-info-box p {
        margin-bottom: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid #d5dadb;
    }

    .project-info-box p:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: none;
    }
    img {
        width: 100%;
        max-width: 100%;
        height: auto;
        -webkit-backface-visibility: hidden;
    }
    .rounded {
        border-radius: 5px !important;
    }
    .btn-xs.btn-icon {
        width: 34px;
        height: 34px;
        max-width: 34px !important;
        max-height: 34px !important;
        font-size: 10px;
        line-height: 34px;
    }
    /* facebook button */
    .btn-facebook, .btn-facebook:active, .btn-facebook:focus {
        color: #fff !important;
        background: #4e68a1;
        border: 2px solid #4e68a1;
    }

    .btn-facebook:hover {
        color: #fff !important;
        background: #3b4f7a;
        border: 2px solid #3b4f7a;
    }

    .btn-facebook-link, .btn-facebook-link:active, .btn-facebook-link:focus {
        color: #4e68a1 !important;
        background: transparent;
        border: none;
    }

    .btn-facebook-link:hover {
        color: #3b4f7a !important;
    }

    .btn-outline-facebook, .btn-outline-facebook:active, .btn-outline-facebook:focus {
        color: #4e68a1 !important;
        background: transparent;
        border: 2px solid #4e68a1;
    }

    .btn-outline-facebook:hover {
        color: #fff !important;
        background: #4e68a1;
        border: 2px solid #4e68a1;
    }

    /* twitter button */
    .btn-twitter, .btn-twitter:active, .btn-twitter:focus {
        color: #fff !important;
        background: #65b5f2;
        border: 2px solid #65b5f2;
    }

    .btn-twitter:hover {
        color: #fff !important;
        background: #5294c6;
        border: 2px solid #5294c6;
    }

    .btn-twitter:hover {
        color: #fff !important;
        background: #5294c6;
        border: 2px solid #5294c6;
    }

    .btn-twitter-link, .btn-twitter-link:active, .btn-twitter-link:focus {
        color: #65b5f2 !important;
        background: transparent;
        border: none;
    }

    .btn-twitter-link:hover {
        color: #5294c6 !important;
    }

    .btn-outline-twitter, .btn-outline-twitter:active, .btn-outline-twitter:focus {
        color: #65b5f2 !important;
        background: transparent;
        border: 2px solid #65b5f2;
    }

    .btn-outline-twitter:hover {
        color: #fff !important;
        background: #65b5f2;
        border: 2px solid #65b5f2;
    }

    /* google button */
    .btn-google, .btn-google:active, .btn-google:focus {
        color: #fff !important;
        background: #e05d4b;
        border: 2px solid #e05d4b;
    }

    .btn-google:hover {
        color: #fff !important;
        background: #b94c3d;
        border: 2px solid #b94c3d;
    }

    .btn-google-link, .btn-google-link:active, .btn-google-link:focus {
        color: #e05d4b !important;
        background: transparent;
        border: none;
    }

    .btn-google-link:hover {
        color: #b94c3d !important;
    }

    .btn-outline-google, .btn-outline-google:active, .btn-outline-google:focus {
        color: #e05d4b !important;
        background: transparent;
        border: 2px solid #e05d4b;
    }

    .btn-outline-google:hover {
        color: #fff !important;
        background: #e05d4b;
        border: 2px solid #e05d4b;
    }

    /* linkedin button */
    .btn-linkedin, .btn-linkedin:active, .btn-linkedin:focus {
        color: #fff !important;
        background: #2083bc;
        border: 2px solid #2083bc;
    }

    .btn-linkedin:hover {
        color: #fff !important;
        background: #186592;
        border: 2px solid #186592;
    }

    .btn-linkedin-link, .btn-linkedin-link:active, .btn-linkedin-link:focus {
        color: #2083bc !important;
        background: transparent;
        border: none;
    }

    .btn-linkedin-link:hover {
        color: #186592 !important;
    }

    .btn-outline-linkedin, .btn-outline-linkedin:active, .btn-outline-linkedin:focus {
        color: #2083bc !important;
        background: transparent;
        border: 2px solid #2083bc;
    }

    .btn-outline-linkedin:hover {
        color: #fff !important;
        background: #2083bc;
        border: 2px solid #2083bc;
    }

    /* pinterest button */
    .btn-pinterest, .btn-pinterest:active, .btn-pinterest:focus {
        color: #fff !important;
        background: #d2373b;
        border: 2px solid #d2373b;
    }

    .btn-pinterest:hover {
        color: #fff !important;
        background: #ad2c2f;
        border: 2px solid #ad2c2f;
    }

    .btn-pinterest-link, .btn-pinterest-link:active, .btn-pinterest-link:focus {
        color: #d2373b !important;
        background: transparent;
        border: none;
    }

    .btn-pinterest-link:hover {
        color: #ad2c2f !important;
    }

    .btn-outline-pinterest, .btn-outline-pinterest:active, .btn-outline-pinterest:focus {
        color: #d2373b !important;
        background: transparent;
        border: 2px solid #d2373b;
    }

    .btn-outline-pinterest:hover {
        color: #fff !important;
        background: #d2373b;
        border: 2px solid #d2373b;
    }

    /* dribble button */
    .btn-dribbble, .btn-dribbble:active, .btn-dribbble:focus {
        color: #fff !important;
        background: #ec5f94;
        border: 2px solid #ec5f94;
    }

    .btn-dribbble:hover {
        color: #fff !important;
        background: #b4446e;
        border: 2px solid #b4446e;
    }

    .btn-dribbble-link, .btn-dribbble-link:active, .btn-dribbble-link:focus {
        color: #ec5f94 !important;
        background: transparent;
        border: none;
    }

    .btn-dribbble-link:hover {
        color: #b4446e !important;
    }

    .btn-outline-dribbble, .btn-outline-dribbble:active, .btn-outline-dribbble:focus {
        color: #ec5f94 !important;
        background: transparent;
        border: 2px solid #ec5f94;
    }

    .btn-outline-dribbble:hover {
        color: #fff !important;
        background: #ec5f94;
        border: 2px solid #ec5f94;
    }

    /* instagram button */
    .btn-instagram, .btn-instagram:active, .btn-instagram:focus {
        color: #fff !important;
        background: #4c5fd7;
        border: 2px solid #4c5fd7;
    }

    .btn-instagram:hover {
        color: #fff !important;
        background: #4252ba;
        border: 2px solid #4252ba;
    }

    .btn-instagram-link, .btn-instagram-link:active, .btn-instagram-link:focus {
        color: #4c5fd7 !important;
        background: transparent;
        border: none;
    }

    .btn-instagram-link:hover {
        color: #4252ba !important;
    }

    .btn-outline-instagram, .btn-outline-instagram:active, .btn-outline-instagram:focus {
        color: #4c5fd7 !important;
        background: transparent;
        border: 2px solid #4c5fd7;
    }

    .btn-outline-instagram:hover {
        color: #fff !important;
        background: #4c5fd7;
        border: 2px solid #4c5fd7;
    }

    /* youtube button */
    .btn-youtube, .btn-youtube:active, .btn-youtube:focus {
        color: #fff !important;
        background: #e52d27;
        border: 2px solid #e52d27;
    }

    .btn-youtube:hover {
        color: #fff !important;
        background: #b31217;
        border: 2px solid #b31217;
    }

    .btn-youtube-link, .btn-youtube-link:active, .btn-youtube-link:focus {
        color: #e52d27 !important;
        background: transparent;
        border: none;
    }

    .btn-youtube-link:hover {
        color: #b31217 !important;
    }

    .btn-outline-youtube, .btn-outline-youtube:active, .btn-outline-youtube:focus {
        color: #e52d27 !important;
        background: transparent;
        border: 2px solid #e52d27;
    }

    .btn-outline-youtube:hover {
        color: #fff !important;
        background: #e52d27;
        border: 2px solid #e52d27;
    }
    .btn-xs.btn-icon span, .btn-xs.btn-icon i {
        line-height: 34px;
    }
    .btn-icon.btn-circle span, .btn-icon.btn-circle i {
        margin-top: -1px;
        margin-right: -1px;
    }
    .btn-icon i {
        margin-top: -1px;
    }
    .btn-icon span, .btn-icon i {
        display: block;
        line-height: 50px;
    }
    a.btn, a.btn-social {
        display: inline-block;
    }
    .mr-5 {
        margin-right: 5px !important;
    }
    .mb-0 {
        margin-bottom: 0 !important;
    }
    .btn-facebook, .btn-facebook:active, .btn-facebook:focus {
        color: #fff !important;
        background: #4e68a1;
        border: 2px solid #4e68a1;
    }
    .btn-circle {
        border-radius: 50% !important;
    }
    .project-info-box p {
        margin-bottom: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid #d5dadb;
    }
    p {
        font-family: "Barlow", sans-serif !important;
        font-weight: 300;
        font-size: 1rem;
        color: #686c6d;
        letter-spacing: 0.03rem;
        margin-bottom: 10px;
    }
    b, strong {
        font-weight: 700 !important;
    }

    /* add comma after genre title */
    .genre + .genre:before {
        content: ", ";
    }
</style>
