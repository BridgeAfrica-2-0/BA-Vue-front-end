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
        <p>No follower to show !!</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import CommunityMembers from "../../communityMember";
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
        return this.followers;
      }
    },
  },
  beforeMount() {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("access_token");

    this.getFollowers();
  },
  methods: {
    getFollowers() {
      this.loader = true;
      axios
        .get("/community/people-follower/5")
        .then((res) => {
          this.loader = false;
          this.followers = res.data.data.data;
        })
        .catch((err) => {
          console.log(err);
          this.loader = false;
        });
    },
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
