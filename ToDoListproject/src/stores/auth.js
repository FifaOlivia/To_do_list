//import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'

export const useAuthStore = defineStore('Auth', {
  state: ()=>({
    allUsers: [],

  }),
  actions: {
    save(user) {
        this.allUsers.push(JSON.parse(localStorage.getItem('users')))
        this.allUsers.push(user)
        localStorage.setItem('users', JSON.stringify(this.allUsers))
        console.log(this.allUsers)
        router.push('/Signup')
      }
  }
})


export default useAuthStore;
