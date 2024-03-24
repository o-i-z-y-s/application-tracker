import Vue from 'vue'
import App from './App.vue'

// eslint-disable-next-line no-unused-vars
const _ = require('lodash');

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
