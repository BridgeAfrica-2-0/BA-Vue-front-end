import axios from "axios";

export default {
  namespaced: true,
  state: {
    networks: [],
    loader: false,
    success: false,
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
          total_posts: 0
        },

        business_about: {
          biography: {
            title: "About Mapoure Agrobusiness",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n" +
              "              Asperiores temporibus, rerum iste id obcaecati quae odit accusamus\n" +
              "              reprehenderit, ipsa nam laudantium pariatur. Harum, soluta. Nam\n" +
              "              accusantium hic numquam architecto debitis. Lorem ipsum dolor sit\n" +
              "              amet consectetur adipisicing elit. Asperiores temporibus, rerum\n" +
              "              iste id obcaecati quae odit accusamus reprehenderit, ipsa nam\n" +
              "              laudantium pariatur. Harum, soluta. Nam accusantium hic numquam\n" +
              "              architecto debitis. Asperiores temporibus, rerum iste id obcaecati\n" +
              "              architecto debitis. Asperiores temporibus, rerum iste id obcaecati\n" +
              "              architecto debitis. Asperiores temporibus, rerum iste id obcaecati\n" +
              "              architecto debitis. Asperiores temporibus, rerum iste id obcaecati\n" +
              "              architecto debitis. Asperiores temporibus, rerum iste id obcaecati\n" +
              "              quae odit accusamus reprehenderit, ipsa nam laudantium pariatur.\n" +
              "              quae odit accusamus reprehenderit, ipsa nam laudantium pariatur.\n" +
              "              Harum, soluta. Nam accusantium hic numquam architecto debitis."
          },
          address: {
            businessName: "Current or Last Organization",
            category: "Agriculture",
            keywords: "Agriculture",
            country: "Cameroun",
            city: "Yaounde",
            NeigbourHood: "Melen",
            phones: { phone_1: "+237656602212", phone_2: "+237677754814" },
            businessEmail: "info@businessname.com",
            businessHours: {
              open: "Always Open",
              dayOfWorks: [
                { day: "Monday", start: 1, end: 10, check: false },
                { day: "Tuesday", start: null, end: null, check: false },
                { day: "Wednesday", start: null, end: null, check: false },
                { day: "Thursday", start: null, end: null, check: false },
                { day: "Friday", start: null, end: null, check: false },
                { day: "Saturday", start: null, end: null, check: false },
                { day: "Sunday", start: null, end: null, check: false }
              ]
            }
          }
        },

        business_about1: {
          name: "Tierra Hermiston",
          logo_path: "http://localhost:8000/storage",
          category: "Hourse Marketing",
          keywords: null,
          language: null,
          location_description:
            "Tempore quo soluta voluptates quis. Doloremque autem minus ut nisi molestias maiores cum. Et assumenda velit expedita et et sint sed in.",
          website: null,
          community: 6,
          phone: null,
          email: null,
          business_open_hours: [
            {
              day: "monday",
              opening_time: "09:05:12",
              closing_time: "15:06:18"
            },
            {
              day: "tuesday",
              opening_time: "07:05:38",
              closing_time: "14:05:43"
            }
          ],
          region: null,
          address: null,
          city: null,
          country: null,
          lat: -56.200329,
          lng: -6.249487
        }
      },

     


      
    ]

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
    // sending success value
    getSuccess(state) {
      return state.success;
    }
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

    setImages(state, data){
   
      state.ownerPostImages=data;  

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
  console.log(payload, "load user Business About start +++++");
  let response_ = null;
  const id_Business = 47;
  await axios("business/info" +
      "/" +
      id_Business,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
       
      }
    }
  )
    .then(response => {
      console.log("load user Business About response (1) +++++++", response);
      if (response.status !== 200 && response.status !== 201) {
        throw "Error from the server";
      }
      return response.data;
    })
    .then(response => {
      console.log(
        "load user Business About response successsss +++",
        response
      );
      if (!response) {
        console.log("Error from the server+++++++");
        throw new Error("Error for loading Business About +++++");
      }
      context.commit("updateUserBusinessAbout", {
        businessAbout: response.data
      });
      response_ = response;
    })
    .catch(error => {
      console.log("error from the server or the browser", error);
    });
  return response_;
},








