<template>
  <div>
    <b-card class="border shadow card " style="height:250px">
      <span>
        <h3 class="name">
          <h6 class="name">
            <fas-icon class="icons" :icon="['fas', 'user']" size="lg" />
            <b> Profile </b>
          </h6>

          <h6 class="float-right text-success font-weight-bolder">
            <b-button variant="outline-primary upgrade-btn mt-top-60" size="sm"
              ><b-icon-star></b-icon-star> &nbsp;&nbsp;Upgrade Plan</b-button
            >
          </h6>
        </h3>
      </span>

      <div
        class="d-flex col-md-12 mt-2 ml-35"
        v-for="itema in $store.getters.getUser"
        :key="itema.id"
      >
        <b-avatar
          class="p-avater"
          variant="primary"
          :src="$store.getters.getProfilePictureu"
          size="5em"
        ></b-avatar>

        <div class="text-lost">
          <h6>
            <b class="name"> {{ itema.profileName }} </b>
          </h6>
          <p class="mb-1">
            Community: {{ ccommun }}
            <span class="float-right m-60"
              >Current Plan: <span class="text-success">Basic</span></span
            >
          </p>
          <router-link to="profile_owner">
            <p class="mb-1">
              <b-icon-person-fill class="text-primary"></b-icon-person-fill>
              Visit Profile
            </p>
          </router-link>
          <p class="mb-1 ">
            <b-icon-chat-fill class="text-primary"></b-icon-chat-fill>
            Message
            <span class="badge rounded-pill bg-primary float-right mt-1">
              {{ cmessages }}
            </span>
          </p>
          <p class="mb-1 ">
            <b-icon-bell-fill class="text-primary"></b-icon-bell-fill>
            Notifications
            <span class="badge rounded-pill bg-primary float-right mt-1">
              {{ cnotif }}
            </span>
          </p>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {
      business: []
    };
  },
  computed: {
    cnotif() {
      return this.$store.state.pdetails.notification_count;
    },
    ccommun() {
      return this.$store.state.pdetails.community;
    },
    cmessages() {
      return this.$store.state.pdetails.message_count;
    }
  },
  methods: {
    countnotif() {
      this.$store
        .dispatch("getpdetails")
        .then(() => {
          console.log("the response");
        })
        .catch(err => {
          console.log({ err: err });
        });
    }
  },
  mounted() {
    this.countnotif();
  }
};
</script>

<style scoped>
.mt-top-60 {
  margin-top: -50px;
}

@media only screen and (min-width: 768px) {
  .upgrade-btn {
    width: 146px;
    height: 38px;
  }

  .name {
    font-size: 20px;
  }

  .text-lost {
    font-size: 14px;

    flex-basis: 90%;
    padding-left: 30px;

    font-family: Helvetica Neue;
  }
}

@media only screen and (max-width: 768px) {
  .ml-35 {
    margin-left: -20px;
  }

  .m-60 {
    margin-right: -60px;
  }

  .upgrade-btn {
    width: 126px;
    height: 33px;
    font-size: 12px;
  }

  .card {
    padding: 5px;
    padding-top: 10px;
  }

  .name {
    font-size: 16px;
  }

  .text-lost {
    font-size: 12px;

    flex-basis: 100%;
    padding-left: 10px;

    font-family: Helvetica Neue;
  }
}

h6 {
  font-size: 12px;
}
.picture {
  border-radius: 10px;
  width: 190px;
  flex-basis: 40%;
}

.colum {
  justify-content: space-around;
}

.chart {
  display: block;
  height: 315px;
  width: 400px;
}

.text-design {
  line-height: 40px;
}
</style>
