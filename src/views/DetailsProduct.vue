<template>
    <div>
      <h2>Product Details</h2>
      <div v-if="product">
        <h3>{{ product.name }}</h3>
        <p>Description: {{ product.description }}</p>
        <p>Price: ${{ product.price }}</p>
        <!-- Add more product details here as needed -->
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: null
      };
    },
    mounted() {
      // Fetch product details based on the route parameter (product ID)
      this.fetchProductDetails();
    },
    methods: {
      fetchProductDetails() {
        const productId = this.$route.params.id; // Get product ID from route parameters
        // Fetch product details from the backend
        this.$axios.get(`http://localhost:8001/products/${productId}`)
          .then(response => {
            this.product = response.data; // Update product data
          })
          .catch(error => {
            console.error('Failed to fetch product details:', error);
            this.product = null; // Set product to null if request fails
          });
      }
    }
  };
  </script>
  
  <style>
  /* Add styles as needed */
  </style>
  