<template>
  <div>
    <h1>Todays top 10 flights</h1>

    <li v-for="content in contents" :key="content.id">
      <!-- <div>{{ content.aircraft }}</div> -->
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
    </li>
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
