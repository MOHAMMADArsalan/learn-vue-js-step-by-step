<template>
  <div id="app">
  <div class="app">
    <h1>{{ msg }}</h1>
  </div>
    <item></item>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  components: {
    item: Item
  },
  name: "app-1",
  data: function() {
    return {
      msg: "Hello From Vue cli"
    };
  }
};
</script>

<style scoped>
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
  color: red;
}
</style>
