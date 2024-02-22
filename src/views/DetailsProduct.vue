<template>
  <div v-if="product" class="flex items-center">
    <div class="w-1/2">
      <img :src="productImageUrl" :alt="product.name" class="w-full h-auto">
    </div>
    <div class="w-1/2 px-4">
      <h2 class="text-2xl font-semibold">{{ product.name }}</h2>
      <p class="text-gray-700">Description: {{ product.description }}</p>
      <p class="text-gray-700">Price: ${{ product.price }}</p>
      <p class="text-gray-700">Quantity: {{ product.quantity }}</p>
    </div>
  </div>
  <div v-else class="text-center">
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  computed: {
    product() {
      const productId = this.$route.params.id;
      return this.$store.getters.getProductById(productId);
    },
    productImageUrl() {
      return this.product ? this.getProductImageUrl(this.product) : '';
    }
  },
  mounted() {
    console.log('Product:', this.product);
  },
  methods: {
    getProductImageUrl(product) {
      const imageUrl = product.image ? `http://localhost:8001/images/image/${product.image}` : 'no image for this product';
      return imageUrl;
    }
  }
};
</script>
