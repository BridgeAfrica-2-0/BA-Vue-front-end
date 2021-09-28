<template>
  <div>
    <b-row>
      <b-col cols="12" md="6">
        <b-input-group class="mb-2 px-md-3 float-right">
          <b-form-input
            aria-label="Text input with checkbox"
            placeholder="Search Something"
            v-model="searchQuery"
          ></b-form-input>

          <b-input-group-prepend is-text>
            <b-icon-search class="text-primary border-none"></b-icon-search>
          </b-input-group-prepend>
        </b-input-group>
      </b-col>
    </b-row>
    <br />

    <br />

    <b-row>
      <b-col md="12" lg="6">
        <CommunityBusiness />
      </b-col>

      <b-col md="12" lg="6">
        <CommunityBusiness />
      </b-col>
    </b-row>

    <b-row>
      <b-col
        v-for="(follower, index) in theFollowers"
        :key="index"
        md="12"
        lg="6"
      >
        <CommunityBusiness :follower="follower" />
      </b-col>
      <b-col v-if="loader" class="load">
        <b-spinner class="spin" variant="primary"></b-spinner>
      </b-col>
      <b-col v-if="followers.length < 1 && !loader" class="load">
        <p>No follower to show !!</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CommunityBusiness from "../../communitybusiness";
export default {
  components: {
    CommunityBusiness,
  },
  data: () => ({
    followers: [],
    searchQuery: "",
    loader: false,
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
        return this.getFollowers;
      }
    },

    ...mapGetters(["getFollowers"]),
  },
  beforeMount() {
    this.getFollowers();
  },
  created() {
    this.allFollowers();
  },
  methods: {
    ...mapActions(["allFollowers"]),
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
