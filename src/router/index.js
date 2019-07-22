import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { 
        requiresAuth: true,
      }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/Register.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') == null) {
      next({
          path: '/login',
          params: { nextUrl: to.fullPath }
      })
    } else {
      let token = JSON.parse(localStorage.getItem('token'))
      if (token == '') {
        next({
          path: '/login',
          params: { nextUrl: to.fullPath }
        })
      } else {
        next(); 
      }
    }
  } else {
    next() 
  }
})


export default router;
