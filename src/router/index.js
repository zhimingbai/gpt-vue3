import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component:()=>import('@/views/index/indexPage.vue') },
    { path: '/login', component: () => import('@/views/login/loginPage.vue') },
    { path: '/talk', component: () => import('@/views/talk/talkPage.vue') },
  ],
})

export default router
