<script setup>
import useCounterStore from '../stores/counter.js'

const countStore = useCounterStore()
countStore.GetList()
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

            &nbsp;
            <button
              data-modal-target="popup-modal"
              data-modal-toggle="popup-modal"
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete</button
            >&nbsp;
            <!-- confirmation delete model -->
            <div
              class="fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
              id="modal"
            >
              <div
                id="popup-modal"
                tabindex="-1"
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
              >
                <div class="relative p-4 w-full max-w-md max-h-full">
                  <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button
                      type="button"
                      class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="popup-modal"
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                    <div class="p-4 md:p-5 text-center">
                      <svg
                        class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Are you sure you want to delete this product?
                      </h3>
                      <button
                        data-modal-hide="popup-modal"
                        type="button"
                        class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                      >
                        Yes, I'm sure
                      </button>
                      <button
                        data-modal-hide="popup-modal"
                        type="button"
                        class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        No, cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- fin confirmation delete modal -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
