<template>
  <div>  
    <b-card title="" header-tag="header" footer-tag="footer">
      <div
        style="float:right"
        class="edit cursor-pointer"
        v-b-modal.bv-edit-about
      >
        <b-icon icon="pencil-fill" variant="primary"></b-icon>
      </div>
      <h6 class="mb-2">
        <b>{{ $t("businessf.Intro") }} </b>
      </h6>

      <b-card-text>
        <p>
          <b-icon icon="briefcase-fill" class="primary icon-size"></b-icon>
          <span v-for="cat in business_intro.category" :key="cat.id">
            {{ cat.name }},
          </span>
          <!-- {{business_intro.name}} -->
        </p>
        <p class="d-flex justify-content-start align-items-start">
          <b-icon icon="search" class="primary icon-size"></b-icon>
          <!-- <span v-for="(keyword, index) in business_intro.keywords" :key="index"
            >{{ keyword }},
          </span> -->
          <span> {{ business_intro.name }} </span>
        </p>
        <p class="d-flex justify-content-start align-items-start">
          <b-icon icon="geo-alt-fill" class="primary icon-size"></b-icon>
          {{ business_intro.address }}
        </p>
        <p class="d-flex justify-content-start align-items-start">
          <b-icon icon="link" class="primary icon-size"></b-icon>
          {{ business_intro.website }}
        </p>
        <p class="d-flex justify-content-start align-items-start">
          <b-icon icon="people-fill" class="primary icon-size"></b-icon>
          {{ business_intro.community }} {{ $t("businessowner.Community") }}
        </p>
        <p class="d-flex justify-content-start align-items-start">
          <b-icon icon="telephone-fill" class="primary icon-size"></b-icon>
          {{ business_intro.phone1 }}
        </p>
        <p class="d-flex justify-content-start align-items-start">
          <b-icon icon="envelope-fill" class="primary icon-size"></b-icon>
          {{ business_intro.email }}
        </p>
        <p class="d-flex justify-content-start align-items-start">
          <b-icon icon="clock" class="primary icon-size"></b-icon>
          <b-link class="mr-2"> {{ $t("businessowner.Open_now") }}</b-link>
          <b-dropdown size="sm" variant="transperent">
            <template #button-content>
              {{ business_intro.business_open_hours[0].day }}
              <span class="ml-2">
                ({{ business_intro.business_open_hours[0].opening_time }}
                <span
                  v-if="
                    business_intro.business_open_hours[0].opening_time >=
                      '00:00:00' &&
                      business_intro.business_open_hours[0].opening_time <
                        '12:00:00'
                  "
                  >AM</span
                >
                <span v-else>PM</span> -
                {{ business_intro.business_open_hours[0].closing_time }}
                <span
                  v-if="
                    business_intro.business_open_hours[0].closing_time >=
                      '00:00:00' &&
                      business_intro.business_open_hours[0].closing_time <
                        '12:00:00'
                  "
                  >AM</span
                >
                <span v-else>PM</span>)
              </span>
            </template>
            <b-dropdown-item
              v-for="(open_hours, index) in business_intro.business_open_hours"
              :key="index"
            >
              {{ open_hours.day }}
              <span class="ml-2">
                ({{ open_hours.opening_time }}
                <!-- check if is AM or PM -->
                <span
                  v-if="
                    open_hours.opening_time >= '00:00:00' &&
                      open_hours.opening_time < '12:00:00'
                  "
                  >AM</span
                >
                <span v-else>PM</span>
                - {{ open_hours.closing_time }}
                <span
                  v-if="
                    open_hours.closing_time >= '00:00:00' &&
                      open_hours.closing_time < '12:00:00'
                  "
                  >AM</span
                >
                <span v-else>PM</span>)
              </span>
            </b-dropdown-item>
          </b-dropdown>
        </p>
      </b-card-text>

      <MglMap
        :accessToken="accessToken"
        :mapStyle.sync="mapStyle"
        v-if="business_intro.lng && business_intro.lat"
        :center="[business_intro.lng, business_intro.lat]"
        :zoom="zoom"
        style="width: 100%; height: 250px"
      >
        <MglMarker
          :coordinates="[business_intro.lng, business_intro.lat]"
          color="red"
        >
          <MglPopup>
            <div class="row">
              <div class="px-4 py-2 dialog-div">
                <p class="mb-0 dialog-text">{{ business_intro.name }}</p>
                <p class="mb-0 dialog-text">
                  {{ business_intro.address }}
                </p>
              </div>
            </div>
          </MglPopup>
        </MglMarker>
      </MglMap>
    </b-card>

    <b-modal
      id="bv-edit-about"
      hide-footer
      :title="$t('businessowner.Edit_Business')"
      size="lg"
    >
      <b-form>
        {{ blec }}
        <b-row>
          <div class="form-group col-md-6">
            <label for="username">{{ $t("businessowner.Busness_Name") }}:</label
            ><br />
            <input
              type="text"
              name="name"
              id="name"
              :placeholder="$t('businessowner.Busness_Name')"
              class="form-control"
              v-model="form.name"
            />

            <b-form-group
            id="input-group-2"
            :label="$t('businessowner.Phone_Contact')"
            label-for="input-2"
            label-size="sm"
            class=""
          >
            <VuePhoneNumberInput
            fetch-country
            v-model="form.phone1"
          />
            
          </b-form-group>

          <b-form-group
            class=""
            id="input-group-2"
            :label="$t('businessowner.Business_Email')"
            label-for="input-2"
            label-size="sm"
          >
            <b-form-input
              id="input-1"
              class="mt-1"
              v-model="form.email"
              type="email"
              required
            ></b-form-input>
          </b-form-group>


           <b-form-group
            id="input-group-2"
            :label="$t('businessowner.website')"
            label-for="input-2"
            label-size="sm"
            class=""
          >
            <b-form-input
              id="input-1"
              class="mt-1"
              v-model="form.website"
              type="text"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            :label="$t('businessowner.address')"
            label-for="input-2"
            label-size="sm"
            class=""
          >
            <b-form-input
              id="input-1"
              class="mt-1"
              v-model="form.address"
              type="text"
              required
            ></b-form-input>

            <div style="width: 100%; height: 200px; overflow:hidden">
                  <AutocompleteLocation
                  
                    :region="region"
                    @get-address-details="getGeoCoderResult"
                  />
                </div>
          </b-form-group>

          </div>

          <div class="form-group col-md-6">
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
            
            @tag="addTag"
          ></multiselect> 

            <!-- <b-form-select
              :options="categories"
              class="mb-3"
              value-field="item"
              v-model="form.category"
              text-field="name"
            ></b-form-select> -->
          <!-- </div>

          <div class="form-group col-md-6"> -->

          <label for="alias">{{ $t('businessowner.Sub_Category') }}:</label><br />
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


          <label class="typo__label">{{ $t('businessowner.Filters') }}</label>
         <div>
          <b-card no-body>
            <b-tabs pills card vertical>
              <b-tab
                :title="filters.name"
                v-for="filters in filterselectvalue"
                :key="filters.id"
                active
                ><b-card-text>
                  <b-form-group :label="$t('businessowner.Filters')" class="colorblack">
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
        
        </div>

        </b-row>

        <b-row>
          

          
        </b-row>

        <b-row>
          <div class="form-group col-md-6">
            <!-- <label for="keywords">{{ $t("businessowner.Keywords") }}</label
            ><br />
            <div class="col-md-12 pl-0 pr-0">
              <b-form-tags
                input-id="alias"
                v-model="form.keywords"
              ></b-form-tags>
            </div> -->
          </div>

          <div class="form-group col-md-6">
            <!--  -->
          </div>
        </b-row>

        <b-row>
          <div class="form-group col-md-6">
           
          </div>
          
         
        </b-row>

        <b-button class="mt-3 btn-block" variant="primary" @click="validate">
          {{ $t("businessowner.Modify") }}
        </b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import AutocompleteLocation from "@/components/AutocompleteLocation";
