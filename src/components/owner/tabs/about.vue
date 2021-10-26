<template>
  <div>
    <b-icon icon="person-fill" variant="primary" class="icon-size"> </b-icon>

    <b>
      About
    </b>
    <hr />

    <div no-body class="p-2">
      <b-tabs lazy pills vertical>
        <b-tab title="BIOGRAPHY" active><Biography /></b-tab>
        <b-tab title="BASIC INFO"> <ContactandInfo /> </b-tab>
        <b-tab title="EDUCATION AND WORK"><WorkAndEducation /></b-tab>
      </b-tabs>
  
    </div>
  </div>
</template>

<script>
import Biography from "../biography";
import ContactandInfo from "../contactandbasicinfo";
import WorkAndEducation from "../workandeducation";
export default {
  components: {
    Biography,
    ContactandInfo,
    WorkAndEducation
  },
  data() {
    return {
      size: 0,
      profile_about: null,
    };
  },
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
  computed: {
    vertical() {
      if (this.size > 768) return true;
      return false;
    },
    card() {
      if (this.size > 992) return true;
      return false;
    }
  },
  mounted() {
    var that = this;
    window.onresize = function() {
      that.size = window.innerWidth;
    };
  }
};
</script>

<style></style>