importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');

try {
  firebase.initializeApp({
    apiKey: "AIzaSyB_krMy3-xat2NXVUkvN-Ro442mQnCbGCs",
    authDomain: "vue-notification-fcm.firebaseapp.com",
    projectId: "vue-notification-fcm",
    storageBucket: "vue-notification-fcm.appspot.com",
    messagingSenderId: "518469069539",
    appId: "1:518469069539:web:25d044a5d9f18825a3f3d6"
  });

  const messaging = firebase.messaging()

  messaging.setBackgroundMessageHandler((payload) => {
    const title = payload.data.username
    const options = {
      body: payload.data.body,
      icon:'public/logo.png'
    }

    return this.registration.showNotification(title, options)
  });

} catch (error) {
  console.log(error)
}