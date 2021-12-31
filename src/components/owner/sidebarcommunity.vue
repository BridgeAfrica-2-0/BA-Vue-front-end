<template>
  <div class="lalala">
    <div class=" border mt-2 ">
      <!-- {{total}} -->
      <span>  
        <h6 class="title m-3">
          <fas-icon class="icons" :icon="['fas', 'users']" size="lg" />
          <b> {{ $t('profileowner.COMMUNITY') }}</b> 
          <span class="h4-color"> 
            {{ nFormatter(total.total_people+total.total_business+total.total_network)}} 
          </span>
        </h6>
      </span>

      <b-tabs pills lazy content-class="mt-3  f-left ">
        <b-tab active>
          <template slot="title">
            {{ $t('profileowner.People') }} <span class="spa-color"> {{ nFormatter(total.total_people)}}  </span>
          </template>

          <div>  
            <b-row>
              <b-col>
                <b-tabs  lazy fill pills content-class="mt-3  f-left m-up">
                  <b-tab active>
                    <template slot="title">
                      {{ $t('profileowner.Followers') }} <span class="spa-color">  {{ nFormatter(total.total_user_follower)}} </span>
                    </template>

                    <div class="s-comcard"><People   type="Follower" /></div>
                  </b-tab>

                  <b-tab>
                    <template slot="title">
                      {{ $t('profileowner.Following') }} <span class="spa-color">  {{ nFormatter(total.total_user_following)}}  </span>
                    </template>

                    <div class="s-comcard"><People  type="Following" /></div>
                  </b-tab>
                </b-tabs>
              </b-col>
            </b-row>
          </div>
        </b-tab>

        <b-tab>
          <template slot="title">
            {{ $t('profileowner.Businesses') }} <span class="spa-color">  {{ nFormatter(total.total_business)}} </span>
          </template>

          <div>
            <b-tabs lazy fill pills content-class="mt-3  f-left m-up checkcheck">
              <b-tab active>
                <template slot="title">
                  {{ $t('profileowner.Followers') }} <span class="spa-color">  {{ nFormatter(total.total_business_follower)}} </span>
                </template>

                <div class="s-comcard"><Business type="Follower" /></div>
              </b-tab>

              <b-tab>
                <template slot="title">
                  {{ $t('profileowner.Following') }} <span class="spa-color"> {{ nFormatter(total.total_business_following)}}</span>
                </template>

                <div class="s-comcard"><Business type="following" /></div>
              </b-tab>
            </b-tabs>
          </div>
        </b-tab>




          <b-tab>
          <template slot="title">
            {{ $t('profileowner.Network') }} <span class="spa-color">  {{ nFormatter(total.total_network)}}</span>
          </template>

          <div>
            <b-tabs lazy fill pills content-class="mt-3  f-left m-up checkcheck">
              <b-tab active>
                <template slot="title">
                  {{ $t('profileowner.Followers') }} <span class="spa-color">  {{ nFormatter(total.total_network_follower)}} </span>
                </template>

                <div class="s-comcard"><Network type="Follower" /></div>
              </b-tab>

              <b-tab>
                <template slot="title">
                  {{ $t('profileowner.Following') }} <span class="spa-color">  {{ nFormatter(total.total_network_following)}} </span>
                </template>

                <div class="s-comcard"><Network type="Following" /></div>
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
    
    data() {
      return {
        id: null,
      }
    },

		computed: {
			total() {
				return this.$store.state.follower.Tcommunity;
			},
		},

    mounted() {
      this.id = this.$route.params.id ? this.$route.params.id : "";
      this.getTcommunity();
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
      getTcommunity() {
        this.$store
          .dispatch("follower/Tcommunity", this.id)
          .then(() => {
            console.log("ohh yeah");
          })
          .catch((err) => {
            console.log({ err: err });
          });
      },
		}
	};
</script>
