<template>
    <div
        class="ProductCard margin-top-1"
    >
      <div class="ProductCard__menu">
        <button class="btn btn-icon" @click="$emit('edit')">
        <span class="fa fas fa-pencil fa-lg"></span>
        </button>
        <button class="btn btn-icon" @click="$emit('delete')">
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
      <span class="ProductCard__description" :title="product.description">
        {{ product.description }}
      </span>
    </div>
</template>
<script>
export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped lang="scss">
  .ProductCard {
    flex: 0 0 28%;
    max-width: 28%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    display: inline-block;
    z-index: 900;
    &__image {
      width: 100%;
      max-height: 400px;
    }
    &__overlay {
      position: absolute;
      bottom: 0;
      left: 15px;
      right: 15px;
      top: 0;
      background-color: #afbaffa8;
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
