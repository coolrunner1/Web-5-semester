import { createRouter, createWebHistory } from 'vue-router';
import Test from "@/components/Test.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../components/Home.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../components/AboutMe.vue'),
        },
        {
            path: '/interests',
            name: 'interests',
            component: () => import('../components/MyInterests.vue'),
        },
        {
            path: '/studies',
            name: 'studies',
            component: () => import('../components/Studies.vue'),
        },
        {
            path: '/gallery',
            name: 'gallery',
            component: () => import('../components/Gallery.vue'),
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../components/Form.vue'),
        },
        {
            path: '/test',
            name: 'test',
            component: () => import('../components/Test.vue'),
        },
    ],
})

export default router;