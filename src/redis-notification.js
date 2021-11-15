import Echo from "laravel-echo";
import { getRootSchemeForRedis } from "@/helpers"



export const initRedis = (token) => {
  window.io = require('socket.io-client')
  window.Redis = new Echo({
    broadcaster: "socket.io",
    host: `${getRootSchemeForRedis()}:6601`,
    auth: {
      headers: {
        authorization: token
      }
    }
  });
}

