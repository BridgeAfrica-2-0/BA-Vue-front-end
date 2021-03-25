import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "@morioh/v-lightbox/dist/lightbox.css";
import VueGallerySlideshow from "vue-gallery-slideshow";

import VueGoogleMap from 'vuejs-google-maps'
import 'vuejs-google-maps/dist/vuejs-google-maps.css'

import Lightbox from "@morioh/v-lightbox";
import * as VueGoogleMaps from 'vue2-google-maps'

// global register
Vue.use(VueGallerySlideshow);
Vue.use(Lightbox);

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);




Vue.use(VueGoogleMap, {
  load: {
      apiKey: 'your-api-key',
      libraries: ['places']
  }
});



Vue.use(VueGoogleMaps, {
  load: {
    key: '774df247-de9f-45db-93ee-be42120bf04f',
    libraries: 'places',
  }
});


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
