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
          {{ $t('welcome.Hello') }} <b> {{ username }} </b> {{ $t('welcome.letsget_started') }}
        </h4>
        <br />
        <br />

        <p class="text f-16">
          {{ $t("welcome.Welcome") }} {{ $t("welcome.and") }} {{ $t("welcome.thank_you") }} {{ $t("welcome.for_joining") }} BidgeAfrica.com !
          {{ $t("welcome.On_Bridge_Africa") }} {{ $t("welcome.you_can_quickly") }} {{ $t("welcome.create") }} {{ $t("welcome.your") }} {{ $t("welcome.website") }} {{ $t("welcome.less_than") }} 5 {{ $t("welcome.minutes") }};              
          {{$t("welcome.access_an_online_marketplace")}} {{$t("welcome.for")}} {{$t("welcome.buying")}} {{$t("welcome.and")}} {{$t("welcome.selling")}} ; 
          {{$t("welcome.search_for_and_compare")}} {{$t("welcome.product_prices")}} {{$t("welcome.through")}} {{$t("welcome.our")}} {{$t("welcome.localised_business_directly")}}, 
          {{$t("welcome.and")}} {{$t("welcome.engage")}} {{$t("welcome.with")}} {{$t("welcome.your")}} {{$t("welcome.community")}}. {{$t("welcome.Get_started")}}.
        </p>


        <b-form-group
          :label="$t('welcome.Use_BridgeAfirca_com_as_a')"
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
            {{ $t('welcome.Continue') }} <b-icon icon="arrow-right"> </b-icon>
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
              :title="$t('welcome.Complete_Profile') "
              :before-change="updateUserProfile"
            > 

              <div class="form-card">
                <div class="row">
                  <div class="col-md-6">
                    <div id="preview">
                      <img v-if="img_url" :src="img_url" />
                    </div>
                   
                    <div class="text-center">
                      <b-button
                        v-if="img_url"
                        @click="chooseProfile2()"
                        variant="primary"
                        class="mt-3 text-center"
                      >
                        {{ $t('welcome.change_Image') }}
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
                          <h3 class="username">{{ $t('welcome.Add_Profile_Photo') }}</h3>
                        </div>
                      </a>
                      <div></div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group" label-class="username">
                      <label for="username" class="username"> {{ $t('welcome.DOB') }} :</label
                      ><br />
                      <input
                        type="date"
                        name="dob"
                        id="dob"
                        v-model="dob"
                        :placeholder="$t('welcome.Busness_Name')"
                        class="form-control text"
                      />
                    </div>

                    <div class="form-group">
                      <label for="alias" class="username">{{ $t('welcome.Gender') }}:</label><br />
                      <select
                        id="category"
                        v-model="gender"
                        class="form-control text"
                        label-class="text"
                      >
                        <option value="" selected="" disabled="">
                          {{ $t('welcome.Select_Gender') }}
                        </option>
                        <option value="male">{{ $t('welcome.Male') }}</option>
                        <option value="female">{{ $t('welcome.Female') }}</option>
                        <option value="others">{{ $t('welcome.Other') }}</option>
                      </select>
                    </div>

                  
                 


                  
                    
                    <div class="form-group">
                      <label for="country" class="username"> {{ $t('welcome.Country') }} :</label
                      ><br />
                      <multiselect
                        v-model="country"
                        @input="PRegion"
                       :multiple="false"
                        :placeholder="$t('welcome.Search') "
                        label="name"
                        track-by="id"
                        :options="countries"
                      
                       
                      ></multiselect>
                    </div>








                
                    <div class="form-group">
                      <label for="country" class="username"> {{ $t('welcome.Region') }} :</label
                      ><br />

                      <multiselect
                        v-model="region"
                        @input="Division"
                        
                        :placeholder="$t('welcome.Search') "
                        label="name"
                        track-by="id"
                        :options="regions"
                        :multiple="false"
                      
                        
                      ></multiselect>
                    </div>
                 

                    <div class="form-group">
                      <label for="city" class="username"> {{ $t('welcome.City') }} :</label><br />
                      <input
                        type="text"
                        name="alias"
                        id="City"
                        v-model="city"
                        :placeholder="$t('welcome.City')"
                        class="form-control text"
                      />
                    </div>
