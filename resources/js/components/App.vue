<template>

        <div class="wrapper">
            <!-- Responsive navbar-->
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container px-5">
                    <router-link :to="{ name: 'main.index' }" class="navbar-brand">MovieNotes</router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <router-link :to="{ name: 'main.index' }" class="nav-link" aria-current="page">
                                    Главная
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link v-if="token" :to="{ name: 'movie.index' }" class="nav-link">
                                    Фильмы
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link v-if="token" :to="{ name: 'profile.index' }" class="nav-link">
                                    Профиль
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link v-if="!token" :to="{ name: 'login' }" class="nav-link">
                                    Войти
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link v-if="!token" :to="{ name: 'register' }" class="nav-link ">
                                    Регистрация
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <a v-if="token" @click.prevent="logout" class="nav-link">
                                    Выйти
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <!-- Responsive navbar-->

            <div class="col-12">
                <router-view></router-view>
            </div>


            <!-- Footer-->
            <footer class="py-5 bg-dark">
                <div class="container px-5">
                    <p class="m-0 text-center text-white">Copyright &copy; Your Website 2022</p>
                </div>
            </footer>
            <!-- Footer-->
        </div>

</template>

<script>
    export default {
        name: "App",

        data() {
            return {
                token: null,
            }
        },

        mounted() {
            this.getToken()
        },

        updated() {
            this.getToken()
        },

        methods: {
            getToken() {
                this.token = localStorage.getItem('x_xsrf_token')
            },

            logout() {
                axios.post('/logout')
                .then(res => {
                    localStorage.removeItem('x_xsrf_token')
                    this.token = null
                    this.$router.push({name: 'login'})
                })
            },
        },
    }
</script>

<style scoped>

    .wrapper {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        justify-content: space-between;
    }

</style>
