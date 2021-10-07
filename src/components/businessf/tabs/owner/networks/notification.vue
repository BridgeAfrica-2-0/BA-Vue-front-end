<template>
  <div class="container" style=" ">
    <div class="container">
      <b-row>
        <b-col>
          <div class="b-bottomn f-left">
            <b-form-checkbox
              id="checkbox-1"
              name="checkbox-1"
              value="accepted"
              class="m-left-top username"
              unchecked-value="not_accepted"
            >
              Select All
            </b-form-checkbox>
          </div>
        </b-col>
        <b-col>
          <div class="b-bottomn f-right">
            <b-button variant="primary" class="a-button-l duration">
              Mark as Read</b-button
            >
          </div>
        </b-col>
      </b-row>
      <br />

      <b-row>
        <b-col
          cols="12"
          class="mr-3"
          v-for="post in allNotifications"
          :key="post.id"
        >
          <p class="">
            <span style="display:inline-flex">
              <b-form-checkbox
                id="checkbox-1"
                name="checkbox-1"
                value="accepted"
                class="m-left-top"
                unchecked-value="not_accepted"
              >
              </b-form-checkbox>
              <b-avatar
                class="d-inline-block profile-pic"
                variant="primary"
                :src="post.image"
              ></b-avatar>
              <h6 class="m-0  d-inline-block ml-2 username">
                {{ post.name }}
                <p class="duration">{{ post.time }}</p>
              </h6>
            </span>
            <span class="float-right mt-1"> </span>
          </p>

          <p class="text">
            {{ post.description }}
          </p>

          <hr width="100%" />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p class="text-center" v-if="allNotifications < 1">
            No Notifications To Show
          </p>
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
    selected: [],
  }),
  beforeMount() {
    this.getNotifications();
  },
  computed: {
    ...mapGetters({
      allNotifications: "networkSetting/allNotifications",
    }),
    methods: {
      ...mapActions({
        getNotifications: "networkSetting/getNotifications",
      }),
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
