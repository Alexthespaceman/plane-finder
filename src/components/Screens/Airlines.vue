<template>
  <div class="airlines">
    <h1>Search flights via Airline:</h1>
    <div>
      <form>
        <title>Search Airlines</title>
        <input type="text" />
        <button>Search</button>
      </form>
    </div>
  </div>
</template>

<script>
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
        `http://api.aviationstack.com/v1/flights?access_key=bd2207c91f3b326f64fdfe54bc2c4af6&flight_number=${this.form.text}`
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
