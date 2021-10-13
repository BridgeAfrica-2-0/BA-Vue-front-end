   
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
            <b-button variant="primary" @click="MarkAsRead" class="a-button-l duration">Mark as Read</b-button>
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
        <b-col cols="12" class="mr-3" v-for="notification in notifications" :key="notification.id">
          <p class="">
            <span style="display:inline-flex">
              <b-form-checkbox
                v-model="selected"
                :value="notification.name"
                @change="updateCheckall"
                name="checkbox-1"
                class="m-left-top"
              >
              </b-form-checkbox>
              <b-avatar
                class="d-inline-block profile-pic"
                variant="primary"
                :src="notification.data[0].profile_picture"
              ></b-avatar>
              <h6 class="m-0  d-inline-block ml-2 username">
                {{ notification.data[0].fullname }}
                <!-- <div class="duration">{{ notification.created_at }}hr</div> -->
                <div class="duration">{{ moment(notification.created_at).fromNow() }}</div>
              </h6>
            </span>
            <span class="float-right mt-1"> </span>
          </p>

          <p class="text">
            {{ notification.notification_text }}
          </p>

          <hr width="100%" />
        </b-col>
      </b-row>
      {{notifications}}
    </div>

    <FlashMessage />

  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: "notification",
  data() {
    return {
      url: null,
      moment: moment,
      notifications: [ 
        {
          "data": [
              {
                  "fullname": "Cyclone wifi",
                  "profile_picture": "https://picsum.photos/250/250/?image=22"
              }
          ],
          "notification_id": 4,
          "reference_id": 1,
          "notification_text": "You’ve unblock Ramona Braun",
          "created_at": "2021-10-12T15:28:23.000000Z",
          "updated_at": "2021-10-12T15:28:23.000000Z",
          "is_read": 0,
          "user_id": 1,
          "mark_as_read": 0
        },
        {
          "data": [
              {
                  "fullname": "Cyclone ",
                  "profile_picture": "https://picsum.photos/250/250/?image=22"
              }
          ],
          "notification_id": 4,
          "reference_id": 1,
          "notification_text": "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.",
          "created_at": "2021-1-12T15:28:23.000000Z",
          "updated_at": "2021-12-12T15:28:23.000000Z",
          "is_read": 0,
          "user_id": 1,
          "mark_as_read": 1
        },
      ],
      selected: [],
      selectAll: false,
      indeterminate: false
    };
  },
  
  computed: {
    notificationss() {
      return this.$store.state.networkNotification.notifications;
    },
  },

  watch: {
    selected(newValue, oldValue) {
      // Handle changes in individual notifications checkboxes
      if (newValue.length === 0) {
        this.indeterminate = false;
        this.selectAll = false;
      } else if (newValue.length === this.notifications.length) {
        this.indeterminate = false;
        this.selectAll = true;
      } else {
        this.indeterminate = true;
        this.selectAll = false;
      }
    }
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
        for (let notification in this.notifications) {
          console.log("this.notifications[notification].notification_id: "+this.notifications[notification].notification_id)
          this.selected.push(this.notifications[notification].notification_id.toString());
        }
      }
    },
    updateCheckall: function() {
      if (this.notifications.length === this.selected.length) {
        this.selectAll = true;
      } else {
        this.selectAll = false;
      }
    },
    getNotifications() {
      console.log('getNotifications Mounted');
    this.$store
      .dispatch("networkNotification/getNotifications", {"id":this.url,"path":"notifications"})
      .then(() => {
        console.log('ohh yeah');
      })
      .catch(err => {
        console.log({ err: err });
      });
    },

    MarkAsRead: function(){
      let formData = new FormData();
      for (let i = 0; i < this.selected.length; i++) {
        console.log(this.selected[i]);
        formData.append('ids['+i+']', this.selected[i]);
      }
      this.axios.post("#", formData)
      .then(() => {
        console.log('ohh yeah');
        this.getNotifications();
        this.flashMessage.show({
          status: "success",
          message: "New Role Updated"
        });
      })
      .catch(err => {
        console.log({ err: err });
        this.flashMessage.show({
          status: "error",
          message: "Unable to Update New Role"
        });
      });
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