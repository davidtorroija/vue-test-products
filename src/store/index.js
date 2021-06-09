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
    ADD_PRODUCT(state, { product }) {
      Vue.set(state.products, state.products.length - 1, product);
    },
  },
  actions: {
    async getProducts({ commit }) {
      const products = await productsApi.getProducts();
      commit('SET_PRODUCTS', { products });
    },
    async addProduct({ commit }, { imageURL, description }) {
      const product = await productsApi.addProduct({ imageURL, description });
      commit('ADD_PRODUCT', { product });
    },
  },
  getters: {
    products: (state) => state.products,
  },
});
