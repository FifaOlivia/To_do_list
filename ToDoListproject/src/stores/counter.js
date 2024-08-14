//import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
//import router from '@/router'

export const useCounterStore = defineStore('Counter', {
  state: ()=>({
    allList: [],

  }),
  actions: {
    save(list) {
        this.allList.push(list)
        localStorage.setItem('lists', JSON.stringify(this.allList))
       // router.push('/backlist')
      },
      GetList(){
        this.allList = JSON.parse(localStorage.getItem('lists'))
        
      }
  }
})

export default useCounterStore;
