<template>
  <div class="mt-3">
    <div class="">
      <b-card
        class="f-left"
        style="padding: 0px; margin-left: -12px; margin-right: -12px"
      >
        <b-tabs lazy pills content-class="mt-3 f-left">
          <b-tab active>
            <template slot="title">
              {{ $t("profileowner.People") }}
              <span class="spa-color">
                {{ nFormatter(total.total_people) }}
              </span>
            </template>

            <People @BlockUser="BlockUser" />
          </b-tab>

          <b-tab>
            <template slot="title">
              {{ $t("profileowner.Businesses") }}
              <span class="spa-color">
                {{ nFormatter(total.total_business) }}
              </span>
            </template>

            <Businesses @BlockUser="BlockUser" />
          </b-tab>

          <b-tab>
            <template slot="title">
              {{ $t("profileowner.Network") }}
              <span class="spa-color">
                {{ nFormatter(total.total_network) }}
              </span>
            </template>

            <Network @BlockUser="BlockUser" />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import People from "./people/people";
import Businesses from "./businesses/businesses";
import Network from "./network/network";

export default {
  name: "memberNetwork",
  components: {
    People,
    Businesses,
    Network
  },

  computed: {
    total() {
      return this.$store.state.follower.Tcommunity;
    }
  },

  data() {
    return {
      perPage: 3,
      currentPage: 1
    };
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
    }
  },
  mounted() {
    this.isLoading = true;

    console.log("Load User Profile Community start+++++++");
  }
};
</script>

<style scoped>
hr {
  border: solid 1px dimgray;
}

.btn {
  background-color: #fff;
  color: #e75c18;
  border: solid 1px #e75c18;
}

.btn:hover {
  color: #fff;
  border: none;
  background-color: #e75c18;
}

.f-left {
  text-align: left;
  align-content: left;
}
@media only screen and (max-width: 768px) {
  .options {
    position: relative;
    left: -75px;
  }
}

.card-body {
  padding: 2px;
}
</style>
