   
<template>
  <div class="container" style=" ">
    <div class="container">
      <b-row>
        <b-col cols="4">
          <div class="b-bottomn f-left">
            <b-form-checkbox
              v-model="selectAll"
              :indeterminate="indeterminate"
              name="checkbox-1"
              @change="select"
              class="m-left-top username"
            >{{ selectAll ? $t('network.Un_select_All') : $t('network.Select_All') }}
            </b-form-checkbox>
          </div>
        </b-col>
        <b-col cols="8">
          <div class="b-bottomn f-right d-inline-flex">
            <b-button 
              variant="primary" 
              @click="MarkAsRead" 
              :disabled="indeterminate ? false : true"
              class="a-button-l duration"
            >{{ $t('network.Mark_as_Read') }}</b-button>
            &nbsp;
            <b-button 
              variant="outline-primary"
              @click="Delete" 
              :disabled="indeterminate ? false : true"
              class="a-button-l duration"
            >{{ $t('general.Delete') }}</b-button>
          </div>
        </b-col>
      </b-row>
     
      <b-row>
        <!-- <div>
          Selected: <strong>{{ selected }}</strong
          ><br />
          All Selected: <strong>{{ selectAll }}</strong>
        </div> -->
        <hr width="100%" />
        <b-col cols="12"
          :class="{ active: index == currentPage }"
          v-for="(notification, index) in notifications"
          :key="notification.updated_at"
        >
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
                  variant="primary"
                  :text="notification.full_name.charAt(0,1)"
                  :src="notification.profile_picture"
                ></b-avatar>
                <span class="m-0  d-inline-block ml-2 username">
                  <router-link :to="'/'+notification.lien">
                    <span v-if="notification.mark_as_read" class="title"> {{ notification.full_name }}</span>
                    <span v-else><strong class="title"> {{ notification.full_name }}</strong></span>
                  </router-link>
                  <div class="duration">{{ moment(notification.created_at).fromNow() }}</div>
                </span>
              </span>
              <span v-if="!notification.mark_as_read" class="float-right mt-1"> <b-badge pill variant="primary" class="text-primary">.</b-badge></span>
            </p>
            <p class="text">{{ notification.notification_text }}</p>                  
          </div>
          <hr width="100%" />
        </b-col>
        <b-col cols="12" v-if="noti_Details.total > noti_Details.per_page">
          <div class="b-bottomn f-right">
            <b-pagination
              v-model="currentPage"
              :total-rows="noti_Details.total"
              :per-page="noti_Details.per_page"
              @change="handlePageChange"
            ></b-pagination>
          </div>
        </b-col>
      </b-row>
      <!-- {{notifications}}
      {{newNotifications}} -->
    </div>

    

  </div>
</template>

<script>
import moment from 'moment';
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: "notification",
  data() {
    return {
      url: null,
      moment: moment,
      loader:false,
      currentPage: 1,
      selected: [],
      selectAll: false,
      indeterminate: false
    };
  },
  
  computed: {
    ...mapGetters({
      newNotifications: 'notification/NEW_NETWORK_NOTIFICATION',
      notifications: 'networkNotification/getAllNotifications'
    }),
    noti_Details() {
      return this.$store.state.networkNotification.notificationsDetails;
    }
  },

  watch: {
    selected(newValue, oldValue) {
      // Handle changes in individual notifications checkboxes
      if (newValue.length === 0) {
        this.indeterminate = false;
        this.selectAll = false;
      } else if (newValue.length === this.notifications.length) {
        this.indeterminate = true;
        this.selectAll = true;
      } else {
        this.indeterminate = true;
        this.selectAll = false;
      }
    },
    newNotifications: function (val) {
      this.newNotifications.forEach(e => {
        this.add(e)
      });
    },
  },
  mounted(){
    this.url = this.$route.params.id
    this.getNotifications() 
  },
  methods: {

    ...mapMutations({
      add: 'networkNotification/addNotification'
    }),

    select(checked) {
      console.log("this.selectAll: "+this.selectAll);
      console.log("checked: "+checked);
      console.log(this.notifications);
      this.selected = [];
      if (checked) {
        for (let notification in this.notifications) {
            this.selected.push(this.notifications[notification].id.toString());
            console.log("this.notifications[notification].id: "+this.notifications[notification].id);
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
    this.$store
      .dispatch("networkNotification/getNotifications", 
      {
        "id":`notification/network/${this.$route.params.id}`,
        "path":"?page="+this.currentPage
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
        "path": "notification/mark-read",
        "formData": formData
      })
      .then(({data}) => {
        console.log(data);
        console.log('ohh yeah');
        this.selected = [];
        this.getNotifications();
        this.indeterminate = true;
        this.flashMessage.show({
          status: "success",
          message: this.$t('general.Marked_As_Read')
        });
      })
      .catch(err => {
        console.log({ err: err });
        this.indeterminate = true;
        this.flashMessage.show({
          status: "error",
          message: this.$t('general.Unable_To_Mark_As_Read')
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
        "path": "notification/deleteAll",
        "formData": formData
      })
      .then(({data}) => {
        console.log(data);
        console.log('ohh yeah');
        this.selected = [];
        this.getNotifications();
        this.indeterminate = true;
        this.flashMessage.show({
          status: "success",
          message: this.$t('general.Notification_Deleted')
        });
      })
      .catch(err => {
        console.log({ err: err });
        this.indeterminate = true;
        this.flashMessage.show({
          status: "error",
          message: this.$t('general.Unable_To_Deleted_Notification')
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