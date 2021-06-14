<template>
  <div>
    <AddModal @close="closeAddModal" v-if="isAddModalVisible" :editingProduct="editingProduct" />
    <h1> Code test for David Torroija</h1>
    <div v-if="products.length">
      <div class="Products__Header">
        <button class="btn margin-y" @click="showAddProductModal">
          ADD
          <span class="fa fas fa-plus"></span>
        </button>
        <Dropdown label="Sort Items by:" :options="sortByOptions" :selected.sync="sortBy" />
        <span class="px-1"> Listing {{products.length}} products.</span>
      </div>
      <div class="row">
        <template v-for="(product, index) in products">
            <Product
              :key="index"
              :product="product"
              @edit="editProduct(product)"
              @delete="onDeleteProduct(product)"
            />
        </template>
      </div>
    </div>
    <div v-else style="text-align: center;">
      <h3> The products list is empty go ahead and add your first one!</h3>
      <button class="btn margin-y" @click="showAddProductModal">
        ADD
        <span class="fa fas fa-plus"></span>
      </button>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import AddModal from './AddModal.vue';
import Product from './Product.vue';
import Dropdown from './Dropdown.vue';

export default {
  name: 'ProductsDashboard',
  data() {
    return {
      isAddModalVisible: false,
      editingProduct: null,
      sortBy: 'date:-1',
      sortByOptions: [
        {
          label: 'Description A to Z',
          value: 'description:1',
        },
        {
          label: 'Description Z to A',
          value: 'description:-1',
        },
        {
          label: 'Created Ascending',
          value: 'date:1',
        },
        {
          label: 'Created Descending',
          value: 'date:-1',
        },
      ],
    };
  },
  watch: {
    sortBy() {
      this.getProducts({ sortBy: this.sortBy });
    },
  },
  components: {
    AddModal,
    Product,
    Dropdown,
  },
  methods: {
    ...mapActions([
      'getProducts',
      'deleteProduct',
    ]),
    showAddProductModal() {
      this.isAddModalVisible = true;
    },
    closeAddModal() {
      this.editingProduct = null;
      this.isAddModalVisible = false;
    },
    editProduct(product) {
      this.editingProduct = product;
      this.isAddModalVisible = true;
    },
    async onDeleteProduct({ _id }) {
      await this.deleteProduct({ id: _id });
      this.getProducts({ sortBy: this.sortBy });
    },
  },
  computed: {
    ...mapGetters(['products']),
  },
  created() {
    this.getProducts({ sortBy: this.sortBy });
  },
};
</script>
<style lang="scss" scoped>
  .Products__Header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
