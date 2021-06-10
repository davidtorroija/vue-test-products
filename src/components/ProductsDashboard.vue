<template>
  <div class="hello">
    <AddModal @close="closeAddModal" v-if="isAddModalVisible"/>
    <h1> Code test for David Torroija</h1>
    <button class="btn margin-y px-1" @click="showAddProductModal">
      ADD
      <span class="fa fas fa-plus"></span>
    </button>
    <div class="row px-1">
      <template v-for="(product, index) in products">
          <div
              :key="index"
              class="ProductCard"
          >
            <div class="ProductCard__menu">
              <button class="btn btn-icon px-1" @click="editProduct">
              <span class="fa fas fa-pencil fa-lg"></span>
              </button>
              <button class="btn btn-icon px-1" @click="deleteProduct">
                <span class="fa fas fa-trash fa-lg"></span>
              </button>
            </div>
            <img
              :src="product.imageURL"
              alt="some Image"
              class="ProductCard__image"
            >
            <div class="ProductCard__overlay">
            </div>
            <span class="ProductCard__description">
              {{ product.description }}
            </span>
          </div>
      </template>
    </div>
    <!-- <div class="row px-1">
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
    </div> -->
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import AddModal from './AddModal.vue';

export default {
  name: 'ProductsDashboard',
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
    },
    closeAddModal() {
      this.isAddModalVisible = false;
    },
    editProduct() {
    },
    deleteProduct() {
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
    flex: 0 0 35%;
    max-width: 35%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    display: inline-block;
    z-index: 900;
    &__image {
      width: 100%;
    }
    &__overlay {
      position: absolute;
      bottom: 0;
      left: 15px;
      right: 15px;
      top: 0;
      background-color: rgb(172 45 238 / 78%);
      z-index: 901;
      visibility: hidden;
    }
    &__description {
      position: absolute;
      height: 35px;
      width: 89%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      bottom: 0;
      left: 20px;
      z-index: 902;
      visibility: hidden;
    }
    &__menu {
      visibility: hidden;
      position: absolute;
      z-index: 902;
      right: 20px;
      top: 5px;
    }
    &:hover {
      .ProductCard {
        &__menu, &__description, &__overlay {
          visibility: visible;
        }
      }
    }
  }
</style>
