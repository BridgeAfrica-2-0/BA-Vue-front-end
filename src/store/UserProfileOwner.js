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
    //for album images
    setSubmitPost(state, payload) {
      state.albums = payload;
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
  },

  actions: {
    async getAlbumImages({ commit }) {
      const res = await axios.get("profile/post/media/");
      commit("setAlbumImages", res.data);
    },

    async getImages({ commit }) {
      const res = await axios.get("profile/post/media/");
      commit("setImages", res.data);
    },

    async getAlbums({ commit }) {
      const res = await axios.get("profile/post/media/");
      commit("setAlbums", res.data);
    },

    async ownerPost({ commit }) {
      const res = await axios.get("profile/post/media/");
      commit("ownerPost", res.data);
    },

    async ownerPostImages({ commit }) {
      const res = await axios.get("profile/post/media/");
      commit("ownerPostImages", res.data);
    },

    async createAlbum({ commit }, name) {
      const res = await axios.post("profile/album/create/" + this.url, {
        name,
      });
      commit("newAlbum", res.data);
    },

    async updateAlbum({ commit }, edit_name, album_id) {
      const res = await axios.post(
        "profile/album/edit/" + this.url + "/" + album_id,
        {
          edit_name,
        }
      );
      commit("upAlbum", res.data);
    },

    async deleteAlbum({ commit }, name, album_id) {
      const res = await axios.post(
        "profile/album/delete/" + this.url + "/" + album_id,
        { name }
      );
      commit("delAlbum", res.data);
    },

    // for images
    async submitPost({ commit }, formData, headers) {
      const res = await axios.post(
        "profile/post/media/" + this.url + "/" + this.album,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      commit("setSubmitPost", res.data);
    },

    async setProfilePic({ commit }, image_id, name) {
      const res = await axios.post(
        "profile/makeProfile/picture/" + this.url + "/" + self.album_id,
        {
          name,
        }
      );
      commit("setProfilePic", res.data);
    },

    async setCoverPic({ commit }, image_id, name) {
      const res = await axios.post(
        "profile/makeCover/picture/" + this.url + "/" + image_id,
        {
          name,
        }
      );
      commit("setCoverPic", res.data);
    },

    async deleteImage({ commit }, image_id, name) {
      const res = await axios.post(
        "profile/albumPicture/delete/" + this.url + "/" + image_id,
        {
          name,
        }
      );
      commit("deleteImage", res.data);
    },

    async downloadPic({ commit }, image_id) {
      const res = await axios.get(
        "profile/downloadMedia/" + this.url + "/" + image_id
      );
      commit("downloadPic", res.data);
    },
  },
};
