<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button>ADD <span class="btn fa fas fa-plus"></span></button>
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

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  methods: {
    ...mapActions(['getProducts']),
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
