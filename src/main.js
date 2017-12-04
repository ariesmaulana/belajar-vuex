import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
window.axios = require('axios')
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
