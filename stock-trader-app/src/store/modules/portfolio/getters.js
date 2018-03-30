export default {
    stockPortfolio(state, getters) {
        return state.stocks.map((stock) => {
            const record = getters.stocks.find(elem => elem.id === stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        })
    },
    funds(state) {
        return state.funds
    }
}