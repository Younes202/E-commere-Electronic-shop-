<template>
  <!-- Navigation Bar -->
  <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
      <!-- Replace the "Flowbite" logo with your own logo -->
      <a href="#home" class="flex items-center space-x-3 rtl:space-x-reverse">
        <!-- Small Logo -->
        <img v-if="logo" :src="logo" class="h-8 sm:h-12 md:h-16" alt="Electronic Shop Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> <p>{{ website_name }}</p></span>
      </a>


      <!-- Hamburger Icon for Mobile -->
      <div class="md:hidden">
        <button @click="toggleMobileMenu" id="mobile-menu-button" class="text-gray-500 hover:text-gray-700 focus:outline-none">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            viewBox="0 0 24 24" class="w-6 h-6">
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden w-full md:flex items-center justify-center md:w-auto" id="navbar-multi-level">
        <ul class="flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse">
          <li v-for="(link, index) in navLinks" :key="index">
            <a :href="link.url" :class="['nav-link', {'active': link.active}, link.additionalClasses]" @click="handleNavLinkClick(link)">
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div v-if="showMobileMenu" class="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50" id="mobile-menu">
    <div class="flex justify-end p-4">
      <button @click="closeMobileMenu" class="text-white focus:outline-none">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          viewBox="0 0 24 24" class="w-6 h-6">
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <ul class="text-white">
      <li v-for="(link, index) in navLinks" :key="index">
        <a @click="handleNavLinkClick(link)" :href="link.url" :class="['nav-link', {'active': link.active}, link.additionalClasses]">
          {{ link.label }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false,
      website_name: 'MoroccanGlobalShop',
      logo: require('@/assets/logo.png'),
      navLinks: [
        { label: 'Home', url: '#', active: false, additionalClasses: 'block py-2 px-5 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg' },
        { label: 'Contact Us', url: '#', active: false, additionalClasses: 'block py-2 px-5 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg' },
        { label: 'Collections', url: '#', active: false, additionalClasses: 'block py-2 px-5 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg' }
      ]
    };
  },
  methods: {
    handleNavLinkClick(link) {
      this.navLinks.forEach(item => item.active = false);
      link.active = true;
      this.showMobileMenu = false; // Close mobile menu after link is clicked
    },
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    closeMobileMenu() {
      this.showMobileMenu = false;
    }
  }
};
</script>
