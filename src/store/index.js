import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import businessOwner from "./businessOwner";
<<<<<<< HEAD
import profileOwner from "./profileOwner";
=======
import ProfileAndBusinessDetails from "./ProfileAndBusinessDetails";
import hotbusiness from "./hotbusiness";
import networkDetails from "./networkDetails";
import dashboardcommunity from "./dashboardcommunity";
>>>>>>> 7f397c25f587f4d66699556ebaf14c056ee5b227

import axios from "axios";
Vue.use(Vuex);
<<<<<<< HEAD
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

=======
 axios.defaults.baseURL = process.env.VUE_APP_API_URL;
>>>>>>> 7f397c25f587f4d66699556ebaf14c056ee5b227
export default new Vuex.Store({
  modules: {
    auth,
    networkDetails,
    dashboardcommunity,
    ProfileAndBusinessDetails,
    businessOwner,
<<<<<<< HEAD
    profileOwner,
  },
=======
    hotbusiness
  }
>>>>>>> 7f397c25f587f4d66699556ebaf14c056ee5b227
});
