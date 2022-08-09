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

]

const router = createRouter({
    routes,
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
