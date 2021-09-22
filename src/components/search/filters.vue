<template>
  <div>
    {{ filterType }}
    <div v-if="filterType == '1' || filterType == '4'">
      <div v-if="subCategories.length">
        <span>
          <b-form-radio
            v-for="(subCat, index) in subCategories"
            v-model="selected_sub_cat"
            :key="index"
            :value="subCat.id"
            name="subcategories-list"
            @change="getFilter(subCat.id)"
            class="m-1 br-3"
          >
            {{ subCat.name }}
          </b-form-radio>
          <b-link v-b-modal="'myModalllo'">See all</b-link>
          <hr />
        </span>

        <b-spinner
          v-if="filterLoader"
          variant="primary"
          label="Spinning"
        ></b-spinner>
        <span v-if="subFilter.length">
          <h6>Filters</h6>
          <b-form-radio
            v-for="(filter, i) in subFilter"
            :key="i.value"
            v-model="selectedFilter"
            :value="filter.id"
            @change="switchcategoriesfilters"
            name="sub-filters"
            class="m-1 br-3"
          >
            {{ filter.name }}
          </b-form-radio>

          <b-link v-b-modal="'myModalll'"> See all </b-link>
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
            @change="switchcategoriesfilters"
            name="sub-filters"
          >
            {{ filter.name }}
          </b-form-radio>
        </div>

        <br />
        <b-button variant="primary" class="m-3 float-right"> Search </b-button>
      </b-modal>

      <b-form-checkbox
        v-for="agriculture in categories_sub_filters"
        v-model="yayaya"
        :key="agriculture.value"
        :value="agriculture.value"
        name="flavour-4a"
        button
        class="m-1 shadow border br-3"
        inline
      >
        {{ agriculture.text }}
      </b-form-checkbox>

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
          <b-form-select-option value="a"> Yaounde </b-form-select-option>
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
          <b-form-select-option value="a"> My Location </b-form-select-option>
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
          <b-form-select-option value="a"> My Location </b-form-select-option>
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
          <b-form-select-option value="a"> My Location </b-form-select-option>
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

      <b-link v-b-modal="'Neighbourhood'"> See all </b-link>

      <br />

      <hr />

      <b-form-group
        label-cols-lg="12"
        label="Distance"
        label-size="md"
        label-class="font-weight-bold pt-0 text-left"
        class="mb-0 text-left"
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

      <b-link v-b-modal="'distance'"> See all </b-link>

      <div>
        <span v-if="filterType == '4'">
          <label>Price Range</label>
          <b-form-input
            id="range-2"
            v-model="priceRange"
            type="range"
            min="1000"
            max="200000000"
            step="0.5"
          ></b-form-input>
          <div class="mt-2 text-left">min: 1000 Max: {{ priceRange }}</div>
        </span>
      </div>
    </div>

    <div v-if="filterType == '0'">
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
          <b-form-select-option value="a"> Yaounde </b-form-select-option>
        </b-form-select>

        <br />

        <b-form-group
          label-cols-lg="3"
          label="Division"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0 text-left"
        >
        </b-form-group>

        <b-form-select v-model="selected">
          <b-form-select-option value="a"> My Location </b-form-select-option>
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

      <b-link v-b-modal="'Neighbourhood'"> See all </b-link>

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

      <b-link v-b-modal="'distance'"> See all </b-link>
    </div>

    <div v-if="filterType == '3'">
      <b-form-group
        label-cols-lg="3"
        label="Location"
        label-size="md"
        label-class="font-weight-bold pt-0"
        class="mb-0 text-left"
      >
      </b-form-group>

      <b-form-select v-model="selected">
        <b-form-select-option value="a"> Yaounde </b-form-select-option>
      </b-form-select>

      <br />
    </div>

    <div v-if="filterType == '2'">
      <b-form-group
        label-cols-lg="3"
        label="Profession"
        label-size="md"
        label-class="font-weight-bold pt-0"
        class="mb-0 text-left"
      >
      </b-form-group>

      <b-form-input placeholder="Search Profession"></b-form-input>

      <br />
      <b-form-group
        label-cols-lg="3"
        label="Community"
        label-size="md"
        label-class="font-weight-bold pt-0"
        class="mb-0 text-left"
      >
      </b-form-group>
      People
      <b-form-select v-model="selectsp">
        <b-form-select-option value="a">
          Followers
        </b-form-select-option>
        <b-form-select-option value="b">
          Followings
        </b-form-select-option>
        <b-form-select-option value="c">
          Community
        </b-form-select-option>
      </b-form-select>
      Business
      <b-form-select v-model="selectsb">
        <b-form-select-option value="a">
          Followers
        </b-form-select-option>
        <b-form-select-option value="b">
          Followings
        </b-form-select-option>
        <b-form-select-option value="c">
          Community
        </b-form-select-option>
      </b-form-select>
      Network
      <b-form-select v-model="selectsn">
        <b-form-select-option value="a">
          Followers
        </b-form-select-option>
        <b-form-select-option value="b">
          Followings
        </b-form-select-option>
        <b-form-select-option value="c">
          community
        </b-form-select-option>
        <b-form-select-option value="d">
          Members
        </b-form-select-option>
      </b-form-select>
    </div>

    <div v-if="filterType == '5'">
      <b-form-group
        label-cols-lg="12"
        label="Posted Date"
        label-size="md"
        label-class="font-weight-bold pt-0 text-left"
        class="mb-0"
      >
      </b-form-group>

      <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2">
      </b-form-datepicker>

      <br />

      <b-form-checkbox
        v-model="selecteda"
        id="customSwitch1"
        name="customSwitch1"
        switch
      >
        Recent Post
      </b-form-checkbox>
      <b-form-checkbox
        v-model="selectedc"
        id="customSwitch2"
        name="customSwitch2"
        switch
      >
        Post you've not seen
      </b-form-checkbox>
      <br />
      Post From
      <b-form-select v-model="selectsp" >
        <b-form-select-option value="a" >
          editors
        </b-form-select-option>
        <b-form-select-option value="b">
          Members
        </b-form-select-option>
        <b-form-select-option value="c">
          Owner
        </b-form-select-option>
      </b-form-select>
    </div>

    <b-modal ref="myfilters" id="Neighbourhood" hide-footer title=" ">
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
    </b-modal>

    <b-modal ref="myfilters" id="distance" hide-footer title=" ">
      <b-form-group
        label-cols-lg="12"
        label="Distance"
        label-size="md"
        label-class="font-weight-bold pt-0 text-left"
        class="mb-0 text-left"
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
    </b-modal>

    <!-- Sub categories modal -->
    <b-modal ref="myfilters1" id="myModalllo" hide-footer title=" ">
      <div style="column-count: 2">
        <b-form-radio
          v-for="(sub, i) in subCategories"
          v-model="selected_sub_cat"
          :key="i"
          :value="sub.id"
          @change="selectedsidebar"
          name="subCategories-list-modal"
          class=""
        >
          {{ sub.name }}
        </b-form-radio>
      </div>

      <br />
      <b-button variant="primary" class="m-3 float-right"> Search </b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "filters",

  props: ["filterType", "Selectedcategory", "Selectedparentcategory"],

  watch: {
    Selectedparentcategory: function (newVal) {
      console.log(newVal);

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
      console.log(newVal);

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
      // [Edouard] data
      selected_sub_cat: [],
      newCategories: [],
      selectedFilter: [],
      filterLoader: false,
      noFilter: "",

      // -----------------

      slide: 0,
      sliding: null,

      priceRange: "1000",
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

      Finished_Branded_Products_filters: [
        { value: "Peanuts", text: "Peanuts" },
        { value: "Chocolate", text: "Chocolate" },

        { value: "Jam", text: "Jam" },
      ],

      Coffee_filters: [
        { value: "tea", text: "Tea" },
        { value: "coffe", text: "Coffe" },
      ],

      Dairy_filters: [
        { value: "Yoghurts", text: "Yoghurts" },
        { value: "coffe", text: "Coffe" },

        { value: "Milk", text: "Milk" },
        { value: "Butter", text: "Butter" },
        { value: "Cheese", text: "Cheese" },
        { value: "Ice_cream", text: "Ice cream " },
      ],

      Oils_filters: [
        { value: "Coconut_oils", text: "Coconut oils" },
        { value: "Palm_oil", text: "Palm oil" },
        { value: "Palm_oil", text: "Palm oil" },

        { value: "vetegetable_oil", text: " Vegetable " },
      ],

      Beans_filters: [
        { value: "Red_beans", text: "Red beans" },
        { value: "Black_beans", text: "Black beans" },

        { value: "White_beans", text: "White beans" },
        { value: "Senegalese_beans", text: "Senegalese beans" },
        { value: "Koki_beans", text: "Koki beans" },
      ],

      Spices_filters: [
        { value: "Green_spices", text: "Green spices" },
        { value: "Ginger", text: "Ginger" },

        { value: "Garlic", text: "Garlic" },
        { value: "Djansang", text: "Djansang" },

        { value: "Curry", text: "Curry" },

        { value: "white_pepper", text: "white pepper" },

        { value: "Penja", text: "Penja" },
      ],

      starch_filters: [
        { value: "Cocoyam", text: "Cocoyam" },
        { value: "Cassava", text: "Cassava" },

        { value: "Plantains", text: "Plantains" },
        { value: "Potatoes", text: "Potatoes" },

        { value: "Bananas", text: "Bananas" },
        { value: "Yams", text: "Yams" },

        { value: "Garri", text: "Garri" },
        { value: "Okra", text: "Okra" },
        { value: "Corn", text: "Corn" },
        { value: "Groundnuts", text: "Groundnuts" },
        { value: "Bobolo", text: "Bobolo " },
      ],

      Cereals_filters: [
        { value: "Wheat", text: "Wheat" },
        { value: "Rice", text: "Rice" },

        { value: "Maize", text: "Maize" },
        { value: "Oat", text: "Oat" },

        { value: "Barley", text: "Barley" },

        { value: "Millet", text: "Millet" },
      ],

      Raw_material_filters: [
        { value: "Cocoa", text: "Cocoa" },
        { value: "Coffee", text: "Coffee" },

        { value: "Rubber", text: "Rubber" },
        { value: "Charcoal", text: "Charcoal" },
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

        { value: "Crabs", text: "Crabs" },
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
        { value: "Bitter_leaf", text: "Bitter Leaf " },
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
        { value: "Plums", text: "Plums " },
      ],

      selectnewC: [
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

        { value: "Raw_material", text: "Raw material " },
      ],

      newC: [
        { item: "Professional_and_home_service", name: "Professionals" },
        { item: "Agriculture ", name: "Agriculture " },
        { item: "Restaurant ", name: " Restaurant " },
        { item: "Electronics ", name: "Electronics " },
        { item: "Handicrafts", name: "Handicrafts" },
        { item: "clothing", name: "clothing" },
        { item: "Mechanics", name: "Mechanics" },
        { item: "Health_unit ", name: "Health unit " },
        { item: "Bars", name: "Bars" },
        { item: "Hair_and_beauty ", name: "Hair and beauty " },
        { item: "Real_estate ", name: "Real_estate " },
        { item: "Travelling ", name: "Travelling " },
        { item: "Hotels", name: "Hotels" },
        { item: "station", name: " station  " },
        { item: "Mayor_concils", name: "Mayor_concils" },
        { item: "Taxis service", name: "Taxis service" },
      ],

      categories_filters: [],

      categories_sub_filters: [],

      agriculture_filters: [
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
        { value: "Beans", text: "Beans" },

        { value: "Raw_material", text: "Raw material " },
      ],

      Electronics_filters: [
        { value: "Phone and accessories", text: "Phone and accessories" },
        { value: "Home Appliances", text: "Home Appliances" },

        {
          value: "Computers, Tablets and accessories",
          text: "Computers, Tablets and accessories",
        },

        { value: "Office Electronics", text: "Office Electronics " },
      ],

      station: [
        { value: "Gas station ", text: "Gas station " },
        { value: "Petrol station ", text: "Petrol station " },
        { value: "Fuel station ", text: "Fuel station " },
      ],

      clothing_filters: [
        { value: "Tailoring", text: "Tailoring" },

        { value: "men", text: "Men" },
        { value: "female", text: "Female" },
        { value: "Men Accessories", text: "Men Accessories" },
        { value: "Women accessories", text: "Women accessories" },
      ],

      Health_unit_filters: [
        { value: "Hospital", text: "Hospitals" },
        { value: "Clinics", text: "Clinics" },

        { value: "COVID-19", text: "COVID-19" },

        { value: "Pharmacies", text: "Pharmacies " },
      ],

      restaurants_filters: [
        { value: "African_food", text: "African food" },

        { value: "Fast_food ", text: "Fast food " },
        { value: "European food", text: "European food" },
        { value: "French_restaurant", text: "French Restaurant " },

        { value: "Asian food", text: "Asian food" },

        { value: "Bars", text: "Bars" },

        { value: "Vegetarian", text: "Vegetarian" },

        { value: "Delivery", text: "Delivery" },
        { value: "Catering", text: "Catering" },
        { value: "Pizza", text: "Pizza" },
        { value: "Bakery", text: "Bakery" },
      ],

      Mechanics_filters: [
        { value: "Car care", text: "Car care " },
        { value: "Spare part", text: "Spare parts " },

        { value: "Auto Dealers", text: "Auto Dealers" },
      ],

      Handicrafts_filters: [
        { value: "Home Decor", text: "Home Decor" },
        { value: "Textile", text: "Textile" },
      ],

      Health_unit: [
        { value: "Hopistal ", text: "Hopistal " },
        { value: "clinic", text: "Clinic " },
      ],

      Pharmacies: [],

      Educations_filters: [
        { value: "Primary Education", text: "Primary Education" },

        { value: "Secondary Education", text: "Secondary Education" },

        { value: "Tertiary Education", text: "Tertiary Education" },

        { value: "Vocational", text: "Vocational training centers" },
      ],

      Grooming_filters: [
        { value: "Women Grooming", text: "Women Grooming" },

        { value: "Men Grooming", text: "Men Grooming" },
      ],

      Transport_filters: [
        { value: "bus parks", text: "bus parks" },

        { value: "car parks ", text: "car parks " },
        { value: "train stations", text: "train stations " },

        { value: "seaports", text: "seaports" },
        { value: "Taxis", text: "Taxis " },
        { value: "import", text: "Import/Export " },
      ],

      Hotels_filters: [
        { value: "Hotels ", text: "Hotels " },
        { value: "Resorts", text: "Resorts" },
        { value: "Motels", text: "Motels" },
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
        { value: "nail_salon", text: "nail salon" },
      ],

      Bars: [
        { value: "wineries ", text: "wineries" },
        { value: "nightclub", text: "nightclub " },
        { value: "snack", text: "snack" },
        { value: "drinks", text: "drinks" },
        { value: "natural", text: "natural" },
      ],

      Travelling: [
        { value: "bus_park ", text: "bus park " },
        { value: "car_parks ", text: "car parks  " },
        { value: "train_parks", text: "train parks " },
        { value: "ship", text: "ship" },
      ],

      Hotels: [
        { value: "5_stars ", text: "5 stars " },
        { value: "4_stars", text: "4 stars " },
        { value: "3_stars", text: "3_stars" },
        { value: "Urban_hotel", text: "Urban_hotel" },
        { value: "Resorts", text: "Resorts" },
      ],

      Professional_and_home_service: [
        { value: "Legal_service", text: "Legal service " },
        { value: "Marketing", text: "Marketing" },

        {
          value: "Web, Graphic Design and Printing",
          text: "Web, Graphic Design and Printing",
        },

        {
          value: "Event Planning and Rentals",
          text: "Event Planning and Rentals",
        },

        { value: "Cleaning Services", text: "Cleaning Services" },

        { value: "Translation services", text: "Translation services" },

        { value: "Employment agency ", text: "Employment agency " },

        {
          value: "Real Estate Agency and Land",
          text: "Real Estate Agency and Land",
        },

        { value: "Housing and Construction", text: "Housing and Construction" },

        { value: "Internet and Media", text: "Internet and Media" },
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
        { value: "sweater ", text: "sweater" },
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
        { value: "sweater ", text: "sweater" },
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
        { value: "Protocol ", text: "Protocol " },
      ],

      Home_service: [
        { value: "Electrician", text: "Electrician " },

        { value: "Plumbing", text: "Plumbing" },
        { value: "Carpeting", text: "Carpeting" },
        { value: "Gardeners", text: "Gardeners" },

        { value: "locksmiths", text: "Key’s locksmiths" },

        { value: "Painters", text: "Painters" },

        { value: "Gardeners", text: "Gardeners" },
        { value: "Security system", text: "Security system" },
      ],

      Financial_service: [
        { value: "Insurance", text: "Insurance " },

        { value: "Investing", text: "Investing" },
        { value: "Banks", text: "Banks" },
      ],

      Real_estate: [
        { value: "apartment", text: "apartment " },
        { value: "property_management", text: "property management " },
        { value: "university_housing", text: "university housing" },
        { value: "home_staging", text: "home_staging" },
        { value: "commercial", text: "commercial" },
        { value: "developers", text: "developers" },
      ],

      Mayor_councils_filters_and_public_institution: [
        { value: "Mayor Councils ", text: "Mayor Councils" },
        { value: "Schools", text: "Schools " },

        { value: "Hospital", text: "Hospitals " },

        { value: "Ministries ", text: "Ministries " },
      ],

      Taxis_service: [
        { value: "Urban ", text: "Urban" },
        { value: "Airport", text: "Airport " },
        { value: "Renting", text: "Renting" },
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
        { value: "Okra", text: "Okra" },
      ],

      Fast_food: [
        { value: "Beef", text: " Beef" },
        { value: "Pizza", text: "Pizza " },
        { value: "Pork", text: "Pork" },
        { value: "Chicken", text: "Chicken" },
        { value: "Hamburger", text: "Hamburger " },
        { value: "Chai Tea", text: "Chai Tea" },

        { value: "Omelets", text: " Omelets" },
        { value: "Grilled fish", text: "Grilled fish " },
        { value: "Natural Juice", text: "Natural Juice" },
        { value: "Puff-puff", text: "Puff-puff" },
        { value: "Grilled fish", text: "Grilled fish" },
        { value: "Soya", text: "Soya" },
        { value: "Shawarma", text: "Shawarma" },
        { value: "Senegalese", text: "Senegalese" },
      ],

      Asian_food_filters: [
        { value: "Chinese Food", text: "Chinese Food " },
        { value: "Indian Food", text: "Indian Food" },
      ],

      Bars_filters: [
        { value: "Non-alcoholic drinks", text: "Non-alcoholic drinks" },
        { value: "Alcoholic drinks", text: "Alcoholic drinks" },
        { value: "Snacks", text: "Snacks" },
        { value: "Nightclubs", text: "Nightclubs" },
      ],

      phone_filters: [
        { value: "Tecno", text: " Tecno" },
        { value: "Infinix", text: "Infinix " },
        { value: "Samsung", text: "Samsung" },
        { value: "Iphone", text: " Iphone" },
        { value: "Itel", text: "Itel " },
        { value: "Huawei", text: "Huawei" },

        { value: "htc", text: " HTC" },

        { value: "LG", text: " LG" },

        { value: "Feature phone", text: "Feature phone" },
        { value: "Nokia", text: "Nokia " },
        { value: "Batteries", text: "Batteries" },

        { value: "Chargers", text: "Chargers" },
        { value: "headsets", text: "headsets" },
        { value: "Phone casing", text: "Phone casing" },
      ],

      Tailoring: [
        { value: "Men_taloring", text: " Men" },
        { value: "women_taloring", text: " Women" },
        { value: "male_kid_taloring", text: " male kid" },
        { value: "female_kid_taloring", text: "female kid" },
      ],

      Tailoring_filters: [
        { value: "Suits", text: " Suits" },
        { value: "Dashiki", text: "Dashiki " },
        { value: "Suits jacket", text: "Suits jacket" },
        { value: "African attires", text: "African attires" },
        { value: "Ankara", text: "Ankara" },
        { value: "Traditional dresses", text: "Traditional dresses" },
        { value: "Shirts", text: "Shirts" },

        { value: "Female suits", text: " Female suits" },
        { value: "African print grown", text: "African print grown" },
        {
          value: "Traditional wedding dress",
          text: "Traditional wedding dress",
        },

        { value: "Wax dress", text: "Wax dress" },
        { value: "School uniform", text: "School uniform" },
        { value: "Kid Suit", text: "Kid Suit " },

        { value: "Kid Dashiki", text: "Kid Dashiki" },

        { value: "Kid Suits jacket", text: "Kid Suits jacket" },

        { value: "Kid African attires", text: "Kid African attires" },

        { value: "Kid Ankara", text: "Kid Ankara" },
        { value: "Kid Traditional dresses", text: "Kid Traditional dresses" },

        { value: "African print grown", text: "African print grown" },

        { value: "Kid Wax dress", text: "Kid Wax dress" },

        { value: "Kid Traditional dress", text: "Kid Traditional dress" },
      ],

      Men_taloring: [
        { value: "Suits", text: " Suits" },
        { value: "Dashiki", text: "Dashiki " },
        { value: "Suits jacket", text: "Suits jacket" },
        { value: "African attires", text: "African attires" },
        { value: "Ankara", text: "Ankara" },
        { value: "Traditional dresses", text: "Traditional dresses" },
        { value: "Shirts", text: "Shirts" },
      ],

      women_taloring: [
        { value: "Female suits", text: " Female suits" },
        { value: "African print grown", text: "African print grown" },
        {
          value: "Traditional wedding dress",
          text: "Traditional wedding dress",
        },
        { value: "Ankara", text: "Ankara " },
        { value: "Shirt", text: "Shirt " },
        { value: "Wax dress", text: "Wax dress" },
        { value: "Traditional dress", text: "Traditional dress" },
      ],

      male_kid_taloring: [
        { value: "School uniform", text: "School uniform" },

        { value: "Shirts", text: "Shirts" },

        { value: "Kid Suit", text: "Kid Suit " },

        { value: "Kid Dashiki", text: "Kid Dashiki" },

        { value: "Kid Suits jacket", text: "Kid Suits jacket" },

        { value: "Kid African attires", text: "Kid African attires" },

        { value: "Kid Ankara", text: "Kid Ankara" },
        { value: "Kid Traditional dresses", text: "Kid Traditional dresses" },
      ],

      female_kid_taloring: [
        { value: "Kid  suits", text: "Kid  suits" },

        { value: "African print grown", text: "African print grown" },

        { value: "School uniform", text: "School uniform" },

        { value: "Kid Ankara ", text: "Kid Ankara " },

        { value: "Kid Wax dress", text: "Kid Wax dress" },

        { value: "Kid Traditional dress", text: "Kid Traditional dress" },

        { value: "shirt", text: "shirt" },
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

        { value: "Gas cooker", text: " Gas cooker" },
      ],

      Computers_filters: [
        { value: "Laptops", text: " Laptops" },
        { value: "Desktops", text: "Desktops " },
        { value: "Video Games", text: "Video Games" },
        { value: "Gaming Consoles", text: " Gaming Consoles" },
        { value: "Monitors", text: "Monitors " },
        { value: "Computer accessories ", text: "Computer accessories " },

        { value: "Tablets", text: " Tablets" },
        { value: "Storage", text: "Storage" },
      ],

      Office_Electronics_filters: [
        { value: "Laptops", text: " Laptops" },
        { value: "Desktops", text: "Desktops " },
        { value: "Scanners/Printers", text: "Scanners/Printers" },
        { value: "AC", text: " AC" },
      ],

      Home_Decor_filters: [
        { value: "Juju hats", text: " Juju hats" },
        { value: "Beaded Baskets", text: "Beaded Baskets " },
        { value: "Carpentry", text: "Carpentry" },
        { value: "Paintings", text: " Paintings" },
        { value: "Hamburger", text: "Hamburger " },
      ],

      Textile_filters: [
        { value: "Embroidery", text: " Embroidery" },
        { value: "Knitting", text: "Knitting " },
        { value: "Weaving", text: "Weaving" },
        { value: "Tailoring", text: " Tailoring" },
      ],

      Car_care_filters: [
        { value: "Car wash", text: " Car wash" },
        { value: "mechanic", text: "mechanic " },
        { value: "Parking", text: "Parking" },
        { value: "maintenance products", text: " maintenance products" },
      ],

      Spare_parts_filters: [
        { value: "Tires", text: "Tires" },
        { value: "lamps", text: "lamps" },
        { value: "Steering", text: "Steering" },
        { value: "wheel", text: "wheel" },
      ],

      Auto_Dealers_filters: [
        { value: "Car sales and rentals", text: "Car sales and rentals" },
        { value: "Bike sales and rentals", text: "Bike sales and rentals" },
      ],

      Hospitals_filters: [
        { value: "public", text: "public" },
        { value: "private", text: "private" },
        { value: "Regional", text: "Regional" },
      ],

      Clinics_filters: [
        { value: "Dental clinics", text: "Dental clinics" },
        { value: "Optics", text: "Optics" },
        { value: "physical therapy", text: "physical therapy" },

        { value: "Maternal Health", text: "Maternal Health" },
      ],

      primary_eduction_filters: [
        { value: "Public schools", text: "Public schools" },
        { value: "Private schools", text: "Private schools" },
      ],

      secondary_eduction_filters: [
        { value: "Public schools", text: "Public schools" },
        { value: "Private schools", text: "Private schools" },
      ],

      tertiary_eduction_filters: [
        { value: "Public University", text: "Public University" },
        { value: "Private University", text: "Private University" },
      ],

      Vocational_filters: [
        { value: "Biomedical", text: "Biomedical" },
        { value: "Cooking and Catering", text: "Cooking and Catering" },
        { value: "Tailoring", text: "Tailoring" },
        { value: "Construction", text: "Construction" },
        { value: "Electrician", text: "Electrician" },
        { value: "Mechanics", text: "Mechanics" },
        { value: "Plumber", text: "Plumber" },
        { value: "IT and Multimedia", text: "IT and Multimedia" },
        { value: "Beautician", text: "Beautician" },
      ],

      Women_Grooming_filters: [
        { value: "touring", text: "touring" },
        { value: "massage", text: "massage" },
        { value: "skin care", text: "skin care" },
        { value: "hair salon ", text: "hair salon " },
        { value: "tattoos", text: "tattoos" },
        { value: "makeup salon", text: "makeup salon" },
        { value: "teeth whitening", text: "teeth whitening" },
        { value: "manicure and pedicure ", text: "manicure and pedicure " },
        { value: "Eyelashes", text: "Eyelashes" },
        { value: "Beautician", text: "Beautician" },

        { value: "Perfume", text: "Perfume" },
      ],

      Men_Grooming_filters: [
        { value: "touring", text: "touring" },
        { value: "massage", text: "massage" },
        { value: "skin care", text: "skin care" },
        { value: "Barbing salon ", text: "Barbing salon " },
        { value: "tattoos", text: "tattoos" },
        { value: "Teeth whitening", text: "Teeth whitening" },

        { value: "manicure and pedicure ", text: "manicure and pedicure " },

        { value: "Perfume", text: "Perfume" },
      ],

      Women_clothing: [
        { value: "Sweaters ", text: "Sweaters" },
        { value: "Jeans", text: "Jeans" },
        { value: "Tops", text: "Tops" },
        { value: "Suits", text: "Suits" },
        { value: "Skirt", text: "Skirt" },
        { value: "Gowns", text: "Gowns" },
        { value: "	Weddings dresses", text: "	Weddings dresses" },
        { value: "Coats", text: "Coats" },
      ],

      Women_accessories: [
        { value: "Perfumes ", text: "Perfumes" },
        { value: "Jewelry", text: "Jewelry" },
        { value: "Bags", text: "Bags" },
        { value: "watch", text: "watch" },
        { value: "Shoes", text: "Shoes" },
        { value: "Caps", text: "Caps" },
        { value: "Head bands", text: "Head bands" },
      ],

      Men_Clothing: [
        { value: "Shirts ", text: "Shirts" },
        { value: "Jeans", text: "Jeans" },
        { value: "Suits", text: "Suits" },
        { value: "Singlets", text: "Singlets" },
        { value: "CapSweaterss", text: "Sweaters" },
      ],

      Men_Accessories: [
        { value: "Watches ", text: "Watches" },
        { value: "Perfumes", text: "Perfumes" },
        { value: "Bags", text: "Bags" },
        { value: "Jewelry", text: "Jewelry" },
        { value: "Caps", text: "Caps" },
        { value: "Gloves", text: "Gloves" },
        { value: "Shoes", text: "Shoes" },
      ],

      Legal_service: [
        { value: "Lawyers ", text: "Lawyers" },
        { value: "Business consulting", text: "Business consulting" },
        { value: "Patent law", text: "Patent law" },
      ],

      Marketing: [
        { value: "Hostesses ", text: "Hostesses" },
        { value: "Advertising", text: "Advertising" },
      ],

      Web_Graphic: [
        { value: "graphics design ", text: "graphics design" },
        { value: "printing", text: "printing" },
        { value: "computer programmers", text: "computer programmers" },
        { value: "computer hardware", text: "computer hardware" },
        {
          value: "computer hosting services",
          text: "computer hosting services",
        },
      ],

      Event_Planning_and_Rentals: [
        { value: "Event planning ", text: "Event planning" },
        { value: "Rentals", text: "Rentals" },
        { value: "Interior Design ", text: "Interior Design " },
      ],

      Cleaning_Services: [
        { value: "Office cleaning ", text: "Office cleaning" },
        { value: "Home cleaning", text: "Home cleaning" },
      ],

      Real_Estate: [
        { value: "Real Estate _Agency", text: "Real Estate _Agency" },
        { value: "property management", text: "property management" },
        { value: "commercial real estate", text: "commercial real estate" },
        { value: "shared office space", text: "shared office space" },
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

        { value: "Security system", text: "Security system" },
      ],

      Internet_and_Media: [
        { value: "TV Cable", text: "TV Cable" },
        { value: "Internet services", text: "Internet services" },
        { value: "Telephone services", text: "Telephone services" },
      ],

      Mayor_Councils: [
        { value: "Regions ", text: "Regions" },
        { value: "Division", text: "Division" },
        { value: "Sub-divisions ", text: "Sub-divisions" },
        { value: "City", text: "City" },
      ],

      Schools: [
        { value: "Public ", text: "Public" },
        { value: "Private", text: "Private" },
      ],

      Hospitals: [
        { value: "Public ", text: "Public" },
        { value: "Private", text: "Private" },
      ],

      Ministries: [
        { value: "Regions", text: "Regions" },
        { value: "Division", text: "Division" },

        { value: "Sub-divisions", text: "Sub-divisions" },
        { value: "City", text: "City" },
      ],

      optionss: [
        { id: "all", label: "All" },
        { id: "business", label: "Business" },
        { id: "people", label: "People" },
        { id: "network", label: "Network" },
        { id: "marketplace", label: "Markeplace", notEnabled: true },
        { id: "posts", label: "Posts" },
      ],

      options: [
        { item: "all", name: "All" },
        { item: "business", name: "Business" },
        { item: "people", name: "People" },
        { item: "network", name: "Network" },
        { item: "marketplace", name: "Markeplace", notEnabled: false },
        { item: "posts", name: "Posts" },
      ],
      filters: [
        { item: "any", name: "Location : Any" },
        { item: "yaounde", name: "Yaounde, Cameroon" },
        { item: "dhaka ", name: "Dhaka, Bangladesh" },
        { item: "new york", name: "New York, United States" },
        { item: "douala", name: "Douala, Cameroon" },
        { item: "karachi", name: "Karachi, Pakistan" },
      ],

      posts: [
        { item: "any", name: "Post: Any" },
        { item: "people", name: "People I am following" },
        { item: "business", name: "Businesses i am following" },
        { item: "networks", name: "Networks I am following" },
      ],

      education: [
        { item: "any", name: "Education: Any" },
        { item: "ub", name: "University Of Buea" },
        { item: "uba", name: "University Of Yaounde" },
        { item: "uy", name: "University Of Yaounde 1" },
      ],

      profession: [
        { item: "any", name: "Profession: Any" },
        { item: "engineer", name: "Engineen" },
        { item: "teacher", name: "Teacher" },
        { item: "farmer", name: "Farmer" },
      ],

      workplace: [
        { item: "any", name: "Post: Any" },
        { item: "yaounde", name: "Yaounde" },
        { item: "douala", name: "Douala" },
        { item: "Buea", name: "Buea" },
      ],

      sponsoredBusinesses: [
        { title: "Business 1" },
        { title: "Business 2" },
        { title: "Business 3" },
        { title: "Business 4" },
      ],
    };
  },
  computed: {
    subCategories() {
      return this.$store.state.market.subCat;
    },
    subFilter() {
      return this.$store.state.market.subFilter;
    },
  },

  methods: {
    getFilter(subId) {
      this.filterLoader = true;
      this.noFilter = "";

      this.$store
        .dispatch("market/getFilter", subId)
        .then((res) => {
          console.log("Filters: ");

          console.log(res.data.data);
          if (res.data.data.length === 0) {
            let subName = ''
            this.subCategories.map((sub)=>{
              if (sub.id === subId) {
                subName = sub.name
              }
            })
            this.noFilter = `No filter available for ${subName}!`;
          }

          this.filterLoader = false;
          this.$store.commit("market/setSubFilters", res.data.data);
        })
        .catch((err) => {
          console.error(err);
          this.filterLoader = false;
        });
    },
    switchcategoriesfilters() {
      this.showform = false;
      console.log(this.selectedfilter);

      switch (this.selectedfilter) {
        case "male":
          this.categories_sub_filters = this.male;
          break;

        case "female":
          this.categories_sub_filters = this.female;
          break;

        case "Legal_service":
          this.categories_sub_filters = this.Legal_service;
          break;

        case "Professional_services":
          this.categories_sub_filters = this.Professional_services;
          break;

        case "Home_service":
          this.categories_sub_filters = this.Home_service;
          break;

        case "Financial_service":
          this.categories_sub_filters = this.Financial_service;
          break;
      }
    },

    selectedsidebar() {
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
  },
};
</script>

<style scoped>
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
  color: black;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
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

<style></style>
