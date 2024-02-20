// src/main.js

import { createApp } from 'vue';
import App from './App.vue';
import AxiosPlugin from './axios';

// Import Tailwind CSS
import './assets/css/tailwind.css';

const app = createApp(App);
app.use(AxiosPlugin); // Use the Axios plugin
app.mount('#app');
