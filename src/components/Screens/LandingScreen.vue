<template>
  <h1>Landing Screen</h1>
</template>


<script>
  import axios from 'axios'
  export default {
    name: "LandingScreen",
    data() {
      return {
        contents: null
      }
    },
    mounted() {
      axios.get("http://api.aviationstack.com/v1/flights?access_key=bd2207c91f3b326f64fdfe54bc2c4af6&limit=10")
        .then((response) => {

          console.log(response.data)
        })
    }
  };
</script>