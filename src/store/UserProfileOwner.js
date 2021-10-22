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
    ownerPostImages: [],
  },

  getters: {
    getAlbums(state) {
      return state.albums;
    },

    getImages(state) {
      return state.images;
    },

    getalbumImage(state) {
      return state.albumImages;
    },

    // sending loader value
    getLoader(state) {
      return state.loader;
    },
    // sending success value
    getSuccess(state) {
      return state.success;
    },
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
    },

    newAlbum(state, payload) {
      state.albums = payload;
    },
    delAlbum(state, payload) {
      state.albums = payload;
    },
    upAlbum(state, payload) {
      state.albums = payload;
    },
    //for  images
    setSubmitPost(state, payload) {
      state.images = payload;
    },
    setProfilePic(state, payload) {
      state.images = payload;
    },
    setCoverPic(state, payload) {
      state.images = payload;
    },
    deleteImage(state, payload) {
      state.images = payload;
    },
    downloadPic(state, payload) {
      state.images = payload;
    },

    updateAlbum(state, payload) {
      const newState = state.albums.map(album => (album.id == payload.id) ? Object.assign(album, { name: payload.name }) : payload)
      state.albums = newState
    },

    removeAlbum(state, uuid) {
      state.albums = state.albums.filter(album => album.id != uuid)
    }
  },

  actions: {
    async ownerPost({ commit }) {
      const res = await axios.get("profile/post/media/");
      commit("ownerPost", res.data);
    },

    async ownerPostImages({ commit }) {
      const res = await axios.get("profile/post/media/");
      commit("ownerPostImages", res.data);
    },

    async getAlbumImages({ commit }, id) {
      const res = await axios.get(`profile/album/pictures/${id}`);
      commit("setAlbumImages", res.data.data);
    },

    // for albums
    async getAlbums({ commit }) {
      const res = await axios.get("profile/album/show");
      console.log(res.data.data.album);
      commit("setAlbums", res.data.data.album);
    },

    async createAlbum({ commit }, albumInfo) {
      return axios.post("profile/album/create", albumInfo);

    },

    async updateAlbum({ commit }, user) {
      return axios.post(`profile/album/edit/${user.id}`, user);
    },

    async deleteAlbum({ commit }, id) {
      return axios.delete(`profile/album/delete/${id}`);
    },

    // for images
    async getImages({ commit }) {
      const res = await axios.get("profile/post/media");
      commit("setImages", res.data.data);
    },

    async submitPost({ commit }, payload) {
      const res = await axios.post(`profile/upload/${payload.id}`, payload);
      commit("setSubmitPost", res.data.data);
    },

    async setProfilePic({ commit }, id) {
      const res = await axios.post(`profile/makeProfile/picture/${id}`);
      commit("setProfilePic", res.data.data);
    },

    async setCoverPic(id) {
      const res = await axios.post(`profile/makeCover/picture/${id}`);
    },

    async deleteImage({ commit }, id) {
      const res = await axios.delete(`profile/albumPicture/delete/${id}`);
      commit("deleteImage", res.data.data);
    },

    async downloadPic({ commit }, id) {
      const res = await axios.post(`profile/album/pictures/${id}`);
      commit("downloadPic", res.data.data);
    },
  },
};
