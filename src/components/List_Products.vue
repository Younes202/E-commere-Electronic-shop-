<template>
  <main class="container mx-auto my-8">
    <!-- Slogan in Blue -->
    <div class="text-center mb-8">
      <h1 class="text-3xl font-semibold text-blue-900">Let's Shop Something Together!</h1>
    </div>

    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Product Cards -->
      <router-link v-for="(product, index) in products" :key="index" :to="{ name: 'details', params: { id: product.id } }" class="text-gray-900 hover:text-blue-700">
        <div class="bg-white p-4 rounded shadow-md cursor-pointer">
          <img :src="getImageUrl(product)" :alt="`Product number ${index + 1}`" class="w-full h-48 object-cover mb-4">
          <h2 class="text-lg font-semibold text-gray-900 mb-2">{{ product.name }}</h2>
          <p class="text-gray-700">{{ product.description }}</p>
        </div>
      </router-link>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      products: [] // Initialize the products
    };
  },
  mounted() {
    // Function to fetch data from the endpoint
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      // Fetch product data from the backend
      this.$axios.get('http://localhost:8001/getters/getting_products')
        .then(response => {
          this.products = response.data; // Update products array
        })
        .catch(error => {
          console.error('Failed to fetch products:', error);
          this.products = []; // Reset products array in case of error
        });
    },
    getImageUrl(product) {
      // Ensure that product.image is defined and not undefined
      if (product.image) {
        // Assuming your read_image endpoint accepts image ID as a parameter
        return `http://localhost:8001/images/image/${product.image}`;
      } else {
        return ''; // Return an empty string if product.image is not defined
      }
    }
  }
}
</script>

<style>
/* Add your custom styles here */
</style>
