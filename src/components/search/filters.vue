<template>
  <div> 
    <div
      v-if="filterType == '0' || filterType == '1' || filterType == '5'"
      class="mt-2 mb-2"
    >
      <b-button
        class="float-right"
        size="sm"
        variant="outline-primary"
        @click="resetFilters"
        >{{ $t("search.Reset") }}</b-button
      >
    </div>

    <br />

    <div v-if="filterType == '0' || filterType == '1' || filterType == '5'">

        <span v-if="suggestedKeyword.length">
        <h6 class="bold">{{ $t("search.suggested_keywords") }}</h6>
        <b-form-radio
          v-for="(filter, i) in suggestedKeyword.slice(0, 4)"
          :key="i.value"
          v-model="searchkeyword"
          :value="filter.id"
          @change="changesearchkeyword(filter)"
          name="sub-filters"
          class="m-1 br-3"
        >
          {{ filter.suggested_keyword }}
        </b-form-radio>

        <b-link v-b-modal="'suggestedmodal'">{{ $t("search.See_all") }}</b-link>
        <hr />
      </span>



      <b-form-group
        v-if="nameOfCategory"
        class="mb-0  text-left"
        label-cols-lg="12"
        :label="$t('search.Category')"
        label-size="md"
        label-class=" pt-0"
      >
      <b-form-select
        v-model="nameOfCategory"
        :options="categoriesAll"
        class="mb-2 select-category"
        v-if="nameOfCategory && !activateMatching"
      >
      </b-form-select>

      </b-form-group>

      <div v-if="activateMatching" class="pb-2">
        <b-badge
          v-for="item in categoryRendering"
          :key="item.id"
          :class="[item.actived ? 'actived' : 'inactied', 'p-1', 'm-1']"
          variant="light"
          @click="matching(item)"
        >
          {{ item.category }}
        </b-badge>

        <span v-if="activateMatching && !loading && !categoryRendering.length"
          >Not data found</span
        >
      </div>

      <b-spinner
        style="width: 1rem; height: 1rem; color: #e75c18"
        label="Large Spinner"
        v-if="loading"
      ></b-spinner>

      <div class="mt-3" v-if="subCategories.length">
        <span>
          <b-form-radio
            v-for="(subCat, index) in subCategories.slice(0, 5)"
            v-model="selected_sub_cat"
            :key="index"
            :value="subCat.id"
            name="subcategories-list"
            @change="getFilter(subCat)"
            class="m-1 br-3"
          >
            {{ subCat.name }}
          </b-form-radio>
          <b-link v-b-modal="'myModalllo'">{{ $t("search.See_all") }}</b-link>
          <hr />
        </span>

        <b-spinner
          v-if="filterLoader"
          variant="primary"
          label="Spinning"
        ></b-spinner>

        <span v-if="subFilter.length">
          <h6>{{ $t("search.Filters") }}</h6>
          <b-form-radio
            v-for="(filter, i) in subFilter.slice(0, 4)"
            :key="i.value"
            v-model="selectedFilter"
            :value="filter.id"
            @change="searchByFilter(filter)"
            name="sub-filters"
            class="m-1 br-3"
          >
            {{ filter.name }}
          </b-form-radio>

          <b-link v-b-modal="'myModalll'">{{ $t("search.See_all") }}</b-link>
          <hr />
        </span>
        <span v-if="noFilter.length">
          <h6>{{ noFilter }}</h6>
          <hr />
        </span>
      </div>

      <b-modal ref="myfilters" id="myModalll" hide-footer title=" ">
        <div style="column-count: 2">
          <b-form-radio
            v-for="(filter, i) in subFilter"
            :key="i.value"
            v-model="selectedFilter"
            :value="filter.id"
            @change="searchByFilter(filter)"
            name="sub-filters"
          >
            {{ filter.name }}
          </b-form-radio>
        </div>

        <br />

      </b-modal>

      <!--  blec implementation for neigbourhood stuff -->

      <div v-if="filterType == '0' || filterType == '1' || filterType == '5'">
        <div>
          <div>
            <b-form-group
              label-cols-lg="3"
              :label="$t('search.Country')"
              label-size="md"
              label-class=" pt-0"
              class="mb-0 pt-2 text-left"
            >
            </b-form-group>
            <b-form-select
              v-model="networkSelect.country"
              :options="countries"
              value-field="id"
              text-field="name"
              @change="getBRegions()"
            >
            </b-form-select>
          </div>

          <!-- city -->
          <div v-if="!showMore">
            <div>
              <b-form-group
                label-cols-lg="3"
                :label="$t('search.City')"
                label-size="md"
                label-class=" pt-0"
                class="mb-0 text-left"
              > 
              </b-form-group>
                  <multiselect 
                  :value="city" 
                  :options="citiesValues" 
                  placeholder="Select City" 
                  class="search-hh w-100 city-search"
                  style="border-left: none"
                  label="label" 
                  track-by="code"
                  @input="setSelectedLocation"
                ></multiselect>
          </div>

            <div>
              <b-form-group
                label-cols-lg="3"
                :label="$t('search.Neighbourhood')"
                label-size="md"
                label-class=" pt-0"
                class="mb-0 mt-3 text-left"
              >
              </b-form-group>

              <vue-bootstrap-typeahead
                v-model="query"
                :data="lneighbourhoods"
                :minMatchingChars="0"
                @hit="searchThisNeibourhood(query)"
                :maxMatches="10"
                :serializer="(item) => item.name"
                placeholder="Where"
                class=""
              />

              <b-link
                v-if="networkFilter.region"
                class="float-right mt-2 mb-2"
                @click="showMoreFilters"
              >
                More
              </b-link>
              <br />
            </div>
          </div>

          <div class="more" v-if="showMore">
            <hr />

            <!-- Region -->
            <div class="mt-1" v-if="networkFilter.region">
              <b-form-group
                label-cols-lg="3"
                :label="$t('search.Region')"
                label-size="md"
                label-class=" pt-0"
                class="mb-0 text-left"
              >
              </b-form-group>

              <b-form-select
                v-model="networkSelect.region"
                :options="regions"
                value-field="id"
                text-field="name"
                @change="getBDivisions()"
              >
              </b-form-select>
            </div>

            <hr />

            <!-- Division -->
            <div v-if="networkFilter.division">
              <b-form-group
                label-cols-lg="3"
                :label="$t('search.Division')"
                label-size="md"
                label-class=" pt-0"
                class="mb-0 text-left"
              >
              </b-form-group>
              <b-form-select
                v-model="networkSelect.division"
                :options="divisions"
                value-field="id"
                text-field="name"
                @change="getBCouncils()"
              >
              </b-form-select>
            </div>

            <!-- Council -->
            <div v-if="networkFilter.council">
              <b-form-group
                label-cols-lg="3"
                :label="$t('search.Council')"
                label-size="md"
                label-class=" pt-0"
                class="mb-0 text-left"
              >
              </b-form-group>
              <b-form-select
                v-model="networkSelect.council"
                :options="councils"
                value-field="id"
                text-field="name"
                @change="
                  getBNeighbourhoods({ council_id: networkSelect.council })
                "
              >
              </b-form-select>
            </div>

            <!-- Neighbourhood -->
            <div v-if="networkFilter.neighbourhood">
              <b-form-group
                label-cols-lg="3"
                :label="$t('search.Neighbourhood')"
                label-size="md"
                label-class="pt-0"
                class="mb-0 text-left"
              >
              </b-form-group>
              <b-form-select
                v-model="networkSelect.neighbourhood"
                :options="neighbourhoods"
                value-field="id"
                text-field="name"
                @change="
                  searchNeigbourhoods({
                    neighborhood_id: networkSelect.neighbourhood,
                  })
                "
              >
              </b-form-select>
            </div>

            <b-link
              v-if="networkFilter.region"
              class="float-right mt-2 mb-2"
              @click="hideMoreFilters"
            >
              Hide More
            </b-link>
          </div>
        </div>
      </div>

      <span v-if="showform == true">
        <b-form-group
          label-cols-lg="3"
          :label="$t('search.Region')"
          label-size="md"
          label-class="pt-0"
          class="mb-0 text-left"
        >
        </b-form-group>

        <b-form-select v-model="selected">
          <b-form-select-option value="a">
            {{ $t("search.Yaounde") }}
          </b-form-select-option>
        </b-form-select>

        <br />

        <b-form-group
          label-cols-lg="3"
          :label="$t('search.Division')"
          label-size="md"
          label-class=" pt-0 text-left"
          class="mb-0"
        >
        </b-form-group>

        <b-form-select v-model="selected">
          <b-form-select-option value="a">
            {{ $t("search.My_Location") }}
          </b-form-select-option>
        </b-form-select>

        <br />

        <b-form-group
          label-cols-lg="12"
          :label="$t('search.Sub_Division')"
          label-size="md"
          label-class="pt-0 text-left"
          class="mb-0"
        >
        </b-form-group>

        <b-form-select v-model="selected">
          <b-form-select-option value="a">
            {{ $t("search.My_Location") }}
          </b-form-select-option>
        </b-form-select>

        <br />

        <b-form-group
          label-cols-lg="3"
          :label="$t('search.City')"
          label-size="md"
          label-class=" pt-0 text-left"
          class="mb-0"
        >
        </b-form-group>

        <b-form-select v-model="selected">
          <b-form-select-option value="a">
            {{ $t("search.My_Location") }}
          </b-form-select-option>
        </b-form-select>
        <br />
        <hr />
      </span>

      <div>
     
      </div>
    </div>

    <!-- Network -->
    <div v-if="filterType == '3'">
      <b-button
        v-if="networkFilter.region || networkFilter.category"
        class="float-right"
        size="sm"
        variant="outline-primary"
        @click="networkFilterReset()"
        >Reset
      </b-button>
      <br />
      <div>
        <!-- Category -->
        <div v-if="categories.length > 0">
          <b-form-group
            label-cols-lg="3"
            :label="$t('search.Categories')"
            label-size="md"
            label-class=" pt-0"
            class="mb-0 pt-2 text-left"
          >
          </b-form-group>
          <b-form-select
            v-model="networkSelect.category"
            :options="categories"
            value-field="category.id"
            text-field="category.name"
            @change="searchNetworks({ cat_id: networkSelect.category })"
          >
          </b-form-select>
        </div>
        <!-- Country -->
        <div>
          <b-form-group
            label-cols-lg="3"
            :label="$t('search.Country')"
            label-size="md"
            label-class=" pt-0"
            class="mb-0 pt-2 text-left"
          >
          </b-form-group>
          <b-form-select
            v-model="networkSelect.country"
            :options="countries"
            value-field="id"
            text-field="name"
            @change="getRegions()"
          >
          </b-form-select>
        </div>

        <!-- Region -->
        <div v-if="networkFilter.region">
          <b-form-group
            label-cols-lg="3"
            :label="$t('search.Region')"
            label-size="md"
            label-class=" pt-0"
            class="mb-0 text-left"
          >
          </b-form-group>

          <b-form-select
            v-model="networkSelect.region"
            :options="regions"
            value-field="id"
            text-field="name"
            @change="getDivisions()"
          >
          </b-form-select>
        </div>

        <!-- Division -->
        <div v-if="networkFilter.division">
          <b-form-group
            label-cols-lg="3"
            :label="$t('search.Division')"
            label-size="md"
            label-class=" pt-0"
            class="mb-0 text-left"
          >
          </b-form-group>
          <b-form-select
            v-model="networkSelect.division"
            :options="divisions"
            value-field="id"
            text-field="name"
            @change="getCouncils()"
          >
          </b-form-select>
        </div>

        <!-- Council -->
        <div v-if="networkFilter.council">
          <b-form-group
            label-cols-lg="3"
            :label="$t('search.Council')"
            label-size="md"
            label-class=" pt-0"
            class="mb-0 text-left"
          >
          </b-form-group>
          <b-form-select
            v-model="networkSelect.council"
            :options="councils"
            value-field="id"
            text-field="name"
            @change="getNeighbourhoods({ council_id: networkSelect.council })"
          >
          </b-form-select>
        </div>

        <!-- Neighbourhood -->
        <div v-if="networkFilter.neighbourhood">
          <b-form-group
            label-cols-lg="3"
            :label="$t('search.Neighbourhood')"
            label-size="md"
            label-class=" pt-0"
            class="mb-0 text-left"
          >
          </b-form-group>
          <b-form-select
            v-model="networkSelect.neighbourhood"
            :options="neighbourhoods"
            value-field="id"
            text-field="name"
            @change="
              searchNetworks({ neighborhood_id: networkSelect.neighbourhood })
            "
          >
          </b-form-select>
        </div>
      </div>

      <br />
    </div>
    <!-- End Network -->

    <component :is="currentFilter" />

    <b-modal ref="myfilters" id="userNeighbourhood" hide-footer title="GGGG">
      <b-form-group
        label-cols-lg="12"
        :label="$t('search.Neighbourhood')"
        label-size="md"
        label-class=" pt-0"
        class="mb-0 text-left"
      >
        <b-form-radio
          v-for="(nei, i) in userNeighbourhoods"
          :key="i.value"
          v-model="selectedneigbourhood"
          :value="nei.id"
          @change="searchByNeigbourhood(nei)"
          name="sub-filters"
        >
          {{ nei.name }}
        </b-form-radio>
      </b-form-group>
    </b-modal>

    <b-modal ref="myfilters" id="Neighbourhood" hide-footer title=" ">
      <b-form-group
        label-cols-lg="12"
        :label="$t('search.Neighbourhood')"
        label-size="md"
        label-class="pt-0"
        class="mb-0 text-left"
      >
        <b-form-radio
          v-for="(nei, i) in lneighbourhoods"
          :key="i.value"
          v-model="selectedneigbourhood"
          :value="nei.id"
          @change="searchByNeigbourhood(nei)"
          name="sub-filters"
        >
          {{ nei.name }}
        </b-form-radio>
      </b-form-group>
    </b-modal>

    <!-- Sub categories modal -->
    <b-modal ref="myfilters1" id="myModalllo" hide-footer title=" ">
      <div style="column-count: 2">
        <b-form-radio
          v-for="(sub, i) in subCategories"
          v-model="selected_sub_cat"
          :key="i"
          :value="sub.id"
          @change="searchByFilter(sub)"
          name="subCategories-list-modal"
          class=""
        >
          {{ sub.name }}
        </b-form-radio>
      </div>


    </b-modal>

    <!-- Sub categories modal -->
    <b-modal ref="suggestedmodal" id="suggestedmodal" hide-footer title=" ">
      <div style="column-count: 2">
        <b-form-radio
          v-for="(filter, i) in suggestedKeyword"
          :key="i.value"
          v-model="searchkeyword"
          :value="filter.id"
          @change="changesearchkeyword(filter)"
          name="sub-filters"
          class="m-1 br-3"
        >
          {{ filter.suggested_keyword }}
        </b-form-radio>
      </div>


    </b-modal>
  </div>
