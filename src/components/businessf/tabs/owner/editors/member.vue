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
            :placeholder="$t('general.Search_Something')"
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
          {{ $t('general.Network_Admins') }} ({{nFormatter(admins.length)}})
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
                <span class="float-right mt-1">
                  <b-dropdown
                    size="lg"
                    variant="link"
                    toggle-class="text-decoration-none"
                    no-caret
                  >
                    <template #button-content>
                      <b-icon-three-dots-vertical></b-icon-three-dots-vertical
                      ><span class="sr-only">{{ $t('general.Settings') }}</span>
                    </template>
                    <b-dropdown-item href="#" @click="removeAsAdmin(admin.user_id)">
                      <b-icon-trash-fill></b-icon-trash-fill>{{ $t('general.Remove_as_Admin') }} 
                    </b-dropdown-item>
                    <b-dropdown-item href="#" @click="removeFromNetworks(admin.user_id)">
                      <b-icon-trash-fill></b-icon-trash-fill> {{ $t('general.Remove_From_Networks') }}
                    </b-dropdown-item>
                  </b-dropdown>
                </span>
              </p>
            </div>
          </div>
          <div v-else>{{ $t('general.No_Result_On_Admins') }}</div>
        </b-skeleton-wrapper>
      </b-col>
    </b-row>

    <b-row class="mt-4">
      <b-col cols="12" >
        <h6 class="font-weight-bolder">
          {{ $t('general.Bussiness') }} ({{nFormatter(business.length)}})
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
                <span class="float-right mt-1">
                  <b-dropdown
                    size="lg"
                    variant="link"
                    toggle-class="text-decoration-none"
                    no-caret
                  >
                    <template #button-content>
                      <b-icon-three-dots-vertical></b-icon-three-dots-vertical
                      ><span class="sr-only">Settings</span>
                    </template>
                    <b-dropdown-item href="#" @click="removeFromNetworks(busines.business_id)">
                      <b-icon-trash-fill></b-icon-trash-fill> {{ $t('general.Remove_From_Networks') }}
                    </b-dropdown-item>
                  </b-dropdown>
                </span>
              </p>
            </div>
          </div>
          <div v-else>{{ $t('general.No_Result_On_Networks') }}</div>
        </b-skeleton-wrapper>
      </b-col>
    </b-row>

    <b-row class="mt-4" >
      <b-col cols="12">
        <h6 class="font-weight-bolder">
          {{ $t('general.All_Members') }} ({{nFormatter(members.length)}})
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
          <div v-for="member in members" :key="member.id" >
            <p class="">
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
              <span class="float-right mt-1">
                <b-dropdown
                  size="lg"
                  variant="link"
                  toggle-class="text-decoration-none"
                  no-caret
                >
                  <template #button-content>
                    <b-icon-three-dots-vertical></b-icon-three-dots-vertical
                    ><span class="sr-only">Settings</span>
                  </template>
                  <b-dropdown-item href="#" @click="makeAdmin(member.user_id)">
                    <b-icon-person-plus-fill></b-icon-person-plus-fill>{{ $t('general.Make_Admin') }} 
                  </b-dropdown-item>
                  <b-dropdown-item href="#" @click="removeFromNetworks(member.user_id)">
                    <b-icon-trash-fill></b-icon-trash-fill> {{ $t('general.Remove_From_Networks') }}
                  </b-dropdown-item>
                </b-dropdown>
              </span>
            </p>
          </div>
        </b-skeleton-wrapper>
      </b-col>
      <b-col col="12">
        <infinite-loading @infinite="infiniteHandler" ref="infiniteHandler" :identifier="infiniteId">
          <div class="text-red" slot="no-more">{{ $t('general.No_More_Request') }}</div>
          <div class="text-red" slot="no-results">{{ $t('general.No_More_Request') }}</div>
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
      perPage: null,
      page: 0,
      currentPage: null,
      searchTitle: "",
      currentIndex: -1,
      loading: false
    };
  },
  computed: {
    members() {
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
      console.log("loop");
      const data = this.getRequestDatas(this.searchTitle);
      console.log('keyword: '+data);
      let formData = new FormData();
      formData.append('keyword', data);
      this.axios
      .post("network/"+this.url+"/members/list/"+this.page, formData)
      .then(({ data }) => {
       console.log(data);
       console.log(this.page);
        if (data.data.length) {
        this.page += 1;
        console.log(this.page);
        console.log(...data.data);
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
    // getAdmins() {
    //   this.loading = true;
    //   console.log("getAdmins function");
    //   const data = this.getRequestDatas(this.searchTitle);
    //   console.log('keyword: '+data);
    //   let formData = new FormData();
    //   formData.append('keyword', data);
    //   this.axios
    //   .get("network/"+this.url+"/members/admin/"+this.page, formData)
    //   .then(({ data }) => {
    //     console.log(data);
    //     console.log(this.page);
    //     console.log(...data.data);
    //     // this.admins = data.data;
    //     this.admins.push(...data.data);
    //   }) .catch((err) => {
    //       console.log({ err: err });
    //   })
    // },
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
      this.loading = true;
      this.page -= 1;
      console.log("searching...");
      console.log(this.searchTitle);
      this.$refs.infiniteLoading('$InfiniteLoading:reset');
      this.getAdmins();
      this.getBusiness();
    },
    makeAdmin: function(user_id){
      this.loading = true;
      this.axios.put("network/"+this.url+"/make/admin/"+user_id)
      .then(() => {
        console.log('ohh yeah');
        this.searchTitle = "";
        this.getMembers();
        this.getAdmins();
        this.getBusiness();
        this.loading = false;
        this.flashMessage.show({
          status: "success",
          message: this.$t('general.The_Member_Is_Now_Admin')
        });
      })
      .catch(err => {
        console.log({ err: err });
        this.loading = false;
        this.flashMessage.show({
          status: "error",
          message: this.$t('general.Unable_To_Set_Member_As_Admin')
        });
      });
    },
    removeAsAdmin: function(user_id){
      this.loading = true;
      this.axios.put("network/"+this.url+"/remove/admin/"+user_id)
      .then(() => {
        console.log('ohh yeah');
        this.searchTitle = "";
        this.getMembers();
        this.getAdmins();
        this.getBusiness();
        this.loading = false;
        this.flashMessage.show({
          status: "success",
          message: this.$t('general.Member_Successfully_Removed_As_Admin')
        });
      })
      .catch(err => {
        console.log({ err: err });
        this.loading = false;
        this.flashMessage.show({
          status: "error",
          message: this.$t('general.Unable_To_Removed_Member_As_Admin')
        });
      });
		},
    removeFromNetworks: function(user_id){
      this.loading = true;
      this.axios.delete("network/"+this.url+"/member/remove/"+user_id)
      .then(() => {
        console.log('ohh yeah');
        this.searchTitle = "";
        this.getMembers();
        this.getAdmins();
        this.getBusiness();
        this.loading = false;
        this.flashMessage.show({
          status: "success",
          message: this.$t('general.Member_Successfully_Removerd_From_Network')
        });
      })
      .catch(err => {
        console.log({ err: err });
        this.loading = false;
        this.flashMessage.show({
          status: "error",
          message: this.$t('general.Unable_to_Removerd_Member_From_Network')
        });
      });
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