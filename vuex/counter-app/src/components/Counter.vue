<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
export default {
  methods: {
    increment() {
        this.$store.dispatch('increment') // action
        // this.$store.commit('increment') // Mutation
    },
    decrement() {
        this.$store.dispatch('decrement') // action
        //  this.$store.commit('decrement') // Mutation
    }
  }
};
</script>
