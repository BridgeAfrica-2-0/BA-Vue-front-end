<template>
  <div class="welcome" style="overflow-x: hidden">
    <md-progress-bar md-mode="indeterminate" v-if="sendingP" />

    <md-progress-bar md-mode="indeterminate" v-if="sendingB" />

    <FlashMessage />







    <div
      v-if="first_page == 'true'"
      class="container border mt-5 modal-lg p-welcome"     
      id="modal-3"
      ref="modal-3"
    >
      <div>

        

   








        <h4 class="text-center username f-30">
          Hello <b> {{ username }} </b> let's get started
        </h4>
        <br />
        <br />

        <p class="text f-16">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing
        </p>

        <b-form-group
          label="Use BridgeAfirca.com as a"
          label-class=" f-20 text-center"
        >
          <b-form-radio-group
            id="radio-group-1"
            v-model="useas"
            :options="options"
            label-class=" f-20"
            name="radio-options"
            class="f-20 text-center"
          ></b-form-radio-group>
        </b-form-group>
        <div class="text-center">
          <b-button variant="outline-primary" @click="choseModal">
            Continue <b-icon icon="arrow-right"> </b-icon>
          </b-button>
        </div>
      </div>
    </div>

    <div class="modal-backdro">
      <div
        v-if="selectedusecase == 'person'"
        class="container border mt-4 modal-lg"
        ref="modal-1"
        id="modal-1"
      >
        <div>
          <form-wizard
            @on-complete="onComplete"
            @on-loading="setLoading"
            color="#e75c18"
          >
            <input
              id="profile2"
              accept="video/mpeg,video/mp4,image/*"
              type="file"
              @change="onFileChange"
              hidden
            />

            <tab-content
              title=" Complete Profile "
              :before-change="updateUserProfile"
            >
              <div class="form-card">
                <div class="row">
                  <div class="col-md-6">
                    <div id="preview">
                      <img v-if="img_url" :src="img_url" />
                    </div>
                    <br />
                    <div class="text-center">
                      <b-button
                        v-if="img_url"
                        @click="chooseProfile2()"
                        variant="primary"
                        class="mt-3 text-center"
                      >
                        change Image
                      </b-button>
                    </div>

                    <div
                      class="image-upload-wrap"
                      v-if="!img_url"
                      @click="chooseProfile2()"
                    >
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#createalbumModal"
                      >
                        <div class="drag-text">
                          <i class="fa fa-plus"> </i>
                          <h3 class="username">Add Profile Photo</h3>
                        </div>
                      </a>
                      <div></div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group" label-class="username">
                      <label for="username" class="username"> DOB :</label
                      ><br />
                      <input
                        type="date"
                        name="dob"
                        id="dob"
                        v-model="dob"
                        placeholder="Busness Name"
                        class="form-control text"
                      />
                    </div>

                    <div class="form-group">
                      <label for="alias" class="username">Gender:</label><br />
                      <select
                        id="category"
                        v-model="gender"
                        class="form-control text"
                        label-class="text"
                      >
                        <option value="" selected="" disabled="">
                          Select Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">other</option>
                      </select>
                    </div>

                    <div class="form-group">
                      <label for="country" class="username"> Country :</label
                      ><br />

                      <country-select
                        v-model="country"
                        :country="country"
                        topCountry="CM"
                        class="form-control text"
                      />
                    </div>

                    <div class="form-group">
                      <label for="country" class="username"> Region :</label
                      ><br />

                      <region-select
                        v-model="region"
                        :country="country"
                        :region="region"
                        class="form-control text"
                      />
                    </div>

                    <div class="form-group">
                      <label for="city" class="username"> City :</label><br />
                      <input
                        type="text"
                        name="alias"
                        id="City"
                        v-model="city"
                        placeholder="city"
                        class="form-control text"
                      />
                    </div>

                    <div class="form-group">
                      <label for="Neighbor" class="username"> Neighbor :</label
                      ><br />
                      <input
                        type="text"
                        name="alias"
                        v-model="Neighbor"
                        id="Neighbor"
                        placeholder="Neighbor"
                        class="form-control text"
                      />
                    </div>

                    <gmap-autocomplete
                      @place_changed="initMarker"
                      class="form-control mb-2"
                    >
                    </gmap-autocomplete>

                    <gmap-map
                      :zoom="14"
                      :center="center"
                      style="width: 100%; height: 200px"
                    >
                      <gmap-marker
                        :key="index"
                        v-for="(m, index) in locationMarkers"
                        :position="m.position"
                        @click="center = m.position"
                      ></gmap-marker>
                    </gmap-map>
                  </div>

                  <div>
                    <div></div>
                    <br />
                  </div>
                </div>
              </div>
            </tab-content>

            <tab-content title="Follow Businesses">
              <div class="div-h">
                <Business />
              </div>
            </tab-content>

            <tab-content title="Follow People">
              <div class="div-h">
                <People />
              </div>
            </tab-content>

            <tab-content title="Tutorial">
              <div class="div-h">
                <Tutorial />
              </div>
            </tab-content>

            <div class="loader" v-if="loadingWizard"></div>
          </form-wizard>
        </div>
      </div>
    </div>

    <div
      v-if="selectedusecase == 'business'"
      class="container border mt-4 modal-lg"
      ref="modal-2"
      id="modal-2"
    >
      <form novalidate>
        <input
          id="profile2"
          accept="video/mpeg,video/mp4,image/*"
          type="file"
          @change="onFileChange"
          hidden
        />

        <div>
          <form-wizard @on-complete="onComplete">
            <tab-content
              title=" Complete Profile "
              :before-change="updateUserProfile"
            >
              <div class="form-card">
                <div class="row">
                  <div class="col-md-6">
                    <div id="preview">
                      <img v-if="img_url" :src="img_url" />
                    </div>
                    <br />
                    <div class="text-center">
                      <b-button
                        v-if="img_url"
                        @click="chooseProfile2()"
                        variant="primary"
                        class="mt-3 text-center"
                      >
                        change Image
                      </b-button>
                    </div>

                    <div
                      class="image-upload-wrap"
                      v-if="!img_url"
                      @click="chooseProfile2()"
                    >
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#createalbumModal"
                      >
                        <div class="drag-text">
                          <i class="fa fa-plus"> </i>
                          <h3 class="username">Add Profile Photo</h3>
                        </div>
                      </a>
                      <div></div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group" label-class="username">
                      <label for="username" class="username"> DOB :</label
                      ><br />
                      <input
                        type="date"
                        name="dob"
                        id="dob"
                        v-model="dob"
                        placeholder="Busness Name"
                        class="form-control text"
                      />
                    </div>

                    <div class="form-group">
                      <label for="alias" class="username">Gender:</label><br />
                      <select
                        id="category"
                        v-model="gender"
                        class="form-control text"
                        label-class="text"
                      >
                        <option value="" selected="" disabled="">
                          Select Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">other</option>
                      </select>
                    </div>

                    <div class="form-group">
                      <label for="country" class="username"> Country :</label
                      ><br />

                      <country-select
                        v-model="country"
                        :country="country"
                        topCountry="CM"
                        class="form-control text"
                      />
                    </div>

                    <div class="form-group">
                      <label for="country" class="username"> Region :</label
                      ><br />

                      <region-select
                        v-model="region"
                        :country="country"
                        :region="region"
                        class="form-control text"
                      />
                    </div>

                    <div class="form-group">
                      <label for="city" class="username"> City :</label><br />
                      <input
                        type="text"
                        name="alias"
                        id="City"
                        v-model="city"
                        placeholder="city"
                        class="form-control text"
                      />
                    </div>

                    <div class="form-group">
                      <label for="Neighbor" class="username"> Neighbor :</label
                      ><br />
                      <input
                        type="text"
                        name="alias"
                        v-model="Neighbor"
                        id="Neighbor"
                        placeholder="Neighbor"
                        class="form-control text"
                      />
                    </div>

                    <div class="form-group">
                      <label for="Neighbor" class="username"> Adress :</label>

                      <gmap-autocomplete
                        @place_changed="initMarker"
                        class="form-control"
                      >
                      </gmap-autocomplete>
                    </div>

                    <gmap-map
                      :zoom="14"
                      :center="center"
                      style="width: 100%; height: 200px"
                    >
                      <gmap-marker
                        :key="index"
                        v-for="(m, index) in locationMarkers"
                        :position="m.position"
                        @click="center = m.position"
                      ></gmap-marker>
                    </gmap-map>
                  </div>
                </div>
              </div>
            </tab-content>

            <tab-content
              title="Business Indentity"
              :before-change="validateBusiness"
            >
              <div class="form-card">
                <div class="row">
                  <div class="col-md-6">
                    <input
                      id="logo"
                      type="file"
                      @change="onLogoChange"
                      hidden
                    />

                    <div id="preview">
                      <img v-if="logoimg_url" :src="logoimg_url" />
                    </div>
                    <br />
                    <div class="text-center">
                      <b-button
                        v-if="logoimg_url"
                        @click="chooselogo()"
                        variant="primary"
                        class="mt-3 text-center"
                      >
                        change Image
                      </b-button>
                    </div>

                    <div
                      class="image-upload-wrap"
                      v-if="!logoimg_url"
                      @click="chooselogo()"
                    >
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#createalbumModal"
                      >
                        <div class="drag-text">
                          <i class="fa fa-plus"> </i>
                          <h3 class="username">Business Logo</h3>
                        </div>
                      </a>
                      <div></div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <b-form-group
                      id="business_name"
                      label="Business Name"
                      label-for="business_name"
                    >
                      <b-form-input
                        id="business_name"
                        name="business_name"
                        v-model="form.business_name"
                        :state="validateState('business_name')"
                        aria-describedby="business_name-feedback"
                      ></b-form-input>

                      <b-form-invalid-feedback id="business_name-feedback"
                        >Business Name Is Required.</b-form-invalid-feedback
                      >
                    </b-form-group>

                    <div></div>

                  

                    <div class="form-group">
                      <label for="country" class="username"> Country :</label
                      ><br />

                      <country-select
                        v-model="country"
                        :country="country"
                        topCountry="CM"
                        class="form-control text"
                      />
                    </div>
                  </div>
                </div>

















                


                  

   <div>
  <label class="typo__label"> Category </label>
  <multiselect v-model="multiselecvalue"   @input="subcategories"  tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="id" :options="pcategories" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
  
