<template>
  <div>
    <b-icon class="icon" variant="primary" icon="person-fill"></b-icon> {{$t("follower.About")}}

    <hr />

    <b-card no-body class="desktop">
      <b-tabs pills card vertical>
        <b-tab :title="$t('follower.BIOGRAPHY')" active><Biography /></b-tab>  
        <b-tab :title="$t('follower.CONTACT_BASIC_INFO')"><ContactandInfo /> </b-tab>
        <b-tab :title="$t('follower.WORK_EDUCATION')"><WorkAndEducation /></b-tab>  
      </b-tabs>
    </b-card>
    <b-card no-body class="mobile p-2">
      <b-tabs pills card justified>
        <b-tab :title="$t('follower.BIOGRAPHY')" active><Biography /></b-tab>
        <b-tab :title="$t('follower.CONTACT_BASIC_INFO')"><ContactAndInfo /> </b-tab>
        <b-tab :title="$t('follower.WORK_EDUCATION')"><WorkAndEducation /></b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import Biography from "../biography";
import ContactandInfo from "../contactAndBasicInfo";
import WorkAndEducation from "../workAndEducation";
export default {
  components: {
    Biography,
    ContactandInfo,
    WorkAndEducation,
  },

  data() {
    return {
      size: 0,
      profile_about: null,
    };
  },

  methods:{
    


    created() {
    this.profile_about = JSON.parse(
            JSON.stringify(this.$store.getters['profile/getProfileAbout'])
    );
    console.log("Load User Profile About start ++++++", this.profile_about);
    this.$store
            .dispatch("profile/loadUserProfileAbout", null)
            .then(response => {
              
            })
            .catch(error => {
              console.log("Error from server or from browser error (2) ++++", error);
            })
            .finally(() => {
              this.profile_about = JSON.parse(
                      JSON.stringify(this.$store.getters['profile/getProfileAbout_'])
              );
              console.log("Load User Profile About end ++++++", this.profile_about);
            });
  },

  },
};
</script>

<style scoped>
.mobile {
  display: none;
}

.icon {
  height: 24px;
  width: 24px;
}
.primary-bg {
  background-color: rgb(242, 242, 242);
  border: none;
}

span {
  margin-left: 8px;
}

@media only screen and (max-width: 768px) {
  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }
  span {
    margin-left: 6px;
  }
}
</style>
