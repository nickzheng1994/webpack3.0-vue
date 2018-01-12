
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
require('./public/style/body.less')

Vue.config.productionTip = false

Vue.prototype.$ajax = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
