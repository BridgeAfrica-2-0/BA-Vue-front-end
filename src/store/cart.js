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

        async addToCart({ commit }, payload) {
            console.log("add to cart:", payload);
          return  await axios
                .post(`market/product/${payload.id}/cart/add?business_id=${payload.business_id}`)
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