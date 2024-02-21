import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/tailwind.css';
import AxiosPlugin from './axios';
import router from './router';
import store from './store'; // Import your Vuex store

const app = createApp(App);
app.use(AxiosPlugin);
app.use(router);
app.use(store); // Use Vuex store
app.mount('#app');
