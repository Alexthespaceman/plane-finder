<template>
  <div class="Nav">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Explore</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-nav-form>
          <b-form-input
            type="text"
            v-model="form.text"
            size="sm"
            class="mr-sm-2"
            placeholder="Search Flight Number"
            :formatter="formatter"
            id="input-formatter"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit"
            >Search
          </b-button>
        </b-nav-form> -->

        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
        </b-navbar-nav>

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
    <form>
      <p>Search for a Flight:</p>
      <input placeholder="Search flight number" type="text" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
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
  method: {
    formatter(value) {
      return value;
    },
  },
  mounted() {
    console.log(this.value);
    axios
      .get(
        `http://api.aviationstack.com/v1/flights?access_key=bd2207c91f3b326f64fdfe54bc2c4af6&flight_number=${this.form.text}`
      )
      .then((response) => {
        this.info = response;
        console.log(response);
      });
  },
};
</script>

<style scope>
.Nav {
  text-align: center;
}
</style>
