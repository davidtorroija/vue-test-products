import Vue from 'vue';
import Vuex from 'vuex';
import productsApi from '../api/products';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    SET_PRODUCTS(state, { products }) {
      Vue.set(state, 'products', products);
    },
  },
  actions: {
    async getProducts({ commit }) {
      const products = await productsApi.getProducts();
      commit('SET_PRODUCTS', { products });
    },
  },
  getters: {
    products: (state) => state.products,
  },
});
