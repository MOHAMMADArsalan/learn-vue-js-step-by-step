import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import vueResource from "vue-resource";

import routes from "./routes";
import store from "./store/store";

Vue.use(VueRouter);
Vue.use(vueResource);
Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
 })

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.http.options.root = 'https://vuejs-stock-trade-ecccd.firebaseio.com/'
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
