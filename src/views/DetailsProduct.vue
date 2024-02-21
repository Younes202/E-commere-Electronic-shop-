<template>
  <div v-if="product">
    <h2>{{ product.name }}</h2>
    <p>Description: {{ product.description }}</p>
    <p>Price: ${{ product.price }}</p>
    <p>Quantity: {{ product.quantity }}</p>
    <img :src="getImageUrl(product)" :alt="product.name" class="w-full h-48 object-cover mb-4">
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
  },
  methods: {
    getImageUrl(product) {
      if (product.image) {
        return `http://localhost:8001/images/image/${product.image}`;
      } else {
        return 'no image for this product';
      }
    }
  }
};
</script>

<style>
/* Add your styles here */
</style>
