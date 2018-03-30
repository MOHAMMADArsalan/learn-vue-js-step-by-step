import * as types from "./types";
export default {
    [types.SELL_STOCKS_ACTIONS]: ({ commit }, order) => {
        console.log('====================================');
        console.log(types.SELL_STOCKS_ACTIONS, order);
        console.log('====================================');
        commit(types.SELL_STOCKS, order)
    }
}