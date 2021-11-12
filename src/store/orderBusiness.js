import axios from "axios"




  export default {
    namespaced: true,
    state: {
      
           all:[
            
          //       {
          //           oderId: 1,
          //           shippingAddress: "yaounde",
          //           dateCreated: "2021-11-04T13:33:49.000000Z",
          //           Totalproduct: 1,
          //           Totalprice: 5000,
          //           shipping_cost: 19300,
          //           total: 24300,
          //           status: "process",
          //           img: ['http://urlr.me/YMQXD', 'https://placekitten.com/400/300']
          //       },
          //       {
          //           oderId: 2,
          //           shippingAddress: "poste",
          //           dateCreated: "2021-11-04T13:35:51.000000Z",
          //           Totalproduct: 2,
          //           Totalprice: 13500,
          //           shipping_cost: 35000,
          //           total: 48500,
          //           status: "shipped",
          //           img: ['http://urlr.me/YMQXD', 'https://placekitten.com/400/300']
          //       },
          //       {
          //           oderId: 30,
          //           shippingAddress: "obili",
          //           dateCreated: "2021-11-04T13:36:17.000000Z",
          //           Totalproduct: 1,
          //           Totalprice: 20000,
          //           shipping_cost: 1000,
          //           total: 21000,
          //           status: "re-shedule",
          //           img: ['http://urlr.me/YMQXD', 'https://placekitten.com/400/300']
          //       },
          //       {
          //         oderId: 1,
          //         shippingAddress: "yaounde",
          //         dateCreated: "2021-11-04T13:33:49.000000Z",
          //         Totalproduct: 1,
          //         Totalprice: 5000,
          //         shipping_cost: 19300,
          //         total: 24300,
          //         status: "process",
          //         img: ['http://urlr.me/YMQXD', 'https://placekitten.com/400/300']
          //     },
          //     {
          //         oderId: 20,
          //         shippingAddress: "poste",
          //         dateCreated: "2021-11-04T13:35:51.000000Z",
          //         Totalproduct: 2,
          //         Totalprice: 13500,
          //         shipping_cost: 35000,
          //         total: 48500,
          //         status: "shipped",
          //         img: ['http://urlr.me/YMQXD', 'https://placekitten.com/400/300']
          //     },
          //     {
          //         oderId: 3,
          //         shippingAddress: "obili",
          //         dateCreated: "2021-11-04T13:36:17.000000Z",
          //         Totalproduct: 1,
          //         Totalprice: 20000,
          //         shipping_cost: 1000,
          //         total: 21000,
          //         status: "re-shedule",
          //         img: ['http://urlr.me/YMQXD', 'https://placekitten.com/400/300']
          //     },
          //     {
          //       oderId: 1,
          //       shippingAddress: "yaounde",
          //       dateCreated: "2021-11-04T13:33:49.000000Z",
          //       Totalproduct: 1,
          //       Totalprice: 5000,
          //       shipping_cost: 19300,
          //       total: 24300,
          //       status: "process",
          //       img: ['http://urlr.me/YMQXD', 'https://placekitten.com/400/300']
          //   },
          //   {
          //       oderId: 2,
          //       shippingAddress: "poste",
          //       dateCreated: "2021-11-04T13:35:51.000000Z",
          //       Totalproduct: 2,
          //       Totalprice: 13500,
          //       shipping_cost: 35000,
          //       total: 48500,
          //       status: "shipped",
          //       img: ['http://urlr.me/YMQXD', 'https://placekitten.com/400/300']
          //   },
          //   {
          //       oderId: 3,
          //       shippingAddress: "obili",
          //       dateCreated: "2021-11-04T13:36:17.000000Z",
          //       Totalproduct: 1,
          //       Totalprice: 20000,
          //       shipping_cost: 1000,
          //       total: 21000,
          //       status: "re-shedule",
          //       img: ['http://urlr.me/YMQXD', 'https://placekitten.com/400/300']
          //   },
          //   {
          //     oderId: 10,
          //     shippingAddress: "yaounde",
          //     dateCreated: "2021-11-04T13:33:49.000000Z",
          //     Totalproduct: 1,
          //     Totalprice: 5000,
          //     shipping_cost: 19300,
          //     total: 24300,
          //     status: "process",
          //     img: ['http://urlr.me/YMQXD', 'https://placekitten.com/400/300']
          // },
          // {
          //     oderId: 2,
          //     shippingAddress: "poste",
          //     dateCreated: "2021-11-04T13:35:51.000000Z",
          //     Totalproduct: 2,
          //     Totalprice: 13500,
          //     shipping_cost: 35000,
          //     total: 48500,
          //     status: "shipped",
          //     img: ['http://urlr.me/YMQXD', 'https://placekitten.com/400/300']
          // },
          // {
          //     oderId: 3,
          //     shippingAddress: "obili",
          //     dateCreated: "2021-11-04T13:36:17.000000Z",
          //     Totalproduct: 1,
          //     Totalprice: 20000,
          //     shipping_cost: 1000,
          //     total: 21000,
          //     status: "re-shedule",
          //     img: ['http://urlr.me/YMQXD', 'https://placekitten.com/400/300']

          // }
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
          });
    
          
        });
        
      }
        
      //   let page = 0;
      //   let stop = 20;

      //   while(stop >= page){


      //   let data = [ {
      //     oderId: page+2,
      //     shippingAddress: "yaounde",
      //     dateCreated: "2021-11-04T13:33:49.000000Z",
      //     Totalproduct: 1,
      //     Totalprice: 5000,
      //     shipping_cost: 19300,
      //     total: 24300,
      //     status: "process",
      //     img: ['http://urlr.me/YMQXD', 'https://placekitten.com/400/300']
      // },
      // {
      //     oderId: page+1,
      //     shippingAddress: "poste",
      //     dateCreated: "2021-11-04T13:35:51.000000Z",
      //     Totalproduct: 2,
      //     Totalprice: 13500,
      //     shipping_cost: 35000,
      //     total: 48500,
      //     status: "shipped",
      //     img: ['http://urlr.me/YMQXD', 'https://placekitten.com/400/300']
      // },
      // {
      //     oderId: page,
      //     shippingAddress: "obili",
      //     dateCreated: "2021-11-04T13:36:17.000000Z",
      //     Totalproduct: 1,
      //     Totalprice: 20000,
      //     shipping_cost: 1000,
      //     total: 21000,
      //     status: "re-shedule",
      //     img: ['http://urlr.me/YMQXD', 'https://placekitten.com/400/300']
      // } ]


      // data.forEach(element => {
        
      //   commit("setAll", element);
      // });

      //     console.log(state.all);
      
      //     page++;
      //     console.log(page);
      //   }
    
    }
    
    
  }
}