<template>
  <div class="AddModal">
    <div class="AddModal__outer">
      <div class="AddModal__header">
        <h3>{{ modalTitle }}</h3>
        <button class="btn btn-icon" @click="closeModal">
          <span class="fa fas fa-times fa-lg"></span>
        </button>
      </div>
      <div class="AddModal__body"></div>
      <div class="AddModal__footer">
        <button class="btn" @click="addNewProduct">
          ADD
        </button>
      </div>
    </div>
    <div class="AddModal__backdrop">
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  data() {
    return {
      pepe: 'hello Im a modal',
    };
  },
  methods: {
    ...mapActions([
      'getProducts',
      'addProduct',
    ]),
    closeModal() {
      this.$emit('close');
    },
    addNewProduct() {
      this.addProduct({ imageURL: 'imageURL1', description: 'description2' });
    },
  },
  props: {
    modalTitle: {
      type: String,
      default: 'Add Product',
    },
  },
  // computed: {
  //   ...mapGetters(['products']),
  // },
  // created() {
  //   this.getProducts();
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .AddModal {
    &__backdrop {
      opacity: 0.5;
      background-color: var(--white);
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1050;
      width: 100%;
      height: 100%;
    }
    &__body {
      flex-grow: 1;
    }
    &__header {
      justify-content: space-between;
      display: flex;
      align-items: center;
    }
    &__outer {
      position: absolute;
      margin: 0 auto;
      background-color: var(--gray);
      height: 80%;
      width: 50%;
      z-index: 1060;
      // border: 1rem solid var(--white);
      border-radius: 0;
      padding-right: 0.5rem;
      padding-top: 0.5rem;
      padding-left: 1rem;
      padding-bottom: 1rem;
      display: flex;
      flex-direction: column;
    }
  }
</style>
