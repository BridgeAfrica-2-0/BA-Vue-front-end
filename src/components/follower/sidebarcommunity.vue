<template>
  <div class="lalala">
    <div class=" border mt-2 ">
      <span>
        <h6 class="title m-3">
          <fas-icon class="icons" :icon="['fas', 'users']" size="lg" />
          <b> {{ $t('profilefollower.COMMUNITY') }} </b> <span class="h4-color"> {{ nFormatter(total.total_community)}} </span>
        </h6>
      </span>

      <b-tabs pills lazy content-class="mt-3  f-left ">
        <b-tab active>
          <template slot="title">
            {{ $t('profilefollower.People') }} <span class="spa-color"> {{ nFormatter(total.total_people)}}  </span>
          </template>

          <div>
            <b-row>
              <b-col>
                <b-tabs lazy fill pills content-class="mt-3  f-left m-up">
                  <b-tab active>
                    <template slot="title">
                      {{ $t('profilefollower.Followers') }} <span class="spa-color">  {{ nFormatter(total.total_user_follower)}} </span>
                    </template>

                    <div class="s-comcard"><People from="Follower"  type="Follower" /></div>
                  </b-tab>

                  <b-tab>
                    <template slot="title">
                      {{ $t('profilefollower.Following') }} <span class="spa-color">  {{ nFormatter(total.total_user_following)}}  </span>
                    </template>

                    <div class="s-comcard"><People  from="Follower"  type="Following" /></div>
                  </b-tab>
                </b-tabs>
              </b-col>
            </b-row>
          </div>
        </b-tab>

        <b-tab>
          <template slot="title">
            {{ $t('profilefollower.Businesses') }} <span class="spa-color">  {{ nFormatter(total.total_business)}} </span>
          </template>

          <div>
            <b-tabs fill lazy pills content-class="mt-3  f-left m-up checkcheck">
              <b-tab active>
                <template slot="title">
                  {{ $t('profilefollower.Followers') }} <span class="spa-color">  {{ nFormatter(total.total_business_follower)}} </span>
                </template>

                <div class="s-comcard"><Business  from="Follower"  type="Follower" /></div>
              </b-tab>

              <b-tab>
                <template slot="title">
                  {{ $t('profilefollower.Following') }} <span class="spa-color"> {{ nFormatter(total.total_business_following)}}</span>
                </template>

                <div class="s-comcard"><Business from="Follower"  type="following" /></div>
              </b-tab>
            </b-tabs>
          </div>
        </b-tab>




          <b-tab>
          <template slot="title">
            {{ $t('profilefollower.Network') }} <span class="spa-color">  {{ nFormatter(total.total_network)}}</span>
          </template>

          <div>
            <b-tabs lazy fill pills content-class="mt-3  f-left m-up checkcheck">
              <b-tab active>
                <template slot="title">
                  {{ $t('profilefollower.Followers') }} <span class="spa-color">  {{ nFormatter(total.total_network_follower)}} </span>
                </template>

                <div class="s-comcard"><Network from="Follower"  type="Follower" /></div>
              </b-tab>

              <b-tab>
                <template slot="title">
                  {{ $t('profilefollower.Following') }} <span class="spa-color">  {{ nFormatter(total.total_network_following)}} </span>
                </template>

                <div class="s-comcard"><Network  from="Follower"  type="Following" /></div>
              </b-tab>
            </b-tabs>
          </div>
        </b-tab>




      </b-tabs>
    </div>
  </div>
</template>

<script>
import Business from "@/components/owner/tabs/business";
import People from "@/components/owner/tabs/people";
import Network from "@/components/owner/tabs/network";
export default {
  name: "comunitiDashboard",

  components: {
    People,
    Business,
    Network,
  },
  
  methods:{
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
  },


  computed:{
   total(){
    return  this.$store.state.follower.Tcommunity;
   },
 

  }
};
</script>

<style>



    @media only screen and (max-width: 768px) {

      .nav-pills .nav-link {
         
         padding-left: 12px !important;
    padding-right: 12px !important;
      }
    }


.lala .nav-fill {
  margin-top: -19px;
  border: 1px solid rgba(0, 0, 0, 0.125);
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
