<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h1>Counter App With Vuex</h1>
        <p>Value by: <input type="text" v-model="value"></p>
        <p>Value: {{ value }}</p>
        <app-result></app-result>
        <app-counter></app-counter>
        <hr>
        <h1>Another Counter App With Vuex</h1>
        <app-another-result></app-another-result>
        <app-another-counter></app-another-counter>
      </div>
    </div>
  </div>
</template>

<script>
import Result from "./components/Result.vue";
import Counter from "./components/Counter.vue";
import AnotherResult from "./components/AnotherResult.vue";
import AnotherCounter from "./components/AnotherCounter.vue";

export default {
  computed: {
    value: {
      get() {
        return this.$store.getters.value;
      },
      set(value) {
        this.$store.dispatch('updatedValue',value)
      }
    }
  },
  components: {
    "app-result": Result,
    "app-counter": Counter,
    "app-another-result": AnotherResult,
    "app-another-counter": AnotherCounter,
  }
};
</script>

<style>

</style>
