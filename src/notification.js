// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//   broadcaster: 'pusher',
//   key: "22cdbfa66f6ef7bfe041",
//   cluster: "eu",
//   forceTLS: true
// });

import Vue from 'vue'
import VuePusher from 'vue-pusher'

Vue.use(VuePusher, {
  api_key: "22cdbfa66f6ef7bfe041",
  options: {
    cluster:  "eu",
    encrypted: true,
    authEndpoint: `${process.env.VUE_APP_API_URL}/api/broadcasting/auth`,
    auth: {
      headers: {
        Authorization: `Bearer ${store.state.auth.token}`
      }
    }
  }
})