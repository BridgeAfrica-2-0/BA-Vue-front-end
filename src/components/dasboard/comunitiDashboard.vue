<template>
    <div class="lalala"  >
    <b-card class=" border  blecrr shadow border ">  
      <span>
        <h6 class=" m-3">
          <fas-icon class="icons" :icon="['fas', 'users']" size="lg" />
          <span class="ml-2">{{ $t('dashboard.COMMUNITY') }}  </span> <span class="h4-color"> {{ nFormatter(total.total_community) }} </span>
        </h6>
      </span>

      <b-tabs class="pr-2 pl-2"  lazy content-class="mt-3 p-1 f-left " active-nav-item-class="active-tab-item">
       
        <b-tab active>
          <template slot="title">
            {{ $t('dashboard.People') }} <span class="spa-color"> {{ nFormatter(total.total_people) }} </span>
          </template>

          <div>
            <b-row>
              <b-col>
      
                <b-tabs lazy fill justified class="pr-2 pl-2" content-class="mt-3  f-left m-up"  active-nav-item-class="active-tab-item" >
                  <b-tab active>
                    <template slot="title">
                      {{ $t('dashboard.Followers') }} <span class="spa-color"> {{ nFormatter(total.total_user_follower) }} </span>
                    </template>

                    <div class="s-comcard"><People type="Follower" /></div>
                  </b-tab>

                  <b-tab>
                    <template slot="title">
                      {{ $t('dashboard.Following') }} <span class="spa-color"> {{ nFormatter(total.total_user_following) }} </span>
                    </template>

                    <div class="s-comcard"><People type="Following" /></div>
                  </b-tab>
                </b-tabs>
              </b-col>
            </b-row>
          </div>
        </b-tab>

        <b-tab>
          <template slot="title">
            {{ $t('dashboard.Businesses') }} <span class="spa-color"> {{ nFormatter(total.total_business) }} </span>
          </template>

          <div>             
            <b-tabs lazy fill   justified class="pr-2 pl-2" content-class="mt-3  f-left m-up checkcheck" active-nav-item-class="active-tab-item">
              <b-tab active>
                <template slot="title">
                  {{ $t('dashboard.Followers') }} <span class="spa-color"> {{ nFormatter(total.total_business_follower) }} </span>
                </template>

                <div class="s-comcard"><Business type="Follower" /></div>
              </b-tab>

              <b-tab>
                <template slot="title">
                  {{ $t('dashboard.Following') }} <span class="spa-color"> {{ nFormatter(total.total_business_following) }}</span>
                </template>

                <div class="s-comcard"><Business type="following" /></div>
              </b-tab>
            </b-tabs>
          </div>
        </b-tab>

        <b-tab>
          <template slot="title">
            {{ $t('dashboard.Network') }} <span class="spa-color"> {{ nFormatter(total.total_network) }}</span>
          </template>

          <div>   
            <b-tabs class="pr-2 pl-2" lazy fill justified content-class="mt-3  f-left m-up checkcheck" active-nav-item-class="active-tab-item">
              <b-tab active>
                <template slot="title">
                  {{ $t('dashboard.Followers') }} <span class="spa-color"> {{ nFormatter(total.total_network_follower) }} </span>
                </template>

                <div class="s-comcard"><Network type="Follower" /></div>
              </b-tab>

              <b-tab>
                <template slot="title">
                  {{ $t('dashboard.Following') }} <span class="spa-color"> {{ nFormatter(total.total_network_following) }} </span>
                </template>

                <div class="s-comcard"><Network type="Following" /></div>
              </b-tab>
            </b-tabs>
          </div>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import People from "@/components/dasboard/communityMember";
import Business from "@/components/dasboard/communitybusiness";
import Network from "@/components/dasboard/communitynetwork";

export default {
  name: "comunitiDashboard",

  components: {
    People,
    Business,
    Network,
  },

  mounted(){
    
      this.$store
      .dispatch("profile/Tcommunity", '') 
      .then((response) => {
       
      })
      .catch((error) => {
       
      });




      

 
      this.$store
      .dispatch("profile/UcommunityFollower", null)
      .then((response) => {
       
      })
      .catch((error) => {
      
      });



      
      this.$store
      .dispatch("profile/UcommunityFollowing", null)
      .then((response) => {
       
      })
      .catch((error) => {
      
      });

     
   
      this.$store
      .dispatch("profile/BcommunityFollower", null)
      .then((response) => {
       
      })
      .catch((error) => {
       
      });

     
      this.$store
      .dispatch("profile/BcommunityFollowing", null)
      .then((response) => {
       
      })
      .catch((error) => {
      
      });



      
      this.$store
      .dispatch("profile/NcommunityFollower", null)
      .then((response) => {
       
      })
      .catch((error) => {
       
      });

      
      this.$store
      .dispatch("profile/NcommunityFollowing", null)
      .then((response) => {
       
      })
      .catch((error) => {
      
      });

  },
  computed: {

        total() {
      return this.$store.state.profile.Tcommunity;
    },

    business() {
      return this.$store.getters["dashboardcommunity/getProfileCommunity"];
    },
    com() {
      return this.$store.getters["dashboardcommunity/getcom"];
    }
  },
  created() {
    this.$store
      .dispatch("dashboardcommunity/getdetails")

      .then(() => {
       
      })
      .catch(err => {
        
      });

    // this.$store
    //   .dispatch("dashboardcommunity/gettotalcommunity")

    //   .then(() => {
    //    
    //   })
    //   .catch(err => {
    //
    //   });


      this.$store
      .dispatch('profile/Tcommunity', null)
      .then((response) => {})
      .catch((error) => {
       
      });



  },
  methods: {
    count(number) {
      if (number >= 1000000) {
        return number / 1000000 + "M";
      }
      if (number >= 1000) {
        return number / 1000 + "K";
      } else return number;
    },


       nFormatter(num) {
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
      }
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
      }
      return num;
    },

  }
};
</script>

<style scoped>

 .blecrr .card-body{
  padding-left: 4px !important;

   padding-right: 2px !important;
}

</style>

<style> 
.lala .nav-fill {
  margin-top: -19px;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.s-comcard {
 height: 415px !important;
  overflow: hidden !important;
  overflow-x: hidden;
}

.spa-color {
  color: white;
  margin-left: 10px;
  font-size: 14px;
}

.h4-color {
  color: orangered;
  margin-left: 10px;
  font-size: 14px;
}

.m-up {
  margin-top: -5px;
}

@media only screen and (min-width: 768px) {
  .title {
    font-size: 20px;
  }
}

@media only screen and (min-width: 768px) {
  .title {
    font-size: 16px;
  }
}
</style>
