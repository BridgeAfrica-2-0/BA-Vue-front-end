<template>
  <div class="mt-3">
    <div class="">
      <b-card
        class="f-left"
        style="padding:0px; margin-left: -12px;
    margin-right: -12px;"
      >
        <div v-if="isLoading">Loading .......</div>
        <div v-else-if="!isLoading && error!==null">{{ error }} </div>
        <b-tabs v-else pills content-class="mt-3 f-left">
          <b-tab title="People" active>
            <People
              :people="
                profile_community !== null ? profile_community.people[0] : null
              "
            />
          </b-tab>

          <b-tab title="Businesses">
            <Businesses
              :business="
                profile_community !== null
                  ? profile_community.business[0]
                  : null
              "
            />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import People from "./people/people";
import Businesses from "./businesses/businesses";

export default {
  name: "memberNetwork",
  components: {
    People,
    Businesses
  },
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      items: [
        { id: 1, first_name: "Fred", last_name: "Flintstone" },
        { id: 2, first_name: "Wilma", last_name: "Flintstone" },
        { id: 3, first_name: "Barney", last_name: "Rubble" },
        { id: 4, first_name: "Betty", last_name: "Rubble" },
        { id: 5, first_name: "Pebbles", last_name: "Flintstone" },
        { id: 6, first_name: "Bamm Bamm", last_name: "Rubble" },
        { id: 7, first_name: "The Great", last_name: "Gazzoo" },
        { id: 8, first_name: "Rockhead", last_name: "Slate" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" }
      ],
      profile_community: null,
      isLoading: false,
      error: null,
    };
  },
  provide() {
    return {};
  },
  created() {
    this.isLoading = true;
    console.log("Load User Profile Community start+++++++");
    this.$store
      .dispatch("profileOwnerStore/loadUserProfileCommuntity")
      .then(response => {
        console.log(
          response,
          "Load User Profile Community end response (3) +++++++"
        );

      })
      .catch(error => {
        console.log("Error from server or from browser error (2) ++++", error);
        this.error = "Error from server or from browser error";
      })
      .finally(() => {
        this.isLoading = false;
        this.profile_community = JSON.parse(
          JSON.stringify(this.$store.getters["profileOwnerStore/getProfileCommunity"])
        );
        console.log(
          "Finally Load User Profile Community +++++",
          this.profile_community
        );

      });
  },
  computed: {
    rows() {
      return this.items.length;
    },
    community(){
      return this.profile_community;
    }
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
  align-content: flex-start;
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
