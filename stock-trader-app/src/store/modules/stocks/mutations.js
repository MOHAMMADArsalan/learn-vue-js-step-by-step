import * as types from "./types";
export default {
    [types.SET_STOCKS] (state, stocks) {
        state.stocks = stocks;
    },
    [types.RND_STOCKS] (state) {
        state.stocks.forEach((stock) => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5)  )
        })
    }
}