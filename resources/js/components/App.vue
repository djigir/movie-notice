<template>
    <div class="container">
        <div class="row">
            <!-- Navigation -->
            <nav aria-label="navigation" class="main-navigation">
                <a class="nav-btn btn btn-primary">
                    <router-link :to="{ name: 'profile.index' }">profile</router-link>
                </a>
                <a class="nav-btn btn btn-primary">
                    <router-link :to="{ name: 'movie.index' }">Фильмы</router-link>
                </a>
                <a class="nav-btn btn btn-primary">
                    <router-link :to="{ name: 'movie.create' }">Добавить Фильм</router-link>
                </a>
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
