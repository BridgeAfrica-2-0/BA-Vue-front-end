<template>
  <b-container fluid>
    <b-container v-if="businessInfo != 0" class="bv-example-row">
      <!-- {{businessInfo}} -->

      <FlashMessage />

      <b-form>
        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Business Name"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <b-form-input
                id="bname"
                v-model="businessInfo.name"
                name="name"
                required
              ></b-form-input>
            </b-form-group>
          </b-container>
        </div>

        <!-- {{pcategories}} -->

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Category"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <multiselect
                v-model="multiselecvalue"
                @input="subcategories"
                tag-placeholder="Add this as new tag"
                placeholder="Search or add a tag"
                label="name"
                track-by="id"
                :options="pcategories"
                :multiple="true"
                :taggable="true"
                @tag="addTag"
              ></multiselect>
            </b-form-group>
          </b-container>
        </div>

        <!-- {{scategories}} -->

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Sub Category"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <multiselect
                v-model="filterselectvalue"
                tag-placeholder="Add this as new tag"
                placeholder="Search or add a tag"
                label="name"
                track-by="subcategory_id"
                :options="scategories"
                :multiple="true"
                :taggable="true"
                @tag="addFilter"
              ></multiselect>
            </b-form-group>
          </b-container>
        </div>

        <!-- {{filterselectvalue}} -->

        <label class="typo__label">Fiters</label>
        <div>
          <b-card no-body>
            <b-tabs pills card vertical>
              <b-tab
                :title="filters.name"
                v-for="filters in filterselectvalue"
                :key="filters.id"
                active
                ><b-card-text>
                  <!-- {{filters.filters}} -->
                  <b-form-group label="Filters" class="colorblack">
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

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Search Keywords"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <b-form-tags
                input-id="tags-basic"
                v-model="businessInfo.keywords"
                separator=" ,;"
                tag-variant="primary"
                :limit="limit"
                :tag-validator="validator"
                placeholder="Enter new keywords separated by space, comma or semicolon"
                no-add-on-enter
              ></b-form-tags>
            </b-form-group>
          </b-container>
        </div>
        
        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Phone 1"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            ><VuePhoneNumberInput v-model="businessInfo.phone" />
            </b-form-group>
          </b-container>
        </div>

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Phone 2"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            ><VuePhoneNumberInput v-model="businessInfo.secondary_phone" />
            </b-form-group>
          </b-container>
        </div>

        <!-- <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Language"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <b-form-select id="timezone" v-model="time_zone" name="language">
                <option value="" selected="" disabled="true"> Select Language </option>
                <option>English</option>
                <option>Hindi</option>
              </b-form-select>
            </b-form-group>
          </b-container>
        </div> -->

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Time zone"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <b-form-select
                id="timezone"
                v-model="businessInfo.timezone"
                :options="timezones"
                name="timezone"
                value-field="value"
                text-field="label"
              >
              </b-form-select>
            </b-form-group>
          </b-container>
        </div>

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="About"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <b-form-textarea
                id="about"
                v-model="businessInfo.about_business"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>
          </b-container>
        </div>


        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Website"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <b-form-input
                id="bname"
                name="website"
                v-if="businessForm_website != 'website N/V'"
                v-model="businessInfo.website"
                placeholder="http://wwww.example.com"
                required
              ></b-form-input>
              <b-form-checkbox
                class="a-text text"
                id=""
                value="website N/V"
                name="nowebsite"
                unchecked-value="website A/V"
                v-model="businessForm_website"
              >
                This Business does not have a Website
              </b-form-checkbox>
            </b-form-group>
          </b-container>
        </div>

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Email"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <b-form-input
                id="bname"
                name="email"
                v-if="businessForm_email != 'email N/V'"
                v-model="businessInfo.email"
                required
              ></b-form-input>
              <b-form-checkbox
                class="a-text text"
                id=""
                value="email N/V"
                name="noemail"
                unchecked-value="email A/V"
                v-model="businessForm_email"
              >
                This Business does not have a Email
              </b-form-checkbox>
            </b-form-group>
          </b-container>
        </div>

        <!-- {{countries}} -->

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Country"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <multiselect
                v-model="country"
                @input="Region"
                placeholder="Search "
                label="name"
                track-by="id"
                :options="countries"
                :multiple="true"
              ></multiselect>
            </b-form-group>
          </b-container>
        </div>

        <!-- {{regions}} -->

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Region"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <multiselect
                v-model="region"
                @input="Division"
                placeholder="Search"
                label="name"
                track-by="id"
                :options="regions"
                :multiple="true"
              ></multiselect>
            </b-form-group>
          </b-container>
        </div>

        <!-- {{divisions}} -->

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Division"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <multiselect
                v-model="division"
                @input="Municipality"
                placeholder="Search"
                label="name"
                track-by="id"
                :options="divisions"
                :multiple="true"
              ></multiselect>
            </b-form-group>
          </b-container>
        </div>

        <!-- {{municipalities}} -->

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Municipality"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <multiselect
                v-model="municipality"
                @input="Locality"
                placeholder="Search"
                label="name"
                track-by="id"
                :options="municipalities"
                :multiple="true"
              ></multiselect>
            </b-form-group>
          </b-container>
        </div>

        <!-- {{localities}} -->

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Neighbourhood"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <multiselect
                v-model="locality"
                placeholder="Search"
                label="name"
                track-by="id"
                :options="localities"
                :multiple="true"
              ></multiselect>
            </b-form-group>
          </b-container>
        </div>

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Three Location Description"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <b-form-textarea
                id="bname"
                name="locationdesc"
                v-model="businessInfo.location_description"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>
          </b-container>
        </div>

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Address"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <b-form-checkbox
                id=""
                class="a-text text"
                name="Aaddress"
                v-model="Aaddress"
                value="address A/V"
              >
                This Business has an address</b-form-checkbox
              >

              <b-container v-if="Aaddress">
                <b-row class="text">
                  <b-col>
                    <p>Street Address</p>
                    <b-form-input
                      name=""
                      v-model="businessInfo.Street"
                    ></b-form-input>
                  </b-col>
                  <b-col>
                    <p>City</p>
                    <b-form-input
                      name=""
                      v-model="businessInfo.city"
                    ></b-form-input
                  ></b-col>
                  <b-col>
                    <p>Postal Code</p>
                    <b-form-input
                      name=""
                      v-model="businessInfo.PostalCode"
                    ></b-form-input
                  ></b-col>
                </b-row>
                <br />
                <div>
                  <b-embed
                    type="iframe"
                    aspect="16by9"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                    allowfullscreen
                  ></b-embed>
                </div>
              </b-container>
            </b-form-group>
          </b-container>
        </div>

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Business Hours"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <b-form-group class="mb-0">
                <b-form-checkbox
                  v-model="openHour"
                  name="checkbox-1"
                  switch
                  value="1"
                  @change="setOpenHours('null', 'null', 'null')"
                >
                  {{ openHour ? "Always Open": "Open for selected hours" }}
                </b-form-checkbox>
                <br />
                <b-container v-if="!openHour">
                  <div v-for="openHours in businessInfo.business_open_hours" :key="openHours.id">
                    <b-row>
                      <b-col cols="2"
                        ><b-form-checkbox
                          id=""
                          class="a-text text"
                          name=""
                          v-model="openDaysStatus"
                          value="Mon_disabled"
                          unchecked-value="0"
                        >
                          {{openHours.day}}</b-form-checkbox
                        ></b-col
                      >

                      <b-col>
                        <b-form-input
                          name=""
                          type="time"
                          @change="setOpenHours(openHours.day, openHours.opening_time, openHours.closing_time)"
                          v-model="openHours.opening_time"
                        ></b-form-input>
                      </b-col>- -<b-col
                        ><b-form-input
                          name=""
                          type="time"
                          @change="setOpenHours(openHours.day, openHours.opening_time, openHours.closing_time)"
                          v-model="openHours.closing_time"
                        ></b-form-input
                      ></b-col>
                    </b-row>
                    <br />
                  </div>

                </b-container>
              </b-form-group>
            </b-form-group>
          </b-container>
        </div>

        <div class="b-bottomm">
          <b-button variant="primary" class="a-button-l" @click="updateInfo(businessInfo)"
          ><b-spinner v-if="Lspinner" small type="grow"></b-spinner>Save Changes</b-button>
          <br />
          <br />
        </div>
      </b-form>

        <FlashMessage />
    </b-container>
    <b-container v-else>
      <div class="text-center">
        <b-spinner variant="primary" style="width: 3rem; height: 3rem;" label="Large Spinner Text Centered"></b-spinner>
      </div>
    </b-container>
  </b-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import Multiselect from "vue-multiselect";
