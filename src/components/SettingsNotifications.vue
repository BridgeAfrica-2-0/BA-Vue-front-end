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
      <b-button class="btn-mark-as cursor-pointer" @click="handleMarkAsRead" variant="primary">Mark as Read</b-button>
    </div>
    <!-- NOTIFICATIONS CONTENT -->
    <div id="notifs">
      <!-- NOTIFICATIONS ITEMS -->
      <div class="notif-item my-2" v-for="(notif, index) in notifs" :key="index">
        <div class="d-flex justify-content-start align-items-center mb-2">
          <b-form-checkbox
            :name="`notif-item-${index}`"
            :value="{ id: notif.id, status: 'check' }"
            :unchecked-value="{ id: notif.id, status: 'uncheck' }"
            @change="selectNotif"
            class="cursor-pointer"
          >
          </b-form-checkbox>
          <b-avatar icon="people-fill" variant="primary"></b-avatar>
          <div class="ml-2">
            <p class="mb-0 font-weight-bold">{{ notif.user_name }}</p>
            <p class="mb-0 text-secondary">{{ notif.created_at }}</p>
          </div>
        </div>
        <p>
          {{ notif.message.length > 226 ? `${notif.message.slice(0, 226)}...` : notif.message }}
        </p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsNotifications',
  data() {
    return {
      selectAll: false,
      selectItem: false,
      selectedNotif: [],
      message: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum expedita ducimus eaque dolor vero dolorem odio
          veniam adipisci tempora a, accusantium sunt temporibus, quidem vitae dit reiciendis. Corrupti!`,
      // notifs:[{id}]
      notifs: [
        {
          id: 1,
          message: 'Bonjour le monde',
          useravatar: '',
          user_name: 'User Name',
          created_at: '1h ago',
        },
        {
          id: 2,
          message: 'Bonjour le monde',
          useravatar: '',
          user_name: 'user Name',
          created_at: '1h ago',
        },
        {
          id: 3,
          message: 'Bonjour le monde',
          useravatar: '',
          user_name: 'User Name',
          created_at: '2h ago',
        },
        {
          id: 4,
          message: 'Bonjour le monde',
          useravatar: '',
          user_name: 'User Name',
          created_at: '1h ago',
        },
        {
          id: 5,
          message: 'Bonjour le monde',
          useravatar: '',
          user_name: 'User Name',
          created_at: '7h ago',
        },
      ],
    };
  },
  methods: {
    toggleAll(checked) {
      console.log('Selected All', checked);
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
      console.log(value);
      console.log('New notif', this.selectedNotif);
    },
    handleMarkAsRead() {
      if (this.selectedNotif.length > 0) {
        this.notifs = this.notifs.filter(notif => !this.selectedNotif.includes(notif.id));
        this.selectedNotif = [];
        console.log('Can delete this notif', this.selectedNotif.toString());
        return;
      }
      console.log('No things to Delete');
    },
    handleLoadNotificatifion(){
        //GET user/notifications/page=?
        //POST user/notifications/read
        //id:1,2,3,5
        //
    }
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