</template>

<script>
import { PeopleFilter, PostFilter } from "@/components/search";

import VueBootstrapTypeahead from "vue-bootstrap-typeahead";

import axios from "axios";
export default {
  components: {
    VueBootstrapTypeahead,
  },

  name: "filters",

  props: [
    "filterType",
    "activateMatching",
    "Selectedcategory",
    "Selectedparentcategory",
    "categoryNameSelected"
  ],
  watch: {
    query(newQuery) {
      axios.get(`neighborhoods/${newQuery}`).then(({ data }) => {
        this.$store.commit("auth/setneigbourhoods", data.data);
      });
    },



    categoryNameSelected: function (newValue, oldValue) {
      this.nameOfCategory = newValue;
    },

    activateMatching: async function (value) {
      if (value) {
        this.matchingCategory = [];
        this.$store.commit("marketSearch/setSubFilters", []);
        this.loading = true;
        const response = await this.$repository.search.matching(value.name);

        if (response.success) {
          this.matchingCategory = response.data.map((item) => {
            const sub = item.sub_category.map((c) => ({
              ...c,
              cat_id: item.id,
            }));

            return {
              ...item,
              actived: false,
              sub_category: sub,
            };
          });

          this.loading = false;
        } else {
          this.loading = false;
        }
      }
    },

    nameOfCategory: function (value) {
      if (!value.length) return false;

      const cat = this.$store.getters["marketSearch/getCategories"].find(
        (r) => r.category.name === value
      );

      this.$emit("onFinByCategory", { cat_id: cat.category.id });

      this.showSubCat(cat.sub_cat);
    },

    filterType: function (newId) {
      try {
        this.currentFilter = this.strategies[newId]();
      } catch (error) {
        this.nameOfCategory = null;
        this.currentFilter = newId;
      }
    },

    Selectedparentcategory: function (newVal) {
      switch (newVal) {
        case "Agriculture":
          this.selectcategories = this.agriculture_filters;
          break;
        case "Restaurants":
          this.selectcategories = this.restaurants_filters;
          break;
        case "Electronics":
          this.selectcategories = this.Electronics_filters;
          break;
        case "Clothing":
          this.selectcategories = this.clothing_filters;
          break;
        case "Mayorcouncils":
          this.selectcategories =
            this.Mayor_councils_filters_and_public_institution;
          break;
        case "Healthunits":
          this.selectcategories = this.Health_unit_filters;
          break;
        case "More":
          this.selectcategories = [];
          break;
        case "Tailoring":
          this.categories_filters = this.Tailoring;
          break;
      }
    },

    Selectedcategory: function (newVal) {
      this.showform = false;

      switch (newVal) {
        case "More":
          this.$refs["myfilters1"].show();
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
        case "Phone accessory":
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
        case "African Food":
          this.categories_filters = this.African_food;
          break;
        case "Asian food":
          this.categories_filters = this.Asian_food_filters;
          break;
        case "Fast Food":
          this.categories_filters = this.Fast_Food;
          break;
        case "European Food":
          this.categories_filters = [];
          break;
        case "Pizza":
          this.categories_filters = this.Pizza_filters;
          break;
        case "Bakery":
          this.categories_filters = this.Bakery_filters;
          break;
        case "Catering":
          this.categories_filters = this.Catering_filters;
          break;
        //clothing cases
        case "Tailoring_filters":
          this.categories_filters = this.Tailoring_filters;
          break;
        case "Women clothing":
          this.categories_filters = this.Women_clothing;
          break;
        case "Women accessories":
          this.categories_filters = this.Women_accessories;
          break;
        case "Men Clothing":
          this.categories_filters = this.Men_Clothing;
          break;
        case "Men Accessories":
          this.categories_filters = this.Men_Accessories;
          break;
        //health ubits
        case "Hospital":
          this.categories_filters = this.Hospitals;
          break;
        case "Pharmacies":
          this.categories_filters = this.Pharmacies;
          break;
        case "Clinic":
          this.categories_filters = this.Clinics_filters;
          break;
        case "COVID-19":
          this.categories_filters = [];
          break;
        //   Mayor Council
        case "station":
          this.categories_filters = this.station;
          break;
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
        case "Handicrafts":
          this.selectcategories = this.Handicrafts_filters;
          break;
        case "Hotels":
          this.selectcategories = this.Hotels_filters;
          break;
        case "Transport":
          this.selectcategories = this.Transport_filters;
          break;
        case "Grooming":
          this.selectcategories = this.Grooming_filters;
          break;
        case "Auto Mechanics":
          this.selectcategories = this.Mechanics_filters;
          break;
        case "Carding":
          this.selectcategories = [];
          break;
        case "Education":
          this.selectcategories = this.Educations_filters;
          break;
        case "Professional":
          this.selectcategories = this.Professional_and_home_service;
          break;
        case "Tailoring":
          this.selectcategories = this.Tailoring;
          break;
      }
    },
  },

  data() {
    return {
      loading: false,
      matchingCategory: [],
      query: "",
      showMore: false,
      // [Edouard] data
      nameOfCategory: null,
      searchkeyword: "",
      distance: "",
      selected_sub_cat: [],
      newCategories: [],
      selectedFilter: [],
      filterLoader: false,
      noFilter: [],
      selectedneigbourhood: null,

      searchParams: {
        cat_id: null,
        sub_cat: null,
        filter_id: null,
        division_id: null,
        region_id: null,
        country_id: null,
        neighbourhood: null,
        city: null,

        council_id: null,
        neighborhood_id: null,
        distanceInKM: null,
        price_range: null,
      },

      networkFilter: {
        category: false,
        region: false,
        division: false,
        council: false,
        neighbourhood: false,
      },

      networkSelect: {
        category: null,
        country: 1,
        region: null,
        division: null,
        council: null,
        neighbourhood: null,
      },

      strategies: null,
      currentFilter: null,
      slide: 0,
      sliding: null,
      priceRange: 100,
      showform: false,
      selectsp: "",
      selectsb: "",
      selectsn: "",
      selecteda: "",
      selectedc: "",
      selected: "all",
      location: "any",
      category: "any",
      post: "any",
      selectedb: "owner",
      educatio: "any",
      professio: "any",
      workplac: "any",
      agriculture: "",
      default_category: "Agriculture",
      selectedfilter: "",
      map: false,
      citiesValues: [],
      categories_filters: [],
      categories_sub_filters: [],
      
    };
  },

  computed: {
    islogin(){  return this.$store.getters["auth/isLogged"]; },
    city(){
     return this.$store.getters["allSearch/getLocation"];
    },
    categoryRendering() {
      return this.matchingCategory;
    },

    lneighbourhoods() {
      return this.$store.getters["auth/neigbourhoods"];
    },

    suggestedKeyword() {
      return this.$store.state.allSearch.suggestedKeyword;
    },

    categoriesAll() {
      const category = this.$store.getters["marketSearch/getCategories"].map(
        (e) => {
          return {
            id: e.category.id,
            value: e.category.name,
            text: e.category.name,
            sub_cat: e.category.sub_cat,
          };
        }
      );
      return category;
    },

    categories() {
      return this.$store.getters["marketSearch/getCategories"];
    },

    subCategories() {
      return this.$store.getters["marketSearch/getSubCat"];
    },
    subFilter() {
      return this.$store.getters["marketSearch/getSubFilters"];
    },
    countries() {
      return this.$store.getters["networkSearch/getCountries"];
    },
    regions() {
      return this.$store.getters["networkSearch/getRegions"];
    },
    divisions() {
      return this.$store.getters["networkSearch/getDivisions"];
    },
    councils() {
      return this.$store.getters["networkSearch/getCouncils"];
    },
    userNeighbourhoods() {
      return this.$store.getters["marketSearch/getUserNeighbourhoods"];
    },
    neighbourhoods() {
      return this.$store.getters["networkSearch/getNeighbourhoods"];
    },
    prodLoader() {
      return this.$store.getters["marketSearch/getLoader"];
    },
  },

  created() {
    this.islogin = this.$store.getters["auth/isLogged"];
    this.nameOfCategory = this.categoryNameSelected;
    this.getCountries();
    this.getCities();
    this.getUserNeibourhoods();
    this.strategies = {
      2: () => PeopleFilter,
      4: () => PostFilter,
    };
  },

  methods: {
    matching(cat) {
      this.$emit("onFinByCategory", { cat_id: cat.id });

      this.showSubCat(cat.sub_category);

      this.matchingCategory = this.matchingCategory.map((item) => {
        return item.id === cat.id
          ? { ...item, actived: true }
          : { ...item, actived: false };
      }); 
    },

    changesearchkeyword(keyword) {
      this.$emit("updateSearchKeyword", keyword.suggested_keyword);
    },

    resetFilters(restName) {
      this.matchingCategory = [];
      this.activateMatching = false;
      this.nameOfCategory = null;
      this.query = null;
      // this.city = null;
      this.$store.commit("marketSearch/setSubCat", []);
      this.searchParams.country_id = null;
      this.searchParams.region_id = null;
      this.searchParams.division_id = null;
      this.searchParams.council_id = null;

      this.selectedFilter = null;
      this.selected_sub_cat = null;

      this.searchParams.neighborhood_id = null;

      this.networkSelect.region = null;
      this.networkSelect.division = null;
      this.networkSelect.council = null;
      this.networkSelect.neighbourhood = null;

      this.searchParams.cat_id = null;
      this.searchParams.sub_cat = null;
      this.searchParams.filter_id = null;

      this.searchParams.neighbourhood = null;
      this.searchParams.location = { code: 62, label: 'Yaoundé' };
      this.searchParams.distanceInKM = null;
      this.searchParams.price_range = null;

      /* if (this.filterType == 1) {
        this.searchBusiness(this.searchParams);
      } else if (this.filterType == 4) {
        this.searchProducts(this.searchParams);
      } else if (this.filterType == 0) {
        this.allSearch(this.searchParams);
      } */

      this.nameOfCategory = "";
    },

    showSubCat(subCat) {
      this.$store.commit("marketSearch/setSubFilters", []);
      // this.subCategories.push(subCat);
      // this.searchProduct({ catId: catId, cat_id: catId });
      this.$store.commit("marketSearch/setSubCat", subCat);

      //if (!subCat.length) this.hideSubCat(category.id);
      // console.log("Subcat:", this.subCategories);
    },

    showMoreFilters() {
      this.showMore = true;
    },

    hideMoreFilters() {
      this.showMore = false;
    },

    getFilter(subCat) {
      this.searchParams.cat_id = subCat.cat_id;
      this.searchParams.sub_cat = subCat.id;

      this.noFilter = "";
      this.$store.commit("marketSearch/setSubFilters", []);
      if (this.filterType == 0) {
        this.$store
          .dispatch("marketSearch/getFilter", subCat.id)
          .then((res) => {
            // this.searchProducts({ cat_id: subCat.cat_id, sub_cat: subCat.id });
            this.searchProducts(this.searchParams);
            console.log("Filters: ");
            console.log(res.data.data);
            if (res.data.data.length === 0) {
              let subName = "";
              this.subCategories.map((sub) => {
                if (sub.id) {
                  subName = sub.name;
                }
              });
              this.noFilter = `No filter available for ${subName}!`;
            }
            // this.filterLoader = false;
            let filter = [];
            res.data.data.map((filt) => {
              filter.push({
                cat_id: subCat.cat_id,
                sub_cat_id: subCat.id,
                ...filt,
              });
            });
            this.$store.commit("marketSearch/setSubFilters", filter);
            //console.log("[DeBUG] FILTER: ", this.subFilter);
          })
          .catch((err) => {
            console.error(err);
            // this.filterLoader = false;
          });
      } else if (this.filterType == 1 || this.filterType == 5) {
        // method to search for a business lol
        this.$store
          .dispatch("marketSearch/getFilter", subCat.id)
          .then((res) => {
            // this.searchBusiness({ cat_id: subCat.cat_id, sub_cat: subCat.id });
            if(this.islogin)
          {
            this.searchBusiness(this.searchParams);
          }
          else
          {
            this.searchBusinessForGuestUser(this.searchParams);
          }

            if (res.data.data.length === 0) {
              let subName = "";
              this.subCategories.map((sub) => {
                if (sub.id) {
                  subName = sub.name;
                }
              });
              this.noFilter = `No filter available for ${subName}!`;
            }
            // this.filterLoader = false;
            let filter = [];
            res.data.data.map((filt) => {
              filter.push({
                cat_id: subCat.cat_id,
                sub_cat_id: subCat.id,
                ...filt,
              });
            });
            this.$store.commit("marketSearch/setSubFilters", filter);
            //console.log("[DeBUG] FILTER: ", this.subFilter);
          })
          .catch((err) => {
            console.error(err);
            // this.filterLoader = false;
          });

        if (this.filterType == 5) {
          this.allSearch({
            cat_id: subCat.cat_id,
            sub_cat: subCat.id,
            filter_id: subCat.id,
          });
        }
      }
    },

    searchProducts(data) {
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
        this.$store
        .dispatch("marketSearch/searchGuestUserProducts", data)
        .then((res) => {
          // console.log("categories loaded!");
        })
        .catch((err) => {
          console.log("Error erro!");
        });
         }
    },

    allSearch(data) {
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
      this.$store
        .dispatch("business/FIND_BUSINESS", data)
        .then((res) => {
          // console.log("categories loaded!");
        })
        .catch((err) => {
          console.log("Error erro!");
        });
    },
    searchBusinessForGuestUser(data) {
      this.$store
        .dispatch("business/FIND_BUSINESS_FOR_GUEST_USER", data)
        .then((res) => {
          // console.log("categories loaded!");
        })
        .catch((err) => {
          console.log("Error erro!");
        });
    },

    searchByFilter(filter) {
      // this.searchProducts({
      //     cat_id: filter.cat_id,
      //     sub_cat: filter.sub_cat_id,
      //     filter_id: filter.id,
      //   });

      this.searchParams.filter_id = filter.id;
      this.searchParams.cat_id = filter.cat_id;
      this.searchParams.sub_cat = filter.cat_id;

      if (this.filterType == 1) {
        console.log("[DEBUG] Filter: ", filter);
        // this.searchBusiness({
        //   cat_id: filter.cat_id,
        //   sub_cat: filter.sub_cat_id,
        //   filter_id: filter.id,
        // });
        if(this.islogin)
          {
            this.searchBusiness(this.searchParams);
          }
          else
          {
            this.searchBusinessForGuestUser(this.searchParams);
          }

        this.$bvModal.hide("myModalllo");
      } else if (this.filterType ==0) {
        console.log("[DEBUG] Filter: ", filter);
        // this.searchProducts({
        //   cat_id: filter.cat_id,
        //   sub_cat: filter.sub_cat_id,
        //   filter_id: filter.id,
        // });

        this.searchProducts(this.searchParams);

        this.$bvModal.hide("myModalllo");
      } else if (this.filterType == 5) {
        console.log("[DEBUG] Filter: ", filter);
        // this.allSearch({
        //   cat_id: filter.cat_id,
        //   sub_cat: filter.id,
        //   filter_id: filter.id,
        // });

        this.allSearch(this.searchParams);

        this.$bvModal.hide("myModalllo");
      }
    },
    getUserNeibourhoods() {
      //console.log("[debug] neigbourhood: ", this.userNeighbourhoods);
      this.$store
        .dispatch("marketSearch/getUserNeigbourhoods")
        .then((res) => {
          console.log("[debug] neigbourhood: ", this.userNeighbourhoods);
        })
        .catch((err) => {
          console.log("Error erro!");
        });
      //console.log("[debug]neigbourhood: ", this.userNeighbourhoods);
    },

    searchThisNeibourhood(keyword) {
      this.searchParams.neighbourhood = keyword;

      if (this.filterType == 1) {
        if(this.islogin)
          {
            this.searchBusiness(this.searchParams);
          }
          else
          {
            this.searchBusinessForGuestUser(this.searchParams);
          }
      } else if (this.filterType ==0) {
        this.searchProducts(this.searchParams);
      } else if (this.filterType == 5) {
        this.allSearch(this.searchParams);
      }
    },

    searchThiscity(keyword) {
    
      let data = { city: keyword.code };

      this.searchParams.city = keyword.code;

      if (this.filterType == 1) {
        if(this.islogin)
          {
            this.searchBusiness(this.searchParams);
          }
          else
          {
            this.searchBusinessForGuestUser(this.searchParams);
          }
      } else if (this.filterType ==0) {
        this.searchProducts(this.searchParams);
      } else if (this.filterType == 5) {
        this.allSearch(this.searchParams);
      }
    },

    searchByNeigbourhood(nei) {
      let data = {
        location: nei,
      };

      this.searchParams.neighbourhood = nei;

      if (this.filterType == 0) {
        this.searchProducts(this.searchParams);
      } else if (this.filterType == 1) {
        if(this.islogin)
          {
            this.searchBusiness(this.searchParams);
          }
          else
          {
            this.searchBusinessForGuestUser(this.searchParams);
          }
      }
    },
    searchByDistance(value) {
      /* console.log("[DEBUG] PRICE: ", value);
      console.log("[DEBUG] subcat: ", this.subCategories[0].cat_id); */
      let data = {
        distanceInKM: this.distance,
      };
      this.searchParams.distanceInKM = this.distance;

      if (this.filterType == 1) {
        this.searchProducts(this.searchParams);
      }
      if (this.filterType == 1) {
        if(this.islogin)
          {
            this.searchBusiness(this.searchParams);
          }
          else
          {
            this.searchBusinessForGuestUser(this.searchParams);
          }
      }
    },
    searchByPrice(value) {
      /* console.log("[DEBUG] PRICE: ", value);
      console.log("[DEBUG] subcat: ", this.subCategories[0].cat_id); */
      let catId = this.subCategories[0].cat_id;
      let data = {
        cat_id: catId,
        price_range: `${[180, value]}`,
      };

      this.searchParams.price_range = `${[180, value]}`;

      this.searchProducts(data);
    },
    // Network search filter
    getCountries() {
      //console.log("[debug] Networks: ", this.networkSelect);
      this.$store
        .dispatch("networkSearch/COUNTRIES")
        .then((res) => {
          // console.log("categories loaded!");
          console.log("countries: ", this.countries);
          if (this.networkSelect.country) this.getRegions();
        })
        .catch((err) => {
          console.log("Error erro!");
        });
      //console.log("[debug]country: ", this.countries);
    },

    //blec location filters  i;plementation  bbbbbbb

    getBRegions() {
      let data = { country_id: this.networkSelect.country };

      this.searchParams.country_id = this.networkSelect.country;
      this.searchParams.region_id = null;
      this.searchParams.division_id = null;
      this.searchParams.council_id = null;

      this.searchParams.neighborhood_id = null;

      this.$store
        .dispatch("networkSearch/REGIONS", data)
        .then((res) => {
          if (this.networkSelect.region) this.getBDivisions();

          this.networkFilter = {
            category: false,
            region: true,
            division: false,
            council: false,
            neighbourhood: false,
          };

          this.networkSelect.region = null;
          this.networkSelect.division = null;
          this.networkSelect.council = null;
          this.networkSelect.neighbourhood = null;
          console.log("regions: ", this.regions);
        })
        .catch((err) => {
          console.log("Error erro!");
        });

      if (this.filterType == 1) {
        if(this.islogin)
          {
            this.searchBusiness(this.searchParams);
          }
          else
          {
            this.searchBusinessForGuestUser(this.searchParams);
          }
      } else if (this.filterType == 0) {
        this.searchProducts(this.searchParams);
      } else if (this.filterType == 5) {
        this.allSearch(this.searchParams);
      }
    },

    getBDivisions() {
      let data = { region_id: this.networkSelect.region };

      this.searchParams.division_id = null;
      this.searchParams.council_id = null;

      this.searchParams.neighborhood_id = null;

      this.searchParams.region_id = this.networkSelect.region;

      if (this.filterType == 1) {
        if(this.islogin)
          {
            this.searchBusiness(this.searchParams);
          }
          else
          {
            this.searchBusinessForGuestUser(this.searchParams);
          }
      } else if (this.filterType == 0) {
        this.searchProducts(this.searchParams);
      } else if (this.filterType == 5) {
        this.allSearch(this.searchParams);
      }

      this.$store
        .dispatch("networkSearch/DIVISIONS", data)
        .then((res) => {
          if (this.networkSelect.division) this.getBCouncils();
          this.networkFilter = {
            category: false,
            region: true,
            division: true,
            council: false,
            neighbourhood: false,
          };

          this.networkSelect.division = null;
          this.networkSelect.council = null;
          this.networkSelect.neighbourhood = null;
        })
        .catch((err) => {
          console.log("Error erro!");
        });
    },

    async getBCouncils() {
      const data = { division_id: this.networkSelect.division };

      this.searchParams.division_id = this.networkSelect.division;

      this.searchParams.council_id = null;

      this.searchParams.neighborhood_id = null;

      if (this.filterType == 1) {
        if(this.islogin)
          {
            this.searchBusiness(this.searchParams);
          }
          else
          {
            this.searchBusinessForGuestUser(this.searchParams);
          }
      } else if (this.filterType == 0) {
        this.searchProducts(this.searchParams);
      } else if (this.filterType == 5) {
        this.allSearch(this.searchParams);
      }

      await this.$store
        .dispatch("networkSearch/COUNCILS", data)
        .then((res) => {
          console.log("councils: ", this.councils);

          this.networkFilter = {
            category: false,
            region: true,
            division: true,
            council: true,
            neighbourhood: false,
          };

          this.networkSelect.neighbourhood = null;
        })
        .catch((err) => {
          console.log("Error erro!");
        });
      if (this.networkSelect.council) {
        console.log("Here...");
        this.searchParams.council_id = this.networkSelect.council;

        this.searchParams.neighborhood_id = null;

        //this.getBNeighbourhoods({ council_id: this.networkSelect.council });

        this.getBNeighbourhoods(this.searchParams);
      }

      if (this.filterType == 1) {
        if(this.islogin)
          {
            this.searchBusiness(this.searchParams);
          }
          else
          {
            this.searchBusinessForGuestUser(this.searchParams);
          }
      } else if (this.filterType == 0) {
        this.searchProducts(this.searchParams);
      } else if (this.filterType == 5) {
        this.allSearch(this.searchParams);
      }
    },

    async searchNeigbourhoods(data) {
      this.searchParams.neighborhood_id = data.neighborhood_id;

      if (this.filterType == 1) {
        if(this.islogin)
          {
            this.searchBusiness(this.searchParams);
          }
          else
          {
            this.searchBusinessForGuestUser(this.searchParams);
          }
      } else if (this.filterType == 0) {
        this.searchProducts(this.searchParams);
      } else if (this.filterType == 5) {
        this.allSearch(this.searchParams);
      }
    },

    async getBNeighbourhoods(data) {
      this.searchParams.council_id = this.networkSelect.council;

      if (this.filterType == 1) {
        if(this.islogin)
          {
            this.searchBusiness(this.searchParams);
          }
          else
          {
            this.searchBusinessForGuestUser(this.searchParams);
          }
      } else if (this.filterType == 0) {
        this.searchProducts(this.searchParams);
      } else if (this.filterType == 5) {
        this.allSearch(this.searchParams);
      }

      await this.$store
        .dispatch("networkSearch/NEIGHBOURHOODS", data)
        .then((res) => {
          console.log("Neighbourhoods: ", this.neighbourhoods);
          this.networkFilter = {
            category: false,
            region: true,
            division: true,
            council: true,
            neighbourhood: true,
          };
        })
        .catch((err) => {
          console.log("Error erro!");
        });
      if (this.filterType == 1) {
        if(this.islogin)
          {
            this.searchBusiness(this.searchParams);
          }
          else
          {
            this.searchBusinessForGuestUser(this.searchParams);
          }
      } else if (this.filterType == 0) {
        this.searchProducts(this.searchParams);
      } else if (this.filterType == 5) {
        this.allSearch(this.searchParams);
      }
    },

    //bbbbbbbbbb

    getRegions() {
      //console.log("[debug] Networks: ", this.networkSelect);
      const data = { country_id: this.networkSelect.country };
      this.searchNetworks(data);
      this.$store
        .dispatch("networkSearch/REGIONS", data)
        .then((res) => {
          if (this.networkSelect.region) this.getDivisions();
          this.networkFilter = {
            category: false,
            region: true,
            division: false,
            council: false,
            neighbourhood: false,
          };
          this.networkSelect.region = null;
          this.networkSelect.division = null;
          this.networkSelect.council = null;
          this.networkSelect.neighbourhood = null;
          //console.log("regions: ", this.regions);
        })
        .catch((err) => {
          console.log("Error erro!");
        });
      // this.networkSelect = {
      //   division:null,
      //   council:null,
      //   neighbourhood:null
      // }
    },

    getCities(){
      const cities =  this.$store.getters["auth/cities"];
        for (let index in cities) {
        this.citiesValues.push({
          label: cities[index].name,
          code: cities[index].id
        });
      }
    },

    getDivisions() {
      //console.log("[debug] networks: ", this.networkSelect);
      const data = { region_id: this.networkSelect.region };

      this.searchNetworks(data);

      this.$store
        .dispatch("networkSearch/DIVISIONS", data)
        .then((res) => {
          console.log("divisions: ", this.divisions);
          if (this.networkSelect.division) this.getCouncils();
          this.networkFilter = {
            category: false,
            region: true,
            division: true,
            council: false,
            neighbourhood: false,
          };
          // this.networkSelect.region = null;

          this.networkSelect.division = null;
          this.networkSelect.council = null;
          this.networkSelect.neighbourhood = null;
        })
        .catch((err) => {
          console.log("Error erro!");
        });
    },

    async getCouncils() {
      //console.log("[debug] networks...: ", this.networkSelect);
      const data = { division_id: this.networkSelect.division };
      await this.$store
        .dispatch("networkSearch/COUNCILS", data)
        .then((res) => {
          console.log("councils: ", this.councils);

          this.networkFilter = {
            category: false,
            region: true,
            division: true,
            council: true,
            neighbourhood: false,
          };

          this.networkSelect.neighbourhood = null;
        })
        .catch((err) => {
          console.log("Error erro!");
        });
      if (this.networkSelect.council) {
        console.log("Here...");
        this.getNeighbourhoods({ council_id: this.networkSelect.council });
      }
      this.searchNetworks(data);
    },
    async getNeighbourhoods(data) {
      /* console.log("[debug] networks...: ", this.networkSelect);
      console.log("DATA:", data);
      console.log("[debug] Neighbourhoods: ", this.neighbourhoods); */
      this.searchNetworks(data);
      await this.$store
        .dispatch("networkSearch/NEIGHBOURHOODS", data)
        .then((res) => {
          //console.log("Neighbourhoods: ", this.neighbourhoods);
          this.networkFilter = {
            category: false,
            region: true,
            division: true,
            council: true,
            neighbourhood: true,
          };
        })
        .catch((err) => {
          console.log("Error erro!");
        });
      this.searchNetworks(data);
    },

    networkFilterFill() {
      if (this.networkFilter.region == false) this.getRegions();
      if (
        this.networkFilter.region == true &&
        this.networkFilter.division == false &&
        this.networkFilter.council == false
      ) {
        this.getDivisions();
        this.networkFilter.division = true;
      } else if (
        this.networkFilter.division == true &&
        this.networkFilter.council == false
      ) {
        this.getCouncils();
        this.networkFilter.council = true;
      } else if (this.networkFilter.council == true) {
        this.getNeighbourhoods({ council_id: this.networkSelect.council });
        this.searchNetworks({ council_id: this.networkSelect.council });
        this.networkFilter.neighbourhood = true;
      }
      this.networkFilter.region = true;
    },

    networkFilterReset() {
      this.searchNetworks({ keyword: "" });
      this.networkFilter = {
        category: false,
        region: false,
        division: false,
        council: false,
        neighbourhood: false,
      };
      this.networkSelect = {
        country: [],
        region: [],
        division: [],
        council: [],
        neighbourhood: [],
      };
    },

    async searchNetworks(data) {
      this.networkFilter.category = true;

      await this.$store
        .dispatch("networkSearch/SEARCH", data)
        .then((res) => {
          // console.log("categories loaded!");
        })
        .catch((err) => {
          console.error(err);
        });
    },

    // END Network search filter
    // All Search
    allSearchByCat(data) {
      this.$store
        .dispatch("allSearch/SEARCH", data)
        .then((res) => {
          // console.log("categories loaded!");
        })
        .catch((err) => {
          console.log("Error erro!");
        });
    },

    // Not ED code
    selectedsidebar() {
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
        case "Car care":
          this.categories_filters = this.Car_care_filters;
          break;
        case "Auto Dealers":
          this.categories_filters = this.Auto_Dealers_filters;
          break;
        case "Spare part":
          this.categories_filters = this.Spare_parts_filters;
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
        case "Phone and accessories":
          this.categories_filters = this.phone_filters;
          break;
        case "Computers, Tablets and accessories":
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
          break;
        case "Asian food":
          this.categories_filters = this.Asian_food_filters;
          break;
        case "Fast_food ":
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
          this.categories_filters = this.Tailoring_filters;
          break;
        //health ubits
        case "Hospital":
          this.categories_filters = this.Hospitals;
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
        case "Ministries ":
          this.categories_filters = this.categories_filters = [];
          this.showform = true;
          break;
        case "Mayor Councils ":
          this.categories_filters = this.categories_filters = [];
          this.showform = true;
          break;
        case "Schools":
          this.categories_filters = this.Schools;
          this.showform = true;
          break;
        //More filters
        case "Handicrafts":
          this.selectcategories = this.Handicrafts_filters;
          break;
      }
    },

    switchcategories() {
      switch (this.default_category) {
        case "Professional_and_home_service":
          this.categories_filters = this.Professional_and_home_service;
          break;
        case "Agriculture ":
          this.categories_filters = this.agriculture_filters;
          break;
        case "Restaurant ":
          this.categories_filters = this.restaurants;
          break;
        case "Electronics ":
          this.categories_filters = this.electronics;
          break;
        case "Mechanics":
          this.categories_filters = this.Mechanics_filters;
          break;
        case "Handicrafts":
          this.categories_filters = this.Handicrafts;
          break;
        case "Health_unit ":
          this.categories_filters = this.Health_unit;
          break;
        case "Bars":
          this.categories_filters = this.Bars;
          break;
        case "Hair_and_beauty ":
          this.categories_filters = this.Hair_and_beauty;
          break;
        case "Real_estate ":
          this.categories_filters = this.Real_estate;
          break;
        case "Travelling ":
          this.categories_filters = this.Travelling;
          break;
        case "Hotels":
          this.categories_filters = this.Hotels;
          break;
        case "station":
          this.categories_filters = this.station;
          break;
        case "Mayor_concils ":
          this.categories_filters = this.Mayor_concils;
          break;
        case "Taxis_service ":
          this.categories_filters = this.Taxis_service;
          break;
        case "clothing":
          this.categories_filters = this.clothing;
          break;
      }
    },
    setSelectedLocation(value)
    {  
       this.$emit("updateSearchLocation", {code: value.code, label: value.label });
       this.searchThiscity(value);
    }
  },
};
</script>

