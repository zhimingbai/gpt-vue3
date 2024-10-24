import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('@/views/index/indexPage.vue') },
    { path: '/login', component: () => import('@/views/login/loginPage.vue') },
    { path: '/talk', component: () => import('@/views/talk/talkPage.vue') },
    {
      path: '/image',
      component: () => import('@/views/TextToImage/imagePage.vue'),
    },
    { path: '/word', component: () => import('@/views/word/wordPage.vue') },
    {
      path: '/more',
      component: () => import('@/views/more/morePage.vue'),
    },
    {
      path: '/email',
      component: () => import('@/views/more/emailPage.vue'),
    },
  ],
})

export default router
