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
            :placeholder="$t('network.Search_Something')"
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
        v-for="(item, index) in displayfollowers"
        :key="index"
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
            {{ (item["communityNum"] = nFormatter(item.followers)) }}
          </div>
          <div style="display:none;">{{ (item["type"] = "business") }}</div>
                  
    <Business  :canBlock="canBlock"  callerType='network'  :key="item.id"  :index="index" :business="item" @getTotalCommunity='businessDetails'  @BlockUser="BlockUser"  />
   
        </b-skeleton-wrapper>
      </b-col>
    </b-row>
    <b-row>
      <b-col col="12">
        <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading">
          <div class="text-red" slot="no-more">
            {{ $t("network.No_More_Request") }}
          </div>
          <div class="text-red" slot="no-results">
            {{ $t("network.No_More_Request") }}
          </div>
        </infinite-loading>
      </b-col>
    </b-row>

    <!--  -->
  </div>
</template>

<script>
import Business from "@/components/Business";
export default {
  components: {
    Business,
  },
  data() {
    return {
      url: null,
      searchTitle: "",
      page: 1,
      loading: false,
      businessfollowers: [],
      displayfollowers: [],
    };
  },

   computed:{
    canBlock(){
     
     if(this.$route.name=='networks'|| this.$route.name=='NetworkEditors' ){
        return true;
      }else{
        return false;
      }
    },
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
        console.log("searching...");
        console.log(this.searchTitle);
        this.$nextTick(() => {
          this.page = 1;
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
        });
      } else {
        console.log("Empty search title: " + this.searchTitle);
        this.businessfollowers = [];
        this.$nextTick(() => {
          this.page = 1;
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
        });
      }
    },

    infiniteHandler($state) {
      console.log("loop");
      const keyword = this.getRequestDatas(this.searchTitle);
      console.log("keyword: " + keyword);
      let formData = new FormData();
      formData.append("keyword", keyword);
      console.log("network/" + this.url + "/business/follower/" + this.page);
      // let lien = "";
      // if (keyword == "") {
      //   lien = "network/" + this.url + "/business/follower/" + this.page;
      // } else {
      //   lien ="network/"+this.url +"/business/follower/"+this.page +"," +formData;
      // }

      this.axios
        .post("network/"+this.url +"/business/follower/"+this.page, formData)
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
              this.businessfollowers.push(...data.data);
              this.displayfollowers = this.businessfollowers;
              console.log("----", this.displayfollowers);
              $state.loaded();
            } else {
              $state.complete();
            }
          }
        })
        .catch((err) => {
          console.log({ err: err });
        });
      this.loading = false;
    },

    BlockUser(user_id, index) {
     
      console.log("network/" + this.url + "/lock/business/" + user_id);
      this.axios
        .post("network/" + this.url + "/lock/business/" + user_id)
        .then((response) => {
          console.log(response);
          
          this.loading = false;

          this.businessDetails();
         this.$delete(this.displayfollowers,index);


          this.flashMessage.show({
            status: "success",
            message: "Business blocked",
          });
        })
        .catch((err) => {
          console.log({ err: err });
          this.loading = false;
          this.flashMessage.show({
            status: "error",
            message: err.response.data.message,
          });
        });
    },



   businessDetails() {
      this.$store
        .dispatch("networkProfileCommunitySidebar/getBusinessDetails", this.url)
        .then(() => {
        
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },



    async handleFollow(Comdata) {
      document.getElementById("followbtn" + Comdata.id).disabled = true;
      const url = Comdata.is_follow === 0 ? `/follow-community` : `/unfollow`;
      console.log("uri", url);
      const nextFollowState = Comdata.is_follow === 0 ? 1 : 0;
      const data = {
        id: Comdata.id,
        type: Comdata.type,
        network_id: this.url
      };

      await this.axios
        .post(url, data)
        .then((response) => {
          console.log("response", response);
          Comdata.is_follow = nextFollowState;
           document.getElementById("followbtn" + Comdata.id).disabled = true;
          this.businessDetails();
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
