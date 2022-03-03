<template>
  <div class="mt-3">
    <b-row>
      <b-col cols="12" class="mx-auto">
        <b-input-group class="mb-2 px-md-3 mx-auto">
          <b-input-group-prepend
            
            is-text
            style="cursor: pointer"
          >
            <b-icon-search @onclick="search" class="text-primary border-none"></b-icon-search>
          </b-input-group-prepend>
          <b-form-input
            aria-label="Text input with checkbox"
            :aria-invalid="$t('network.Search_something')"
            type="text"
            class="form-control"
            v-model="searchTitle"
             v-on:keyup.enter="search"
          ></b-form-input>
        </b-input-group>
      </b-col>
    </b-row>

    <b-row class="mt-4">
      <b-col cols="12">
        <h6 class="font-weight-bolder">
          {{ $t("network.Network_Admins") }} ({{
            nFormatter(adminss)
          }})
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
                    <router-link :to="'/profile/' + admin.user_id">
                      {{ admin.fullname }}
                    </router-link>
                  </h5>
                </span>
                <span class="float-right mt-1">
                  <b-dropdown

                   v-if="from=='admin'"
                    size="lg"
                    variant="link"
                    toggle-class="text-decoration-none"
                    no-caret
                  >
                    <template #button-content>
                      <b-icon-three-dots-vertical></b-icon-three-dots-vertical
                      ><span class="sr-only">{{ $t("network.Settings") }}</span>
                    </template>

                    <!-- <b-dropdown-item
                      href="#"
                      @click="removeAsAdmin(admin.user_id)"
                    >
                      <b-icon-trash-fill></b-icon-trash-fill>
                      {{ $t("network.Remove_as_Admin") }}
                    </b-dropdown-item>
                    <b-dropdown-item
                      href="#"
                      @click="removeFromNetworks(admin.user_id)"
                    >
                      <b-icon-trash-fill></b-icon-trash-fill>
                      {{ $t("network.Remove_From_Networks") }}
                    </b-dropdown-item> -->
                  </b-dropdown>
                </span>
              </p>
            </div>
          </div>
          <div v-else>{{ $t("network.No_Result_On_Admins") }}</div>
        </b-skeleton-wrapper>
      </b-col>
      <b-col cols="12">
        <infinite-loading
          @infinite="AinfiniteHandler"
          ref="AinfiniteLoading"
          :identifier="ainfiniteId"
        >
          <div class="text-red" slot="no-more">
            {{ $t("network.No_More_Request") }}
          </div>
          <div class="text-red" slot="no-results">
            {{ $t("network.No_More_Request") }}
          </div>
        </infinite-loading>
      </b-col>
    </b-row>

    <b-row class="mt-4">
      <b-col cols="12">
        <h6 class="font-weight-bolder">
          Editors ({{ nFormatter(editorss) }})
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
          <div class="scroll" v-if="editors.length != 0">
            <div v-for="(editor, index) in editors" :key="editor.id">
              <p class="">
                <span class="">
                  <b-avatar
                    class="d-inline-block"
                    variant="primary"
                    :src="editor.profile_picture"
                    :text="editor.fullname.charAt(0)"
                    size="3.5rem"
                  ></b-avatar>
                  <h5 class="m-0 bold username d-inline-block ml-2">
                    <router-link :to="'/profile/' + editor.user_id">
                      {{ editor.fullname }}
                    </router-link>
                  </h5>
                </span>
                <span class="float-right mt-1">
                  <b-dropdown
                    size="lg"
                    variant="link"
                    v-if="from=='admin'"
                    toggle-class="text-decoration-none"
                    no-caret
                  >
                    <template #button-content>
                      <b-icon-three-dots-vertical
                        variant="primary"
                      ></b-icon-three-dots-vertical
                      ><span class="sr-only">{{ $t("network.Settings") }}</span>
                    </template>
                    <b-dropdown-item
                      href="#"
                      @click="removeAsEditor(editor.user_id, index)"
                    >
                      <b-icon-trash-fill variant="primary"></b-icon-trash-fill>
                      Remove as Editor
                    </b-dropdown-item>
                    <b-dropdown-item
                      href="#"
                      @click="
                        removeFromNetworks(editor.user_id, index, 'editor')
                      "
                    >
                      <b-icon-trash-fill variant="primary"></b-icon-trash-fill>
                      {{ $t("network.Remove_From_Networks") }}
                    </b-dropdown-item>
                  </b-dropdown>
                </span>
              </p>
            </div>
          </div>
          <div v-else>{{ $t("network.No_Result_On_Admins") }}</div>
        </b-skeleton-wrapper>
      </b-col>

      <b-col cols="12">
        <infinite-loading
          @infinite="EinfiniteHandler"
          :identifier="einfiniteId"
          ref="EinfiniteLoading"
        >
          <div class="text-red" slot="no-more">
            {{ $t("network.No_More_Request") }}
          </div>
          <div class="text-red" slot="no-results">
            {{ $t("network.No_More_Request") }}
          </div>
        </infinite-loading>
      </b-col>
    </b-row>

    <b-row class="mt-4">
      <b-col cols="12">
        <h6 class="font-weight-bolder">
          {{ $t("network.Bussiness") }} ({{
            nFormatter(businesss)
          }})
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
            <div v-for="(busines, index) in business" :key="busines.id">
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
                  <h5 class="m-0 username d-inline-block ml-2">
                    
                    <router-link :to="'/business/' + busines.business_id">
                      {{ busines.name }}
                    </router-link>
                  </h5>
                </span>
                <span class="float-right mt-1">
                  <b-dropdown
                    size="lg"
                    variant="link"
                    v-if="from=='admin'"
                    toggle-class="text-decoration-none"
                    no-caret
                  >
                    <template #button-content>
                      <b-icon-three-dots-vertical
                        variant="primary"
                      ></b-icon-three-dots-vertical
                      ><span class="sr-only">{{ $t("network.Settings") }}</span>
                    </template>
                    <b-dropdown-item
                      href="#"
                      @click="
                        removeBusinessFromNetwork(busines.business_id, index)
                      "
                    >
                      <b-icon-trash-fill></b-icon-trash-fill>
                      {{ $t("network.Remove_From_Networks") }}
                    </b-dropdown-item>
                  </b-dropdown>
                </span>
              </p>
            </div>
          </div>
          <div v-else>{{ $t("network.No_Result_On_Networks") }}</div>
        </b-skeleton-wrapper>
      </b-col>
      <b-col col="12">
        <infinite-loading
          @infinite="BinfiniteHandler"
          :identifier="binfiniteId"
          ref="BinfiniteLoading"
        >
          <div class="text-red" slot="no-more">
            {{ $t("network.No_More_Request") }}
          </div>
          <div class="text-red" slot="no-results">
            {{ $t("network.No_More_Request") }}
          </div>
        </infinite-loading>
      </b-col>
    </b-row>


    <b-row class="mt-4">
      <b-col cols="12">
        <h6 class="font-weight-bolder">
          {{ $t("network.All_Members") }} ({{
            nFormatter(memberss)
          }})
        </h6>
        <hr width="100%" />
       

          <div class="memh">  

            

          <div v-for="(member, index) in members" :key="member.id">
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
                  <router-link :to="'/profile/' + member.user_id">
                    {{ member.fullname }}
                  </router-link>
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
                    <b-icon-three-dots-vertical
                      variant="primary"
                    ></b-icon-three-dots-vertical
                    ><span class="sr-only">{{ $t("network.Settings") }}</span>
                  </template>
                  <b-dropdown-item  v-if="from=='admin'|| from=='editor'"  href="#" @click="makeAdmin(member.user_id)">
                    <b-icon-person-plus-fill
                      variant="primary"
                    ></b-icon-person-plus-fill>
                    {{ $t("network.Make_Editor") }}
                  </b-dropdown-item>

                  <b-dropdown-item
                    href="#"
                    @click="handleFollow(member, 'user')"
                  >
                    <b-icon-person-plus-fill
                      variant="primary"
                    ></b-icon-person-plus-fill>
                    {{ member.is_follow !== 0 ? "Unfollow" : "Follow" }}
                  </b-dropdown-item>

                  <b-dropdown-item v-if="from=='admin'|| from=='editor'"
                    href="#"
                    @click="removeFromNetworks(member.user_id, index, 'member')"
                  >
                    <b-icon-trash-fill variant="primary"></b-icon-trash-fill>
                    {{ $t("network.Remove_From_Networks") }}
                  </b-dropdown-item>
                </b-dropdown>
              </span>
            </p>
          </div>




           <b-col col="12">
        <infinite-loading
          @infinite="infiniteHandler"
          :identifier="infiniteId"
          ref="infiniteLoading"
        >
          <div class="text-red" slot="no-more">
            {{ $t("network.No_More_Request") }}
          </div>
          <div class="text-red" slot="no-results">
            {{ $t("network.No_More_Request") }}
          </div>
        </infinite-loading>
      </b-col>

            </div>
       
      </b-col>
     
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "member",
  data() {
    return {
      url: null,
      perPage: null,
      page: 1,
      businessPage: 1,
      adminpage: 1,
      editorspage: 1,
      islogin:'',
      infiniteId: 1,
      ainfiniteId: 188,
      einfiniteId: 889,
      bnfiniteId: 19999,

      adminss: null,
      editorss: null,

      businesss: null,
      memberss: null,

      currentPage: null,
      searchTitle: "",
      members: [],
      business: [],
      admins: [],
      editors: [],
      currentIndex: -1,
      loading: false,
    };
  },

  props: ['from'],

  mounted() {
       this.islogin=this.$store.getters["auth/isLogged"];
    this.url = this.$route.params.id;
    //  this.getAdmins()
    //  this.getEditors()
    //  this.getBusiness()

    //  this.getmembers()
  },
  methods: {
    nFormatter(num) {
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

    infiniteHandler($state) {
      const data = this.getRequestDatas(this.searchTitle);
      console.log("keyword: " + data);
      let formData = new FormData();
      formData.append("keyword", data);
      let lien = "";
      if (data == "") {
        lien = "network/" + this.url + "/members/list/" + this.page;
      } else {
        lien =
          "network/" +
          this.url +
          "/members/list/" +
          this.page +
          "?keyword=" +
          this.searchTitle;
      }


       if(!this.islogin){
            lien='guest/'+lien;
          }


      this.axios
        .post(lien)
        .then(({ data }) => {
          console.log("hey you");
          console.log(data);
          if (data.data.users.length) {
            
            console.log(data.data.users);
            this.memberss = data.data.user_count;
            this.members.push(...data.data.users);

            this.page += 1;
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch((err) => {
          //  console.log({ err: err });
        });
    },

    //admin loading

    AinfiniteHandler($state) {
      const data = this.searchTitle;

      let formData = new FormData();
      formData.append("keyword", data);
      let lien = "";
      if (data == "") {
        lien = "network/" + this.url + "/members/admin/" + this.adminpage;
      } else {
        lien =
          "network/" +
          this.url +
          "/members/admin/" +
          this.adminpage +
          "?keyword=" +
          this.searchTitle;
      }

 if(!this.islogin){
            lien='guest/'+lien;
          }


      this.axios
        .post(lien)
        .then(({ data }) => {
        
          if (data.data.admin.length) {
            this.admins.push(...data.data.admin);
            this.adminss = data.data.admin_count;

            this.adminpage += 1;
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch((err) => {
          //  console.log({ err: err });
        });
    },

    //editor infinite loading

    EinfiniteHandler($state) {
      const data = this.searchTitle;

      let formData = new FormData();
      formData.append("keyword", data);
      let lien = "";
      if (data == "") {
        lien = "network/" + this.url + "/members/editor/" + this.editorspage;
      } else {
        lien =
          "network/" +
          this.url +
          "/members/editor/" +
          this.editorspage +
          "?keyword=" +
          this.searchTitle;
      }

       if(!this.islogin){
            lien='guest/'+lien;
          }


      this.axios
        .post(lien)
        .then(({ data }) => {
          if (data.data.editor.length) {
            this.editors.push(...data.data.editor);
            this.editorss = data.data.editor_count;
            this.editorspage += 1;
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch((err) => {
          //  console.log({ err: err });
        });
    },

    //admin loading

    //business infinite loading

    BinfiniteHandler($state) {

      
      const data = this.searchTitle;
      console.log("keyword: " + data);
      let formData = new FormData();
      formData.append("keyword", data);
      let lien = "";
      if (data == "") {
        this.url + "/members/business";
        lien = "network/" + this.url + "/members/business/" + this.businessPage;
      } else {
        lien =
          "network/" +
          this.url +
          "/members/business/" +
          this.businessPage +
          "?keyword=" +
          this.searchTitle;
      }

       if(!this.islogin){
            lien='guest/'+lien;
          }


      this.axios
        .post(lien)
        .then(({ data }) => {
          console.log("hey you");
          console.log(data);
          if (data.data.businesses.length) {
            console.log("hey you too");
            console.log("loading data of page " + this.page);
            console.log(data.data.businesses);
            this.business.push(...data.data.businesses);
            this.businesss = data.data.business_count;
            this.businessPage += 1;
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch((err) => {
          //  console.log({ err: err });
        });
    },

    getAdmins() {
      this.loading = true;
      const data = this.searchTitle;
      console.log("keyword: " + data);
      this.$store
        .dispatch("networkProfileMembers/getadmins", {
          path: this.url + "/members/admin",
          keyword: data,
        })
        .then(() => {
          console.log("Admins Available");
          this.loading = false;
        })
        .catch((err) => {
          console.log({ err: err });
          this.loading = false;
        });
    },

    getmembers() {
      const data = this.searchTitle;
      console.log("keyword: " + data);
      this.$store
        .dispatch("networkProfileMembers/getmembers", {
          path: this.url + "/members/list",
          keyword: data,
        })
        .then(() => {
          console.log("members Available");
          this.loading = false;
        })
        .catch((err) => {
          console.log({ err: err });
          this.loading = false;
        });
    },

    getEditors() {
      const data = this.searchTitle;
      console.log("keyword: " + data);
      this.$store
        .dispatch("networkProfileMembers/geteditors", {
          path: this.url + "/members/editor",
          keyword: data,
        })
        .then(() => {
          console.log("Editors Available");
          this.loading = false;
        })
        .catch((err) => {
          console.log({ err: err });
          this.loading = false;
        });
    },

    getBusiness() {
      const data = this.searchTitle;
      this.$store
        .dispatch("networkProfileMembers/getbusiness", {
          path: this.url + "/members/business",
          keyword: data,
        })
        .then(() => {
          console.log("Business Available");
          this.loading = false;
        })
        .catch((err) => {
          console.log({ err: err });
          this.loading = false;
        });
    },

    search() {

      
       this.infiniteId += 1;
      this.ainfiniteId += 1;
       this.einfiniteId += 1;
       this.binfiniteId += 1;

      this.page = 1;
      this.businessPage = 1;
      this.adminpage = 1;
      this.editorspage = 1;

      this.members = [];
      this.business = [];
      this.admins = [];
      this.editors = [];

      this.$refs.infiniteLoading.attemptLoad();
       this.$refs.AinfiniteLoading.attemptLoad();
       this.$refs.EinfiniteLoading.attemptLoad();
       this.$refs.EinfiniteLoading.attemptLoad();
    },

    makeAdmin: function (user_id) {
      console.log(user_id);
      this.loading = true;
      let path = {
        url: this.url,
        id: user_id,
      };

      this.$store
        .dispatch("networkProfileMembers/makeAdmin", path)
        .then(({ data }) => {
          console.log(data);
          console.log("ohh yeah");
          this.flashMessage.show({
            status: "success",
            message: "make as editor successfuly",
          });
          this.searchTitle = "";
          // this.getMembers();
          this.getAdmins();
          this.getBusiness();
          this.loading = false;
        })
        .catch((err) => {
          console.log({ err: err });
          this.loading = false;
          this.flashMessage.show({
            status: "error",
            message: this.$t("network.Unable_To_Set_Member_As_Admin"),
          });
        });
    },
    removeAsAdmin: function (user_id) {
      this.loading = true;
      console.log("----", user_id);
      let path = {
        url: this.url,
        id: user_id,
      };
      this.$store
        .dispatch("networkProfileMembers/removeAsAdmin", path)
        .then(({ data }) => {
          console.log(data);
          console.log("ohh yeah");
          this.searchTitle = "";
          // this.getMembers();
          this.getAdmins();
          this.getBusiness();
          this.loading = false;
          this.flashMessage.show({
            status: "success",
            message: this.$t("network.Member_Successfully_Removed_As_Admin"),
          });
        })
        .catch((err) => {
          console.log({ err: err });
          this.loading = false;
          this.flashMessage.show({
            status: "error",
            message: this.$t("network.Unable_To_Remove_Member_As_Admin"),
          });
        });
    },
    removeAsEditor: function (user_id, index) {
      let path = {
        url: this.url,
        id: user_id,
      };
      this.$store
        .dispatch("networkProfileMembers/removeAsEditor", path)
        .then(({ data }) => {
          console.log(data);

          this.$delete(this.editors, index);

          this.flashMessage.show({
            status: "success",
            message: "Member Successfully Removed As Editor",
          });
        })
        .catch((err) => {
          console.log({ err: err });

          this.flashMessage.show({
            status: "error",
            message: "Unable To Remove Member As Editor",
          });
        });
    },

    removeBusinessFromNetwork: function (user_id, index) {
      // this.loading = true;
      let path = {
        url: this.url,
        id: user_id,
      };
      this.$store
        .dispatch(
          "networkProfileMembers/removeAsremoveBusinessFromNetworkAdmin",
          path
        )
        .then(({ data }) => {
          console.log(data);
          console.log("ohh yeah");
          this.searchTitle = "";

          this.$delete(this.business, index);

          this.flashMessage.show({
            status: "success",
            message: this.$t(
              "network.Member_Successfully_Removed_From_Network"
            ),
          });
        })
        .catch((err) => {
          console.log({ err: err });
          this.loading = false;
          this.flashMessage.show({
            status: "error",
            message: this.$t("network.Unable_to_Remove_Member_From_Network"),
          });
        });
    },

    removeFromNetworks: function (user_id, index, type) {
      // this.loading = true;
      let path = {
        url: this.url,
        id: user_id,
      };
      this.$store
        .dispatch("networkProfileMembers/removeAsAdmin", path)
        .then(({ data }) => {
          console.log(data);
          console.log("ohh yeah");
          this.searchTitle = "";

          if (type == "member") {
            this.$delete(this.members, index);
          }

          if (type == "editor") {
            this.$delete(this.editors, index);
          }

          if (type == "busines") {
            this.$delete(this.business, index);
          }

          this.flashMessage.show({
            status: "success",
            message: this.$t(
              "network.Member_Successfully_Removed_From_Network"
            ),
          });
        })
        .catch((err) => {
          console.log({ err: err });
          this.loading = false;
          this.flashMessage.show({
            status: "error",
            message: this.$t("network.Unable_to_Remove_Member_From_Network"),
          });
        });
    },

    async handleFollow(user, type) {
      const uri = user.is_follow === 0 ? `/follow-community` : `/unfollow`;
      const nextFollowState = user.is_follow === 0 ? 1 : 0;
      const data = {
        id: user.user_id,
        type: type,
      };

      await axios
        .post(uri, data)
        .then((response) => {
          user.is_follow = nextFollowState;

          this.flashMessage.show({
            status: "success",
            message: "success",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
hr {
  border: solid 1px dimgray;
}
.scroll {
  max-height: 200px;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
}

.memh{

   height:400px;
   overflow: auto;
    overflow-x:hidden;
}
</style>