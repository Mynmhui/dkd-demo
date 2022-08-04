import Vue from 'vue'
import Router from 'vue-router'
import workSheet from '@/router/modules/workSheet'
import Level from '@/router/modules/Level'
import Equipment from '@/router/modules/Equipment'
import Personnel from '@/router/modules/Personnel'
import Commodity from '@/router/modules/Commodity'
import Strategic from '@/router/modules/Strategic'
import Order from '@/router/modules/Order'
import Reconciliation from '@/router/modules/Reconciliation'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

// 静态页面
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '帝可得', icon: 'dashboard' }
    }]
  },




  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

//动态页面
const asyncRouter = [
  workSheet,
  Level,
  Equipment,
  Personnel,
  Commodity,
  Strategic,
  Order,
  Reconciliation
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: [...constantRoutes, ...asyncRouter] //路由规则
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
