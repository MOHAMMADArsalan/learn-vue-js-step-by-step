<template>
  <div class="col-sm-6 col-md-4 col-lg-5   mb-3">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">
          {{ stock.name }}
          <small>(price: {{ stock.price }})</small>
          </h3>
      </div>
      <div class="card-body row">
        <div class="alert alert-danger col-12 text-center" v-if="insufficientFunds">Insufficient Funds</div>
        <div class="col-10">
          <input 
            type="number"  
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{danger: insufficientFunds}"
            >
        </div>
        <div class="col-2">
          <button 
            class="btn btn-success"
            @click="buyStock"
            :disabled="insufficientFunds || quantity <= 0"
            >Buy</button>
          </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.danger {
  border: 3px solid red;
}
</style>

<script>
import * as types from "./../../store/modules/stocks/types";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: parseInt(this.quantity)
      };
      this.$store.dispatch(types.BUY_STOCKS, order);
      this.quantity = 0;
    }
  }
};
</script>

