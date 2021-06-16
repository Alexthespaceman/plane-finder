<template>
  <div>
    <h1>I am airline page !! Search Flights from Airline</h1>

    <form @submit="getData">
      <p>Search for an Airline:</p>
      <input v-model="form.text" placeholder="Search Airline" type="text" class="input" name="form.text" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
  import axios from "axios";
  
  export default {
    name: "Airlines",
    data() {
      return {
        contents: null,
      };
    },
    methods: {
      getData(e) {
        e.preventDefault()
        console.log(this.form.text)
      }
    },
    // mounted() {
    //   axios
    //     .get(
    //       "http://api.aviationstack.com/v1/flights?access_key=bd2207c91f3b326f64fdfe54bc2c4af6&limit=10"
    //     )
    //     .then((response) => {
    //       this.contents = response.data.data;

    //       // console.log(response.data.data);
    //     });
    // },
  };
</script>