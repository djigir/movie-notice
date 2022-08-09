<template>

    <div class="container pb-5 mb-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Register</div>

                    <div class="card-body">
                        <form>
                            <div class="row mb-3">
                                <label for="name" class="col-md-4 col-form-label text-md-end">Name</label>

                                <div class="col-md-6">
                                    <input v-model="name" id="name" type="text" class="form-control" name="name" required autocomplete="name" autofocus>

                                     <!-- error here -->
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="email" class="col-md-4 col-form-label text-md-end">Email Address</label>

                                <div class="col-md-6">
                                    <input v-model="email" id="email" type="email" class="form-control" name="email" required autocomplete="email">

                                    <!-- error here -->
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="password" class="col-md-4 col-form-label text-md-end">Password</label>

                                <div class="col-md-6">
                                    <input v-model="password" id="password" type="password" class="form-control" name="password" required autocomplete="new-password">

                                    <!-- error -->
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="password-confirm" class="col-md-4 col-form-label text-md-end">Confirm Password</label>

                                <div class="col-md-6">
                                    <input v-model="password_confirmation" id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                                </div>
                            </div>

                            <div class="row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button @click.prevent="register" class="btn btn-primary">
                                        Регистрация
                                    </button>
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
        name: "Registration",

        data() {
            return {
                name: null,
                email: null,
                password: null,
                password_confirmation: null,
            }
        },

        methods: {
            register() {
                axios.get('/sanctum/csrf-cookie')
                .then(response => {
                    axios.post('/register', {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        password_confirmation: this.password_confirmation
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
