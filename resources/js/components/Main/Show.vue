<template>
    <div>
        show
    </div>
</template>

<script>
    export default {
        name: "Show",

        // data() {
        //     return {
        //
        //     }
        // },

        mounted() {
            this.test22();
        },

        methods: {
            test22() {
                axios.get(`api/parse/new-movie-show/`)
                .then(res => {
                    console.log(res)
                })
            }
        }
    }
</script>

<style scoped>

</style>
