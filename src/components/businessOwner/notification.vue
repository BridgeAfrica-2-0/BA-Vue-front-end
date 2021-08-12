<template>
  <div class="container" style=" ">
    <div class="container">
      <b-row>
        <b-col>
          <div class="b-bottomn f-left">
            <input v-model="selectAll" @click="selectall" type="checkbox" />
            Select All
          </div>
        </b-col>
        <b-col>
          <div class="b-bottomn f-right">
            <b-button variant="primary" class="a-button-l duration">
              Mark as Read</b-button
            >
            <b-button variant="primary" class="a-button-l duration ml-1">
              Delete</b-button
            >
          </div>
        </b-col>
      </b-row>
      <br />

      <b-row>
        <b-col
          cols="12"
          class="mr-3"
          v-for="(notification, index) in notifications"
          :key="index"
        >
          <p class="">
            <span style="display:inline-flex">
              <input
                @click="select(notification)"
                v-model="notification.selected"
                type="checkbox"
              />
              <b-avatar
                class="d-inline-block profile-pic"
                variant="primary"
                :src="notification.profile"
              ></b-avatar>
              <h6 class="m-0  d-inline-block ml-2 username">
                {{ notification.name }}
                <p class="duration">1hr</p>
              </h6>
            </span>
            <span class="float-right mt-1"> </span>
          </p>

          <p class="text">
            {{ notification.message }}
          </p>

          <hr width="100%" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "notification",
  data: () => ({
    notifications: [
      {
        id: 1,
        name: "Mapoure Agrobusiness",
        profile: "https://business.bridgeafrica.info/assets/img/team/3.png",
        message:
          "  Lorem Ipsum is this is just a dummy text to post simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has been the industry's standard dummy text ever since the1500s,",
        time: "1hr",
        selected: false,
      },
      {
        id: 2,
        name: "Mapoure Agrobusiness",
        profile: "https://business.bridgeafrica.info/assets/img/team/3.png",
        message:
          "  Lorem Ipsum is this is just a dummy text to post simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has been the industry's standard dummy text ever since the1500s,",
        time: "1hr",
        selected: false,
      },
      {
        id: 3,
        name: "Mapoure Agrobusiness",
        profile: "https://business.bridgeafrica.info/assets/img/team/3.png",
        message:
          "  Lorem Ipsum is this is just a dummy text to post simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has been the industry's standard dummy text ever since the1500s,",
        time: "1hr",
        selected: false,
      },
      {
        id: 4,
        name: "Mapoure Agrobusiness",
        profile: "https://business.bridgeafrica.info/assets/img/team/3.png",
        message:
          "  Lorem Ipsum is this is just a dummy text to post simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has been the industry's standard dummy text ever since the1500s,",
        time: "1hr",
        selected: false,
      },
      {
        id: 5,
        name: "Mapoure Agrobusiness",
        profile: "https://business.bridgeafrica.info/assets/img/team/3.png",
        message:
          "  Lorem Ipsum is this is just a dummy text to post simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has been the industry's standard dummy text ever since the1500s,",
        time: "1hr",
        selected: false,
      },
    ],
    selected: [],
    selectAll: false,
  }),
  methods: {
    ...mapGetters({
      sendNotifications: "businessOwner/sendNotifications",
      getLoader: "businessOwner/getLoader",
      getSuccess: "businessOwner/getSuccess",
    }),

    // getting actions from the store
    ...mapActions({
      getNotifications: "businessOwner/getNotifications",
      readNotifiactions: "businessOwner/getNetworks",
      deleteNotification: "businessOwner/editNetwork",
    }),

    // select all the notifications
    selectall() {
      if (!this.selectAll) {
        this.notifications.forEach((notification) => {
          notification.selected = true;
          this.selected.push(notification);
        });
      } else {
        this.notifications.forEach((notification) => {
          notification.selected = false;
          this.selected = [];
        });
      }
    },
    select(notification) {
      if (this.selected.length > 0) {
        this.selected = [];
        this.selected.forEach((note) => {
          if (note.selected) {
            this.selected.push(note);
          }
        });
      } else {
        this.selected.push(notification);
      }
      console.log(this.selected);
    },
  },
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
