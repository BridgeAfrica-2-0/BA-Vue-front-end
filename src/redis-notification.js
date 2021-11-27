import Echo from 'laravel-echo';

window.io = require('socket.io-client')

export const initRedis = (token) => {
    window.Redis = new Echo({
      broadcaster: 'socket.io',
      host: 'https://test.maxinemoffett.com',
      auth: {
        headers: {
          Authorization: token,
        },
      },
    });
    console.log("window.Redis");
    console.log(window.Redis);
  }


// let auth = JSON.parse(localStorage.getItem("user"))
// console.log("--------------------")
// console.log("accessToken", auth)
// console.log("--------------------")
//     window.Redis = new Echo({
//       broadcaster: "socket.io",
//       host: "https://test.maxinemoffett.com",
//       auth:{
//         headers:{ 
//           Authorization: `Bearer ${auth ? auth.accessToken : null}`
//         }
//       }
//     });
// console.log("window.Redis");
// console.log(window.Redis);


