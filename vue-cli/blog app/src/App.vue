<template>
  <div id="app">
    <app-header></app-header>
   <router-view></router-view>
  </div>
</template>

<script>
import addBlog from "./components/addBlog.vue";
import showBlog from "./components/showBlog.vue";
import header from "./components/header.vue";

export default {
  components: {
    "add-blog": addBlog,
    "show-blog": showBlog,
    "app-header":header
  },
  name: "app-1",
  data: function() {
    return {
      msg: "Hello From Vue cli"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
body {
  margin: 0;
}
h1,
h2 {
  font-weight: normal;
}
</style>