async updateUserBusinessAbout(context, payload) {
  console.log(payload, "update user Business About start +++++");
  let response_ = null;
  const id_Business = 47;
  await axios( "business/update" +
      "/" +
      id_Business,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
       
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
        openHours: payload.business_about.business_open_hours
      })
    }
  )
    .then(response => {
      console.log(
        "update user Business About response (1) +++++++",
        response
      );
      if (response.status !== 200 && response.status !== 201) {
        throw "Error From The Server";
      }
      return response.data;
    })
    .then(response => {
      console.log(
        "update user Business About response successsss (2) +++",
        response
      );
      if (!response) {
        console.log("Error THe Server++++++");
        throw new Error("Error For Updating Business About +++++");
      }
      context.commit("updateUserBusinessAbout", {
        businessAbout: payload.business_about
      });
      response_ = response;
    })
    .catch(error => {
      console.log("Error From the Server or Browser error(1)", error);
      throw error;
    });
  return response_;
},



 async loadUserBusinessInsight(context, payload) {
  console.log(payload);
  console.log("load user Business Insight start +++++");
  let response_ = null;
  let url = null;
  let config = {};
  if (payload !== null) {
    console.log("Payload does not null ++++++++++");
    url ="business/insights/"+payload.business_id +
      "?dateStarting=" +
      payload.startDate +
      "&dateClosing=" +
      payload.endDate;
    config = {
      method: "POST",
      headers: {
        Accept: "application/json",
      
      }
    };
  } else {
    console.log("Payload is null");
    url = 'business/insights';
    config = {
      method: "POST",
      headers: {
        Accept: "application/json",
      
      }
    };
  }
  await axios(url, config)
    .then(response => {
      console.log(
        "load user Business Insight response (1) +++++++",
        response
      );
      if (response.status !== 200 && response.status !== 201) {
        throw "Errors during processing by the server";
      }
      return response;
    })
    .then(response => {
      console.log(
        "load User Business Insight response successsss +++",
        response
      );
      if (!response) {
        console.log("Error From the server +++++++");
        throw new Error("Error for loading Business Insight +++++");
      }
      context.commit("updateUserBusinessInsights", {
        businessInsights: response.data
      });
      response_ = response;
    })
    .catch(error => {

      console.log({error: error});
      console.log("error from the server or the browser");
      console.log(error);
      context.commit("updateUserBusinessInsights", {
        businessInsights: null
      });
    });
  return response_;
},
     

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

    ownerPost({ commit }, busineeId) {
      return axios.get("business/show/post/" + busineeId).then(({ data }) => {
        commit("ownerPost", data.data);
        console.log(data);
      });
    },

    ownerPostImages({ commit }, busineeId) {
      return axios.get("business/show/images/" + busineeId).then(({ data }) => {
        commit("ownerPostImages", data.data);
        console.log(data);
      });
    },

    businessInfo({ commit }, busineeId) {
      return axios.get("business/info/" + busineeId).then(({ data }) => {
        commit("setBusinessInfo", data.data);
        console.log(data);
      });
    },

    CommunityBusiness({ commit }, businessId) {
      return axios
        .get("business/community/business/" + businessId)
        .then(({ data }) => {
          commit("setCommunityBusiness", data.data);
          console.log(data);
        });
    },

    CommunityPeople({ commit }, businessId) {
      return axios
        .get("business/community/people/" + businessId)
        .then(({ data }) => {
          commit("setCommunityPeople", data.data);
          console.log(data);
        });
    },

    businessCommunityTotal({ commit }, businessId) {
      return axios
        .get("business/community/total/" + businessId)
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
