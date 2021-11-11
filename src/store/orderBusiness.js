import axios from "axios"




  export default {
    namespaced: true,
    state: {
      
           all:[
            
                {
                    oderId: 1,
                    shippingAddress: "yaounde",
                    dateCreated: "2021-11-04T13:33:49.000000Z",
                    Totalproduct: 1,
                    Totalprice: 5000,
                    shipping_cost: 19300,
                    total: 24300,
                    status: "process"
                },
                {
                    oderId: 2,
                    shippingAddress: "poste",
                    dateCreated: "2021-11-04T13:35:51.000000Z",
                    Totalproduct: 2,
                    Totalprice: 13500,
                    shipping_cost: 35000,
                    total: 48500,
                    status: "shipped"
                },
                {
                    oderId: 30,
                    shippingAddress: "obili",
                    dateCreated: "2021-11-04T13:36:17.000000Z",
                    Totalproduct: 1,
                    Totalprice: 20000,
                    shipping_cost: 1000,
                    total: 21000,
                    status: "re-shedule"
                },
                {
                  oderId: 1,
                  shippingAddress: "yaounde",
                  dateCreated: "2021-11-04T13:33:49.000000Z",
                  Totalproduct: 1,
                  Totalprice: 5000,
                  shipping_cost: 19300,
                  total: 24300,
                  status: "process"
              },
              {
                  oderId: 20,
                  shippingAddress: "poste",
                  dateCreated: "2021-11-04T13:35:51.000000Z",
                  Totalproduct: 2,
                  Totalprice: 13500,
                  shipping_cost: 35000,
                  total: 48500,
                  status: "shipped"
              },
              {
                  oderId: 3,
                  shippingAddress: "obili",
                  dateCreated: "2021-11-04T13:36:17.000000Z",
                  Totalproduct: 1,
                  Totalprice: 20000,
                  shipping_cost: 1000,
                  total: 21000,
                  status: "re-shedule"
              },
              {
                oderId: 1,
                shippingAddress: "yaounde",
                dateCreated: "2021-11-04T13:33:49.000000Z",
                Totalproduct: 1,
                Totalprice: 5000,
                shipping_cost: 19300,
                total: 24300,
                status: "process"
            },
            {
                oderId: 2,
                shippingAddress: "poste",
                dateCreated: "2021-11-04T13:35:51.000000Z",
                Totalproduct: 2,
                Totalprice: 13500,
                shipping_cost: 35000,
                total: 48500,
                status: "shipped"
            },
            {
                oderId: 3,
                shippingAddress: "obili",
                dateCreated: "2021-11-04T13:36:17.000000Z",
                Totalproduct: 1,
                Totalprice: 20000,
                shipping_cost: 1000,
                total: 21000,
                status: "re-shedule"
            },
            {
              oderId: 10,
              shippingAddress: "yaounde",
              dateCreated: "2021-11-04T13:33:49.000000Z",
              Totalproduct: 1,
              Totalprice: 5000,
              shipping_cost: 19300,
              total: 24300,
              status: "process"
          },
          {
              oderId: 2,
              shippingAddress: "poste",
              dateCreated: "2021-11-04T13:35:51.000000Z",
              Totalproduct: 2,
              Totalprice: 13500,
              shipping_cost: 35000,
              total: 48500,
              status: "shipped"
          },
          {
              oderId: 3,
              shippingAddress: "obili",
              dateCreated: "2021-11-04T13:36:17.000000Z",
              Totalproduct: 1,
              Totalprice: 20000,
              shipping_cost: 1000,
              total: 21000,
              status: "re-shedule"
          }
            ],
           
           

       
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
      setProcess(state, data){
        state.process.push(data) 
      },
      setReshedule(state, data){
        state.reschedule.push(data) 
      },
      setShipped(state, data){
        state.shipped.push(data) 
      },
      
  },

  actions : {
  
    getOrder({ commit },data) {
        
        return axios.get("/order/getOrderBusiness/"+data ).then( response  => {
            console.log("getOrder");
         
            //  commit("setAll", response.data.data);
        });
        
        
    
    }
    
    
  }
}