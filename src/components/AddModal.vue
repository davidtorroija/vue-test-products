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
        <span class="AddModal__label">Description:</span>
        <div
          class="AddModal__textArea AddModal--input-color"
          contenteditable="true"
          ref="richtextArea"
          aria-placeholder="Add a description"
          v-html="product.description"
          @blur="updateDescription($event)"
        >
        </div>
        <img
          class="AddModal__previewImage margin-top-1"
          v-if="product.imageURL" :src="product.imageURL" alt=""
        >
        <button v-else class="btn margin-top-1" @click="$refs.fileInput.click()">
          Upload Image
        </button>
        <input
            ref="fileInput"
            style="display: none"
            type="file"
            @click="e => e.stopPropagation()"
            @change="onFileChange($event)"
            accept="JPG, PNG, JPEG"
        />
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
        imageURL: null,
        description: 'Todo: add a placeholder',
      },
      isLoading: false,
    };
  },
  methods: {
    ...mapActions([
      'getProducts',
      'addProduct',
      'uploadImage',
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
    async onFileChange(event) {
      const { files } = event.target;
      if (this.isLoading) {
        return;
      }
      if (!files.length) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();

      const formData = new FormData();
      formData.append('image', files[0]);
      const result = await this.uploadImage({ formData });
      this.product.imageURL = `db-images/${result.fileName}`;
      this.isLoading = false;
    },
    removeStyles(evt) {
      evt.preventDefault();
      const text = evt.clipboardData.getData('text/plain');
      document.execCommand('insertHTML', false, text);
    },
  },
  props: {
    modalTitle: {
      type: String,
      default: 'Add Product',
    },
  },
  mounted() {
    this.$refs.richtextArea.addEventListener('paste', this.removeStyles);
  },
  beforeDestroy() {
    this.$refs.richtextArea.removeEventListener('paste', this.removeStyles);
  },
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
    &__previewImage {
      max-width: 300px;
      max-height: 300px;
    }
  }
</style>
