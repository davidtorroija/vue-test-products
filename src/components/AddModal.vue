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
        <button v-if="isEditing" class="btn" @click="onUpdateProduct" :disabled="invalid">
          SAVE
        </button>
        <button v-else class="btn" @click="onAddProduct" :disabled="invalid">
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
        imageURL: this.editingProduct ? this.editingProduct.imageURL : '',
        description: this.editingProduct ? this.editingProduct.description : 'Some Description...',
      },
      isLoading: false,
      charLimit: 300,
      timeout: null,
    };
  },
  computed: {
    modalTitle() {
      return this.editingProduct ? 'Edit Product' : 'Add Product';
    },
    isEditing() {
      return !!this.editingProduct;
    },
    invalid() {
      return !this.product.imageURL || !this.product.description;
    },
  },
  props: {
    editingProduct: {
      type: Object,
      default: null,
      required: false,
    },
  },
  methods: {
    ...mapActions([
      'getProducts',
      'addProduct',
      'updateProduct',
      'uploadImage',
    ]),
    closeModal() {
      this.$emit('close');
    },
    async onAddProduct() {
      await this.addProduct(this.product);
      this.closeModal();
    },
    async onUpdateProduct() {
      await this.updateProduct({
        // eslint-disable-next-line no-underscore-dangle
        id: this.editingProduct._id,
        imageURL: this.product.imageURL,
        description: this.product.description,
      });
      this.closeModal();
    },
    updateDescription(event) {
      this.product.description = event.target.innerText;
      this.product.description = this.product.description.substring(0, 300);
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
    parsePasteAndLimitChars(evt) {
      evt.preventDefault();
      const text = evt.clipboardData.getData('text/plain');
      const max = this.charLimit - this.product.description.length;
      document.execCommand('insertHTML', false, text.substring(0, max > 0 ? max : 0));
    },
  },
  mounted() {
    this.$refs.richtextArea.addEventListener('paste', this.parsePasteAndLimitChars);
  },
  beforeDestroy() {
    this.$refs.richtextArea.removeEventListener('paste', this.parsePasteAndLimitChars);
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
      overflow-y: auto;
    }
    &__header {
      justify-content: space-between;
      display: flex;
      align-items: center;
      padding-bottom: 0.5rem;
    }
    &__footer {
      padding-top: 0.5rem;
    }
    &__outer {
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
      position: fixed;
      margin: 0 auto;
      left: 25%;
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
