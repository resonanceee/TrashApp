import Vue from 'nativescript-vue'
import Loader from './components/auth/loader.vue'
declare let __DEV__: boolean;

import RadChart from 'nativescript-ui-chart/vue';

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__

Vue.use(RadChart);

new Vue({
  render: (h) => h('frame', {
    class: 'dark',
  }, [h(Loader)]),
}).$start();

