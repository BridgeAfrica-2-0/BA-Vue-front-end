<template>
  <div ref="wrapper" class="main-sub-con" > 
     <VuePerfectScrollbar class="scrool-area"  :settings="settings" >
     <b-form @submit.prevent="validate('editAddress')">
        <div class="form-group">
          <label for="username">{{ $t("businessowner.Business_Name") }}:</label
          ><br />
          <input
            type="text"
            name="username"
            id="username"
            :placeholder="$t('businessowner.Business_Name')"
            v-model="business_about_input.name"
            class="form-control"
            required
          />
        </div>

        <div class="form-group">
          <label for="alias">{{ $t("businessowner.Category") }}:</label><br />
          <multiselect
            v-model="multiselecvalue"
            @input="subcategories"
            :tag-placeholder="$t('businessowner.Add_this_as_new_tag')"
            :placeholder="$t('businessowner.Search_or_add_a_tag')"
            label="name"
            track-by="id"
            :options="pcategories"
            :multiple="true"
            :taggable="true"
            @tag="addTag"
          ></multiselect>
        </div>

        <div class="form-group">
          <label for="alias">{{ $t("businessowner.Sub_Category") }}:</label
          ><br />
          <multiselect
            v-model="filterselectvalue"
            :tag-placeholder="$t('businessowner.Add_this_as_new_tag')"
            :placeholder="$t('businessowner.Search_or_add_a_tag')"
            label="name"
            track-by="subcategory_id"
            :options="scategories"
            :multiple="true"
            :taggable="true"
            @tag="addFilter"
          ></multiselect>
        </div>

        <label class="typo__label">{{ $t("businessowner.Filters") }}</label>
        <div>
          <b-card no-body>
            <b-tabs pills card vertical>
              <b-tab
                :title="filters.name"
                v-for="filters in filterselectvalue"
                :key="filters.id"
                active
                ><b-card-text>
                  <b-form-group
                    :label="$t('businessowner.Filters')"
                    class="colorblack"
                  >
                    <b-form-checkbox-group
                      id=""
                      class="colorblack"
                      v-model="select_filterss"
                      name="filters"
                    >
                      <b-form-checkbox
                        class="colorblack"
                        v-for="fil in filters.filters"
                        :key="fil.id"
                        :value="fil.id"
                      >
                        {{ fil.name }}
                      </b-form-checkbox>
                    </b-form-checkbox-group>
                  </b-form-group>
                </b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>

        <div class="form-group">
          <label for="username">{{ $t("businessowner.Keywords") }}</label
          ><br />
          <b-form-tags
            input-id="tags-separators"
            v-model="business_about_input.keywords"
            tag-variant="primary"
            separator=" ,;"
            :limit="limit"
            :tag-validator="validator"
            :placeholder="$t('businessowner.Enter_your_Keywords')"
            no-add-on-enter
            required
          ></b-form-tags>
        </div>
        <div class="row">
          <div class="col-6">
            <b-form-group
              id="input-group-1"
              :label="$t('businessowner.Country')"
              label-for="input-1"
              label-size="sm"
            >
              <multiselect
                v-model="country"
                @input="Region"
                track-by="id"
                label="name"
                :options="countries"
                :multiple="true"
              ></multiselect>
            </b-form-group>
          </div>
          <div class="col-6">
            <b-form-group
              id="input-group-1"
              :label="$t('businessowner.Region')"
              label-for="input-1"
              label-size="sm"
            >
              <multiselect
                v-model="region"
                @input="Division"
                track-by="id"
                label="name"
                :options="regions"
                :multiple="true"
              ></multiselect>
            </b-form-group>
          </div>
          <div class="col-6">
            <label for="country" class="username">
              {{ $t("profileowner.Division") }} :</label
            ><br />
            <multiselect
              v-model="division"
              @input="Municipality"
              :placeholder="$t('profileowner.Search')"
              label="name"
              track-by="id"
              :options="divisions"
              :multiple="true"
            ></multiselect>
          </div>

          <div class="col-6">
            <label for="country" class="username">
              {{ $t("profileowner.Municipality") }}/ {{$t('businessowner.City')}} :</label
            ><br />

            

            <multiselect
              v-model="municipality"
              @input="Locality"
              :placeholder="$t('profileowner.Search')"
              label="name"
              track-by="id"
              :options="municipalities"
              :multiple="true"
            ></multiselect>
          </div>
          <div class="col-6">
            <!-- <label for="Neighbor" class="username">
          {{ $t("profileowner.Neighbor") }} :</label
        ><br /> -->
            <b-form-group
              id="input-group-2"
              :label="$t('profileowner.Neighbor')"
              label-for="input-2"
              label-size="sm"
            >
              <multiselect
                v-model="locality"
                :placeholder="$t('profileowner.Search')"
                label="name"
                track-by="id"
                :options="localities"
                :multiple="true"
              ></multiselect>
            </b-form-group>
          </div>

          
          <!-- <div class="col-6">
            <b-form-group
              id="input-group-2"
              :label="$t('businessowner.City')"
              label-for="input-2"
              label-size="sm"
            >
              <b-form-input
                id="input-1"
                class="mt-1"
                type="text"
                v-model="business_about_input.city"
                required
              ></b-form-input>
            </b-form-group>
          </div> -->
        </div>

        <div class="row">
          <div class="col-6">
            <b-form-group
              id="input-group-2"
              label="Address :"
              label-for="input-2"
              label-size="sm"
            >
                  <input
                        type="text"
                        name="alias"
                        id="Neighbor"
                        v-model="business_about_input.address"
                        placeholder="Neighborhood"
                        class="form-control text"
                      />

              <div class="" style="height: 250px; overflow:hidden">
                <AutocompleteLocation
                  :infos="business_about_input"
                  :region="region"
                  @get-address-details="getGeoCoderResult"
                />
              </div>
            </b-form-group>
          </div>
          

        </div>

        <div class="row">
          <div class="col-6">
            <b-form-group
              id="input-group-2"
              :label="$t('businessowner.Phone_Contact')"
              label-for="input-2"
              label-size="sm"
            >
              <VuePhoneNumberInput
                 default-country-code="CM"
                v-model="business_about_input.phone1"
              />
            </b-form-group>
          </div>
          <div class="col-6">
            <b-form-group
              id="input-group-2"
              label="secondary phone"
              label-for="input-2"
              label-size="sm"
            >
              <VuePhoneNumberInput
                 default-country-code="CM"
                v-model="business_about_input.phone2"
              />
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <b-form-group
              id="input-group-2"
              :label="$t('businessowner.Website')"
              label-for="input-2"
              label-size="sm"
            >
              <b-form-input
                id="input-1"
                class="mt-1"
                type="text"
                v-model="business_about_input.website"
                required
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="col-6">
            <b-form-group
              id="input-group-2"
              :label="$t('businessowner.Business_Email')"
              label-for="input-2"
              label-size="sm"
            >
              <b-form-input
                id="input-1"
                class="mt-1"
                v-model="business_about_input.email"
                type="email"
                :placeholder="$t('businessowner.Enter_your_email')"
                required
              ></b-form-input>
            </b-form-group>
          </div>
        </div>

        <div class="form-group">
          <label @click="input1" for="description">{{
            $t("businessowner.Description")
          }}</label
          ><br />
          <textarea
            type="text"
            id="description"
            name="description"
            v-model="business_about_input.about_business"
            class="mb-3 form-control"
            placeholder="description"
            required
          ></textarea>
        </div>

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="12"
              :label="$t('businessowner.Business_Hours')"
              label-size="md"
              label-class=" pt-0 "
              class="mb-0"
            >
              <b-form-group class="mb-0" v-slot="{ ariaDescribedby }">       
                <b-form-radio-group
                  class="a-text text"
                  :options="['Always Open', 'Open for selected hours']"
                  name="open"
                  :aria-describedby="ariaDescribedby"
                  v-model="open"
                  :disabled="false"
                ></b-form-radio-group>
                <br />
                <b-container v-if="displayHour1">
                  <b-row v-for="(day, index) in dayOfWorks" :key="index">
                    <b-col cols="6"
                      ><b-form-checkbox
                        id=""
                        class="a-text text"
                        name="works"
                        v-model="day.check"
                        :checked="day.check"
                      >
                        {{ day.day }}</b-form-checkbox
                      ></b-col
                    >

                    <b-col
                      ><b-form-input
                        @change="input(index, day)"
                        name="start"
                        type="time"
                        v-model="day.opening_time"
                        :required="day.check ? 'required' : null"
                      ></b-form-input
                    ></b-col>
                    --
                    <b-col
                      ><b-form-input
                        @change="input(index, day)"
                        name="end"
                        type="time"
                        v-model="day.closing_time"
                        :required="day.check ? 'required' : null"
                      ></b-form-input
                    ></b-col>
                  </b-row>
                  <br />
                </b-container>
              </b-form-group>
            </b-form-group>
          </b-container>
        </div>

        <b-button class="mt-3 btn-block" variant="primary" type="submit">
          {{ $t("businessowner.Modify") }}
        </b-button>
      </b-form>
     </VuePerfectScrollbar>
  </div>
