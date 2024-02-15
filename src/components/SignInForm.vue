<template>
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="path-to-your-logo/your-logo.png" alt="Your Logo">
          Your Brand
        </a>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form @submit.prevent="signIn" class="space-y-4 md:space-y-6" action="#">
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input v-model="email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input v-model="password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
              </div>
              <button :disabled="loading" type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
              <p v-if="error" class="text-red-500">{{ error }}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        loading: false,
        error: '',
      };
    },
 // ...
methods: {
  signIn() {
    this.loading = true;
    this.error = '';

    const signInData = new URLSearchParams();
    signInData.append('username', this.email);
    signInData.append('password', this.password);

    fetch('http://localhost:8000/user/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: signInData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Authentication response:', data);
        // Handle success, e.g., navigate to the next page
      })
      .catch(error => {
        console.error('Authentication error:', error);
        this.error = 'Authentication failed. Please check your credentials and try again.';
      })
      .finally(() => {
        this.loading = false;
      });
  },
},
// ...

  };
  </script>
  
  <style scoped>
  /* Add any component-specific styles here */
  </style>
  