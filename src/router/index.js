import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'login', component: () => import('@/views/index.vue')},

];

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router