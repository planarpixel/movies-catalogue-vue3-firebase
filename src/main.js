import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide';
import router from './router'

createApp(App)
  .use(router, VueSplide)
  .mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
