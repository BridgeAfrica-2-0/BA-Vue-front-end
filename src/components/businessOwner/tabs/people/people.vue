<template>
  <div class="lalala">
    <b-tabs lazy content-class="mt-3" fill pills>
      <b-tab >    <template slot="title">
            {{$t('businessowner.Followers')}}
            <span class="spa-color">
              {{ nFormatter( total.total_user_follower) }}
            </span>
          </template>
          
          
          <Followers /></b-tab>
      <b-tab >  
        
          <template slot="title">
            {{ $t('businessowner.Following') }}
            <span class="spa-color">
              {{ nFormatter( total.total_user_following) }}
            </span>
          </template>
          
          
          <Following /></b-tab>
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



  },computed: {
    total() {
      return this.$store.state.businessOwner.Tcommunity;
    },
  },
};
</script>

<style></style>