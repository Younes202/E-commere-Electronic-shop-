import Vue from 'vue';
import VueRouter from 'vue-router';
import DetailsProduct from '../components/DetailsProduct.vue';
import ContentMain from '../components/MainContent.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: ContentMain },
  { path: '/products/:id', component: DetailsProduct, props: true },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
