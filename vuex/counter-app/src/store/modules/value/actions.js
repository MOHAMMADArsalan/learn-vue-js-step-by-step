export default {
    updatedValue: (context, payload) => {
        console.log('====================================');
        console.log(payload);
        console.log('====================================');
        context.commit('updatedValue', payload)
    }   
}