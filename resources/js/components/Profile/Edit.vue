<template>

    <section class="section about-section gray-bg" id="about">
        <!-- breadcrumbs -->
        <div class="row gx-5 justify-content-center mb-5">
            <div class="col-lg-8 col-xl-6">
                <div class="text-center">
                    <h2 class="fw-bolder">Редактирование профиля</h2>
                    <p class="lead fw-normal text-muted mb-3">
                        На этой странице вы можете изменить ваше Имя и Email
                    </p>
                </div>
            </div>
        </div>
        <!-- breadcrumbs -->
        <div class="container rounded bg-light shadow mt-5 mb-5">
            <div class="p-1 h1 mx-auto display-inline-block">
                <h2 class="text-center fw-bold mt-4">Форма редактирования</h2>
            </div>
            <div class="p-2 mx-4 border-black-25 border-bottom"></div>
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center experience">
                            <h4 class="text-right">Форма редактирования</h4>
                            <button @click.prevent="update" class="btn btn-warning border px-3 p-1 add-experience">
                                Сохранить
                            </button>
                        </div>
                        <br>
                        <div class="col-md-12">
                            <label class="labels">Имя</label>
                            <input v-model="name" type="text" class="form-control mb-3" placeholder="Ваше новое имя">
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Email</label>
                            <input v-model="email" type="text" class="form-control mb-3" placeholder="Ваш новый email">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
    export default {
        name: "Edit",

        data() {
            return {
                name: null,
                email: null,
            }
        },

        mounted() {
            this.getUserData()
        },

        methods: {
            getUserData() {
                axios.get(`/api/profile/${this.$route.params.id}`)
                .then( res => {
                    console.log(res)
                    this.name = res.data.data.name;
                    this.email = res.data.data.email;
                })
            },

            update() {
                axios.patch(`/api/profile/${this.$route.params.id}`, {
                    name: this.name,
                    email: this.email
                })
                .then( res => {
                    this.$router.push({name: 'profile.index', params: {id: this.$route.params.id}})
                })
            },
        },
    }
</script>

<style scoped>

</style>