</div>




   <div>
  <label class="typo__label"> Sub Category</label>
  <multiselect v-model="filterselectvalue"    tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="subcategory" track-by="sub_cat_id" :options="scategories" :multiple="true" :taggable="true" @tag="addFilter"></multiselect>
  
  </div>





 
  <label class="typo__label">Fiters</label>
 <div>
  <b-card no-body>
    <b-tabs pills card vertical>

      <b-tab :title="filters.subcategory"     v-for="filters in filterselectvalue" :key="filters.id" active><b-card-text>
        
            
            <b-form-group label="Filters">

      <b-form-checkbox-group
        id=""
        v-model="select_filterss"
      
        name="filters"
      >
        <b-form-checkbox  v-for="fil in filters.filters" :key="fil.id" :value="fil.id" > {{fil.name}} </b-form-checkbox>
       
       
      </b-form-checkbox-group>
    </b-form-group>



        
         </b-card-text></b-tab>

     
    </b-tabs>
  </b-card>   
</div>





                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="country" class="username"> Region :</label
                      ><br />

                      <region-select
                        v-model="region"
                        :country="country"
                        :region="region"
                        class="form-control text"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="city" class="username"> City :</label><br />
                      <input
                        type="text"
                        name="alias"
                        id="City"
                        v-model="city"
                        placeholder="city"
                        class="form-control text"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="Neighbor" class="username"> Neighbor :</label
                      ><br />
                      <input
                        type="text"
                        name="alias"
                        v-model="Neighbor"
                        id="Neighbor"
                        placeholder="Neighbor"
                        class="form-control text"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="alias" class="username">Language:</label
                      ><br />
                      <select
                        id="category"
                        class="form-control text"
                        name="language"
                        v-model="language"
                      >
                        <option value="" selected="" disabled="">
                          Select Language
                        </option>
                        <option>English</option>
                        <option>Hindi</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="username" class="username">TimeZone:</label
                      ><br />

                      <b-form-select
                        id="timezone"
                        v-model="time_zone"
                        :options="timezone"
                      ></b-form-select>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <span class="text mt-2"> No Choices </span>

                      <input
                        type="text"
                        name="business_keyword"
                        v-model="business_keyword"
                        id="alias"
                        placeholder="Enter  Keywords Alerts"
                        class="form-control text"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="username" class="username">About</label><br />
                      <textarea
                        type="textarea"
                        name="business_about"
                        v-model="about"
                        id="description"
                        placeholder="Brief description about your Busness"
                        class="form-control text"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label for="Neighbor" class="username"> Adress :</label>

                  <gmap-autocomplete
                    @place_changed="initMarker"
                    class="form-control"
                  >
                  </gmap-autocomplete>
                </div>

                <gmap-map
                  :zoom="14"
                  :center="center"
                  style="width: 100%; height: 200px"
                >
                  <gmap-marker
                    :key="index"
                    v-for="(m, index) in locationMarkers"
                    :position="m.position"
                    @click="center = m.position"
                  ></gmap-marker>
                </gmap-map>
              </div>
            </tab-content>

            <tab-content title="Follow Businesses">
              <div class="div-h">
                <Business />
              </div>
            </tab-content>

            <tab-content title="Follow People">
              <div class="div-h">
                <People />
              </div>
            </tab-content>

            <tab-content title="Tutorial">
              <div class="div-h">
                <Tutorial />
              </div>
            </tab-content>

            <div class="loader" v-if="loadingWizard"></div>
          </form-wizard>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import People from "@/components/dasboard/suggestedpeople";

