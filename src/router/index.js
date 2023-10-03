import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import JobResultsView from '@/views/JobResultsView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/job/results/',
    name: 'Job Results',
    component: JobResultsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
