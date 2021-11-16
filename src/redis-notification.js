import Echo from 'laravel-echo';
window.io = require('socket.io-client')

export const initRedis = (token) => {
  console.log("Init redis")
  window.Redis = new Echo({
    broadcaster: 'socket.io',
    host: 'https://28fa-154-72-150-64.ngrok.io',
    auth: {
      headers: {
        Authorization: token,
      },
    },
  });
}
