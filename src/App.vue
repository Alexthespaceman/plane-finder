<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Header msg="Welcome to Plane finder" />
    <LandingScreen />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import LandingScreen from "./components/Screens/LandingScreen.vue";

export default {
  name: "App",
  components: {
    Header,
    LandingScreen,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
