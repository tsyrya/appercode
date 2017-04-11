import Vue from 'vue'
import App from './App'
import {router} from './router'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'
import {http} from './services/request'


Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VeeValidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  created() {
    http.init();
  },
  components: { App }
})
