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
    // 更多里面的页面，原本是想写成子路由的，但最后发现不行
    {
      path: '/email',
      component: () => import('@/views/more/emailPage.vue'),
    },
    {
      path: '/code',
      component:()=>import('@/views/more/codePage.vue')
    }
  ],
})

export default router
