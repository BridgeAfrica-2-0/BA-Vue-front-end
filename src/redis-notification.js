
import Echo from "laravel-echo";

window.io = require("socket.io-client");


  window.Redis = new Echo({
    broadcaster: "socket.io",
    host: "http://ed41-129-0-205-95.ngrok.io"
  });
