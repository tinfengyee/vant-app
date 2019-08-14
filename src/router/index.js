import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Layout
import Layout from '@/layout'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index')
      },
      {
        path: 'goods',
        name: 'Goods',
        component: () => import('@/views/goods/index')
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('@/views/cart')
      }
    ]
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/user')
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About')
  }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
