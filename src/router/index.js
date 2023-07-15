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
    component: DashBoard,
    meta: {
      title:'Dashboard'
    }
  },
  {
    path: '/DashBoardEm',
    name: 'Dashboard',
    component: DashBoardEm,
    meta: {
      title:'Dashboard'
    }
  },
  {
    path: '/document',
    name: 'Document',
    component: Document,
    meta: {
      title:'Document'
    }
  },
  {
    path: '/folder',
    name: 'Folder',
    component: ProjectFolder,
    meta: {
      title:'Project'
    }
  },
  {
    path: '/team',
    name: 'Team',
    component: UserTeam ,
    meta: {
      title:'Team'
    }
  },
  {
    path: '/setting/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title:'Setting',
      desc:'Profile'
    }
  },
  {
    path: '/setting/notification',
    name: 'Notification',
    component: Notification,
    meta: {
      title:'Setting',
      desc:' Notification'
    }
  },
  {
    path: '/setting/notificationEmployee',
    name: 'Notification',
    component: NotificationEmployee,
    meta: {
      title:'Setting',
      desc:' Notification'
    }
  },
  {
    path: '/setting/user-manage',
    name: 'UserManage',
    component: UserManage,
    meta: {
      title:'Setting',
      desc:'User'
    }  
  },
  {
    path: '/setting/plan-editor',
    name: 'PlanEditor',
    component: PlanEditor,
    meta: {
      title:'Setting',
      desc:'Plan'
    } 
  },
  {
    path: '/setting/document-type',
    name: 'DocumentType',
    component: DocType,
    meta: {
      title:'Setting',
      desc:'Document Type'
    } 
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