export default {
  name: "info",
  mixins: [validationMixin],

  components: {
    Multiselect,
    VuePhoneNumberInput,
  },

  data() {
    return {
      url: null,

      limit: 20,
      Lspinner: false,

      editbiz: "",
      multiselecvalue: [],
      filterselectvalue: [],
      select_filterss: [],
      country: [],
      region: [],
      division: [],
      municipality: [],
      locality: [],

      Aaddress: "",
      openHour: "",
      openDaysStatus: [],
      Odays: {
        mS: "",
        mE: "",
        tuS: "",
        tuE: "",
        wS: "",
        wE: "",
        thS: "",
        thE: "",
        fS: "",
        fE: "",
        saS: "",
        saE: "",
        suS: "",
        suE: "",
      },
      businessForm_email: "",
      businessForm_website: "",
      openHours: {
        mondayStart: "",
        mondayEnd: "",
        tuesdayStart: "",
        tuesdayEnd: "",
        wednesdayStart: "",
        wednesdayEnd: "",
        thursdayStart: "",
        thursdayEnd: "",
        fridayStart: "",
        fridayEnd: "",
        satudayStart: "",
        satudayEnd: "",
        sundayStart: "",
        sundayEnd: "",
      },
      businessForm: {
 
        openHours: {
          mondayStart: "",
          mondayEnd: "",
          tuesdayStart: "",
          tuesdayEnd: "",
          wednesdayStart: "",
          wednesdayEnd: "",
          thursdayStart: "",
          thursdayEnd: "",
          fridayStart: "",
          fridayEnd: "",
          satudayStart: "",
          satudayEnd: "",
          sundayStart: "",
          sundayEnd: "",
        },
      },

      timezones: [
        { label: "(GMT-12:00) International Date Line West", value: "-12" },
        { label: "(GMT-11:00) Midway Island, Samoa", value: "-11" },
        { label: "(GMT-10:00) Hawaii", value: "-10" },
        { label: "(GMT-09:00) Alaska", value: "-9" },
        { label: "(GMT-08:00) Pacific Time (US & Canada)", value: "-8" },
        { label: "(GMT-08:00) Tijuana, Baja California", value: "-8" },
        { label: "(GMT-07:00) Arizona", value: "-7" },
        { label: "(GMT-07:00) Chihuahua, La Paz, Mazatlan", value: "-7" },
        { label: "(GMT-07:00) Mountain Time (US & Canada)", value: "-7" },
        { label: "(GMT-06:00) Central America", value: "-6" },
        { label: "(GMT-06:00) Central Time (US & Canada)", value: "-6" },
        { label: "(GMT-05:00) Bogota, Lima, Quito, Rio Branco", value: "-5" },
        { label: "(GMT-05:00) Eastern Time (US & Canada)", value: "-5" },
        { label: "(GMT-05:00) Indiana (East)", value: "-5" },
        { label: "(GMT-04:00) Atlantic Time (Canada)", value: "-4" },
        { label: "(GMT-04:00) Caracas, La Paz", value: "-4" },
        { label: "(GMT-04:00) Manaus", value: "-4" },
        { label: "(GMT-04:00) Santiago", value: "-4" },
        { label: "(GMT-03:30) Newfoundland", value: "-3.5" },
        { label: "(GMT-03:00) Brasilia", value: "-3" },
        { label: "(GMT-03:00) Buenos Aires, Georgetown", value: "-3" },
        { label: "(GMT-03:00) Greenland", value: "-3" },
        { label: "(GMT-03:00) Montevideo", value: "-3" },
        { label: "(GMT-02:00) Mid-Atlantic", value: "-2" },
        { label: "(GMT-01:00) Cape Verde Is.", value: "-1" },
        { label: "(GMT-01:00) Azores", value: "-1" },
        { label: "(GMT+00:00) Casablanca, Monrovia, Reykjavik", value: "0" },
        { label: "(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London", value: "0" },
        { label: "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna", value: "1" },
        { label: "(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague", value: "1" },
        { label: "(GMT+01:00) Brussels, Copenhagen, Madrid, Paris", value: "1" },
        { label: "(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb", value: "1" },
        { label: "(GMT+01:00) West Central Africa", value: "1" },
        { label: "(GMT+02:00) Amman", value: "2" },
        { label: "(GMT+02:00) Athens, Bucharest, Istanbul", value: "2" },
        { label: "(GMT+02:00) Beirut", value: "2" },
        { label: "(GMT+02:00) Cairo", value: "2" },
        { label: "(GMT+02:00) Harare, Pretoria", value: "2" },
        { label: "(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius", value: "2" },
        { label: "(GMT+02:00) Jerusalem", value: "2" },
        { label: "(GMT+02:00) Minsk", value: "2" },
        { label: "(GMT+02:00) Windhoek", value: "2" },
        { label: "(GMT+03:00) Kuwait, Riyadh, Baghdad", value: "3" },
        { label: "(GMT+03:00) Moscow, St. Petersburg, Volgograd", value: "3" },
        { label: "(GMT+03:00) Nairobi", value: "3" },
        { label: "(GMT+03:00) Tbilisi", value: "3" },
        { label: "(GMT+03:30) Tehran", value: "3.5" },
        { label: "(GMT+04:00) Abu Dhabi, Muscat", value: "4" },
        { label: "(GMT+04:00) Baku", value: "4" },
        { label: "(GMT+04:00) Yerevan", value: "4" },
        { label: "(GMT+04:30) Kabul", value: "4.5" },
        { label: "(GMT+05:00) Yekaterinburg", value: "5" },
        { label: "(GMT+05:00) Islamabad, Karachi, Tashkent", value: "5" },
        { label: "(GMT+05:30) Sri Jayawardenapura", value: "5.5" },
        { label: "(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi", value: "5.5" },
        { label: "(GMT+05:45) Kathmandu", value: "5.75" },
        { label: "(GMT+06:00) Almaty, Novosibirsk", value: "6" },
        { label: "(GMT+06:00) Astana, Dhaka", value: "6" },
        { label: "(GMT+06:30) Yangon (Rangoon)", value: "6.5" },
        { label: "(GMT+07:00) Bangkok, Hanoi, Jakarta", value: "7" },
        { label: "(GMT+07:00) Krasnoyarsk", value: "7" },
        {
          label: "(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
          value: "8",
        },
        { label: "(GMT+08:00) Kuala Lumpur, Singapore", value: "8" },
        { label: "(GMT+08:00) Irkutsk, Ulaan Bataar", value: "8" },
        { label: "(GMT+08:00) Perth", value: "8" },
        { label: "(GMT+08:00) Taipei", value: "8" },
      ],
      options: [
        { text: " Person", value: "person" },
        { text: " Business ", value: "business" },
      ],
      OpenHours: [
        { name: "Always Open", value: "1" },
        { name: "Open for selected hours", value: "0" },
      ],
      multiselec: [
        { name: "Vue.js", code: "vu" },
        { name: "Javascript", code: "js" },
        { name: "Open Source", code: "os" },
      ],
   

      
    };
  },

  computed: {
    businessInfo() {
      return this.$store.state.businessSettingInfo.businessInfo;
    },
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
        selectedUsers.push(item.id);
      });
      return selectedUsers;
    },
    selectedsubcategories: function() {
      let sub_cat = [];
      this.filterselectvalue.forEach((item) => {
        sub_cat.push(item.sub_cat_id);
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
        sub_cat.push(item.id);
      });
      return sub_cat;
    },
    selecteddivision: function() {
      let sub_cat = [];
      this.division.forEach((item) => {
        sub_cat.push(item.id);
      });
      return sub_cat;
    },
    selectedmunicipality: function() {
      let sub_cat = [];
      this.municipality.forEach((item) => {
        sub_cat.push(item.id);
      });
      return sub_cat;
    },
    selectedlocality: function() {
      let sub_cat = [];
      this.locality.forEach((item) => {
        sub_cat.push(item.id);
      });
      return sub_cat;
    },
  },

  mounted(){
    this.url = this.$route.params.id;
    this.getBusinessInfo();
    this.editBusiness();
    this.categories();
    this.Country();
  },

  methods: {
    validator(tag) {
      return tag.length > 2 && tag.length < 20
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        id: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.multiselec.push(tag);
      this.multiselecvalue.push(tag);
    },
    addFilter(newTag) {
      const tag = {
        name: newTag,
        id: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.multiselec.push(tag);
      this.filterselectvalue.push(tag);
    },

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
    subcategories() {
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
    Division() {
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
    

    setOpenHours(day, startTime, endDay) {
      console.log(day);
      console.log(startTime);
      console.log(endDay);
      switch(day){
        case "Monday":
          console.log("monday");
          this.businessInfo['monday'] = day;
          this.businessInfo['mon_start'] = startTime;
          this.businessInfo['mon_end'] = endDay;
          break;
        case "Tuesday":
          console.log("Tues_disabled");
          this.businessInfo['tuesday'] = day;
          this.businessInfo['tues_start'] = startTime;
          this.businessInfo['tues_end'] = endDay;
          break;
        case "Wednesday":
          console.log("Wed_disabled");
          this.businessInfo['wednesday'] = day;
          this.businessInfo['wed_start'] = startTime;
          this.businessInfo['wed_end'] = endDay;
          break;
        case "Thursday":
          console.log("Thursday");
          this.businessInfo['thursday'] = day;
          this.businessInfo['thurs_start'] = startTime;
          this.businessInfo['thurs_end'] = endDay;
          break;
        case "Friday":
          console.log("Friday");
          this.businessInfo['friday'] = day;
          this.businessInfo['fri_start'] = startTime;
          this.businessInfo['fri_end'] = endDay;
          break;
        case "Saturday":
          console.log("Saturday");
          this.businessInfo['saturday'] = day;
          this.businessInfo['sat_start'] = startTime;
          this.businessInfo['sat_end'] = endDay;
          break;
        case "Sunday":
          console.log("Sunday");
          this.businessInfo['sunday'] = day;
          this.businessInfo['sun_start'] = startTime;
          this.businessInfo['sun_end'] = endDay;
          break;
        default:
          console.log("try looking up for a hint");
          if(this.openHour){
            this.businessInfo['monday'] = "monday";
            this.businessInfo['mon_start'] = startTime;
            this.businessInfo['mon_end'] = endDay;
            this.businessInfo['tuesday'] = "tuesday";
            this.businessInfo['tues_start'] = startTime;
            this.businessInfo['tues_end'] = endDay;
            this.businessInfo['wednesday'] = "wednesday";
            this.businessInfo['wed_start'] = startTime;
            this.businessInfo['wed_end'] = endDay;
            this.businessInfo['thursday'] = "thursday";
            this.businessInfo['thurs_start'] = startTime;
            this.businessInfo['thurs_end'] = endDay;
            this.businessInfo['friday'] = "friday";
            this.businessInfo['fri_start'] = startTime;
            this.businessInfo['fri_end'] = endDay;
            this.businessInfo['saturday'] = "saturday";
            this.businessInfo['sat_start'] = startTime;
            this.businessInfo['sat_end'] = endDay;
            this.businessInfo['sunday'] = "sunday";
            this.businessInfo['sun_start'] = startTime;
            this.businessInfo['sun_end'] = endDay;
          }
      }
      // return this.state === 'disabled'
    },

    getBusinessInfo() {
      console.log('getBusinessInfo function trigard');
    this.$store
      .dispatch("businessSettingInfo/getBusinessInfo", this.url)
      .then(() => {
        console.log('business data available');
      })
      .catch(err => {
        console.log({ err: err });
      });
    },
    editBusiness(){
      console.log("editBusiness");
      this.axios.get("business/edit/"+this.url).then(({ data }) => {
        console.log(data);
        this.editbiz=data.data;
        this.setEditData(data.data)
      }).catch((err) => {
          console.log({ err: err });
        });
    },

     setEditData(business){
      console.log("setting editBusiness data");
      console.log(business);
      this.multiselecvalue=business.category;
      this.filterselectvalue=business.subCategory;
      this.select_filterss=business.filter;
      this.country=business.country;
      this.region=business.region;
      this.division=business.division
      this.municipality=business.council
      this.locality=business.neigborhood;

      this.subcategories();
      this.Region();
      this.Division();
      this.Municipality();
      this.Locality();
    },

    updateInfo: function (businessInfo) {
      this.Lspinner = true;
      console.log("updateInfo", businessInfo)

      let formData = new FormData();
      formData.append('name', this.businessInfo.name);
      formData.append('categoryId', this.selectedcategories);
      formData.append('subCategoryId', this.selectedsubcategories);
      formData.append('filterId', this.select_filterss);

      formData.append("country", this.selectedcountry);
      formData.append("region", this.selectedregion);
      formData.append("division", this.selecteddivision);
      formData.append("council", this.selectedmunicipality);

      formData.append('keywords_alert', String(businessInfo.keywords));
      console.log(String(this.businessInfo.keywords));
      formData.append('phone', businessInfo.phone);
      formData.append('secondary_phone', businessInfo.secondary_phone);
      formData.append('timezone', businessInfo.timezone);
      formData.append('about_business', businessInfo.about_business);
      formData.append('website', businessInfo.website);
      formData.append('email', businessInfo.email);
      formData.append('location_description', businessInfo.location_description);
      formData.append('Street', businessInfo.Street);
      formData.append('city', businessInfo.city);
      formData.append('PostalCode', businessInfo.PostalCode);

      formData.append('monday', businessInfo.monday);
        formData.append('mon_start', businessInfo.mon_start);
        formData.append('mon_end', businessInfo.mon_end);
      formData.append('tuesday', businessInfo.tuesday);
        formData.append('tues_start', businessInfo.tues_start);
        formData.append('tues_end', businessInfo.tues_end);
      formData.append('wednesday', businessInfo.wednesday);
        formData.append('wed_start', businessInfo.wed_start);
        formData.append('wed_end', businessInfo.wed_end);
      formData.append('thursday', businessInfo.thursday);
        formData.append('thurs_start', businessInfo.thurs_start);
        formData.append('thurs_end', businessInfo.thurs_end);
      formData.append('friday', businessInfo.friday);
        formData.append('fri_start', businessInfo.fri_start);
        formData.append('fri_end', businessInfo.fri_end);
      formData.append('saturday', businessInfo.saturday);
        formData.append('sat_start', businessInfo.sat_start);
        formData.append('sat_end', businessInfo.sat_end);
      formData.append('sunday', businessInfo.sunday);
        formData.append('sun_start', businessInfo.sun_start);
        formData.append('sun_end', businessInfo.sun_end);

      console.log(formData);
      this.$store
        .dispatch("businessSettingInfo/UpdateInfomation", {
          path: "business/update/"+this.url,
          formData: formData,
        })
        .then(({ data }) => {
        console.log(data);
        this.getBusinessInfo();
        console.log(this.business_form);
        this.Lspinner = false;
        this.flashMessage.show({
          status: "success",
          message: "Changes Made Successfuly"
        });  
      })
      .catch(err => {
        console.log({ err: err });
        this.Lspinner = false;
        this.flashMessage.show({
          status: "error",
          message: "Unable To Make Changes"
        });
      });
    },

  },
};
</script>

<style scoped>
.bv-example-row {
  font-size: 12px;
}
.b-bottom {
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 10px;
}
.tabs {
  width: 100%;
}
.i-width {
  width: 40%;
}
.b-bottomm {
  padding-bottom: 10px;
}
.f-left {
  float: left;
}
.a-button-l {
  align-content: right;
  float: right;
}
.a-text {
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
}
.a-align {
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
}
.settings {
  margin-left: 90%;
  position: relative;
  top: 40px;
}
@media only screen and (max-width: 768px) {
  .settings {
    top: -5px;
    left: -20px;
  }
}
</style>