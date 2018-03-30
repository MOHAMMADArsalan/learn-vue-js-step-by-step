import * as types from "./types";
import * as stocksTypes from "./../stocks/types";
export default {
    [stocksTypes.BUY_STOCKS](state, { stockId, quantity, stockPrice }) {
        const record = state.stocks.find(stock => stock.id === stockId);

        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            })
        }
        state.funds -= stockPrice * quantity;
    },
    [types.SELL_STOCKS](state, { stockId, quantity, stockPrice }) {
        const record = state.stocks.find(stock => stock.id === stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1)
        }
        state.funds += stockPrice * quantity;
    },
    [types.SET_PORTFOLIO_STOCKS](state, portfolio) {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
    }
}