<template>
  <div>
    <FirstNavigationBar />
    <NavigationBar />
    <router-view />
  </div>
</template>

<script>
import FirstNavigationBar from './components/FirstNavigationBar.vue';
import NavigationBar from './components/NavigationBar.vue';

export default {
  name: 'App',
  components: {
    NavigationBar,
    FirstNavigationBar,
  }
}
</script>

<style>
/* Add custom styles here */
</style>
