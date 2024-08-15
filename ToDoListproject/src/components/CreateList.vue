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
          <div class="invalid-feedback">{{ errors['title'] }}</div>
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
          <div class="invalid-feedback">{{ errors['description'] }}</div>
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
          <div class="invalid-feedback">{{ errors['dateDep'] }}</div>
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
          <div class="invalid-feedback">{{ errors['dateEc'] }}</div>
        </div>

        <br />

        <button
          class="button-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          @click="create()"
        >
          ADD
        </button>
        &nbsp;&nbsp;
        <router-link :to="{ name: 'backlist' }" class="btn btn-outline-secondary">
          <button
            class="button-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Back to list
          </button>
        </router-link>
      </div>
    </form>

    <br />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useCounterStore from '../stores/counter.js'

const countStore = useCounterStore()
var errors = ref([])
var title = ref('')
var description = ref('')
var dateDep = ref('')
var dateEc = ref('')
var list = ref(null)

function create() {
  if (title.value == '') {
    errors.value['title'] = 'Title field is required'
    return false
  } else {
    errors.value['title'] = ''
  }

  if (description.value == '') {
    errors.value['description'] = 'Description field is required'
    return false
  } else {
    errors.value['description'] = ''
  }

  if (dateDep.value == '' || dateDep.value > dateEc.value) {
    errors.value['dateDep'] = 'Date de départ field is required'
    return false
  } else {
    errors.value['dateDep'] = ''
  }

  if (dateEc.value == '') {
    errors.value['dateEc'] = "Date d'échéance field is required"
    return false
  } else {
    errors.value['dateEc'] = ''
  }

  list.value = {
    id: Date.now(),
    title: title.value,
    description: description.value,
    dateDep: dateDep.value,
    dateEc: dateEc.value
  }
  countStore.save(list.value)
}
</script>
<style></style>
