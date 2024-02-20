<!-- App.vue -->
<template>
  <div>
    <FirstNavigationBar />
    <NavigationBar />
    <MainContent />
  </div>
</template>

<script>
import FirstNavigationBar from './components/FirstNavigationBar.vue';
import NavigationBar from './components/NavigationBar.vue';

import MainContent from './components/MainContent.vue';

MainContent
export default {
  name: 'App',
  components: {
  /*  SignInForm, */
  NavigationBar,
  FirstNavigationBar,
  MainContent
  }
}
</script>

<style>
/* You can also add custom styles here if needed */
</style>