<!-- 
                    <div class="form-group">
                      <label for="Neighbor" class="username"> {{ $t('welcome.Neighbor') }} :</label
                      ><br />
                      <input
                        type="text"
                        name="alias"
                        v-model="Neighbor"
                        id="Neighbor"
                        :placeholder="$t('welcome.Neighbor')"
                        class="form-control text"
                      />
                    </div> -->

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

            <tab-content :title="$t('welcome.Follow_Businesses')">
              <div class="div-h">
                <Business />
              </div>
            </tab-content>

            <tab-content :title="$t('welcome.Follow_People')">
              <div class="div-h">
                <People />
              </div>
            </tab-content>

            <tab-content :title="$t('welcome.Tutorial')">
              <div class="div-h">
                <Tutorial />
              </div>
            </tab-content>

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
              :title="$t('welcome.Complete_Profile') "
              :before-change="updateUserProfile"
            > 

              <div class="form-card">
                <div class="row">
                  <div class="col-md-6">
                    <div id="preview">
                      <img v-if="img_url" :src="img_url" />
                    </div>
                  
                    <div class="text-center">
                      <b-button
                        v-if="img_url"
                        @click="chooseProfile2()"
                        variant="primary"
                        class="mt-3 text-center"
                      >
                        {{ $t('welcome.change_Image') }}
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
                          <h3 class="username">{{ $t('welcome.Add_Profile_Photo') }}</h3>
                        </div>
                      </a>
                      <div></div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group" label-class="username">
                      <label for="username" class="username"> {{ $t('welcome.DOB') }} :</label
                      ><br />
                      <input
                        type="date"
                        name="dob"
                        id="dob"
                        v-model="dob"
                        :placeholder="$t('welcome.Busness_Name')"
                        class="form-control text"
                      />
                    </div>

                    <div class="form-group">
                      <label for="alias" class="username">{{ $t('welcome.Gender') }}:</label><br />
                      <select
                        id="category"
                        v-model="gender"
                        class="form-control text"
                        label-class="text"
                      >
                        <option value="" selected="" disabled="">
                          {{ $t('welcome.Select_Gender') }}
                        </option>
                        <option value="male">{{ $t('welcome.Male') }}</option>
                        <option value="female">{{ $t('welcome.Female') }}</option>
                        <option value="others">{{ $t('welcome.Other') }}</option>
                      </select>
                    </div>

                   

                    

                      
                    
                    <div class="form-group">
                      <label for="country" class="username"> {{ $t('welcome.Country') }} :</label
                      ><br />
                      <multiselect
                        v-model="country"
                        @input="PRegion"
                       :multiple="false"
                        :placeholder="$t('welcome.Search') "
                        label="name"
                        track-by="id"
                        :options="countries"
                      
                       
                      ></multiselect>
                    </div>








                
                    <div class="form-group">
                      <label for="country" class="username"> {{ $t('welcome.Region') }} :</label
                      ><br />

                      <multiselect
                        v-model="region"
                        @input="Division"
                        
                        :placeholder="$t('welcome.Search') "
                        label="name"
                        track-by="id"
                        :options="regions"
                        :multiple="false"
                      
                        
                      ></multiselect>
                    </div>





                    <div class="form-group">
                      <label for="city" class="username"> {{ $t('welcome.City') }} :</label><br />
                      <input
                        type="text"
                        name="alias"
                        id="City"
                        v-model="city"
                        :placeholder="$t('welcome.City')"
                        class="form-control text"
                      />
                    </div>

                    <!-- <div class="form-group">
                      <label for="Neighbor" class="username"> {{ $t('welcome.Neighbor') }} :</label
                      ><br />
                      <input
                        type="text"
                        name="alias"
                        v-model="Neighbor"
                        id="Neighbor"
                        :placeholder="$t('welcome.Neighbor')"
                        class="form-control text"
                      />
                    </div> -->

                    <div class="form-group">
                      <label for="Neighbor" class="username"> {{ $t('welcome.Adress') }} :</label>

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
              :title="$t('welcome.Business_Indentity')"
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
                  
                    <div class="text-center">
                      <b-button
                        v-if="logoimg_url"
                        @click="chooselogo()"
                        variant="primary"
                        class="mt-3 text-center"
                      >
                        {{ $t('welcome.change_Image') }}
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
                          <h3 class="username">{{ $t('welcome.Business_Logo') }}</h3>
                        </div>
                      </a>
                      <div></div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <b-form-group
                      id="business_name"
                      :label="$t('welcome.Business_Name')"
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
                        >{{ $t('welcome.Business_Name_Is_Required') }}.</b-form-invalid-feedback
                      >
                    </b-form-group>

                    <div></div>

                    <div class="form-group">
                      <label for="username" class="username">{{ $t('welcome.About') }}</label><br />
                      <textarea
                        type="textarea"
                        name="business_about"
                        v-model="about"
                        id="description"
                        :placeholder="$t('welcome.Brief_description_about_your_Busness')"
                        class="form-control text"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div>
                  <label class="typo__label"> {{ $t('welcome.Category') }} </label>
                  <multiselect
                    v-model="multiselecvalue"
                    @input="subcategories"
                    tag-:placeholder= "$t('welcome.Add_this_as_new_tag')"
                    :placeholder="$t('welcome.Search_or_add_a_tag')"
                    label="name"
                    track-by="id"
                    :options="pcategories"
                    :multiple="true"
                    :taggable="true"
                    @tag="addCategoryTag"
                  ></multiselect>
                </div>

                <div>
                  <label class="typo__label"> {{ $t('welcome.Sub_Category') }}</label>
                  <multiselect
                    v-model="filterselectvalue"
                    tag-:placeholder="$t('welcome.Add_this_as_new_tag')"
                    :placeholder="$t('welcome.Search_or_add_a_tag')"
                    label="name"
                    track-by="subcategory_id"
                    :options="scategories"
                    :multiple="true"
                    :taggable="true"
                    @tag="addFilter"
                  ></multiselect>
                </div>


                <label  v-if=" filterselectvalue.length" class="typo__label">{{ $t('welcome.Fiters') }}</label>
                <div  v-if=" filterselectvalue.length">
                  <b-card no-body>
                    <b-tabs pills card vertical>
                      <b-tab
                        :title="filters.name"
                        v-for="filters in filterselectvalue"
                        :key="filters.id"
                        active
                        ><b-card-text>
                          <b-form-group :label="$t('welcome.Filters')"  class="d-inline-grid"   >
                            <b-form-checkbox-group
                              id=""
                              v-model="select_filterss"
                              name="filters"
                            >
                              <b-form-checkbox
                                v-for="fil in filters.filters"
                                :key="fil.id"
                                :value="fil.id"
                                 class="d-inline-grid"
                              >
                                {{ fil.name }}
                              </b-form-checkbox>
                            </b-form-checkbox-group>
                          </b-form-group>
                        </b-card-text></b-tab
                      >
                    </b-tabs>
                  </b-card>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="country" class="username"> {{ $t('welcome.Country') }} :</label
                      ><br />
                      <multiselect
                        v-model="countryy"
                        @input="Region"
                     
                        :placeholder="$t('welcome.Search') "
                        label="name"
                        track-by="id"
                        :options="countries"
                        :multiple="true"
                       
                      ></multiselect>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="country" class="username"> {{ $t('welcome.Region') }} :</label
                      ><br />
                      <multiselect
                        v-model="regionn"
                        @input="Division"
                        
                        :placeholder="$t('welcome.Search') "
                        label="name"
                        track-by="id"
                        :options="regions"
                        :multiple="true"
                        :taggable="false"
                        
                      ></multiselect>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="country" class="username"> {{ $t('welcome.Division') }} :</label
                      ><br />
                      <multiselect
                        v-model="division"
                        @input="Municipality"
                       
                        :placeholder="$t('welcome.Search') "
                        label="name"
                        track-by="id"
                        :options="divisions"
                        :multiple="true"
                        :taggable="true"
                       
                      ></multiselect>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="country" class="username">
                        {{ $t('welcome.Municipality') }} :</label
                      ><br />

                      <multiselect
                        v-model="municipality"
                        @input="Locality"
                      
                        :placeholder="$t('welcome.Search') "
                        label="name"
                        track-by="id"
                        :options="municipalities"
                        :multiple="true"
                       
                       
                      ></multiselect>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="Neighbor" class="username"> {{ $t('welcome.Neighbor') }} :</label
                      ><br />
                      <multiselect
                        v-model="locality"
                       
                        :placeholder="$t('welcome.Search') "
                        label="name"
                        track-by="id"
                        :options="localities"
                        :multiple="true"
                        :taggable="false"
                      
                      ></multiselect>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="city" class="username"> {{ $t('welcome.City') }} :</label><br />
                      <input
                        type="text"
                        name="alias"
                        id="City"
                        v-model="city"
                        :placeholder="$t('welcome.City')"
                        class="form-control text"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="country" class="username"> {{ $t('welcome.Keywords') }} :</label
                      ><br />

                      <multiselect
                        v-model="business_keyword"
                        tag-:placeholder="$t('welcome.Add_this_as_new_tag')"
                        :placeholder="$t('welcome.Add_New_Keyword')"
                        label="name"
                        track-by="id"
                        :options="keywordds"
                        :multiple="true"
                        :taggable="true"
                        @tag="addkeywords"
                      ></multiselect>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="alias" class="username">{{ $t('welcome.Language') }}:</label
                      ><br />
                      <select
                        id="category"
                        class="form-control text"
                        name="language"
                        v-model="language"
                      >
                        <option value="" selected="" disabled="">
                          {{ $t('welcome.Select_Language') }}
                        </option>
                        <option>{{ $t('welcome.English') }}</option>
                        <option>{{ $t('welcome.Hindi') }}</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="username" class="username">{{ $t('welcome.TimeZone') }}:</label
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
                      <label for="Neighbor" class="username"> {{ $t('welcome.Adress') }} :</label>

                      <gmap-autocomplete
                        @place_changed="initMarker"
                        class="form-control"
                      >
                      </gmap-autocomplete>
                    </div>
                  </div>
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

            <tab-content :title="$t('welcome.Follow_Businesses')">
              <div class="div-h">
                <Business />
              </div>
            </tab-content>

            <tab-content :title="$t('welcome.Follow_People')">
              <div class="div-h">
                <People />
              </div>
            </tab-content>

            <tab-content :title="$t('welcome.Tutorial')">
              <div class="div-h">
                <Tutorial />
              </div>
            </tab-content>

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

