import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueGallerySlideshow from "vue-gallery-slideshow";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import vSelect from "vue-select";
import Vuex from "vuex";
import IconifyIcon from "@iconify/vue";
import homeIconData from "@iconify-icons/mdi-light/home";
import ReadMore from "vue-read-more";
import VueSocialauth from "vue-social-auth";
import firebase from "firebase";
Vue.use(Vuex);
Vue.use(VueAxios, axios);
Vue.use(ReadMore);
IconifyIcon.addIcon("home", homeIconData);
Vue.prototype.$axios = axios;

const firebaseConfig = {
  apiKey: "AIzaSyDu9rL6_YDSeTyU89tF8JcI9kWNR6617Fg",
  authDomain: "bridge-africa-api.firebaseapp.com",
  projectId: "bridge-africa-api",
  storageBucket: "bridge-africa-api.appspot.com",
  messagingSenderId: "50055115922",
  appId: "1:50055115922:web:81e9b59a354a0c6e9ee24b",
  measurementId: "G-9K2WHP9Y13",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging
  .requestPermission()
  .then(() => {
    return messaging.getToken();
  })
  .then((token) => {
    console.log(token);
  })
  .catch((err) => {
    console.log(err);
  });

Vue.use(VueSocialauth, {
  providers: {
    facebook: {
      clientId: "513850343026598",
      client_secret: "f126ad31262665d481b6080f7f5c645f",
      redirectUri: "http//:localhost:8080/login",
    },
  },
});

import VueMaterial from "vue-material";
//import 'vue-material/dist/vue-material.min.css'
//import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial);

import Lightbox from "@morioh/v-lightbox";
import * as VueGoogleMaps from "vue2-google-maps";

import VueSplide from "@splidejs/vue-splide";
Vue.use(VueSplide);
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

// global register
Vue.use(VueGallerySlideshow);
Vue.use(Lightbox);

// Configuring font awesome

library.add(fab);
library.add(fas);

Vue.component("fas-icon", FontAwesomeIcon);
Vue.component("fab-icon", FontAwesomeIcon);

import vueCountryRegionSelect from "vue-country-region-select";
Vue.use(vueCountryRegionSelect);

import VueFormWizard from "vue-form-wizard";

Vue.use(VueFormWizard);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vue-select/dist/vue-select.css";

import "@/assets/css/bootstrap.css";

import "@/assets/css/bootstrap.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAGZU6cqra18t1fhN1AbzRsEc_pgt7n2C8",
    libraries: "places",
  },
});

Vue.component("v-select", vSelect);

Vue.config.productionTip = false;

new Vue({
  router,
  store,

  created() {
    const userInfo = localStorage.getItem("user");
    if (userInfo) {
      const userData = JSON.parse(userInfo);
      this.$store.commit("auth/setUserData", userData);
    }
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          this.$store.dispatch("logout");
        }
        return Promise.reject(error);
      }
    );
  },

  render: (h) => h(App),
}).$mount("#app");
