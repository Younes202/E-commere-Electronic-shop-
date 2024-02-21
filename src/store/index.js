// store/index.js

import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get('http://localhost:8001/getters/getting_products');
        commit('setProducts', response.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        // Optionally, you can handle the error or display a message to the user
      }
    },
  },
  getters: {
    getProductById: (state) => (id) => {
      return state.products.find(product => product._id === id);
    },
  },
});
