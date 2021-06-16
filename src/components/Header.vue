<template>
  <div class="Header">
    <router-link to="/">
      <img class="logo" src="../images/logo.png" />
    </router-link>
    <h1 class="header1">{{ msg }}</h1>
    <p>Helping you find your way around global airtraffic</p>
    <!-- <div class="h2 mb-0">
      <b-icon icon="arrow-up"></b-icon>
      <b-icon icon="exclamation-triangle"></b-icon>
    </div> -->
    <div></div>
    <Nav />
  </div>
</template>

<script>
import Nav from "./NavBar.vue";

export default {
  name: "Header",
  components: {
    Nav,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Header {
  /* border: 3px black solid; */
  /* position: relative; */
  background-color: #f4d35e;
  height: 250px;
  border: black 3px solid;
  position: absolute;
  top: 0;
  width: 100%;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.m-md-2 {
  position: absolute;
  left: 50px;
  top: 20%;
}
</style>

<style>
.logo {
  position: absolute;
  left: 10px;
  top: 10px;
  /* border: 3px black solid; */
  border-radius: 5px;
  height: 100px;
  width: 100px;
}
</style>
