<template>
  <div>
        <input type="text" v-on:keyup.enter="addItem" v-model="item">
      <ul>
          <li v-for="(item,index) in list" v-bind:key="index">
              {{item}} <button @click="removeItem(index)">Remove</button>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data: function() {
    return {
      item: ""
    };
  },
  methods: {
    removeItem: function(index) {
      this.$emit("removeItem", index);
    },
    addItem: function(event) {
      this.$emit('addItem', this.item);
      this.item = ''
    }
  }
};
</script>