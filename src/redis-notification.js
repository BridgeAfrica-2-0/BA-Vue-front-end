import Echo from "laravel-echo";

window.io = require('socket.io-client')
let token = JSON.parse(localStorage.getItem("user")).accessToken
console.log("--------------------")
console.log("accessToken", token)
console.log("--------------------")
window.Redis = new Echo({
  broadcaster: "socket.io",
  host: "https://edcd-154-72-150-109.ngrok.io",
  auth:{
    headers:{ 
      Authorization: `Bearer ${token}`
    }
  }
});
console.log("window.Redis");
console.log(window.Redis);

