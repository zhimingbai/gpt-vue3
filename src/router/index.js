import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/index/indexPage.vue'),
    },
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
    // 代码转换和代码解释是一样的
    {
      path: '/code',
      component: () => import('@/views/more/codePage.vue'),
    },
    {
      path: '/studyAnalysis',
      component: () => import('@/views/more/studyAnalysisPage.vue'),
    },
    {
      path: '/contact',
      component: () => import('@/views/more/contractPage.vue'),
    },
    {
      path: '/meeting',
      component: () => import('@/views/more/meetingPage.vue'),
    },
    {
      path: '/dailyReport',
      component: () => import('@/views/more/dailyReportPage.vue'),
    },
    {
      path: '/sql',
      component: () => import('@/views/more/sqlPage.vue'),
    },
    {
      path: '/address',
      component: () => import('@/views/more/addressPage.vue'),
    },
    {
      path: '/grammer',
      component: () => import('@/views/more/grammarPage.vue'),
    },
    {
      path: '/summary',
      component: () => import('@/views/more/summaryPage.vue'),
    },
    {
      path: '/report',
      component: () => import('@/views/more/reportPage.vue'),
    },
  ],
})

export default router
