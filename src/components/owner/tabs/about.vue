<template>
  <div>   



    <b-icon class="icon" variant="primary" icon="person-fill"></b-icon> About

    <hr /> 


    <b-card v-if="window.width<768"  no-body class="mobile p-2">
      <b-tabs pills card justified>
        <b-tab :title="$t('profileowner.BIOGRAPHY')" active><Biography /></b-tab>
        <b-tab :title="$t('profileowner.CONTACT_BASIC_INFO')"><ContactandInfo /> </b-tab>
        <b-tab :title="$t('profileowner.WORK_EDUCATION')"><WorkAndEducation /></b-tab>
      </b-tabs>
    </b-card>


    <b-card v-else no-body class="desktop">
      <b-tabs pills card vertical>
        <b-tab :title="$t('profileowner.BIOGRAPHY')" active><Biography /></b-tab>  
        <b-tab :title="$t('profileowner.CONTACT_BASIC_INFO')"><ContactandInfo /> </b-tab>
        <b-tab :title="$t('profileowner.WORK_EDUCATION')"><WorkAndEducation /></b-tab>  
      </b-tabs>
    </b-card>

    

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
      mobile:null,
      profile_about: null,

       window: {
            width: 0,
            height: 0
        }

    };
  },
  created() {

  
   window.addEventListener('resize', this.handleResize);
        this.handleResize();


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
  },



   destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },

    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        }
    }


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
