import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('./components/Main/Index'),
        name: 'main.index',
        meta: {
            title: 'MovieNotes|Главная',
            withParams: false,
        }
    },
    {
        path: '/new-movie-show/:link',
        component: () => import('./components/Main/Show'),
        name: 'main.show',
        meta: {
            title: 'MovieNotes|Фильм ',
            withParams: true,
        }
    },
    {
        path: '/profile',
        component: () => import('./components/Profile/Index'),
        name: 'profile.index',
        meta: {
            title: 'MovieNotes|Профиль ',
            withParams: true,
        }
    },
    {
        path: '/profile/:id/edit',
        component: () => import('./components/Profile/Edit'),
        name: 'profile.edit',
        meta: {
            title: 'MovieNotes|Редактирование профиля ',
            withParams: true,
        }
    },
    {
        path: '/login',
        component: () => import('./components/Auth/Login'),
        name: 'login',
        meta: {
            title: 'MovieNotes|Вход',
            withParams: false,
        }
    },
    {
        path: '/register',
        component: () => import('./components/Auth/Registration'),
        name: 'register',
        meta: {
            title: 'MovieNotes|Регистрация',
            withParams: false,
        }
    },
    {
        path: '/movie',
        component: () => import('./components/Movie/Index'),
        name: 'movie.index',
        meta: {
            title: 'MovieNotes|Список фильмов',
            withParams: false,
        }
    },
    {
        path: '/movie/create',
        component: () => import('./components/Movie/Create'),
        name: 'movie.create',
        meta: {
            title: 'MovieNotes|Создание фильма',
            withParams: false,
        }
    },
    {
        path: '/movie/:id',
        component: () => import('./components/Movie/Show'),
        name: 'movie.show',
        meta: {
            title: 'MovieNotes|Фильм ',
            withParams: true
        }
    },
    {
        path: '/movie/:id/edit',
        component: () => import('./components/Movie/Edit'),
        name: 'movie.edit',
        meta: {
            title: 'MovieNotes|Фильм ',
            withParams: true
        }
    },
    {
        path: '/movie/add-info',
        component: () => import('./components/Movie/Info'),
        name: 'movie.info'

    },

]

const router = createRouter({
    routes,
    linkActiveClass: 'active',
    history: createWebHistory(),
})

router.beforeEach((to, from, next) => {
    /** set meta title **/
    window.document.title =
            !to.meta.withParams || typeof(to.params.metaTitle) == 'undefined'
            ? to.meta.title
            : to.params.metaTitle

    const token = localStorage.getItem('x_xsrf_token')

    if (!token) {
        if (to.name === 'login' || to.name === 'register' || to.name === 'index') {
            return next()
        } else {
            return next({name: 'login'})
        }
    }

    if (to.name === 'login' || to.name === 'register' && token) {
        return next({name: 'profile.index'})
    }

    next()
})

export default router