import VuePhoneNumberInput from "vue-phone-number-input";
import axios from "axios";
import Multiselect from "vue-multiselect";

import { MglMap, MglPopup, MglMarker } from "vue-mapbox";
import { validationMixin } from "vuelidate";

import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  
  data() {
    return {
      form: null,
      blec: this.business_intro,
      multiselecvalue: [],
      filterselectvalue: [],
      select_filterss: [],
      country: [],
      region: [],
      url: null,

      markers: [],
      accessToken: process.env.VUE_APP_MAPBOX_TOKEN,
      mapStyle: "mapbox://styles/mapbox/outdoors-v11",
      coordinates: [11.504929555178624, 3.8465173382452815], // Lng,Lat
      zoom: 11,
      position: {
        lat: 0,
        lng: 0,
      },

      currentPlace: null,

      places: [],

      category: "",
      categories: [
        // { item: "Professional_and_home_service", name: "Professionals" },
        // { item: "Agriculture ", name: "Agriculture " },
        // { item: "Restaurant ", name: " Restaurant " },
        // { item: "Electronics ", name: "Electronics " },
        // { item: "Handicrafts", name: "Handicrafts" },
        // { item: "clothing", name: "clothing" },
        // { item: "Mechanics", name: "Mechanics" },
        // { item: "Health_unit ", name: "Health unit " },
        // { item: "Bars", name: "Bars" },
        // { item: "Hair_and_beauty ", name: "Hair and beauty " },
        // { item: "Real_estate ", name: "Real_estate " },
        // { item: "Travelling ", name: "Travelling " },
        // { item: "Hotels", name: "Hotels" },
        // { item: "station", name: " station  " },
        // { item: "Mayor_concils", name: "Mayor_concils" },
        // { item: "Taxis service", name: "Taxis service" },
      ],

      edit1: false,
      edit2: false,
      leftTitle: "About Mapoure Agrobusiness",
      textToo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n" +
        "              Asperiores temporibus, rerum iste id obcaecati quae odit accusamus\n" +
        "              reprehenderit, ipsa nam laudantium pariatur. Harum, soluta. Nam\n" +
        "              accusantium hic numquam architecto debitis. Lorem ipsum dolor sit\n" +
        "              amet consectetur adipisicing elit. Asperiores temporibus, rerum\n" +
        "              iste id obcaecati quae odit accusamus reprehenderit, ipsa nam\n" +
        "              laudantium pariatur. Harum, soluta. Nam accusantium hic numquam\n" +
        "              architecto debitis. Asperiores temporibus, rerum iste id obcaecati\n" +
        "              quae odit accusamus reprehenderit, ipsa nam laudantium pariatur.\n" +
        "              Harum, soluta. Nam accusantium hic numquam architecto debitis.",
      workedAt: "Current or Last Organization",
      lastEducation: "Last Education",
      homeTown: "Dummy",
      cityName: "Dummy",
      followed: "525",
      telephone: "+1 (234) 567-8974",
      email: "info@businessname.com",
    };
  },

  validations: {
    form: {
      name: {
        required,
      },

      category: {
        required,
      },
    },
  },

  methods: {
    /**
     * Used to edit biography
     * @return void
     */

    getGeoCoderResult(response) {console.log(response);
      this.coordinates = response.coordinates;
      this.address = response.address;
      console.log("yoo mother fuckers");
      console.log(response);
    },

    LocationFormat(data){
      let keyword = '';
      data.map(item =>{

        if(item.country_id){
          keyword+= item.country_id+','
        }else if(item.region_id){
          keyword+= item.region_id+','
        }else if (item.council_id){
           keyword+= item.council_id+','
        }else if(item.division_id){
          keyword+= item.division_id+','
        }else if(item.neighborhood_id){
           keyword+= item.neighborhood_id+','
        }

      })
      return keyword.substring(0, keyword.length-1);
    },

    ArrayString(words){
       let keyword = '';
        words.map(item =>{
          keyword+= item+','
        })

        return keyword.substring(0, keyword.length-1);
    },

    stringArray(words){
         let keyword = "";
      words.map(item => {
        if (item.subcategoryId) { 
          keyword += item.subcategoryId + ",";
        } else if(item.subcategory_id) {
          keyword += item.subcategory_id + ",";
        }else {
           keyword += item.id + ",";
        }
      });

        return keyword.substring(0, keyword.length-1);
    },
    stringArray1(words){
        let keyword = '';
        words.map(item =>{
          if(item.category_id){
            keyword+= item.category_id+','
          }else {

            keyword+= item.id+','
          }
        })

        return keyword.substring(0, keyword.length-1);
    },

    editBusiness() {
      console.log("editBusiness");
      this.axios
        .get("business/edit/" + this.$route.params.id)
        .then(({ data }) => {
          console.log("testing: ", data);
          this.setEditData(data.data);
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
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

     addFilter(newTag) {
      const tag = {
        name: newTag,
        id: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.multiselec.push(tag);
      this.filterselectvalue.push(tag);
    },
    subcategories() {
      console.log(this.pcategories," subcategories here", this.selectedcategories);
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
 
    addTag(newTag) {
      const tag = {
        name: newTag,
        id: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.multiselec.push(tag);
      this.multiselecvalue.push(tag);
    },
    businessInfos() {
      // this.$store.dispatch("businessOwner/businessInfo", this.url);
       this.$store
      .dispatch("businessOwner/loadUserBusinessAbout", {
        // business_abobusiness_id: this.business_about_input,
        business_id: this.$route.params.id,
      })
      .then (res  => {

        this.form =  JSON.parse(
                JSON.stringify(
                  this.$store.getters["businessOwner/getBusinessAbout"]
                ))
      }
      )
    },

    change(val) {
      console.log(val);

      this.$store.dispatch("auth/region", { countryId: val }).then((res) => {
        console.log("---", this.$store.state.auth.region);

        this.region = [];
        // this.$store.state.auth.region.map(dat =>{

        //       this.region.push(
        //         {
        //           item: dat.id,
        //           name: dat.name
        //         }
        //       )
        //     })
      });
    },

    getCountry() {
      this.$store.dispatch("auth/country").then((res) => {
        console.log("------------------------", this.$store.state.auth.country);

        this.$store.state.auth.country.map((dat) => {
          this.country.push({
            item: dat.id,
            name: dat.name,
          });
        });
      });
    },
    getCathegorie() {
      this.$store.dispatch("auth/categories").then((res) => {
        console.log("---", this.$store.state.auth.categories);

        this.$store.state.auth.categories.map((dat) => {
          console.log("----", dat);
          this.categories.push({
            item: dat.id,
            name: dat.name,
          });
        });
      });
    },
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];
      if (field) {
        return {
          red: field.$invalid && field.$dirty,
        };
      }
    },

    validate() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        console.log("error error");
        return false;
      } else {
        console.log("no error error");

        this.UpdateBusiness();
        return true;
      }
    },

    UpdateBusiness() {
      let formData2 = new FormData();
    console.log("----ttt",this.select_filterss, "----ggg ", this.filterselectvalue)
      formData2.append("country", this.LocationFormat(this.form.country));
      formData2.append("region", this.LocationFormat(this.form.region));
      formData2.append("division", this.LocationFormat(this.form.division));
      formData2.append("council", this.LocationFormat(this.form.council));
      formData2.append("neigborhood", this.LocationFormat(this.form.neigborhood));
      formData2.append("city", this.form.city);

      formData2.append("address", this.form.address);

      formData2.append("lat", this.form.lat);
      formData2.append("lng", this.form.lng);

      

      formData2.append("name", this.form.name);
      formData2.append("categoryId",this.stringArray1(this.multiselecvalue) );
      formData2.append("subCategoryId",this.stringArray(this.filterselectvalue)) ;
       formData2.append("filterId",this.ArrayString(this.select_filterss)) ;
      formData2.append("keywords", this.ArrayString(this.form.keywords));
      formData2.append("primary_phone", this.form.phone1); 
      formData2.append("secondary_phone", this.form.phone2);
      formData2.append("email", this.form.email);
      formData2.append("website", this.form.website);
      formData2.append("about_business", this.form.about_business);
      
      console.log("---", formData2);
      this.axios
        .post("business/update/" + this.url, formData2, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);

          this.flashMessage.show({
            status: "success",
            blockClass: "custom-block-class",
            message: this.$t("businessowner.Business_Profile_updated"),
          });
          this.businessInfos();
          this.$bvModal.hide("bv-edit-about");
        })
        .catch((err) => {
          console.log({ err: err });

          this.sendingB = false;

          if (err.response.status == 422) {
            console.log({ err: err });
            console.log(err.response.data.message);

            this.flashMessage.show({
              status: "error",

              message: err.response.data.message,
              blockClass: "custom-block-class",
            });
          } else {
            this.flashMessage.show({
              status: "error",

              message: this.$t("businessowner.Unable_to_update_Your_Business"),
              blockClass: "custom-block-class",
            });
            console.log({ err: err });
          }
        });
    },

    setcoordintes() {
      //  this.position.lat = this.$store.state.businessOwner.businessInfo.lat;
      this.position.lng = 10;

      // this.center={ lat:10, lng: 20 }
    },

    editBio() {
      this.edit1 = !this.edit1;
    },
    /**
     * Used to edit contact info
     * @return void
     */
    editContact() {
      this.$router.push({
        path: `/business_owner/${this.url}`,
        query: { currentTab: 1 },
      });
      // (this.form = this.business_intro), (this.edit2 = !this.edit2);
      console.log("editContact");
      // localStorage.setItem("ba-business-active-tab", 0);
    },

    /**
     *
     * @param idForm
     */
    //   validate(idForm) {
    //     this.$bvModal.hide(idForm);
    //   },
  },
  components: {
    VuePhoneNumberInput,
    MglMap,
    MglMarker,
    MglPopup,
    Multiselect,
    AutocompleteLocation
  },

  computed: {

     scategories() {
      return this.$store.state.auth.subcategories;
    },

      pcategories() {
      return this.$store.state.auth.categories;
    },
     selectedcategories: function() {
       let selectedUsers = [];
      this.multiselecvalue.forEach((item) => {
        if(item.category_id){

          selectedUsers.push(item.category_id);
        }else {
           selectedUsers.push(item.id);
        }
      });
      return selectedUsers;
    },

    Region() {
      let region = [];
      this.$store.state.auth.region.map((dat) => {
        region.push({
          item: dat.id,
          name: dat.name,
        });
      });
      return region;
    },

    getCat() {
      let categories = [];
      this.$store.state.auth.categories.map((dat) => {
        categories.push({
          value: dat.id,
          text: dat.name,
        });
      });
      return categories;
    },
    business_intro() {
      return  JSON.parse(
                JSON.stringify(
                  this.$store.getters["businessOwner/getBusinessAbout"]
                ))
      //this.$store.state.businessOwner.businessInfo;
    },
  },

  beforeMount() {
    this.businessInfos();
  },
  mounted() {
    // this.form =  JSON.parse(
    //             JSON.stringify(
    //               this.$store.getters["businessOwner/getBusinessAbout"]
    //             ))
    // this.$store.state.businessOwner.businessInfo;
    this.editBusiness();
    this.getCountry();
    this.getCathegorie();
    this.setcoordintes();

    this.url = this.$route.params.id;
  },
};
</script>

<style scoped>
@import url("https://api.tiles.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css");
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
.icon-size {
  width: 24px;
  height: 24px;
}

.dialog-div {
  min-width: 200px;
}
.dialog-text {
  font-size: 15px;
  font-weight: bold;
}
</style>
