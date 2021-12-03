import axios from "axios"




  export default {
    namespaced: true,
    state: {
      
           all:[],
           followers: []
   
    },

    getters: {
      process: state => {
        return state.all.filter(val => val.status == "pending")
      },

      shipped: state => {
        return state.all.filter(val => val.status =="shipped")
      },
      reshedule: state => {
        return state.all.filter(val => val.status =="re-shedule")
      },

      getfollowers(state) {
        return state.followers;
    }

  },

  mutations: {
    setAll(state, data){
        state.all.push(data) 
      },
      
      resetAll(state){
        state.all = [] 
      },


      setfollowers(state, followers) {
        state.followers = followers;
    },
      
  },

  actions : {
  
    getOrder({ commit,state },data) { 
        let pages = 1;
        let continu = true
        commit("resetAll")
     while (continu) {
        return axios.get(data+''+pages ).then( response  => {
          continu = response.data.data.length ;
          pages++
        
          response.data.data.forEach(element => {
            commit("setAll", element);
            console.log(state.all);
          });
    
          
        });
        
      }
        
     
    
    },


    getfollowers( {commit}, businessId ){
        return axios
        .get(`business/community/people/${businessId}`)
        .then(({ data }) => {
            commit("setfollowers", data.data);
          console.log(data);
  
        })
      },
  
  
  
      updateOrderStatus( {commit}, data ){
        console.log("updateOrderStatus");
        console.log("data.path",data.path);
        console.log("data.status",data.formData);
        return axios
        .post(`/${data.path}`, data.formData)
        .then(({ data }) => {
          console.log(data);
          return data;
        })
      },
    
    
  }
}


  