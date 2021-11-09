import axios from "axios";

export default {
  namespaced: true,
  state: {
    owneralbums: [],
    albumimages: [],
    ownerpostimages: [],
  },
  getters: {
    getAlbums(state) {
      return state.owneralbums;
    },

    getAlbumImages(state) {
      return state.albumimages;
    },

    getImages(state) {
      return state.ownerpostimages;
    },

  },
  mutations: {
    //set media data

    setAlbums(state, owneralbums) {
      state.owneralbums = owneralbums;
    },

    setImages(state, ownerpostimages) {

      state.ownerpostimages = ownerpostimages;
    },

    setAlbumImages(state, albumimages) {
      state.albumimages = albumimages;
    },

  },

  actions: {

    getAlbumImages({ commit }, network_and_album_Id) {
      return axios
        .get('network/album/show/' + network_and_album_Id)
        .then(({ data }) => {
          commit('setAlbumImages', data.data);
          console.log(data);
          console.log('network/album/show/' + network_and_album_Id);
        });
    },

    getImages({ commit }, networkId) {
      return axios
        .get(`network/post/media/${networkId}`)
        .then(({ data }) => {
          commit("setImages", data.data);
          console.log(data);
          console.log(`network/post/media/${networkId}`);
        });
    },

    getAlbums({ commit }, networkId) {
      return axios
        .get(`network/album/index/${networkId}`)
        .then(({ data }) => {
          commit("setAlbums", data.data);
        });
    },

    async submitPost({ commit }, payload) {
      return axios.post(`business/store/media/${payload.businessID}/${payload.albumID}`, payload.data);
    },

    async setProfilePic({ commit }, { businessID, albumID }) {
      return axios.post(`business/make/logopic/${businessID}/${albumID}`);
    },

    async setCoverPic({ commit }, { businessID, albumID }) {
      return axios.post(`business/make/coverpic/${businessID}/${albumID}`);
    },

    async deleteImage({ commit }, id) {
      return axios.delete(`business/picture/${id}`);
    },

    async downloadPic({ commit }, id) {
      return axios({
        url: `business/download/media/${id}`,
        method: "get",
        responseType: "blob"
      });
    },

  }
};