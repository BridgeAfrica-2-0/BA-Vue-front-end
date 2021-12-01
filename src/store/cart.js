import axios from "axios";

export default {
<<<<<<< HEAD
namespaced: true,

 state : {
  cart: [],
  status: ''
},

mutations: {
  setStatus(state, status){
      state.status = status;
  }
},
 actions : {

  async addToCart({ commit }, idproduct) {
    await axios
      .post(`market/product/${idproduct}/cart/add`)
      .then((response) => {
       
        console.log(response.data);
        console.log(response.data.message);
        commit('setStatus', response.data.message) ;
      })
      .catch((error) => {
        console.log(error);
      });
  },
 }




};
=======
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
>>>>>>> 4d6df2670bce3f8f1b9cdc061b702bdce641c396
