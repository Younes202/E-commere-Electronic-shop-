<!-- App.vue -->
<template>
  <div>
    <FirstNavigationBar />
    <NavigationBar />
    <List_Products />
    <router-view></router-view>
      </div>
</template>

<script>
import FirstNavigationBar from './components/FirstNavigationBar.vue';
import List_Products from './components/List_Products.vue';
import NavigationBar from './components/NavigationBar.vue';

export default {
  name: 'App',
  components: {
  /*  SignInForm, */
  NavigationBar,
  FirstNavigationBar,
  List_Products
  }
}
</script>

<style>
/* You can also add custom styles here if needed */
</style>
