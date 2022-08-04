<template>
    <div class="container  py-4">
        <div class="row">
            <!-- Navigation -->
            <nav aria-label="navigation" class="main-navigation">
                <router-link v-if="!token" :to="{ name: 'login' }" class="nav-btn btn btn-outline-primary">
                    login
                </router-link>

                <router-link v-if="!token" :to="{ name: 'register' }" class="nav-btn btn btn-outline-primary">
                    registration
                </router-link>

                <a v-if="token" @click.prevent="logout" class="btn btn-success" href="">
                    Logout
                </a>

                <router-link v-if="token" :to="{ name: 'profile.index' }" class="nav-btn btn btn-outline-primary">
                    profile
                </router-link>

                <router-link v-if="token" :to="{ name: 'movie.index' }" class="nav-btn btn btn-outline-primary">
                    Фильмы
                </router-link>

            </nav>
            <!-- /Navigation -->
        </div>

        <div class="col-12">
            <router-view></router-view>
        </div>

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
                this.token = localStorage.getItem('x_xsrf-token')
            },

            logout() {
                axios.post('/logout')
                .then(res => {
                    localStorage.removeItem('x_xsrf-token')
                    this.$router.push({name: 'login'})
                })
            },
        },
    }
</script>

<style scoped>
    .nav-btn a {
        color: white;
        text-decoration: none;
    }

    .nav-btn {
        margin-right: 1rem;
        margin-bottom: 1rem;
    }
</style>
