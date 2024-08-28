<template>
  <div>
    <b-card class="border shadow card pr-3" style="height: 380px">
      <div class="row">
        <div class="col-md-6">
          <span class="mt-1"> Use BridgeAfrica as </span>
        </div>

        <div class="col-md-6">
          <b-form-select
            v-model="selectedb"
            class="mr-3"
            :options="boptions"
            @input="switchBusiness"
          ></b-form-select>
        </div>
      </div>

      <div class="text-center mt-3">
        <b-avatar
          class="p-avater bg-white"
          variant="primary"
          :src="profile.picture"
          size="6em"
        ></b-avatar>

        <div class="text-lost mt-2">
          <h6 class="">
            <router-link :to="{ name: 'profile_owner' }" class="card-title">
              {{ profile.name }}
            </router-link>
          </h6>

          <span class="mr-3">
            <b-icon icon="people"></b-icon> {{ profile.follower }}
          </span>

          <hr />

          <div class=" text-left">
            <!-- <span class="mb-1">
            <b-icon-person-fill class="text-primary"></b-icon-person-fill>
            <router-link to="profile_owner">
             <span class="text"> {{ $t("dashboard.Visit_Profile") }}   </span>   </router-link>
             </span> -->

            <p class="mb-1">
              <b-icon-chat-fill class="text-primary"></b-icon-chat-fill>
              <router-link to="/messaging">
                <span class="text"> {{ $t("dashboard.Messages") }} </span>
              </router-link>
              <span class="badge  bg-white  float-right mt-1">
                {{ profile.message }}
              </span>
            </p>
            <p class="mb-1">
              <b-icon-bell-fill class="text-primary"></b-icon-bell-fill>

              <router-link to="/notification">
                <span class="text"> {{ $t("dashboard.Notifications") }} </span>
              </router-link>

              <span class="badge  bg-white  float-right mt-1">
                {{ profile.notification }}
              </span>
            </p>

            <!-- <small class="text-muted"> Email </small>
            <h6>{{ profile.email }} hannagover@gmail.com</h6>

            <small class="text-muted"> Phone </small>
            <h6>{{ profile.tel }} +237 82325969</h6> -->
          </div>

          <!-- <h6 class="name"> Phone </h6> <p> {{profile.tel}} +237 82325969 </p> -->

          <!-- <p class="mb-1">   {{ profile.followers }} {{ community }}   </p> -->
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "profile",
  props: {
    boptions: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      selectedb: "owner"
    };
  },
  computed: {
    details() {
      return this.$store.getters["ProfileAndBusinessDetails/getdetails"];
    },
    community() {
      if (this.$i18n.locale === "en") {
        if (this.profile.followers > 1) {
          return "Communities";
        }
        return "Community";
      } else if (this.$i18n.locale === "fr") {
        if (this.profile.followers > 1) {
          return "Communautés";
        }
        return "Communauté";
      }
      return "Community";
    },
    profile() {
      return this.$store.state.ProfileAndBusinessDetails.profile;
    }
  },
  mounted() {
    this.$store
      .dispatch("ProfileAndBusinessDetails/getdetails")
      .then(() => {
        console.log("the response");
      })
      .catch(err => {
        console.log({ err: err });
      });
  },

  methods: {
    async switchBusiness(value) {
      this.$emit("switchBusiness", value);
    }
  }
};
</script>

<style scoped>
.text {
  color: #455a64;
  font-family: poppins;
}
.card-title {
  font-size: 18px;
  line-height: 1.2;
  font-family: poppins;
  font-weight: 400;
  color: #455a64;
}

h6 {
  font-size: 0.875rem;
  font-weight: 400;
}

small {
  font-size: 0.875em;
  color: #a1aab2 !important;
}

.text-muted {
  --bs-text-opacity: 1;
  color: #a1aab2 !important;
}

.mt-top-60 {
  margin-top: -50px;
}
.bg-white {
  background-color: #ffffff;
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
  }
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
.bg-white {
  background-color: #ffffff;
}
</style>
