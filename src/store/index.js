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
      console.log('pro', state.products);
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
    async deleteProduct(state, { id }) {
      await productsApi.deleteProduct({ id });
    },
    async updateProduct(state, { id, imageURL, description }) {
      await productsApi.updateProduct({ id, imageURL, description });
    },
    async uploadImage(store, { formData }) {
      const imageURL = await productsApi.uploadImage({ formData });
      return imageURL;
    },
  },
  getters: {
    products: (state) => state.products,
  },
});
