<template>

    <div class="container pb-5 mb-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Вход</div>

                    <div class="card-body">
                        <form method="POST">

                            <div class="row mb-3">
                                <label for="email" class="col-md-4 col-form-label text-md-end">Email</label>

                                <div class="col-md-6">
                                    <input v-model="email" id="email" type="email" class="form-control" name="email" required autocomplete="email" autofocus>
                                    <!-- error here -->
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="password" class="col-md-4 col-form-label text-md-end">Password</label>

                                <div class="col-md-6">
                                    <input v-model="password" id="password" type="password" class="form-control" name="password" required autocomplete="current-password">

                                    <!-- error here -->

                                </div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-md-6 offset-md-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="remember" id="remember">

                                        <label class="form-check-label" for="remember">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button @click.prevent="login" class="btn btn-primary">
                                        Войти
                                    </button>

                                    <a class="btn btn-link">
                                        Forgot Your Password?
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Login",

        data() {
            return {
                email: null,
                password: null,
            }
        },

        methods: {
            login() {
                axios.get('/sanctum/csrf-cookie')
                    .then(response => {
                    axios.post('/login', {
                        email: this.email,
                        password: this.password
                    })
                    .then(res => {
                        localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
                        this.$router.push({ name: 'profile.index' })
                    })
                    .catch(err => {
                        console.log(err.response)
                    })
                })
            }
        }
    }
</script>

<style scoped>

</style>
