<template>
  <div class="container" style=" ">
    <div class="container">
      <b-row>
        <b-col>
          <div class="b-bottom f-left">
            <input @click="selectall" type="checkbox" />
            {{ $t('businessowner.Select_All') }}
          </div>
        </b-col>
        <b-col>
          <div class="b-bottomn f-right">
            <b-button
              @click="readAll(selected)"
              variant="primary"
              class="a-button-l duration"
            >
              {{ $t('businessowner.Mark_as_Read') }}</b-button
            >
            <b-button
              @click="deleteAll(selected)"
              v-if="selected.length > 0"
              variant="primary"
              class="a-button-l duration ml-1"
            >
              {{ $t('businessowner.Delete') }}</b-button
            >
          </div>
        </b-col>
      </b-row>
      <br />

      <b-row>
        <b-col
          cols="12"
          class="mr-3"
          v-for="post in getNotificationsStore"
          :key="post.id"
        >
          <p class="">
            <span style="display:inline-flex">
              <input
                @click="select(post.id)"
                type="checkbox"
                v-model="status"
                value="accepted"
                class="m-left-top"
                unchecked-value="not_accepted"
              />
              <b-avatar
                class="d-inline-block profile-pic"
                variant="primary"
                :src="post.image"
              ></b-avatar>
              <h6 class="m-0  d-inline-block ml-2 username">
                {{ post.reference_type }}
                <p class="duration">{{ post.created_at }}</p>
              </h6>
            </span>
            <span class="float-right mt-1"> </span>
          </p>

          <p class="text">
            {{ post.notification_text }}
          </p>
        </b-col>

        <b-col v-if="loader" class="load">
          <b-spinner
            style="width: 7rem; height: 7rem;"
            variant="primary"
          ></b-spinner>
        </b-col>
        <b-col
          v-if="!getNotificationsStore && !loader"
          class="load text-center"
        >
          <b-row class="text-center">
            <p>{{ $t('businessowner.No_notifications_to_show') }} !!</p>
          </b-row>
        </b-col>
        <hr width="100%" />
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
    // getting getters from the store
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
