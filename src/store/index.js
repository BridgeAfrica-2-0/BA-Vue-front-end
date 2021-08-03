import Vue from "vue";
import Vuex from "vuex";
import auth from './auth';

import axios from 'axios';


Vue.use(Vuex);


axios.defaults.baseURL ='https://ece7cd35144a.ngrok.io/api/v1'

export default new Vuex.Store({
  modules: {
    auth
  }
})
