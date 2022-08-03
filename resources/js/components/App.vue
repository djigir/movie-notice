<template>
    <div class="container  py-4">
        <div class="row">
            <!-- Navigation -->
            <nav aria-label="navigation" class="main-navigation">
                <router-link :to="{ name: 'profile.index' }" class="nav-btn btn btn-outline-primary">
                    profile
                </router-link>

                <router-link :to="{ name: 'movie.index' }" class="nav-btn btn btn-outline-primary">
                    Фильмы
                </router-link>

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
