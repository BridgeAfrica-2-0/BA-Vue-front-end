import Echo from "laravel-echo";

window.io = require("socket.io-client");

window.Redis = new Echo({
  broadcaster: "socket.io",
  host: "https://fd17-154-72-150-102.ngrok.io"
});
