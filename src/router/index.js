import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/',
    name: 'goods',
    component: () => import('@/views/goods')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/cart')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index')
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
