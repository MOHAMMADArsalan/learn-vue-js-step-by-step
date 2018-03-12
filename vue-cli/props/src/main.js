import Vue from 'vue'
import App from './App.vue'
import Item from "./Item.vue";

Vue.component('item', Item)

new Vue({
  el: '#app',
  render: h => h(App)
})
