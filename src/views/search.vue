<template>
  <div style="" class="searchpage">
    <Nav
      :credentials.sync="searchParams"
      @updateSearchKeyword="updateSearchKeyword"
      id="top"
    >
      <template v-slot:button>
        <Button
          media="desktop"
          @click.native="strategY['all']"
          v-if="selectedId == 5"
        />

        <Button
          media="desktop"
          @click.native="strategY['business']"
          v-if="selectedId == 1"
        />
        <!-- <Button @click.native="strategY['users']" v-if="selectedId == 2" /> -->
        <Button
          media="desktop"
          @click.native="strategY['network']"
          v-if="selectedId == 3"
        />
        <Button
          media="desktop"
          @click.native="strategY['market']"
          v-if="selectedId == 0"
        />

        <Button
          media="desktop"
          @click.native="strategies"
          v-if="[2, 4].includes(selectedId)"
        />
      </template>

      <template v-slot:mobile>
        <Button
          media="mobile"
          @click.native="strategY['all']"
          v-if="selectedId == 5"
        />

        <Button
          media="mobile"
          @click.native="strategY['business']"
          v-if="selectedId == 1"
        />

        <Button
          media="mobile"
          @click.native="strategY['network']"
          v-if="selectedId == 3"
        />

        <Button
          media="mobile"
          @click.native="strategY['market']"
          v-if="selectedId == 0"
        />

        <Button
          media="mobile"
          @click.native="strategies"
          v-if="[2, 4].includes(selectedId)"
        />
      </template>
    </Nav>

    <SubNav
      @onChangeCategoryName="(val) => (categoryName = val)"
      @category="getCategory"
      @parentcategory="getparentCategory"
      @update:keyword="
        (val) => (searchParams = Object.assign(searchParams, val))
      "
      @activateSuggestion="activateSuggestion"
      @activate:matching:category="(val) => (activateMatching = val)"
      style="margin-top: -25px"
    />

    <hr style="margin-top: -0px" class="d-none d-sm-none d-lg-block" />

    <div class="container searchly moveup">
      <ly-tab
        v-model="selectedId"
        :items="items"
        :options="optionsnav"
        activeColor="#e75c18"
        @change="handleChange"
      >
      </ly-tab>
    </div>

    <hr style="margin-top: -0px" />

    <div class="d-block d-none d-sm-block d-md-block d-lg-block d-xl-none">
      <b-row align-v="start">
        <b-col
          cols="3"
          class="text-center"
          v-for="(category, index) in categories.slice(0, 7)"
          :key="index"
        >
          <b-link
            class="cat"
            @click="
              () => {
                categoryName = category.category.name;
                getCategory({ cat_id: category.category.id });
                searchParams = Object.assign(searchParams, {
                  keyword: category.category.name,
                  cat_id: category.category.id,
                });
              }
            "
          >
            <img
              class="img-fluid picture logo-img"
              :src="category.category.cat_image"
            />

            {{
              category.category.name.length > 11
                ? category.category.name.substring(0, 11) + "..."
                : category.category.name
            }}
          </b-link>
        </b-col>
        <b-col
          align-self="center"
          cols="3"
          class="text-center"
          @mouseover="onOverMore()"
          @mouseleave="onLeaveMore()"
          ref="more"
        >
          <b-link class="cat mt-4" v-b-modal.myModalla>
            <b-icon icon="chevron-down" aria-hidden="true"></b-icon> More
          </b-link>
        </b-col>
      </b-row>

      <b-modal ref="setcat" id="myModalla" hide-footer title="More Categories">
        <div style="column-count: 2">
          <b-form-radio
            v-for="(category, index) in categories"
            :key="index"
            v-model="catChose"
            :value="category.category.id"
            @change="getCategory({ cat_id: category.category.id })"
            name="subCategories-list-modal"
            class="mt-2"
          >
            <img
              class="img-fluid picture"
              style="max-height: 26px"
              :src="category.category.cat_image"
            />
            {{ category.category.name }}
          </b-form-radio>
        </div>
      </b-modal>
    </div>

    <div class="container-fluid medium-filters">
      <b-row>
        <b-col cols="3">
          <b-button class="shadow border mob-btn" v-b-modal="'myModall'">
            {{ $t("search.Filter") }}
          </b-button>
        </b-col>

        <b-modal ref="myfilters" id="myModall" hide-footer title=" ">
          <div class="d-block d- d-sm-block d-md-block d-lg-block d-xl-none">
            <div class="ml-3">
              <Filters
                v-bind:filterType="selectedId"
                v-bind:Selectedcategory="Selectedcategory"
                v-bind:Selectedparentcategory="Selectedparentcategory"
                v-bind:categoryNameSelected="categoryName"
                @onFinByCategory="getCategory"
                @updateSearchKeyword="updateSearchKeyword"
                @updateSearchLocation="updateSearchLocation"
                :activateMatching="activateMatching"
              />
            </div>

            <!--            
            <div v-if="!isFilter">
            
              <div v-if="categories.length > 0">
                <b-form-group
                  label-cols-lg="3"
                  :label="$t('search.Categories')"
                  label-size="md"
                  label-class="font-weight-bold pt-0"
                  class="mb-0 pt-6 text-left"
                >
                </b-form-group>
                <b-form-select v-model="catChose">
                  <option :value="null" disabled>
                    -- Please select a category --
                  </option>
                  <option
                    v-for="(elm, index) in categories"
                    :key="index"
                    :value="elm"
                  >
                    {{ elm.category.name }}
                  </option>
                </b-form-select>
              </div>
            </div> 

            <hr v-if="!isFilter" />
            <div v-if="!isFilter">
             
              <div v-if="catChose">
                <b-form-group
                  label-cols-lg="3"
                  label="sub categories"
                  label-size="md"
                  label-class="font-weight-bold pt-0"
                  class="mb-0 pt-6 text-left"
                >
                </b-form-group>
                <b-form-select v-model="subCatChose" @change="getFilter">
                  <option :value="null" disabled>
                    -- Please select a sub category --
                  </option>
                  <option
                    v-for="(elm, index) in catChose.sub_cat"
                    :key="index"
                    :value="elm"
                  >
                    {{ elm.name }}
                  </option>
                </b-form-select>
              </div>
            </div>

            <hr v-if="!isFilter" />

            <div v-if="!isFilter">
              
              <div v-if="subFilters.length > 0">
                <b-form-group
                  label-cols-lg="3"
                  label="Filters"
                  label-size="md"
                  label-class="font-weight-bold pt-0"
                  class="mb-0 pt-6 text-left"
                >
                </b-form-group>
                <b-form-select v-model="filterChose">
                  <option :value="null" disabled>
                    -- Please select a filter --
                  </option>
                  <option
                    v-for="(elm, index) in subFilters"
                    :key="index"
                    :value="elm.id"
                  >
                    {{ elm.name }}
                  </option>
                </b-form-select>
              </div>
            </div>
     -->
            <component :is="isFilter" />
            <hr v-if="!isFilter" />

            <b-button
              v-if="!isFilter"
              variant="primary"
              class="m-3 float-right"
              @click="searchFilter"
            >
              {{ $t("search.Search") }}
            </b-button>
          </div>

          <div class="d-block text-center"></div>
        </b-modal>
      </b-row>
    </div>

    <div class="container-fluid mobile-filters mt-2 mb-3">
      <b-row>
        <b-col cols="5">
          <b-button
            class="shadow border mob-btn"
            id="show-btn"
            @click="showFilters"
          >
            {{ $t("search.Filter") }}
          </b-button>
        </b-col>

        <b-col cols="3" md>
          <b-button class="shadow border mob-btn" @click="togglelist">
            {{ $t("search.List") }}
          </b-button>
        </b-col>

        <b-col cols="4">
          <b-button class="shadow border mob-btn" @click="togglemap()">
            {{ $t("search.Map") }}
          </b-button>
        </b-col>
      </b-row>
    </div>
    <div class="container-flex p-md-3 p-t-0 upp">
      <b-row class="p-3">
        <b-col cols="0" md="0" xl="3" class="leftblock">
          <div class="ml-3">
            <Filters
              v-bind:filterType="selectedId"
              v-bind:Selectedcategory="Selectedcategory"
              v-bind:Selectedparentcategory="Selectedparentcategory"
              v-bind:categoryNameSelected="categoryName"
              @onFinByCategory="getCategory"
              @updateSearchKeyword="updateSearchKeyword"
              @updateSearchLocation="updateSearchLocation"
              :activateMatching="activateMatching"
            />
          </div>
        </b-col>

        <b-col cols="12" md="8" lg="8" xl="6" ref="middleblock">
          <div class="container-flex a-flex">
            <!--filter for all takes just two fields at a time  -->

            <div id="all" v-if="selectedId == '5'">
              <h6>
                {{ $t("search.Sponsored_Result") }}
                <fas-icon
                  class="icons"
                  :icon="['fas', 'exclamation-circle']"
                  size="lg"
                />
              </h6>

              <div>
                <Sponsor />
              </div>

              <br>

              <h6>
                <fas-icon
                  class="icons"
                  :icon="['fas', 'hands-helping']"
                  size="lg"
                />

                {{ $t("search.Businesses") }}
              </h6>

              <MiniBusiness :businesses="businesses" />

              <span class="float-right mb-3" @click="selectedId = 1">
                <b-link href="#top"> {{ $t("search.see_more") }} </b-link>
              </span>
              <br />

              <hr />

              <div class="d-flex">
                <fas-icon
                  class="icons mr-1"
                  :icon="['fas', 'users']"
                  size="lg"
                />

                <h6>{{ $t("search.People") }}</h6>
              </div>

              <MiniPeople />
              <span class="float-right mb-3" @click="selectedId = 2">
                <b-link href="#top"> {{ $t("search.see_more") }} </b-link>
              </span>
              <br />

              <hr />

              <h6>
                <fas-icon
                  class="icons"
                  :icon="['fas', 'project-diagram']"
                  size="lg"
                />
                {{ $t("search.Network") }}
              </h6>

              <MiniNetwork />
              <span class="float-right mb-3" @click="selectedId = 3">
                <b-link href="#top"> {{ $t("search.see_more") }} </b-link>
              </span>
              <br />

              <hr />

              <h6>
                <fas-icon class="icons" :icon="['fas', 'store']" size="lg" />
                {{ $t("search.Market") }}
              </h6>

              <MiniMarket :products="miniproducts" />

              <span class="float-right mb-3" @click="selectedId = 0">
                <b-link href="#top"> {{ $t("search.see_more") }} </b-link>
              </span>
              <br />

              <hr />

              <h6>
                <fas-icon class="icons" :icon="['fab', 'readme']" size="lg" />
                {{ $t("search.Post") }}
              </h6>

              <MiniPost />

              <span class="float-right mb-3" @click="selectedId = 4">
                <b-link href="#top"> {{ $t("search.see_more") }} </b-link>
              </span>
              <br />

              <hr />
            </div>

            <!--  select just businesses      -->

            <div id="businesses" v-if="selectedId == '1'">
              <h6>
                {{ $t("search.Sponsored_Result") }}
                <fas-icon
                  class="icons"
                  :icon="['fas', 'exclamation-circle']"
                  size="lg"
                />
              </h6>

              <div>
                <Sponsor />
              </div>

              <br>
              <h6>
                <fas-icon
                  class="icons"
                  :icon="['fas', 'hands-helping']"
                  size="lg"
                />

                {{ $t("search.Businesses") }}
              </h6>
              <!-- <b-spinner
                v-if="prodLoaderr"
                variant="primary"
                :label="$t('search.Spinning')"
              ></b-spinner> -->
            </div>

            <!-- filter out only people -->

            <component :is="isComponent" :title="notFoundComponentTitle" />

            <!-- filter out just the network  -->

            <div v-if="selectedId == '3'">
              <h6>
                {{ $t("search.Sponsored_Result") }}
                <fas-icon
                  class="icons"
                  :icon="['fas', 'exclamation-circle']"
                  size="lg"
                />
              </h6>

              <div>
                <Sponsor />
              </div>
              <br>
              <h6>
                <fas-icon
                  class="icons"
                  :icon="['fas', 'project-diagram']"
                  size="lg"
                />
                {{ $t("search.Networks") }}
              </h6>

              <Network />
            </div>

            <!-- Filter out just the market -->

            <div v-if="selectedId == '0'">
              <h6>
                {{ $t("search.Sponsored_Result") }}
                <fas-icon
                  class="icons"
                  :icon="['fas', 'exclamation-circle']"
                  size="lg"
                />
              </h6>

              <div>
                <Sponsor />
              </div>
              <br>
              <h6 class="mb-3">
                <fas-icon class="icons" :icon="['fas', 'store']" size="lg" />
                {{ $t("search.Market") }}
                <b-button
                  to="/cart"
                  size="sm"
                  variant="primary"
                  class="float-right"
                >
                  <b-icon icon="cart4"></b-icon> Cart
                </b-button>
                <div class="float-right">
                  <b-button
                    size="sm"
                    variant="outline-primary"
                    @click="getProducts"
                    class="mx-3"
                  >
                    <b-spinner small v-if="prodLoader"></b-spinner>
                    <span v-else
                      ><b-icon
                        icon="arrow-clockwise"
                        aria-hidden="true"
                      ></b-icon
                    ></span>
                  </b-button>
                </div>
              </h6>
              <b-alert
                v-model="showDismissibleAlert"
                variant="success"
                dismissible
              >
                {{ $t("search.List_of_products_up_to_date") }}
              </b-alert>
              <Market class="mt-3" />
            </div>
          </div>
        </b-col>
        <b-col cols="12" md="4" lg="4" xl="3" class="showmap" ref="mapblock">
          <div id="map" style="margin-top: 20px" class="">
            <div v-if="selectedId == '1'">
              <businessmap :businesses="businessess.data" />
            </div>
            <div v-if="selectedId == '0'">
              <mapbox :products="allproducts.data" />
            </div>
            <div v-if="selectedId == '5'">
              <mapbox
                :businesses="businesses.data"
                :products="miniproducts.data"
                :networks="mininetworks.data"
                :defaultLocation="searchParams.location.label"
                :isSearched="isSearched"
              />
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

