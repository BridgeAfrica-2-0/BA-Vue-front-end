<template>
  <div>
    <b-row>
      <b-col cols="12" md="6">
        <b-input-group class="mb-2 px-md-3 float-right">
          <b-form-input
            aria-label="Text input with checkbox"
            :placeholder="$('general.Search_Something')"
            v-model="searchQuery"
          ></b-form-input>

          <b-input-group-prepend is-text>
            <b-icon-search class="text-primary border-none"></b-icon-search>
          </b-input-group-prepend>
        </b-input-group>
      </b-col>
    </b-row>

    <br />

    <b-row>
      <b-col
        v-for="(follower, index) in theFollowers"
        :key="index"
        md="12"
        lg="6"
      >
        <CommunityMembers :follower="follower" />
      </b-col>
      <b-col v-if="loader" class="load">
        <b-spinner class="spin" variant="primary"></b-spinner>
      </b-col>
      <b-col v-if="followers.length < 1 && !loader" class="load">
        <p>No Follower to show !!</p>
      </b-col>
    </b-row>
    <br />

    <b-row class="p-0">
      <b-col md="12" lg="6" class="p-0">
        <CommunityMembers />
      </b-col>

      <b-col md="12" lg="6" class="p-0">
        <CommunityMembers />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CommunityMembers from "../../communityMember";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    CommunityMembers,
  },
  data: () => ({
    loader: false,
    followers: [],
    searchQuery: "",
  }),
  computed: {
    theFollowers() {
      if (this.searchQuery) {
        return this.followers.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.getPeopleFollowers;
      }
    },

    ...mapGetters(["getPeopleFollowers"]),
  },
  beforeMount() {
    this.getPeopleFollowers();
  },
  created() {
    this.gettingPeopleFollowers();
  },
  methods: {
    ...mapActions(["gettingPeopleFollowers"]),
  },
};
</script>

<style>
.load {
  display: flex;
  justify-content: center;
}

.spin {
  width: 7rem;
  height: 7rem;
}
</style>
