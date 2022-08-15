import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('./components/Main/Index'),
        name: 'index'
    },
    {
        path: '/profile',
        component: () => import('./components/Profile/Index'),
        name: 'profile.index'
    },
    {
        path: '/profile/:id/edit',
        component: () => import('./components/Profile/Edit'),
        name: 'profile.edit'
    },
    {
        path: '/login',
        component: () => import('./components/Auth/Login'),
        name: 'login'
    },
    {
        path: '/register',
        component: () => import('./components/Auth/Registration'),
        name: 'register'
    },
    {
        path: '/movie',
        component: () => import('./components/Movie/Index'),
        name: 'movie.index'
    },
    {
        path: '/movie/create',
        component: () => import('./components/Movie/Create'),
        name: 'movie.create'
    },
    {
        path: '/movie/:id',
        component: () => import('./components/Movie/Show'),
        name: 'movie.show'
    },
    {
        path: '/movie/:id/edit',
        component: () => import('./components/Movie/Edit'),
        name: 'movie.edit'
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
