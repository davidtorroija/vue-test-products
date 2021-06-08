<template>
  <div class="hello">
    <AddModal @close="closeAddModal" v-if="isAddModalVisible"/>
    <h1> Code test for David Torroija</h1>
    <button class="btn margin-y" @click="showAddProductModal">
      ADD
      <span class="fa fas fa-plus"></span>
    </button>
    <div class="row px-1">
      <template v-for="(product, index) in products">
          <div
              :key="index"
              class="ProductCard"
          >
            <img
              :src="product.imageURL"
              alt="some Image"
              class="ProductCard__image"
            >
            <span class="ProductCard__description">
              {{ product.description }}
            </span>
          </div>
      </template>
    </div>
    <div class="row px-1">
      <template v-for="(product, index) in products">
          <div
              :key="index"
              class="ProductCard"
          >
            <img
              src="https://images.unsplash.com/photo-1622495551393-9b3c4801ae14?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
              alt="some Image"
              class="ProductCard__image"
            >
            <span class="ProductCard__description">
              {{ product.name }}
            </span>
          </div>
      </template>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import AddModal from './AddModal.vue';

export default {
  name: 'HelloWorld',
  data() {
    return {
      isAddModalVisible: false,
    };
  },
  components: {
    AddModal,
  },
  methods: {
    ...mapActions(['getProducts']),
    showAddProductModal() {
      this.isAddModalVisible = true;
      console.log('aca');
    },
    closeAddModal() {
      this.isAddModalVisible = false;
    },
  },
  computed: {
    ...mapGetters(['products']),
  },
  created() {
    this.getProducts();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .ProductCard {
    flex: 0 0 25%;
    max-width: 25%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    display: inline-block;
    &__image {
      width: 100%;
    }
  }
</style>
