
// import './pusher-notification';
import { initRedis } from '@/redis-notification'

// import * as firebase from 'firebase/app';
// import 'firebase/messaging';

import { mapGetters, mapActions, mapMutations } from "vuex";


export const FireBase = {
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
      console.log("call echo firebase")
      // try {
      //   firebase.messaging().onMessage((payload) => {
      //     // debugger
      //     this.currentMessage = payload;
      //     console.log(this.currentMessage);
      //     let message;
      //     message = payload.data.username + ':\n\n' + payload.data.message;
      //     this.setNotificationBoxForm(payload.data.shipmentWallNumber, payload.data.username, payload.data.message);
      //     console.log(message);
      //   });
      // } catch (e) {
      //   console.log(e);
      // }
    },

    setNotificationBoxForm(title, from, subject) {
      this.title = title;
      this.from = from;
      this.subject = subject;

      const message = `<span><b>${this.from}</b></span><br>${this.subject}`;
    },
  },

  created() {
    console.info('create notification info');
  },
}

export const Pusher = {

  methods: {
    ...mapMutations({
      newNotificationBusiness: "notification/NEW_BUSINESS_NOTIFICATION",
      newNotificationProfile: "notification/NEW_PROFILE_NOTIFICATION",
      newNotificationNetwork: "notification/NEW_NETWORK_NOTIFICATION",
    }),

    pusher() {
      // Network notification
      window.Echo.channel('network-11-5')
        .listen("NetworkNotificationEvent", payload => console.log(payload))

      // Business notification
      window.Echo.channel('network-11-5')
        .listen("NetworkNotificationEvent", payload => this.newNotificationBusiness(payload))
    }
  },

  created() {
    console.log("call echo pusher")
    this.pusher()
  }
}

export const Redis = {

  data: () => ({
    strategy: null,
  }),

  computed: {
    ...mapGetters({
      profile: 'auth/profilConnected',
      token: 'auth/getAuthToken'
    })
  },

  watch: {
    '$store.state.auth.profilConnected': function () {
      this.updateEventListener(this.$store.state.auth.profilConnected.user_type)
    }
  },

  methods: {
    ...mapMutations({
      newNotificationBusiness: "notification/NEW_BUSINESS_NOTIFICATION",
      newNotificationProfile: "notification/NEW_PROFILE_NOTIFICATION",
      newNotificationNetwork: "notification/NEW_NETWORK_NOTIFICATION",
      auth: "auth/profilConnected"
    }),

    async getAuth() {
      const type = ([
        'NetworkEditors',
        'networks',
        "Membar Network Follower",
        "memberNetwork",].includes(this.$route.name)) ? this.$route.params.id : null
      const response = await this.$repository.share.WhoIsConnect({ networkId: type, type });

      if (response.access) this.auth(response.data);
    },

    initBusinessNotification: async function () {
      const response = this.$repository.notification.business()
      if (response.status)
        this.newNotificationBusiness({ init: true, data: response.data })
    },

    listenBusinessEvent() {
      initRedis(this.token)
      const $event = `business-channel${this.profile.id}`
      window.Redis.private($event)
        .listen(".BusinessNotificationEvent", payload => {
          console.log(payload)
          this.newNotificationBusiness({ init: false, data: payload.data })
        })
    },

    listenProfileEvent() {
      initRedis(this.token)
      const $event = `user.${this.profile.id}`;

      window.Redis.private($event)
        .listen(".UserNotification", payload => {
          this.newNotificationProfile({ init: false, data: payload.notification })
        })
    },

    listenNetworkeEvent() {
      initRedis(this.token)
      const $event = `user.${this.profile.id}`;

      window.Redis.private($event)
        .listen(".NetworkNotification", payload => {
          this.newNotificationNetwork({ init: false, data: payload.notification })
        })
    },

    updateEventListener(type) {
      try {
        this.strategy[type]()
      } catch (error) {
        console.error(new Error(error))
      }
    },

    init: async function () {
      if (this.profile) {
        await this.getAuth()
        this.updateEventListener(this.profile.user_type)
      }
    }
  },


  created() {
    this.strategy = {
      user: () => this.listenProfileEvent(),
      business: () => this.listenBusinessEvent(),
      network: () => this.listenNetworkeEvent(),
    }
    // this.init()
  }
}

export const FirebaseNotification = {
  methods: {
    notified() {
      // try {
      //   firebase
      //     .messaging()
      //     .requestPermission()
      //     .then(() => {
      //       console.log('Notification permission granted');
      //       return firebase
      //         .messaging()
      //         .getToken()
      //         .then((token) => {
      //           console.info(token);
      //           // this.$repository.post.SendToken(token)
      //           return true;
      //         })
      //         .then(() => this.receiveMessage())
      //         .catch((error) => console.error(error));
      //     })
      //     .catch((error) => console.error(error));
      // } catch (error) {
      //   console.log(error);
      // }
    }
  },

  created() {
    console.log("call laravel firebase")
    this.notified()
  }
}