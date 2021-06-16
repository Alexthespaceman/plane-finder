import Vue from 'vue';
import router from 'vue-router';
import Airlines from '../components/Screens/Airlines';

Vue.use(router);

export default new router({
  routes: [
    {
      path: '/Airlines',
      name: 'Airlines',
      component: Airlines
    }
  ]

})