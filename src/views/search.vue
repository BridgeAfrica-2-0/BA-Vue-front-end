<template>
  <div style="overflow-x: hidden; color:black ">
    <Nav />

    <SubNav
      @category="getCategory"
      @parentcategory="getparentCategory"
      style="margin-top:-25px"
    />

    <hr style="margin-top:-0px" class="d-none d-sm-none d-lg-block" />

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

    <hr style="margin-top:-0px" />

    <div
      class="d-block d- d-sm-block  d-md-block d-lg-block d-xl-none"
      v-if="selectedId == '1' || selectedId == '4'"
    >
      <b-row>
        <b-col cols="3" class="text-center">
          <b-link class="cat" @click="SetCat('Agriculture')">
            <img
              class="img-fluid picture logo-img"
              src="@/assets/icons/mobile/agriculture.png"
            />

            Agriculture
          </b-link>
        </b-col>

        <b-col cols="3" class="text-center">
          <b-link class="cat" @click="SetCat('Restaurants')">
            <img
              class="img-fluid picture logo-img"
              src="@/assets/icons/mobile/restaurants.png"
            />
            Restaurants
          </b-link>
        </b-col>

        <b-col cols="3" class="text-center">
          <b-link class="cat" @click="SetCat('Clothing')">
            <img
              class="img-fluid picture logo-img"
              src="@/assets/icons/mobile/clothing.png"
            />
            Clothing
          </b-link>
        </b-col>

        <b-col cols="3" class="text-center ">
          <b-link class="cat" @click="SetCat('MC')">
            <img
              class="img-fluid picture logo-img"
              src="@/assets/icons/mobile/mayor.png"
            />

            PI
          </b-link>
        </b-col>

        <b-col cols="3" class="text-center mt-2">
          <b-link class="cat" @click="SetCat('Electronics')">
            <img
              class="img-fluid picture logo-img"
              src="@/assets/icons/mobile/electronics.png"
            />
            Electronics
          </b-link>
        </b-col>

        <b-col cols="3" class="text-center mt-2">
          <b-link class="cat" @click="SetCat('Handicraft')">
            <img
              class="img-fluid picture logo-img"
              src="@/assets/icons/mobile/handicrft 2.png"
            />

            Handicraft
          </b-link>
        </b-col>

        <b-col cols="3" class="text-center mt-2">
          <b-link class="cat" @click="SetCat('HU')">
            <img
              class="img-fluid picture logo-img"
              src="@/assets/icons/mobile/health unit.png"
            />
            Health
          </b-link>
        </b-col>

        <b-col cols="3" class="text-center mt-2">
          <b-link class="cat" v-b-modal="'myModalla'">
            <img
              class="img-fluid picture logo-img"
              src="@/assets/icons/more.png"
            />
            More
          </b-link>
        </b-col>
      </b-row>

      <b-modal ref="setcat" id="myModalla" hide-footer title=" ">
        <b-row>
          <b-col cols="6" class="p-2">
            <p>
              <b-link @click="SetCat('Handicraft')" href="#">
                Handicraft
              </b-link>
            </p>

            <p><b-link @click="SetCat('Hotels')" href="#"> Hotels </b-link></p>

            <p>
              <b-link @click="SetCat('Transport')" href="#"> Transport </b-link>
            </p>

            <p>
              <b-link @click="SetCat('Grooming')" href="#">
                Mens & Women <br />
                Grooming
              </b-link>
            </p>

            <p>
              <b-link @click="SetCat('Station')" href="#"> Station </b-link>
            </p>
          </b-col>

          <b-col cols="6" class="p-2">
            <p>
              <b-link @click="SetCat('Auto Mechanics')" href="#">
                Auto Mechanics
              </b-link>
            </p>
            <p>
              <b-link @click="SetCat('Carding')" href="#"> Carding </b-link>
            </p>

            <p>
              <b-link @click="SetCat('Education')" href="#"> Education </b-link>
            </p>
            <p>
              <b-link @click="SetCat('Professional')" href="#">
                Professional <br />
                Service</b-link
              >
            </p>
          </b-col>
        </b-row>
      </b-modal>
    </div>

    <div class="container-fluid medium-filters ">
      <b-row>
        <b-col cols="3">
          <b-button
            class="shadow border  mob-btn"
            v-b-modal="'myModall'"
          >
            Filter
          </b-button>
        </b-col>

        <b-modal ref="myfilters" id="myModall" hide-footer title=" ">
          <div class="d-block d- d-sm-block  d-md-block d-lg-block d-xl-none">
            <div style="column-count: 2;">
              <b-form-checkbox
                v-for="category in selectcategories"
                @change="switchcategories"
                :key="category.value"
                :value="category.value"
                v-model="default_category"
                name="flavour-4a"
                class="m-1 s br-3"
              >
                {{ category.text }}
              </b-form-checkbox>
            </div>

            <hr />

            <span v-if="categories_filters.length">
              <h6>Filters</h6>
            </span>
            <div style="column-count: 2;">
              <b-form-checkbox
                v-for="agriculture in categories_filters"
                v-model="selectedfilter"
                :key="agriculture.value"
                :value="agriculture.value"
                name="flavour-4a"
                class="m-1   br-3"
              >
                {{ agriculture.text }}
              </b-form-checkbox>
            </div>

            <span v-if="showform == true">
              <b-form-group
                label-cols-lg="3"
                label="Region"
                label-size="md"
                label-class="font-weight-bold pt-0"
                class="mb-0 text-left"
              >
              </b-form-group>

              <b-form-select v-model="selected">
                <b-form-select-option value="a">
                  Yaounde
                </b-form-select-option>
              </b-form-select>

              <br />

              <b-form-group
                label-cols-lg="3"
                label="Division"
                label-size="md"
                label-class="font-weight-bold pt-0 text-left"
                class="mb-0"
              >
              </b-form-group>

              <b-form-select v-model="selected">
                <b-form-select-option value="a">
                  My Location
                </b-form-select-option>
              </b-form-select>

              <br />

              <b-form-group
                label-cols-lg="12"
                label=" Sub Division"
                label-size="md"
                label-class="font-weight-bold pt-0 text-left"
                class="mb-0"
              >
              </b-form-group>

              <b-form-select v-model="selected">
                <b-form-select-option value="a">
                  My Location
                </b-form-select-option>
              </b-form-select>

              <br />

              <b-form-group
                label-cols-lg="3"
                label="City"
                label-size="md"
                label-class="font-weight-bold pt-0 text-left"
                class="mb-0"
              >
              </b-form-group>

              <b-form-select v-model="selected">
                <b-form-select-option value="a">
                  My Location
                </b-form-select-option>
              </b-form-select>

              <br />

              <hr />
            </span>

            <b-form-group
              label-cols-lg="12"
              label="Neighbourhood"
              label-size="md"
              label-class="font-weight-bold pt-0"
              class="mb-0 text-left"
            >
              <b-form-checkbox id="" class="a-text" name="" value="">
                Buea</b-form-checkbox
              >

              <b-form-checkbox id="" class="a-text" name="" value="">
                Tiko</b-form-checkbox
              >

              <b-form-checkbox id="" class="a-text" name="" value="">
                Limbe</b-form-checkbox
              >

              <b-form-checkbox id="" class="a-text" name="" value="">
                Mutengene</b-form-checkbox
              >
            </b-form-group>

            <br />

            <hr />

            <b-form-group
              label-cols-lg="12"
              label="Distance"
              label-size="md"
              label-class="font-weight-bold pt-0 text-left"
              class="mb-0"
            >
              <b-form-checkbox id="" class="a-text" name="" value="">
                3km</b-form-checkbox
              >

              <b-form-checkbox id="" class="a-text" name="" value="">
                9km</b-form-checkbox
              >

              <b-form-checkbox id="" class="a-text" name="" value="">
                15km</b-form-checkbox
              >

              <b-form-checkbox id="" class="a-text" name="" value="">
                25km</b-form-checkbox
              >
            </b-form-group>

            <b-button variant="primary" class="m-3  float-right">
              Search
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
            class="shadow border  mob-btn"
            id="show-btn"
            @click="showFilters"
          >
            Filter
          </b-button>
        </b-col>

        <b-col cols="3" md>
          <b-button class="shadow border   mob-btn " @click="togglelist">
            List
          </b-button>
        </b-col>

        <b-col cols="4">
          <b-button class="shadow border   mob-btn " @click="togglemap()">
            Map
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
            />
          </div>
        </b-col>

        <b-col cols="12" md="8" lg="8" xl="6" ref="middleblock">
          <div class="container-flex a-flex">
            <!--filter for all takes just two fields at a time  -->

            <div id="all" v-if="selectedId == '0'">
              <h6>
                Sponsored Result
                <fas-icon
                  class=" icons"
                  :icon="['fas', 'exclamation-circle']"
                  size="lg"
                />
              </h6>

              <div>
                <Sponsor />
              </div>

              <h6>
                <fas-icon
                  class="icons"
                  :icon="['fas', 'hands-helping']"
                  size="lg"
                />
                Businesses
              </h6>

              <Business />

              <span class="float-right mb-3">
                <b-link> see more </b-link>
              </span>
              <br />

              <hr />
              <fas-icon class="icons" :icon="['fas', 'users']" size="lg" />
              <h6>People</h6>

              <People />
              <span class="float-right mb-3"> see more </span> <br />

              <hr />

              <h6>
                <fas-icon
                  class=" icons"
                  :icon="['fas', 'project-diagram']"
                  size="lg"
                />
                Network
              </h6>

              <Network />
              <span class="float-right mb-3"> see more </span> <br />

              <hr />

              <h6>
                <fas-icon class="icons " :icon="['fas', 'store']" size="lg" />
                Market
              </h6>

              <Market />

              <span class="float-right mb-3"> see more </span> <br />

              <hr />

              <h6>
                <fas-icon class=" icons" :icon="['fab', 'readme']" size="lg" />
                Post
              </h6>

              <Post />

              <span class="float-right mb-3"> see more </span> <br />

              <hr />
            </div>

            <!--  select just businesses      -->

            <div id="businesses" v-if="selectedId == '1'">
              <h6>
                <fas-icon
                  class="icons"
                  :icon="['fas', 'hands-helping']"
                  size="lg"
                />
                Businesses
              </h6>

              <Business />

              <Business />

              <Business />

              <Business />
            </div>

            <!-- filter out only people -->

            <div v-if="selectedId == '2'">
              <h6>
                <fas-icon class="icons" :icon="['fas', 'users']" size="lg" />
                People
              </h6>

              <People />

              <People />

              <People />

              <People />
            </div>

            <!-- filter out just the network  -->

            <div v-if="selectedId == '3'">
              <h6>
                <fas-icon
                  class=" icons"
                  :icon="['fas', 'project-diagram']"
                  size="lg"
                />
                Networks
              </h6>

              <Network />

              <Network />

              <Network />

              <Network />
            </div>

            <!-- Filter out just the market place -->

            <div v-if="selectedId == '4'">
              <h6>
                <fas-icon class="icons " :icon="['fas', 'store']" size="lg" />
                Market
              </h6>

              <Market />
            </div>

            <!-- Filter out just the post  -->

            <div v-if="selectedId == '5'">
              <h6>
                <fas-icon class=" icons" :icon="['fab', 'readme']" size="lg" />
                Post
              </h6>

              <Post />
            </div>
          </div>
        </b-col>

        <b-col cols="12" md="4" lg="4" xl="3" class="showmap" ref="mapblock">
          <div id="map" style="margin-top: 20px;" class=""><Map /></div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import LyTab from "@/tab/src/index.vue";

