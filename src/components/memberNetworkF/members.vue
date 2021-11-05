<template>
  <div class="mt-3">
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
            @change="search"
          ></b-form-input>
        </b-input-group>
      </b-col>
    </b-row>

    <b-row class="mt-4" v-if="admins.length != 0">
      <b-col cols="12">
        <h6 class="username">
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
          <div class="scroll">
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
              </p>
            </div>
          </div>
        </b-skeleton-wrapper>
      </b-col>
    </b-row>

    <b-row class="mt-4" v-if="business.length != 0">
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
          <div class="scroll">
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
              </p>
            </div>
          </div>
        </b-skeleton-wrapper>
      </b-col>
    </b-row>

    <b-row class="mt-4" v-if="members.total != 0">
      <b-col cols="12">
        <h6 class="font-weight-bolder">
          All Members ({{nFormatter(members.total)}})
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
          <div          
            :class="{ active: index == currentIndex }"
            v-for="(member, index) in members.data"
            :key="index"
          >
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
            </p>
          </div>
        </b-skeleton-wrapper>
      </b-col>
    </b-row>

    <b-row v-if="members.total != 0">
      <b-col cols="12">
        <span class="float-right">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            @change="handlePageChange"
            aria-controls="my-table"
          ></b-pagination>
        </span>
      </b-col>
    </b-row>
    <FlashMessage />
  </div>
</template>

<script>
export default {
  name: "members",
  data() {
    return {
      url:null,
      perPage: null,
      currentPage: null,
      searchTitle: "",

      currentIndex: -1,
      loading: false,
    };
  },
  computed: {
    rows() {
      return this.$store.state.networkProfileMembers.members.total;
    },
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
    this.getMembers()
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

    getRequestDatas(searchTitle, currentPage) {
      let data = "";

      if (searchTitle) {
        data = searchTitle;
      }else if (currentPage) {
        data = "?page="+currentPage;
      }
      console.log(data);
      return data;
    },

    getMembers() {
      this.loading = true;
      const data = this.getRequestDatas(this.searchTitle, this.currentPage);
      this.$store
        .dispatch("networkProfileMembers/getmembers", this.url+"/members/list/"+data)
        .then(() => {
          this.perPage = this.members.per_page;
          this.currentPage = this.members.current_page;
          console.log('Members Available');
          console.log(this.perPage );
          this.loading = false;
        })
        .catch(err => {
          console.log({ err: err });
          this.loading = false;
        });
    },
    getAdmins() {
      this.loading = true;
      const data = this.getRequestDatas(this.searchTitle, 0);
      this.$store
        .dispatch("networkProfileMembers/getadmins", this.url+"/members/admin/"+data)
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
      const data = this.getRequestDatas(this.searchTitle, 0);
      this.$store
        .dispatch("networkProfileMembers/getbusiness", this.url+"/members/business/"+data)
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
      console.log("searching...");
      console.log(this.searchTitle);
      this.getMembers();
      this.getAdmins();
      this.getBusiness();
    },
    handlePageChange(value) {
      this.loading = true;
      this.currentPage = value;
      console.log(this.currentPage);
      this.getMembers();
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