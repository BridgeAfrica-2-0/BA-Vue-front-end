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
        v-for="(follower, index) in theFollowers"
        :key="index"
        md="12"
        lg="6"
      >
        <CommunityBusiness :follower="follower" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import CommunityBusiness from "../../communitybusiness";
export default {
  components: {
    CommunityBusiness,
  },
  data: () => ({
    followers: [],
    searchQuery: "",
  }),
  computed: {
    theFollowers() {
      if (this.searchQuery) {
        return this.followers.filter(item => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(v => item.name.toLowerCase().includes(v));
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
      axios.get("/community/business-following/5").then(res => {
        console.log(res.data.data);
        this.followers = res.data.data.data;
      });
    },
  },
};
</script>

<style></style>
