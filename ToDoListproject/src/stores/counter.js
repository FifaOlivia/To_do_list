//import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
//import { list } from 'postcss'

export const useCounterStore = defineStore('Counter', {
  state: ()=>({
    allList: [],

  }),
  actions: {
    save(list) {
        this.allList.push(list)
        localStorage.setItem('lists', JSON.stringify(this.allList))
        router.push('/backlist')
        alert("To do create successfully")
      },
      GetList(){
        this.allList = JSON.parse(localStorage.getItem('lists'))    
      },
      UpdateList(listId){
        this.allList[this.allList.indexOf(this.allList.find((list) => list.id == listId.id))] = listId
        localStorage.setItem('lists', JSON.stringify(this.allList));
        alert("To do updated successfully")
      }
  }
})

export default useCounterStore;
