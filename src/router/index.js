import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginVue from '@/views/login-register/Login.vue'
import Register from '@/views/login-register/Register.vue'
import DashBoard from '@/views/dashboard/DashBoard.vue'
import Document from '@/views/document/Document'
import ProjectFolder from '@/views/project/ProjectFolder'
import UserTeam from '@/views/team/UserTeam'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginVue
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/',
    name: 'Dashboard',
    component: DashBoard 
  },
  {
    path: '/document',
    name: 'Document',
    component: Document
  },
  {
    path: '/folder',
    name: 'Floder',
    component: ProjectFolder
  },
  {
    path: '/team',
    name: 'Team',
    component: UserTeam 
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
