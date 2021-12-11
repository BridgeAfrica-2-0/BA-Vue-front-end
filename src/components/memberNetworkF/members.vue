<template>
  <div class="mt-3">
    <b-row>
      <b-col cols="12" class="mx-auto">
        <b-input-group class="mb-2 px-md-3 mx-auto">
          <b-input-group-prepend @onclick="search" is-text style="cursor:pointer;">
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

    <b-row class="mt-4">
      <b-col cols="12">
        <h6 class="font-weight-bolder">
          Network Admins ({{nFormatter(admins.length)}})
        </h6>
        <hr width="100%" />
        <b-skeleton-wrapper :loading="loading">
          <template #loading>
            <b-card>
              <b-skeleton width="85%"></b-skeleton>
              <b-skeleton width="55%"></b-skeleton>
              <b-skeleton width="70%"></b-skeleton>
            </b-card>
          </template>
          <div class="scroll" v-if="admins.length != 0">
            <div v-for="admin in admins" :key="admin.id">
              <p class="">
                 <router-link :to="'/profile/'+admin.user_id">
                <span class="">
                 
                  <b-avatar
                    class="d-inline-block"
                    variant="primary"
                    :src="admin.profile_picture"
                    :text="admin.fullname.charAt(0)"
                    size="3.5rem"
                  ></b-avatar>
                  <h5 class="m-0 bold username d-inline-block ml-2">
                    {{admin.fullname}}
                  </h5>
                </span>

                 </router-link>
              </p>
            </div>
          </div>
          <div v-else>No Result On Admins</div>
        </b-skeleton-wrapper>
      </b-col>
    </b-row>

    <b-row class="mt-4">
      <b-col cols="12" >
        <h6 class="font-weight-bolder">
          Bussiness ({{nFormatter(business.length)}})
        </h6>
        <hr width="100%" />
        <b-skeleton-wrapper :loading="loading">
          <template #loading>
            <b-card>
              <b-skeleton width="85%"></b-skeleton>
              <b-skeleton width="55%"></b-skeleton>
              <b-skeleton width="70%"></b-skeleton>
            </b-card>
          </template>

         
          <div class="scroll" v-if="business.length != 0">
            <div v-for="busines in business" :key="busines.id">
              <p class="">
                <router-link :to="'/business/'+busines.business_id">
                <span class="">
                  <b-avatar
                    class="d-inline-block"
                    variant="primary"
                    square
                    :src="busines.logo_path"
                    :text="busines.name.charAt(0)"
                    size="3.5rem"
                  ></b-avatar>
                  <h5 class="m-0  username d-inline-block ml-2">
                    {{busines.name}}
                  </h5>
                </span>
                </router-link>
              </p>
            </div>
          </div>
          <div v-else>No Result On Networks</div>
        </b-skeleton-wrapper>
      </b-col>
    </b-row>

    <b-row class="mt-4" >
      <b-col cols="12">
        <h6 class="font-weight-bolder">
          All Members ({{nFormatter(members.length)}})
        </h6>
        <hr width="100%" />
        <b-skeleton-wrapper :loading="loading">
          <template #loading>
            <b-card>
              <b-skeleton width="85%"></b-skeleton>
              <b-skeleton width="55%"></b-skeleton>
              <b-skeleton width="70%"></b-skeleton>
            </b-card>
          </template>
          <div v-for="member in members" :key="member.user_id" >
            <p class="">

              <router-link :to="'/profile/'+member.user_id">

              <span class="">
                <b-avatar
                  class="d-inline-block"
                  variant="primary"
                  :src="member.profile_picture"
                  :text="member.fullname.charAt(0)"
                  size="3.5rem"
                ></b-avatar>
                <h5 class="m-0 username d-inline-block ml-2">
                  {{member.fullname}}
                </h5>
              </span>

              </router-link>
            </p>
          </div>
        </b-skeleton-wrapper>
      </b-col>
      <b-col col="12">
        <infinite-loading   :identifier="infiniteId"  ref="infiniteLoading"   @infinite="infiniteHandler">
          <div class="text-red" slot="no-more">No More Request</div>
          <div class="text-red" slot="no-results">No More Request</div>
        </infinite-loading>
      </b-col>
    </b-row>

    

  </div>
</template>

<script>
export default {
  name: "member",
  data() {
    return {
      url:null,
      members:[],
      perPage: null,
      page: 1,
      currentPage: null,
      searchTitle: "",
      infiniteId : 1,
      currentIndex: -1,
      loading: false
    };
  },
  computed: {
    old_members() {
      return this.$store.state.networkProfileMembers.members;
    },
    admins() {
      return this.$store.state.networkProfileMembers.admins;
    },
    business() {
      return this.$store.state.networkProfileMembers.business;
    }
  },
  mounted(){
    this.url = this.$route.params.id
    this.getAdmins()
    this.getBusiness()
  },
  methods:{

    nFormatter(num) {
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
      }
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
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

    infiniteHandler($state) {
     
      const data = this.getRequestDatas(this.searchTitle);
      console.log('keyword: '+data);
     
      let url='';
      if(data==null) {
     url="network/"+this.url+"/members/list/"+this.page+"?keyword="+data;

      }else{
         url="network/"+this.url+"/members/list/"+this.page;
      }
    
    console.log(url);
      this.axios
        .post(url)
        .then(({ data }) => {
        
        console.log(this.page);
        if (data.data.length) {
          this.page += 1;
        
        
          this.members.push(...data.data);
          $state.loaded();
        } else {
          $state.complete();
        }
      }) .catch((err) => {
          console.log({ err: err });
      })
    },



    getAdmins() {
      this.loading = true;
      const data = this.getRequestDatas(this.searchTitle);
      console.log('keyword: '+data);
      this.$store
        .dispatch("networkProfileMembers/getadmins", {
          'path':this.url+"/members/admin",
          'keyword':data
          })
        .then(() => {
          console.log('Admins Available');
          this.loading = false;
        })
        .catch(err => {
          console.log({ err: err });
          this.loading = false;
        });
    },
 
    getBusiness() {
      this.loading = true;
      const data = this.getRequestDatas(this.searchTitle);
      this.$store
        .dispatch("networkProfileMembers/getbusiness", {
          'path':this.url+"/members/business",
          'keyword':data
          })
        .then(() => {
          console.log('Business Available');
          this.loading = false;
        })
        .catch(err => {
          console.log({ err: err });
          this.loading = false;
        });
    },
    search() {
      // this.loading = true;
      this.members=[];
      this.loading = true;
      this.page = 1;
      console.log("searching...");
      console.log(this.searchTitle);
      this.infiniteId += 1;
      this.getAdmins();
      this.getBusiness();
    },




  }
};
</script>

<style scoped>
hr {
  border: solid 1px dimgray;
}
.scroll{
  max-height: 200px;
  overflow-y: scroll;
  scrollbar-width: thin;
}

</style>