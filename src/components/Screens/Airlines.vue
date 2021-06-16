<template>
  <div class="airlines">
    <h1>Search flights via Airline:</h1>
    <div>
      <form>
        <title>Search Airlines</title>
        <input v-model="form.text" type="text" name="form.text" />
        <button>Search</button>
      </form>
    </div>

    <!-- <div>
        <li class="list" v-for="content in contents" :key="content.id">
      
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
    </div> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Airlines",
  data() {
    return {
      contents: null,
      form: {
        text: "",
      },
    };
  },
  methods: {
    getData(e) {
      e.preventDefault();
      console.log(this.form.text);
    },
  },
  mounted() {
    console.log(this.form.text);
    axios
      .get(
        `http://api.aviationstack.com/v1/airlines?access_key=bd2207c91f3b326f64fdfe54bc2c4af6&airline_name=${this.form.text}&limit=10`
      )
      .then((response) => {
        this.contents = response.data.data;
        console.log(response.data.data);
      });
  },
};
</script>

<style>
.airlines {
  position: relative;
  top: 200px;
}
</style>
