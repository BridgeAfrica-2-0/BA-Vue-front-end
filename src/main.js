import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "@morioh/v-lightbox/dist/lightbox.css";
import VueGallerySlideshow from "vue-gallery-slideshow";

import vSelect from 'vue-select';



import Lightbox from "@morioh/v-lightbox";
import * as VueGoogleMaps from 'vue2-google-maps'

// global register
Vue.use(VueGallerySlideshow);
Vue.use(Lightbox);

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import 'vue-select/dist/vue-select.css';


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
