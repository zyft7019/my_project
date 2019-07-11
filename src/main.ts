import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 注册vue-select组件
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
