<template>
    <div>
        <input v-model="name" type="text" placeholder="name">
    </div>
    <div>
        <input v-model="email" type="email" placeholder="email">
    </div>
    <div>
        <input v-model="password" type="password" placeholder="password">
    </div>
    <div>
        <input v-model="password_confirmation" type="password" placeholder="password_confirmation">

    </div>
    <div>
        <input @click.prevent="register" type="submit" value="register" class="btn btn-primary">
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
                        localStorage.setItem('x_xsrf-token', res.config.headers['X-XSRF-TOKEN'])
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
