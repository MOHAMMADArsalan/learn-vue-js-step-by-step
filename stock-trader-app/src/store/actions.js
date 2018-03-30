import Vue from "vue";

import * as types from "./modules/stocks/types";
import * as portfolioTypes from "./modules/portfolio/types";


export const loadData = ({ commit }) => {
    Vue.http.get('data.json')
        .then(response => response.json())
        .then(data => {
            if (data) {
                const { stockPortfolio, funds, stocks } = data;

                const portfolio = {
                    funds,
                    stockPortfolio
                }

                commit(types.SET_STOCKS, stocks)
                commit(portfolioTypes.SET_PORTFOLIO_STOCKS, portfolio)
            }
        })
} 