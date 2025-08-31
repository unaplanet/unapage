import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // ブラウザでアクセスするときのURL
      name: 'home',
      // どのコンポーネントを表示するか指定
      component: () => import('../views/HomeView.vue')
    },
    
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/PortfolioView.vue')
    },
    // ....
  ]
})

export default router
