<template>
  <div class="col-sm-6 col-md-4 col-lg-5  mb-3">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">
          {{ stock.name }}
          <small>(price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
          </h3>
      </div>
      <div class="card-body row">
        <div class="alert alert-danger col-12 text-center" v-if="insufficientQuantity">Not Enough Stocks</div>
        <div class="col-10">
          <input 
            type="number"  
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{ danger: insufficientQuantity }"
            >
        </div>
        <div class="col-2">
          <button 
            class="btn btn-success"
            @click="sellStock"
            :disabled="insufficientQuantity || quantity <= 0"
            >Sell</button>
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
import { mapActions } from "vuex";
import * as types from "./../../store/modules/portfolio/types";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      sellStockAction: types.SELL_STOCKS_ACTIONS
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        quantity: parseInt(this.quantity),
        stockPrice: this.stock.price
      };

      this.sellStockAction(order);
      this.quantity = 0;
    }
  }
};
</script>

