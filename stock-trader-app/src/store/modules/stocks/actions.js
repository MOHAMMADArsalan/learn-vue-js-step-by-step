import * as types from "./types";
import stocks from "./../../../data/stocks";

export default {
    [types.BUY_STOCKS]: ({ commit }, stock) => {
        commit(types.BUY_STOCKS, stock);
    },
    [types.INIT_STOCKS]: ({ commit }) => {
        commit(types.SET_STOCKS, stocks)
    },
    [types.RANDOMIZE_STOCKS]: ({ commit }) => {
        commit(types.RND_STOCKS)
    }
}