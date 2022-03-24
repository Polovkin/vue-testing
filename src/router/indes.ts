import {createRouter, createWebHistory} from 'vue-router'
import Post from '@/components/Post/Post.vue'

const routes = [
    {
        path: '/',
        component: {
            template: 'Welcome to the blogging app'
        }
    },
    {
        path: '/posts',
        component: Post
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export {routes};

export default router;
