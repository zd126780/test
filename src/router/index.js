import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/index'
    },
    {
      path: '/home',
      component: () => import('@/pages/Home/Home'),
      children: [
        {
          path: 'index',
          component: () => import('@/pages/Home/Index'),
        },
        {
          path: 'shopcar',
          component: () => import('@/pages/Home/Shopcar'),
        },
        {
          path: 'my',
          component: () => import('@/pages/Home/My'),
        },
        {
          path: 'order',
          component: () => import('@/pages/Home/Order'),
        },
      ]
    },
    {
      path: '/detail',
      component: () => import('@/pages/Detail/Detail')
    },
    {
      path: '/categary',
      component: () => import('@/pages/Categary/Categary')
    },
    {
      path: '/login',
      component: () => import('@/pages/Login/Login')
    },
    {
      path: '/register',
      component: () => import('@/pages/Register/Register')
    },
  ]
})
