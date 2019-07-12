import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import VueTouch from 'vue-touch'
import Observer from 'utils/observer'
Vue.prototype.$observer = Observer
Vue.use(VueTouch,{name:'v-touch'})
import "common";
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
