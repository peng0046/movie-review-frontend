import { createWebHistory, createRouter } from "vue-router";
import Reviews from '../views/Reviews.vue';
import Review from  '../views/Review.vue';

const routes = [
    {
        path: '/',
        name: 'reviews',
        component: Reviews
    },
    {
        path: '/reviews/:id',
        name: 'review',
        component: Review
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;