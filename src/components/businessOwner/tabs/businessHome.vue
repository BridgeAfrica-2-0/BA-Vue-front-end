<template>
  <div>
    <b-row>
      <b-col md="12" lg="6" xl="4">
        <Intro />

        <comunitiDashboard />

        <br />

        <b-card v-if="!isPremium">
          <div class="text-center">
            <span class="username text-center mb-3">
              <b> {{ $t("businessowner.Upgrade_Your_Business_Account") }} </b>
            </span>
          </div>

          <div class="container">
            <span class="text text-left">
              <br />
              {{
                $t(
                  "businessowner.Make_more_money_by_unlocking_your_marketplace_features"
                )
              }}
              {{
                $t(
                  "businessowner.where_you_can_sell_products_and_services_directly_to_customer"
                )
              }}
              {{ $t("businessowner.and_recieve_instant_payments") }}
            </span>
          </div>
          <img src="@/assets/img/buynow.png" class="buynow" alt="buy now" />
          <div class="container text-center">
            <img
              src="@/assets/img/fruits.jpg"
              class="img-fluid banner"
              alt="Kitten"
            />

            <b-button
              @click="$emit('pageChange')"
              variant="primary"
              class="text-center mt-3"
            >
              {{ $t("businessowner.Upgrade_Now") }}
            </b-button>
          </div>
        </b-card>
      </b-col>

      <b-col md="12" lg="6" xl="8" class="postpadding  mt-2  mt-xl-0 ">
        <Post />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Intro from "../intro";
import comunitiDashboard from "./comunitiDashboard";
//import Personalise from "./personalise";
import Post from "../ownerPost";
import { isPremium } from "@/helpers";
export default {
  name: "posts",
  components: {
    Intro,

    comunitiDashboard,
    // Personalise,
    Post,
  },

  data() {
    return {
      isPremium: isPremium(),
    };
  },
};
</script>

<style scoped>
.buynow {
  width: 120px;
  margin-bottom: -80px;
  margin-left: -10px;
  position: relative;
}

@media only screen and (min-width: 1200px) {
  .postpadding {
    padding-left: 70px;
    padding-right: 60px;
  }
}
</style>
