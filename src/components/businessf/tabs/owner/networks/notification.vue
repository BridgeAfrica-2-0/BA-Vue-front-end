   
<template>
  <div class="container" style=" ">
    <div class="container">
      <b-row>
        <b-col>
          <div class="b-bottomn f-left">
            <b-form-checkbox
              v-model="selectAll"
              :indeterminate="indeterminate"
              name="checkbox-1"
              @change="select"
              class="m-left-top username"
            >
              {{ selectAll ? "Un-select All" : "Select All" }}
            </b-form-checkbox>
          </div>
        </b-col>
        <b-col>
          <div class="b-bottomn f-right">
            <b-button 
              variant="primary" 
              @click="MarkAsRead" 
              :disabled="indeterminate ? false : true"
              class="a-button-l duration"
            >Mark as Read</b-button>
            &nbsp;
            <b-button 
              variant="outline-primary"
              @click="Delete" 
              :disabled="indeterminate ? false : true"
              class="a-button-l duration"
            >Delete</b-button>
          </div>
        </b-col>
      </b-row>
      <br />

      <b-row>
        <div>
          Selected: <strong>{{ selected }}</strong
          ><br />
          All Selected: <strong>{{ selectAll }}</strong>
        </div>
        <b-col cols="12"
          :class="{ active: index == currentPage }"
          v-for="(notification, index) in notifications.data"
          :key="index"
        >
          <div :class="notification.mark_as_read ? 'text-secondary' : 'font-weight-bold'">
          <p class="">
            <span style="display:inline-flex">
              <b-form-checkbox
                name="checkbox-1"
                v-model="selected"
                :value="notification.id"
                @change="updateCheckall"
                :disabled="notification.mark_as_read ? true : false"
                class="m-left-top"
              ></b-form-checkbox>
              <b-avatar
                class="d-inline-block profile-pic"
                variant="primary"
                :text="notification.reference_type.charAt(0,1)"
              ></b-avatar>
              <span class="m-0  d-inline-block ml-2 username">
                {{ notification.reference_type }}
                <div class="duration">{{ moment(notification.created_at).fromNow() }}</div>
              </span>
            </span>
            <span v-if="!notification.mark_as_read" class="float-right mt-1"> <b-badge pill variant="primary" class="text-primary">.</b-badge></span>
          </p>

          <p class="text">
            {{ notification.notification_text }}
          </p>
          </div>

          <hr width="100%" />
        </b-col>
        <b-col cols="12" v-if="notifications.total > notifications.per_page">
          <div class="b-bottomn f-right">
            <b-pagination
              v-model="currentPage"
              :total-rows="notifications.total"
              :per-page="notifications.per_page"
              @change="handlePageChange"
            ></b-pagination>
          </div>
        </b-col>
      </b-row>
      {{notifications}}
      {{newNotifications}}
    </div>

    <FlashMessage />

  </div>
</template>

<script>
import moment from 'moment';
import {mapGetters} from 'vuex'

