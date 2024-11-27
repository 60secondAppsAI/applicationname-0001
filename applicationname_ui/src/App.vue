<template>
  <div id="app" class="container">
	<app-header />
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>


<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  name: "App",
  computed: {
    layout() {
      // Determine which layout to use based on meta field in route
      const routeMeta = this.$route.meta;
      return routeMeta && routeMeta.layout ? routeMeta.layout : "div";
    },
  },
  components: {
    "app-header": AppHeader,
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}
.container {
  /* max-width: 1200px; */
  margin: 0 auto;
}
</style>