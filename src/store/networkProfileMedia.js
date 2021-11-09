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

    getAllImages(state) {
      return state.ownerpostimages;
    },

  },
  mutations: {
    //set media data

    removeAlbum(state, uuid) {
      state.owneralbums = state.owneralbums.filter(album => album.id != uuid)
    },

    updateAlbum(state, payload) {
      const newState = state.owneralbums.map(album => (album.id == payload.id) ? Object.assign(album, { name: payload.name }) : album)
      state.albums = newState
    },

    updateAlbumItem(state, payload) {
      const newState = state.owneralbums.map(album => (album.id == payload.id) ? Object.assign(album, { items: ('remove' == payload.action) ? parseInt(album.items) - 1 : parseInt(album.items) + 1 }) : album)
      state.albums = newState
    },

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
        });
    },

    getImages({ commit }, networkId) {
      return axios
        .get(`network/post/media/${networkId}`)
        .then(({ data }) => {
          commit("setImages", data.data);
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
      return axios.post(`network/store/media/${payload.businessID}/${payload.albumID}`, payload.data);
    },

    async setProfilePic({ commit }, { businessID, albumID }) {
      return axios.post(`network/make/profile/${businessID}/${albumID}`);
    },

    async setCoverPic({ commit }, { businessID, albumID }) {
      return axios.post(`network/make/coverpic/${businessID}/${albumID}`);
    },

    async deleteImage({ commit }, id) {
      return axios.delete(`network/picture/${id}`);
    },

    async downloadPic({ commit }, id) {
      return axios({
        url: `network/download/media/${id}`,
        method: "get",
        responseType: "blob"
      });
    },

    async createAlbum({ commit }, { id, data }) {
      const res = await axios.post("network/album/create/" + id, data)
        .then(({ data }) => {
          console.log(data);
        });
    },

    async updatedAlbum({ commit }, payload) {
      return await axios.post(
        "network/album/update/" + payload.id,
        {
          name: payload.name,
        }
      ).then(({ data }) => {

        commit("upAlbum", data.data);
        console.log(data);
      });
    },

    async deletedAlbum({ commit }, { businessID, albumID }) {
      return await axios.delete(`network/album/${albumID}`);
    },



  }
};