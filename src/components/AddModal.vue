<template>
  <div class="AddModal">
    <div class="AddModal__outer">
      <div class="AddModal__header">
        <h3>{{ modalTitle }}</h3>
        <button class="btn btn-icon" @click="closeModal">
          <span class="fa fas fa-times fa-lg"></span>
        </button>
      </div>
      <div class="AddModal__body">
        <span class="AddModal__label">Image URL:</span>
        <input
          type="text" name="image Input" id="image-input"
          v-model="product.imageURL" class="AddModal--input-color"
        >
        <span class="AddModal__label">Description:</span>
        <div
          class="AddModal__textArea AddModal--input-color"
          contenteditable="true"
          aria-placeholder="Add a description"
          v-html="product.description"
          @blur="updateDescription($event)"
        >
        </div>
<!-- <textarea v-model="product.description" placeholder="agregar múltiples líneas"></textarea> -->
      </div>
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
  name: 'AddModal',
  data() {
    return {
      product: {
        imageURL: 'some URL',
        description: 'some desc',
      },
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
    async addNewProduct() {
      await this.addProduct(this.product);
      this.closeModal();
    },
    updateDescription(event) {
      this.product.description = event.target.innerText;
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
      padding-right: 1rem;
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
    &__input {
      margin-top: 0.5rem;
      width: 100%;
      padding: 2rem;
      min-height: 2rem;
      border: 1px solid var(--white);
    }
    &__textArea {
      margin-top: 0.5rem;
      width: 100%;
      padding: 2rem;
      min-height: 2rem;
    }
    &--input-color {
      border: 1px solid var(--purple);
      background-color: var(--purple);
      color: var(--white);
      outline: 0;
    }
    &--input-color:focus {
      border: 1px solid var(--white);
    }
    &__label {
      margin-top: 0.5rem;
      width: 100%;
      display: block;
      min-height: 2rem;
    }
  }
</style>
