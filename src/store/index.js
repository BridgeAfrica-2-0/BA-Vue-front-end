import Vue from "vue";
import Vuex from "vuex";
import auth from './auth';

import axios from 'axios';


Vue.use(Vuex);


axios.defaults.baseURL ='https://2418e0fd9b56.ngrok.io/api/v1'

export default new Vuex.Store({
  modules: {
    auth
  }
})
