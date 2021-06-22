<template>
  <div class="container">
    <h1 class="title">Todays top 10 flights</h1>

    <vue-modaltor
      v-for="content in contents"
      :key="content.id"
      :visible="open"
      @hideModal="hideModal"
    >
      <template #body>
        <li class="list" v-for="content in contents" :key="content.id">
          <p>
            This flight is operating in the
            {{ content.arrival.timezone }}time Zone.
          </p>
        </li>
      </template>
    </vue-modaltor>

    <li class="list" v-for="content in contents" :key="content.id">
      <button class="border" @click="open = true">
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

        console.log(response.data.data);
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

#body {
  color: snow;
}

.border {
  border: none;
  background-color: white;
}
.border:hover {
  background-color: #f4d35e;
  transition: 0.5s;
}
</style>
