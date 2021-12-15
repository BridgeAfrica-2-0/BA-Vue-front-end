<template>
  <div class="p-0 m-0">
    <div class="col-md-12 p-0">
      <fas-icon
        class="violet float-left mr-1 icon-size primary"
        :icon="['fas', 'building']"
      />{{ $t("profileowner.Business") }}
      <button
        type="button"
        data-toggle="modal"
        data-target="#addbusinessbtnModal"
        class="btn btn-outline-primary pull-right float-right mb-2"
        style="margin-top: -6px"
        v-b-modal.createBusinessModal
      >
        {{ $t("profileowner.Add_Business") }}
      </button>

      <hr />

      <b-modal
        id="createBusinessModal"
        ref="createBusinessModal"
        :title="$t('profileowner.Add_Bussiness')"
        size="lg"
        hide-footer
        @close="cancel"
      >
        <div>
          <form-wizard @on-complete="createBusiness">
            <tab-content :title="$t('profileowner.Business_Indentity')">
              <div class="form-card">
                <div class="row">
                  <div class="col-md-6">
                    <input id="logo" type="file" @change="onLogoChange" hidden />

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
                        {{ $t("profileowner.change_Image") }}
                      </b-button>
                    </div>

                    <div class="image-upload-wrap" v-if="!logoimg_url" @click="chooselogo()">
                      <a href="#" data-toggle="modal" data-target="#createalbumModal">
                        <div class="drag-text">
                          <i class="fa fa-plus"> </i>
                          <h3 class="username">
                            {{ $t("profileowner.Business_Logo") }}
                          </h3>
                        </div>
                      </a>
                      <div></div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <b-form-group
                      id="business_name"
                      :label="$t('profileowner.Business_Name')"
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
                        >{{
                          $t("profileowner.Business_Name_Is_Required")
                        }}.</b-form-invalid-feedback
                      >
                    </b-form-group>

                    <div class="form-group">
                      <label for="country" class="username">
                        {{ $t("profileowner.Keywords") }} :</label
                      ><br />

                      <multiselect
                        v-model="business_keyword"
                        tag-:placeholder="$t('profileowner.Add_this_as_new_Keyword')"
                        :placeholder="$t('profileowner.Add_New_Keyword')"
                        :label="$t('profileowner.name')"
                        track-by="id"
                        :options="keywordds"
                        :multiple="true"
                        :taggable="true"
                        @tag="addkeywords"
                      ></multiselect>
                    </div>

                    <div class="form-group">
                      <label for="username" class="username">{{ $t('profileowner.About') }}</label
                      ><br />
                      <textarea
                        type="textarea"
                        name="business_about"
                        v-model="about"
                        id="description"
                        :placeholder="
                          $t(
                            'profileowner.Brief_description_about_your_Busness'
                          )
                        "
                        class="form-control text"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div>
                  <label class="typo__label">
                    {{ $t("profileowner.Category") }}
                  </label>
                  <multiselect
                    v-model="multiselecvalue"
                    @input="subcategories"
                    tag-:placeholder="$t('profileowner.Add_this_as_new_tag')"
                    :placeholder="$t('profileowner.Search_or_add_a_tag')"
                    :label="$t('profileowner.name')"
                    track-by="id"
                    :options="pcategories"
                    :multiple="true"
                    :taggable="true"
                    @tag="addTag"
                  ></multiselect>
                </div>

                <div v-if="scategories.length">
                  <label class="typo__label"> {{ $t('profileowner.Sub_Category') }}</label>
                  <multiselect
                    v-model="filterselectvalue"
                    tag-:placeholder="$t('profileowner.Add_this_as_new_tag')"
                    :placeholder="$t('profileowner.Search_or_add_a_tag')"
                    :label="$t('profileowner.name')"
                    track-by="subcategory_id"
                    :options="scategories"
                    :multiple="true"
                    :taggable="true"
                    @tag="addFilter"
                  ></multiselect>
                </div>

                <div v-if="filterselectvalue.length">
                  <label class="typo__label">{{ $t('profileowner.Fiters') }} </label>
                  <b-card no-body>
                    <b-tabs pills card vertical>
                      <b-tab :title="filters.name" v-for="filters in filterselectvalue" :key="filters.id" active
                        ><b-card-text>
                          <b-form-group
                            :label="$t('profileowner.Filters')"
                            class="colorblack"
                          >
                            <b-form-checkbox-group
                              id=""
                              class="colorblack"
                              v-model="select_filterss"
                              :name="filters.name"
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
                        </b-card-text></b-tab
                      >
                    </b-tabs>
                  </b-card>
                </div>
              </div>
            </tab-content>

            <tab-content title=" Location ">
              <div class="form-card">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="country" class="username"> {{ $t('profileowner.Country') }} :</label><br />
                      <multiselect
                        v-model="country"
                        @input="Region"
                        :placeholder="$t('profileowner.Search')"
                        :label="$t('profileowner.name')"
                        track-by="id"
                        :options="countries"
                        :multiple="true"
                      ></multiselect>
                    </div>
                  </div>

                  <div v-if="regions.length" class="col-md-6">
                    <div class="form-group">
                      <label for="country" class="username"> {{ $t('profileowner.Region') }} :</label><br />
                      <multiselect
                        v-model="region"
                        @input="Division"
                        :placeholder="$t('profileowner.Search')"
                        :label="$t('profileowner.name')"
                        track-by="id"
                        :options="regions"
                        :multiple="true"
                      ></multiselect>
                    </div>
                  </div>

                  <div v-if="divisions.length" class="col-md-6">
                    <div class="form-group">
                      <label for="country" class="username"> {{ $t('profileowner.Division') }} :</label><br />
                      <multiselect
                        v-model="division"
                        @input="Municipality"
                        :placeholder="$t('profileowner.Search')"
                        :label="$t('profileowner.name')"
                        track-by="id"
                        :options="divisions"
                        :multiple="true"
                      ></multiselect>
                    </div>
                  </div>

                  <div v-if="municipalities.length" class="col-md-6">
                    <div class="form-group">
                      <label for="country" class="username"> {{ $t('profileowner.Municipality') }} :</label><br />

                      <multiselect
                        v-model="municipality"
                        @input="Locality"
                        :placeholder="$t('profileowner.Search')"
                        :label="$t('profileowner.name')"
                        track-by="id"
                        :options="municipalities"
                        :multiple="true"
                      ></multiselect>
                    </div>
                  </div>

                  <div v-if="localities.length" class="col-md-6">
                    <div class="form-group">
                      <label for="Neighbor" class="username"> {{ $t('profileowner.Neighbor') }} :</label><br />
                      <multiselect
                        v-model="locality"
                        :placeholder="$t('profileowner.Search')"
                        :label="$t('profileowner.name')"
                        track-by="id"
                        :options="localities"
                        :multiple="true"
                      ></multiselect>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="website" class="username"> {{ $t('profileowner.City') }} :</label><br />
                      <input
                        type="text"
                        name="alias"
                        v-model="city"
                        id="city"
                        :placeholder="$t('profileowner.City')"
                        class="form-control text"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="Neighbor" class="username">
                        {{ $t("profileowner.Adress") }} :</label
                      >

                      <div id="geocoder"></div>
                      <!-- <gmap-autocomplete
                        @place_changed="initMarker"
                        class="form-control"
                      >
                      </gmap-autocomplete> -->
                    </div>
                  </div>
                </div>
                <div style="width: 100%; height: 200px">
                  <MglMap
                    :accessToken="accessToken"
                    :center="coordinates"
                    :mapStyle="mapStyle"
                    :zoom="zoom"
                  >
                    <MglGeocoderControl
                      :accessToken="accessToken"
                      @result="getGeoCoderResult"
                      color="blue"
                    />
                    <MglMarker :coordinates="coordinates" />
                  </MglMap>
                </div>

                <!-- <gmap-map
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
                </gmap-map> -->
              </div>
            </tab-content>

            <tab-content :title="$t('profileowner.Contact')">
              <b-card>
                <b-row>
                  <b-col md="6">
                    <label class="username">
                      {{ $t("profileowner.Phone1") }}
                    </label>
                    <VuePhoneNumberInput v-model="phone1" />
                  </b-col>
                  <b-col md="6">
                    <label class="username">
                      {{ $t("profileowner.Phone2") }}
                    </label>
                    <VuePhoneNumberInput v-model="phone2" />
                  </b-col>
                </b-row>

                <b-row>
                  <b-col md="6">
                    <div class="form-group">
                      <label for="website" class="username"> {{ $t('profileowner.Website') }} :</label><br />
                      <input
                        type="text"
                        name="alias"
                        v-model="website"
                        id="Website"
                        :placeholder="$t('profileowner.Website')"
                        class="form-control text"
                      />
                    </div>
                  </b-col>

                  <b-col md="6">
                    <div class="form-group">
                      <label for="email" class="username">
                        {{ $t("profileowner.Email") }} :</label
                      ><br />
                      <input
                        type="email"
                        name="alias"
                        v-model="email"
                        id="email"
                        :placeholder="$t('profileowner.Email')"
                        class="form-control text"
                      />
                    </div>
                  </b-col>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="username" class="username">{{ $t('profileowner.TimeZone') }}:</label><br />

                      <b-form-select id="timezone" v-model="time_zone" :options="timezone"></b-form-select>
                    </div>
                  </div>
                </b-row>
              </b-card>
            </tab-content>
          </form-wizard>
        </div>
      </b-modal>

      <!-- update method --->

      <b-modal
        id="updateBusinessModal"
        ref="updateBusinessModal"
        :title="$t('profileowner.Update_Bussiness')"
        size="lg"
        hide-footer
        @close="cancel"
        @hidden="cancel"
      >
        <div>
          <form-wizard @on-complete="updateBusiness">
            <tab-content :title="$t('profileowner.Business_Indentity')">
              <div class="form-card">
                <div class="row">
                  <div class="col-md-6">
                    <input id="logo" type="file" @change="onLogoChange" hidden />

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
                        {{ $t("profileowner.change_Image") }}
                      </b-button>
                    </div>

                    <div class="image-upload-wrap" v-if="!logoimg_url" @click="chooselogo()">
                      <a href="#" data-toggle="modal" data-target="#createalbumModal">
                        <div class="drag-text">
                          <i class="fa fa-plus"> </i>
                          <h3 class="username">
                            {{ $t("profileowner.Business_Logo") }}
                          </h3>
                        </div>
                      </a>
                      <div></div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <b-form-group
                      id="business_name"
                      :label="$t('profileowner.Business_Name')"
                      label-for="business_name"
                    >
                      <b-form-input
                        id="business_name"
                        name="business_name"
                        v-model="business_name"
                        :state="validateState('business_name')"
                        aria-describedby="business_name-feedback"
                      ></b-form-input>

                      <b-form-invalid-feedback id="business_name-feedback"
                        >{{
                          $t("profileowner.Business_Name_Is_Required")
                        }}.</b-form-invalid-feedback
                      >
                    </b-form-group>

                    <div class="form-group">
                      <label for="country" class="username"> {{ $t('profileowner.Keywords') }} :</label><br />

                      <multiselect
                        v-model="business_keyword"
                        tag-:placeholder="$t('profileowner.Add_this_as_new_Keyword')"
                        :placeholder="$t('profileowner.Add_New_Keyword')"
                        :label="$t('profileowner.name')"
                        track-by="id"
                        :options="keywordds"
                        :multiple="true"
                        :taggable="true"
                        @tag="addkeywords"
                      ></multiselect>
                    </div>

                    <div class="form-group">
                      <label for="username" class="username">{{ $t('profileowner.About') }}</label
                      ><br />
                      <textarea
                        type="textarea"
                        name="business_about"
                        v-model="about"
                        id="description"
                        :placeholder="
                          $t(
                            'profileowner.Brief_description_about_your_Business'
                          )
                        "
                        class="form-control text"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div>
                  <label class="typo__label">
                    {{ $t("profileowner.Category") }}
                  </label>
                  <multiselect
                    v-model="multiselecvalue"
                    @input="subcategories"
                    tag-:placeholder="$t('profileowner.Add_this_as_new_tag')"
                    :placeholder="$t('profileowner.Search_or_add_a_tag')"
                    :label="$t('profileowner.name')"
                    track-by="id"
                    :options="pcategories"
                    :multiple="true"
                    :taggable="true"
                    @tag="addTag"
                  ></multiselect>
                </div>

                <div>
                  <label class="typo__label"> {{ $t('profileowner.Sub_Category') }}</label>
                  <multiselect
                    v-model="filterselectvalue"
                    tag-:placeholder="$t('profileowner.Add_this_as_new_tag')"
                    :placeholder="$t('profileowner.Search_or_add_a_tag')"
                    :label="$t('profileowner.name')"
                    track-by="subcategoryId"
                    :options="scategories"
                    :multiple="true"
                    :taggable="true"
                    @tag="addFilter"
                  ></multiselect>
                </div>

                <label class="typo__label">{{ $t('profileowner.Fiters') }} </label>
                <div>
                  <b-card no-body>
                    <b-tabs pills card vertical>
                      <b-tab :title="filters.name" v-for="filters in filterselectvalue" :key="filters.id" active
                        ><b-card-text>
                          <b-form-group
                            :label="$t('profileowner.Filters')"
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
                        </b-card-text></b-tab
                      >
                    </b-tabs>
                  </b-card>
                </div>
              </div>
            </tab-content>

            <tab-content :title="$t('profileowner.Location')">
              <div class="form-card">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="country" class="username"> {{ $t('profileowner.Country') }} :</label><br />
                      <multiselect
                        v-model="country"
                        @input="Region"
                        :placeholder="$t('profileowner.Search')"
                        :label="$t('profileowner.name')"
                        track-by="id"
                        :options="countries"
                        :multiple="true"
                      ></multiselect>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="country" class="username"> {{ $t('profileowner.Region') }} :</label><br />
                      <multiselect
                        v-model="region"
                        @input="Division"
                        :placeholder="$t('profileowner.Search')"
                        :label="$t('profileowner.name')"
                        track-by="id"
                        :options="regions"
                        :multiple="true"
                      ></multiselect>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="country" class="username"> {{ $t('profileowner.Division') }} :</label><br />
                      <multiselect
                        v-model="division"
                        @input="Municipality"
                        :placeholder="$t('profileowner.Search')"
                        :label="$t('profileowner.name')"
                        track-by="id"
                        :options="divisions"
                        :multiple="true"
                      ></multiselect>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="country" class="username"> {{ $t('profileowner.Municipality') }} :</label><br />

                      <multiselect
                        v-model="municipality"
                        @input="Locality"
                        :placeholder="$t('profileowner.Search')"
                        :label="$t('profileowner.name')"
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
                      <label for="Neighbor" class="username"> {{ $t('profileowner.Neighbor') }} :</label><br />
                      <multiselect
                        v-model="locality"
                        :placeholder="$t('profileowner.Search')"
                        :label="$t('profileowner.name')"
                        track-by="id"
                        :options="localities"
                        :multiple="true"
                      ></multiselect>
                    </div>
                  </div>

                  <b-col md="6">
                    <div class="form-group">
                      <label for="website" class="username"> {{ $t('profileowner.City') }} :</label><br />
                      <input
                        type="text"
                        name="alias"
                        v-model="city"
                        id="city"
                        :placeholder="$t('profileowner.City')"
                        class="form-control text"
                      />
                    </div>
                  </b-col>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="Neighbor" class="username">
                        {{ $t("profileowner.Adress") }} :</label
                      >

                      <gmap-autocomplete @place_changed="initMarker" class="form-control"> </gmap-autocomplete>
                    </div>
                  </div>
                </div>

                <gmap-map :zoom="14" :center="center" style="width: 100%; height: 200px">
                  <gmap-marker
                    :key="index"
                    v-for="(m, index) in locationMarkers"
                    :position="m.position"
                    @click="center = m.position"
                  ></gmap-marker>
                </gmap-map>
              </div>
            </tab-content>

            <tab-content title=" Contact ">
              <b-card>
                <b-row>
                  <b-col md="6">
                    <label class="username">
                      {{ $t("profileowner.Phone1") }}
                    </label>
                    <VuePhoneNumberInput v-model="phone1" />
                  </b-col>
                  <b-col md="6">
                    <label class="username">
                      {{ $t("profileowner.Phone2") }}
                    </label>
                    <VuePhoneNumberInput v-model="phone2" />
                  </b-col>
                </b-row>

                <b-row>
                  <b-col md="6">
                    <div class="form-group">
                      <label for="website" class="username"> {{ $t('profileowner.Website') }} :</label><br />
                      <input
                        type="text"
                        name="alias"
                        v-model="website"
                        id="Website"
                        :placeholder="$t('profileowner.Website')"
                        class="form-control text"
                      />
                    </div>
                  </b-col>

                  <b-col md="6">
                    <div class="form-group">
                      <label for="email" class="username">
                        {{ $t("profileowner.Email") }} :</label
                      ><br />
                      <input
                        type="text"
                        name="alias"
                        v-model="email"
                        id="email"
                        :placeholder="$t('profileowner.Email')"
                        class="form-control text"
                      />
                    </div>
                  </b-col>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="username" class="username">{{ $t('profileowner.TimeZone') }}:</label><br />

                      <b-form-select id="timezone" v-model="time_zone" :options="timezone"></b-form-select>
                    </div>
                  </div>
                </b-row>
              </b-card>
            </tab-content>
          </form-wizard>
        </div>
      </b-modal>

      <!-- end of update modal -->

      <div class="row">
        <div class="col">
          <h6 class="mb-0"><b></b></h6>
          <b-row>
            <b-col md="12" lg="6" class="p-0 mb-2" v-for="business in profilebusiness" :key="business.business_id">
              <div class="people-style shadow h-100">
                <b-link>
                  <div class="float-right others">
                    <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
                      <template #button-content>
                        <b-icon icon="three-dots-vertical" variant="primary" class="icon-size"></b-icon>
                      </template>
                      <b-dropdown-item
                        @click="editBusiness(business.id)"
                        v-b-modal.updateBusinessModal
                        variant=""
                        >{{ $t("profileowner.Edit") }}</b-dropdown-item
                      >
                      <b-dropdown-item @click="deleteBusiness(business.id)">
                        {{ $t("profileowner.Delete") }}</b-dropdown-item
                      >
                    </b-dropdown>
                  </div>
                </b-link>
                <div class="inline-flex">
                  <div>
                    <div class="center-img">
                      <splide :options="options" class="r-image">
                        <splide-slide cl>
                          <img :src="business.logo_path" class="r-image" />
                        </splide-slide>
                      </splide>
                    </div>
                  </div>

                  <div>
                    <p class="textt text">
                      <strong class="title">
                        <router-link :to="'/business_owner/' + business.id">
                          {{ business.name }}
                        </router-link>
                      </strong>
                      <br />
                      <span
                        class=""
                        v-for="cat in business.category"
                        :key="cat.name"
                      >
                        {{ cat.name }}
                      </span>

                      <br />
                      {{ business.community }}
                      {{ $t("profileowner.Community") }} <br />

                      <span class="location">
                        <b-icon-geo-alt class="ico"></b-icon-geo-alt>
                        {{ business.city }}
                        <span v-for="nei in business.neigborhood" :key="nei.id">
                          {{ nei.name }}
                        </span>
                      </span>
                      <br />

                      <read-more
                        more-str="read more"
                        class="readmore"
                        :text="business.about_business"
                        link="#"
                        less-str="read less"
                        :max-chars="100"
                      >
                      </read-more>
                    </p>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>

          <infinite-loading
            :identifier="infiniteId"
            ref="infiniteLoading"
            @infinite="infiniteHandler"
          ></infinite-loading>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker } from "vue-mapbox";
