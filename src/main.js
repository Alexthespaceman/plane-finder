import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import Vue from "vue";
import VueModalTor from "vue-modaltor/dist/vue-modaltor.common";
import "vue-modaltor/dist/vue-modaltor.css";
import VueRouter from "vue-router";
import App from "./App.vue";
import Airlines from "./components/Screens/Airlines.vue";
import LandingScreen from "./components/Screens/LandingScreen.vue";
import random from "./components/Screens/random.vue";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(VueRouter);
Vue.use(VueModalTor, {
  bgPanel: "#7957d5",
});

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: LandingScreen,
    },
    {
      path: "/Airlines",
      component: Airlines,
    },
    {
      path: "/random",
      component: random,
    },
  ],
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
