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
