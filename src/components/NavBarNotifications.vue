<template>
  <div class="popover-body">
    <p class="font-weight-bold">Notifications</p>
    <hr class="h-divider" />
    <div v-for="notif in allNotifs" :key="notif.id">
      <div class="d-inline-flex suggest-item flex-row align-items-center cursor-pointer">
        <div>
          <img src="@/assets/img/profile-pic.jpg" class="rounded-circle" alt="" width="30" height="30" />
        </div>
        <div class="d-flex flex-column ml-3">
          <div>
            <span class="font-weight-bold">{{ notif.name }}</span>
            {{
              notif.notification_text.length > 30
                ? `${notif.notification_text.slice(0, 30)}...`
                : notif.notification_text
            }}
          </div>
          <div class="small text-muted">{{ formatDate(notif.created_at) }}</div>
        </div>
        <span v-if="!notif.mark_as_read" class="text-badge-up"></span>
      </div>
      <hr class="h-divider" />
    </div>
    <a href="/settings" class="text-ored text-center"><u>See all Notifications</u></a>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
// import mapGetters from 'vuex';
export default {
  name: 'NavBarNotifications',
  data() {
    return {};
  },
  methods: {
    handleLoadNotif() {
      axios
        .get('user/notifications', {
          params: {
            page: 1,
          },
        })
        .then(({ data }) => {
          console.log('Nav bar notifs', data);
          this.allNotifs.push(...data.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    formatDate(date) {
      if (date)
        return moment(date)
          .startOf('hour')
          .fromNow();
      return;
    },
  },
  computed: {
    allNotifs() {
      console.log(this.$store.getters['notification/NEW_PROFILE_NOTIFICATION']);
      const notifs = this.$store.getters['notification/NEW_PROFILE_NOTIFICATION'].slice(0, 4);
      if (!notifs) {
        return [];
      }
      return notifs;
    },
  },
  // created() {
  //   console.log('nav bar notifications');
  //   this.handleLoadNotif();
  // },
};
</script>

<style scoped>
.bg-mark-read {
  background: #e75d181e !important;
}
.text-badge-up {
  height: 7px;
  width: 7px;
  border-radius: 50%;
  background: #e75c18;
}
</style>
