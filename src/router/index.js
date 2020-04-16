import Vue from 'vue'
import store from "../store/index.js";
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
      component: () => import('../views/Home'),
      meta: {
        requiresAuth: true,
        role: "ROLE_USER"
      }
    }, 
    {
      path: 'profile',
      name: 'Profile',
      component: () => import('../views/Profile'),
      meta: {
        requiresAuth: true,
        role: "ROLE_USER"
      }
    }, 
    {
      path: 'users',
      name: 'Users',
      component: () => import('../views/Admin/Users'),
      meta: {
        requiresAuth: true,
        role: "ROLE_SYSTEM_ADMIN"
      }
    }, 
    {
      path: 'about',
      name: 'About',
      component: () => import('../views/About')
    }, {
      path: 'contact',
      name: 'Contact',
      component: () => import('../views/Contact')
    }]
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      console.log(store.getters.getRoles)
      if (store.getters.getRoles == to.meta.role) {
        console.log("success")
        next();
        return;
      } else {
        from;
      }
    }
    next("/login");
  } else {
    next();
  }
});

export default router