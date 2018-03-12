<template>
  <div>
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
      list: ["item 1", "item 2"]
    };
  }
};
</script>