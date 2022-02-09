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
            await axios
                .post(`market/product/${payload.id}/cart/add?business_id=${payload.business_id}`)
                .then((response) => {

                    console.log(response.data);
                    console.log(response.data.message);
                    commit('setStatus', response.data.message);
                })
                .catch((error) => {
                    console.log({ error: error });
                });
        },
    }




};