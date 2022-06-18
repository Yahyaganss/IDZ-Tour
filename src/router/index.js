import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage'
import Register from '../views/Register'
import Login from '../views/Login'
import Report from '../views/Report'
import ForgetPassword from '../views/ForgetPassword'
import Suggestion from '../views/Suggestion'
import HistoryBuilding from '../views/HistoryBuilding'
import News from '../views/News'
import Food from '../views/Food'
import PalembangHistory from '../views/PalembangHistory'
import testing from '../views/testing'
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
  {
    path: '/report',
    name: 'Report',
    component: Report
  },
  {
    path: '/forget-password',
    name: 'ForgetPassword',
    component: ForgetPassword
  },
  {
    path: '/saran',
    name: 'Suggestion',
    component: Suggestion
  },
  {
    path: '/bangunan-sejarah',
    name: 'HistoryBuilding',
    component: HistoryBuilding
  },
  {
    path: '/berita',
    name: 'News',
    component: News
  },
  {
    path: '/makanan-khas-palembang',
    name: 'Food',
    component: Food
  },
  {
    path: '/sejarah-palembang',
    name: 'PalembangHistory',
    component: PalembangHistory
  },
  {
    path: '/testing',
    name: 'testing',
    component: testing
  },
]

const router = new VueRouter({
  routes
})

export default router
