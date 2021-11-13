import axios from 'axios';

export default {
  namespaced: true,

  state: {
    order_details: {},
    total: 1,
  },

  getters: {
    getOrderDetails(state) {
      return state.order_details;
    },

    getTotal(state){
      return state.total;
    }
  },

  mutations: {
    setOrderDetails(state, order_details) {
      state.order_details = order_details;
    },
    setTotal(state, newtotal){
      state.total= newtotal
    }
  },

  actions: {
    getOrderDetails({ commit , state}, orderId) {
      return axios.get(`/order/${orderId}/items`).then( response  => {
        console.log("----------------------------------s");
        console.log(response);
        commit('setOrderDetails', response.data.data);
        console.log(state.order_details);
        commit('setTotal',response.data.total);
        
      });
    },

    nextPage({commit , state}, data){

      return axios.get(`/order/${data.orderId}/items?page=${data.page}`).then( response  => {
        console.log("----------------------------------s");
        console.log(response);
        commit('setOrderDetails', response.data.data);
        console.log(state.order_details);

        commit('setTotal',response.data.total)
      });

    }
  },
};
