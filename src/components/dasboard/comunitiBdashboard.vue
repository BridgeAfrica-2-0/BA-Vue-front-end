<template>
  <div class="lalla">
    <b-card
      class="border-0 p-0 m-0"
      style="
    padding: 3px;"
    >  
      <div class=" border shadow   p-tab p-3">
        <span>
          <h6 class="title">
            <fas-icon class="icons" :icon="['fas', 'users']" size="lg" />
            <b class="ml-2">  {{ $t('dashboard.Community') }} </b> <span class="h4-color"> {{totalcommunity.total}} </span>
          </h6>
        </span>

        <b-tabs lazy pills content-class="mt-3  f-left ">
          <b-tab active>
            <template slot="title">
              {{ $t('dashboard.People') }}
              <span class="spa-color">
                {{peoplecommunity.total_people}} 
              </span>
            </template>

            <div>
              <b-row>
                <b-col class="p-2">
                  <b-tabs lazy fill pills content-class="mt-3  f-left m-up">

                    <b-tab active>
                      <template slot="title">
                        {{ $t('dashboard.Followers') }}
                        <span class="spa-color">
                          {{peoplecommunity.total_followers}}
                        </span>
                      </template>

                      <div class="s-comcard">
                      
                          <div>
                            <People
                              :people="peoplecommunity.user_followers" 
                            />
                          </div>  
                        
                      </div>
                    </b-tab>

                    <b-tab>
                      <template slot="title">
                        {{ $t('dashboard.Following') }}
                        <span class="spa-color">
                          {{peoplecommunity.total_following}} 
                        </span>
                      </template>

                      <div class="s-comcard">
                      
                          <div>
                            <People
                              :people="peoplecommunity.user_following"
                            />
                          </div>
                        
                      </div>
                    </b-tab>
                  </b-tabs>
                </b-col>
              </b-row>
            </div>
          </b-tab>

          <b-tab>
            <template slot="title">
              {{ $t('dashboard.Businesses') }}
              <span class="spa-color">
                {{ count(businesscommunity.total_Business) }}
              </span>
            </template>

            <div>
              <b-tabs lazy fill pills content-class="mt-3  f-left m-up checkcheck">
                <b-tab active>
                  <template slot="title">
                     {{ $t('dashboard.Followers') }}
                    <span class="spa-color">
                      {{ count(businesscommunity.total_followers) }}
                    </span>
                  </template>

                  <div class="s-comcard">
                  
                      <div>
                        <Business
                          :business="businesscommunity.Business_followers" 
                        />
                      </div>
                   
                  </div>
                </b-tab>

                <b-tab>
                  <template slot="title">
                    {{ $t('dashboard.Following') }}
                    <span class="spa-color">
                     {{businesscommunity.totat_following}}
                    </span>
                  </template>

                  <div class="s-comcard">
                
                      <div>
                        <Business
                          :business="businesscommunity.Business_following"
                        />
                      </div>
                  
                  </div>
                </b-tab>
              </b-tabs>
            </div>
          </b-tab>
         


          <b-tab>
            <template slot="title">
             {{ $t('dashboard.Network') }}
              <span class="spa-color">
               0
              </span>
            </template>

            <div>
              <b-tabs lazy fill pills content-class="mt-3  f-left m-up checkcheck">
                <b-tab active>
                  <template slot="title">
                   {{ $t('dashboard.Followers') }}
                    <span class="spa-color">
                     0
                    </span>
                  </template>

                  <div class="s-comcard">
                   
                      <div>
                        <Network
                         :network="[]" 
                        />
                      </div>
                  
                  </div>
                </b-tab>

                <b-tab>
                  <template slot="title">
                    {{ $t('dashboard.Following') }}
                    <span class="spa-color">
                 0
                    </span>
                  </template>

                  <div class="s-comcard">
                   
                      <div class="p-2">
                        <Network
                          :network="[]" 
                        />
                      </div>
                   
                  </div>
                </b-tab>
              </b-tabs>
            </div>
          </b-tab>

        </b-tabs>
      </div>
    </b-card>
  </div>
</template>

<script>
import People from "@/components/dasboard/communityBmember";
import Business from "@/components/dasboard/communityBbusiness";
import Network from "@/components/dasboard/communityBnetwork";

export default {
  name: "comunitiDashboard",

  components: {
    People,
    Business,
    Network
  },
  computed: {   
    business() {
      return this.$store.getters["dashboardcommunity/getProfileCommunity"];
    },
    com() {
      return this.$store.getters["dashboardcommunity/getcom"];
    },


     peoplecommunity() {

      return  this.$store.state.businessOwner.communityPeople;  

    
    },



      totalcommunity() {

      return  this.$store.state.businessOwner.communityTotal;  

    
    },



      businesscommunity() {

      return  this.$store.state.businessOwner.CommunityBusiness;  

    
    }


  },
  created() {
    this.$store
      .dispatch("dashboardcommunity/getdetails")

      .then(() => {
        console.log("the response");
      })
      .catch(err => {
        console.log({ err: err });
      });
    this.$store
      .dispatch("dashboardcommunity/gettotalcommunity")

      .then(() => {
        console.log("the response");
      })
      .catch(err => {
        console.log({ err: err });
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
    }
  }
};
</script>

<style scoped>
.card-body {
  padding: 0px;
}
</style>

<style>
.lala .nav-fill {
  margin-top: -19px;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.s-comcard {
  height: 350px;
  overflow: auto;
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
