<template>
    <div class="row gx-5 justify-content-center">
        <div class="col-lg-8 col-xl-6">
            <div class="text-center">
                <h2 class="fw-bolder">{{ title }}</h2>
                <p class="lead fw-normal text-muted mb-3">
                    {{ description }}
                </p>
                <router-link v-if="isButton" :to="to" class="btn btn-primary add-movie-btn text-light">
                    <slot></slot>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageHeader",

        props: {
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            isButton: {
                type: Boolean,
                default: false,
            },
            to: {
                type: Object,
            }
        },

    }
</script>

<style scoped>

</style>
