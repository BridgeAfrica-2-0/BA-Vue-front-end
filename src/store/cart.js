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

        async addToCart({ commit }, idproduct) {
            await axios
                .post(`market/product/${idproduct}/cart/add`)
                .then((response) => {

                    console.log(response.data);
                    console.log(response.data.message);
                    commit('setStatus', response.data.message);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    }




};
