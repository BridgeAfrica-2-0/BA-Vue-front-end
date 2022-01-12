import Echo from 'laravel-echo';

window.io = require('socket.io-client')

export const initRedis = (token) => {

  window.Redis = new Echo({
    broadcaster: 'socket.io',
    host: 'http://maxinemoffett.com:6001',
    auth: {
      headers: {
        Authorization: token,
      },
    },
  });
}

