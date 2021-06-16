<template>
  <div class="container">
    <h1 class="title">Todays top 10 flights</h1>

    <vue-modaltor :visible="open" @hideModal="hideModal">
      <template #body>
        <p>
          “Never forget what you are, for surely the world will not. Make it
          your strength. Then it can never be your weakness. Armour yourself in
          it, and it will never be used to hurt you. ” ― George R.R. Martin, A
          Game of Thrones.
        </p>
      </template>
    </vue-modaltor>

    <li class="list" v-for="content in contents" :key="content.id">
      <button @click="open = true">
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
      </button>
    </li>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LandingScreen",
  data() {
    return {
      open: false,
      contents: null,
    };
  },
  methods: {
    hideModal() {
      this.open = false;
    },
  },
  mounted() {
    axios
      .get(
        "http://api.aviationstack.com/v1/flights?access_key=bd2207c91f3b326f64fdfe54bc2c4af6&limit=10"
      )
      .then((response) => {
        this.contents = response.data.data;

        // console.log(response.data.data);
      });
  },
};
</script>

<style>
.container {
  /* grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px;
  column-gap: 10px;
  row-gap: 15px; */
}

.title {
  position: relative;
  top: 200px;
}
.list {
  border: grey 1px solid;
  position: relative;
  top: 250px;
  display: inline-block;
  vertical-align: top;
  margin: 20px;
  border-radius: 10px;
  margin: 5px;
  padding: 10px;
  box-shadow: 3px 3px;
}

.list:hover {
  background-color: #f4d35e;
  transition: 0.5s;
}
</style>
