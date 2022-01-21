import axios from "axios"




  export default {
    namespaced: true,
    state: {
      
           orders:[],
           followers: []
   
    },

    getters: {

      orders: state => {
        return state.orders;
      },



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

    setOrders(state, data){
      state.orders=data;
    },


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
  
    getOrder({ commit},payload) { 
       
     

      let url=`order/Business/list?businessId=${payload.id}&status=${payload.status}&page=${payload.page}`;
   // let url=`order/Business/list?businessId=${payload.id}$page=${payload.page}`;

  
        return axios.post(url).then( response  => {
         
        
         console.log(response);
          commit("setOrders", response.data);
          
        }).catch((err) => {
          console.log("Something went wrong");
          console.log({ err: err })
        }); 
        
    
        
     
    
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


  