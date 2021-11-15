import Echo from "laravel-echo";

window.io = require('socket.io-client')

window.Redis = new Echo({
  broadcaster: "socket.io",
  host: "https://7a1e-154-72-167-102.ngrok.io"
});
