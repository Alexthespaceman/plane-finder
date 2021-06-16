<template>
  <div>
    <div class="Nav">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Explore</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <nav>
            <router-link class="nav-item" to="/Airlines">
              Search Airlines</router-link
            >
            <br />
            <router-link class="nav-item" to="/random">
              Search Airport</router-link
            >
          </nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <form class="search-flight-no" @submit="getData">
        <p>Search Flight Number:</p>
        <input
          v-model="form.text"
          placeholder="Search flight number"
          type="text"
          class="input"
          name="form.text"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Airlines from "./Screens/Airlines.vue";
import LandingScreen from "../components/Screens/LandingScreen.vue";
import random from "../components/Screens/random.vue";

export default {
  name: "Nav",
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
  // mounted() {
  //   console.log(this.form.text);
  //   axios
  //     .get(
  //       `http://api.aviationstack.com/v1/flights?access_key=bd2207c91f3b326f64fdfe54bc2c4af6&flight_number=${this.form.text}`
  //     )
  //     .then((response) => {
  //       this.contents = response.data.data;
  //       console.log(response.data.data);
  //     });
  // },
};
</script>

<style scope>
.Nav {
  position: absolute;
  text-align: center;
  top: 115px;
  width: 100%;
}

.search-flight-no {
  position: absolute;
  top: -100px;
  right: 40px;
  width: 250px;
  height: 150px;
}

.input {
  border-radius: 5px;
  margin: 3px;
}
</style>
