import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "@morioh/v-lightbox/dist/lightbox.css";
import VueGallerySlideshow from "vue-gallery-slideshow";
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import vSelect from 'vue-select';


import Vuex from 'vuex';

Vue.use(Vuex);



import VueMaterial from 'vue-material'
//import 'vue-material/dist/vue-material.min.css'
//import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)



import Lightbox from "@morioh/v-lightbox";
import * as VueGoogleMaps from 'vue2-google-maps';

import VueSplide from '@splidejs/vue-splide';
Vue.use( VueSplide );
import '@splidejs/splide/dist/css/themes/splide-default.min.css';



// global register
Vue.use(VueGallerySlideshow);
Vue.use(Lightbox);

// Configuring font awesome
library.add(fas);
Vue.component('fas-icon', FontAwesomeIcon);



import vueCountryRegionSelect from 'vue-country-region-select';
Vue.use(vueCountryRegionSelect);



import VueFormWizard from 'vue-form-wizard'

Vue.use(VueFormWizard)



// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import 'vue-select/dist/vue-select.css';

import "@/assets/css/bootstrap.css";

import "@/assets/css/bootstrap.css";


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);






Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAGZU6cqra18t1fhN1AbzRsEc_pgt7n2C8',
    libraries: 'places',
  }
});

Vue.component('v-select', vSelect);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// router.befo reEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.needsAuth)) {
//     if (!store.state.login) {
//       next({
//         name: "Login"
//       });
//     } else {
//       next({
//         name: "Create"
//       });
//     }
//   } else {
//     next();
//   }
// });
