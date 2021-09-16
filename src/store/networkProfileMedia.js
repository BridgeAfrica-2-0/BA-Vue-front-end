import axios from "axios";

export default {
  namespaced: true,
  state: {
    token: "66|m1NNNlGJ98sYB0cl9SEe91VOekHLmoQzAQRgKDYm",
    albums: [],
    albumImages: [],
    ownerpostimages: [],
  },
  getters: {
    getAlbums(state) {
      return state.albums;
    },

    getImages(state) {
      return state.ownerpostimages;
    },

  },
  mutations: {
    //set media data

    setAlbums(state, data) {
      state.albums = data;
    },

    setImages(state, ownerpostimages){
   
      state.ownerpostimages = ownerpostimages;  
    },

    setAlbumImages(state, data) {
      state.albumImages = data;
    },

  },

  actions: {

    getAlbumImages( {commit}, networkId){
      return axios
      .get('business/album/show/'+networkId )
      .then(({ data }) => {
       commit('setAlbumImages', data.data.media);
        console.log(data);
      });
    },

    getImages({ commit }, networkId) {
      return axios
        .get(`network/post/media/${networkId}`)
          .then(({ data }) => {
          commit("setImages", data.data);
          console.log(data);
        });
    },

    getAlbums({ commit }, networkId) {
      return axios
        .get("business/album/index/" + networkId)
          .then(({ data }) => {
          commit("setAlbums", data.data);
          console.log(data);
        });
    },

  }
};