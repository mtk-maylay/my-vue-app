<template>
  <NavBarVue v-if="showNavbar"/>
  <router-view />
</template>
<script>
import NavBarVue from './components/NavBar.vue';
// global $;

export default {
  name: "App",
  components: {
    NavBarVue
  }, 
  computed: {
    showNavbar() {
      // Return true if the current route is NOT the login page
      return this.$route.name !== 'Login';
    }
  },
  // watch: {
  //   // Watch for route changes to trigger the computed property
  //   $route(to, from) {
  //     this.showNavbar;
  //   }
  // }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
