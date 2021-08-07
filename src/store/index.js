import Vue from "vue";
import Vuex from "vuex";
import auth from './auth';

import axios from 'axios';


Vue.use(Vuex);


axios.defaults.baseURL ='https://9aeb4781f48a.ngrok.io/api/v1/'


export default new Vuex.Store({
  modules: {
    auth
  }
})
