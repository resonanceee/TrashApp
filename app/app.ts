import Vue from 'nativescript-vue'
import Loader from './components/auth/loader.vue'

declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__

new Vue({
  render: (h) => h('frame', [h(Loader)]),
}).$start()
