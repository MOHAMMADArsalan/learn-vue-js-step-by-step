import Vue from 'vue'
import App from './App.vue'
import FormTemplate from "./form-template.vue";

Vue.component('form-template',FormTemplate);

new Vue({
  el: '#app',
  render: h => h(App)
})
