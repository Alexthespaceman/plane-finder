<template>
  <div>
    <h1>Search Flights from Airline</h1>

    <form @submit="getData">
      <p>Search for an Airline:</p>
      <input v-model="form.text" placeholder="Search Airline" type="text" class="input" name="form.text" />
      <button type="submit">Submit</button>
    </form>

    <!-- <li v-for="content in contents" :key="content.id">
      <div>{{ content.airline.name }}</div>
      <div>Departed from {{ content.departure.airport }}</div>
      <div>
        Arriving at {{ content.arrival.airport }} at

        {{ new Date(content.arrival.estimated).toString().slice(15, 21) }}
      </div>
      <div v-if="content.arrival.terminal === null">
        Terminal is not yet availbale
      </div>
      <div v-else>Terminal {{ content.arrival.terminal }}</div>
    </li> -->
  </div>
</template>

<script>
  import axios from "axios";
  import Vue from 'vue'
  import VueRouter from 'vue-router'

  Vue.use(VueRouter)
  
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