<template>
  <div v-if="islogin" >

    
    <h6>
      {{ $t("search.Sponsored_Result") }}
      <fas-icon class="icons" :icon="['fas', 'exclamation-circle']" size="lg" />
    </h6>

    <div>
      <Sponsor />
    </div>
    <br>
    <h6>
      <fas-icon class="icons" :icon="['fas', 'users']" size="lg" />
      {{ $t("search.People") }}
    </h6>

    <!-- <Loader v-if="!pageHasLoad || loaderState" /> -->
     <peopleSkeleton  :loading="!pageHasLoad" />

    <peopleSkeleton  :loading="!pageHasLoad" />

    <NotFound v-if="!peoples.length && !loaderState" :title="title" />

    <div v-else>
      <!-- <People
        v-for="(people, index) in peoples"
        :people="people"     
        :key="index"
      /> -->

      
          <Person v-for="item in peoples" :key="item.id" :person="item"  />
       
    </div>   

    <ScrollLoader
      :loading="loadingIsActive"
      color="#ced4da"
      v-if="this.getKeywork"
    />
  </div>
  
  <div v-else>
    <h6>
      {{ $t("search.Sponsored_Result") }}
      <fas-icon class="icons" :icon="['fas', 'exclamation-circle']" size="lg" />
    </h6>

    <div>
      <Sponsor />
    </div>
    <br>
    <h6>
      <fas-icon class="icons" :icon="['fas', 'users']" size="lg" />
      {{ $t("search.People") }}
    </h6>

     <peopleSkeleton  :loading="!pageHasLoad" />

    <peopleSkeleton  :loading="!pageHasLoad" />

    <NotFound v-if="!peoples.length && !loaderState" :title="title" />

    <div v-else>


      
          <Person v-for="item in peoples" :key="item.id" :person="item"  />
       
    </div>   

    <ScrollLoader
      :loading="loadingIsActive"
      color="#ced4da"
      v-if="this.getKeywork"
    />
  </div>

</template>

<script>

import { mapGetters, mapActions, mapMutations } from "vuex";
import { loader, search } from "@/mixins";
import peopleSkeleton from "@/components/peopleSkeleton";
import Sponsor from "@/components/search/sponsoredBusiness";
import Person from "@/components/Person";
// import Loader from "@/components/Loader";

export default {
  mixins: [loader, search],
  components: {
    Sponsor,
    Person,
   // Loader,
    peopleSkeleton
  },

  data: () => ({
    pageHasLoad: false,
   
  }),

  computed: {

    ...mapGetters({
      peoples: "search/GET_RESULT_USER",
      canScrool: "search/END_INITIAL_REQUEST",
      getPage: "search/GET_CURRENT_PAGINATION_PAGE",
      getKeywork: "search/POST_KEYWORD",
      getStack: "search/STACK_VALUE"
    }),
    islogin(){  return this.$store.getters["auth/isLogged"]; },
    loadingIsActive: function () {
      return this.loaderState && this.peoples.length ? true : false;
    },
    
  },

  mounted() {
    window.addEventListener("scroll", this.onscroll);
  },

  created() {
    //this.getAuth();
   
    this.init();
  },

  watch:{
    "$store.state.search.page":function(newVal){
      if ( 1 == newVal)
        this.haveNotData = false
    }
  },

  methods: {
    ...mapActions({
      userStore: "search/FIND_USER",
      page: "search/SET_CURRENT_PAGINATION_PAGE",
      setCallback: "search/SET_CURRENT_PAGINATE_CALLBACK",
      stack: "search/STACK_VALUE",
    }),

    ...mapMutations({
      auth: "auth/profilConnected",
    }),

    async getAuth() {
      const type = [
        "NetworkEditors",
        "networks",
        "Membar Network Follower",
        "memberNetwork",
      ].includes(this.$route.name)
        ? this.$route.params.id
        : null;

      const response = await this.$repository.share.WhoIsConnect({
        networkId: type,
        type,
      });
      if (response.success) this.auth(response.data);
    },

    init: async function () {
      this.stack({
        data: {
          keyword: "",
        },
        page: 1,
      });
      
      this.setLoaderState(true);
      if(this.islogin)
      {
        this.setCallback(this.$repository.search.findUserByParam);
      }
      else{
        this.setCallback(this.$repository.search.findGuestUserByParam);
      }
      var request;
      if(this.islogin)
      {
        request = await this.$repository.search.findUserByParam({
         data: {
           keyword: this.$route.query.keyword ? this.$route.query.keyword : "",
         },
         page: 1,
       });
      }
      else{
        request = await this.$repository.search.findGuestUserByParam({
         data: {
           keyword: this.$route.query.keyword ? this.$route.query.keyword : "",
         },
         page: 1,
       }); 
      }

      if (request.success) {
        if (request.data.length) {
          this.userStore(request.data);
          this.page(this.getPage + 1);
        }
      }

      this.pageHasLoad = true;
      this.setLoaderState(false);
    },

    onscroll: async function () {
      console.log(this.getStack,this.getPage)
      if (!this.getKeywork) return false;

      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;

      if (
        this.callback &&
        (bottomOfPage || pageHeight < visible) &&
        !this.loaderState &&
        !this.haveNotData
      ) {
        this.setLoaderState(true);

        const request = await this.callback({
          ...this.getStack ,
          page: this.getPage,
        });

        if (request.success) {
          if (request.data.length) {
            this.userStore(request.data);
            this.page(this.getPage + 1);
          } else this.haveNotData = true;
        }

        this.setLoaderState(false);
      }
    },
  },
};
</script>