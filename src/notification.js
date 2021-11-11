import Echo from 'laravel-echo';
window.Pusher = require('pusher-js');
window.Echo = new Echo({
  broadcaster: 'pusher',
  key: "22cdbfa66f6ef7bfe041",
  cluster: "eu",
  forceTLS: true
});

