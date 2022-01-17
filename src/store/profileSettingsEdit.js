import axios from "axios"

  export default {
    namespaced: true,
    state: {
       userInfos: null,
       etat: 0,
       selectedId:5,
       defaultPayment: []
    },

    getters: {
    //   getListKeyWord(state) {
    //         return state.dbListKeyWord;
    // },

    getDefaultPayment(state) {
      return state.defaultPayment;
    }
  },

  mutations: {
    setUserInfos(state, userInfos) {
      state.userInfos = userInfos;
    },

    setEtat(state){
      state.etat = 1 ;
    },

    setDefaultPayment(state, defaultPayment){
      state.defaultPayment = defaultPayment ;
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

     },

    getDefaultPayment( {commit}, Data ){
      console.log("DefaultPayment");
      return axios
      .get(`profile/${Data.path}`)
      .then(({ data }) => {
          commit("setDefaultPayment", data.data);
        console.log(data);

      })
    },
    confirmPayment( {commit}, Data ){
      console.log("confirmPayment");
      console.log(Data);
      return axios
      .post(`profile/${Data.path}`, Data.formData)
      .then(({ data }) => {
        console.log(data);
        return data
      })
    }

    
  }
}