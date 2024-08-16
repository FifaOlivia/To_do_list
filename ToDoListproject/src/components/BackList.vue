<script setup>
import useCounterStore from '../stores/counter.js'

const countStore = useCounterStore()
countStore.GetList()

function deleteList(id) {
  if (confirm('Do you really want to delete?')) {
    countStore.DeleteList(id)
  }
}
</script>

<template>
  <div>
    <router-link :to="{ name: 'create' }" class="btn btn-outline-secondary">
      <button
        class="button-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Create ADD
      </button>
    </router-link>
  </div>
  <br />

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">Titre</th>
          <th scope="col" class="px-6 py-3">Description</th>
          <th scope="col" class="px-6 py-3">Date de départ</th>
          <th scope="col" class="px-6 py-3">Date d'échéance</th>
          <th scope="col" class="px-6 py-3" style="width: 20%">Action</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="list in countStore.allList" :key="list">
          <td
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
          >
            {{ list.title }}
          </td>
          <td
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 blackspace-nowrap dark:text-black"
          >
            {{ list['description'] }}
          </td>
          <td
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 blackspace-nowrap dark:text-black"
          >
            {{ list['dateDep'] }}
          </td> 

          <td
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 blackspace-nowrap dark:text-black"
          >
            {{ list['dateEc'] }}
          </td>

          <td>
            <router-link :to="{ name: 'edit', params: { id: list.id } }">
              <button
                class="bg-blue-500 hover:bg-transparent-700 text-white font-bold py-2 px-4 rounded"
              >
                Edit
              </button>
            </router-link>

            &nbsp;<!-- 
            <router-link :to="{ name: 'delete', params: { id: list.id } }"> -->
            <button
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              @click="deleteList(list.id)"
            >
              Delete</button
            ><!-- </router-link> -->&nbsp;
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
