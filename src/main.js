import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { getGoogleApi } from './store/api'
import VueToast from 'vue-toast-notification'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: getGoogleApi().value,
    libraries: 'places'
  }
})

const script = document.createElement('script')
script.src = 'https://maps.googleapis.com/maps/api/js?key=' + getGoogleApi().value + '&libraries=places'

new Vue({
  router,
  store,
  VueToast,
  render: h => h(App)
}).$mount('#app')
