import Echo from 'laravel-echo';

window.io = require('socket.io-client');
let token = '';
try {
  token = JSON.parse(localStorage.getItem('user')).accessToken;
} catch (error) {
  console.log(error);
}

window.Redis = new Echo({
  broadcaster: 'socket.io',
  host: 'https://da4c-154-72-150-84.ngrok.io',
  auth: {
    header: {
      authorization: `Bearer ${token}`,
    },
  },
});
