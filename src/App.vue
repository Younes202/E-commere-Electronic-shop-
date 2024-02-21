<template>
  <div>
    <FirstNavigationBar />
    <NavigationBar />
    <router-view />
    <End_Page />
  </div>
</template>

<script>
import End_Page from './components/End_Page.vue';
import FirstNavigationBar from './components/FirstNavigationBar.vue';
import NavigationBar from './components/NavigationBar.vue';


export default {
  name: 'App',
  components: {
    NavigationBar,
    FirstNavigationBar,
    End_Page
  }
}
</script>

<style>
/* Add custom styles here */
</style>
