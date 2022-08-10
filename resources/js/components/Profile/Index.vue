<template>

    <div class="container rounded bg-light shadow mt-5 mb-5" v-if="user">
        <div class="p-1 h1 text-primary mx-auto display-inline-block">
            <h2 class="text-center fw-bold mt-4">Профиль</h2>
        </div>
        <div class="p-2 mx-4 border-black-25 border-bottom"></div>
        <div class="row">
            <div class="col-md-6 border-right">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4 class="text-right">Общая информация</h4>
                    </div>
                    <div class="row mt-4">
                        <div class="col-md-12">
                            <label class="labels">Всего фильмов</label>
                            <input class="form-control mb-3" readonly value="100">
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Просмотрено</label>
                            <input class="form-control mb-3" value="20" readonly>
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Не просмотрено</label>
                            <input class="form-control" value="70" readonly>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center experience">
                        <h4 class="text-right">Данные профиля</h4>
                        <span class="btn btn-warning border px-3 p-1 add-experience">
                            Редактировать
                        </span>
                    </div>
                    <br>
                    <div class="col-md-12">
                        <label class="labels">Имя</label>
                        <input type="text" class="form-control mb-3" placeholder="experience" :value="user.name" readonly>
                    </div>
                    <div class="col-md-12">
                        <label class="labels">Email</label>
                        <input type="text" class="form-control mb-3" placeholder="additional details" :value="user.email" readonly>
                    </div>
                    <div class="col-md-12">
                        <label class="labels">Дата создания</label>
                        <input type="text" class="form-control" placeholder="additional details" :value="user.created_at" readonly>
                    </div>
                </div>
            </div>
        </div>
    </div>

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
                    console.log(this.user)
                })
            }
        }
    }
</script>

<style scoped>

    .add-experience:hover {
        background: #BA68C8;
        color: #fff;
        cursor: pointer;
        border: solid 1px #BA68C8
    }

</style>
