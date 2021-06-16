<template>
  <div id="app">
    <Header msg="Welcome to Plane finder" />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <router-view><LandingScreen /><Airlines /><random /></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import LandingScreen from "./components/Screens/LandingScreen.vue";
import Airlines from "./components/Screens/Airlines.vue";
import random from "./components/Screens/random.vue";

export default {
  name: "App",
  components: {
    Header,
    LandingScreen,
    Airlines,
    random,
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
