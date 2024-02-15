<template>
  <div class="bg-yellow-300 p-4 text-center" id="offer-section">
    <p class="text-lg text-green-800">{{ promotionContent }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      promotionContent: '' // Initialize promotion content
    };
  },
  mounted() {
    // Make an HTTP GET request to your backend API endpoint
    fetch('http://0.0.0.0:8001/getters/current_promotion')
      .then(response => {
        // Check if the response status is OK
        if (response.ok) {
          // Parse the JSON response
          return response.json();
        } else {
          // If the response status is not OK, throw an error
          throw new Error('Failed to fetch promotion content');
        }
      })
      .then(data => {
        // Set the promotionContent data property with the retrieved content
        this.promotionContent = data.promotion;
      })
      .catch(error => {
        // Log any errors to the console
        console.error(error);
        // Optionally, display an error message to the user
        this.promotionContent = 'Failed to fetch promotion content';
      });
  }
};
</script>

<style>
/* Add your component-specific styles here */
</style>
