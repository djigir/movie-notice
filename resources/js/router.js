import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('./components/App'),
        name: 'index'
    },
    {
        path: '/profile',
        component: () => import('./components/Profile/Index'),
        name: 'profile.index'
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
        path: '/movie/:id/edit',
        component: () => import('./components/Movie/Edit'),
        name: 'movie.edit'
    },

]

export default createRouter({
    history: createWebHistory(),
    routes
})
