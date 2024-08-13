<script setup>
import { ref } from 'vue'
import useAuthStore from '../stores/auth.js'

const autStore = useAuthStore();
var errors = ref([])
var email = ref('')
var password = ref('')
var user = ref(null) 
var password_confirmation = ref('')

function reisterUser() {
  if (email.value == '') {
    errors.value['email'] = 'Email field is required'
    return false
  } else {
    errors.value['email'] = ''
  }

  if (password.value == '') {
    errors.value['password'] = 'password field is required'
    return false
  } else {
    errors.value['password'] = ''
  }

  if (password.value !== password_confirmation.value) {
    errors.value['password_confirmation'] = 'password should match !'
    return false
  } else {
    errors.value['password_confirmation'] = ''
  }

  if (password_confirmation.value === '') {
    errors.value['password_confirmation'] = 'password confirmation field is required'
    return false
  } else {
    errors.value['password_confirmation'] = ''
  }
  user.value = {
    email: email.value,
    password: password.value
  }
  autStore.save(user.value)
}
</script>

<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent>
        <div class="form-group">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >

          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              placeholder="Email"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              v-model="email"
            />
          </div>
          <div class="invalid-feedback">{{ errors['email'] }}</div>
        </div>

        <div class="form-group">
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
          </div>
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              placeholder="Password"
              v-model="password"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div class="invalid-feedback">{{ errors['password'] }}</div>
        </div>

        <div class="form-group">
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
              >Password Confirmation</label
            >
          </div>
          <div class="mt-2">
            <input
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              autocomplete="current-password"
              v-model="password_confirmation"
              placeholder="Confirm Password"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div class="invalid-feedback">{{ errors['password_confirmation'] }}</div>
        </div>

        <div>
          <button
            @click="reisterUser()"
            type="submit"
            class="cursor-not-allowed flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>

        <div class="text-sm text-center">
          Do you have an account ?<router-link to="/Signup">
            <span class="font-semibold text-indigo-600 hover:text-indigo-500"
              >Click to sign up</span
            ></router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<style></style>
