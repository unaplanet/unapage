import router from './router' 

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).mount('#app')
