import Echo from "laravel-echo";
import { getRootSchemeForRedis } from "@/helpers"

import store from "@/store"

console.log(store.getters)

window.io = require('socket.io-client')
window.Redis = new Echo({
  broadcaster: "socket.io",
  host: `${getRootSchemeForRedis()}:6601`,
  auth: {
    headers: {
      authorization: 'Bearer my-token'
    }
  }
});
