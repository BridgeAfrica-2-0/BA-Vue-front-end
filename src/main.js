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
import BtnCtaMessage from "@/components/messagesCTA/Btn-cta-message";

Vue.component('BtnCtaMessage', BtnCtaMessage);
Vue.use(ShareNetwork);

import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'

Vue.use('vue-bootstrap-typeahead', VueBootstrapTypeahead)

// don't comment that 2 line URGENT
import plugin from './http';
Vue.use(plugin);
//vue confirm dialog  
import VueConfirmDialog from 'vue-confirm-dialog'

Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)


/* import VueMeta from 'vue-meta'
Vue.use(VueMeta) */

import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)
Vue.use(require('vue-moment'));
IconifyIcon.addIcon('home', homeIconData);

Vue.use(Vuex);
Vue.use(VueAxios, axios);

import LoadScript from 'vue-plugin-load-script';
import InfiniteLoading from 'vue-infinite-loading';
import VueAnimateOnScroll from 'vue-animate-onscroll'
import Notifications from 'vue-notification'

Vue.use(Notifications)

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
    methods:{
        setDefaultLanguage(){

            let lang = localStorage.getItem('lang')

            if (lang && (lang == 'fr' || lang == 'en')){
                this.$i18n.locale = lang
                return lang
            }

            const browserLanguage = window.navigator.userLanguage || window.navigator.language;

            this.$i18n.locale =  "fr-FR" == browserLanguage || "fr" == browserLanguage || "FR" == browserLanguage  ? 'fr' : 'en'

            return this.$i18n.locale
            
        }
    },
    
    created() {
        
        let userInfo = localStorage.getItem('user');

        
        let lang = this.setDefaultLanguage()

        if (userInfo) {
            let userData = JSON.parse(userInfo);
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

        axios.interceptors.request.use(function (config) {
            if (user != null) {
             //   config.headers.Authorization = `Bearer ${user.accessToken}`;
            }

            config.headers.common['Language'] = localStorage.getItem('lang') ? localStorage.getItem('lang')  : 'en' ;
            // config.headers.common['Language'] = i18n.fallbackLocale;

            return config;
        });
    },
    render: h => h(App),
}).$mount('#app');