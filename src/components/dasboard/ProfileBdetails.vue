<template>

     <div ref="wrapper">
       <div class="container wahala" >
            <b-row v-if="loading">
                <b-col cols="12" md="12" lg="12" xl="12">
                    <div class="mbl-wrap">
                        <b-card-text class="mt-3">
                            <b-row>
                                <b-col cols="12" md="12">
                                    <div>
                                        <b-table-simple hover small caption-top responsive>
                                            <b-tbody>
                                                <b-tr>
                                                    <b-td class="a-text text">
                                                        Category
                                                    </b-td>

                                                    <b-td class="a-text text td">
                                                        <span v-for="category in business_about.category" :key="category.id"> {{ category.name }}</span>
                                                    </b-td>
                                                </b-tr> <br/>

                                                <b-tr>
                                                    <b-td class="a-text text">
                                                        Busniness Name
                                                    </b-td>

                                                    <b-td class="a-text text td">
                                                        {{ business_about.name }}
                                                    </b-td>
                                                </b-tr> <br/>

                                                <b-tr>
                                                    <b-td class="a-text text">
                                                        Address
                                                    </b-td>

                                                    <b-td class="a-text text td">
                                                        <span>    
                                                            {{ business_about.address }}
                                                        </span>
                                                    </b-td>
                                                </b-tr> <br/>

                                                <b-tr>
                                                    <b-td class="a-text text">
                                                        City
                                                    </b-td>

                                                    <b-td class="a-text text td">
                                                        <span>
                                                            {{ business_about.city }}
                                                        </span>
                                                    </b-td>
                                                </b-tr> <br/>

                                                <b-tr>
                                                    <b-td class="a-text text">
                                                        Neighbour
                                                    </b-td>

                                                    <b-td class="a-text text td">
                                                        <span  v-if="business_about.neigborhood[0]">
                                                            {{ business_about.neigborhood[0].name }}
                                                        </span>
                                                    </b-td>
                                                </b-tr> <br/>

                                                <b-tr>
                                                    <b-td class="a-text text">
                                                        Public URL
                                                    </b-td>

                                                    <b-td class="a-text text td">
                                                        <span v-if="business_about.website">
                                                            {{ business_about.website }}
                                                        </span>
                                                    </b-td>
                                                </b-tr> <br/>

                                                <b-tr>
                                                    <b-td class="a-text text">
                                                        People
                                                    </b-td>

                                                    <b-td class="a-text text td">
                                                        {{ business_about.community }}
                                                        {{ business_about.community > 1000 ? "K" : "" }} Community
                                                    </b-td>
                                                </b-tr> <br/>

                                                <b-tr>
                                                    <b-td class="a-text text">
                                                        Phone Number
                                                    </b-td>

                                                    <b-td class="a-text text td">
                                                        {{ business_about.phone1 }}
                                                    </b-td>
                                                </b-tr> <br/>

                                                <b-tr>
                                                    <b-td class="a-text text">
                                                        Email
                                                    </b-td>

                                                    <b-td class="a-text text td">
                                                        {{ business_about.email }}
                                                    </b-td>
                                                </b-tr> <br/>

                                                <b-tr>
                                                    <b-td class="a-text text">
                                                        Opening Hours
                                                    </b-td>

                                                    <b-td class="a-text text td">
                                                        <b-link> Open now </b-link>
                                                        <br />
                                                        <b-dropdown size="sm" variant="transperent">
                                                            <template #button-content>
                                                            {{ hoursOpen }}
                                                            </template>
                                                            <b-dropdown-item
                                                            v-for="day in business_about.business_open_hours"
                                                            :key="day.day"
                                                            @click="selectHour(day)"
                                                            >
                                                            {{ day.opening_time }}AM -
                                                            {{ day.closing_time }}PM</b-dropdown-item
                                                            >
                                                        </b-dropdown>
                                                    </b-td>
                                                </b-tr>

                                            </b-tbody> 
                                        </b-table-simple>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-card-text>
                        
                    </div>
                </b-col>
            </b-row>
        </div>

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

import { isGuestUser } from '@/helpers';

export default {
  components: {
   
    
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

<style>
.mbl-wrap {
   height: 100%;
   overflow: hidden;
 }

@media only screen and (max-width: 768px) {
  .wahala .nav-pills .nav-link {
    border-radius: 0.25rem;
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .mbl-wrap {
    overflow: hidden;
    width: 100%;
    display: flex;
    flex-direction: row;
     padding-top: 10px;
        height: 70%;
    
    overflow: auto;
    overflow-x: hidden;

  }
  .nav.nav-pills {
    flex-wrap: nowrap;
    white-space: nowrap;
    max-width: 500px;
    overflow: auto;

    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
  }
  .nav.nav-pills::-webkit-scrollbar {
    display: none;
  }
}
</style>

<style scoped>
.td {
    padding-left: 15%;
    font-weight: 600;
    display: block;
}

.buynow {
  width: 120px;
  margin-bottom: -80px;
  margin-left: -10px;
  position: relative;
}

.mt-15 {
  margin-top: 15px;
}
.button {
  background-color: rgb(238, 119, 40);
  border: none;
  border-radius: 4px;
}
@media only screen and (min-width: 768px) {
  .cent {
    margin-left: 170px;
  }
}
</style>
