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
        v-for=" (member, index) in displayfollowing"
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
        <div style="display:none;">{{member['communityNum'] = nFormatter(member.followers)}}</div>
        <div style="display:none;">{{member['type'] = "user"}}</div>

          <Person  callerType='network'  :index="index"  :canBlock="canBlock"  :key="member.id" :person="member"  @BlockUser="BlockUser"  @getTotalCommunity='UserDetails'  />
      
        </b-skeleton-wrapper>
      </b-col>
    </b-row>
    <b-row >
      <b-col col="12">
        <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading">
          <div class="text-red" slot="no-more">{{ $t('network.No_More_Request') }}</div>
          <div class="text-red" slot="no-results">{{ $t('network.No_More_Request') }}</div>
        </infinite-loading>
      </b-col>
    </b-row>
    
    
  </div>
</template>

<script>
import CommunityMembers from "../../communityMember"
import Person from "@/components/Person";
export default {
  components: {
    Person
  },
  data() {
    return {
      url:null,
      searchTitle: "",
      page: 1,
      loading: false,
      peoplefollowing: [],
      displayfollowing: [],

       displayfollowers: []
    };
  },

   computed:{
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
        this.page = 1;
        console.log("searching...");
        console.log(this.searchTitle);
        this.$nextTick(() => {
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
        });
      }else{
        console.log("Empty search title: "+this.searchTitle);
        this.$nextTick(() => {
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
        });
      }
    },
    
    infiniteHandler($state) {
      console.log("loop");
      const keyword = this.getRequestDatas(this.searchTitle);
      console.log('keyword: '+keyword);
      let formData = new FormData();
      formData.append('keyword', keyword);
     
      this.axios
      .post("network/"+this.url+"/people/following/"+this.page, formData)
      .then(({ data }) => {
      
        if(keyword){
          this.displayfollowing = data.data;
          this.searchTitle = "";
          $state.complete();
        }else{
          if (data.data.length) {
            this.page += 1;
            
            this.peoplefollowing.push(...data.data);
            this.displayfollowing = this.peoplefollowing;
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

     BlockUser(user_id, index) {

       
     
      this.axios.post("network/"+this.url+"/lock/user/"+user_id)
      .then(response => {
        console.log(response);
        // this.blockUsers();
        this.UserDetails();
         this.$delete(this.displayfollowing,index);
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
    },


    

 UserDetails() {   
      this.$store
        .dispatch("networkProfileCommunitySidebar/getUserDetails", this.url)   
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
        id: Comdata.id,
        type: Comdata.type,
        network_id: this.url
      };
      console.log("data", data)

      await this.axios
        .post(url, data)
        .then(response => {
          console.log("response", response);
          Comdata.is_follow = nextFollowState;

           this.UserDetails();

           this.flashMessage.show({
          status: "success",
          message: response.request.message
        });
        
        })
        .catch((err) => {
          console.log({ err: err });

          this.flashMessage.show({
          status: "error",
          message: err.message
        });

        });
    },

  }
};
</script>

<style>

</style>