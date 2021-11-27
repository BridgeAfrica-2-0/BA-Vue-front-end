import Echo from 'laravel-echo';
window.io = require('socket.io-client')

export const initRedis = (token) => {
  
  window.Redis = new Echo({
    broadcaster: 'socket.io',
    host: 'https://be58-154-72-167-26.ngrok.io',
    auth: {
      headers: {
        Authorization: token,
      },
    },
  });
}
