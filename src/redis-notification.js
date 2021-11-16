import Echo from "laravel-echo";

const userInfo = localStorage.getItem('user');

window.io = require('socket.io-client')
window.Redis = new Echo({
  broadcaster: "socket.io",
  host: "https://3760-154-72-150-26.ngrok.io",
  auth:{
    header:{
      authorization: `Bearer ${userInfo.accessToken}`
    }
  }
});