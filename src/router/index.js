import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginVue from '@/views/login-register/Login.vue'
import Register from '@/views/login-register/Register.vue'
import DashBoard from '@/views/dashboard/DashBoard.vue'
import Document from '@/views/document/Document'
import ProjectFolder from '@/views/project/ProjectFolder'
import UserTeam from '@/views/team/UserTeam'
import Profile from '@/views/setting/profile/Profile'
import Notification from '@/views/setting/notification/Notification'
import UserManage from '@/views/setting/userManage/UserManage'
import PlanEditor from '@/views/setting/planEditor/PlanEditor'
import NotificationEmployee from '@/views/setting/notification/NotificationEm.vue'
import DocType from '@/views/DocumentType/DocType.vue'
import DashBoardEm from '@/views/dashEmployee/DashBoardEm.vue'


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
    path: '/DashBoardEm',
    name: 'Dashboard',
    component: DashBoardEm
  },
  {
    path: '/document',
    name: 'Document',
    component: Document
  },
  {
    path: '/folder',
    name: 'Folder',
    component: ProjectFolder
  },
  {
    path: '/team',
    name: 'Team',
    component: UserTeam 
  },
  {
    path: '/setting/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/setting/notification',
    name: 'Notification',
    component: Notification
  },
  {
    path: '/setting/notificationEmployee',
    name: 'Notification',
    component: NotificationEmployee
  },
  {
    path: '/setting/user-manage',
    name: 'UserManage',
    component: UserManage 
  },
  {
    path: '/setting/plan-editor',
    name: 'PlanEditor',
    component: PlanEditor
  },
  {
    path: '/setting/document-type',
    name: 'DocumentType',
    component: DocType
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
