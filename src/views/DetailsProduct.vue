<template>
  <section class="py-10 font-poppins dark:bg-gray-800">
      <div class="max-w-6xl px-4 mx-auto">
      <div class="flex flex-wrap mb-24 -mx-4">
      <div class="w-full px-4 mb-8 md:w-1/2 md:mb-0">
      <div class="sticky top-0 overflow-hidden ">
      <div class="relative mb-6 lg:mb-10 lg:h-96">
      <a class="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2" href="#">
        sa
      </a>
      <div v-if="product" class="flex items-center">

      <div class="w-1/2">
        <img :src="productImageUrl" :alt="product.name" class="w-full h-auto">

     
      </div>
      </div>
      </div>
      <div class="w-full px-4 md:w-1/2">
      <div class="lg:pl-20">
      <div class="mb-6 ">
      <h2 class="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
        {{ product.name }}
            </h2>
      <div>
    <div @click="toggleDescription"
         class="py-6 mb-6 border-t border-b border-gray-200 dark:border-gray-700 cursor-pointer">
      Description:
      <span v-if="showDescription"
            class="text-base text-gray-600 dark:text-gray-400">
        Most customers receive within 3-31 days.
      </span>
    </div>
  </div>
      <p class="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
      <span>Price</span>
      <span class="ml-3 text-base font-normal text-gray-500 line-through dark:text-gray-400">Price here</span>
      </p>
      </div>
    
     
      <div class="mb-6 "></div>
      <div class="flex flex-wrap items-center mb-6">
      <div class="mb-4 mr-4 lg:mb-0">
      <div class="w-28">
      <div class="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
      <button class="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300">
      <span class="m-auto text-2xl font-thin">-</span>
      </button>
      <input type="number" class="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black" placeholder="1">
      <button class="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300">
      <span class="m-auto text-2xl font-thin">+</span>
      </button>
      </div>
      </div>
      </div>
      
      <a href="#" class="w-full px-4 py-3 text-center text-blue-600 bg-blue-100 border border-blue-600 dark:hover:bg-gray-900 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-700 hover:bg-blue-600 hover:text-gray-100 lg:w-1/2 rounded-xl">
      Add to cart
      </a>
      </div>
      <div class="flex gap-4 mb-6">
      <a href="#" class="w-full px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent dark:border-gray-700 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-xl">
      Buy now</a>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>

      </section>
  </template>
<script>
export default {
  data() {
    return {
      showDescription: false
    };
  },
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
    toggleDescription() {
      this.showDescription = !this.showDescription;
    },
    getProductImageUrl(product) {
      const imageUrl = product.image ? `http://localhost:8001/images/image/${product.image}` : 'no image for this product';
      return imageUrl;
    }
  }
};
</script>
