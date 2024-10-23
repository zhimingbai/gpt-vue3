import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/main' },
    { path: '/login', component: () => import('@/views/login/loginPage.vue') },
    { path: '/main', component: () => import('@/views/main/mainPage.vue') },
  ],
})

export default router