import LyTab from "@/tab/src/index.vue";
import Map from "@/components/search/map";
import mapbox from "@/components/search/mapbox";
import businessmap from "@/components/search/businessmap";
//import Business from '@/components/search/business';
import People from "@/components/search/people";
import Network from "@/components/search/network";
import Post from "@/components/search/posts";
import Market from "@/components/search/market";

import MiniBusiness from "@/components/search/allSearchComps/allBusiness";
import MiniPeople from "@/components/search/allSearchComps/allPeople";
import MiniNetwork from "@/components/search/allSearchComps/allNetwork";
import MiniPost from "@/components/search/allSearchComps/allPosts";
import MiniMarket from "@/components/search/allSearchComps/allMarket";
import Nav from "@/components/navbar";

import Filters from "@/components/search/filters";

import SubNav from "@/components/subnav";

import Sponsor from "@/components/search/sponsoredBusiness";
import Button from "@/components/ButtonNavBarFind";

import {
  PostComponent,
  PeopleComponent,
  PostFilter,
  PeopleFilter,
} from "@/components/search";

import BusinessComponent from "@/components/search/business";
//import login from "@/components/search/login";

import { loader } from "@/mixins";

import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    Button,
    LyTab,
    Nav,
    SubNav,
    Filters,
    //login,
    Map,
    Sponsor,
    BusinessComponent,
    //Business,
    People,
    Network,
    Post,
    Market,
    mapbox,
    businessmap,
    MiniBusiness,
    MiniPeople,
    MiniNetwork,
    MiniPost,
    MiniMarket,
    PostComponent,
    PeopleComponent,
    // Footer,
  },

  mixins: [loader],

  computed: {
    ...mapGetters({
      prodLoaderr: "business/getloadingState",
      businessess: "business/getBusiness",
      profileConnected: "auth/profilConnected",
      user: "auth/user",
    }),

     islogin(){  return this.$store.getters["auth/isLogged"]; },

    businesses() {
      return this.$store.getters["allSearch/getBusinesses"];
    },

    miniproducts() {
      return this.$store.getters["allSearch/getProducts"];
    },
    allproducts() {
      return this.$store.getters["marketSearch/getProducts"];
    },
    mininetworks() {
      return this.$store.getters["allSearch/getNetworks"];
    },

    products() {
      return this.$store.state.market.products;
    },

    categories() {
      return this.$store.getters["marketSearch/getCategories"];
    },

    subCategories() {
      return this.$store.getters["marketSearch/getSubCat"];
    },

    subFilters() {
      return this.$store.getters["marketSearch/getSubFilters"];
    },
  },

  created() {
    this.islogin = this.$store.getters["auth/isLogged"];
    this.searchParams.location = this.$route.query.location;
 
   let code=null;

   if(this.searchParams.location){
    //try to get the location code
    code=this.searchParams.location.code
   
    if(!code){ 
    this.searchParams.location = JSON.parse(localStorage.getItem("searchLocation"));
      }else{
      localStorage.setItem("searchLocation", JSON.stringify(this.searchParams.location) );

      }

   }else{
     this.searchParams.location = JSON.parse(localStorage.getItem("searchLocation"));
    } 

   console.log(this.searchParams.location);

   if(!this.searchParams.location){
     this.searchParams.location = { code: '', label: 'Location' }; 
   }

   
    if (this.$route.query.keyword) {
      this.searchParams.keyword = this.$route.query.keyword;
    }

   

           this.$store.commit("marketSearch/setKeyword",this.searchParams.keyword );
        
          this.$store.commit("marketSearch/setLocation", this.searchParams.location);

           this.$store.commit("networkSearch/setKeyword", this.searchParams.keyword);

          this.$store.commit("networkSearch/setLocation", this.searchParams.location);

      this.searchParams.location_placeholder = this.searchParams.location
        ? this.searchParams.location
        : this.$t("home.Location");
      
   


    this.onProcessQuery();
    this.getLocation();
    this.getKeyword();

    this.strategY = {
      users: () => this.onFindUser(),
      all: () => this.getKeyword(),
      market: () => this.searchProducts({}),
      network: () => this.searchNetworks(),
      business: () => this.onFindBusiness(),
    };     

    // if (!this.$route.query.uuid)
     

    this.initialize();
  },

  data() {
    return {
      activateMatching: null,
      catChose: "",
      subCatChose: "",
      filterChose: "",
      categoryName: "",
    
      searchParams: {
        keyword: "",
        cat_id: "",
        location: "",
        placeholder: "Find In All",
      },
      strategY: null,

      alert: false,
      showDismissibleAlert: false,
      prodLoader: false,

      strategyForComponent: null,
      notFoundComponentTitle: "",
      isComponent: null,
      isFilter: null,
      strategyForPlaceHolder: {},
      strategyForNotFoundComponentTitle: {},

      selected: "all",
      selectedId: 0,
      Setcategoryr: "all",
      Selectedcategory: "all",
      Selectedparentcategory: "Agriculture",
      bottomSelectedId: 0,
      location: "any",
      category: "any",
      post: "any",
      map: false,
      selectedfilter: "",
      showform: false,

      businessPage: 1,
      //selectcategories:[],
      isSearched: false,
      categories_filters: [],
      items: [
        { label: this.$t("search.Market") },
        { label: this.$t("search.Business") },
        { label: this.$t("search.People") },
        { label: this.$t("search.Network") },
         { label: this.$t("search.Post") },
        { label: this.$t("search.All") },

        
      ],




      default_category: "",

      optionsnav: {
        activeColor: "#top1d98bd",
      },
    };
  },

  destroyed() {
    this.checkIfItNetwork();
  },

  watch: {
    selectedId: function () {
      this.changeComponent();
      this.changePlaceHolder();
      this.changeNotFoundTitle();

       if (this.selectedId == 5) {
           this.getKeyword();
        }
        
        localStorage.setItem("searchTab", this.selectedId);
      
    },
 

    searchParams: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        // this.activateSuggestion(newValue.keyword);
   
        if (this.selectedId == 5) {
          this.$store.commit("allSearch/setKeyword", newValue.keyword);
          this.$store.commit("allSearch/setLocation", newValue.location);
        } else if (this.selectedId == 1) {
          this.$store.commit("business/setLocation", newValue.location);
          this.$store.commit("business/setKeyword", newValue.keyword);
        } else if (this.selectedId == 0) {
          this.$store.commit("marketSearch/setKeyword", newValue.keyword);
        
          this.$store.commit("marketSearch/setLocation", newValue.location);
        } else if (this.selectedId == 3) {
          this.$store.commit("networkSearch/setKeyword", newValue.keyword);

          this.$store.commit("networkSearch/setLocation", newValue.location);
        }
      },
    },
  },

  methods: {
    ...mapMutations({
      auth: "auth/profilConnected",
    }),

    ...mapActions({
      userStore: "search/FIND_USER",
      postStore: "search/FIND_POST",
      postKeyword: "search/POST_KEYWORD",
      lauchLoader: "search/LOADING",
      page: "search/SET_CURRENT_PAGINATION_PAGE",
      stack: "search/STACK_VALUE",
      setCallback: "search/SET_CURRENT_PAGINATE_CALLBACK",
      reset: "search/RESET_RESULT",
      findBusiness: "business/FIND_BUSINESS",
      getGeo: "business/getGeo",
    }),

    async checkIfItNetwork() {
      if ("network" == this.profileConnected.user_type) {
        const request = await this.$repository.share.switch(null, "reset");

        if (request.status) this.auth();
      }
    },

    updateSearchLocation(location) {
     
      this.searchParams.location_placeholder = location;
      this.searchParams.location = location;

       this.$store.commit("allSearch/setLocation", location);
    },

    updateSearchKeyword(keyword) {
      //  this.activateSuggestion(keyword);
      this.searchParams.keyword = keyword;
      if (this.selectedId == 5) {
        this.getKeyword();
      } else if (this.selectedId == 1) {
        this.onFindBusiness();
      } else if (this.selectedId == 3) {
        this.searchNetworks();
      } else if (this.selectedId == 0) {
        this.searchProducts({});
      }
    },

    activateSuggestion: async function (value) {
      this.$store.commit("allSearch/setSuggestedKeyword", []);
      if (value) {
        const response = await this.$repository.search.sugesstion(value);

        if (response.success) {
          console.log(response.data);

          this.$store.commit("allSearch/setSuggestedKeyword", response.data);
        }
      }
    },

    async getAuth() {
      const response = await this.$repository.share.WhoIsConnect({
        networkId: null,
        type: null,
      });

      if (response.success) this.auth(response.data);
    },

    onProcessQuery() {
      let tab=  localStorage.getItem("searchTab");


       if (this.$route.query.tab==0) {
        this.selectedId = 0;
        return true;
      }else{
      
      if (tab==0) {
        this.selectedId = 0;
        return true;
      }

       if (tab==1) {
        this.selectedId = 1;
        return true;
      }

       if (tab==2) {
        this.selectedId = 2;
       
        return true;
      }


       if (tab==3) {
        this.selectedId = 3;
        return true;
      }

       if (tab==4) {
        this.selectedId = 4;
        
        return true;
      }

       }

      if (this.$route.query.uuid) { 
        this.selectedId = 4;
       } 


    },
    // [ED]----------

    onOverMore() {
      this.$refs.more.visible = true;
      this.$emit("parentcategory", "More");
    },

    onLeaveMore() {
      this.$refs.more.visible = false;
    },

    getKeyword(data) {
      this.$store.commit("marketSearch/setSubFilters", []);
      this.$store.commit("marketSearch/setSubCat", []);
   
      var keyword = this.searchParams.keyword;
      var location = this.searchParams.location;

      let elm = data ? data : keyword ? { keyword: keyword } : { keyword: "" };

      this.$store.commit("allSearch/setKeyword", keyword);
      this.$store.commit("allSearch/setLocation", location);     

      if (this.searchParams.keyword)
        this.activateMatching = { name: this.searchParams.keyword };
      this.activateSuggestion(this.searchParams.keyword);

     if(this.selectedId==5){  
      this.$store
        .dispatch("allSearch/SEARCH", { keyword: keyword, location: location })
        .then((res) => {
          // console.log("categories loaded!");
          this.isSearched = !this.isSearched;
        })
        .catch((err) => {
          console.log("Error erro!");
        });
         }
    },

    async onFindBusiness() {
      this.$store.commit("marketSearch/setSubFilters", []);
      this.$store.commit("marketSearch/setSubCat", []);

      this.$store.commit("business/setLoading", true);

      if (this.searchParams.keyword)
        this.activateMatching = { name: this.searchParams.keyword };
      this.activateSuggestion(this.searchParams.keyword);

      if (this.searchParams.keyword.trim())
        await this.findBusiness({
          keyword: this.searchParams.keyword,
          location: this.searchParams.location,
        });

      this.$store.commit("business/setLoading", false);
    },

    async getProducts() {
      this.prodLoader = true;
      console.log("loader: ", this.prodLoader);
      this.showDismissibleAlert = false;

     // this.$store.commit("setProducts", []);
      // this.products = []
      if (this.islogin) {
        await this.$store
        .dispatch("marketSearch/getProducts")
        .then((res) => {
          console.log("products list: ");
          console.log(this.products);
          this.prodLoader = false;
          this.showDismissibleAlert = true;
        })
        .catch((err) => {
          this.prodLoader = false;
          console.log("products error: ");
          console.error(err);
          this.showDismissibleAlert = false;
        });
      }
      else{
        await this.$store
        .dispatch("marketSearch/getGuestUserProducts")
        .then((res) => {
          console.log("products list: ");
          console.log(this.products);
          this.prodLoader = false;
          this.showDismissibleAlert = true;
        })
        .catch((err) => {
          this.prodLoader = false;
          console.log("products error: ");
          console.error(err);
          this.showDismissibleAlert = false;
        });
      }
    },

    searchProducts(data) {
      this.$store.commit("marketSearch/setSubFilters", []);
      this.$store.commit("marketSearch/setSubCat", []);

      this.activateMatching = { name: this.searchParams.keyword };
      this.activateSuggestion(this.searchParams.keyword);

      if (this.islogin) {
          this.$store
        .dispatch("marketSearch/searchProducts", data)
        .then((res) => {
          // console.log("categories loaded!");
        })
        .catch((err) => {
          console.log("Error erro!");
        });
         }
         else
         {
          console.log("non-login---------");
          this.$store
        .dispatch("marketSearch/searchGuestUserProducts", data)
        .then((res) => {
        })
        .catch((err) => {
          console.log("Error erro!");
        });
         }
    },

    searchNetworks(data) {

     
      if (this.searchParams.keyword) {  
        this.activateMatching = { name: this.searchParams.keyword };
      this.activateSuggestion(this.searchParams.keyword);  }

      this.$store
        .dispatch("networkSearch/SEARCH", data)
        .then((res) => {
          // console.log("categories loaded!");
        })
        .catch((err) => {
          console.log("Error erro!");
        });
    },

    getLocation() {
      const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        this.getGeo({ lat: latitude, lng: longitude });
      };

      const error = (err) => {
        console.log(error);
      };

      // This will open permission popup
      navigator.geolocation.getCurrentPosition(success, error);
    },

    initialize() {
      this.strategy = {
        2: () => this.onFindUser(),
        4: () => this.onFindPost(),
        1: () => this.onFindBusiness(),
        3: () => this.searchNetworks(),
        0: () => this.searchProducts({}),
      };

      this.strategyForPlaceHolder = {
        2: () => this.$t("general.Find_User"),
        4: () => this.$t("general.Find_Post"),
        5: () => this.$t("general.All"),
        1: () => this.$t("general.Find_Businesses"),
      };

      this.strategyForComponent = {
        2: () => ({
          component: PeopleComponent,
          filter: PeopleFilter,
        }),
        4: () => ({
          component: PostComponent,
          filter: PostFilter,
        }),
        1: () => ({
          component: BusinessComponent,
          filter: null,
        }),
      };

      this.strategyForNotFoundComponentTitle = {
        2: () => this.$t("general.Not_Find_users"),
        4: () => this.$t("general.Not_Find_posts"),
        1: () => this.$t("general.Not_Find_Business"),
      };

      this.changePlaceHolder();
       this.strategyForComponent[this.selectedId]();
    },

    changeNotFoundTitle() {
      try {
        this.notFoundComponentTitle =
          this.strategyForNotFoundComponentTitle[this.selectedId]();
      } catch (error) {
        this.notFoundComponentTitle = "";
      }
    },

    changeBusinessPage(id) {
      this.businessPage = id;
    },

    changeComponent() {
      try {
        const data = this.strategyForComponent[this.selectedId]();
        this.isComponent = data.component;
        this.isFilter = data.filter;
      } catch (error) {
        this.isComponent = null;
        this.isFilter = null;
      }
    },

    changePlaceHolder() {
      try {
        const newPlaceholder = this.strategyForPlaceHolder[this.selectedId]();
        this.searchParams = Object.assign(this.searchParams, {
          placeholder: newPlaceholder,
        });
      } catch (error) {
        this.searchParams = Object.assign(this.searchParams, {
          placeholder: "",
        });
      }
    },

    strategies() {
      try {
        this.strategy[`${this.selectedId}`]();
      } catch (error) {
        console.log(error);
        console.warn(`Implement function for selectedId=${this.selectedId}`);
      }
    },

    async _onFindUser() {
      try {
        this.lauchLoader(true);
        this.reset();
        const request = await this.$repository.search.findUserByParam({
          data: {
            keyword: this.searchParams.keyword.trim(),
          },
          page: 1,
        });

        if (request.success) {
          this.setCallback(this.$repository.search.findUserByParam);
          this.page(2);
          this.userStore(request.data);
        }

        this.lauchLoader(false);
      } catch (error) {
        console.log(error);
        this.lauchLoader(false);
      }
    },

    onFindUser() {
      if (this.searchParams.keyword.trim()) {
        this.page(1);
        this.postKeyword(this.searchParams.keyword.trim());
        this.stack({
          data: {
            keyword: this.searchParams.keyword.trim(),
          },
        });
        this.activateSuggestion(this.searchParams.keyword);
        this._onFindUser();
      } else this.onNotified("the word must have at least 3 letters");
    },

    async _onFindPost() {
      try {
        this.lauchLoader(true);
        this.reset();
        const request = await this.$repository.search.findPostByKeyword({
          data: {
            keyword: this.searchParams.keyword.trim(),
          },
          page: 1,
        });

        if (request.success) {
          this.page(2);
          this.setCallback(this.$repository.search.findPostByKeyword);
          this.postStore(request.data);
        }
        this.lauchLoader(false);
      } catch (error) {
        console.log(error);
        this.lauchLoader(false);
      }
    },

    onFindPost() {
      if (this.searchParams.keyword.trim()) {
        this.page(1);
        this.postKeyword(this.searchParams.keyword.trim());
        this.stack({
          data: {
            keyword: this.searchParams.keyword.trim(),
          },
          page: 1,
        });

        this._onFindPost();
      } else {
        this.onNotified("the word must have at least 3 letters");
      }
    },
    // -------

    SetCat(cat) {
      console.log(cat);

      this.$refs["setcat"].hide();

      this.Setcategoryr = cat;

      switch (cat) {
        case "Agriculture":
          this.selectcategories = this.agriculture_filters;

          break;

        case "Handicraft":
          this.selectcategories = this.Handicrafts_filters;

          break;

        case "Electronics":
          this.selectcategories = this.Electronics_filters;

          break;

        case "MC":
          this.selectcategories =
            this.Mayor_councils_filters_and_public_institution;

          break;

        case "HU":
          this.selectcategories = this.Health_unit_filters;

          break;

        case "Clothing":
          this.selectcategories = this.clothing_filters;

          break;

        case "Restaurants":
          this.selectcategories = this.restaurants_filters;

          break;

        case "Hotels":
          this.selectcategories = this.Hotels_filters;

          break;

        case "Transport":
          this.selectcategories = this.Transport_filters;

          break;

        case "Station":
          this.selectcategories = this.Station;

          break;

        case "Auto Mechanics":
          this.selectcategories = this.Mechanics_filters;

          break;

        case "Grooming":
          this.selectcategories = this.Grooming_filters;

          break;

        case "Education":
          this.selectcategories = this.Educations_filters;

          break;

        case "Carding":
          this.selectcategories = [];

          break;

        case "Professional":
          this.selectcategories = this.Professional_and_home_service;

          break;

        case "Tailoring":
          this.selectcategories = this.Tailoring;

          break;
      }

      this.$refs["myfilters"].show();
    },

    getFilter() {
      this.subFilters = [];
      this.$store
        .dispatch("marketSearch/getFilter", this.subCatChose.id)
        .then((res) => {
          this.$store.commit("marketSearch/setSubFilters", res.data.data);
          this.subFilters = res.data.data;
          console.log("filter:", res.data.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },

    searchFilter() {
      console.log(this.catChose);
      var catId = this.catChose ? this.catChose.category.id : "";
      var subCatId = this.subCatChose ? this.subCatChose.id : "";
      var filterId = this.filterChose ? this.filterChose : "";
      var data = { cat_id: catId, sub_cat: subCatId, filter_id: filterId };
      if (this.selectedId == 0) {
        // this.searchProducts(data);
      } else if (this.selectedId == 1) {
        //  this.searchBusiness(data);
      } else if (this.selectedId == 5) {
        //  this.allSearchByCat(data);
      }

      this.$bvModal.hide("myModall");
    },

    getCategory(value) {
      this.Selectedcategory = value;

      if (this.selectedId == 0) {
        this.searchProducts({ cat_id: value.cat_id, sub_cat: value.id });
      } else if (this.selectedId == 1) {
        if(this.islogin)
      {
        this.searchBusiness({ cat_id: value.cat_id, sub_cat: value.id });
      }
      else{
        this.searchBusinessForGuestUser({ cat_id: value.cat_id, sub_cat: value.id });
      }
      } else if (this.selectedId == 5) {
        this.allSearchByCat({ cat_id: value.cat_id, sub_cat: value.id });
      } else if (this.selectedId == 3) {
        this.searchNetworks({
          cat_id: value.cat_id,
          sub_cat: value.id,
          keyword: this.searchParams.keyword,
        });
      } else if (this.selectedId == 4) {
        this._onFindPost();
      } else if (this.selectedId == 2) {
        this._onFindUser();
      }
    },

    allSearchByCat(data) {
      console.log("the category is: ", data);
      this.$store
        .dispatch("allSearch/SEARCH", data)
        .then((res) => {
          // console.log("categories loaded!");
        })
        .catch((err) => {
          console.log("Error erro!");
        });
    },

    searchBusiness(data) {
      this.$store.commit("business/setLoading", true);
      this.$store
        .dispatch("business/FIND_BUSINESS", data)
        .then((res) => {
          // console.log("categories loaded!");
          this.$store.commit("business/setLoading", false);
        })
        .catch((err) => {
          console.log("Error erro!");
          this.$store.commit("business/setLoading", false);
        });
    },
    searchBusinessForGuestUser(data) {
      this.$store.commit("business/setLoading", true);
      this.$store
        .dispatch("business/FIND_BUSINESS_FOR_GUEST_USER", data)
        .then((res) => {
          // console.log("categories loaded!");
          this.$store.commit("business/setLoading", false);
        })
        .catch((err) => {
          console.log("Error erro!");
          this.$store.commit("business/setLoading", false);
        });
    },

    getparentCategory(value) {
      this.Selectedparentcategory = value;
    },

    switchcategories() {
      this.showform = false;

      switch (this.default_category) {
        case "Primary Education":
          this.categories_filters = this.primary_eduction_filters;
          break;

        case "Secondary Education":
          this.categories_filters = this.secondary_eduction_filters;
          break;

        case "Tertiary Education":
          this.categories_filters = this.tertiary_eduction_filters;
          break;

        case "Vocational":
          this.categories_filters = this.Vocational_filters;
          break;

        case "Home Decor":
          this.categories_filters = this.Home_Decor_filters;
          break;

        case "Textile":
          this.categories_filters = this.Textile_filters;
          break;

        case "Professional_and_home_service":
          this.categories_filters = this.Professional_and_home_service;

          break;

        case "Hotels":
          this.categories_filters = this.Hotels;
          break;

        case "Taxis":
          this.categories_filters = this.Taxis_service;
          break;

        case "Car care":
          this.categories_filters = this.Car_care_filters;
          break;

        case "Auto Dealers":
          this.categories_filters = this.Auto_Dealers_filters;
          break;

        case "Spare parts":
          this.categories_filters = this.Spare_parts_filters;
          break;

        case "Women Grooming":
          this.categories_filters = this.Women_Grooming_filters;
          break;

        case "Men Grooming":
          this.categories_filters = this.Men_Grooming_filters;
          break;
        case "Legal_service":
          this.categories_filters = this.Legal_service;

          break;

        case "male_kid_taloring":
          this.categories_filters = this.male_kid_taloring;

          break;

        case "women_taloring":
          this.categories_filters = this.women_taloring;

          break;

        case "Men_taloring":
          this.categories_filters = this.Men_taloring;

          break;

        case "female_kid_taloring":
          this.categories_filters = this.female_kid_taloring;

          break;

        case "Marketing":
          this.categories_filters = this.Marketing;
          break;
        case "Web, Graphic Design and Printing":
          this.categories_filters = this.Web_Graphic;
          break;
        case "Event Planning and Rentals":
          this.categories_filters = this.Event_Planning_and_Rentals;
          break;
        case "Cleaning Services":
          this.categories_filters = this.Cleaning_Services;

          break;
        case "Real Estate Agency and Land":
          this.categories_filters = this.Real_Estate;
          break;
        case "Housing and Construction":
          this.categories_filters = this.Housing_and_Construction;
          break;
        case "Internet and Media":
          this.categories_filters = this.Internet_and_Media;
          break;
        case "Fruits":
          this.categories_filters = this.Fruits_filters;
          break;
        case "Coffee":
          this.categories_filters = this.Coffee_filters;
          break;
        case "Finished_Branded_Products":
          this.categories_filters = this.Finished_Branded_Products_filters;
          break;
        case "Vegetables":
          this.categories_filters = this.Vegetables_filters;
          break;

        case "Starch":
          this.categories_filters = this.starch_filters;

          break;

        case "Oils":
          this.categories_filters = this.Oils_filters;

          break;

        case "Cereals":
          this.categories_filters = this.Cereals_filters;

          break;
        case "Raw_material":
          this.categories_filters = this.Raw_material_filters;

          break;

        case "Livestock":
          this.categories_filters = this.Livestock_filters;

          break;
        case "Spices":
          this.categories_filters = this.Spices_filters;
          break;

        case "Dairy":
          this.categories_filters = this.Dairy_filters;
          break;
        case "Beans":
          this.categories_filters = this.Beans_filters;

          break;

        //electronics

        case "phone":
          this.categories_filters = this.phone_filters;

          break;
        case "Computers":
          this.categories_filters = this.Computers_filters;

          break;
        case "Office Electronics":
          this.categories_filters = this.Office_Electronics_filters;

          break;
        case "Home Appliances":
          this.categories_filters = this.Home_Appliances_filters;

          break;

        //restaurants

        case "Bars":
          this.categories_filters = this.Bars_filters;
          break;
        case "African_food":
          this.categories_filters = this.African_food;
          console.log("dup ass");
          break;
        case "Asian food":
          this.categories_filters = this.Asian_food_filters;
          break;
        case "Fast_food":
          this.categories_filters = this.Fast_food;

          break;
        case "European food":
          this.categories_filters = [];
          break;

        case "Pizza":
          this.categories_filters = [];

          break;
        case "Bakery":
          this.categories_filters = [];

          break;
        case "Catering":
          this.categories_filters = [];

          break;

        //clothing cases

        case "female":
          this.categories_filters = this.Women_clothing;

          break;
        case "Women accessories":
          this.categories_filters = this.Women_accessories;

          break;

        case "men":
          this.categories_filters = this.Men_Clothing;

          break;
        case "Men Accessories":
          this.categories_filters = this.Men_Accessories;

          break;

        case "Tailoring":
          this.selectcategories = this.Tailoring;

          break;

        //health ubits

        case "Hospitals":
          this.categories_filters = this.Hospitals_filters;

          this.showform = true;

          break;
        case "Pharmacies":
          this.categories_filters = this.Pharmacies;

          break;

        case "Clinics":
          this.categories_filters = this.Clinics_filters;

          break;

        case "COVID-19":
          this.categories_filters = [];

          break;

        //   Mayor Council

        case "Ministries":
          this.categories_filters = [];
          this.showform = true;

          break;

        case "Mayor Councils":
          this.categories_filters = [];
          this.showform = true;

          break;

        case "Schools":
          this.categories_filters = this.Schools;
          this.showform = true;

          break;

        //More filters

        case "Handicraft":
          this.categories_filters = this.Handicrafts_filters;

          break;
      }
    },

    handleChange(item, index) {
      console.log(item, index);
    },

    showFilters() {
      this.$refs["myfilters"].show();
    },

    togglemap() {
      this.$refs.mapblock.style.display = "block";
      this.$refs.middleblock.style.display = "none";
    },

    togglelist() {
      this.$refs.mapblock.style.display = "none";
      this.$refs.middleblock.style.display = "block";
    },
  },
};
</script>

<style scoped>
.searchpage{
  font-family: poppins !important;
  color: #455a64 !important;
  overflow-x: hidden;
}

.icon-color {
  color: #e75c18;
}

.icons {
  color: #e75c18;
  width: 24px;
}

.logo-img {
  max-height: 36px;
  margin: auto;
  display: block;
}

.cat {
  font-size: 12px !important;
  text-align: center;
  /* color: #333;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif; */
}

.upp {
  margin-top: -20px;
}

@media only screen and (max-width: 768px) {
  .moveup {
    margin-top: -20px;
  }

  .medium-filters {
    display: none;
  }

  .showmap {
    display: none;
  }

  .mob-btn {
    background-color: white;
    color: #455a64 !important;
    border-color: white;
    width: 80px;
    padding: 3px;
    border-radius: 5px;
  }

  .mobile-filters {
    display: block;
  }

  .d-logo {
    display: none;
  }

  .a-center {
    margin-right: 0px;
    margin-left: 0px;
  }
}

@media only screen and (min-width: 968px) {
  .showmap {
    display: block;
  }

  .a-center {
    margin-right: 200px;
    margin-left: -100px;
  }
  .mobile-filters {
    display: none;
  }

  .d-logo {
    display: block;
  }
}

.input-size {
  height: 55px;
}

.logo-image {
  margin-left: 50px;
}

.input-group-text {
  background-color: white;
}

.searchnav {
  margin: 3px;
}

.t-center {
  text-align: center;
  align-content: center;
}

.d-blockk {
  display: none;
}

@media only screen and (min-width: 768px) {
  .d-mobile {
    display: none;
  }

  .d-blockk {
    display: none;
  }
}

.m-30 {
  margin-left: -30px;
}

.br-0 {
  border-radius: 0px;
  height: 50px;
}

.br {
  border: 1px solid #ced4da;
}

@media only screen and (max-width: 768px) {
  .a-flex {
    margin-right: -15px;
    margin-left: -15px;
  }
}
</style>

<style>
li .nav-link:hover {
  background-color: white;
  color: #e75c18;
}

@media only screen and (max-width: 1201px) {
  .leftblock {
    display: none;
  }
}

@media only screen and (min-width: 1204px) {
  .leftblock {
    display: block;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .medium-filters {
    display: block;
  }

  .mobile-filters {
    display: none;
  }
}

@media only screen and (min-width: 1140px) {
  .medium-filters {
    display: none;
  }
}
</style>