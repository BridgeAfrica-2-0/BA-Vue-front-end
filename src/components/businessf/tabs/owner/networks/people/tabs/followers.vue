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

    <b-row cols="2">
      <b-col v-if="peoplefollowers == 0" >
        No Community Members
      </b-col>
      <b-col class="ml-0 mr-0"
        v-for="member in peoplefollowers"
        :key="member.id"
        v-else
      >
        <b-skeleton-wrapper :loading="loading">
          <template #loading>
            <b-card>
              <b-skeleton width="85%"></b-skeleton>
              <b-skeleton width="55%"></b-skeleton>
              <b-skeleton width="70%"></b-skeleton>
            </b-card>
          </template>
        <div style="display:none;">{{member['communityNum'] = nFormatter(member.followers)}}</div>
        <CommunityMembers :member="member" />
        </b-skeleton-wrapper>
      </b-col>
    </b-row>
    <b-row >
      <b-col col="12">
        <infinite-loading @infinite="infiniteHandler">
          <div class="text-red" slot="no-more">No More Request</div>
          <div class="text-red" slot="no-results">No More Request</div>
        </infinite-loading>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CommunityMembers from "../../communityMember"
export default {
  components: {
    CommunityMembers
  },
  data() {
    return {
      url:null,
      searchTitle: "",
      page: 0,
      loading: false,
      peoplefollowers: []
    };
  },
  mounted(){
    this.url = this.$route.params.id;
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

    getRequestDatas(searchTitle) {
      let data = "";
      if (searchTitle) {
        data = searchTitle;
      }
      console.log(data);
      return data;
    },

    search() {
      this.loading = true;
      this.page = 0;
      console.log("searching...");
      console.log(this.searchTitle);
      this.infiniteHandler();
    },
    
    infiniteHandler($state) {
      console.log("loop");
      const data = this.getRequestDatas(this.searchTitle);
      console.log('keyword: '+data);
      let formData = new FormData();
      formData.append('keyword', data);
      console.log("network/"+this.url+"/people/follower/"+this.page);
      this.axios
      .post("network/"+this.url+"/people/follower/"+this.page, formData)
      .then(({ data }) => {
       console.log(data);
       console.log(this.page);
        if (data.data.length) {
          this.page += 1;
          console.log(this.page);
          console.log(...data.data);
          this.peoplefollowers.push(...data.data);
          $state.loaded();
        } else {
          $state.complete();
        }
      }) .catch((err) => {
          console.log({ err: err });
      })
    },

  }
};
</script>

<style>

</style>