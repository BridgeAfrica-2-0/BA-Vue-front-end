import axios from "axios";

export default {
  namespaced: true,
  state: {
    albums: [],
    images: [],
    albumImages: [],
  },
  getters: {
    getAlbums(state) {
      return state.albums;
    },

    getImages(state) {
      return state.images;
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
    //set media data

    setAlbums(state, data) {
      state.albums = data;
    },

    setImages(state, data){
   
      state.ownerPostImages=data;  

    },

    setAlbumImages(state, data) {
      state.albumImages = data;
    },

  },

  actions: {

    getAlbumImages( {commit}, busineeId){
     
           
      return axios
      .get('business/album/show/'+busineeId )
      .then(({ data }) => {
       commit('setAlbumImages', data.data.media);
        console.log(data);
      });
    },

    getImages({ commit }, busineeId) {
      return axios.get("business/post/" + busineeId).then(({ data }) => {
        commit("setImages", data.data);
        console.log(data);
      });
    },

    getAlbums({ commit }, busineeId) {
      return axios.get("business/album/index/" + busineeId).then(({ data }) => {
        commit("setAlbums", data.data);
        console.log(data);
      });
    },

  }
};