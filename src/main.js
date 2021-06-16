import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router'
import LandingScreen from "./components/Screens/LandingScreen.vue"
import Airlines from "./components/Screens/Airlines.vue"
import random from "./components/Screens/random.vue"

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/',
      component: LandingScreen
    },
    {
      path: '/Airlines',
      component: Airlines
    },
    {
      path: '/random',
      component: random
    },
  ]
})

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
