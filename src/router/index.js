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
        roles: ["ROLE_USER", "ROLE_ADMIN"]
      }
    }, 
    {
      path: 'create-airline',
      name: 'CreateAirline',
      component: () => import('../views/Airline/CreateAirline'),
      meta: {
        requiresAuth: true,
        role: "ROLE_USER"
      }
    }, 
    {
      path: 'join-airline',
      name: 'JoinAirline',
      component: () => import('../views/Airline/JoinAirline'),
      meta: {
        requiresAuth: true,
        role: "ROLE_USER"
      }
    }, 
    {
      path: 'fleet',
      name: 'Fleet',
      component: () => import('../views/Airline/Fleet'),
      meta: {
        requiresAuth: true,
        role: "ROLE_USER"
      }
    }, 
    {
      path: 'airline-details',
      name: 'AirlineDetails',
      component: () => import('../views/Airline/AirlineDetails'),
      meta: {
        requiresAuth: true,
        role: "ROLE_ADMIN"
      }
    }, 
    {
      path: 'routes',
      name: 'Routes',
      component: () => import('../views/Airline/AirlineRoutes'),
      meta: {
        requiresAuth: true,
        role: "ROLE_ADMIN"
      }
    }, 
    {
      path: 'bookings',
      name: 'Bookings',
      component: () => import('../views/Airline/Booking'),
      meta: {
        requiresAuth: true,
        roles: ["ROLE_USER", "ROLE_ADMIN"]
      }
    }, 
    {
      path: 'buy-aircraft',
      name: 'BuyAircraft',
      component: () => import('../views/Airline/BuyAircraft'),
      meta: {
        requiresAuth: true,
        role: "ROLE_ADMIN"
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
      path: 'admin-aircrafts',
      name: 'AdminAircrafts',
      component: () => import('../views/Admin/Aircrafts'),
      meta: {
        requiresAuth: true,
        role: "ROLE_SYSTEM_ADMIN"
      }
    }, 
    {
      path: 'flights',
      name: 'Flights',
      component: () => import('../views/Admin/Flights'),
      meta: {
        requiresAuth: true,
        role: "ROLE_SYSTEM_ADMIN"
      }
    }, 
    {
      path: 'admin-special-cargo',
      name: 'SpecialCargo',
      component: () => import('../views/Admin/SpecialCargo'),
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
      }else if (store.getters.getRoles.every(elem => to.meta.roles.indexOf(elem) > -1)) {
        next();
        return;
      } else {
        console.log(to.meta.roles);
        from;
      }
    }
    next("/login");
  } else {
    next();
  }
});

export default router