import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

Vue.config.productionTip = false

let data = {
  jobs: mock,
  saved_jobs: [],
  my_applications: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
