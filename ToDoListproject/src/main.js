import './assets/main.css'

import { createApp } from 'vue'

import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

let modal = document.getElementById('modal');
let btn = document.getElementById('open-btn');
let button = document.getElementById('ok-btn');
 

btn.onclick = function() {
  modal.style.display = 'block';
};

button.onclick = function() {
  modal.style.display = 'none';
};