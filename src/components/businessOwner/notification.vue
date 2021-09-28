<template>
  <div class="container" style=" ">
    <div class="container">
      <b-row>
        <b-col>
          <div class="b-bottomn f-left">
            <input @click="selectall" type="checkbox" />
            Select All
          </div>
        </b-col>
        <b-col>
          <div class="b-bottomn f-right">
            <b-button
              @click="readAll(selected)"
              variant="primary"
              class="a-button-l duration"
            >
              Mark as Read</b-button
            >
            <b-button
              @click="deleteAll(selected)"
              variant="primary"
              class="a-button-l duration ml-1"
            >
              Delete</b-button
            >
          </div>
        </b-col>
      </b-row>
      <br />

      <b-row>
        <b-col cols="12" class="mr-3" v-for="i in 6" :key="i">
          <p class="">
            <span style="display:inline-flex">
              <b-form-checkbox
                id="checkbox-1"
                v-model="status"
                name="checkbox-1"
                value="accepted"
                class="m-left-top"
                unchecked-value="not_accepted"
              >
              </b-form-checkbox>
              <b-avatar
                class="d-inline-block profile-pic"
                variant="primary"
                src="https://business.bridgeafrica.info/assets/img/team/3.png"
              ></b-avatar>
              <h6 class="m-0  d-inline-block ml-2 username">
                Mapoure Agrobusiness
                <p class="duration">1hr</p>
              </h6>
            </span>
            <span class="float-right mt-1"> </span>
          </p>

          <p class="text">
            Lorem Ipsum is this is just a dummy text to post simply dummy text
            of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s,
          </p>
        </b-col>

        <b-col v-if="loader" class="load">
          <b-spinner
            style="width: 7rem; height: 7rem;"
            variant="primary"
          ></b-spinner>
        </b-col>
        <b-col v-if="!getNotificationsStore && !loader" class="load">
          <p>No notifications to show !!</p>

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
    all: 24,
    selected: [],
  }),
  beforeMount() {
    this.getNotifications();
  },
  computed: {
    getNotificationsStore() {
      return this.sendNotifications();
    },
    loader() {
      return this.getLoader();
    },
  },
  methods: {
    ...mapGetters({
      sendNotifications: "businessOwner/sendNotifications",
      getLoader: "businessOwner/getLoader",
      getSuccess: "businessOwner/getSuccess",
    }),

    // getting actions from the store
    ...mapActions({
      getNotifications: "businessOwner/getNotifications",
      readNotifiactions: "businessOwner/readNotifiactions",
      deleteNotifications: "businessOwner/deleteNotifications",
      delete: "businessOwner/delete",
    }),

    readAll(data) {
      this.readNotifiactions(data);
    },
    deleteAll(data) {
      this.checked = false;
      let ids = [];
      data.forEach((element) => {
        ids.push(element.id);
      });
      this.deleteNotifications(ids);
    },

    deleteOne(id) {
      this.delete(id);
    },

    // select all the notifications
    selectall() {
      this.getNotificationsStore.forEach((element) => {
        this.selected.push(element);
      });
    },
    select(notification, index) {
      if (this.selected[index]) {
        this.selected.splice(index, 1);
        return;
      }
      this.selected.push(notification);
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
