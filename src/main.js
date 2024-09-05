import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './views/Header.vue'
import Footer from './views/Footer.vue'

Vue.config.productionTip = false

Vue.component('app-header', Header)
Vue.component('app-footer', Footer)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
