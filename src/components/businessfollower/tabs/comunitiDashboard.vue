<template>
  <div class="lalaa">
    <div class=" border mt-2 ">
      <span>
        <h6 class="title m-3">
          <fas-icon class="icons" :icon="['fas', 'users']" size="lg" />
          <b> COMMUNITY </b> <span class="h4-color">  </span>
        </h6>
      </span>

      <b-tabs lazy pills content-class="mt-3  f-left ">
        <b-tab active>
          <template slot="title">     
            People <span class="spa-color">  </span>
          </template>  

          <div>
            <b-row>
              <b-col>
                <b-tabs lazy fill pills content-class="mt-3  f-left m-up">
                  <b-tab active>
                    <template slot="title">
                      Followers <span class="spa-color">  </span>
                    </template>

                    <div class="s-comcard"><People  :people="people.people_followers" /></div>
                  </b-tab>

                  <b-tab>
                    <template slot="title">
                      Following <span class="spa-color">  </span>
                    </template>

                    <div class="s-comcard"><People  :people="people.people_following" /></div>
                  </b-tab>
                </b-tabs>
              </b-col>
            </b-row>
          </div>
        </b-tab>

        <b-tab >
          <template slot="title">
            Businesses <span class="spa-color">  </span>
          </template>

          <div>
            <b-tabs lazy fill pills content-class="mt-3  f-left m-up checkcheck">
              <b-tab active>
                <template slot="title">
                  Followers <span class="spa-color">  </span>
                </template>

                <div class="s-comcard"><Business :business='business.business_followers' /></div>
              </b-tab>

              <b-tab>
                <template slot="title">
                  Following <span class="spa-color">  </span>
                </template>

                <div class="s-comcard"><Business   :business='business.business_following' /></div>
              </b-tab>
            </b-tabs>
          </div>
        </b-tab>






         <b-tab>
          <template slot="title">
            Networks <span class="spa-color">  </span>
          </template>

          <div>
            <b-tabs lazy fill pills content-class="mt-3  f-left m-up checkcheck">
              <b-tab active>
                <template slot="title">
                  Followers <span class="spa-color">  </span>
                </template>

                <div class="s-comcard"><Network :network='network.business_followers' /></div>
              </b-tab>

              <b-tab>
                <template slot="title">
                  Following <span class="spa-color">  </span>
                </template>

                <div class="s-comcard"><Network   :network='network.business_following' /></div>
              </b-tab>
            </b-tabs>
          </div>
        </b-tab>

      </b-tabs>
    </div>
  </div>
</template>

<script>
import People from "./people";
import Business from "./business";
import Network from "./communitynetwork";

export default {
  name: "comunitiDashboard",

  components: {
    People,
    Business,
    Network
  },

  methods:{
       
       community() {
         
      this.$store
        .dispatch("profile/profilecommunity", null)
        .then(() => {
          console.log("hey yeah");
        })
        .catch(err => {
          console.log({ err: err });
        });
    },

  },
  mounted() {
      this.isLoading = true;

        
    console.log("Load User Profile Community start+++++++");
    this.community();
    
    },

  computed: {
    rows() {
      return this.items.length;
    },

    business(){
           
           return this.$store.state.profile.CommunityBusiness

    },


     people() {
      return this.$store.state.profile.communityPeople;
    },

     network(){
           
           return this.$store.state.profile.CommunityBusiness

    },


  }
  
};
</script>

<style>
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
