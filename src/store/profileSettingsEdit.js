import axios from "axios"

  export default {
    namespaced: true,
    state: {
       userInfos: [],
       etat: 0,
       selectedId:5
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

    setEtat(state){
      state.etat = 1 ;
    }
 
  },

  actions : {
    
     userInfos({commit}){
        return axios.get("/profile/userInfos")
        .then(response =>{
          console.log(response.data) ;
          commit("setUserInfos", response.data.data);
        })
     },

     updateUserInfos({commit}, data){
      return axios.post("/profile/update", data)
      // .then(response =>{
      //   console.log(response.data) ;
       
      // })
     },

     changePayment({commit}, data){
      return axios.post("/profile/update-payement-method", data)
      .then(response =>{
        console.log(response.data) ;
       
      })
     },

     changePassword({commit}, data){
      return axios.post("/profile/reset/password", data)
      // .then(response =>{
      //   console.log(response) ;
       
      // })
     },
     redirection({commit}){
      commit("setEtat")

     }

    
  }
}