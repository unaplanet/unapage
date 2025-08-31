import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'//homeviewは最初に表示されるページ

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/about', // ブラウザでアクセスするときのURL
      name: 'about',
      // どのコンポーネントを表示するか指定
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/links', // ブラウザでアクセスするときのURL
      name: 'links',
      // どのコンポーネントを表示するか指定
      component: () => import('../views/LinksView.vue')
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