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

    <b-row class="mt-4">
      <b-col cols="12">
        <h6 class="username">
          Network Admins (2)
        </h6>
        <hr width="100%" />
        <div v-for="i in 2" :key="i">
          <p class="">
            <span class="">
              <b-avatar
                class="d-inline-block"
                variant="primary"
                src="https://business.bridgeafrica.info/assets/img/team/3.png"
                size="3.5rem"
              ></b-avatar>
              <h5 class="m-0 bold username d-inline-block ml-2">
                Mapoure Agrobusiness
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
                <b-dropdown-item href="#">
                  <b-icon-trash-fill></b-icon-trash-fill> Remove as Admin
                </b-dropdown-item>
                <b-dropdown-item href="#">
                  <b-icon-trash-fill></b-icon-trash-fill> Remove From Networks
                </b-dropdown-item>
              </b-dropdown>
            </span>
          </p>
        </div>
      </b-col>
    </b-row>

    <b-row class="mt-4">
      <b-col cols="12">
        <h6 class="font-weight-bolder">
          Bussiness (2)
        </h6>
        <hr width="100%" />
        <div v-for="i in 2" :key="i">
          <p class="">
            <span class="">
              <b-avatar
                class="d-inline-block"
                variant="primary"
                square
                src="https://business.bridgeafrica.info/assets/img/team/3.png"
                size="3.5rem"
              ></b-avatar>
              <h5 class="m-0  username d-inline-block ml-2">
                Mayor Council
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
                <b-dropdown-item href="#">
                  <b-icon-trash-fill></b-icon-trash-fill> Remove From Networks
                </b-dropdown-item>
              </b-dropdown>
            </span>
          </p>
        </div>
      </b-col>
    </b-row>

    <b-row class="mt-4">
      <b-col cols="12">
        <h6 class="font-weight-bolder">
          All Members ({{nFormatter(members.total)}})
        </h6>
        <hr width="100%" />
        <!-- <div v-for="i in 6" :key="i"> -->
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
                src="https://business.bridgeafrica.info/assets/img/team/3.png"
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
                <b-dropdown-item href="#">
                  <b-icon-person-plus-fill></b-icon-person-plus-fill> Make Admin
                </b-dropdown-item>
                <b-dropdown-item href="#">
                  <b-icon-trash-fill></b-icon-trash-fill> Remove From Networks
                </b-dropdown-item>
              </b-dropdown>
            </span>
          </p>
        </div>
      </b-col>
    </b-row>

    <b-row>
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
    <!-- {{members}} -->
  </div>
</template>

<script>
export default {
  name: "member",
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
    rows() {
      return this.$store.state.networkProfileMembers.members.total;
    },
    members() {
      return this.$store.state.networkProfileMembers.members;
    },
  },
  mounted(){
    this.url = this.$route.params.id
    this.getMembers()
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

      return data;
    },

    getMembers() {
      const data = this.getRequestDatas(this.searchTitle, this.currentPage);
    this.$store
      .dispatch("networkProfileMembers/getmembers", this.url+"/members/list/"+data)
      .then(() => {
        this.perPage = this.members.per_page;
        this.currentPage = this.members.current_page;
        console.log('Members Available');
        console.log(this.perPage );
      })
      .catch(err => {
        console.log({ err: err });
      });
    },
    search() {
      console.log("searching...")
      console.log(this.searchTitle)
      this.getMembers();
    },
    handlePageChange(value) {
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
</style>