<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Stock Trade</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <router-link to="/portfolio" tag="li" activeClass="active" class="nav-item">
        <a class="nav-link">Portfolio</a>
      </router-link>
      <router-link to="/stocks" tag="li" activeClass="active" class="nav-item">
        <a class="nav-link">Stocks</a>
      </router-link>
    </ul>
   
    <ul class="nav navbar-nav navbar-right">
      <li class="nav-item" @click="endDay"><a class="nav-link">End Day</a></li>
      <li 
          class="nav-item dropdown cursor" 
          @click="isDropdownOpen = !isDropdownOpen">
        <a 
          class="nav-link dropdown-toggle" 
          id="navbarDropdown" 
          role="button" 
          data-toggle="dropdown" 
          aria-haspopup="true" 
          aria-expanded="false">
          Save & Load <span class="caret"></span>
        </a>
        <div 
            class="dropdown-menu" 
            aria-labelledby="navbarDropdown"
            :class="{show:isDropdownOpen}">
          <a class="dropdown-item" @click="saveData">Save Data</a>
          <a class="dropdown-item" @click="loadData" >Load Data</a>
        </div>
      </li>
    </ul>
     <strong class="navbar-text navbar-right">Funds: {{ funds | currency}}</strong>
  </div>
</nav>
</template>

<script>
import { mapActions } from "vuex";
import * as types from "./../store/modules/stocks/types";

export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStock: types.RANDOMIZE_STOCKS,
      fetchData: 'loadData'
    }),
    endDay() {
      this.randomizeStock();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };

      this.$http.put("data.json", data);
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>