import Business from "@/components/dasboard/welcomebusinesses";

import Tutorial from "@/components/dasboard/tutorial";

import axios from "axios";

import Multiselect from 'vue-multiselect';
import { validationMixin } from "vuelidate";

import { required, email, minLength } from "vuelidate/lib/validators";



export default {
  mixins: [validationMixin],
  data() {
    return {
      useas: "",

      selectedusecase: "",

      first_page: "true",
      country: "",
      region: "",
      username: this.$store.state.auth.user.user.name,
      img_url: null,
      select_filterss:[],
      sendingP: false,
      sendingB: false,
      profile_pic: "",
      dob: null,
      gender: null,
      city: null,
      Neighbor: null,
      step1: false,
      step2: false,
      logo_pic: "",
      logoimg_url: null,
      form: {
        business_name: null,
      },
      business_category: "Testing",
      business_keyword: null,
      time_zone: null,
      language: null,
      about: null,
      loadingWizard: false,

      center: {
        lat: 39.7837304,
        lng: -100.4458825,
      },
      locationMarkers: [],
      locPlaces: [],
      existingPlace: null,


      multiselecvalue: [ ], 
      filterselectvalue:[], 
      multiselec: [
        { name: 'Vue.js', code: 'vu' },
        { name: 'Javascript', code: 'js' },
        { name: 'Open Source', code: 'os' }
      ],

      timezone: [
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
        {
          label:
            "(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London",
          value: "0",
        },
        {
          label: "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
          value: "1",
        },
        {
          label:
            "(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
          value: "1",
        },
        {
          label: "(GMT+01:00) Brussels, Copenhagen, Madrid, Paris",
          value: "1",
        },
        { label: "(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb", value: "1" },
        { label: "(GMT+01:00) West Central Africa", value: "1" },
        { label: "(GMT+02:00) Amman", value: "2" },
        { label: "(GMT+02:00) Athens, Bucharest, Istanbul", value: "2" },
        { label: "(GMT+02:00) Beirut", value: "2" },
        { label: "(GMT+02:00) Cairo", value: "2" },
        { label: "(GMT+02:00) Harare, Pretoria", value: "2" },
        {
          label: "(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
          value: "2",
        },
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
        {
          label: "(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi",
          value: "5.5",
        },
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

      category: "",
     
    };
  },

  validations: {
    form: {
      business_name: {
        required,
      },

    //  business_category: {
     //   required,
    //  },
    },
  },

  methods: {

    addTag (newTag) {
      const tag = {
        name: newTag,
        id: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.multiselec.push(tag)
      this.multiselecvalue.push(tag)
    },




 addFilter (newTag) {
      const tag = {
        name: newTag,
        id: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.multiselec.push(tag)
      this.filterselectvalue.push(tag)
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







    setLoading: function (value) {
      this.loadingWizard = value;
    },

    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },

    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];
      if (field) {
        return {
          red: field.$invalid && field.$dirty,
        };
      }
    },

    validateBusiness() {
      return new Promise((resolve, reject) => {
        this.$v.form.$touch();
        if (this.$v.form.$anyError) {
          console.log("error error");
          return false;
        } else {
          console.log("no error error");

          this.sendingB = true;

          let formData2 = new FormData();
          formData2.append("logo_path", this.logo_pic);

          formData2.append("region", this.region);
          formData2.append("city", this.city);
          formData2.append("country", this.country);

          formData2.append("address", this.adress);

          formData2.append("neighbor", this.Neighbor);
          formData2.append("lat", this.center.lat);
          formData2.append("lng", this.center.lng);

          formData2.append("name", this.form.business_name);
          formData2.append("category", this.business_category);
          
          formData2.append("categoryId", this.selectedcategories);    
          formData2.append("subCategoryId", this.selectedsubcategories);
          formData2.append("filterId", this.select_filterss);
 
          formData2.append("keywords", this.business_keyword);
          formData2.append("timezone", this.time_zone);
          formData2.append("language", this.language);
          formData2.append("about_business", this.about);

          this.axios
            .post("business/create", formData2, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
              console.log(response);

              this.sendingB = false;

              this.flashMessage.show({
                status: "success",

                message: "Business Profile Created",
              });

              resolve(true);
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

                  message: "Unable to Create Your Business",
                  blockClass: "custom-block-class",
                });
                console.log({ err: err });
              }

              resolve(false);
            });
        }
      });
    },

    businessAround() {
      this.$store
        .dispatch("auth/businessAround")
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    peopleAround() {
      this.$store
        .dispatch("auth/peopleAround")
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    initMarker(loc) {
      this.existingPlace = loc;
      this.addLocationMarker();
    },

    addLocationMarker() {
      if (this.existingPlace) {
        const marker = {
          lat: this.existingPlace.geometry.location.lat(),
          lng: this.existingPlace.geometry.location.lng(),
        };

        this.locationMarkers.push({ position: marker });
        this.locPlaces.push(this.existingPlace);
        this.center = marker;
        this.existingPlace = null;
      }
    },

    locateGeoLocation: function () {
      navigator.geolocation.getCurrentPosition((res) => {
        this.center = {
          lat: res.coords.latitude,
          lng: res.coords.longitude,
        };
      });
    },
    createBusiness: function () {
      return new Promise((resolve, reject) => {
        this.sendingB = true;

        let formData2 = new FormData();
        formData2.append("logo_path", this.logo_pic);

        formData2.append("region", this.region);
        formData2.append("city", this.city);
        formData2.append("country", this.country);

        formData2.append("address", this.adress);

        formData2.append("neighbor", this.Neighbor);
        formData2.append("lat", this.center.lat);
        formData2.append("lng", this.center.lng);

        formData2.append("name", this.business_name);
        formData2.append("category", this.business_category);
        formData2.append("keywords", this.business_keyword);
        formData2.append("timezone", this.time_zone);
        formData2.append("language", this.language);
        formData2.append("about_business", this.about);

        this.axios
          .post("business/create", formData2, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            console.log(response);

            this.sendingB = false;

            this.flashMessage.show({
              status: "success",
              blockClass: "custom-block-class",
              message: "Business Profile Created",
            });

            resolve(true);
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

                message: "Unable to Create Your Business",
                blockClass: "custom-block-class",
              });
              console.log({ err: err });
            }

            resolve(false);
          });
      });
    },

    updateUserProfile: function () {
      return new Promise((resolve, reject) => {
        console.log("sending user data");

        this.sendingP = true;

        let formData = new FormData();
        formData.append("profile_picture", this.profile_pic);

        formData.append("dob", this.dob);
        formData.append("gender", this.gender);
        formData.append("city", this.city);
        formData.append("country", this.country);
        formData.append("region", this.region);
        formData.append("city", this.city);
        formData.append("neighbor", this.Neighbor);
        formData.append("lat", this.center.lat);
        formData.append("lng", this.center.lng);
        formData.append("address", this.region);

        this.axios
          .post("/complete/profile", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            console.log(response);

            this.step1 = true;
            this.sending = false;

            this.flashMessage.show({
              status: "success",

              message: "Profile Updated",

              blockClass: "custom-block-class",
            });

             this.peopleAround();

             this.businessAround();

            resolve(true);
          })
          .catch((err) => {
            console.log({ err: err });

            this.sending = false;
            this.step1 = false;

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
                title: "Registration Failed",
                message: "Unable to update your Information",
                blockClass: "custom-block-class",
              });
              console.log({ err: err });
            }

            resolve(false);
          });
      });
    },

    onComplete: function () {
      this.$store
        .dispatch("auth/completeWelcome")
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });

      this.$router.push("/dashboard");
    },

    chooseProfile1: function () {
      document.getElementById("profile1").click();
    },

    chooseProfile2: function () {
      document.getElementById("profile2").click();
    },

    onFileChange(e) {
      this.profile_pic = e.target.files[0];
      const file = e.target.files[0];
      this.img_url = URL.createObjectURL(file);
    },

    onLogoChange(e) {
      this.logo_pic = e.target.files[0];
      const logofile = e.target.files[0];
      this.logoimg_url = URL.createObjectURL(logofile);
    },

    chooselogo: function () {
      document.getElementById("logo").click();
    },

    showModal() {
      this.$refs["modal-3"].show();
    },
    hideModal() {
      this.$refs["modal-3"].hide();
    },

    choseModal() {
      if (this.useas == "") {
        this.useas = "person";
        this.selectedusecase = this.useas;
      } else {
        this.selectedusecase = this.useas;
      }

      this.first_page = false;
    },
  },

  mounted() {
    this.locateGeoLocation();

    
    this.categories() 



    //this.filters() 

    //this.Setcategoryfiters() 

   
  },

  components: {

    Multiselect,
    People,
    Business,
    Tutorial,
    
  },

  computed: {

     selectedcategories: function () {
                let selectedUsers = [];
                this.multiselecvalue.forEach((item) => {
                    selectedUsers.push(item.id);
                });
                return selectedUsers;
            }
            ,



             selectedsubcategories: function () {
                let sub_cat = [];
                this.filterselectvalue.forEach((item) => {
                    sub_cat.push(item.sub_cat_id);
                });
                return sub_cat;
            }
            ,


    pcategories(){
        return this.$store.state.auth.categories;
    },

    scategories(){
        return this.$store.state.auth.subcategories;
    },
    people_around() {
      return this.$store.state.auth.peopleAround;
    },
    business_around() {
      return this.$store.state.auth.businessAround;
    },
  },
};
import "vue-form-wizard/dist/vue-form-wizard.min.css";
</script>

