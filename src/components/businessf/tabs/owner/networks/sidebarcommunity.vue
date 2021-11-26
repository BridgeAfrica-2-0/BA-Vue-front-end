<template>
  <div class="lalala">
    <div class="border mt-2">
      <span>
        <h6 class="title m-3">
          <fas-icon class="icons" :icon="['fas', 'users']" size="lg" />
          <b> {{ $t('network.COMMUNITY') }} </b> <span class="h4-color"> {{nFormatter(userdetails.total_people+businessdetails.total_Business+networkdetails.total_Network)}}</span>
        </h6>
      </span>
      <b-tabs pills content-class="mt-3  f-left ">
        <b-tab active>
          <template slot="title">
           {{ $t('network.People') }}  <span class="spa-color"> {{nFormatter(userdetails.total_people)}} </span>
          </template>
          <div>
            <b-row>
              <b-col>
                <b-tabs fill lazy pills content-class="mt-3  f-left m-up">
                  <b-tab active>
                    <template slot="title">
                      {{ $t('network.Followers') }} <span class="spa-color"> {{nFormatter(userdetails.total_followers)}} </span>
                    </template>
                    <div class="s-comcard"><People :peoples="userdetails.user_followers" @handleFollow="handleFollow" /></div>
                  </b-tab>
                  <b-tab>
                    <template slot="title">
                      {{ $t('network.Following') }} <span class="spa-color"> {{nFormatter(userdetails.totat_following)}} </span>
                    </template>
                    <div class="s-comcard"><People :peoples="userdetails.user_following" @handleFollow="handleFollow" /></div>
                  </b-tab>
                </b-tabs>
              </b-col>
            </b-row>
          </div>
        </b-tab>
        <b-tab>
          <template slot="title">
            {{ $t('network.Businesses') }} <span class="spa-color"> {{nFormatter(businessdetails.total_Business)}} </span>
          </template>
          <div>
            <b-tabs fill pills lazy content-class="mt-3  f-left m-up checkcheck">
              <b-tab active>
                <template slot="title">
                  {{ $t('network.Followers') }} <span class="spa-color"> {{nFormatter(businessdetails.total_followers)}} </span>
                </template>
                <div class="s-comcard"><Business :businesses="businessdetails.Business_followers" @handleFollow="handleFollow" /></div>
              </b-tab>
              <b-tab>
                <template slot="title">
                  {{ $t('network.Following') }} <span class="spa-color"> {{nFormatter(businessdetails.totat_following)}} </span>
                </template>
                <div class="s-comcard"><Business :businesses="businessdetails.Business_following" @handleFollow="handleFollow" /></div>
              </b-tab>
            </b-tabs>
          </div>
        </b-tab>
        <b-tab>
          <template slot="title">
            {{ $t('network.Networks') }} <span class="spa-color">{{nFormatter(networkdetails.total_Network)}}</span>
          </template>
          <div>
            <b-tabs fill pills lazy content-class="mt-3  f-left m-up checkcheck">
              <b-tab active>
                <template slot="title">
                  {{ $t('network.Followers') }} <span class="spa-color"> {{nFormatter(networkdetails.total_followers)}} </span>
                </template>
                <!-- <div class="s-comcard">{{networkdetails.Network_followers}}</div> -->
                <div class="s-comcard"><Network :networks="networkdetails.Network_followers" @handleFollow="handleFollow" /></div>
              </b-tab>
              <b-tab>
                <template slot="title">
                   {{ $t('network.Following') }}<span class="spa-color"> {{nFormatter(networkdetails.totat_following)}} </span>
                </template>
                <!-- <div class="s-comcard">{{networkdetails.Network_following}}</div> -->
                <div class="s-comcard"><Network :networks="networkdetails.Network_following" @handleFollow="handleFollow" /></div>
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
import Network from "./network";
export default {
  name: "sidebarcommunity",
  components: {
    People,
    Business,
    Network
  },
  data() {
    return {
      url: null,
    };
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
    }
  },
  mounted(){
    this.url = this.$route.params.id;
    this.UserDetails();
    this.businessDetails();
    this.networkDetails();
  },
  methods:{    
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
    },

    UserDetails() {
    this.$store
      .dispatch("networkProfileCommunitySidebar/getUserDetails", this.url)
      .then(() => {
        console.log('ohh year');
      })
      .catch(err => {
        console.log({ err: err });
      });
    },
    businessDetails() {
    this.$store
      .dispatch("networkProfileCommunitySidebar/getBusinessDetails", this.url)
      .then(() => {
        console.log('ohh year');
      })
      .catch(err => {
        console.log({ err: err });
      });
    },
    networkDetails() {
    console.log('networkDetails');
    this.$store
      .dispatch("networkProfileCommunitySidebar/getNetworkDetails", this.url)
      .then(() => {
        console.log('ohh year');
      })
      .catch(err => {
        console.log({ err: err });
      });
    },
    async handleFollow(Comdata) {
      console.log("handleFollow", Comdata)
      const url = Comdata.is_follow === 0 ? `/follow-community` : `/unfollow`;
      console.log("uri", url)
      const nextFollowState = Comdata.is_follow === 0 ? 1 : 0;
      const data = {
        id: Comdata.id,
        type: Comdata.type,
      };

      await this.axios
        .post(url, data)
        .then(response => {
          console.log("response", response);
          Comdata.is_follow = nextFollowState;
        })
        .catch(err => console.log(err));
    },
  }
};
</script>

<style >
.lala .nav-fill {
  margin-top: -19px;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

  .s-cardd{
    overflow-x: hidden;
  }


   .lala .nav-fill{
   
    margin-top: -19px;
     border: 1px solid rgba(0, 0, 0, 0.125);
  }








.spa-color{
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
