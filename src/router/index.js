// router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import DetailsProduct from '../views/DetailsProduct.vue'; // Assuming correct path to DetailsProduct.vue

const routes = [
  { path: '/details/:id', name: 'details', component: DetailsProduct },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
