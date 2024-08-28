import { initPusher } from "@/pusher-notification";
import { initRedis } from "@/redis-notification";
import { mapGetters, mapActions, mapMutations } from "vuex";

import { notification } from "@/helpers";

export const Pusher = {
  methods: {
    ...mapMutations({
      newNotificationBusiness: "notification/NEW_BUSINESS_NOTIFICATION",
      newNotificationProfile: "notification/NEW_PROFILE_NOTIFICATION",
      newNotificationNetwork: "notification/NEW_NETWORK_NOTIFICATION"
    }),

    pusher() {
      // Network notification
      window.Echo.channel("network-11-5").listen(
        "NetworkNotificationEvent",
        payload => console.log(payload)
      );

      // Business notification
      window.Echo.channel("network-11-5").listen(
        "NetworkNotificationEvent",
        payload => this.newNotificationBusiness(payload)
      );
    }
  },

  created() {
    this.pusher();
  }
};

export const Redis = {
  data: () => ({
    strategy: null,
    hasInitRedis: false
  }),

  computed: {
    ...mapGetters({
      profile: "auth/profilConnected",
      token: "auth/getAuthToken"
    })
  },

  watch: {
    "$store.state.auth.profilConnected": {
      deep: true,
      handler: function(newValue) {
        initRedis(this.$store.state.auth.user.accessToken);
        this.updateEventListener(
          this.$store.state.auth.profilConnected.user_type
        );
      }
    }
  },

  methods: {
    ...mapMutations({
      newNotificationBusiness: "notification/NEW_BUSINESS_NOTIFICATION",
      newNotificationProfile: "notification/NEW_PROFILE_NOTIFICATION",
      newNotificationNetwork: "notification/NEW_NETWORK_NOTIFICATION"
    }),

    listenBusinessEvent() {
      const $event = `business-channel.${this.profile.id}`;

      window.Redis.private($event).listen(
        ".BusinessNotificationEvent",
        payload => {
          this.newNotificationBusiness({ init: false, data: payload.data });
        }
      );
    },

    listenProfileEvent() {
      const $event = `user.${this.profile.id}`;
      window.Redis.private($event).listen(".UserNotification", payload => {
        const type = notification(payload.notification);

        this.$notify({
          text: `new notification for user: ${payload.notification.notification_text}`
        });

        this.newNotificationProfile({
          init: false,
          data: payload.notification
        });
      });
    },

    listenNetworkeEvent() {
      const $event = `network-channel.${this.profile.id}`;

      window.Redis.private($event).listen(".NetworkNotification", payload => {
        this.newNotificationNetwork({
          init: false,
          data: payload.notification
        });
      });
    },

    updateEventListener(type) {
      try {
        this.strategy[type]();
      } catch (error) {
        console.error(new Error(error));
      }
    },
    created() {
      initRedis(this.$store.state.auth.user.accessToken);

      this.strategy = {
        user: () => this.listenProfileEvent(),
        network: () => this.listenNetworkeEvent(),
        business: () => this.listenBusinessEvent()
      };

      this.listenProfileEvent();
      this.listenNetworkeEvent();
      this.listenBusinessEvent();
    }
  }
};
