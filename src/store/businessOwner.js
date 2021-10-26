import axios from 'axios';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
export default {
  namespaced: true,
  state: {
    networks: [],
    loader: false,
    success: {
      state: false,
      succes: false,
      msg: '',
    },
    notifications: [],
    checked: false,
    btnDelLoader: false,
    btnReadLoader: false,

    pendingPosts: [],

    Following: [],
    Followers: [],

    peopleFollowing: [],
    peopleFollowers: [],
    communityPeople: [],
    CommunityBusiness: [],
    communityTotal: [],
    businessInfo: [],
    albums: [],
    images: [],
    albumImages: [],

    ownerPost: [],
    ownerPostImages: [],

    bdetails: [],
    userData: [
      {
        business_insights: {
          number_likes: 0,
          number_shares: 0,
          number_posts: 0,
          total_likes: 0,
          total_shares: 0,
          total_posts: 0,
        },

        business_about: {
          biography: {
            title: 'About Mapoure Agrobusiness',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
              '              Asperiores temporibus, rerum iste id obcaecati quae odit accusamus\n' +
              '              reprehenderit, ipsa nam laudantium pariatur. Harum, soluta. Nam\n' +
              '              accusantium hic numquam architecto debitis. Lorem ipsum dolor sit\n' +
              '              amet consectetur adipisicing elit. Asperiores temporibus, rerum\n' +
              '              iste id obcaecati quae odit accusamus reprehenderit, ipsa nam\n' +
              '              laudantium pariatur. Harum, soluta. Nam accusantium hic numquam\n' +
              '              architecto debitis. Asperiores temporibus, rerum iste id obcaecati\n' +
              '              architecto debitis. Asperiores temporibus, rerum iste id obcaecati\n' +
              '              architecto debitis. Asperiores temporibus, rerum iste id obcaecati\n' +
              '              architecto debitis. Asperiores temporibus, rerum iste id obcaecati\n' +
              '              architecto debitis. Asperiores temporibus, rerum iste id obcaecati\n' +
              '              quae odit accusamus reprehenderit, ipsa nam laudantium pariatur.\n' +
              '              quae odit accusamus reprehenderit, ipsa nam laudantium pariatur.\n' +
              '              Harum, soluta. Nam accusantium hic numquam architecto debitis.',
          },
          address: {
            businessName: 'Current or Last Organization',
            category: 'Agriculture',
            keywords: 'Agriculture',
            country: 'Cameroun',
            city: 'Yaounde',
            NeigbourHood: 'Melen',
            phones: { phone_1: '+237656602212', phone_2: '+237677754814' },
            businessEmail: 'info@businessname.com',
            businessHours: {
              open: 'Always Open',
              dayOfWorks: [
                { day: 'Monday', start: 1, end: 10, check: false },
                { day: 'Tuesday', start: null, end: null, check: false },
                { day: 'Wednesday', start: null, end: null, check: false },
                { day: 'Thursday', start: null, end: null, check: false },
                { day: 'Friday', start: null, end: null, check: false },
                { day: 'Saturday', start: null, end: null, check: false },
                { day: 'Sunday', start: null, end: null, check: false },
              ],
            },
          },
        },

        business_about1: {
          name: 'Tierra Hermiston',
          logo_path: 'http://localhost:8000/storage',
          category: 'Hourse Marketing',
          keywords: null,
          language: null,
          location_description:
            'Tempore quo soluta voluptates quis. Doloremque autem minus ut nisi molestias maiores cum. Et assumenda velit expedita et et sint sed in.',
          website: null,
          community: 6,
          phone: null,
          email: null,
          business_open_hours: [
            {
              day: 'monday',
              opening_time: '09:05:12',
              closing_time: '15:06:18',
            },
            {
              day: 'tuesday',
              opening_time: '07:05:38',
              closing_time: '14:05:43',
            },
          ],
          region: null,
          address: null,
          city: null,
          country: null,
          lat: -56.200329,
          lng: -6.249487,
        },
      },
    ],
  },
  getters: {
    getAlbums(state) {
      return state.albums;
    },

    getdetails(state) {
      return state.bdetails;
    },
    getBusinessAbout(state) {
      return state.userData[0].business_about1;
    },

    getBusinessInsights(state) {
      return state.userData[0].business_insights;
    },

    getImages(state) {
      return state.images;
    },

    getBusinessInfo(state) {
      return state.businessInfo;
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
    // sending button loader value
    getBtnDelLoader(state) {
      return state.btnDelLoader;
    },
    // sending button loader value
    getBtnReadLoader(state) {
      return state.btnReadLoader;
    },
    // sending success value
    getSuccess(state) {
      return state.success;
    },
    // Sending notifications
    sendNotifications(state) {
      if (state.notifications.length > 0) {
        return state.notifications;
      }
    },
    // sending checked value
    sendChecked(state) {
      return state.checked;
    },

    //Getting all pending post
    posts(state) {
      return state.pendingPosts;
    },

    // getting all followers
    getFollowing(state) {
      return state.Following;
    },

    // getting all followers
    getFollowers(state) {
      return state.Followers;
    },

    // getting business people following
    ppleFollowing(state) {
      return state.peopleFollowing;
    },

    // getting business people followers
    ppleFollowers(state) {
      return state.peopleFollowers;
    },
  },
  mutations: {
    //set media data

    updateUserBusinessInsights(state, payload) {
      state.userData[0].business_insights = payload.businessInsights;
    },

    updateUserBusinessAbout(state, payload) {
      state.userData[0].business_about1 = payload.businessAbout;
    },

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

    setBusinessInfo(state, data) {
      state.businessInfo = data;
    },

    setCommunityTotal(state, data) {
      state.communityTotal = data;
    },

    ownerPost(state, data) {
      state.ownerPost = data;
    },

    ownerPostImages(state, data) {
      state.ownerPostImages = data;
    },

    setNetworks(state, payload) {
      state.networks = payload;
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
    // Setting the notifications in the state
    setNotifications(state, payload) {
      state.notifications = payload;
    },

    //getting pending posts
    getPosts(state, payload) {
      state.pendingPosts = payload;
    },

    // Set Pendinding posts
    Approve(state, payload) {
      state.pendingPosts = payload;
    },

    //disapprove pending post
    Disapprove(state, payload) {
      state.pendingPosts = payload;
    },

    //getting all business following
    Following(state, payload) {
      state.Following = payload;
    },

    //getting all business followers
    Followers(state, payload) {
      state.Followers = payload;
    },

    // setting all business people following to the store
    ppleFollowing(state, payload) {
      state.peopleFollowing = payload;
    },

    // setting all business people following to the store
    ppleFollowers(state, payload) {
      state.peopleFollowers = payload;
    },
  },

  actions: {
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

    async loadUserBusinessAbout(context, payload) {
      console.log(payload, 'load user Business About start +++++');
      let response_ = null;
      const id_Business = 47;
      await axios('business/info' + '/' + id_Business, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      })
        .then(response => {
          console.log('load user Business About response (1) +++++++', response);
          if (response.status !== 200 && response.status !== 201) {
            throw 'Error from the server';
          }
          return response.data;
        })
        .then(response => {
          console.log('load user Business About response successsss +++', response);
          if (!response) {
            console.log('Error from the server+++++++');
            throw new Error('Error for loading Business About +++++');
          }
          context.commit('updateUserBusinessAbout', {
            businessAbout: response.data,
          });
          response_ = response;
        })
        .catch(error => {
          console.log('error from the server or the browser', error);
        });
      return response_;
    },

    async updateUserBusinessAbout(context, payload) {
      let response_ = null;
      const id_Business = 2;
      console.log(payload);
      await axios('business/update' + '/' + id_Business, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: payload.business_about.name,
          category: payload.business_about.category,
          keywords: payload.business_about.keywords,
          phone: payload.business_about.phone,
          email: payload.business_about.email,
          region: payload.business_about.region,
          city: payload.business_about.city,
          country: payload.business_about.country,
          openHours: payload.business_about.business_open_hours,
        }),
      })
        .then(response => {
          console.log('update user Business About response (1) +++++++', response);
          if (response.status !== 200 && response.status !== 201) {
            throw 'Error From The Server';
          }
          return response.data;
        })
        .then(response => {
          console.log('update user Business About response successsss (2) +++', response);
          if (!response) {
            console.log('Error THe Server++++++');
            throw new Error('Error For Updating Business About +++++');
          }
          context.commit('updateUserBusinessAbout', {
            businessAbout: payload.business_about,
          });
          response_ = response;
        })
        .catch(error => {
          console.log('Error From the Server or Browser error(1)', error);
          throw error;
        });
      return response_;
    },

    async loadUserBusinessInsight(context, payload) {
      console.log(payload);
      console.log('load user Business Insight start +++++');
      let response_ = null;
      let url = null;
      let config = {};
      if (payload !== null) {
        console.log('Payload does not null ++++++++++');
        url =
          'business/insights/' +
          payload.business_id +
          '?dateStarting=' +
          payload.startDate +
          '&dateClosing=' +
          payload.endDate;
        config = {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
        };
      } else {
        console.log('Payload is null');
        url = 'business/insights';
        config = {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
        };
      }
      await axios(url, config)
        .then(response => {
          console.log('load user Business Insight response (1) +++++++', response);
          if (response.status !== 200 && response.status !== 201) {
            throw 'Errors during processing by the server';
          }
          return response;
        })
        .then(response => {
          console.log('load User Business Insight response successsss +++', response);
          if (!response) {
            console.log('Error From the server +++++++');
            throw new Error('Error for loading Business Insight +++++');
          }
          context.commit('updateUserBusinessInsights', {
            businessInsights: response.data,
          });
          response_ = response;
        })
        .catch(error => {
          console.log({ error: error });
          console.log('error from the server or the browser');
          console.log(error);
          context.commit('updateUserBusinessInsights', {
            businessInsights: null,
          });
        });
      return response_;
    },

    getAlbumImages({ commit }, busineeId) {
      return axios.get('business/album/show/' + busineeId).then(({ data }) => {
        commit('setAlbumImages', data.data.media);
        console.log(data);
      });
    },

    getImages({ commit }, busineeId) {
      return axios.get('business/post/' + busineeId).then(({ data }) => {
        commit('setImages', data.data);
        console.log(data);
      });
    },

    getAlbums({ commit }, busineeId) {
      return axios.get('business/album/index/' + busineeId).then(({ data }) => {
        commit('setAlbums', data.data);
        console.log(data);
      });
    },

    ownerPost({ commit }, busineeId) {
      return axios.get('business/show/post/' + busineeId).then(({ data }) => {
        commit('ownerPost', data.data);
        console.log(data);
      });
    },

    ownerPostImages({ commit }, busineeId) {
      return axios.get('business/show/images/' + busineeId).then(({ data }) => {
        commit('ownerPostImages', data.data);
        console.log(data);
      });
    },

    businessInfo({ commit }, busineeId) {
      return axios.get('business/info/' + busineeId).then(({ data }) => {
        commit('setBusinessInfo', data.data);
        console.log(data);
      });
    },

    CommunityBusiness({ commit }, businessId) {
      return axios.get('business/community/business/' + businessId).then(({ data }) => {
        commit('setCommunityBusiness', data.data);
        console.log(data);
      });
    },

    CommunityPeople({ commit }, businessId) {
      return axios.get('business/community/people/' + businessId).then(({ data }) => {
        commit('setCommunityPeople', data.data);
        console.log(data);
      });
    },

    businessCommunityTotal({ commit }, businessId) {
      return axios.get('business/community/total/' + businessId).then(({ data }) => {
        commit('setCommunityTotal', data.data);
        console.log(data);
      });
    },

    async createAlbum({ commit }, name) {
      const res = await axios.post('business/album/create/' + this.url, {
        name,
      });
      commit('newAlbum', res.data);
    },

    async updateAlbum({ commit }, edit_name, album_id) {
      const res = await axios.post('business/album/update/' + this.url + '/' + album_id, {
        edit_name,
      });
      commit('upAlbum', res.data);
    },

    async deleteAlbum({ commit }, name, album_id) {
      const res = await axios.post('business/album/edit/' + this.url + '/' + album_id, { name });
      commit('delAlbum', res.data);
    },

    // temporal signin to get token for developement purpose
    async signIn() {
      axios
        .post('/user/login', {
          email: 'info@moazateeq.com',
          password: '12345678',
        })
        .then(res => {
          localStorage.setItem('access_token', res.data.data.accessToken);
        });
    },
    // Get networks from the backend
    async getNetworks({ commit }) {
      let sucData = [];
      await axios
        .get('network', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          },
        })
        .then(res => {
          commit('setLoader', false);
          commit('setSuccess', sucData);
          commit('setNetworks', res.data.data);
          setTimeout(() => {
            sucData.state = false;
            sucData.msg = '';
            commit('setSuccess', sucData);
          }, 2000);
        })
        .catch(err => {
          console.log('Unauthorized request !!');
          let sucData = {
            state: true,
            succes: 'danger',
            msg: 'Unauthorized request !!',
          };
          commit('setLoader', false);
          commit('setSuccess', sucData);
          setTimeout(() => {
            sucData.state = false;
            sucData.msg = '';
            commit('setSuccess', sucData);
          }, 2000);
        });
    },

    // Add network to the database but doesn't work correctly for now
    async addNetwork({ commit }, newNetwork) {
      console.log(newNetwork);
      axios
        .post('/network', newNetwork, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          },
        })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log('Something went wrong');
        });
    },
    //delete network
    async deleteNetwork() {},
    // Edit a network
    async editNetwork({ dispatch, commit }, editedNetwork) {
      commit('setLoader', true);
      axios
        .put(`network/${editedNetwork.id}`, editedNetwork, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          },
        })
        .then(async res => {
          await dispatch('getNetworks');
        })
        .catch(err => {
          console.log('Something went wrong');
        });
    },

    // for images
    async submitPost({ commit }, formData, headers) {
      const res = await axios.post('business/store/media/' + this.url + '/' + this.album, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      commit('setSubmitPost', res.data);
    },

    async setProfilePic({ commit }, image_id, name) {
      const res = await axios.post('business/album/edit/' + this.url + '/' + self.album_id, {
        name,
      });
      commit('setProfilePic', res.data);
    },

    async setCoverPic({ commit }, image_id, name) {
      const res = await axios.post('business/make/coverpic/' + this.url + '/' + image_id, {
        name,
      });
      commit('setCoverPic', res.data);
    },

    async deleteImage({ commit }, image_id, name) {
      const res = await axios.post('business/delete/media/' + this.url + '/' + image_id, {
        name,
      });
      commit('deleteImage', res.data);
    },

    async downloadPic({ commit }, image_id) {
      const res = await axios.get('business/download/media/' + this.url + '/' + image_id);
      commit('downloadPic', res.data);

      console.log('Something went wrong !!');
      let sucData = {
        state: true,
        succes: 'danger',
        msg: 'Something went wrong !!',
      };
      commit('setLoader', false);
      commit('setSuccess', sucData);
    },

    // Getting the notifications
    async getNotifications({ dispatch, commit }) {
      commit('setLoader', true);

      await axios
        .get('notification')
        .then(res => {
          commit('setLoader', false);
          commit('setSuccess', true);
          commit('setNotifications', res.data.data);
          setTimeout(() => {
            commit('setSuccess', false);
          }, 2000);
        })
        .catch(err => {
          commit('setLoader', false);
          console.log('Unauthorized request !!');
        });
    },

    // Sending a read request
    async readNotifiactions({ dispatch, commit }, payload) {
      let items = {
        ids: [],
      };

      payload.forEach(element => {
        let objId = {
          id: null,
        };
        objId.id = element.id;
        items.ids.push(objId);
      });
      await axios
        .post('notification/mark-read', items)
        .then(() => {
          dispatch('getNotifications');
        })
        .catch(err => [console.log(err)]);
    },

    // Delete All Notifications
    async deleteNotifications({ dispatch, commit }, payload) {
      let items = {
        ids: [],
      };

      payload.forEach(element => {
        let objId = {
          id: null,
        };
        objId.id = element;
        items.ids.push(objId);
      });
      await axios.post('notification/deleteAll', items).then(() => {
        dispatch('getNotifications');
      });
    },
    // delete a single notification
    delete({ dispatch }, id) {
      axios.delete(`notification/${id}`).then(() => {
        dispatch('getNotifications');
      });
    },

    //Get pending posts from database
    async getPendingPost({ commit }) {
      const res = await axios.get('');

      commit('getPosts', res.data);
    },

    // Approve pending post
    async approvePost({ commit }, post) {
      const res = await axios.post('/api/v1/business/post-approve', post);

      commit('Approve', res.data);
    },

    //disapprove pending post
    async disapprovePost({ commit }, post) {
      const res = await axios.post('', post);

      commit('Disapprove', res.data);
    },

    //Getting all business following
    async allFollowing({ commit }) {
      const res = await axios.get('/community/business-following');

      commit('Following', res.data);
    },

    //Getting all business followers
    async allFollowers({ commit }) {
      const res = await axios.get('/community/business-follower');

      commit('Followers', res.data);
    },

    //Getting business people following
    async peopleFollowing({ commit }) {
      const res = await axios.get('/api/v1/community/people-following');

      commit('ppleFollowing', res.data);
    },

    //Getting business people following
    async peopleFollowers({ commit }) {
      const res = await axios.get('/api/v1/community/people-follower');

      commit('ppleFollowers', res.data);
    },
  },
};
