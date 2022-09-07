<template>

    <section class="section about-section gray-bg" id="about" v-if="user">

        <PageHeader
            class="mb-5"
            :title="'Профиль'"
            :description="'На этой странице вы можете посмотреть ваши регистрационные данные, а также статистику по данному профилю'"
        >
        </PageHeader>

        <div class="container">
            <div class="row align-items-center flex-row-reverse">
                <div class="col-lg-6">
                    <div class="about-text go-to">
                        <h3>Пользователь: {{ user.name }}</h3>
                        <div class="theme-color lead">
                            <router-link :to="{name: 'profile.edit', params: {id: user.id}}" class="btn btn-warning border px-3 p-1">
                                Редактировать
                            </router-link>
                            <button @click.prevent="deleteUser(user.id)" class="btn btn-danger border px-3 p-1 ms-4">
                                Удалить
                            </button>
                        </div>
                        <hr>
                        <div class="row about-list">
                            <div class="col-md-6">
                                <div class="media">
                                    <p>
                                        <label>Имя:</label>
                                        {{ user.name }}
                                    </p>
                                </div>
                                <div class="media">
                                    <p>
                                        <label>Email:</label>
                                        {{ user.email }}
                                    </p>
                                </div>
                                <div class="media">
                                    <p>
                                        <label>Профиль создан:</label>
                                        {{ new Date(user.created_at).toLocaleDateString() }}
                                        : {{ new Date(user.created_at).toLocaleTimeString([], {timeStyle: 'short'}) }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about-avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="user-image">
                    </div>
                </div>
            </div>
            <div class="counter mt-5">
                <h3 class="text-center mb-4 fw-bold">Статистика профиля</h3>
                <div class="row pb-5">
                    <div class="col-6 col-lg-4">
                        <div class="count-data text-center">
                            <h6 class="count h2" data-to="500" data-speed="500">{{ user.movies_count }}</h6>
                            <p class="m-0px font-w-600">Всего фильмов</p>
                        </div>
                    </div>
                    <div class="col-6 col-lg-4">
                        <div class="count-data text-center">
                            <h6 class="count h2" data-to="150" data-speed="150">{{ user.is_viewed_true }}</h6>
                            <p class="m-0px font-w-600">Просмотрено</p>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="count-data text-center">
                            <h6 class="count h2" data-to="850" data-speed="850">{{ user.is_viewed_false }}</h6>
                            <p class="m-0px font-w-600">Не просмотрено</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
    export default {
        name: "Index",

        data() {
            return {
                user: null,
            }
        },

        mounted() {
            this.getUserData()
        },

        methods: {
            getUserData() {
                axios.get('api/profile')
                .then( res => {
                    this.user = res.data.data
                })
            },

            deleteUser(id) {

                this.$swal.fire({
                    title: 'Вы действительно хотите удалить свой профиль?',
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
                            title: `Профиль с именем "${this.user.name}" был успешно удален!`
                        })

                        axios.delete(`/api/profile/${id}`)
                        .then(res => {
                            localStorage.removeItem('x_xsrf_token')
                            this.$router.push({name: 'main.index'})
                        })
                    }
                })

            },
        }
    }
</script>

<style scoped>

    .section {
        padding: 60px 0;
        position: relative;
    }
    .gray-bg {
        background-color: #f5f5f5;
    }
    img {
        max-width: 100%;
    }
    img {
        vertical-align: middle;
        border-style: none;
    }
    /* About Me
    ---------------------*/
    .about-text h3 {
        font-size: 45px;
        font-weight: 700;
        margin: 0 0 6px;
    }
    @media (max-width: 767px) {
        .about-text h3 {
            font-size: 35px;
        }
    }
    .about-text h6 {
        font-weight: 600;
        margin-bottom: 15px;
    }
    @media (max-width: 767px) {
        .about-text h6 {
            font-size: 18px;
        }
    }
    .about-text p {
        font-size: 18px;
        max-width: 450px;
    }
    .about-text p mark {
        font-weight: 600;
        color: #20247b;
    }

    .about-list {
        padding-top: 10px;
    }
    .about-list .media {
        padding: 5px 0;
    }
    .about-list label {
        color: #20247b;
        font-weight: 600;
        margin: 0;
        position: relative;
    }
    .about-list p {
        margin: 0;
        font-size: 15px;
    }

    @media (max-width: 991px) {
        .about-avatar {
            margin-top: 30px;
        }
    }

    .about-section .counter {
        padding: 22px 20px;
        background: #ffffff;
        border-radius: 10px;
        box-shadow: 0 0 30px rgba(31, 45, 61, 0.125);
    }
    .about-section .counter .count-data {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .about-section .counter .count {
        font-weight: 700;
        color: #20247b;
        margin: 0 0 5px;
    }
    .about-section .counter p {
        font-weight: 600;
        margin: 0;
    }
    mark {
        background-image: linear-gradient(rgba(252, 83, 86, 0.6), rgba(252, 83, 86, 0.6));
        background-size: 100% 3px;
        background-repeat: no-repeat;
        background-position: 0 bottom;
        background-color: transparent;
        padding: 0;
        color: currentColor;
    }
    .theme-color {
        color: #fc5356;
    }

</style>
