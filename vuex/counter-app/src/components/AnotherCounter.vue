<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement">Decrement</button>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions([
        'increment',
        'decrement',
        'asyncIncrement',
        'asyncDecrement'
    ])
  }
};
</script>
