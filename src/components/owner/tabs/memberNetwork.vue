<template>
  <div class="mt-3">
    <div class="">
      <b-card
        class="f-left"
        style="padding: 0px; margin-left: -12px; margin-right: -12px"
      >
        <b-tabs pills content-class="mt-3 f-left">
          <b-tab :title="$t('profileowner.People')" active>
            <People @BlockUser="BlockUser" />
          </b-tab>

          <b-tab :title="$t('profileowner.Businesses')">
            <Businesses @BlockUser="BlockUser" />
          </b-tab>

          <b-tab :title="$t('profileowner.Network')">
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
    Network,
  },
  data() {
    return {
      perPage: 3,
      currentPage: 1,
    };
  },

  methods: {
    community() {
      this.$store
        .dispatch("profile/profilecommunity", null)
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
  

  },
  mounted() {
    this.isLoading = true;

    console.log("Load User Profile Community start+++++++");
    this.community();
  },
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
