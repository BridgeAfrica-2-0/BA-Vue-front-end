  
import axios from "axios";

export default {
  namespaced: true,
  state: {
    networkInfo: [],
    NetworkRole:'',
    networks: [],
    loader: false,
    success: false, 
    communityPeople: [],
    CommunityBusiness: [],
    communityTotal: [],
    albums: [],
    images: [],
    albumImages: [],
    businesses:[],
    users:[],
    ownerPost: [],
    ownerPostImages: [],
    selected:0
  },



  getters: {

    getAlbums(state) {
      return state.albums;
    },

    getOwnerPost(state) {
      return state.ownerPost
    },

    getImages(state) {
      return state.images;
    },

    getNetworkInfo(state) {
      return state.networkInfo;
    },

    getnetWorks(state) {
      if (state.networks.length > 0) {
        return state.networks.reverse();
      }
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

    setUsers(state, data){
     
      state.users=data;

    },

    setBusinesses(state, data){
      state.businesses=data;
    },
   
    setNetworkRole(state, data){
    state.NetworkRole=data;
    },
    
    setSelected(state, val){
      state.selected = val;
    },
    setnetworkInfo(state, networkInfo) {
      state.networkInfo = networkInfo;
    },
    //set media data

    setAlbums(state, data) {
      state.albums = data;
    },

    setImages(state, data) {

      state.ownerPostImages = data;

    },

    setAlbumImages(state, data) {
      state.albumImages = data;
    },

    setCommunityBusiness(state, data) {
      state.CommunityBusiness = data;
    },

    setCommunityPeople(state, data) {
      state.communityPeople = data;
    },

    removePost(state, uuid) {
      const newPosts = state.ownerPost.filter(post => post.id != uuid)
      state.ownerPost = newPosts
    },

    UpdatePost(state, payload) {
            
      const newPosts = state.ownerPost.map(post => post.id == payload.id ? payload : post)
      state.ownerPost = newPosts
    },

    createPost(state, payload) {
      state.ownerPost = [payload, ...state.ownerPost]
    },

    setNetworkInfo(state, data) {
      state.networkInfo = data;
    },

    setCommunityTotal(state, data) {
      state.communityTotal = data;
    },

    ownerPost(state, data) {
      console.log(data)
      state.ownerPost = data;
    },

    ownerPostImages(state, data) {
      state.ownerPostImages = data;
    },

    updatePost(state, payload) {
      const strategy = {
        "add:comment:count": (uuid) => state.ownerPost.map(post => (post.id == uuid) ? { ...post, comment_count: post.comment_count + 1 } : post)
      }

      try {
        state.ownerPost = strategy[payload.action](payload.uuid)
      } catch (error) {
        throw new Error(error)
      }

    },

    setNetworks(state, payload) {
      state.networks = payload;
    },
    updateNetwork(state, payload) {
      state.networks = [];
    },
    setLoader(state, payload) {
      state.loader = payload;
    },
    setSuccess(state, payload) {
      state.success = payload;
    }
  },

  actions: {


    users({ commit }, url) {
      return axios.get(url).then(({ data }) => {
        console.log(data);
        commit('setUsers', data.data.users);
      });
    },


    busineses({ commit }, url) {
      return axios.get(url).then(({ data }) => {
        console.log(data);
        commit('setBusinesses', data.data.businesses);
      });
    },


    Selected({commit}){
        commit('setSelected', 4)
    },

    updateNetwork( {commit}, networkData ){
      console.log("networkData.path",networkData.path);
      console.log("networkData.formData",networkData.formData);
      return axios
      .post(networkData.path, networkData.formData)
      .then(({ data }) => {
        console.log(data);
        return data;
      })
    },

    submitFile( {commit}, networkData ){
      console.log("networkData.path",networkData.path);
      console.log("networkData.formData",networkData.formData);
      return axios.post( networkData.path, networkData.formData,
        {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        }
      )
      .then(({ data }) => {
        console.log(data);
        return data;
      })
    },

    nFormatter(num) {
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
      }
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
      }
      return num;
    },

    getnetworkInfo( {commit,rootGetters}, networkId ){  
      
      
      let auth=rootGetters['auth/isLogged'];  
      let url=`network/${networkId}/about/information`;

      if(!auth){    
        url = `guest/network/${networkId}/about/information`; 
      }


      return axios
      .get(url)
      .then(({ data }) => {
          commit("setNetworkInfo", data.data);
      

      })
    },
    
    getAlbumImages( {commit}, networkId){
      return axios
      .get('network/album/show/'+networkId )
      .then(({ data }) => {
       commit('setAlbumImages', data.data.media);
        console.log(data);
      });
    },

    getImages({ commit }, networkId) {
      return axios.get("network/post/" + networkId).then(({ data }) => {
        commit("setImages", data.data);
        console.log(data);
      });
    },

    getAlbums({ commit }, networkId) {
      return axios.get("network/album/index/" + networkId).then(({ data }) => {
        commit("setAlbums", data.data);
        console.log(data);
      });
    },

    ownerPost({ commit }, networkId) {
      return axios.get("network/show/post/" + networkId).then(({ data }) => {
        commit("ownerPost", data.data);
        console.log(data);
      });
    },

    ownerPostImages({ commit }, networkId) {
      return axios.get("network/show/images/" + networkId).then(({ data }) => {
        commit("ownerPostImages", data.data);
        console.log(data);
      });
    },

    networkInfo({ commit }, networkId) {
      return axios.get(`network/${networkId}/about/information`).then(({ data }) => {
        commit("setNetworkInfo", data.data);
        console.log(data);
      });
    },

    Communitynetwork({ commit }, networkId) {
      return axios
        .get("network/community/network/" + networkId)
        .then(({ data }) => {
          commit("setCommunitynetwork", data.data);
          console.log(data);
        });
    },

    CommunityPeople({ commit }, networkId) {
      return axios
        .get("network/community/people/" + networkId)
        .then(({ data }) => {
          commit("setCommunityPeople", data.data);
          console.log(data);
        });
    },

    networkCommunityTotal({ commit }, networkId) {
      return axios
        .get("network/community/total/" + networkId)
        .then(({ data }) => {
          commit("setCommunityTotal", data.data);
          console.log(data);
        });
    },

    // temporal signin to get token for developement purpose
    async signIn() {
      axios
        .post("/user/login", {
          email: "info@moazateeq.com",
          password: "12345678"
        })
        .then(res => {
          localStorage.setItem("access_token", res.data.data.accessToken);
        });
    },
    // Get networks from the backend
    async getNetworks({ dispatch, commit }) {
      await dispatch("signIn");
      await axios
        .get("network", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token")
          }
        })
        .then(res => {
          commit("setLoader", false);
          commit("setSuccess", true);
          commit("setNetworks", res.data.data);
          setTimeout(() => {
            commit("setSuccess", false);
          }, 2000);
        })
        .catch(err => {
          console.log("Unauthorized request !!");
        });
    },

    // Add network to the database but doesn't work correctly for now
    async addNetwork({ commit }, newNetwork) {
      console.log(newNetwork);
      axios
        .post("/network", newNetwork, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token")
          }
        })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log("Something went wrong");
        });
    },
    //delete network
    async deleteNetwork() {},
    // Edit a network
    async editNetwork({ dispatch, commit }, editedNetwork) {
      commit("setLoader", true);
      axios
        .put(`network/${editedNetwork.id}`, editedNetwork, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token")
          }
        })
        .then(async res => {
          await dispatch("getNetworks");
        })
        .catch(err => {
          console.log("Something went wrong");
        });
    }
  }
};