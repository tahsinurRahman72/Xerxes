// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/material-kit.css'
import './assets/script/plugins/highlight.min.js'
import './assets/script/material-kit.min.js'
import './assets/script/material-kit.js'
import './assets/script/core/bootstrap.bundle.min.js'
window.$ = window.jQuery = require('jquery')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
