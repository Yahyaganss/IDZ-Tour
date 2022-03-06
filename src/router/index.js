import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage'
import Register from '../views/Register'
import Login from '../views/Login'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  routes
})

export default router
