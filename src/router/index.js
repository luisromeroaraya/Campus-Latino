import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
// import About from '../views/Home.vue';
// import Episodes from '../views/Home.vue';
// import Player from '../views/Home.vue';
// import Contact from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // component: About,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/episodes',
        name: 'Episodes',
        // component: Episodes,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/Episodes.vue')
    },
    {
        path: '/player/:slug',
        name: 'Player',
        props: true,
        // component: Player,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/Player.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        // component: Contact,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/Contact.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router