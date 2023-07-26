import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/on-going',
      name: 'On Going',
      component: () => import('../views/OnGoingView.vue')
    },
    {
      path: '/completed',
      name: 'Completed',
      component: () => import('../views/CompletedView.vue')
    },
    {
      path: '/anime/:slug',
      name: 'Anime',
      component: () => import('../views/SeriesDetailView.vue')
    },
    {
      path: '/episode/:slug',
      name: 'Episode',
      component: () => import('../views/SeriesEpisodeView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404 Not Found',
      component: () => import('../views/404.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  document.title = `AniStream | ${to.name}`
  next()
})

export default router
