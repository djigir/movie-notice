<template>

    <div class="container rounded bg-light shadow mt-5 mb-5">
        <div class="p-1 h1 text-primary mx-auto display-inline-block">
            <h2 class="text-center fw-bold mt-4">Профиль</h2>
        </div>
        <div class="p-2 mx-4 border-black-25 border-bottom"></div>
        <div class="row">
            <div class="col-md-3 border-right">
                <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                    <img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg">
                    <span class="font-weight-bold">Edogaru</span>
                    <span class="text-black-50">edogaru@mail.com.my</span>
                    <span> </span>
                </div>
            </div>
            <div class="col-md-5 border-right">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4 class="text-right">Общая информация</h4>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12">
                            <label class="labels">Всего фильмов</label>
                            <input class="form-control" readonly value="100">
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Просмотрено</label>
                            <input class="form-control" value="20" readonly>
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Не просмотрено</label>
                            <input class="form-control" value="70" readonly>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center experience">
                        <span>Данные профиля</span>
                        <span class="btn btn-warning border px-3 p-1 add-experience">
                            Редактировать
                        </span>
                    </div>
                    <br>
                    <div class="col-md-12">
                        <label class="labels">Experience in Designing</label>
                        <input type="text" class="form-control" placeholder="experience" value="">
                    </div> <br>
                    <div class="col-md-12">
                        <label class="labels">Additional Details</label>
                        <input type="text" class="form-control" placeholder="additional details" value="">
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
                    console.log(res)
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
