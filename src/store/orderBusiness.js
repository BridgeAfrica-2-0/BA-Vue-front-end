import axios from "axios"




  export default {
    namespaced: true,
    state: {
      
           all:[],
   
    },

    getters: {
      process: state => {
        return state.all.filter(val => val.status == "process")
      },

      shipped: state => {
        return state.all.filter(val => val.status =="shipped")
      },
      reshedule: state => {
        return state.all.filter(val => val.status =="re-shedule")
      }

  },

  mutations: {
    setAll(state, data){
        state.all.push(data) 
      },
      
      
  },

  actions : {
  
    getOrder({ commit,state },data) {
        let pages = 1;
        let continu = true
     while (continu) {
        return axios.get(`/order/getOrderBusiness/${data}/${pages}` ).then( response  => {
          continu = response.data.data.length ;
          pages++
        
          response.data.data.forEach(element => {
            commit("setAll", element);
            console.log(state.all);
          });
    
          
        });
        
      }
        
     
    
    }
    
    
  }
}