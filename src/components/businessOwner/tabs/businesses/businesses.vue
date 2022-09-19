<template>
  <div class="lalala">
    <b-tabs content-class="mt-3" lazy fill active-nav-item-class="active-tab-item">
      <b-tab >    <template slot="title">
            {{$t('businessowner.Followers') }}
            <span class="spa-color">
              {{ nFormatter( total.total_business_follower) }}
            </span>
          </template>  
          
          <Followers /></b-tab>
      <b-tab >    <template slot="title">
            {{ $t('businessowner.Following') }}
            <span class="spa-color">
              {{ nFormatter( total.total_business_following) }}
            </span>
          </template>
          
          <Following /></b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Followers from "./tabs/followers";
import Following from "./tabs/following";
import { isGuestUser } from "@/helpers";
export default {
  components: {
    Followers,
    Following
  }
  , data() {
    return {
      isGuestUser: isGuestUser,
    };
  },
   methods: {
   

      nFormatter(num) {
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
    }, 



  },
  computed: {
   

     total() {
      return this.isGuestUser()
        ? this.$store.state.businessGuest.Tcommunity
        : this.$store.state.businessOwner.Tcommunity;
    },


  },
};
</script>

<style></style>