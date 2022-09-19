<template>
  <div class="lalala">
    <b-tabs content-class="mt-3" lazy fill active-nav-item-class="active-tab-item">
      <b-tab :title="$t('profileowner.Followers')">    <template slot="title">
            {{ $t('profileowner.Followers') }} <span class="spa-color">  {{ nFormatter(total.total_network_follower)}} </span>
          </template>    
          <Followers @BlockUser="BlockUser"/></b-tab>
      <b-tab :title="$t('profileowner.Following')">   
        
        <template slot="title">
            {{ $t('profileowner.Following') }} <span class="spa-color">  {{ nFormatter(total.total_network_following)}}  </span>
          </template>
          
          <Following @BlockUser="BlockUser"/></b-tab>
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

  	computed: {
			total() {
				return this.$store.state.profile.Tcommunity;
			},
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

    BlockUser(dataInfo) {
      console.log(dataInfo);
      this.$emit('BlockUser', dataInfo);
    },
  }
};
</script>