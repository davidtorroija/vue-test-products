<template>
  <div class="home">
    <ProductsDashboard/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductsDashboard from '@/components/ProductsDashboard.vue';

export default {
  name: 'Home',
  components: {
    ProductsDashboard,
  },
};
</script>
