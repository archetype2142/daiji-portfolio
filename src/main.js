import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import i18n from './i18n'
import './assets/global.scss'

Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
