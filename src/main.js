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
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(Vuesax).use(VueMaterial).use(VueApexCharts).use(BootstrapVue).use(IconsPlugin);
Vue.use(axios);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
