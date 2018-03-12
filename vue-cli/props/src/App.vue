<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <item v-bind:list="list"></item>
  </div>
</template>

<script>
export default {
  name: "app-1",
  data: function() {
    return {
      msg: "Hello From Vue cli",
      list: ["item 1", "item 2"]
    };
  }
};
</script>

<style>
#app {
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
}
</style>
