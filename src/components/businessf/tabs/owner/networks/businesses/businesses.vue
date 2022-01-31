<template>
  <div class="lalala">
    <b-tabs content-class="mt-3" lazy fill pills>
      <b-tab >

         <template slot="title">
                  {{ $t("network.Followers") }}
                  <span class="spa-color">
                    {{ nFormatter(businessdetails.total_followers) }}
                  </span>
                </template>


        <Followers />
      </b-tab>
      <b-tab >

         <template slot="title">
                  {{ $t("network.Following") }}
                  <span class="spa-color">
                    {{ nFormatter(businessdetails.totat_following) }}
                  </span>
                </template>


        <Following />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Followers from "./tabs/followers";
import Following from "./tabs/following";
export default {
  components: {
    Followers,
    Following
  },

   methods: {
    nFormatter: function(num) {
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
      }
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
      }
      return num;
    }
   },

    computed: {
    userdetails() {
      return this.$store.state.networkProfileCommunitySidebar.userdetails;
    },
    businessdetails() {
      return this.$store.state.networkProfileCommunitySidebar.businessdetails;
    },
    networkdetails() {
      return this.$store.state.networkProfileCommunitySidebar.networkdetails;
    },
  },



  props: ["businesses"]
};
</script>

<style></style>
