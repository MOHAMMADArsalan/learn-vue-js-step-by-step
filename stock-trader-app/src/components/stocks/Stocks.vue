<template>
  <div class="row justify-content-around mt-3">
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>  
  </div>
</template>

<script>
import StocksStock from "./Stock.vue";
export default {
  components: {
    appStock: StocksStock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>