import MglGeocoderControl from "vue-mapbox-geocoder";
import Multiselect from "vue-multiselect";
import { validationMixin } from "vuelidate";

import { required, email, minLength } from 'vuelidate/lib/validators';
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

export default {
  mixins: [validationMixin],
  data() {
    return {
      useas: '',
      page: 1,
      bizId: "",
      profileBusinesss: [],
      infiniteId: +new Date(),
      profilebusiness: [],
      editbiz: "",
      selectedusecase: "",
      keywordds: [],
      phone1: null,
      phone2: null,
      emaill: null,
      email: null,
      business_name: null,
      business: null,
      website: null,
      first_page: 'true',
      country: [],
      region: [],
      division: [],
      municipality: [],
      locality: [],
      username: this.$store.state.auth.user.user.name,
      img_url: null,
      select_filterss: [],
      sendingP: false,
      sendingB: false,
      profile_pic: '',
      dob: null,
      gender: null,
      city: null,
      Neighbor: null,
      step1: false,
      step2: false,
      logo_pic: '',
      logoimg_url: null,
      form: {
        business_name: null,
      },
      business_category: 'Testing',
      business_keyword: [],
      time_zone: null,
      language: null,
      about: null,
      loadingWizard: false,

      center: {
        lat: 39.7837304,
        lng: -100.4458825,
      },
      accessToken: process.env.VUE_APP_MAPBOX_TOKEN,
      mapStyle: "mapbox://styles/mapbox/streets-v11",
      coordinates: [11.504929555178624, 3.8465173382452815], // Lng,Lat
      zoom: 12,
      address: "",
      defaultInput: "Bodhgaya",
      locationMarkers: [],
      locPlaces: [],
      existingPlace: null,

      multiselecvalue: [],
      filterselectvalue: [],
      multiselec: [
        { name: 'Vue.js', code: 'vu' },
        { name: 'Javascript', code: 'js' },
        { name: 'Open Source', code: 'os' },
      ],
      timezone: [
        { text: '(GMT+1) West African ', value: '+1' },
        { text: '(GMT-11:00) Midway Island, Samoa', value: '-11' },
      ],
      options: [
        { text: ' Person', value: 'person' },
        { text: ' Business ', value: 'business' },
      ],

      category: '',
    };
  },

  validations: {
    form: {
      business_name: {
        required,
      },
    },
  },

  methods: {
    infiniteHandler($state) {
      console.log("loading started");
      
      if (this.page == 1) {
        this.profilebusiness.splice(0);
      }
      let url = 'business/user?page=' + this.page;

      this.$store
        .dispatch("profile/loadMore", url)
        .then(({ data }) => {
          console.log(data);
          if (data.data.length) {
            this.page += 1;
            this.profileBusinesss.push(...data.data);
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch((err) => {
          // console.log({ err: err });
        });
    },

    handleSearch(event) {
      console.log(event);
    },
    getGeoCoderResult(response) {
      this.coordinates = response.result.center;
      this.address = response.result.place_name;
      console.log(response);
    },

    editBusiness(id) {
      this.bizId = id;

      axios
        .get('business/edit/' + id)
        .then(({ data }) => {
          console.log(data);
          this.editbiz = data.data;
          this.setEditData(data.data);
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    deleteBusiness(id) {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.preview,
        canCancel: true,
        onCancel: this.onCancel,
        color: '#e75c18',
      });

      let url = 'business/delete/' + id;
      this.$store
        .dispatch('profile/deleteBusiness', url)
        .then(() => {
          console.log("wow biz {{ $t('profileowner.delete')}}d");

          loader.hide();

          this.page = 1;
          this.infiniteId += 1;
          this.profileBusinesss = [];
          this.$refs.infiniteLoading.attemptLoad();
          this.flashMessage.show({
            status: 'success',

            message: "Business {{ $t('profileowner.Delete')}}d",

            blockClass: 'custom-block-class',
          });
        })
        .catch((err) => {
          console.log({ err: err });
          loader.hide();
          this.flashMessage.show({
            status: 'error',

            message: "Unable to {{ $t('profileowner.Delete')}} this Business",

            blockClass: 'custom-block-class',
          });
        });
    },

    cancel() {
      this.logo_url = "";
      this.business_name = "";
      this.about = "";

      this.multiselecvalue = [];
      this.filterselectvalue = [];

      this.city = '';
      this.select_filterss = [];
      this.business_name = '';
      this.country = [];
      this.region = [];
      this.division = [];
      this.municipality = [];
      this.phone1 = '';
      this.phone2 = '';
      this.website = '';
      this.locality = [];
      this.email = '';
      this.time_zone = '';
      this.address = '';
      this.business_keyword = [];
      this.address = '';
    },

    editfilters(filter) {
      let fil = [];

      filter.forEach((item) => {
        fil.push(item.filter_id);
      });

      return fil;
    },

    setEditData(business) {
      this.logo_url = business.logo;
      this.business_name = business.name;
      this.about = business.about_business;
      this.lat = business.lat;
      this.lng = business.lng;
      this.multiselecvalue = business.category;
      this.filterselectvalue = business.subCatFilter;

      this.city = business.city;
      this.select_filterss = this.editfilters(business.filter);

      this.business_name = business.name;
      this.country = business.country;
      this.region = business.region;
      this.division = business.division;
      this.municipality = business.council;
      this.phone1 = business.phone1;
      this.phone2 = business.phone2;
      this.website = business.website;
      this.locality = business.neigborhood;
      this.email = business.email;
      this.time_zone = business.timeZone;
      this.address = business.address;
      this.business_keyword = business.keywords;
      this.address = business.address;

      this.subcategories();
      this.Region();
      this.Division();
      this.Municipality();
      this.Locality();
    },
    getpFilters: function() {
      let sub_cat = [];
      this.filterselectvalue.forEach((item) => {
        sub_cat.push(item.subcategory_id);
      });
      return sub_cat;
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
        .dispatch('auth/categories')
        .then(() => {
          console.log('hey yeah');
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    subcategories() {
      let formData2 = new FormData();

      formData2.append('categoryId', this.selectedcategories);

      this.$store
        .dispatch('auth/subcategories', formData2)
        .then(() => {
          console.log('hey yeah');
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    filters() {
      this.$store
        .dispatch('auth/filters')
        .then(() => {
          console.log('hey yeah');
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    Setcategoryfiters() {
      this.$store
        .dispatch('auth/Setcategoryfiters')
        .then(() => {
          console.log('hey yeah');
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    Country() {
      this.$store
        .dispatch('auth/country')
        .then(() => {
          console.log('hey yeah');
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    old_profileBusiness() {
      this.$store
        .dispatch('profile/profileBusiness')
        .then(() => {
          console.log('hey yeah');
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    Region() {
      let formData2 = new FormData();
      console.log('region regions');

      formData2.append('countryId', this.selectedcountry);

      this.$store
        .dispatch('auth/region', formData2)
        .then(() => {
          console.log('hey yeah');
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    Division() {
      let formData2 = new FormData();
      formData2.append('regionId', this.selectedregion);

      this.$store
        .dispatch('auth/division', formData2)
        .then(() => {
          console.log('hey yeah');
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    Municipality() {
      let formData2 = new FormData();
      formData2.append('divisionId', this.selecteddivision);

      this.$store
        .dispatch('auth/municipality', formData2)
        .then(() => {
          console.log('hey yeah');
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    Locality() {
      let formData2 = new FormData();
      formData2.append('councilId', this.selectedmunicipality);
      console.log('loding locallity');
      console.log(this.selectedmunicipality);
      this.$store
        .dispatch('auth/locality', formData2)
        .then(() => {
          console.log('hey yeah');
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
    setLoading: function(value) {
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

    businessAround() {
      this.$store
        .dispatch('auth/businessAround')
        .then(() => {
          console.log('hey yeah');
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    peopleAround() {
      this.$store
        .dispatch('auth/peopleAround')
        .then(() => {
          console.log('hey yeah');
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

    locateGeoLocation: function() {
      navigator.geolocation.getCurrentPosition((res) => {
        this.center = {
          lat: res.coords.latitude,
          lng: res.coords.longitude,
        };
      });
    },

    createBusiness: function() {
      return new Promise((resolve, reject) => {
        this.sendingB = true;
        let loader = this.$loading.show({
          container: this.fullPage ? null : this.$refs.loader,
          canCancel: true,
          onCancel: this.onCancel,
          color: '#e75c18',
        });

        let formData2 = new FormData();
        formData2.append("logo_path", this.logo_pic);

        formData2.append("region", this.selectedregion);
        formData2.append("city", this.city);
        formData2.append("country", this.selectedcountry);

        formData2.append("address", this.address);
        formData2.append("division", this.selecteddivision);
        formData2.append("council", this.selectedmunicipality);

        formData2.append("neigborhood", this.selectedlocality);
        formData2.append("lat", this.coordinates[1]);
        formData2.append("lng", this.coordinates[0]);
        formData2.append("phone", this.phone1);
        formData2.append("phone2", this.phone2);
        formData2.append("email", this.email);
        formData2.append("website", this.website);

        formData2.append("name", this.form.business_name);
        formData2.append("categoryId", this.selectedcategories);
        formData2.append("subCategoryId", this.selectedsubcategories);
        formData2.append("filterId", this.select_filterss);
        formData2.append("keywords", this.business_keyword);
        formData2.append("timezone", this.time_zone);
        formData2.append("language", this.language);
        formData2.append("about_business", this.about);

        this.axios
          .post('business/add', formData2, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((response) => {
            console.log(response);

            this.sendingB = false;
            this.profileBusiness();

            this.$refs['createBusinessModal'].hide();
            this.flashMessage.show({
              status: 'success',
              blockClass: 'custom-block-class',
              message: 'Business Profile Created',
            });

            loader.hide();

            this.page = 1;
            this.infiniteId += 1;
            this.profileBusinesss = [];
            this.$refs.infiniteLoading.attemptLoad();
            resolve(true);
          })
          .catch((err) => {
            console.log({ err: err });

            this.sendingB = false;

            if (err.response.status == 422) {
              console.log({ err: err });
              console.log(err.response.data.message);

              this.flashMessage.show({
                status: 'error',

                message: this.flashErrors(err.response.data.errors),
                blockClass: 'custom-block-class',
              });
            } else {
              this.flashMessage.show({
                status: 'error',

                message: 'Unable to Create Your Business',
                blockClass: 'custom-block-class',
              });
              console.log({ err: err });
            }
            loader.hide();
            resolve(false);
          });
      });
    },

    updateBusiness: function() {
      return new Promise((resolve, reject) => {
        this.sendingB = true;
        let loader = this.$loading.show({
          container: this.fullPage ? null : this.$refs.loader,
          canCancel: true,
          onCancel: this.onCancel,
          color: '#e75c18',
        });

        let formData2 = new FormData();
        formData2.append('logo_path', this.logo_pic);

        formData2.append('region', this.selectedregion);
        formData2.append('city', this.city);
        formData2.append('country', this.selectedcountry);

        formData2.append('address', this.adress);
        formData2.append('division', this.selecteddivision);
        formData2.append('council', this.selectedmunicipality);

        formData2.append('neigborhood', this.selectedlocality);
        formData2.append('lat', this.center.lat);
        formData2.append('lng', this.center.lng);
        formData2.append('phone', this.phone1);
        formData2.append('phone2', this.phone2);
        
        if (this.email)
          formData2.append('email', this.email);
        
        if (this.website)
          formData2.append('website', this.website);

        formData2.append('name', this.business_name);
        formData2.append('categoryId', this.selectedcategories);
        formData2.append('subCategoryId', this.selectedsubcategories);
        formData2.append('filterId', this.selectedfilters);
        formData2.append('keywords', this.business_keyword);
        formData2.append('timezone', this.time_zone);
        formData2.append('language', this.language);
        formData2.append('about_business', this.about);

        this.axios
          .post('business/edit/' + this.bizId, formData2, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((response) => {
            console.log(response);

            this.sendingB = false;
            // this.profileBusiness();

            this.$refs['updateBusinessModal'].hide();
            this.flashMessage.show({
              status: 'success',
              blockClass: 'custom-block-class',
              message: 'Business Updated',
            });

            loader.hide();
            this.page = 1;
            this.infiniteId += 1;
            this.profileBusinesss = [];
            this.$refs.infiniteLoading.attemptLoad();

            resolve(true);
          })
          .catch((err) => {
            console.log({ err: err });

            this.sendingB = false;

            if (err.response.status == 422) {
              console.log({ err: err });

              this.flashMessage.show({
                status: 'error',

                message: this.flashErrors(err.response.data.errors),
                blockClass: 'custom-block-class',
              });
            } else {
              this.flashMessage.show({
                status: 'error',

                message: 'Unable to Update Your Business',
                blockClass: 'custom-block-class',
              });
              console.log({ err: err });
            }
            loader.hide();
            resolve(false);
          });
      });
    },

    flashErrors(errors) {
      let err = '';
      Object.values(errors).forEach((element) => {
        err = element[0];
      });

      return err;
    },

    chooseProfile1: function() {
      document.getElementById("profile1").click();
    },

    chooseProfile2: function() {
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

    chooselogo: function() {
      document.getElementById("logo").click();
    },

    showModal() {
      this.$refs['modal-3'].show();
    },
    hideModal() {
      this.$refs['modal-3'].hide();
    },

    choseModal() {
      if (this.useas == '') {
        this.useas = 'person';
        this.selectedusecase = this.useas;
      } else {
        this.selectedusecase = this.useas;
      }

      this.first_page = false;
    },
  },

  created() {
    this.mapbox = Mapbox;
  },
  mounted() {
    this.locateGeoLocation();

    this.categories();

    this.Country();

    // this.profileBusiness();
  },

  components: {
    Multiselect,
    VuePhoneNumberInput,
    MglMap,
    MglGeocoderControl,
    MglMarker,
  },

  computed: {
    selectedKeywords: function() {
      let selectedUsers = [];
      this.business_keyword.forEach((item) => {
        selectedUsers.push(item.id);
      });
      return selectedUsers;
    },

    Old_profilebusiness: function() {
      return this.$store.state.profile.profileBusiness;
    },

    selectedcategories: function() {
      let selectedUsers = [];

      this.multiselecvalue.forEach((item) => {
        if (item.id) {
          selectedUsers.push(item.id);
        } else {
          selectedUsers.push(item.category_id);
        }
      });
      return selectedUsers;
    },
    selectedsubcategories: function() {
      let sub_cat = [];

      this.filterselectvalue.forEach((item) => {
        if (item.subcategory_id) {
          sub_cat.push(item.subcategory_id);
        } else {
          sub_cat.push(item.subcategoryId);
        }
      });
      return sub_cat;
    },

    selectedfilters: function() {
      let sub_cat = [];

      this.select_filterss.forEach((item) => {
        if (item.filter_id) {
          sub_cat.push(item.filter_id);
        } else {
          sub_cat.push(item);
        }
      });
      return sub_cat;
    },

    selectedcountry: function() {
      let sub_cat = [];
      this.country.forEach((item) => {
        if (item.country_id) {
          sub_cat.push(item.country_id);
        } else {
          sub_cat.push(item.id);
        }
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
    selectedlocality: function() {
      let sub_cat = [];
      console.log('loging localities');
      console.log(this.locality);
      this.locality.forEach((item) => {
        if (item.neighborhood_id) {
          sub_cat.push(item.neighborhood_id);
        } else {
          sub_cat.push(item.id);
        }
      });
      return sub_cat;
    },
    pcategories() {
      return this.$store.state.auth.categories;
    },

    scategories() {
      return this.$store.state.auth.subcategories;
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
  },
};
import 'vue-form-wizard/dist/vue-form-wizard.min.css';
</script>

<style scoped>
@import url("https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css");
@import url("https://api.tiles.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css");
@import url("https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css");
@import url("https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.css");
.others {
  position: absolute;
  right: 0px;
}

.inline-flex {
  display: inline-flex;
}
#geocoder {
  z-index: 1;
  margin: 20px;
}

.username {
  color: black;
}
.colorblack {
  color: black;
}
.logo-img {
  width: 60px;
}
@media only screen and (max-width: 768px) {
  .btn {
    font-size: 10px;
  }
  .text-lost {
    flex-basis: 70%;
    padding-left: 10px;
    font-size: 12px;
  }
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
.picture {
  border-radius: 10px;
  width: 48%;
  flex-basis: 40%;
}
.text-lost {
  flex-basis: 90%;
  padding-left: 30px;
}
.colum {
  justify-content: space-around;
}
.chart {
  display: block;
  height: 315px;
  width: 400px;
}
.text-design {
  line-height: 40px;
}
.bg-dark {
  background-color: #3d8d79 !important;
}
@media (max-width: 576px) {
  .lb-grid {
    height: 200px;
  }
  .corps {
    margin-top: 2rem !important;
  }
}
@media (min-width: 576px) {
  .lb-grid {
    height: 300px;
  }
}
@media (min-width: 768px) {
  .lb-grid {
    height: 350px;
  }
}
@media (min-width: 992px) {
  .lb-grid {
    height: 400px;
  }
}
@media (min-width: 1200px) {
  .lb-grid {
    height: 500px;
  }
  .corps {
    margin-top: 6rem !important;
  }
}
@media (min-width: 1400px) {
  .lb-grid {
    height: 500px;
  }
  .corps {
    margin-top: 6rem !important;
  }
}
@media only screen and (min-width: 768px) {
  .center-img {
    margin-right: -60px;
  }
}
.card {
  color: orange;
}
.s-button {
  align-content: center;
  text-align: center;
  padding: 15px;
}
@media only screen and (max-width: 768px) {
  .a-flex {
    margin-right: -15px;
  }
  .title {
    font-size: 16px;
    color: black;
    line-height: 35px;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  .textt {
    color: #000;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 12px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;
    font-weight: normal;
    line-height: 20px;
    font-style: normal;
    padding: 1px;
    text-align: left;
    padding-left: 10px;
    margin-right: -5px;
    line-height: 25px;
  }
  .location {
    margin-bottom: 30px;
  }
  .r-image {
    border-radius: 8px;
    height: 100px;
    width: 100px;
  }
}
@media only screen and (min-width: 768px) {
  .title {
    font-size: 20px;
    color: black;
    line-height: 35px;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  .textt {
    color: #000;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 12px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;
    font-weight: normal;
    line-height: 20px;
    font-style: normal;
    padding: 1px;
    text-align: left;
    margin-left: 70px;
    margin-right: -5px;
    line-height: 25px;
  }
  .location {
    margin-bottom: 30px;
  }
  .r-image {
    border-radius: 8px;
    height: 160px;
    width: 160px;
  }
}
.stock {
  color: green;
}
.ico {
  margin-right: 5px;
}
@media only screen and (min-width: 768px) {
  .people-style {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background: white;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    margin-bottom: 10px;
    margin-right: 8px;
    padding: 7px;
  }
}
@media only screen and (max-width: 768px) {
  .people-style {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background: white;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    margin-bottom: 10px;
    margin-right: 8px;
    padding: 7px;
  }
}
</style>

<style>
.r-image {
  object-fit: cover;
}
</style>
