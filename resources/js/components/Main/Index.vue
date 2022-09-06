<template>
    <!-- Header-->
    <header class="bg-dark py-5">
        <div class="container px-5">
            <div class="row gx-5 justify-content-center">
                <div class="col-lg-6">
                    <div class="text-center my-5">
                        <h1 class="display-5 fw-bolder text-white mb-2">Добро пожаловать на MovieNotes!</h1>
                        <p class="lead text-white-50 mb-4">Сайт для создание собственной коллекции фильмов</p>
                        <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                            <router-link :to="{name: 'movie.index'}" class="btn btn-primary btn-lg px-4 me-sm-3">
                                Начать
                            </router-link>
                            <a class="btn btn-outline-light btn-lg px-4" href="#features">Подробнее</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Header-->

    <!-- Features section-->
    <section class="py-5 border-bottom" id="features">
        <h2 class="text-center fw-bold pb-4">Как это работает?</h2>
        <hr>
        <div class="container px-5 my-5">
            <div class="row gx-5">
                <div class="col-lg-4 mb-5 mb-lg-0">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-collection"></i></div>
                    <h2 class="h4 fw-bolder">Шаг 1</h2>
                    <p>
                        <b>Зарегистрируйтесь</b> или <b>войдите</b> в аккаунт, при добавлении фильмов заполняйте как можно детальней и больше полей.
                    </p>
                </div>
                <div class="col-lg-4 mb-5 mb-lg-0">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-building"></i></div>
                    <h2 class="h4 fw-bolder">Шаг 2</h2>
                    <p>
                        Если вы хотите добавить новую информацию о фильме, вы можете <b>отредактировать</b> уже добавленный фильм в вашей коллекции, это поможет работать <b>поиску</b> и <b>фильтру</b> корректней
                    </p>
                </div>
                <div class="col-lg-4">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-toggles2"></i></div>
                    <h2 class="h4 fw-bolder">Шаг 3</h2>
                    <p>
                        После просмотра фильма, измените статус фильма на <b>"Просмотрено"</b> и добавите свой рейтинг, это нужно для правильной работы фильтра по статусам, а так же для отображения актуальной статистики в вашем профиле.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <!-- Features section-->

    <!-- Slider section-->
    <section class="py-5 border-bottom">
        <div class="container px-5 my-5 px-5">
            <div class="text-center mb-5">
                <h2 class="fw-bolder">Последнии Новинки</h2>
                <p class="lead mb-0">Фильмов, Сериалов, Мультфильмов и Аниме</p>
            </div>

            <section class="new-movies-slider">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 mb-4">
                            <carousel :settings="settings" :breakpoints="breakpoints" v-if="movies">
                                <slide v-for="(movie, index) in movies" :key="movie.id">
                                    <router-link class="show-new-movie-link" :to="{name: 'main.show',
                                    params: {link: movie.link, metaTitle: `MovieNotes|Фильм ${movie.title}`}}">
                                        <div class="carousel__item">
                                            <img :src="movie.image" alt="movie-img" width="185">
                                            <p class="new-movie-title mt-2 fw-bold">
                                                {{ movie.title }}
                                            </p>
                                            <span class="new-movie-details mt-2">
                                                {{ movie.year }},
                                                {{ movie.country }},
                                                {{ movie.genre }}
                                            </span>
                                        </div>
                                    </router-link>
                                </slide>
                                <template #addons>
                                    <navigation />
                                    <pagination class="mt-2" />
                                </template>
                            </carousel>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </section>
    <!-- Slider section-->

    <!-- Contact section-->
    <section class="bg-light py-5">
        <div class="container px-5 my-5 px-5">
            <div class="text-center mb-5">
                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-envelope"></i></div>
                <h2 class="fw-bolder">Get in touch</h2>
                <p class="lead mb-0">We'd love to hear from you</p>
            </div>
            <div class="row gx-5 justify-content-center">
                <div class="col-lg-6">
                    <!-- * * * * * * * * * * * * * * *-->
                    <!-- * * SB Forms Contact Form * *-->
                    <!-- * * * * * * * * * * * * * * *-->
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <!-- Name input-->
                        <div class="form-floating mb-3">
                            <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                            <label for="name">Full name</label>
                            <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                        </div>
                        <!-- Email address input-->
                        <div class="form-floating mb-3">
                            <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                            <label for="email">Email address</label>
                            <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                            <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                        </div>
                        <!-- Phone number input-->
                        <div class="form-floating mb-3">
                            <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                            <label for="phone">Phone number</label>
                            <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                        </div>
                        <!-- Message input-->
                        <div class="form-floating mb-3">
                            <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." style="height: 10rem" data-sb-validations="required"></textarea>
                            <label for="message">Message</label>
                            <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                        </div>
                        <!-- Submit success message-->
                        <!---->
                        <!-- This is what your users will see when the form-->
                        <!-- has successfully submitted-->
                        <div class="d-none" id="submitSuccessMessage">
                            <div class="text-center mb-3">
                                <div class="fw-bolder">Form submission successful!</div>
                                To activate this form, sign up at
                                <br />
                                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                            </div>
                        </div>
                        <!-- Submit error message-->
                        <!---->
                        <!-- This is what your users will see when there is-->
                        <!-- an error submitting the form-->
                        <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                        <!-- Submit Button-->
                        <div class="d-grid"><button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- Contact section-->

</template>

<script>
    import 'vue3-carousel/dist/carousel.css';
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

    export default {
        name: "Index",
        components: {
            Carousel,
            Slide,
            Pagination,
            Navigation,
        },

        data() {
            return {
                movies: null,
                // carousel settings
                settings: {
                    itemsToShow: 3,
                    itemsToScroll: 3,
                    // autoplay: 3000,
                    wrapAround: 'true',
                    snapAlign: 'center',
                },
                // breakpoints are mobile first
                breakpoints: {
                    1024: {
                        itemsToShow: 3,
                        snapAlign: 'center',
                    }
                },
            }
        },

        mounted() {
            this.getNewMovies()
        },

        methods: {
            getNewMovies() {
                axios.get('api/parse/movies')
                .then(res => {
                    this.movies = res.data
                })
            }
        },
    }
</script>

<style scoped>

    .show-new-movie-link{
        text-decoration: none;
        color: black;
    }

    .carousel__item {
        padding: 1.5rem;
    }

    .carousel__item:hover{
        background: gray;
        color: white;
    }

</style>
