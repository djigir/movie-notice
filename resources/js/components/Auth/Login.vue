<template>
<div>
    <input v-model="email" type="email" placeholder="email">
</div>
    <div>
        <input v-model="password" type="password" placeholder="password">
    </div>
    <div>
        <input @click.prevent="login" type="submit" value="login" class="btn btn-primary">
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
