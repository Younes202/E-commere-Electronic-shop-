<template>
  <main class="container mx-auto my-8">
    <!-- Slogan in Blue -->
    <div class="text-center mb-8">
      <h1 class="text-3xl font-semibold text-blue-900">Let's Shop Something Together!</h1>
    </div>

    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Product Cards -->
      <router-link v-for="(product, index) in products" :key="index" :to="getProductUrl(product)" class="text-gray-900 hover:text-blue-700">
        <div class="bg-white p-4 rounded shadow-md">
          <img :src="getImageUrl(product)" :alt="`Product number ${index + 1}`" class="w-full h-48 object-cover mb-4">
          <h2 class="text-lg font-semibold text-gray-900 mb-2">{{ product.name }}</h2>
          <p class="text-gray-700">{{ product.description }}</p>
          <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
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
    this.$axios.get('http://localhost:8001/getters/getting_products')
      .then(response => {
        // Assuming the response.data directly contains the products array
        this.products = response.data;
      })
      .catch(error => {
        console.error('Failed to fetch products content:', error);
        this.products = []; // Reset products array in case of error
      });
  },
  methods: {
    getImageUrl(product) {
      // Ensure that product.image is defined and not undefined
      if (product.image) {
        // Assuming your read_image endpoint accepts image ID as a parameter
        return `http://localhost:8001/images/image/${product.image}`;
      } else {
        return ''; // Return an empty string if product.image is not defined
      }
    },
    getProductUrl(product) {
      // Assuming you have a specific route to view a single product
      // Adjust this URL according to your application's routing configuration
      return { name: 'details', params: { id: product.id } };
    }
  }
}
</script>

<style>
/* Add your custom styles here */
</style>