import Map from "@/components/search/map";

import Business from "@/components/search/business";
import People from "@/components/search/people";
import Network from "@/components/search/network";
import Post from "@/components/search/posts";
import Market from "@/components/search/market";
import Nav from "@/components/navbar";

import Filters from "@/components/search/filters";

import SubNav from "@/components/subnav";

import Sponsor from "@/components/search/sponsoredBusiness";

export default {
  components: {
    LyTab,
    Nav,
    SubNav,
    Filters,
    Map,
    Business,
    Sponsor,
    People,
    Network,
    Post,
    Market

    // Footer,
  },
  data() {
    return {
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

      //selectcategories:[],

      categories_filters: [],
      items: [
        { label: "All " },

        { label: "Business" },
        { label: "People" },
        { label: "Network" },
        { label: "Market" },
        { label: "Post" }
      ],

      Finished_Branded_Products_filters: [
        { value: "Peanuts", text: "Peanuts" },
        { value: "Chocolate", text: "Chocolate" },

        { value: "Jam", text: "Jam" }
      ],

      Coffee_filters: [
        { value: "tea", text: "Tea" },
        { value: "coffe", text: "Coffe" }
      ],

      Dairy_filters: [
        { value: "Yoghurts", text: "Yoghurts" },
        { value: "coffe", text: "Coffe" },

        { value: "Milk", text: "Milk" },
        { value: "Butter", text: "Butter" },
        { value: "Cheese", text: "Cheese" },
        { value: "Ice_cream", text: "Ice cream " }
      ],

      Oils_filters: [
        { value: "Coconut_oils", text: "Coconut oils" },
        { value: "Palm_oil", text: "Palm oil" },
        { value: "Palm_oil", text: "Palm oil" },

        { value: "vetegetable_oil", text: " Vegetable " }
      ],

      Beans_filters: [
        { value: "Red_beans", text: "Red beans" },
        { value: "Black_beans", text: "Black beans" },

        { value: "White_beans", text: "White beans" },
        { value: "Senegalese_beans", text: "Senegalese beans" },
        { value: "Koki_beans", text: "Koki beans" }
      ],

      Spices_filters: [
        { value: "Green_spices", text: "Green spices" },
        { value: "Ginger", text: "Ginger" },

        { value: "Garlic", text: "Garlic" },
        { value: "Djansang", text: "Djansang" },

        { value: "Curry", text: "Curry" },

        { value: "white_pepper", text: "white pepper" },

        { value: "Penja", text: "Penja" }
      ],

      starch_filters: [
        { value: "Cocoyam", text: "Cocoyam" },
        { value: "Cassava", text: "Cassava" },

        { value: "Plantains", text: "Plantains" },
        { value: "Potatoes", text: "Potatoes" },
        { value: "Plantains", text: "Plantains" },
        { value: "Yams", text: "Yams" },

        { value: "Beans", text: "Beans" },

        { value: "Garri", text: "Garri" },
        { value: "Okra", text: "Okra" },
        { value: "Corn", text: "Corn" },
        { value: "Groundnuts", text: "Groundnuts" },
        { value: "Bobolo", text: "Bobolo " }
      ],

      Cereals_filters: [
        { value: "Wheat", text: "Wheat" },
        { value: "Rice", text: "Rice" },

        { value: "Maize", text: "Maize" },
        { value: "Oat", text: "Oat" },

        { value: "Barley", text: "Barley" },

        { value: "Millet", text: "Millet" }
      ],

      Raw_material_filters: [
        { value: "Cocoa", text: "Cocoa" },
        { value: "Coffee", text: "Coffee" },

        { value: "Rubber", text: "Rubber" },
        { value: "Charcoal", text: "Charcoal" }
      ],

      Livestock_filters: [
        { value: "Chicken", text: "Chicken" },
        { value: "Beef", text: "Beef" },

        { value: "Pork", text: "Pork" },
        { value: "Bushmeat", text: "Bushmeat" },
        { value: "Goats", text: "Goats" },
        { value: "Duck", text: "Duck" },
        { value: "Lambs", text: "Lambs" },
        { value: "Rabbits", text: " Rabbits " },
        { value: "Snails", text: "Snails " },
        { value: "Eggs", text: "Eggs " },
        { value: "Smoked_fish", text: "Smoked fish " },
        { value: "Crayfish", text: "Crayfish " },
        { value: "Smoked_fish", text: "Smoked fish " },
        { value: "Smoked_beef", text: "Smoked beef " },
        { value: "Smoked_chicken", text: "Smoked chicken " },

        { value: "Mackerel", text: "Mackerel " },

        { value: "Bar_fish", text: "Bar fish " },

        { value: "Tilapia_fish", text: "Tilapia fish " },

        { value: "Carp_fish", text: "Carp fish " },

        { value: "Jawbone_fish", text: "Jawbone fish " },

        { value: "Belt_fish", text: "Belt fish " },

        { value: "Sardines_fish", text: "Sardines fish" },

        { value: "Crabs", text: "Crabs" }
      ],

      Vegetables_filters: [
        { value: "Cucumbers", text: "Cucumbers" },
        { value: "Tomato", text: "Tomato" },

        { value: "Pepper", text: "Pepper" },
        { value: "Carrots", text: "Carrots" },
        { value: "Egusi", text: "Egusi" },
        { value: "Salad", text: "Salad" },

        { value: "Cauliflower", text: "Cauliflower" },

        { value: "Broccoli", text: "broccoli" },

        { value: "Zucchini", text: "Zucchini" },

        { value: "Eggplants", text: "Eggplants" },

        { value: "Okra", text: "Okra" },
        { value: "Green_leaf", text: "Green leaf" },
        { value: "huckleberry", text: "huckleberry " },
        { value: "Waterleaf", text: "Waterleaf " },
        { value: "Bitter_leaf", text: "Bitter Leaf " }
      ],

      Fruits_filters: [
        { value: "Lemon", text: "Lemon" },
        { value: "Orange", text: "Orange" },

        { value: "Papaya", text: "Papaya" },
        { value: "Pineapples", text: "Pineapples" },
        { value: "Apples", text: "Apples" },
        { value: "Strawberries", text: "Strawberries" },
        { value: "Watermelon", text: "Watermelon" },
        { value: "Coconut", text: "Coconut" },
        { value: "Mangoes", text: "Mangoes " },
        { value: "Avocado", text: "Avocado " },
        { value: "Plums", text: "Plums " }
      ],

      selectcategories: [
        { value: "Vegetables", text: "Vegetables" },
        { value: "Starch", text: "Starch" },

        { value: "Fruits", text: "Fruits" },

        { value: "Cereals", text: "Cereals" },
        { value: "Oils", text: "Oils" },
        { value: "Coffee", text: "Coffee" },
        { value: "Spices", text: "Spices" },

        { value: "Finished_Branded_Products", text: "Branded Products" },

        { value: "Livestock", text: "Livestock" },

        { value: "Dairy", text: "Dairy" },

        { value: "Raw_material", text: "Raw material " }
      ],

      categories: [
        { item: "Professional_and_home_service", name: "Professionals" },
        { item: "Agriculture ", name: "Agriculture " },
        { item: "Restaurant ", name: " Restaurant " },
        { item: "Electronics ", name: "Electronics " },
        { item: "Handicraft", name: "Handicraft" },
        { item: "clothing", name: "clothing" },
        { item: "Mechanics", name: "Mechanics" },
        { item: "Health_unit ", name: "Health unit " },
        { item: "Bars", name: "Bars" },
        { item: "Hair_and_beauty ", name: "Hair and beauty " },
        { item: "Real_estate ", name: "Real_estate " },
        { item: "Travelling ", name: "Travelling " },
        { item: "Hotels", name: "Hotels" },
        { item: "Station", name: " station  " },
        { item: "Mayor_concils", name: "Mayor_concils" },
        { item: "Taxis service", name: "Taxis service" }
      ],

      //categories_filters:[],

      categories_sub_filters: [],

      agriculture_filters: [
        { value: "Vegetables", text: "Vegetables" },
        { value: "Starch", text: "Starch" },

        { value: "Fruits", text: "Fruits" },

        { value: "Cereals", text: "Cereals" },
        { value: "Oils", text: "Oils" },
        { value: "Coffee", text: "Coffee" },
        { value: "Spices", text: "Spices" },
        { value: "Beans", text: "Beans" },
        { value: "Finished_Branded_Products", text: "Branded Products" },

        { value: "Livestock", text: "Livestock" },

        { value: "Dairy", text: "Dairy" },

        { value: "Raw_material", text: "Raw material " }
      ],

      Electronics_filters: [
        { value: "phone", text: "Phone and accessories" },
        { value: "Home Appliances", text: "Home Appliances" },

        { value: "Computers", text: "Computers, Tablets and accessories" },

        { value: "Office Electronics", text: "Office Electronics " }
      ],

      Station: [
        { value: "Gas station ", text: "Gas station " },
        { value: "Petrol station ", text: "Petrol station " },
        { value: "Fuel station ", text: "Fuel station " }
      ],

      clothing_filters: [
        { value: "men", text: "Men" },

        { value: "Tailoring", text: "Tailoring" },
        { value: "female", text: "Female" },
        { value: "Men Accessories", text: "Men Accessories" },
        { value: "Women accessories", text: "Women accessories" }
      ],

      Health_unit_filters: [
        { value: "Hospitals", text: "Hospitals" },
        { value: "Clinics", text: "Clinics" },

        { value: "COVID-19", text: "COVID-19" },

        { value: "Pharmacies", text: "Pharmacies " }
      ],

      restaurants_filters: [
        { value: "African_food", text: "African food" },

        { value: "Fast_food", text: "Fast food " },
        { value: "European_food", text: "European food" },
        { value: "French_restaurant", text: "French Restaurant " },

        { value: "Asian food", text: "Asian food" },

        { value: "Bars", text: "Bars" },

        { value: "Vegetarian", text: "Vegetarian" },

        { value: "Delivery", text: "Delivery" },
        { value: "Catering", text: "Catering" },
        { value: "Pizza", text: "Pizza" },
        { value: "Bakery", text: "Bakery" }
      ],

      Mechanics_filters: [
        { value: "Car care", text: "Car care " },
        { value: "Spare parts", text: "Spare parts " },

        { value: "Auto Dealers", text: "Auto Dealers" }
      ],

      Handicrafts_filters: [
        { value: "Home Decor", text: "Home Decor" },
        { value: "Textile", text: "Textile" }
      ],

      Health_unit: [
        { value: "Hopistal ", text: "Hopistal " },
        { value: "clinic", text: "Clinic " }
      ],

      Pharmacies: [],

      Educations_filters: [
        { value: "Primary Education", text: "Primary Education" },

        { value: "Secondary Education", text: "Secondary Education" },

        { value: "Tertiary Education", text: "Tertiary Education" },

        { value: "Vocational", text: "Vocational training centers" }
      ],

      Grooming_filters: [
        { value: "Women Grooming", text: "Women Grooming" },

        { value: "Men Grooming", text: "Men Grooming" }
      ],

      Transport_filters: [
        { value: "bus parks", text: "bus parks" },

        { value: "car parks ", text: "car parks " },
        { value: "train stations", text: "train stations " },

        { value: "seaports", text: "seaports" },
        { value: "Taxis", text: "Taxis " },
        { value: "import", text: "Import/Export " }
      ],

      Hotels_filters: [
        { value: "Hotels ", text: "Hotels " },
        { value: "Resorts", text: "Resorts" },
        { value: "Motels", text: "Motels" }
      ],

      Hair_and_beauty: [
        { value: "massage ", text: "massage " },
        { value: "skin_care", text: "skin care " },
        { value: "hair_care", text: "hair care" },
        { value: "hair_salon", text: "hair salon" },
        { value: "training", text: "training" },
        { value: "tattoo", text: "tattoo" },
        { value: "makeup_salon", text: "makeup_salon" },
        { value: "teeth_whitening", text: "teeth whitening" },
        { value: "nail_salon", text: "nail salon" }
      ],

      Bars: [
        { value: "wineries ", text: "wineries" },
        { value: "nightclub", text: "nightclub " },
        { value: "snack", text: "snack" },
        { value: "drinks", text: "drinks" },
        { value: "natural", text: "natural" }
      ],

      Travelling: [
        { value: "bus_park ", text: "bus park " },
        { value: "car_parks ", text: "car parks  " },
        { value: "train_parks", text: "train parks " },
        { value: "ship", text: "ship" }
      ],

      Hotels: [
        { value: "5_stars ", text: "5 stars " },
        { value: "4_stars", text: "4 stars " },
        { value: "3_stars", text: "3_stars" },
        { value: "Urban_hotel", text: "Urban_hotel" },
        { value: "Resorts", text: "Resorts" }
      ],

      Professional_and_home_service: [
        { value: "Legal_service", text: "Legal service " },
        { value: "Marketing", text: "Marketing" },

        {
          value: "Web, Graphic Design and Printing",
          text: "Web, Graphic Design and Printing"
        },

        {
          value: "Event Planning and Rentals",
          text: "Event Planning and Rentals"
        },

        { value: "Cleaning Services", text: "Cleaning Services" },

        { value: "Accounting", text: "Accounting" },

        { value: "Translation services", text: "Translation services" },

        { value: "Employment agency ", text: "Employment agency " },

        {
          value: "Real Estate Agency and Land",
          text: "Real Estate Agency and Land"
        },

        { value: "Housing and Construction", text: "Housing and Construction" },

        { value: "Internet and Media", text: "Internet and Media" }
      ],

      Tailoringg: [
        { value: "Shoes", text: "Shoes " },
        { value: "Watch", text: "Watch " },
        { value: "Perfume", text: "Perfume " },
        { value: "Shirt", text: "Shirt " },
        { value: "Bags", text: "Bags " },
        { value: "Jeans", text: "Jeans " },
        { value: "Cap", text: "Cap " },
        { value: "Gloves", text: "Gloves " },
        { value: "Suit", text: "Suit " },
        { value: "Singlet", text: "Singlet  " },
        { value: "sweater ", text: "sweater" }
      ],

      Tailoring: [
        { value: "Men_taloring", text: " Men" },
        { value: "women_taloring", text: " Women" },
        { value: "male_kid_taloring", text: " male kid" },
        { value: "female_kid_taloring", text: "female kid" }
      ],

      male: [
        { value: "Shoes", text: "Shoes " },
        { value: "Watch", text: "Watch " },
        { value: "Perfume", text: "Perfume " },
        { value: "Shirt", text: "Shirt " },
        { value: "Bags", text: "Bags " },
        { value: "Jeans", text: "Jeans " },
        { value: "Cap", text: "Cap " },
        { value: "Gloves", text: "Gloves " },
        { value: "Suit", text: "Suit " },
        { value: "Singlet", text: "Singlet  " },
        { value: "sweater ", text: "sweater" }
      ],

      female: [
        { value: "Shoes", text: "Shoes " },
        { value: "Watch", text: "Watch " },
        { value: "Perfume", text: "Perfume " },
        { value: "Shirt", text: "Shirt " },
        { value: "Bags", text: "Bags " },
        { value: "Jeans", text: "Jeans " },
        { value: "Cap", text: "Cap " },
        { value: "Gloves", text: "Gloves " },
        { value: "Suit", text: "Suit " },
        { value: "Singlet", text: "Singlet  " },
        { value: "sweater ", text: "sweater" },

        { value: "Gown ", text: "Gown" },
        { value: "Tops ", text: "Tops" },
        { value: "sweater ", text: "sweater" }
      ],

      Professional_services: [
        { value: "Web_designers", text: "Web designers " },
        { value: "Graphic_designers", text: "Graphic designers  " },
        { value: "Architect ", text: "Architect " },
        { value: "Patent_law", text: "Patent law" },

        { value: "Life_coach", text: "Life coach" },
        { value: "Marketers ", text: "Marketers " },
        { value: "Advertising ", text: "Advertising " },
        { value: "Office_cleaning  ", text: "Office cleaning  " },

        { value: "Billing_service", text: " Billing service" },

        { value: "Wholesale ", text: "Wholesale " },

        { value: "Translation_service  ", text: "Translation service  " },
        { value: "Employment_agency  ", text: "Employment agency  " },
        { value: "Private_investigators ", text: "Private investigators " },
        { value: "Personal_assistants ", text: "Personal assistants " },
        { value: "Protocol ", text: "Protocol " }
      ],

      Home_service: [
        { value: "Electrician", text: "Electrician " },

        { value: "Plumbing", text: "Plumbing" },
        { value: "Carpeting", text: "Carpeting" },
        { value: "Gardeners", text: "Gardeners" },

        { value: "Painters", text: "Painters" }
      ],

      Financial_service: [
        { value: "Insurance", text: "Insurance " },

        { value: "Investing", text: "Investing" },
        { value: "Banks", text: "Banks" }
      ],

      Real_estate: [
        { value: "apartment", text: "apartment " },
        { value: "property_management", text: "property management " },
        { value: "university_housing", text: "university housing" },
        { value: "home_staging", text: "home_staging" },
        { value: "commercial", text: "commercial" },
        { value: "developers", text: "developers" }
      ],

      Mayor_councils_filters_and_public_institution: [
        { value: "Mayor Councils", text: "Mayor Councils" },
        { value: "Schools", text: "Schools " },

        { value: "Hospitals", text: "Hospitals " },

        { value: "Ministries", text: "Ministries " }
      ],

      Taxis_service: [
        { value: "Urban ", text: "Urban" },
        { value: "Airport", text: "Airport " },
        { value: "Renting", text: "Renting" }
      ],

      African_food: [
        { value: "Kati-kati", text: "Kati-kati " },
        { value: "Eru", text: "Eru " },
        { value: "Ndole", text: "Ndole" },
        { value: "Pepper soup", text: "Pepper soup" },
        { value: "Grilled fish", text: "Grilled fish" },
        { value: "Ndjama Ndjama", text: "Ndjama Ndjama" },
        { value: "Koki", text: "Koki" },
        { value: "Achu", text: "Achu" },
        { value: "Mbongo Tchobi", text: "Mbongo Tchobi" },
        { value: "Okok", text: "Okok" },
        { value: "Okra", text: "Okra" }
      ],

      Fast_food: [
        { value: "Beef", text: " Beef" },
        { value: "Pizza", text: "Pizza " },
        { value: "Pork", text: "Pork" },

        { value: "Hamburger", text: "Hamburger " },
        { value: "Chicken", text: "Chicken" },

        { value: "Omelets", text: " Omelets" },

        { value: "Natural Juice", text: "Natural Juice" },

        { value: "Puff-puff", text: "Puff-puff" },
        { value: "Grilled fish", text: "Grilled fish" },
        { value: "Soya", text: "Soya" },
        { value: "Shawarma", text: "Shawarma" },

        { value: "Chai Tea", text: "Chai Tea" }
      ],

      Asian_food_filters: [
        { value: "Chinese Food", text: "Chinese Food " },
        { value: "Indian Food", text: "Indian Food" }
      ],

      Bars_filters: [
        { value: "Non-alcoholic drinks", text: "Non-alcoholic drinks" },
        { value: "Alcoholic drinks", text: "Alcoholic drinks" },
        { value: "Snacks", text: "Snacks" },
        { value: "Nightclubs", text: "Nightclubs" }
      ],

      phone_filters: [
        { value: "Tecno", text: " Tecno" },
        { value: "Infinix", text: "Infinix " },
        { value: "Samsung", text: "Samsung" },
        { value: "Iphone", text: " Iphone" },
        { value: "Itel", text: "Itel " },
        { value: "Huawei", text: "Huawei" },

        { value: "LG", text: " LG" },
        { value: "Nokia", text: "Nokia " },
        { value: "Batteries", text: "Batteries" },

        { value: "Chargers", text: "Chargers" },
        { value: "headsets", text: "headsets" },
        { value: "Phone casing", text: "Phone casing" }
      ],

      Home_Appliances_filters: [
        { value: "Refrigerator", text: " Refrigerator" },
        { value: "Blender", text: "Blender " },
        { value: "Microwave", text: "Microwave" },
        { value: "Pressing Iron", text: " Pressing Iron" },
        { value: "Waterheater", text: "Waterheater " },
        { value: "AC", text: "AC" },

        { value: "LG", text: " LG" },
        { value: "Fan", text: "Fan " },
        { value: "TV/Radio", text: "TV/Radio" },

        { value: "Generator", text: "Generator" },
        { value: "regulator", text: "regulator" },
        { value: "Solar system", text: "Solar system" },

        { value: "Gas cooker", text: " Gas cooker" }
      ],

      Computers_filters: [
        { value: "Laptops", text: " Laptops" },
        { value: "Desktops", text: "Desktops " },
        { value: "Video Games", text: "Video Games" },
        { value: "Gaming Consoles", text: " Gaming Consoles" },
        { value: "Monitors", text: "Monitors " },
        { value: "Computer accessories ", text: "Computer accessories " },

        { value: "Tablets", text: " Tablets" },
        { value: "Storage", text: "Storage" }
      ],

      Office_Electronics_filters: [
        { value: "Laptops", text: " Laptops" },
        { value: "Desktops", text: "Desktops " },
        { value: "Scanners/Printers", text: "Scanners/Printers" },
        { value: "AC", text: " AC" }
      ],

      Home_Decor_filters: [
        { value: "Juju hats", text: " Juju hats" },
        { value: "Beaded Baskets", text: "Beaded Baskets " },
        { value: "Carpentry", text: "Carpentry" },
        { value: "Paintings", text: " Paintings" },
        { value: "Hamburger", text: "Hamburger " }
      ],

      Textile_filters: [
        { value: "Embroidery", text: " Embroidery" },
        { value: "Knitting", text: "Knitting " },
        { value: "Weaving", text: "Weaving" },
        { value: "Tailoring", text: " Tailoring" }
      ],

      Car_care_filters: [
        { value: "Car wash", text: " Car wash" },
        { value: "mechanic", text: "mechanic " },
        { value: "Parking", text: "Parking" },
        { value: "maintenance products", text: " maintenance products" }
      ],

      Spare_parts_filters: [
        { value: "Tires", text: "Tires" },
        { value: "lamps", text: "lamps" },
        { value: "Steering", text: "Steering" },
        { value: "wheel", text: "wheel" }
      ],

      Auto_Dealers_filters: [
        { value: "Car sales and rentals", text: "Car sales and rentals" },
        { value: "Bike sales and rentals", text: "Bike sales and rentals" }
      ],

      Hospitals_filters: [
        { value: "public", text: "public" },
        { value: "private", text: "private" }
      ],

      Clinics_filters: [
        { value: "Dental clinics", text: "Dental clinics" },
        { value: "Optics", text: "Optics" },
        { value: "physical therapy", text: "physical therapy" },

        { value: "Maternal Health", text: "Maternal Health" }
      ],

      primary_eduction_filters: [
        { value: "Public schools", text: "Public schools" },
        { value: "Private schools", text: "Private schools" }
      ],

      secondary_eduction_filters: [
        { value: "Public schools", text: "Public schools" },
        { value: "Private schools", text: "Private schools" }
      ],

      tertiary_eduction_filters: [
        { value: "Public University", text: "Public University" },
        { value: "Private University", text: "Private University" }
      ],

      Vocational_filters: [
        { value: "Biomedical", text: "Biomedical" },
        { value: "Cooking and Catering", text: "Cooking and Catering" },
        { value: "Tailoring", text: "Tailoring" },
        { value: "Construction", text: "Construction" },
        { value: "Electrician", text: "Electrician" },
        { value: "Mechanics", text: "Mechanics" },
        { value: "Plumber", text: "Plumber" },
        { value: "IT and Multimedia", text: "IT and Multimedia" }
      ],

      Women_Grooming_filters: [
        { value: "massage", text: "massage" },
        { value: "skin care", text: "skin care" },
        { value: "hair salon ", text: "hair salon " },
        { value: "tattoos", text: "tattoos" },
        { value: "makeup salon", text: "makeup salon" },
        { value: "teeth whitening", text: "teeth whitening" },
        { value: "manicure and pedicure ", text: "manicure and pedicure " },
        { value: "Eyelashes", text: "Eyelashes" },

        { value: "Perfume", text: "Perfume" }
      ],

      Men_Grooming_filters: [
        { value: "massage", text: "massage" },
        { value: "skin care", text: "skin care" },
        { value: "Barbing salon ", text: "Barbing salon " },
        { value: "tattoos", text: "tattoos" },
        { value: "Teeth whitening", text: "Teeth whitening" },
        { value: "touring", text: "touring" },
        { value: "manicure and pedicure ", text: "manicure and pedicure " },

        { value: "Perfume", text: "Perfume" }
      ],

      Men_taloring: [
        { value: "Suits", text: " Suits" },
        { value: "Dashiki", text: "Dashiki " },
        { value: "Suits jacket", text: "Suits jacket" },
        { value: "African attires", text: "African attires" },
        { value: "Ankara", text: "Ankara" },
        { value: "Traditional dresses", text: "Traditional dresses" },
        { value: "Shirts", text: "Shirts" }
      ],

      women_taloring: [
        { value: "Female suits", text: " Female suits" },
        { value: "African print grown", text: "African print grown" },
        {
          value: "Traditional wedding dress",
          text: "Traditional wedding dress"
        },
        { value: "Ankara", text: "Ankara " },
        { value: "Shirt", text: "Shirt " },
        { value: "Wax dress", text: "Wax dress" },
        { value: "Traditional dress", text: "Traditional dress" }
      ],

      male_kid_taloring: [
        { value: "School uniform", text: "School uniform" },

        { value: "Shirts", text: "Shirts" },

        { value: "Kid Suit", text: "Kid Suit " },

        { value: "Kid Dashiki", text: "Kid Dashiki" },

        { value: "Kid Suits jacket", text: "Kid Suits jacket" },

        { value: "Kid African attires", text: "Kid African attires" },

        { value: "Kid Ankara", text: "Kid Ankara" },
        { value: "Kid Traditional dresses", text: "Kid Traditional dresses" }
      ],

      female_kid_taloring: [
        { value: "Kid  suits", text: "Kid  suits" },

        { value: "African print grown", text: "African print grown" },

        { value: "School uniform", text: "School uniform" },

        { value: "Kid Ankara ", text: "Kid Ankara " },

        { value: "Kid Wax dress", text: "Kid Wax dress" },

        { value: "Kid Traditional dress", text: "Kid Traditional dress" },

        { value: "shirt", text: "shirt" }
      ],

      Women_clothing: [
        { value: "Sweaters ", text: "Sweaters" },
        { value: "Jeans", text: "Jeans" },
        { value: "Tops", text: "Tops" },
        { value: "Suits", text: "Suits" },
        { value: "Skirt", text: "Skirt" },
        { value: "Gowns", text: "Gowns" },
        { value: "	Weddings dresses", text: "	Weddings dresses" },
        { value: "Coats", text: "Coats" }
      ],

      Women_accessories: [
        { value: "Perfumes ", text: "Perfumes" },
        { value: "Jewelry", text: "Jewelry" },
        { value: "Bags", text: "Bags" },
        { value: "Shoes", text: "Shoes" },
        { value: "Watches", text: "Watches" },
        { value: "Caps", text: "Caps" },
        { value: "Head bands", text: "Head bands" }
      ],

      Men_Clothing: [
        { value: "Shirts ", text: "Shirts" },
        { value: "Jeans", text: "Jeans" },
        { value: "Suits", text: "Suits" },
        { value: "Singlets", text: "Singlets" },
        { value: "CapSweaterss", text: "Sweaters" }
      ],

      Men_Accessories: [
        { value: "Watches ", text: "Watches" },
        { value: "Perfumes", text: "Perfumes" },
        { value: "Bags", text: "Bags" },
        { value: "Jewelry", text: "Jewelry" },
        { value: "Caps", text: "Caps" },
        { value: "Gloves", text: "Gloves" },
        { value: "Shoes", text: "Shoes" }
      ],

      Legal_service: [
        { value: "Lawyers ", text: "Lawyers" },
        { value: "Business consulting", text: "Business consulting" },
        { value: "Patent law", text: "Patent law" }
      ],

      Marketing: [
        { value: "Hostesses ", text: "Hostesses" },
        { value: "Advertising", text: "Advertising" }
      ],

      Web_Graphic: [
        { value: "graphics design ", text: "graphics design" },
        { value: "printing", text: "printing" },
        { value: "computer programmers", text: "computer programmers" },
        { value: "computer hardware", text: "computer hardware" },
        {
          value: "computer hosting services",
          text: "computer hosting services"
        }
      ],

      Event_Planning_and_Rentals: [
        { value: "Event planning ", text: "Event planning" },
        { value: "Rentals", text: "Rentals" },
        { value: "Interior Design ", text: "Interior Design " }
      ],

      Cleaning_Services: [
        { value: "Office cleaning ", text: "Office cleaning" },
        { value: "Home cleaning", text: "Home cleaning" }
      ],

      Real_Estate: [
        { value: "Real Estate _Agency", text: "Real Estate _Agency" },
        { value: "property management", text: "property management" },
        { value: "commercial real estate", text: "commercial real estate" },
        { value: "shared office space", text: "shared office space" }
      ],

      Housing_and_Construction: [
        { value: "Plumbing", text: "Plumbing" },
        { value: "Contractors", text: "Contractors" },
        { value: "Carpenters", text: "Carpenters" },

        { value: "Painters", text: "Painters" },
        { value: "Interior design", text: "Interior design" },
        { value: "Electrician", text: "Electrician" },

        { value: "locksmiths", text: "Key’s locksmiths " },

        { value: "Gardeners", text: "Gardeners" },
        { value: "Gardeners", text: "Gardeners" },

        { value: "Security system", text: "Security system" }
      ],

      Internet_and_Media: [
        { value: "TV Cable", text: "TV Cable" },
        { value: "Internet services", text: "Internet services" },
        { value: "Telephone services", text: "Telephone services" }
      ],

      Mayor_Councils: [
        { value: "Regions ", text: "Regions" },
        { value: "Division", text: "Division" },
        { value: "Sub-divisions ", text: "Sub-divisions" },
        { value: "City", text: "City" }
      ],

      Schools: [
        { value: "Public ", text: "Public" },
        { value: "Private", text: "Private" }
      ],

      Hospitals: [
        { value: "Public ", text: "Public" },
        { value: "Private", text: "Private" },

        { value: "Regions ", text: "Regions" },
        { value: "Division", text: "Division" },

        { value: "Sub-divisions ", text: "Sub-divisions" },
        { value: "City", text: "City" }
      ],

      Ministries: [
        { value: "Regions", text: "Regions" },
        { value: "Division", text: "Division" },

        { value: "Sub-divisions", text: "Sub-divisions" },
        { value: "City", text: "City" }
      ],

      default_category: "",

      optionsnav: {
        activeColor: "#1d98bd"
      }
    };
  },

  methods: {
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
          this.selectcategories = this.Mayor_councils_filters_and_public_institution;

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
          console.log("fuck you");

          break;
      }

      this.$refs["myfilters"].show();
    },

    getCategory(value) {
      this.Selectedcategory = value;
    },
    getparentCategory(value) {
      this.Selectedparentcategory = value;

      //   console.log(this.Selectedparentcategory);
    },

    switchcategories() {
      this.showform = false;

      console.log(this.default_category);

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
          console.log("fuck you");
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
    }
  }
};
</script>

<style scoped>
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
  color: #333;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
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
    color: black;
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
  color: #fff;
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
