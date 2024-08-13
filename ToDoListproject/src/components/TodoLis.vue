<!-- <template>
  <div>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h1 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Gestionnaire de tâche
      </h1>
    </div>
    <br />
    <hr class="bg-black" />
    <br />

    <div class="input-group">
      <div>
        <label for="title">Title: &nbsp;&nbsp;</label>
        <input
          type="text"
          class="form-control"
          placeholder="title"
          v-model="userInput"
          @keyup.enter="addItem"
        />
      </div>
      &nbsp;
      <div>
        <label for="description">Description: </label>
        <textarea
          id="message"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Description..."
        ></textarea>
      </div>
      &nbsp;

      <div>
        <label for="date">Date de départ: &nbsp;&nbsp;</label>
        <input
          type="date"
          class="form-control"
          placeholder="date de départ"
          @keyup.enter="addItem"
        />
      </div>
      <br />

      <div>
        <label for="date2">Date d'échéance: &nbsp;&nbsp;</label>
        <input
          type="date"
          class="form-control"
          placeholder="date d'échéance"
          @keyup.enter="addItem"
        />
      </div>
      <br />

      <button
        class="button-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        ADD
      </button>
    </div>
    <br />

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Titre</th>
            <th scope="col" class="px-6 py-3">Description</th>
            <th scope="col" class="px-6 py-3">Date de départ</th>
            <th scope="col" class="px-6 py-3">Date d'échéance</th>
            <th scope="col" class="px-6 py-3">Priorité</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        
        <tbody>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            v-for="(item, index) in filteredList"
            :key="index"
            :class="{ 'even-row': index % 2 === 0, completed: item.completed }"
          >
            <td
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              :class="{ 'completed-cell': item.completed }"
            >
              {{ item.value }}
            </td>

            <td>
              <button
                class="bg-blue-500 hover:bg-transparent-700 text-white font-bold py-2 px-4 rounded"
                @click="editItem(index)"
              >
                Edit</button
              >&nbsp;
              <button
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                @click="deleteItem(index)"
              >
                Delete</button
              >&nbsp;
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Update
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userInput: '',
      searchInput: '',
      list: []
    }
  },
  computed: {
    filteredList() {
      return this.list.filter((item) =>
        item.value.toLowerCase().includes(this.searchInput.toLowerCase())
      )
    }
  },
  methods: {
    addItem() {
      if (this.userInput.trim() !== '') {
        const newItem = {
          id: Math.random(),
          value: this.userInput.trim(),
          completed: false
        }
        this.list.push(newItem)
        this.userInput = ''
      }
    },
    deleteItem(index) {
      const deleteTodo = alert('Are you sure to want to delete ?')
      if (deleteTodo) {
        this.list.splice(index, 1)
      }
    },
    editItem(index) {
      const editedTodo = prompt('Edit the todo:')
      if (editedTodo !== null && editedTodo.trim() !== '') {
        this.list[index].value = editedTodo.trim()
      }
    },
    toggleCompleted(index) {
      this.list[index].completed = !this.list[index].completed
    }
  }
}
</script>
<style></style>
  -->