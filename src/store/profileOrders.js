import axios from 'axios'
const state = {
  myOrders: [],
};
const getters = {};
const actions = {
  async getMyOrders({commit}, page){
    return await new Promise((resolve, reject)=>{
      axios.get(`getOrderUser/${page}`)
      .then((response)=>{
        commit
        console.log(response.data);
        resolve(response)
      })
      .catch((error)=>{
        console.log(error);
        reject()
      })
    })

  }
};
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
