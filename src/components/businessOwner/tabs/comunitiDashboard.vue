<template>
  <div class="lalala">
    <div class=" border mt-2 ">
      <span>
        <h6 class="title m-3">
          <fas-icon class="icons" :icon="['fas', 'users']" size="lg" />
          <b> {{ $t('businessowner.COMMUNITY') }}</b> <span class="h4-color"> {{ nFormatter(total.total) }} </span>
        </h6>
      </span>

      <b-tabs pills lazy content-class="mt-3  f-left ">
        <b-tab active>
          <template slot="title">
            {{ $t("businessowner.People") }}
            <span class="spa-color">
              {{ nFormatter(total.total_user_following + total.total_user_follower) }}
            </span>
          </template>

          <div>
            <b-row>
              <b-col>
                <b-tabs lazy fill pills content-class="mt-3  f-left m-up">
                  <b-tab active>
                    <template slot="title">
                      {{ $t("businessowner.Followers") }}
                      <span class="spa-color">
                        {{ nFormatter(total.total_user_follower) }}
                      </span>
                    </template>

                    <div class="s-comcard"><People type="Follower" /></div>
                  </b-tab>

                  <b-tab>
                    <template slot="title">
                      {{ $t("businessowner.Following") }}
                      <span class="spa-color">
                        {{ nFormatter(total.total_user_following) }}
                      </span>
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
            {{ $t("businessowner.Businesses") }}
            <span class="spa-color">
              {{ nFormatter(total.total_business_follower + total.total_business_following) }}
            </span>
          </template>

          <div>
            <b-tabs
              lazy
              fill
              pills
              content-class="mt-3  f-left m-up checkcheck"
            >
              <b-tab active>
                <template slot="title">
                  {{ $t("businessowner.Followers") }}
                  <span class="spa-color">
                    {{ nFormatter(total.total_business_follower) }}
                  </span>
                </template>

                <div class="s-comcard"><Business type="Follower" /></div>
              </b-tab>

              <b-tab>
                <template slot="title">
                  {{ $t("businessowner.Following") }}
                  <span class="spa-color">
                    {{ nFormatter(total.total_business_following) }}</span
                  >
                </template>

                <div class="s-comcard"><Business type="following" /></div>
              </b-tab>
            </b-tabs>
          </div>
        </b-tab>

        <b-tab>
          <template slot="title">
            {{ $t("businessowner.Network") }}
            <span class="spa-color">
              {{ nFormatter(total.total_network_follower + total.total_network_following) }}</span
            >
          </template>

          <div>
            <b-tabs
              lazy
              fill
              pills
              content-class="mt-3  f-left m-up checkcheck"
            >
              <b-tab active>
                <template slot="title">
                  {{ $t("businessowner.Followers") }}
                  <span class="spa-color">
                    {{ nFormatter(total.total_network_follower) }}
                  </span>
                </template>

                <div class="s-comcard"><Network type="Follower" /></div>
              </b-tab>

              <b-tab>
                <template slot="title">
                  {{ $t("businessowner.Following") }}
                  <span class="spa-color">
                    {{ nFormatter(total.total_network_following) }}
                  </span>
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
import Business from "@/components/businessOwner/tabs/business";
import People from "@/components/businessOwner/tabs/people";
import Network from "@/components/businessOwner/tabs/network";
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
      return this.$store.state.businessOwner.Tcommunity;
    },
  },
};
</script>

<style>
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