import Multiselect from "vue-multiselect";
import { validationMixin } from "vuelidate";

import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      useas: "",
      municipality: [],
      locality: [],
      division: [],
      selectedusecase: "",
      keywordds:[],
      first_page: "true",
      country: "",
      coun:"",
      reg:"",
      countryy: [],
      regionn: [],
      region: "",
      username: this.$store.state.auth.user.user.name,
      img_url: null,
      select_filterss: [],
      sendingP: false,
      address: null,
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
      business_keyword: [],
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

      multiselecvalue: [],
      filterselectvalue: [],
      multiselec: [
        { name: "Vue.js", code: "vu" },
        { name: "Javascript", code: "js" },
        { name: "Open Source", code: "os" },
      ],

      timezone: [
        { text: "(GMT+1) West African ", value: "+1" },
        { text: "(GMT-11:00) Midway Island, Samoa", value: "-11" },
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


      flashErrors(errors) {
      let err = "";
      Object.values(errors).forEach((element) => {
        err = element[0];
      });

      return err;
    },

    addTag(newTag) {
      const tag = {
        name: newTag,
        id: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.multiselec.push(tag);
      this.multiselecvalue.push(tag);
    },


     addkeywords(newTag) {
      const tag = {
        name: newTag,
        id: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.keywordds.push(tag);
      this.business_keyword.push(tag);
    },







    addCategoryTag(newTag) {
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

    profileBusiness() {
      this.$store
        .dispatch("profile/profileBusiness")
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },



    PRegion(){


 let formData2 = new FormData();
      formData2.append("countryId",  this.selectedpcountry);

        this.$store
        .dispatch("auth/region", formData2)
        .then(() => {
     
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

    setLoading: function (value) {
    //  this.loadingWizard = value;
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
          resolve(false);
          return false;
        } else {
          console.log("no error error");

          let loader = this.$loading.show({
            container: this.fullPage ? null : this.$refs.loader,
            canCancel: true,
            onCancel: this.onCancel,
            color: "#e75c18",
          });

          this.sendingB = true;

          let formData2 = new FormData();

          formData2.append("category", this.business_category);

          formData2.append("categoryId", this.selectedcategories);
          formData2.append("subCategoryId", this.selectedsubcategories);
          formData2.append("filterId", this.select_filterss);

          formData2.append("logo_path", this.logo_pic);
          formData2.append("region", this.selectedregion);
          formData2.append("city", this.city);
          formData2.append("country", this.selectedcountry);

          formData2.append("address", this.address);
          formData2.append("division", this.selecteddivision);
          formData2.append("council", this.selectedmunicipality);

          formData2.append("neigborhood", this.selectedlocality);
          formData2.append("lat", this.center.lat);
          formData2.append("lng", this.center.lng);

          formData2.append("name", this.form.business_name);
          //  formData2.append("keywords", this.selectedKeywords);
          formData2.append("keywords", "blec this");
          formData2.append("timezone", this.time_zone);
          formData2.append("language", this.language);
          formData2.append("about_business", this.about);

          console.log("sending");

          axios
            .post("business/create", formData2)
            .then((response) => {
              console.log(response);

              this.sendingB = false;

              this.flashMessage.show({
                status: "success",

                message: this.$t('welcome.Business_Profile_Created'),
              });
              loader.hide();
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

                message: this.flashErrors(err.response.data.errors),
                  blockClass: "custom-block-class",
                });
              } else {
                this.flashMessage.show({
                  status: "error",

                  message: this.$t('welcome.Unable_to_Create_Your_Business'),
                  blockClass: "custom-block-class",
                });
                console.log({ err: err });
              }
              loader.hide();
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
        formData2.append("region", this.selectedregion);
        formData2.append("city", this.city);
        formData2.append("country", this.selectedcountry);

        formData2.append("address", this.adress);
        formData2.append("division", this.selecteddivision);
        formData2.append("council", this.selectedmunicipality);

        formData2.append("neighborh", this.selectedlocality);
        formData2.append("lat", this.center.lat);
        formData2.append("lng", this.center.lng);

        formData2.append("name", this.form.business_name);
        formData2.append("category", this.business_category);
        //  formData2.append("keywords", this.selectedKeywords);
        formData2.append("keywords", "blec this");
        formData2.append("timezone", this.time_zone);
        formData2.append("language", this.language);
        formData2.append("about_business", this.about);

        axios
          .post("business/create", formData2)
          .then((response) => {
            console.log(response);

            this.sendingB = false;

            this.flashMessage.show({
              status: "success",
              blockClass: "custom-block-class",
              message: this.$t('welcome.Business_Profile_Created'),
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

                 message: this.flashErrors(err.response.data.errors),
                blockClass: "custom-block-class",
              });
            } else {
              this.flashMessage.show({
                status: "error",

                message: this.$t('welcome.Unable_to_Create_Your_Business'),
                blockClass: "custom-block-class",
              });
              console.log({ err: err });
            }

            resolve(false);
          });
      });
    },

    updateUserProfile: function () {

       let loader = this.$loading.show({
            container: this.fullPage ? null : this.$refs.loader,
            canCancel: true,
            onCancel: this.onCancel,
            color: "#e75c18",
          });

      return new Promise((resolve, reject) => {
        console.log("sending user data");

       

        let formData = new FormData();
        formData.append("profile_picture", this.profile_pic);

        formData.append("dob", this.dob);
        formData.append("gender", this.gender);
        formData.append("city", this.city);
        formData.append("country", this.selectedpcountry);
        formData.append("region", this.selectedpregion);
        formData.append("city", this.city);
        formData.append("neighbor", this.Neighbor);
        formData.append("lat", this.center.lat);
        formData.append("lng", this.center.lng);
        formData.append("address", this.address);

        axios
          .post("/complete/profile", formData)
          .then((response) => {
            console.log(response);

            this.step1 = true;
            loader.hide();

            this.flashMessage.show({
              status: "success",

              message: this.$t('welcome.Profile_Updated'),

              blockClass: "custom-block-class",
            });

            this.peopleAround();

            this.businessAround();

            resolve(true);
          })
          .catch((err) => {
            console.log({ err: err });

            loader.hide();
            this.step1 = false;

            if (err.response.status == 422) {
              console.log({ err: err });
              console.log(err.response.data.message);
             loader.hide();
              this.flashMessage.show({
                status: "error",

              message: this.flashErrors(err.response.data.errors),
                blockClass: "custom-block-class",
              });
            } else {
              this.flashMessage.show({
                status: "error",
                title: this.$t('welcome.Registration_Failed'),
                message: this.$t('welcome.Unable_to_update_your_Information'),
                blockClass: "custom-block-class",
              });
              console.log({ err: err });
              loader.hide();
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

    this. peopleAround();
    this.locateGeoLocation();

    this.Country();
    this.categories();
    
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
    },
    selectedKeywords: function () {
      let selectedUsers = [];
      this.business_keyword.forEach((item) => {
        selectedUsers.push(item.id);
      });
      return selectedUsers;
    },

    selectedsubcategories: function () {
      let sub_cat = [];
      this.filterselectvalue.forEach((item) => {
        sub_cat.push(item.subcategory_id);
      });
      return sub_cat;
    },
    selectedcountry: function () {
      let sub_cat = [];
      this.countryy.forEach((item) => {
        sub_cat.push(item.id);
      });
      return sub_cat;
    },

     selectedpcountry: function () {
      return this.country.id;
    },


     selectedpregion: function () {
      return this.region.id;
    },  


    selectedregion: function () {
      let sub_cat = [];
      this.regionn.forEach((item) => {
        sub_cat.push(item.id);
      });
      return sub_cat;
    },
    selecteddivision: function () {
      let sub_cat = [];
      this.division.forEach((item) => {
        sub_cat.push(item.id);
      });
      return sub_cat;
    },
    selectedmunicipality: function () {
      let sub_cat = [];
      this.municipality.forEach((item) => {
        sub_cat.push(item.id);
      });
      return sub_cat;
    },
    selectedlocality: function () {
      let sub_cat = [];
      this.locality.forEach((item) => {
        sub_cat.push(item.id);
      });
      return sub_cat;
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

    pcategories() {
      return this.$store.state.auth.categories;
    },

    scategories() {
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
  max-height: 250px;
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
