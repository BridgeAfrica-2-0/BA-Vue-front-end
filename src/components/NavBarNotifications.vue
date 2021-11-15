<template>
  <div class="popover-body">
    <p class="font-weight-bold">Notifications</p>
    <hr class="h-divider" />
    <div v-for="notif in allNotifs" :key="notif.id">
      <div class="d-inline-flex flex-row align-items-center suggest-item cursor-pointer">
        <div>
          <img src="@/assets/img/profile-pic.jpg" class="rounded-circle" alt="" width="30" height="30" />
        </div>
        <div class="d-flex flex-column ml-3">
          <div>
            <span class="font-weight-bold">{{ notif.name }}</span> {{ notif.notification_text }}
          </div>
          <div class="small text-muted">1m</div>
        </div>
      </div>
      <hr class="h-divider" />
    </div>
    <a href="/settings" class="text-ored"><u>See all Notifications</u></a>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
export default {
  name: 'NavBarNotifications',
  data() {
    return {
      allNotifs: [],
    };
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
  beforeMount() {
    console.log('nav bar notifications');
    this.handleLoadNotif();
  },
};
</script>

<style scoped></style>
