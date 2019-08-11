import Vue from 'vue'

import 'amfe-flexible'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import '@/styles/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'

import '@/icons' // icons

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
