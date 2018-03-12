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
  props: {
      list: {
          type: Array,
          required: true
      }
  }
};
</script>