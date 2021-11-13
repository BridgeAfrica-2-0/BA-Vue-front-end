import axios from "axios";

export default {
  namespaced: true,

  state: {

     keyword:null,
     location:null,
     businesses:[],
     sponsoredBusinesses:[],
     searchState:{},
     isLoading:false,

    

    
  },

  mutations: {
    setLoading(state, data) {
      console.log("setting oader mother fucker");
      console.log(data);
      state.isLoading = data;

    },


    setBusinesses(state, data) {
      state.businesses = data;

    },

  
   setSearchState(state, data) {
      state.searchState = data;

    },




    setSponsoredBusinesses(state, data) {
        state.sponsoredBusinesses = data;
  
      },
  

    


  },

  actions: {
    


  




      FIND_BUSINESS({ commit }, payload) {
        console.log("business search start");
      return axios.get(`search`,  {
        keyword : payload.keyword,
        location : payload.location,
      
        categoryId: payload.category,
        subCategoryId: payload.subcategory,
        filterId: payload.filter,
        distance: payload.distance,
        neighbourhoodId: payload.neighbourhood,
        
      }).then(({ data }) => {
        console.log(data);
        commit("setBusinesses", data);
        commit("setSponsoredBusinesses", data.data.sponsord);
         commit("setSearchState", payload);
      }).catch(error => {
        console.log(
          {erroe:error}
        );
        throw error;
      });
    },



   
   

    NEXT_PAGE({ commit, state }, pagge ) {
     
      let payload=state.searchState;
      console.log("business page number ");

      console.log(pagge);
      console.log(payload.keyword);
    return axios.get(`search?page=blec`,  {
      keyword : payload.keyword,
      location : payload.location, 
      categoryId: payload.category,
      subCategoryId: payload.subcategory,
      filterId: payload.filter,
      distance: payload.distance,
      neighbourhoodId: payload.neighbourhood,
      
    }).then(({ data }) => {
      console.log(data);
      commit("setBusinesses", data);
      commit("setSponsoredBusinesses", data.data.sponsord);
       commit("setSearchState", payload);
    }).catch(error => {
      console.log(
        {erroe:error}
      );
      throw error;
    });
  },

    

   

  
  },

  getters: {
   
    getSearchState(state) {
      return state.searchState;
    },

    getBusiness(state) {
      return state.businesses;
    },
    getSponsorBusinesses(state) {
      return state.sponsoredBusinesses;
    },

    getloadingState(state){
      return state.isLoading;
    }
    
  }
};
