import { createRouter, createWebHistory } from 'vue-router';
import DetailsProduct from '../views/DetailsProduct.vue';
import List_Products from '../views/List_Products.vue';

const routes = [
  { path: '/', component: List_Products },
  { path: '/details/:id', name: 'details', component: DetailsProduct },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
