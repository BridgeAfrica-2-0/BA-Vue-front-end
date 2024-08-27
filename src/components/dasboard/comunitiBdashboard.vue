<template>
  <div class="lalla lalala">
    <b-card
      class="border-0 p-0 m-0"
      style="
    padding: 3px;"
    >
      <div class=" border shadow   p-tab p-3">
        <span>
          <h6 class="title">
            <fas-icon class="icons" :icon="['fas', 'users']" size="lg" />
            <span class="ml-2"> {{ $t("dashboard.Community") }} </span>
            <span class="h4-color"> {{ nFormatter(total.total) }} </span>
          </h6>
        </span>

        <b-tabs
          lazy
          class="pr-2 pl-2"
          content-class="mt-3 p-1 f-left "
          active-nav-item-class="active-tab-item"
        >
          <b-tab active>
            <template slot="title">
              {{ $t("dashboard.People") }}
              <span class="spa-color">
                {{ nFormatter(total.total_people) }}
              </span>
            </template>

            <div>
              <div class="p-2">
                <b-tabs
                  lazy
                  fill
                  justified
                  class="pr-2 pl-2"
                  content-class="mt-3  f-left m-up"
                  active-nav-item-class="active-tab-item"
                >
                  <b-tab active>
                    <template slot="title">
                      {{ $t("dashboard.Followers") }}
                      <span class="spa-color">
                        {{ nFormatter(total.total_user_follower) }}
                      </span>
                    </template>

                    <div class="s-comcard">
                      <div>
                        <People type="Follower" />
                      </div>
                    </div>
                  </b-tab>

                  <b-tab>
                    <template slot="title">
                      {{ $t("dashboard.Following") }}
                      <span class="spa-color">
                        {{ nFormatter(total.total_user_following) }}
                      </span>
                    </template>

                    <div class="s-comcard">
                      <div>
                        <People type="Following" />
                      </div>
                    </div>
                  </b-tab>
                </b-tabs>
              </div>
            </div>
          </b-tab>

          <b-tab>
            <template slot="title">
              {{ $t("dashboard.Businesses") }}
              <span class="spa-color">
                {{ nFormatter(total.total_business) }}
              </span>
            </template>

            <div>
              <b-tabs
                lazy
                fill
                justified
                class="pr-2 pl-2"
                content-class="mt-3  f-left m-up"
                active-nav-item-class="active-tab-item"
              >
                <b-tab active>
                  <template slot="title">
                    {{ $t("dashboard.Followers") }}
                    <span class="spa-color">
                      {{ nFormatter(total.total_business_follower) }}
                    </span>
                  </template>

                  <div class="s-comcard">
                    <div>
                      <Business type="Follower" />
                    </div>
                  </div>
                </b-tab>

                <b-tab>
                  <template slot="title">
                    {{ $t("dashboard.Following") }}
                    <span class="spa-color">
                      {{ nFormatter(total.total_business_following) }}
                    </span>
                  </template>

                  <div class="s-comcard">
                    <div>
                      <Business type="Following" />
                    </div>
                  </div>
                </b-tab>
              </b-tabs>
            </div>
          </b-tab>

          <b-tab>
            <template slot="title">
              {{ $t("dashboard.Network") }}
              <span class="spa-color">
                {{ nFormatter(total.total_network) }}
              </span>
            </template>

            <div>
              <b-tabs
                lazy
                fill
                justified
                class="pr-2 pl-2"
                content-class="mt-3  f-left m-up"
                active-nav-item-class="active-tab-item"
              >
                <b-tab active>
                  <template slot="title">
                    {{ $t("dashboard.Followers") }}
                    <span class="spa-color">
                      {{ nFormatter(total.total_network_follower) }}
                    </span>
                  </template>

                  <div class="s-comcard">
                    <div>
                      <Network type="Follower" />
                    </div>
                  </div>
                </b-tab>

                <b-tab>
                  <template slot="title">
                    {{ $t("dashboard.Following") }}
                    <span class="spa-color">
                      {{ nFormatter(total.total_network_following) }}
                    </span>
                  </template>

                  <div class="s-comcard">
                    <div class="p-2">
                      <Network type="Following" />
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

    businessId() {
      return this.$store.state.dashboard.dBusinessId;
    },

    peoplecommunity() {
      return this.$store.state.businessOwner.communityPeople;
    },

    total() {
      return this.$store.state.businessOwner.Tcommunity;
    },

    businesscommunity() {
      return this.$store.state.businessOwner.CommunityBusiness;
    }
  },
  created() {
    this.businessCommunityTotal();

    this.$store
      .dispatch("dashboardcommunity/getdetails")

      .then(() => {})
      .catch(err => {});
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

    businessCommunityTotal() {
      this.$store
        .dispatch("businessOwner/businessCommunityTotal", this.businessId)
        .then(() => {})
        .catch(err => {});
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
    }
  }
};
</script>

<style scoped>
.card-body {
  padding: 0px;
}

.s-comcard {
  overflow: auto;
  overflow-x: hidden;
  height: 431px !important;
}
</style>

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
