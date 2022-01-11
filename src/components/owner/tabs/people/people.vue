<template>
  <div class="lalala">
    <b-tabs content-class="mt-3" lazy fill pills>
      <b-tab > 
        
         <template slot="title">
            {{ $t('profileowner.Followers') }} <span class="spa-color">  {{ nFormatter(total.total_user_follower)}} </span>
          </template>
          
          <Followers @BlockUser="BlockUser"/></b-tab>
      <b-tab >  
        
         <template slot="title">
            {{ $t('profileowner.Following') }} <span class="spa-color">  {{ nFormatter(total.total_user_following)}}  </span>
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

  methods:{
    BlockUser(dataInfo) {
      console.log(dataInfo);
      this.$emit('BlockUser', dataInfo);
    },


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

       
  }
};
</script>

<style></style>
