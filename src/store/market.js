import axios from "axios";

export default {
  namespaced: true,
  state: {
    products: [],
    categories: [],
    subCategories: [],
    subCat:[],
    subFilter: [],
    loader: false,
    success: false,
  },
  getters: {
    getProducts(state) {
      return state.products;
    },

    getCategories(state) {
      return state.categories;
    },

    getSubCategories(state) {
      return state.subCategories;
    },
    getSubFilters(state) {
      return state.subFilter;
    },


    // sending loader value
    getLoader(state) {
      return state.loader;
    },
    // sending success value
    getSuccess(state) {
      return state.success;
    }
  },


  mutations: {
    //set media data
    setProducts(state, data) {
      state.products = data;
    },
    setCategories(state, data) {
      state.categories = data;
    },
    setSubCat(state, data) {
      state.subCategories = data;
    },
    

    setSubCategories(state, data) {
      state.subCategories = data;
    },


    setSubFilters(state, data) {
      state.subFilter = data
    },


    setLoader(state, payload) {
      state.loader = payload;
    },


    setSuccess(state, payload) {
      state.success = payload;
    }
  },

  actions: {

    async getBuCategories({ commit }, businessId) {
      await axios.get(`/market/business/categories/${businessId}`)
        .then((response) => {
          commit('setCategories', response.data.data)
         
        })
        .catch((error) => {
          console.log(error)
        })
    },


    async getSubCategories({ commit }, categoryId) {
      await axios.get(`subcategory/${categoryId}`)
        .then((response) => {
          commit('setSubCategories', response.data.data)
          commit('subCat', response.data.data)
       
        })
        .catch((error) => {
          console.log(error)
        })
    },



    getFilter({ state }, sub_id) {
      return axios
        .get(`filters/subcategory/${sub_id}`)
    },


    getProducts({ commit }) {
      return axios.get("market")
        .then((res) => {
          commit("setProducts", res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },


    nextPage({ commit }, page) {
      commit("setProducts", []);

      return axios.get(`market?page=${page}`)
        .then((res) => {
          console.log("products list: ", res.data);
          commit("setProducts", res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },


    getBproducts({ commit }, url) {
      return axios.get(url)
        .then((res) => {
          commit("setProducts", res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },   


    bPnextPage({ commit }, url) {
      commit("setProducts", []);

      return axios.get(url)
        .then((res) => {
          console.log("products list: ", res.data);
          commit("setProducts", res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },





     

    
    getCategories({ state, commit }, bussiness_id) {
      return axios.get("category").then(res => {
        
        console.log(res);

         let categories = res.data.data;
         let all = [];
         
        categories.map(cat => {

           let data = {
             bussiness_id: bussiness_id,
             cat_id: cat.id
            };

           axios.get(`subcategory/${data.cat_id}?business_id=${data.bussiness_id}`).then(res => {
              
               all.push({
                 category: cat,
                 sub_cat: res.data.data    });
               
           }).catch(err => {
              console.error(err);
             });
         });



      commit("setCategories", all);
       })
       .catch(err => {
         console.log("Categories: ");
         console.error(err);
       });
    },

    UpdateProduct({ commit }, businessData) {
      console.log("UpdateProduct")
      console.log(businessData)
      return axios
        .post(businessData.path, businessData.formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(({ data }) => {
          return data;
        })
    },
    DeleteProduct({ commit }, businessData) {
      console.log("DeleteProduct")
      console.log(businessData)
      return axios
        .delete(businessData.path)
        .then(({ data }) => {
          return data;
        })
    },




  }
};