export default {
  name: "notification",
  data() {
    return {
      url: null,
      moment: moment,
      loader:false,
      currentPage: 0,

      // notifications: [ 
      //   {
      //     "data": [
      //         {
      //             "fullname": "wifi",
      //             "profile_picture": "https://picsum.photos/250/250/?image=27"
      //         }
      //     ],
      //     "notification_id": 4,
      //     "reference_id": 1,
      //     "notification_text": "You’ve unblock Ramona Braun",
      //     "created_at": "2021-10-12T15:28:23.000000Z",
      //     "updated_at": "2021-10-12T15:28:23.000000Z",
      //     "is_read": 0,
      //     "user_id": 1,
      //     "mark_as_read": 1
      //   },
      //   {
      //     "data": [
      //         {
      //             "fullname": "Cyclone wifi",
      //             "profile_picture": "https://picsum.photos/250/250/?image=22"
      //         }
      //     ],
      //     "notification_id": 9,
      //     "reference_id": 1,
      //     "notification_text": "You’ve unblock Ramona Braun",
      //     "created_at": "2021-10-12T15:28:23.000000Z",
      //     "updated_at": "2021-10-12T15:28:23.000000Z",
      //     "is_read": 0,
      //     "user_id": 1,
      //     "mark_as_read": 1
      //   },
      //   {
      //     "data": [
      //         {
      //             "fullname": "Cyclone ",
      //             "profile_picture": "https://picsum.photos/250/250/?image=22"
      //         }
      //     ],
      //     "notification_id": 6,
      //     "reference_id": 1,
      //     "notification_text": "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.",
      //     "created_at": "2021-12-12T15:28:23.000000Z",
      //     "updated_at": "2021-10-12T15:28:23.000000Z",
      //     "is_read": 1,
      //     "user_id": 1,
      //     "mark_as_read": 1
      //   },
      // ],
      selected: [],
      selectAll: false,
      indeterminate: false
    };
  },
  
  computed: {
    notifications() {
      return this.$store.state.networkNotification.notifications;
    },

    ...mapGetters({
      newNotifications: 'notification/NEW_BUSINESS_NOTIFICATION'
    })
  },

  watch: {
    selected(newValue, oldValue) {
      // Handle changes in individual notifications checkboxes
      if (newValue.length === 0) {
        this.indeterminate = false;
        this.selectAll = false;
      } else if (newValue.length === this.notifications.data.length) {
        this.indeterminate = false;
        this.selectAll = true;
      } else {
        this.indeterminate = true;
        this.selectAll = false;
      }
    },
    newNotifications: function (val) {
      console.log("newNotifications");
      console.log(val);
      this.newNotifications.forEach(e => {
        this.notifications.push(e)
      });
    },
  },
  mounted(){
    this.url = this.$route.params.id
    this.getNotifications() 
  },
  methods: {
    select(checked) {
      console.log("this.selectAll: "+this.selectAll);
      console.log("checked: "+checked);
      this.selected = [];
      if (checked) {
        for (let notification in this.notifications.data) {
            this.selected.push(this.notifications.data[notification].id.toString());
            console.log("this.notifications.data[notification].id: "+this.notifications.data[notification].id);
        }
      }
    },
    updateCheckall: function() {
      if (this.notifications.data.length === this.selected.length) {
        this.selectAll = true;
      } else {
        this.selectAll = false;
      }
    },
    getNotifications() {
      console.log('getNotifications Mounted');
    this.$store
      .dispatch("networkNotification/getNotifications", 
      {
        "id":this.url,
        "path":"notifications?page="+this.currentPage
        })
      .then(() => {
        console.log('ohh yeah');
      })
      .catch(err => {
        console.log({ err: err });
      });
    },

    MarkAsRead: function(){
      this.indeterminate = false;
      let formData = new FormData();
      for (let i = 0; i < this.selected.length; i++) {
        console.log(this.selected[i]);
        formData.append('ids['+i+']', this.selected[i]);
      }
      this.$store
      .dispatch("networkNotification/MarkAsRead", 
      {
        "path": this.url+"/notifications/mark-read",
        "formData": formData
      })
      .then(({data}) => {
        console.log(data);
        console.log('ohh yeah');
        this.getNotifications();
        this.indeterminate = true;
        this.flashMessage.show({
          status: "success",
          message: "Marked As Read"
        });
      })
      .catch(err => {
        console.log({ err: err });
        this.indeterminate = true;
        this.flashMessage.show({
          status: "error",
          message: "Unable To Mark As Read"
        });
      });
		},

    Delete: function(){
      this.indeterminate = false;
      let formData = new FormData();
      for (let i = 0; i < this.selected.length; i++) {
        console.log(this.selected[i]);
        formData.append('ids['+i+']', this.selected[i]);
      }
      this.$store
      .dispatch("networkNotification/Delete", 
      {
        "path": this.url+"/notifications/deleteAll",
        "formData": formData
      })
      .then(({data}) => {
        console.log(data);
        console.log('ohh yeah');
        this.getNotifications();
        this.indeterminate = true;
        this.flashMessage.show({
          status: "success",
          message: "Notification(s) Deleted"
        });
      })
      .catch(err => {
        console.log({ err: err });
        this.indeterminate = true;
        this.flashMessage.show({
          status: "error",
          message: "Unable To Deleted Notification(s)"
        });
      });
		},

    handlePageChange(value) {
      console.log("value: "+value)
      console.log("currentPage: "+this.currentPage)
      this.currentPage = value;
      this.getNotifications(); 
    },

  }

};
</script>

<style scoped>
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
  border-bottom: 0.5px solid;
  border-color: gray;
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