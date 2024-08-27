<template>
  <div>
    <b-row>
      <b-col cols="12" class="mx-auto">
        <b-input-group class="mb-2 px-md-3 mx-auto">
          <b-input-group-prepend
            @click="search"
            is-text
            style="cursor:pointer;"
          >
            <b-icon-search class="text-primary border-none"></b-icon-search>
          </b-input-group-prepend>
          <b-form-input
            aria-label="Text input with checkbox"
            :placeholder="$t('memnetwork.Search_Something')"
            type="text"
            class="form-control"
            v-model="searchTitle"
          ></b-form-input>
        </b-input-group>
      </b-col>
    </b-row>
    <br />

    <b-row cols="1">
      <b-col
        class="ml-0 mr-0"
        v-for="member in displayfollowers"
        :key="member.id"
      >
        <b-skeleton-wrapper :loading="loading">
          <template #loading>
            <b-card>
              <b-skeleton width="85%"></b-skeleton>
              <b-skeleton width="55%"></b-skeleton>
              <b-skeleton width="70%"></b-skeleton>
            </b-card>
          </template>
          <div style="display:none;">
            {{ (member["communityNum"] = nFormatter(member.followers)) }}
          </div>
          <CommunityNetworks :member="member" @BlockUser="BlockUser" />
        </b-skeleton-wrapper>
      </b-col>
    </b-row>
    <b-row>
      <b-col col="12">
        <infinite-loading @infinite="infiniteHandler">
          <div class="text-red" slot="no-more">
            {{ $t("memnetwork.No_More_Request") }}
          </div>
          <div class="text-red" slot="no-results">
            {{ $t("memnetwork.No_More_Request") }}
          </div>
        </infinite-loading>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CommunityNetworks from "../../communitynetwork";
export default {
  components: {
    CommunityNetworks
  },
  data() {
    return {
      url: null,
      searchTitle: "",
      page: 0,
      loading: false,
      networkfollowers: [],
      displayfollowers: []
    };
  },
  mounted() {
    this.url = this.$route.params.id;
  },
  methods: {
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
      if (this.searchTitle) {
        this.loading = true;
        this.page -= 1;
        console.log("searching...");
        console.log(this.searchTitle);
        this.infiniteHandler();
      } else {
        console.log("Empty search title: " + this.searchTitle);
        this.infiniteHandler();
      }
    },

    infiniteHandler($state) {
      console.log("loop");
      const keyword = this.getRequestDatas(this.searchTitle);
      console.log("keyword: " + keyword);
      let formData = new FormData();
      formData.append("keyword", keyword);
      console.log("network/" + this.url + "/network/follower/" + this.page);
      this.axios
        .post(
          "network/" + this.url + "/network/follower/" + this.page,
          formData
        )
        .then(({ data }) => {
          console.log(data);
          console.log(this.page);
          if (keyword) {
            this.displayfollowers = data.data;
            this.searchTitle = "";
            $state.complete();
          } else {
            if (data.data.length) {
              this.page += 1;
              console.log(this.page);
              console.log(...data.data);
              this.networkfollowers.push(...data.data);
              this.displayfollowers = this.networkfollowers;
              $state.loaded();
            } else {
              $state.complete();
            }
          }
        })
        .catch(err => {
          console.log({ err: err });
        });
      this.loading = false;
    },

    BlockUser(user_id) {
      this.loading = true;
      console.log("network/" + this.url + "/lock/user/" + user_id);
      this.axios
        .delete("network/" + this.url + "/lock/user/" + user_id)
        .then(response => {
          console.log(response);
          this.blockUsers();
          this.loading = false;
          this.flashMessage.show({
            status: "success",
            message: "User blocked"
          });
        })
        .catch(err => {
          console.log({ err: err });
          this.loading = false;
          this.flashMessage.show({
            status: "error",
            message: "Unable to blocked User"
          });
        });
    }
  }
};
</script>

<style></style>
