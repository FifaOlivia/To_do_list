import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistrationForm from '@/components/RegistrationForm.vue'
import UserLogin from '@/components/UserLogin.vue'
import CreateList from '@/components/CreateList.vue'
import DeleteList from '@/components/DeleteList.vue'
import EditList from '@/components/EditList.vue'
import BackList from '@/components/BackList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { 
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Signin',
      name: 'Sign in',
      component: RegistrationForm
    },
    {
      path: '/Signup',
      name: 'Sign up',
      component: UserLogin
    },
    {
      path: '/create',
      name: 'create',
      component: CreateList
    },
    {
      path: '/delete/:id',
      name: 'delete',
      component: DeleteList
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditList
    },
    {
      path: '/backlist',
      name: 'backlist',
      component: BackList
    },
   
  ]
})

export default router
