<template>
  <div>

    <b-row>
      <b-col cols="12" class="mx-auto">
        <b-input-group class="mb-2 px-md-3 mx-auto">
          <b-input-group-prepend @click="search" is-text style="cursor:pointer;">
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
    <br/>

    <b-row cols="1">
      <b-col class="ml-0 mr-0"
        v-for="(item, index) in displayfollowing"
        :key="index"
      >
        <b-skeleton-wrapper :loading="loading" >
          <template #loading>
            <b-card>
              <b-skeleton width="85%"></b-skeleton>
              <b-skeleton width="55%"></b-skeleton>
              <b-skeleton width="70%"></b-skeleton>
            </b-card>
          </template>
        <div style="display:none;">{{item['communityNum'] = nFormatter(item.followers)}}</div>
        <div style="display:none;">{{item['type'] = "network"}}</div>
       
         <Network callerType='network' :network="item" :key="item.id" :canBlock="canBlock" :index="index" @getTotalCommunity='networkDetails' />
   

        </b-skeleton-wrapper>
      </b-col>
    </b-row>
    <b-row >
      <b-col col="12">
        <infinite-loading @infinite="infiniteHandler">
          <div class="text-red" slot="no-more">{{ $t('network.No_More_Request') }}</div>
          <div class="text-red" slot="no-results">{{ $t('network.No_More_Request') }}</div>
        </infinite-loading>
      </b-col>
    </b-row>

    
  </div>
</template>

<script>
import Network from "@/components/Network";
export default {
  components: {
    Network
  },
  data() {
    return {
      url:null,
      searchTitle: "",
      page: 1,
      loading: false,
      networkfollowing: [],
      displayfollowing: []
    };
  },

   computed:{
    from() {
      return this.$route.name;
    },
 
    canBlock(){
     
      if(this.from=='networks'|| this.from=='NetworkEditors' ){
        return true;
      }else{
        return false;
      }
    },

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
      if(this.searchTitle){
        this.loading = true;
        this.page -= 1;
        console.log("searching...");
        console.log(this.searchTitle);
        this.infiniteHandler();
      }else{
        console.log("Empty search title: "+this.searchTitle);
        this.infiniteHandler();
      }
    },
    
    infiniteHandler($state) {
      console.log("loop");
      const keyword = this.getRequestDatas(this.searchTitle);
      console.log('keyword: '+keyword);
      let formData = new FormData();
      formData.append('keyword', keyword);
      console.log("network/"+this.url+"/network/following/"+this.page);
      this.axios
      .post("network/"+this.url+"/network/following/"+this.page, formData)
      .then(({ data }) => {
       console.log(data);
       console.log(this.page);
        if(keyword){
          this.displayfollowing = data.data;
          this.searchTitle = "";
          $state.complete();
        }else{
          if (data.data.length) {
            this.page += 1;
            console.log(this.page);
            console.log(...data.data);
            this.networkfollowing.push(...data.data);
            this.displayfollowing = this.networkfollowing;
            $state.loaded();
          } else {
            $state.complete();
          }
        }
      }) .catch((err) => {
          console.log({ err: err });
      })
      this.loading = false;
    },

    


    
    BlockUser(user_id, index ) {
    
      console.log("network/"+this.url+"/lock/network/"+user_id);
      this.axios.post("network/"+this.url+"/lock/network/"+user_id)
      .then(response => {
        console.log(response);

        this.networkDetails();
         this.$delete(this.displayfollowing,index);


        this.loading = false;
        this.flashMessage.show({
          status: "success",
          message: "Network blocked"
        });
      })
      .catch(err => {
        console.log({ err: err });
        this.loading = false;
        this.flashMessage.show({
          status: "error",
         message: err.response.data.message,
        });
      });
    },

    
   networkDetails() {
      console.log("networkDetails");
      this.$store
        .dispatch("networkProfileCommunitySidebar/getNetworkDetails", this.url)
        .then(() => {
          console.log("ohh year");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },





    async handleFollow(Comdata) {
      console.log("handleFollow", Comdata)
      const url = Comdata.is_follow === 0 ? `/follow-community` : `/unfollow`;
      console.log("uri", url)
      const nextFollowState = Comdata.is_follow === 0 ? 1 : 0;
      const data = {
        networkId: this.url,
        id: Comdata.id,
        type: Comdata.type,
      };
      console.log("data", data)

      await this.axios
        .post(url, data)
        .then(response => {
          console.log("response", response);
          Comdata.is_follow = nextFollowState;
           this.networkDetails();
        })
        .catch(err => console.log(err));
    },

  }
};
</script>

<style>

</style>