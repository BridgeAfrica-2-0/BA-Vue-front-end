import axios from "axios";

export default {
    namespaced: true,

    state: {
        cart: [],
        status: ''
    },

    mutations: {
        setStatus(state, status) {
            state.status = status;
        }
    },
    actions: {

        async addToCart({ commit }, payload, isLogin = false) {
            console.log("add to cart:", payload);
            console.log("Guest User:", isLogin);
            const url = isLogin ? `market/product/${payload.id}/cart/add?business_id=${payload.business_id}` : `guest/cart/product/${payload.id}/cart/add?business_id=${payload.business_id}`;
          return  await axios
                .post(url)
                .then(( data ) => {
                 console.log(data);
                    commit('setStatus', data.data.message);
                })
                .catch((error) => {
                    console.log({ error: error });
                   
                   if(error.response.status==403){
                      commit('setStatus', error.response.data.message);
                   }else{
                    commit('setStatus', 'Can not add prodct to cart');
                   }
                });
        },
    }




};