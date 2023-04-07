import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueApexCharts from 'vue-apexcharts'

Vue.config.productionTip = false
Vue.use(Vuesax).use(VueMaterial).use(VueApexCharts);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
