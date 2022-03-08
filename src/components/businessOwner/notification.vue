<template>
  <div class="container" style="">
    <div class="container">
      <b-row>
        <b-col md="4">
          <div class="b-bottom f-left">
            <b-form-checkbox
              v-model="selectAll"
              :indeterminate="indeterminate"
              name="checkbox-1"
              @change="select"
              class="m-left-top username"
            >{{ $t("general.Select_All") }}</b-form-checkbox>
          </div>
        </b-col>
        <b-col md="8">
          <b-row>
            <b-col>
              <b-button 
                variant="primary" 
                @click="readAll(selected)" 
                :disabled="indeterminate ? false : true"
                class="a-button-l duration"
              >{{ $t('network.Mark_as_Read') }}</b-button>
            </b-col>
            <b-col>
              <b-button 
              variant="outline-primary"
              @click="deleteAll(selected)" 
              :disabled="indeterminate ? false : true"
              class="a-button-l duration"
              >{{ $t('network.Delete') }}</b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <br />

      <b-row>
        <!-- {{getNotificationsStore}} -->
        <!-- <div>
          Selected: <strong>{{ selected }}</strong
          ><br />
          All Selected: <strong>{{ selectAll }}</strong>
        </div> -->
        <b-col cols="12" v-for="(notification, index) in getNotificationsStore" :key="index">
          <div :class="notification.mark_as_read ? 'text-secondary' : 'font-weight-bold'">
            <p class="">
              <span style="display:inline-flex">
                <b-form-checkbox
                  name="checkbox-1"
                  v-model="selected"
                  :value="notification.id"
                  @change="updateCheckall"
                  class="m-left-top"
                ></b-form-checkbox>
                <b-avatar
                  class="d-inline-block profile-pic"
                  variant="light"
                  :text="notification.reference_type.charAt(0,1)"
                  :src="notification.image"
                ></b-avatar>
                <span class="m-0  d-inline-block ml-2 username">
                  {{ notification.reference_type}}
                  <div class="duration">{{ notification.created_at | fromNow }}</div>
                </span>
              </span>
              <span v-if="!notification.mark_as_read" class="float-right mt-1"> <b-badge pill variant="primary" class="text-primary">.</b-badge></span>
            </p>
            <p class="text">{{ notification.notification_text }}</p>                  
          </div>
          <hr width="100%" />
        </b-col>

        <b-col v-if="loader" class="load">
          <b-spinner style="width: 7rem; height: 7rem" variant="primary"></b-spinner>
        </b-col>
        <b-col v-if="!getNotificationsStore && !loader" class="load text-center">
          <b-row class="text-center">
            <p>{{ $t('businessowner.No_notifications_to_show') }} </p>
          </b-row>
        </b-col>
        <hr width="100%" />
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import { fromNow } from '@/helpers';
export default {
  name: 'notification',
  data: () => ({
    all: 24,
    selected: [],
    selectAll: false,
    indeterminate: false
  }),

  beforeMount() {
    this.getNotifications(this.$route.params.id)
      .then((e) => this.realTimeNotification({ init: true, data: e }));
  },

  filters: {
    fromNow,
  },

  watch: {
    selected(newValue, oldValue) {
      // Handle changes in individual notifications checkboxes
      //console.log(newValue)
      if (newValue.length === 0) {
        this.indeterminate = false;
        this.selectAll = false;
      } else if (newValue.length === this.getNotificationsStore.length) {
        this.indeterminate = true;
        this.selectAll = true;
      } else {
        this.indeterminate = true;
        this.selectAll = false;
      }
    }
  },

  computed: {
    getNotificationsStore() {
      return this.getRealTimeNotification.length ? this.getRealTimeNotification : this.sendNotifications();
    },
    loader() {
      return this.getLoader();
    },
    ...mapGetters({
      getRealTimeNotification: 'notification/NEW_BUSINESS_NOTIFICATION',
    }),
  },
  methods: {
    // getting actions from the store
    ...mapActions({
      getNotifications: 'businessOwner/getNotifications',
      readNotifiactions: 'businessOwner/readNotifiactions',
      deleteNotifications: 'businessOwner/deleteNotifications',
      delete: 'businessOwner/delete',
    }),

     ...mapGetters({
      sendNotifications: 'businessOwner/sendNotifications',
      getLoader: 'businessOwner/getLoader',
      getSuccess: 'businessOwner/getSuccess',
    }),

    ...mapMutations({
      realTimeNotification: 'notification/NEW_BUSINESS_NOTIFICATION',
    }),

    // getting getters from the store


    async readAll(data) {
      console.log(data)
      let formData = new FormData();
      for (let i = 0; i < data.length; i++) {
          //console.log(data[i]);
          formData.append('ids['+i+']', data[i]);
      }
      
      this.readNotifiactions({ ids:data})
        .then(() => {
          this.getNotifications(this.$route.params.id)
          this.flashMessage.show({
            status: "success",
            message: "Successful"
          });
        })
        .catch(() => {
          this.flashMessage.show({
            status: "error",
            message: "Unable to mark as read"
          });
        })
    },

    deleteAll(data) {
      this.checked = false;
      
      this.deleteNotifications({ ids:data})
        .then(() => {
          this.getNotifications(this.$route.params.id)
          this.flashMessage.show({
            status: "success",
            message: "Deleted Successful"
          });
        })
        .catch(() => {
            this.flashMessage.show({
              status: "error",
              message: "Unable to Delete as Notification"
            });
        })

    },

    deleteOne(id) {
      this.delete(id);
    },
    
    select(checked) {
      /* console.log("this.selectAll: "+this.selectAll);
      console.log("checked: "+checked); */
      this.selected = [];
      if (checked) {
        for (let notification in this.getNotificationsStore) {
            this.selected.push(this.getNotificationsStore[notification].id.toString());
            //console.log("this.notifications[notification].id: "+this.getNotificationsStore[notification].id);
        }
      }
    },
    updateCheckall: function() {
      if (this.getNotificationsStore.length === this.selected.length) {
        this.selectAll = true;
      } else {
        this.selectAll = false;
      }
    },
  },
};
</script>

<style scoped>
.load {
  display: flex;
  justify-content: center;
}

.f-left {
  float: left;
}

.f-right {
  float: right;
}
.b-bottom {
  margin-top: 20px;
  margin-bottom: 30px;
  padding-bottom: 10px;
  margin-left: -15px;
}

.m-left {
  margin-left: -20px;
}

.m-left-top {
  margin-left: -15px;
}
.p-notifaction {
  padding: 30px;
}

h5 {
  font-size: 15px;
}

.delete {
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  .btn {
    font-size: 16px;
  }
}

@media screen and (max-width: 768px) {
  .btn {
    font-size: 12px;
  }
}
</style>

<style>
@media only screen and (min-width: 768px) {
  .username {
    font-size: 16px !important;
  }

  .duration {
    font-size: 14px;
    font-weight: 100;
  }

  .text {
    font-size: 14px;
  }

  .profile-pic {
    width: 64px !important;
    height: 64px !important;
    margin-top: -5px;
  }
}

@media only screen and (max-width: 768px) {
  .username {
    font-size: 14px !important;
  }

  .duration {
    font-size: 12px;
    font-weight: 100;
  }

  .text {
    font-size: 12px;
  }

  .profile-pic {
    width: 30px !important;
    margin-top: -5px;
    height: 30px !important;
  }
}
</style>