<style scoped>
.inactied {
  cursor: pointer;
  font-size: 14px;
   color: #455a64;
   font-weight: 400;
  border: 1px solid #455a64; 
  background: transparent;
}

.actived {
  cursor: pointer;
  font-size: 14px;
  color: white;
  border: 1px solid #e75c18;
  background: #e75c18;
}

.br-3 {
  border-radius: 5px;
}

.logo-img {
  width: 60px;
}

@media only screen and (max-width: 768px) {
  h4 {
    font-size: 15px;
  }
  .logo-img {
    width: 30px;
  }
  .see-all-link {
    font-size: 10px;
  }
}
.p-card {
  margin: 10px;
  border: 0px;
}
.search-form {
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: right;
}
.m-component {
  margin: -20px;
}
.w-50 {
  width: 50%;
  height: 50px;
}
select option {
  margin: 40px;
  background: white;

}
.wi-25 {
  width: 25%;
  height: 50px;
}
.b-groupe {
  background-color: orangered;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-style: none;
  color: white;
}
.custom-select {
  display: inherit;
}
.color-sit {
  color: white;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
}
.a-center {
  align-content: center;
  text-align: center;
  margin-top: 15px;
}
.div-h {
  height: 350px;
  overflow: auto;
  overflow-x: hidden;
}
</style>