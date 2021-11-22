<template>
  <div class="lalala">
    <div class=" border mt-2 ">
      <span>  
        <h6 class="title m-3">
          <fas-icon class="icons" :icon="['fas', 'users']" size="lg" />
          <b> {{ $t('profileowner.COMMUNITY') }} </b> <span class="h4-color"> {{ nFormatter(total.total_community)}} </span>
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
	import Business from "@/components/follower/tabs/business";
	import People from "@/components/follower/tabs/people";
	import Network from "@/components/follower/tabs/network";
	export default {
		name: "comunitiDashboard",

		components: {
			People,
			Business,
			Network,
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
				return this.$store.state.follower.Tcommunity;
			},
		},
	};
</script>
