import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// datepicker api
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

createApp(App).component('Datepicker', Datepicker);

createApp(App).use(router).mount('#app')