<style>
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 100%;
  max-height: 500px;
}

.wizard-icon-container {
  background-color: black;
}

@media only screen and (max-width: 768px) {
  .vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle {
    position: relative;

    top: 20px;
    height: 1px;
  }

  .vue-form-wizard .wizard-icon-circle .wizard-icon-container {
    border-radius: 60%;
  }

  .stepTitle {
    font-size: 14px;
    line-height: 1;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .vue-form-wizard.md .wizard-icon-circle {
    width: 40px;
    height: 40px;
    font-size: 24px;
  }

  .vue-form-wizard.md .wizard-icon-circle {
    width: 30px;
    height: 30px;
    font-size: 18px;
  }

  .vue-form-wizard .wizard-card-footer {
    padding: 0 0px;
  }

  .vue-form-wizard .wizard-tab-content {
    min-height: 100px;
    padding: 0px 0px 0px;
  }
}

.wizard-header {
  display: none;
}

@media only screen and (min-width: 768px) {
  .text {
    font-size: 14px !important;
    font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
  }

  .username {
    font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
  }
}

@media only screen and (min-width: 768px) {
  .text {
    font-size: 14px !important;
    font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
  }

  .username {
    font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
  }
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1px;
}

.p-welcome {
  padding-top: 82px;
  padding-bottom: 20px;
}

.f-30 {
  font-size: 30px !important;
  font-family: Abril Fatface;
}

.f-20 {
  font-size: 18px !important;
  font-family: Abril Fatface;
}

.f-16 {
  font-size: 16px !important;
}

.loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loader {
  margin: 20px auto;
  font-size: 5px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #e74c3c;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.custom-block-class {
  position: absolute;
  z-index: 1;
}
</style>

<style>
.modal-body {
  padding: 1px;
}

.vue-form-wizard .wizard-icon-circle .wizard-icon-container {
  background-color: #e75c18 !important;
}

.vue-form-wizard.md .wizard-icon-circle {
  border-color: #e75c18 !important;
}
</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>  
