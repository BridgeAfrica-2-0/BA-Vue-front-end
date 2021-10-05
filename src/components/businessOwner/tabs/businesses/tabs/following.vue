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
      <b-col
        v-for="(following, index) in theFollowing"
        :key="index"
        md="12"
        lg="6"
      >
        <CommunityBusiness :following="following" />
      </b-col>
      <b-col v-if="loader" class="load">
        <b-spinner class="spin" variant="primary"></b-spinner>
      </b-col>
      <b-col v-if="following.length < 1 && !loader" class="load">
        <p>No one is following you !!</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CommunityBusiness from "../../communitybusiness";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    CommunityBusiness,
  },
  data: () => ({
    loader: false,
    following: [],
    searchQuery: "",
  }),
  computed: {
    ...mapGetters({
      getFollowing: "businessOwner/getFollowing",
    }),

    theFollowing() {
      if (this.searchQuery) {
        return this.following.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.following;
      }
    },
  },
  beforeMount() {
    this.getFollowing();
    this.following = this.getFollowing();
  },
  methods: {
    ...mapActions({
      getFollowing: "businessOwner/getFollowing",
    }),
  },
};
</script>

<style>
.spin {
  width: 7rem;
  height: 7rem;
}
.load {
  display: flex;
  justify-content: center;
}
</style>
