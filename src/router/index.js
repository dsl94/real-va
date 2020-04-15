import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Layout from '../views/Layout'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('../views/Home')
    }, {
      path: 'about',
      name: 'About',
      component: () => import('../views/About')
    }, {
      path: 'contact',
      name: 'Contact',
      component: () => import('../views/Contact')
    }],
    beforeEnter(to, from, next) {
      if (!localStorage.getItem('authenticated')) {
        next("/login");
      }
      next();
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router