<template>
    <div class="container mx-auto my-8">
      <div class="bg-white p-4 rounded shadow-md">
        <img :src="product.imageUrl" :alt="product.name" class="w-full h-48 object-cover mb-4">
        <h2 class="text-2xl font-semibold text-gray-900 mb-2">{{ product.name }}</h2>
        <p class="text-gray-700">{{ product.description }}</p>
        <p class="text-gray-700">Price: {{ product.price }}</p>
        <p class="text-gray-700">Category: {{ product.category }}</p>
        <!-- Additional product details can be displayed here -->
      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        product: null // Initialize product to null
      };
    },
    mounted() {
      this.fetchProductDetails(); // Fetch product details when component is mounted
    },
    methods: {
      fetchProductDetails() {
        const productId = this.$route.params.id; // Get product ID from route parameter
        // Assuming you have an API endpoint to fetch product details by ID
        // You can use Axios or any other HTTP client library to make the request
        this.$axios.get(`http://localhost:8001/products/${productId}`)
          .then(response => {
            this.product = response.data; // Set product data once fetched
          })
          .catch(error => {
            console.error('Failed to fetch product details:', error);
            // Handle error fetching product details
          });
      }
    }
  }
  </script>
  
  <style>
  /* Add your custom styles here */
  </style>
  