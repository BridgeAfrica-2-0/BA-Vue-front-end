<template>
  <notifications group="notification" />
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/messaging';
export default {
  name: 'NotificationBox',
  components: {},
  data() {
    return {
      title: '',
      from: '',
      subject: '',
      userimg: '',
      currentMessage: '',
    };
  },

  methods: {
    receiveMessage() {
      try {
        firebase.messaging().onMessage((payload) => {
          // debugger
          this.currentMessage = payload;
          console.log(this.currentMessage);
          let message;
          message = payload.data.username + ':\n\n' + payload.data.message;
          this.setNotificationBoxForm(payload.data.shipmentWallNumber, payload.data.username, payload.data.message);
          console.log(message);
        });
      } catch (e) {
        console.log(e);
      }
    },

    setNotificationBoxForm(title, from, subject) {
      this.title = title;
      this.from = from;
      this.subject = subject;

      const message = `<span><b>${this.from}</b></span><br>${this.subject}`;

      this.$notify({
        group: 'notification',
        type: 'success',
        title: this.title,
        text: message,
        duration: 5000,
      });
    },
  },

  created() {
    console.info('create notification info');
    this.receiveMessage();
  },
};
</script>

<style>
.notification-box {
  display: flex;
  position: absolute;
  right: 5px;
  bottom: 10px;
  width: 30%;
  height: 100px;
  background-color: #fff;
  z-index: 999;
}
#notification-close {
  position: absolute;
  color: #777;
  font: 14px;
  right: 5px;
  text-decoration: none;
  text-shadow: 0 1px 0 #fff;
  top: 2px;
  z-index: 10;
  cursor: pointer;
}

.notification-data {
  margin: 0 20px;
}
.notification-data p {
  margin: 10px 0;
}
.notification-notice p {
  font-size: 14px;
  font-weight: 400;
}
.notification-title p {
  font-size: 18px;
  font-weight: bold;
  line-height: 18px;
}
.notification-time small {
  font-size: 12px;
}

.notification-wall-number small {
  font-size: 8px;
}
img {
  width: 30px;
}
</style>