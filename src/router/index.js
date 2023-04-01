import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },  
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/secon',
      name: 'secon',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/ListGames.vue')
    },
    {
      path: '/game/:id',
      name: 'game',
      component: () => import('../views/InfoGame.vue')
    },
  ]
})

export default router
