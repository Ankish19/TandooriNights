import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { getGoogleApi } from './store/api'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import JwPagination from 'jw-vue-pagination'
import { StripePlugin } from '@vue-stripe/vue-stripe'

const options = {
  pk: 'pk_test_G1rWGnRBT4OayfHaxO377TV5',
  stripeAccount: process.env.STRIPE_ACCOUNT,
  apiVersion: process.env.API_VERSION,
  locale: process.env.LOCALE
}

Vue.use(StripePlugin, options)

Vue.component('jw-pagination', JwPagination)
Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: getGoogleApi().value,
    libraries: 'places'
  }
})

Vue.use(Toast)

const script = document.createElement('script')
script.src = 'https://maps.googleapis.com/maps/api/js?key=' + getGoogleApi().value + '&libraries=places'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
