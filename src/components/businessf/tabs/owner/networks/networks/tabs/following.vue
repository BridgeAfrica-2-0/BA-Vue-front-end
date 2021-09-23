<template>
  <div>

    <b-row>
      <b-col cols="12" class="mx-auto">
        <b-input-group class="mb-2 px-md-3 mx-auto">
          <b-input-group-prepend @onclick="search" is-text>
            <b-icon-search class="text-primary border-none"></b-icon-search>
          </b-input-group-prepend>
          <b-form-input
            aria-label="Text input with checkbox"
            placeholder="Search Something"
            type="text"
            class="form-control"
            v-model="searchTitle"
            @keyup="search"
          ></b-form-input>
        </b-input-group>
      </b-col>
    </b-row>
    <br/>


    <b-row>
      <b-col v-if="networkfollowings.total == 0" >
        No Community Members
      </b-col>
      <b-col col="6" class="ml-0 mr-0"
        :class="{ active: index == currentIndex }"
        v-for="(member, index) in networkfollowings.data"
        :key="index"
        v-else
      >
        <div style="display:none;">{{member['communityNum'] = nFormatter(member.followers)}}</div>
        <CommunityNetwork :member="member" />
      </b-col>
    </b-row>
    <b-row  v-if="networkfollowings.total  > perPage">
      <b-col cols="12">
        <span class="float-right">
          <b-pagination
            v-model="currentPage"
            :total-rows="networkfollowings.total"
            :per-page="perPage"
            @change="handlePageChange"
            aria-controls="my-table"
          ></b-pagination>
        </span>
      </b-col>
    </b-row>
  </div>
</template>

<script>

import CommunityNetwork from "../../communitynetwork"
export default {
  components: {
    CommunityNetwork
  },
  data() {
    return {
      url:null,
      perPage: null,
      currentPage: null,
      searchTitle: "",
      currentIndex: -1,
    };
  },
  computed: {
    networkfollowings() {
      return this.$store.state.networkProfileCommunity.networkfollowings;
    }
  },
  mounted(){
    this.url = this.$route.params.id;
    this.perpage = this.businessfollowings.per_page;
    this.networkFollowings();
  },
  methods:{
    nFormatter: function(num) {
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
    },
    getRequestDatas(searchTitle, currentPage) {
      let data = "";
      if (searchTitle) {
        data = "/"+searchTitle;
      }else if (currentPage) {
        data = "/?page="+currentPage;
      }
      console.log(data);
      return data;
    },
    search() {
      console.log("searching...");
      console.log(this.searchTitle);
      this.networkFollowings()
    },
    handlePageChange(value) {
      // this.loading = true;
      this.currentPage = value;
      console.log(this.currentPage);
      this.networkFollowings();
    },

    networkFollowings() {
      let data = this.getRequestDatas(this.searchTitle, this.currentPage)
    this.$store
      .dispatch("networkProfileCommunity/getNetworkFollowings", this.url+"/network/following"+data)
      .then(() => {
        console.log('ohh year: network following');
      })
      .catch(err => {
        console.log({ err: err });
      });
    },
  }
};
</script>

<style>

</style>