</template>

<script>
/**
 * this component is for display and edit the information about business
 * @private
 */
import VuePhoneNumberInput from "vue-phone-number-input";
//import moment from "moment";
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";

import Multiselect from "vue-multiselect";
import AutocompleteLocation from "@/components/AutocompleteLocation";
import { isGuestUser } from '@/helpers';
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
export default {
  components: {
    Multiselect,
    VuePhoneNumberInput,
    AutocompleteLocation,
    VuePerfectScrollbar
  },
  data() {
    return {
      loading: false,
      business_id: null,
      limit: 20,
      accessToken: process.env.VUE_APP_MAPBOX_TOKEN,
      mapStyle: "mapbox://styles/mapbox/outdoors-v11",
      coordinates: [11.504929555178624, 3.8465173382452815], // Lng,Lat
      address: "",
      zoom: 12,
      multiselecvalue: [],
      filterselectvalue: [],
      select_filterss: [],
      country: [],
      region: [],
      division: [],
      municipality: [],
      locality: [],
      dayOfWorks: [
        { day: "monday", mon_start: null, mon_end: null, check: false },
        {
          day: "tuesday",
          tues_start: null,
          tues_end: null,
          check: false,
        },
        {
          day: "wednesday",
          wed_start: null,
          wed_end: null,
          check: false,
        },
        {
          day: "thursday",
          thurs_start: null,
          thurs_end: null,
          check: false,
        },
        { day: "friday", fri_start: null, fri_end: null, check: false },
        {
          day: "saturday",
          sat_start: null,
          sat_end: null,
          check: false,
        },
        { day: "sunday", sun_start: null, sun_end: null, check: false },
      ],

      business_about: {},
      business_about_input: {},
      openNow: null,
      open: "Open for selected hours",
      tempo: {},
      displayHour: true,
      displayHour1: true,
      isGuestUser: isGuestUser
    };
  },
  watch: {
    open(value) {
      console.log("change open value ", value);
      if(value == "Always Open"){
        this.displayHour1 = false
      }else if(value == "Open for selected hours"){
        this.displayHour1 = true
      }
    },
    dayOfWorks: {
      handler(newValue, oldValue) {
        let num = 0;
        newValue.map((day) => {
          if (day.check) {
            num = num + 1;
          }
        });
       
        console.log(newValue);
        console.log(oldValue);
      },
      deep: true,
    },
  },
  created() {
    let loader = this.$loading.show({
      container: this.$refs.about,
      canCancel: true,
      onCancel: this.onCancel,
      color: "#e75c18",
    });
    
    const dispatchMethod = this.isGuestUser ? "businessGuest": "businessOwner";
    this.$store
      .dispatch(dispatchMethod+"/loadUserBusinessAbout", {
        // business_abobusiness_id: this.business_about_input,
        business_id: this.biz_id,
      })
      .then((response) => {
        this.business_about = JSON.parse(
          JSON.stringify(this.$store.getters[dispatchMethod+"/getBusinessAbout"])
        );
        // this.dayOfWorks = this.initialize(this.dayOfWorks);
        if(this.business_about.business_open_hours.length >= 1){

          this.dayOfWorks = this.business_about.business_open_hours;
  
          this.business_about.business_open_hours.forEach((element, index) => {
  
           if(element.opening_time && element.closing_time){
              this.dayOfWorks[index].check = true;
           }else { this.dayOfWorks[index].check = false; }
        });
        
        }

      })
      .catch((error) => {
        console.log("error from the server or browser error(2) ++++", error);
      })
      .finally(() => {
        this.business_about = JSON.parse(
          JSON.stringify(this.$store.getters[dispatchMethod+"/getBusinessAbout"])
        );
        console.log("-------", this.business_about);
        this.loading = true;
        loader.hide();
      });
  },
  mounted() {
    this.business_id = this.biz_id;
    this.categories();
    this.Country();
    this.editBusiness();
  },
  computed: {

     biz_id() {
      return this.$store.state.dashboard.dBusinessId;
    },

    isCheck(data) {
      if (data.opening_time && data.closing_time) {
        return true;
      } else return false;
    },
    showPen() {
      if (
        this.$route.name == "BusinessFollower" ||
        this.$route.name == "BusinessEditor" ||
         this.$route.name == "BusinessFollowerGuest"
      ) {
        return false;
      } else {
        return true;
      }
    },
    hoursOpen() {
      console.log();
      return this.openNow === null
        ? "Nothing"
        : this.openNow.opening_time +
            " AM - " +
            this.openNow.closing_time +
            " PM";
    },
    // business_about_input(){
    //   this.business_about_input = JSON.parse(
    //     JSON.stringify(this.business_about)
    //   );
    //   return this.business_about_input;
    // }
    scategories() {
      return this.$store.state.auth.subcategories;
    },
    pcategories() {
      return this.$store.state.auth.categories;
    },
    countries() {
      return this.$store.state.auth.country;
    },
    regions() {
      return this.$store.state.auth.region;
    },
    divisions() {
      return this.$store.state.auth.division;
    },
    municipalities() {
      return this.$store.state.auth.municipality;
    },
    localities() {
      return this.$store.state.auth.locality;
    },
    selectedcategories: function() {
      let selectedUsers = [];
      this.multiselecvalue.forEach((item) => {
        if (item.category_id) {
          selectedUsers.push(item.category_id);
        } else {
          selectedUsers.push(item.id);
        }
      });
      return selectedUsers;
    },
    selectedsubcategories: function() {
      let sub_cat = [];
      console.log("sous cat --- ", this.filterselectvalue);
      this.filterselectvalue.forEach((item) => {
        if (item.subcategory_id) {
          sub_cat.push(item.subcategory_id);
        } else {
          sub_cat.push(item.id);
        }
      });
      return sub_cat;
    },
    selectedcountry: function() {
      let sub_cat = [];
      this.country.forEach((item) => {
        sub_cat.push(item.id);
      });
      return sub_cat;
    },
    selectedregion: function() {
      let sub_cat = [];
      this.region.forEach((item) => {
        if (item.region_id) {
          sub_cat.push(item.region_id);
        } else {
          sub_cat.push(item.id);
        }
      });
      return sub_cat;
    },
    selecteddivision: function() {
      let sub_cat = [];
      this.division.forEach((item) => {
        if (item.division_id) {
          sub_cat.push(item.division_id);
        } else {
          sub_cat.push(item.id);
        }
      });
      return sub_cat;
    },
    selectedmunicipality: function() {
      let sub_cat = [];
      this.municipality.forEach((item) => {
        if (item.council_id) {
          sub_cat.push(item.council_id);
        } else {
          sub_cat.push(item.id);
        }
      });
      return sub_cat;
    },

      city: function() {
      let sub_cat = [];
      this.municipality.forEach((item) => {
        if (item.council_id) {
          sub_cat.push(item.name);
        } else {
          sub_cat.push(item.name);
        }
      });
      return sub_cat.toString();
    },



    selectedlocality: function() {
      let sub_cat = [];
      this.locality.forEach((item) => {
        if (item.neighborhood_id) {
          sub_cat.push(item.neighborhood_id);
        } else {
          sub_cat.push(item.id);
        }
      });
      return sub_cat;
    },
  },
  methods: {

    input1(){
         
      this.dayOfWorks.map((item) =>{
          if(item.day == "monday"){
              this.dayOfWorks[0].mon_start =this.dayOfWorks[0].opening_time;
              this.dayOfWorks[0].mon_end =this.dayOfWorks[0].closing_time;
              this.dayOfWorks[0].monday =this.dayOfWorks[0].day;
          }else  if(item.day == "tuesday"){
              this.dayOfWorks[1].tues_start =this.dayOfWorks[1].opening_time;
              this.dayOfWorks[1].tues_end =this.dayOfWorks[1].closing_time;
              this.dayOfWorks[1].tuesday =this.dayOfWorks[1].day;
          } else  if(item.day == "wednesday"){
              this.dayOfWorks[2].wed_start =this.dayOfWorks[2].opening_time;
              this.dayOfWorks[2].wed_end =this.dayOfWorks[2].closing_time;
              this.dayOfWorks[2].wednesday =this.dayOfWorks[2].day;
          } else  if(item.day == "thursday"){
              this.dayOfWorks[3].thurs_start =this.dayOfWorks[3].opening_time;
              this.dayOfWorks[3].thurs_end =this.dayOfWorks[3].closing_time;
              this.dayOfWorks[3].thursday =this.dayOfWorks[3].day;
          } else  if(item.day == "friday"){
              this.dayOfWorks[4].fri_start =this.dayOfWorks[4].opening_time;
              this.dayOfWorks[4].fri_end =this.dayOfWorks[4].closing_time;
              this.dayOfWorks[4].friday =this.dayOfWorks[4].day;
          } else  if(item.day == "saturday"){
              this.dayOfWorks[5].sat_start =this.dayOfWorks[5].opening_time;
              this.dayOfWorks[5].sat_end =this.dayOfWorks[5].closing_time;
              this.dayOfWorks[5].saturday =this.dayOfWorks[5].day;
          } else  if(item.day == "sunday"){
              this.dayOfWorks[6].sun_start =this.dayOfWorks[6].opening_time;
              this.dayOfWorks[6].sun_end =this.dayOfWorks[6].closing_time;
              this.dayOfWorks[6].sunday =this.dayOfWorks[6].day;
          }
        })
        console.log('---input: ',this.dayOfWorks);
        console.log('---input: ',...this.dayOfWorks);
       
        this.dayOfWorks.map((item) =>{

            Object.entries(item).forEach(
            ([key, valeur]) => {
              this.tempo[key] = valeur 
            }
          );

      });
      console.log("good: ", this.tempo);
    },

    /**


/**

     * this method is used to retrieve information from the mapbox
     * @private
     */


    getGeoCoderResult(response) {console.log('res map ---',response);
     this.business_about_input.address = response.address;
       this.business_about_input.lng = response.coordinates[0];
      this.business_about_input.lat = response.coordinates[1];
},


    /**
     * this method is used to transform the elements of the array into a character string
     * in particular for the  category Id
     * @private
     */
    stringArray1(words) {
      let keyword = "";
      words.map((item) => {
        if (item.category_id) {
          keyword += item.category_id + ",";
        } else {
          keyword += item.id + ",";
        }
      });
      console.log("id ici ---", words, "---", keyword);
      return keyword.substring(0, keyword.length - 1);
    },

    /**
     * this method is used to transform the elements of the array into a character string
     * in particular for the  subcategory Id
     * @private
     */
    stringArray(words) {
      let keyword = "";
      words.map((item) => {
        if (item.subcategory_id) {
          keyword += item.subcategory_id + ",";
        } else if (item.subcategoryId){
          keyword += item.subcategoryId + ",";
        } else {
          keyword += item.id + ",";
        }
      });

      return keyword.substring(0, keyword.length - 1);
    },

    /**
     * this method is used to transform the elements of the array into a character string
     * @private
     */
    ArrayString(words) {
      let keyword = "";
      words.map((item) => {
        keyword += item + ",";
      });

      return keyword.substring(0, keyword.length - 1);
    },

    /**
     * this method is used to load information from the business
     * @private
     */
    loadBusinessAbout() {
      this.$store
        .dispatch("businessOwner/loadUserBusinessAbout", {
          // business_abobusiness_id: this.business_about_input,
          business_id: this.biz_id,
        })
        .then((res) => {
          this.business_about = JSON.parse(
            JSON.stringify(
              this.$store.getters["businessOwner/getBusinessAbout"]
            )
          );
        });
    },

    /**
     * used to validate the tags
     * @private
     */
    validator(tag) {
      return tag.length > 2 && tag.length < 20;
    },

    /**
     * this method allows to take into account all the subcategories selected by the user
     * @private
     */
    addTag(newTag) {
      const tag = {
        name: newTag,
        id: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.multiselec.push(tag);
      this.multiselecvalue.push(tag);
    },

    /**
     * this method allows to take into account all the categories selected by the user
     * @private
     */
    addFilter(newTag) {
      console.log("sous cat --- ", this.filterselectvalue);
      const tag = {
        name: newTag,
        id: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.multiselec.push(tag);
      this.filterselectvalue.push(tag);
    },
    selectHour(day) {
      this.openNow = day;
    },
    /**
     * initialize the working days
     * @private
     */
    initialize(daysOfWorks) {
      const zdaysOfWorks = daysOfWorks.map((day) => {
        this.open =
          this.business_about.business_open_hours.length >= 7
            ? "Always Open"
            : "Open for selected hours";
        this.business_about.business_open_hours.map((dayOpen) => {
          if (day.day.toLowerCase() === dayOpen.day.toLowerCase()) {
            day.closing_time = dayOpen.closing_time;
            day.opening_time = dayOpen.opening_time;
            day.check = true;
          }
        });
        return day;
      });
      console.log(zdaysOfWorks);
      return zdaysOfWorks;
    },

    cancel() {
      console.log("cancel method ");
      this.business_about_input = JSON.parse(
        JSON.stringify(this.business_about)
      );
    },

    /**
     * Use to update either the biography or all business information depending on the case
     * @private
     */
    validate(type) {
      switch (type) {
        case "modifyBiography":
          console.log(
            "vuex store +++++ " +
              this.$store.getters["businessOwner/getBusinessAbout"]
          );
          this.test();
          var data = {
            business_id: this.biz_id,
            data: {
              about_business: this.business_about_input.about_business,
              name: this.business_about_input.name,
            },
          };
          this.$store
            .dispatch("businessOwner/updateBusinessBiographie", data)
            .then((response) => {
              console.log(
                "fetch finished on the database response (3) ",
                response
              );
              this.loadBusinessAbout();
              console.log("Modify Business Biography end++++");
            })
            .catch((error) => {
              console.log(
                error,
                "Modify Business Biography end error (2) ++++"
              );
            })
            .finally(() => {
              console.log("Finally Modify Business About Biography  +++++");
              this.business_about = JSON.parse(
                JSON.stringify(
                  this.$store.getters["businessOwner/getBusinessAbout"]
                )
              );
              console.log(this.business_about);
              this.$refs["biographyModal"].hide();
            });
          break;
        case "editAddress":
          console.log("edit address business");
          console.log(
            this.multiselecvalue,
            " --sous cat --- ",
            this.filterselectvalue
          );

          this.test();

          console.log(this.business_about_input);
          this.input1();

          
       
          console.log('test-------',this.business_about_input.lat, '------:',this.business_about_input.lng);


          var dat = {
            business_id: this.biz_id,
            data: {
              name: this.business_about_input.name,
              about_business: this.business_about_input.about_business,
              categoryId: this.stringArray1(this.multiselecvalue), //this.business_about_input.category[0].category_id,
              subCategoryId: this.stringArray(this.filterselectvalue), //this.business_about_input.subCatFilter[0].subcategoryId,
              filterId: this.ArrayString(this.select_filterss),
              keywords: this.stringKeyword(this.business_about_input.keywords),
              primary_phone: this.business_about_input.phone1,
              secondary_phone: this.business_about_input.phone2,
              website: this.business_about_input.website,
              email: this.business_about_input.email,
              country: this.ArrayString(this.selectedcountry), //this.business_about_input.country[0].country_id,
              region: this.ArrayString(this.selectedregion), //this.business_about_input.region[0].region_id,
              division: this.ArrayString(this.selecteddivision), //this.business_about_input.division[0].division_id,
              council: this.ArrayString(this.selectedmunicipality), //this.business_about_input.council[0].council_id,
              neigborhood: this.ArrayString(this.selectedlocality), //this.business_about_input.council[0].neighborhood_id,
              alway: !this.displayHour1 ? "vrai" : "faux",
              // city: this.business_about_input.city,
              city: this.city,
              ...this.tempo,
              lat: this.business_about_input.lat,
              lng: this.business_about_input.lng,
              address: this.business_about_input.address,
            },
          };

         
          console.log("test envoi: ", dat);
          this.$store
            .dispatch(
              "businessOwner/updateUserBusinessAbout",
              dat
              
            )
            .then((response) => {
              console.log(
                "update user business about response ++++++",
                response
              );
              this.flashMessage.show({
                status: "success",
                blockClass: "custom-block-class",
                message: this.$t("businessowner.Business_Profile_updated"),
              });
              this.loadBusinessAbout();
              this.business_about = this.$store.getters[
                "businessOwner/getBusinessAbout"
              ];
              this.$refs["addressBusinessModal"].hide();
              console.log("update user business about end");
             
            })
            .catch((error) => {
              console.log(error, "update user business about end++++");
            })
            .finally(() => {
              console.log("Finally Update Business About Biography  +++++");
              this.business_about = JSON.parse(
                JSON.stringify(
                  this.$store.getters["businessOwner/getBusinessAbout"]
                )
              );
              console.log(this.business_about);
              this.$refs["addressBusinessModal"].hide();
              this.$refs["biographyModal"].hide();
            });
          break;
        default:
          console.log("No Correspondance");
          break;
      }
    },
    /**transform the array containing the keywords into a string
     * @private
     */
    stringKeyword(words) {
      let keyword = "";
      words.map((item) => {
        keyword += item + ",";
      });
      return keyword.substring(0, keyword.length - 1);
    },
    test() {
      let businessAddress = this.dayOfWorks.filter((day) => {
        return day.check === true;
      });
      if (businessAddress.length > 0) {
        businessAddress = businessAddress.map((day) => {
          return [day.day, day.opening_time, day.closing_time];
        });
      } else {
        businessAddress = [];
      }
      console.log(this.business_about_input.business_open_hours);
      this.business_about_input.business_open_hours = businessAddress;
    },

    /**
     * using to load information of the business in the edit form
     * @private
     */
    load() {
      this.business_about_input = JSON.parse(
        JSON.stringify(this.business_about)
      );
    },

    /**
     * using to dispatch categorie
     * @private
     */
    categories() {
      this.$store
        .dispatch("auth/categories")
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    /**
     * using to dispatch subcategorie
     * @private
     */
    subcategories() {
      console.log("subcategories here");
      let formData2 = new FormData();
      formData2.append("categoryId", this.selectedcategories);
      this.$store
        .dispatch("auth/subcategories", formData2)
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    /**
     * using to dispatch filter
     * @private
     */
    filters() {
      this.$store
        .dispatch("auth/filters")
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
    Setcategoryfiters() {
      this.$store
        .dispatch("auth/Setcategoryfiters")
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    /**
     * using to dispatch country
     * @private
     */
    Country() {
      this.$store
        .dispatch("auth/country")
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    /**
     * using to dispatch region
     * @private
     */
    Region() {
      let formData2 = new FormData();
      formData2.append("countryId", this.selectedcountry);
      this.$store
        .dispatch("auth/region", formData2)
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    /**
     * using to dispatch division
     * @private
     */
    Division() {
      console.log("----", this.selectedregion);
      let formData2 = new FormData();
      formData2.append("regionId", this.selectedregion);
      this.$store
        .dispatch("auth/division", formData2)
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    /**
     * using to dispatch municipality
     * @private
     */
    Municipality() {
      let formData2 = new FormData();
      formData2.append("divisionId", this.selecteddivision);
      this.$store
        .dispatch("auth/municipality", formData2)
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    /**
     * using to dispatch locality
     * @private
     */
    Locality() {
      console.log("Locality");
      let formData2 = new FormData();
      formData2.append("councilId", this.selectedmunicipality);
      this.$store
        .dispatch("auth/locality", formData2)
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    /**
     * this method makes it possible to retrieve information relating to the business
     * @private
     */

    editBusiness() {
      console.log("editBusiness");
      const endpoint = this.isGuestUser ? "guest/business/edit/" : "business/edit/";
      this.axios
        .get(endpoint + this.business_id)
        .then(({ data }) => {
          console.log("testing: ", data);
          this.setEditData(data.data);
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    /**
     * this method allows to pre-fill the form which allows to edit a business
     * @private
     */
    setEditData(business) {
      console.log("setting editBusiness data");
      console.log(business);
      this.multiselecvalue = business.category;
      this.filterselectvalue = business.subCatFilter;

      let Bcountry = business.country;
      Bcountry.map((c) => {
        this.country.push({ id: c.country_id, name: c.name });
      });
      this.region = business.region;
      this.division = business.division;
      this.municipality = business.council;
      this.locality = business.neigborhood;
      let select_filterss = business.filter;
      select_filterss.map((item) => {
        this.select_filterss.push(item.filter_id);
      });
      this.subcategories();
      this.Region();
      this.Division();
      this.Municipality();
      this.Locality();
    },
  },
};
</script>

<style scoped>
.scrool-area{
  height: inherit;
}
.map {
  border: 0;
  width: 50%;
}
.btn-item {
  color: green;
}
.edit {
  position: relative;
  left: 98%;
  cursor: pointer;
  display: inline-block;
}
h4,
p {
  text-align: left;
}
@media (min-width: 762px) {
  .primary {
    margin-right: 6px;
  }

  .main-sub-con{

  height: 800px;
  
  overflow: hidden;

}


}
@media (min-width: 762px) {
  .primary {
    margin-right: 8px;
  }
}
@media (max-width: 768px) {
  .primary {
    margin-right: 6px;
    font-size: 12px !important;
  }
  .card-text {
    font-size: 14px !important;
  }
}
@media (min-width: 768px) {
  .primary {
    margin-right: 8px;
    font-size: 14px !important;
  }
  .card-text {
    font-size: 14px !important;
  }
}
</style>
