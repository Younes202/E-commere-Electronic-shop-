// index.js

import { createRouter, createWebHistory } from 'vue-router';
import DetailsProduct from '../views/DetailsProduct.vue';
import List_Products from '../views/List_Products.vue'; // Corrected import path

const routes = [
  { path: '/', component: List_Products },
  { path: '/details/:id', name: 'details', component: DetailsProduct, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
