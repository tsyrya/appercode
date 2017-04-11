import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login'
import Roles from '@/components/Roles'
import auth from '../services/auth'

Vue.use(Router)

export var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta: {isRequireAuth: true},
      children: [
        {
          path: '/roles',
          name: 'Roles',
          component: Roles,
          meta: {isRequireAuth: true}
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {loginPage: true}
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.isRequireAuth) {
    if (auth.checkAuth()) {
      next()
    }
    else {
      next({path: '/login'})
    }
  }
  else {
    if (to.meta.loginPage && auth.checkAuth()) {
      next('/')
    }
    else {
      next()
    }
  }
})
