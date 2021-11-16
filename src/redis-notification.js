import Echo from 'laravel-echo';

window.io = require('socket.io-client')
window.Redis = new Echo({
  broadcaster: 'socket.io',
  host: 'https://3770-154-72-150-64.ngrok.io',
  auth: {
    header: {
      authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).accessToken}`,
    },
  },
});
