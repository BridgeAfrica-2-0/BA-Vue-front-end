
import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';


import axios from 'axios';
import VueAxios from 'vue-axios';
import VueGallerySlideshow from 'vue-gallery-slideshow';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import vSelect from 'vue-select';
import Vuex from 'vuex';
import IconifyIcon from '@iconify/vue';
import homeIconData from '@iconify-icons/mdi-light/home';
import ReadMore from 'vue-read-more';
import VueSocialauth from 'vue-social-auth';


import ShareNetwork from 'vue-social-sharing';
Vue.use(ShareNetwork);

import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
Vue.use('vue-bootstrap-typeahead', VueBootstrapTypeahead)

// don't comment that 2 line URGENT
import plugin from './http';
Vue.use(plugin);


Vue.use(require('vue-moment'));

IconifyIcon.addIcon('home', homeIconData);

Vue.use(Vuex);
Vue.use(VueAxios, axios);

import LoadScript from 'vue-plugin-load-script';
import InfiniteLoading from 'vue-infinite-loading';
import VueAnimateOnScroll from 'vue-animate-onscroll'
Vue.use(VueAnimateOnScroll)
Vue.use(InfiniteLoading, {
    /* options */
    slots: {
        noMore: '',
        error: "",
        noResults: "",
    },
});
Vue.use(LoadScript);

Vue.use(ReadMore);
Vue.prototype.$axios = axios;

// import Notifications from 'vue-notification'
// Vue.use(Notifications)

// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
//   measurementId: process.env.MEARSUREMENT_ID,
// };

// firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();

// messaging
//   .requestPermission()
//   .then(() => {
//     return messaging.getToken();
//   })
//   .then((token) => {
//     console.log(token);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

Vue.use(VueSocialauth, {
    providers: {
        facebook: {
            clientId: process.env.VUE_APP_FACEBOOK_CLIENT_ID,
            client_secret: process.env.VUE_APP_FACEBOOK_CLIENT_SECRETE,
            redirectUri: process.env.VUE_APP_FACEBOOK_RETURN_URL,
        },
        google: {
            clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID,
            client_secret: process.env.VUE_APP_GOOGLE_CLIENT_SECRETE,
            redirectUri: process.env.VUE_APP_GOOGLE_RETURN_URL,
        },
    },
});

import FlashMessage from '@smartweb/vue-flash-message';
Vue.use(FlashMessage);

import VueMaterial from 'vue-material';

//import 'vue-material/dist/vue-material.min.css'
//import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial);

import Lightbox from '@morioh/v-lightbox';
import * as VueGoogleMaps from 'gmap-vue';


import VueSplide from "@splidejs/vue-splide";
Vue.use(VueSplide);
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

// global register
Vue.use(VueGallerySlideshow);
Vue.use(Lightbox);

// Configuring font awesome

library.add(fab);
library.add(fas);

Vue.component('fas-icon', FontAwesomeIcon);
Vue.component('fab-icon', FontAwesomeIcon);

import vueCountryRegionSelect from 'vue-country-region-select';
Vue.use(vueCountryRegionSelect);

import VueFormWizard from 'vue-form-wizard';

Vue.use(VueFormWizard);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-select/dist/vue-select.css';

import '@/assets/css/bootstrap.css';

import '@/assets/css/bootstrap.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// import InfiniteLoading from "vue-infinite-loading";

// Vue.use(InfiniteLoading, {
//     options 
// });

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAGZU6cqra18t1fhN1AbzRsEc_pgt7n2C8',
        libraries: 'places',
    },
    autobindAllEvents: false,
    installComponents: true,
});

import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(VueLoading);

import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

import VueAgile from 'vue-agile';


Vue.use(VueAgile);


import TextareaAutosize from 'vue-textarea-autosize'
Vue.use(TextareaAutosize)


import CoolLightBox from 'vue-cool-lightbox';
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';

Vue.use(CoolLightBox);

Vue.component('v-select', vSelect);

import i18n from './i18n';

import VueEasyLightbox from 'vue-easy-lightbox';

// Method 1. via Vue.use
Vue.use(VueEasyLightbox);
Vue.config.productionTip = false;

var user = null;


new Vue({
    router,
    store,
    i18n,
    created() {
        const userInfo = localStorage.getItem('user');
        i18n.locale = localStorage.getItem('lang');


        console.log(i18n.locale);

        if (userInfo) {
            const userData = JSON.parse(userInfo);
            user = userData;
            this.$store.commit('auth/setUserData', userData);
        }
        axios.interceptors.response.use(
            response => response,
            error => {
                if (error.response) {
                    if (error.response.status === 401) {
                        this.$store.dispatch('auth/logout');
                        console.log('error has ocurred', error);


                    }
                }
                return Promise.reject(error);
            },
        );

        axios.interceptors.request.use(function(config) {
            if (user != null) {
                config.headers.Authorization = `Bearer ${user.accessToken}`;
            }

            // config.headers.common['Language'] = i18n.locale;
            config.headers.common['Language'] = "en";

            return config;
        });
    },
    render: h => h(App),
}).$mount('#app');