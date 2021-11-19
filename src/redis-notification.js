import Echo from 'laravel-echo';

window.io = require('socket.io-client')
let auth = JSON.parse(localStorage.getItem("user"))
console.log("--------------------")
console.log("accessToken", auth)
console.log("--------------------")
window.Redis = new Echo({
  broadcaster: "socket.io",
  host: "https://2734-154-72-150-101.ngrok.io",
  auth:{
    headers:{ 
      Authorization: `Bearer ${auth ? auth.accessToken : null}`
    }
  }
});
console.log("window.Redis");
console.log(window.Redis);

