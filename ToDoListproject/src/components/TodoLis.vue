<template>
  <div>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h1 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Gestionnaire de tâche
      </h1>
    </div>
    <br />
    <hr class="bg-black" />
    <br /> 
    <form @submit.prevent>
      <div class="input-group">
        <div>
          <label for="title">Title: &nbsp;&nbsp;</label>
          <input type="text" class="form-control" placeholder="title" v-model="title" required />
        </div>
        &nbsp;
        <div>
          <label for="description">Description: </label>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Description..."
            required
            v-model="description"
          ></textarea>
        </div>
        &nbsp;

        <div>
          <label for="date">Date de départ: &nbsp;&nbsp;</label>
          <input
            type="date"
            class="form-control"
            placeholder="date de départ"
            v-model="dateDep"
            required
          />
        </div>
        <br />

        <div>
          <label for="date2">Date d'échéance: &nbsp;&nbsp;</label>
          <input
            type="date"
            class="form-control"
            placeholder="date d'échéance"
            v-model="dateEc"
            required
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
    </form>
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
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            ></td>

            <td>
              <button
                class="bg-blue-500 hover:bg-transparent-700 text-white font-bold py-2 px-4 rounded"
              >
                Edit</button
              >&nbsp;
              <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
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
  name: 'TodoLis',

  data() {
    return {
      title: '',
      description: '',
      dateDep: '',
      dateEc: ''
    }
  },
  method: {
    submit() {
      console.log('liviiii')
      console.log(this.title),
        console.log(this.description),
        console.log(this.dateDep),
        console.log(this.dateEc)
    }
  }
}
</script>
<style></style>
