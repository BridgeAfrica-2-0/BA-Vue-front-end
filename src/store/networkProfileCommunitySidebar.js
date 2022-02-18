import axios from "axios";


export default {
  namespaced: true,
  state: {
    userdetails: [],
    businessdetails: [],
    networkdetails: []
  },

  getters: {
    getUserDetails(state) {
        return state.userdetails;
    },
    getBusinessDetails(state) {
        return state.businessdetails;
    },
    getNetworkDetails(state) {
        return state.networkdetails;
    }
  },

  mutations: {
    setUserDetails(state, userdetails) {
        state.userdetails = userdetails;
    },
    setBusinessDetails(state, businessdetails) {
        state.businessdetails = businessdetails;
    },
    setnetworkDetails(state, networkdetails) {
        state.networkdetails = networkdetails;
    }
  },

  actions: {


    getUserDetails( {commit,rootGetters}, networkId ){




        let auth=rootGetters['auth/isLogged'];  
        let url=`network/community/people/${networkId}`;
  
        if(!auth){    
          url = `guest/network/community/people/${networkId}`; 
        }

        

      return axios
      .get(url)
      .then(({ data }) => {
       commit("setUserDetails", data.data);
        console.log(data);

      })
    },

    getBusinessDetails( {commit,rootGetters}, networkId ){


      let auth=rootGetters['auth/isLogged'];  
      let url=`network/community/businesses/${networkId}`;

      if(!auth){    
        url = `guest/network/community/businesses/${networkId}`; 
      }


      return axios
      .get(url)
      .then(({ data }) => {
          commit("setBusinessDetails", data.data);
        console.log(data);

      })
    },

    getNetworkDetails( {commit,rootGetters}, networkId ){

      
      let auth=rootGetters['auth/isLogged'];  
      let url=`network/community/networks/${networkId}`;

      if(!auth){    
        url = `guest/network/community/networks/${networkId}`; 
      }



      return axios
      .get(url)
      .then(({ data }) => {
          commit("setnetworkDetails", data.data);
        console.log(data);

      })
    },


  },
};