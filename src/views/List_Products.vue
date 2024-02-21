<!-- ListProducts.vue -->

<template>
  <main class="container mx-auto my-8">
    <div class="text-center mb-8">
      <h1 class="text-3xl font-semibold text-blue-900">Let's Shop Something Together!</h1>
    </div>

    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <router-link v-for="product in products" :key="product._id" :to="{ name: 'details', params: { id: product._id }}">
        <div class="bg-white p-4 rounded shadow-md cursor-pointer">
          <img :src="getImageUrl(product)" :alt="product.name" class="w-full h-48 object-cover mb-4">
          <h2 class="text-lg font-semibold text-gray-900 mb-2">{{ product.name }}</h2>
          <p class="text-gray-700">{{ product.description }}</p>
        </div>
      </router-link>
    </section>
  </main>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
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
}
</script>

<style>
/* Add your custom styles here */
</style>
