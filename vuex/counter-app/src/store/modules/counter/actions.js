export default {
    increment: (context) => {
        context.commit('increment')
    },
    decrement: (context) => {
        context.commit('decrement')
    },
    asyncIncrement: (context) => {
        setTimeout(() => {
            context.commit('increment')
        }, 1000)
    },
    asyncDecrement: (context) => {
        setTimeout(() => {
            context.commit('decrement')
        }, 1000)
    }
}