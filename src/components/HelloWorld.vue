<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <template v-for="(product, index) in products">
        <div
            :key="index"
            class="btn"
        >
          <span>
            {{ product.name }}
          </span>
        </div>
    </template>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
