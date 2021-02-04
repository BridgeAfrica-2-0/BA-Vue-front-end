import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "@morioh/v-lightbox/dist/lightbox.css";

import Lightbox from "@morioh/v-lightbox";

// global register
Vue.use(Lightbox);

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

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
