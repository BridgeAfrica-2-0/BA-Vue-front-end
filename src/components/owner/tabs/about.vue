<template>
  <div>
    <b-icon icon="person-fill" variant="primary" class="icon-size"> </b-icon>
    <b>
      About
    </b>
    <hr />
    <div no-body class="p-2">
      <b-tabs pills vertical>
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
      size: 0
    };
  },
  created() {
    console.log("load profile about start +++++");
    this.$store
      .dispatch("loadUserProfile_About", null)
      .then(response => {
        console.log("load profile about sucessss ++++++ ");
        console.log( response );
        console.log(" end load profile about");
      })
      .catch(error => {
        console.log("error load profile about ");
        console.log( error )
        console.log(" end load profile about ");
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
