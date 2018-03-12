<template>
  <div>
    <h1> List Item</h1>
      <ul>
          <li v-for="(item,index) in list" v-bind:key="index">
              {{item}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      list: ["item 1", "item 2", "item 3"]
    };
  }
};
</script>

<style scoped>
  h1 {
    color: purple;
  }
  li {
    list-style: none;
  }
</style>
