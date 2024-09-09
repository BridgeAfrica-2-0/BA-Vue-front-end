import axios from "axios";

export default {
  namespaced: true,
  state: {
    owneralbums: [],
    albumimages: [],
    ownerpostimages: []
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
    }
  },
  mutations: {
    //set media data

    updateAlbum(state, payload) {
      const newState = state.owneralbums.map(album =>
        album.id == payload.id
          ? Object.assign(album, { name: payload.name })
          : album
      );
      state.owneralbums = newState;
    },

    updateAlbumItem(state, payload) {
      const newState = state.owneralbums.map(album =>
        album.id == payload.id
          ? Object.assign(album, {
              items:
                "remove" == payload.action
                  ? parseInt(album.items) - 1
                  : parseInt(album.items) + 1
            })
          : album
      );
      state.owneralbums = newState;
    },

    removeAlbum(state, uuid) {
      state.owneralbums = state.owneralbums.filter(album => album.id != uuid);
    },

    setAlbums(state, owneralbums) {
      state.owneralbums = owneralbums;
    },

    newAlbum(state, payload) {
      state.owneralbums = payload;
    },

    setImages(state, ownerpostimages) {
      state.ownerpostimages = ownerpostimages;
    },

    setAlbumImages(state, albumimages) {
      state.albumimages = albumimages;
    }
  },

  actions: {
    getAlbumImages({ commit, rootGetters }, { businessId, albumId }) {
      let auth = rootGetters["auth/isLogged"];
      let url = "network/album/show/" + businessId + "/" + albumId;

      if (!auth) {
        url = "guest/network/album/show/" + businessId + "/" + albumId;
      }

      return axios.get(url).then(({ data }) => {
        commit("setAlbumImages", data.data);
      });
    },
    getImages({ commit, rootGetters }, networkId) {
      let auth = rootGetters["auth/isLogged"];
      let url = `network/post/media/${networkId}`;

      if (!auth) {
        url = `guest/network/post/media/${networkId}`;
      }

      return axios.get(url).then(({ data }) => {
        commit("setImages", data.data);
        console.log(data);
        console.log(`network/post/media/${networkId}`);
      });
    },

    getAlbums({ commit, rootGetters }, networkId) {
      let auth = rootGetters["auth/isLogged"];
      let url = `network/album/index/${networkId}`;

      if (!auth) {
        url = `guest/network/album/index/${networkId}`;
      }

      return axios.get(url).then(({ data }) => {
        commit("setAlbums", data.data);
        console.log(data);
        console.log(`network/album/index/${networkId}`);
      });
    },

    async createAlbum({ commit }, { id, data }) {
      const res = await axios
        .post("network/album/create/" + id, data)
        .then(({ data }) => {
          commit("newAlbum", data.data);
          console.log(data);
        });
    },

    async deletedAlbum({ commit }, { businessID, albumID }) {
      return await axios.delete(`network/album/${albumID}`);
    },

    async updatedAlbum({ commit }, { id, name }) {
      return await axios.post(`network/album/update/${id}`, { name });
    },

    async deleteAlbum({ commit }, name, album_id) {
      const res = await axios.post(
        "network/album/edit/" + this.url + "/" + album_id,
        { name }
      );
    },

    async submitPost({ commit }, payload) {
      return axios.post(
        `network/store/media/${payload.businessID}/${payload.id}`,
        payload.data
      );
    },

    async setProfilePic({ commit }, { businessID, id }) {
      return axios.post(`network/make/logopic/${businessID}/${id}`);
    },

    async setCoverPic({ commit }, { businessID, id }) {
      return axios.post(`network/make/coverpic/${businessID}/${id}`);
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
    }
  }
};
