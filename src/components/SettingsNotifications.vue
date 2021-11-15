<template>
  <div class="settings-notifications">
    <!-- HEARDER -->

    <div class="d-flex justify-content-between align-items-end mb-4">
      <b-form-checkbox
        v-model="selectAll"
        class="cursor-pointer"
        aria-describedby="notifs"
        aria-controls="notifs"
        @change="toggleAll"
      >
        Select All
      </b-form-checkbox>
      <div>
        <b-button class="btn-mark-as cursor-pointer mr-2" @click="handleMarkAsRead" variant="primary">
          <b-spinner v-if="isMarkAsRead" small></b-spinner>
          Mark as Read</b-button
        >
        <b-button class="btn-mark-as cursor-pointer" @click="handleDelete" variant="outline-primary">
          <b-spinner v-if="isDelete" small></b-spinner>
          Delete</b-button
        >
      </div>
    </div>
    <!-- NOTIFICATIONS CONTENT -->
    <div id="notifs">
      <!-- NOTIFICATIONS ITEMS -->
      <div class="notif-item my-2" v-for="(notif, $index) in allNotifs" :key="$index">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <div class="d-flex justify-content-start align-items-center">
              <b-form-checkbox
                class="notif-item-checkbox"
                :name="`notif-item-${notif.id}`"
                :value="{ id: notif.id, status: 'check' }"
                :unchecked-value="{ id: notif.id, status: 'uncheck' }"
                @change="selectNotif"
              >
              </b-form-checkbox>
              <!-- AVATAR NOTIF -->
              <b-avatar v-if="!notif.avatar" variant="primary"></b-avatar>
              <b-avatar v-else :src="notif.avatar"></b-avatar>
              <div class="ml-2">
                <p class="mb-0 font-weight-bold">{{ notif.name }}</p>
                <p class="mb-0 text-secondary">{{ formatDate(notif.created_at) }}</p>
              </div>
            </div>
            <p class="mb-0">
              {{
                notif.notification_text.length > 226
                  ? `${notif.notification_text.slice(0, 226)}...`
                  : notif.notification_text
              }}
              <!-- {{
                notif.notification_text
              }} -->
            </p>
          </div>
          <b-badge v-if="!notif.mark_as_read" pill variant="primary"><span class="text-primary">.</span></b-badge>
        </div>

        <hr />
      </div>
    </div>
    <infinite-loading @infinite="infiniteHandler">
      <div slot="no-more">No More Notifications</div>
      <div slot="no-results">
        <b-alert show variant="secondary">No Notifications</b-alert>
      </div>
    </infinite-loading>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import moment from 'moment';
export default {
  name: 'SettingsNotifications',
  data() {
    return {
      selectAll: false,
      selectItem: false,
      selectedNotif: [],
      message: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum expedita ducimus eaque dolor vero dolorem odio
          veniam adipisci tempora a, accusantium sunt temporibus, quidem vitae dit reiciendis. Corrupti!`,
      page: 1,
      // allNotifs: [],
      isMarkAsRead: false,
      isDelete: false,
    };
  },
  computed: {
    haveNotifications() {
      let numNotifs = 0;
      if (this.allNotifs) {
        numNotifs = this.allNotifs.length;
      }
      return !(numNotifs > 0);
    },
    checkedNotif() {
      return this.notifs.map(notif => {
        return {
          id: notif.id,
          status: this.selectedNotif.includes(notif.id) ? 'check' : 'uncheck',
        };
      });
    },
    allCheckBox() {
      return document.querySelectorAll('.notif-item-checkbox input');
    },
    ...mapGetters({
      allNotifs: 'notification/NEW_PROFILE_NOTIFICATION',
    }),
  },
  methods: {
    toggleAll(checked) {
      if (!checked) {
        this.selectedNotif = [];
        console.log('De selected all Notifs');
      } else {
        this.selectedNotif = this.allNotifs.map(notif => notif.id);
        console.log('All notifs', this.selectNotif);
      }
      console.log('Selected All', checked);
      console.log(this.allCheckBox);
      this.setCheckMode(checked);
    },
    setCheckMode(status) {
      if (status) {
        for (const index in this.allCheckBox) {
          this.allCheckBox[index].checked = true;
          if (index === 9) break;
        }
      } else {
        for (const index in this.allCheckBox) {
          this.allCheckBox[index].checked = false;
        }
      }
    },
    selectNotif(value) {
      if (value.status === 'check') {
        this.selectedNotif.push(value.id);
      } else {
        const index = this.selectedNotif.indexOf(value.id);
        if (index > -1) {
          this.selectedNotif.splice(index, 1);
          console.log(`Delete Notif ${index}`, this.selectedNotif);
        }
      }
      console.log('Selected Notifs', this.selectedNotif);
    },
    handleMarkAsRead() {
      if (this.selectedNotif.length > 0) {
        this.isMarkAsRead = true;
        console.log('Can delete this notif', this.selectedNotif.toString());
        axios
          .post('user/notifications/mark-read', {
            notificationId: this.selectedNotif.toString(),
          })
          .then(response => {
            console.log(response.data);
            this.$store.commit('notification/MARK_PROFILE_NOTIFICATION', response.data.data);
            // this.markNotifAsRead(response.data.data);
            this.selectedNotif = [];
            this.setCheckMode(false);
          })
          .finally(() => {
            this.isMarkAsRead = false;
          });
        return;
      }
      console.log('No things to Mark as Read');
    },
    handleDelete() {
      if (this.selectedNotif.length > 0) {
        this.isDelete = true;
        console.log('Can delete this notif', this.selectedNotif.toString());
        axios
          .post('user/notifications/delete', {
            notificationId: this.selectedNotif.toString(),
          })
          .then(response => {
            console.log(response.data);
            this.$store.commit('notification/DELETE_PROFILE_NOTIFICATION', response.data.data);
            this.selectedNotif = [];
          })
          .finally(() => {
            this.isDelete = false;
          });
        return;
      }
      console.log('No things to Delete');
    },
    markNotifAsRead(payload) {
      //state.profile = state.profile.filter(notif => !payload.includes(notif.id));
      this.allNotifs = this.allNotifs.map(notif => {
        if (payload.includes(notif.id)) {
          notif.mark_as_read = 1;
        }
        return notif;
      });
    },
    infiniteHandler($state) {
      axios
        .get('user/notifications', {
          params: {
            page: this.page,
          },
        })
        .then(({ data }) => {
          console.log(data);
          if (data.data.length) {
            this.page += 1;
            if (this.page === 1) {
              this.$store.commit('notification/NEW_PROFILE_NOTIFICATION', { init: true, data: data.data });
            } else {
              this.$store.commit('notification/NEW_PROFILE_NOTIFICATION', { init: false, data: data.data });
            }
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch(error => {
          console.log(error);
          $state.complete();
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
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
.btn-mark-as {
  outline: none !important;
}
</style>
