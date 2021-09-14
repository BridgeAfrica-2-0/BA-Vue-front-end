import axios from "axios";

export default {
  namespaced: true,
  state: {
    networks: [],
    loader: false,
    success: false,
    albums: [],
    images: [],
    albumImages: [],
    ownerPost: [],
    ownerPostImages: []
  },
  getters: {
    getAlbums(state) {
      return state.albums;
    },

    getImages(state) {
      return state.images;
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

    setImages(state, data) {
      state.images = data;
    },

    setAlbumImages(state, data) {
      state.albumImages = data;
    },

    ownerPost(state, data) {
      state.ownerPost = data;
    },

    ownerPostImages(state, data) {
      state.ownerPostImages = data;
    },

    setLoader(state, payload) {
      state.loader = payload;
    },
    setSuccess(state, payload) {
      state.success = payload;
    }
  },

  actions: {
    getAlbumImages({ commit }) {
      return axios.get("profile/post/media/").then(({ data }) => {
        commit("setAlbumImages", data.data.media);
        console.log(data);
      });
    },

    getImages({ commit }) {
      return axios.get("profile/post/media/").then(({ data }) => {
        commit("setImages", data.data);
        console.log(data);
      });
    },

    getAlbums({ commit }) {
      return axios.get("profile/post/media/").then(({ data }) => {
        commit("setAlbums", data.data);
        console.log(data);
      });
    },

    ownerPost({ commit }) {
      return axios.get("profile/post/media/").then(({ data }) => {
        commit("ownerPost", data.data);
        console.log(data);
      });
    },

    ownerPostImages({ commit }) {
      return axios.get("profile/post/media/").then(({ data }) => {
        commit("ownerPostImages", data.data);
        console.log(data);
      });
    }
  }
};
