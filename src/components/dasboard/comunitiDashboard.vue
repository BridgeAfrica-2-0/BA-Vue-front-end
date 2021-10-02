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
            <b> COMMUNITY </b> <span class="h4-color"> {{ com.total }} </span>
          </h6>
        </span>

        <b-tabs pills content-class="mt-3  f-left ">
          <b-tab active>
            <template slot="title">
              People
              <span class="spa-color">
                {{ count(business.people[0].total_people) }}
              </span>
            </template>

            <div>
              <b-row>
                <b-col class="p-2">
                  <b-tabs fill pills content-class="mt-3  f-left m-up">
                    <b-tab active>
                      <template slot="title">
                        Followers
                        <span class="spa-color">
                          {{ count(business.people[0].total_user_follower) }}
                        </span>
                      </template>

                      <div class="s-comcard">
                        <b-row>
                          <div>
                            <People
                              :people="business.people[0].user_followers"
                            />
                          </div>
                        </b-row>
                      </div>
                    </b-tab>

                    <b-tab>
                      <template slot="title">
                        Following
                        <span class="spa-color">
                          {{ count(business.people[0].total_user_following) }}
                        </span>
                      </template>

                      <div class="s-comcard">
                        <b-row>
                          <div>
                            <People
                              :people="business.people[0].user_following"
                            />
                          </div>
                        </b-row>
                      </div>
                    </b-tab>
                  </b-tabs>
                </b-col>
              </b-row>
            </div>
          </b-tab>

          <b-tab>
            <template slot="title">
              Businesses
              <span class="spa-color">
                {{ count(business.people[0].total_business) }}
              </span>
            </template>

            <div>
              <b-tabs fill pills content-class="mt-3  f-left m-up checkcheck">
                <b-tab active>
                  <template slot="title">
                    Followers
                    <span class="spa-color">
                      {{ count(business.people[0].total_business_follower) }}
                    </span>
                  </template>

                  <div class="s-comcard">
                    <b-row>
                      <div>
                        <Business
                          :business="business.business[0].business_followers"
                        />
                      </div>
                    </b-row>
                  </div>
                </b-tab>

                <b-tab>
                  <template slot="title">
                    Following
                    <span class="spa-color">
                      {{ count(business.people[0].total_business_following) }}
                    </span>
                  </template>

                  <div class="s-comcard">
                    <b-row>
                      <div>
                        <Business
                          :business="business.business[0].business_following"
                        />
                      </div>
                    </b-row>
                  </div>
                </b-tab>
              </b-tabs>
            </div>
          </b-tab>


                    <b-tab>
            <template slot="title">
              Network
              <span class="spa-color">
                {{ count(business.people[0].total_business) }}
              </span>
            </template>

            <div>
              <b-tabs fill pills content-class="mt-3  f-left m-up checkcheck">
                <b-tab active>
                  <template slot="title">
                    Followers
                    <span class="spa-color">
                      {{ count(business.people[0].total_business_follower) }}
                    </span>
                  </template>

                  <div class="s-comcard">
                    <b-row>
                      <div>
                        <Network
                          :business="business.business[0].business_followers"
                        />
                      </div>
                    </b-row>
                  </div>
                </b-tab>

                <b-tab>
                  <template slot="title">
                    Following
                    <span class="spa-color">
                      {{ count(business.people[0].total_business_following) }}
                    </span>
                  </template>

                  <div class="s-comcard">
                    <b-row>
                      <div class="p-2">
                        <Network
                          :business="business.business[0].business_following"
                        />
                      </div>
                    </b-row>
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
  computed: {
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
