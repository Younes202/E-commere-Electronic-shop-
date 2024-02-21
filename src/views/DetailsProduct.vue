<!-- DetailsProduct.vue -->

<template>
  <div v-if="product">
    <h2>{{ product.name }}</h2>
    <p>Description: {{ product.description }}</p>
    <p>Price: ${{ product.price }}</p>
    <p>Quantity: {{ product.quantity }}</p>
    <!-- Add more product details here -->
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  computed: {
    product() {
      const productId = this.$route.params.id;
      return this.$store.getters.getProductById(productId);
    }
  },
  mounted() {
    console.log('Product:', this.product);
  }
};
</script>

<style>
/* Add your styles here */
</style>
