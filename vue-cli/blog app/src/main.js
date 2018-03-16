import Vue from 'vue'
import App from './App.vue'
import vueResource from "vue-resource";
import vueRouter from "vue-router";

import Routes from "./routes";

Vue.use(vueResource);
Vue.use(vueRouter);
// Custom Directives

Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.color = '#' + Math.random().toString(16).slice(2, 8)
  }
});

// Custom Filters

Vue.filter('to-uppercase', function (value) {
  return value.toUpperCase()
});

Vue.filter('snippet', function (value) {
  return value.slice(0, 100) + '...'
});


const routes = new vueRouter({
  routes: Routes,
  mode: 'history'
})
new Vue({
  el: '#app',
  render: h => h(App),
  router: routes
})

