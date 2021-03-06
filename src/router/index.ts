import { createRouter, createWebHashHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('views/main/main.vue')
  },
  {
    path: '/menuDemo',
    component: () => import('views/main/menu-demo.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
