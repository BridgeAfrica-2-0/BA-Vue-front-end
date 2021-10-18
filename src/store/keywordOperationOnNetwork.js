import axios from "axios"
//axios.defaults.baseURL = "https://alert.maxinemoffett.com/api/v1/";

axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("access_token");

  export default {
    namespaced: true,
    state: {
        keyWordAlert : [],
        dbListKeyWord : null,
        listKeyWord: [],
        listPost: null
    },

    getters: {
      getListKeyWord(state) {
            return state.dbListKeyWord;
    },


  },

  mutations: {
    setListKeyWord(state, newWord) {
      state.listKeyWord.push(newWord);
    },
    
    setDbListKeyWord(state, data){
      state.dbListKeyWord = data
    },
    setListPost(state, data){
      state.listPost = data
    }
  },

  actions : {
  

    newKeyWord({ commit },data) {
        
      return axios.post("/alerts/storetAlertnetwork" ,data).then( response  => {
        console.log(response);
        //commit("setUserData", data.data);
      });
    },

    DbListKeyWord({commit}, id){
      return axios.get("alerts/listAlertnetwork"+id)
      .then(response =>{
        console.log(response.data.data) ;
        commit("setDbListKeyWord", response.data.data);
      })
    },

    listPost({commit}, data){
      return axios.get("/alerts/listPostKeywordAlert"+data)
      .then(response =>{
        console.log(response.data.data);
        commit("setListPost", response.data.data)
      })
    },

    approvePost({commit},data){ console.log(data);
      return axios.post("/alerts/approveAlertnetwork"+data.id, data.dat)
      .then(response =>{
        console.log(response);
      })
    },
    unApprovePost({commit},data){ console.log(data);
      return axios.post("/alerts/unapprovedAlertnetwork",data)
      .then(response =>{
        console.log(response);
      })

    }

  }
}