import Vue from 'vue'

import 'amfe-flexible'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/styles/index.scss' // global css

import App from './App.vue'
import router from './router'
import store from './store'
import { Lazyload } from 'vant'
Vue.use(Lazyload, {
  adapter: {
    loaded({ el }) {
      // do something here
      // example for call LoadedHandler
      // LoadedHandler(el)
      console.log(el)
    },
    loading() {
      console.log('loading')
    },
    error() {
      console.log('error')
    }
  }
})

import '@/icons' // icons

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
