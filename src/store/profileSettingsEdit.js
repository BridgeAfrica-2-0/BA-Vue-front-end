import axios from "axios"

  export default {
    namespaced: true,
    state: {
       userInfos: {}
    },

    getters: {
    //   getListKeyWord(state) {
    //         return state.dbListKeyWord;
    // },


  },

  mutations: {
    setUserInfos(state, userInfos) {
      state.userInfos = userInfos;
    },
 
  },

  actions : {
    
     userInfos({commit}){
        return axios.get("/profile/userInfos")
        .then(response =>{
          console.log(response.data) ;
          commit("setUserInfos", response.data.data);
        })
     }

    
  }
}