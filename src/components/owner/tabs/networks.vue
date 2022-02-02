<template>
  <div class="t-color">
    <div>
      <fas-icon class="icons" :icon="['fas', 'project-diagram']" size="lg" />
      <span class="t-color"> {{ $t("profileowner.Network") }} </span>

      <b-button
        v-if="type == 'others'"
        class="btn btn-outline-primary pull-right float-right mb-2 blec-font"
        style="margin-top: -6px"
        @click="showmodal(true, 'add')"
        >{{ $t("profileowner.Add_Network") }}</b-button
      >

      <hr />
      <b-row>
        <b-col
          cols="12"
          md="12"
          lg="6"
          class="p-0 pr-1 mb-2"
          v-for="(network, index) in profileNetworks"
          :key="index"
        >
          <div class="people-style shadow h-100">
            <div class="float-right others" 
            v-if="type == 'others' ? network.is_owner ? true:false : false">
              <b-dropdown
                size="lg"
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
              
              >
                <template #button-content>
                  <b-icon
                    icon="three-dots-vertical"
                    variant="primary"
                    class="icon-size"
                  ></b-icon>
                </template>
                <b-dropdown-item
                  @click="showEditNetwork(network)"
                  v-b-modal.updateBusinessModal
                  variant=""
                  >{{$t("profileowner.Edit")}}</b-dropdown-item
                >
                <b-dropdown-item
                 @click="selectNetwork(network)"
                 v-b-modal.deleteBusinessModal
                 no-stacking
                >{{$t("profileowner.Delete")}}</b-dropdown-item>
              </b-dropdown>
            </div>

            <div class="inline-flex">
              <div>
                <div class="center-img">
                  <img :src="network.image" class="r-image" />
                </div>
              </div>

              <div>
                <p class="textt text">
                  <strong class="title">
                    <router-link :to="'/network/' + network.id">
                      {{ network.name }}
                      <span>{{ `${network.is_owner ? network.is_approve ? '(Approved)' :'(UnApproved)' : ''}` }}</span>
                    </router-link>
                  </strong>
                  <br />
                  <!--                    
                      
                      <span class="m-1" v-for=" cat in network.assign_categories" :key="cat.id "> {{cat.name}}  </span> -->
                  <br />

                  {{ network.member_count }} Community <br />

                  <span class="location">
                    <b-icon-geo-alt class="ico"></b-icon-geo-alt>
                    {{ network.city }} {{ network.country }}
                    {{ network.address }}
                  </span>
                  <br />

                  <read-more
                    :more-str="$t('search.read_more')"
                    class="readmore"
                    :text="network.description"
                    link="#"
                    :less-str="$t('search.read_less')"
                    :max-chars="100"
                  >
                  </read-more>
                </p>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>

    <infinite-loading
      :identifier="infiniteId"
      ref="infiniteLoading"
      @infinite="infiniteHandler"
    ></infinite-loading>

    <div class="h-100 w-100" v-if="networks.length < 1 && !loader">
      <div class="mx-auto text-center my-5" v-if="type == 'others'">
        <h2 class="my-3">
          {{ $t("profileowner.Build_networks_around_your_Business") }}
        </h2>
        <p class="my-2">
          {{
            $t(
              "profileowner.Create_network_to_stay_in_touch_with_just_the_people"
            )
          }}
        </p>
        <p class="my-2">
          {{
            $t("profileowner.you_want_Engage_share_Make_Plans_and_much_more")
          }}
        </p>
        <p class="my-3">
          <b-button @click="showmodal(true, 'add')" variant="primary">{{
            $t("profileowner.Add_Network")
          }}</b-button>
        </p>
      </div>
      <div class="mx-auto text-center my-5" v-else>
        <p class="my-2" v-if="!networks.length">
          {{$t("profileowner.No_network_found")}}
        </p>
      </div>
    </div>

    <b-modal
      hide-footer
      :title="editNet ? $t('profileowner.Edit_Network') : $t('profileowner.Add_Network')"
      size="lg"
      v-model="showModal"
      ref="netmodal"
    >
      <b-container>
        <b-form>
          <div
            v-if="!editNet"
            class="row sub-sidebar-2 pending-post-view mt-4 pb-0"
          >
            <div
              class="
                col-md-12 col-lg-12
                d-flex
                align-items-stretch
                mb-lg-0
                styling
              "
            >
              <a
                class="nav-link text-dark"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <b-icon-info-circle-fill scale="1.5"></b-icon-info-circle-fill>
              </a>
              <div class="post-pending pt-2">
                <p>
                  {{ $t("profileowner.Approval_Required") }} <br />
                  {{
                    $t(
                      "profileowner.Bridge_Africa_admin_will_review_your_request"
                    )
                  }}
                  {{ $t("profileowner.to_create_a") }}
                  {{ $t("profileowner.network") }} {{ $t("profileowner.and") }}
                  {{ $t("profileowner.notify_you") }}
                  {{ $t("profileowner.upon_approval_you_can_the_change_the") }}
                  {{ $t("profileowner.network_settings") }}
                  {{ $t("profileowner.and") }}
                  {{ $t("profileowner.invite_people_to_join_your_network") }}
                </p>
              </div>
            </div>
          </div>
          <b-row>
            <b-col md="6">
              <b-form-group
                label-cols-lg="12"
                :label="$t('profileowner.Network_Name')"
                label-size="md"
                label-class=" pt-0 "
                class="mb-0"
              >
                <b-form-input
                  v-model="createdNetwork.name" 
                  id="network_name"
                  placeholder=""
                  required
                >
                </b-form-input>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <div>
                <label class="typo__label">
                  {{ $t("profileowner.Category") }}
                </label>
                <multiselect
                  v-model="multiselecvalue"
                  :placeholder="$t('profileowner.Search_or_add_a_tag')"
                  label="name"
                  track-by="id"
                  :options="pcategories"
                  :multiple="true"
                  :taggable="true"
                ></multiselect>
              </div>
            </b-col>

            <b-col md="6">
              <b-form-group
                label-cols-lg="12"
                :label="$t('profileowner.Network_Address')"
                label-size="md"
                label-class=" pt-0"
                class="mb-0"
              >
              {{createdNetwork.address}}
                <!-- <b-form-input
                  v-model="createdNetwork.address"
                  id="network_name"
                  placeholder=""
                  required
                >
                </b-form-input> -->

                 <div class="" style="height: 200px; overflow:hidden">
                  <AutocompleteLocation
                  
                    :region="region"
                    @get-address-details="getGeoCoderResult"
                  />
                </div>

              </b-form-group>
            </b-col>

            <b-col md="6">
              <div class="form-group">
                <label for="country" class="username">
                  {{ $t("profileowner.Country") }} :</label
                ><br />
                <multiselect
                  v-model="country"
                  @input="Region"
                  :placeholder="$t('profileowner.Search')"
                  label="name"
                  track-by="id"
                  :options="countries"
                  :multiple="false"
                ></multiselect>
              </div>
            </b-col>
            <b-col md="6">
              <div class="form-group">
                <label for="country" class="username">
                  {{ $t("profileowner.Region") }} :</label
                ><br />

                <multiselect
                  v-model="region"
                  @input="Division"
                  :placeholder="$t('profileowner.Search')"
                  label="name"
                  track-by="id"
                  :options="regions"
                  :multiple="false"
                ></multiselect>
              </div>
            </b-col>
            <b-col md="6">
              <div class="form-group">
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
                  :multiple="false"
                ></multiselect>
              </div>
            </b-col>
            <b-col md="6">
              <div class="form-group">
                <label for="country" class="username">
                  {{ $t("profileowner.Municipality") }} :</label
                ><br />

                <multiselect
                  v-model="municipality"
                  @input="Locality"
                  :placeholder="$t('profileowner.Search')"
                  label="name"
                  track-by="id"
                  :options="municipalities"
                  :multiple="false"
                ></multiselect>
              </div>
            </b-col>
            <b-col md="6">
              <div class="form-group">
                <label for="Neighbor" class="username">
                  {{ $t("profileowner.Neighbor") }} :
                </label ><br />
                <multiselect
                  v-model="locality"
                  :placeholder="$t('profileowner.Search')"
                  label="name"
                  track-by="id"
                  :options="localities"
                  :multiple="false"
                ></multiselect>
              </div>
            </b-col>
            <b-col md="6">
              <b-form-group
                label-cols-lg="12"
                :label="$t('profileowner.City')"
                label-size="md"
                label-class=" pt-0"
                class="mb-0"
              >
                <b-form-input
                  v-model="createdNetwork.city"
                  id="network_name"
                  placeholder=""
                  required
                >
                </b-form-input>
              </b-form-group>
            </b-col>




             <b-col md="6">
              <b-form-group
                label-cols-lg="12"
                :label="$t('auth.email')"
                label-size="md"
                label-class=" pt-0"
                class="mb-0"
              >
                <b-form-input
                  v-model="createdNetwork.email"
                  id="network_email"
                  placeholder=""
                  required
                >
                </b-form-input>
              </b-form-group>
            </b-col>



            <b-col md="6" class="pt-3">
              <b-form-group
                label-cols-lg="12"
                :label="$t('profileowner.Primary_Phone')"
                label-size="md"
                label-class="pt-0"
                class="mb-0"
              >
                <VuePhoneNumberInput
                  default-country-code="CM"
                  v-model="createdNetwork.primary_phone"
                  required
                />
              </b-form-group>
            </b-col>
            <b-col md="6" class="pt-3">
              <b-form-group
                label-cols-lg="12"
                :label="$t('profileowner.Secondary_Phone')"
                label-size="md"
                label-class=" pt-0"
                class="mb-0"
              >
                <VuePhoneNumberInput
                  default-country-code="CM"
                  v-model="createdNetwork.secondary_phone"
                  required
                />
              </b-form-group>
            </b-col>
            <b-col md="6" class="pt-3">
              <b-form-group
                label-cols-lg="12"
                :label="$t('profileowner.Brief_Description')"
                label-size="md"
                label-class=" pt-0"
                class="mb-0"
              >
                <b-form-textarea
                  id="textarea"
                  v-model="createdNetwork.description"
                  :placeholder="$t('profileowner.Enter_something')"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>
            </b-col>
            <b-col md="6" class="pt-3">
              <b-form-group
                label-cols-lg="12"
                :label="$t('profileowner.Purpose_Of_Network')"
                label-size="md"
                label-class=" pt-0"
                class="mb-0"
              >
                <b-form-textarea
                  id="textarea"
                  v-model="createdNetwork.purpose"
                  placeholder=""
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>
            </b-col>
            <b-col md="6" class="pt-3">
              <b-form-group
                label-cols-lg="12"
                :label="$t('profileowner.Special_Needs')"
                label-size="md"
                label-class=" pt-0"
                class="mb-0"
              >
                <b-form-textarea
                  id="textarea"
                  v-model="createdNetwork.special_needs"
                  placeholder=" "
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                label-cols-lg="12"
                :label="$t('profileowner.Network_Image')"
                label-size="md"
                label-class="pt-0"
                class="mb-0"
              >
                <input
                  @change="onLogoChangge"
                  hidden
                  type="file"
                  id="net_pic"
                  ref="net_pic"
                  accept="image/*"
                />

                <div id="preview">
                  <img v-if="logoimg_url" :src="logoimg_url" />
                </div>
                <br />
                <div class="text-center">
                  <b-button
                    v-if="logoimg_url"
                    @click="chooseNlogo()"
                    variant="primary"
                    class="mt-3 text-center"
                  >
                    {{ $t("profileowner.change_Image") }}
                  </b-button>
                </div>

                <div
                  class="image-upload-wrap"
                  v-if="!logoimg_url"
                  @click="chooseNlogo()"
                >
                  <div class="drag-text">
                    <i class="fa fa-plus"> </i>
                    <h3 class="username">
                      {{ $t("profileowner.Business_Logo") }}
                    </h3>
                  </div>

                  <div></div>
                </div>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                label-cols-md="6"
                :label="$t('profileowner.Allow_Business_to_join_network')"
                label-size="md"
                label-class=" pt-0"
                class="mb-0"
              >
                <b-form-checkbox
                  :value="1"
                  :unchecked-value="0"
                  v-model="createdNetwork.allow_business"
                  name="check-button"
                  switch
                >
                </b-form-checkbox>
              </b-form-group>
            </b-col>
          </b-row>

          <b-alert :show="success.state" variant="info">
            {{ success.msg }}</b-alert
          >
          <b-spinner v-if="loader" variant="primary"></b-spinner>
          <b-button @click="action" class="mt-2 button-btn" variant="primary">
            {{editNet ? $t("profileowner.Edit_Network") : $t("profileowner.Add_Network")}}
          </b-button>
        </b-form>
      </b-container>
    </b-modal>

    <b-modal
      v-model="viewnetwork"
      id="modal-1"
      :title="chosenNetwork.name"
      hide-footer
    >
      <lightbox
        visible="true"
        css=" h-10"
        :items="chosenNetwork.image"
      ></lightbox>
      <p class="text-pop">
        <strong class="net-title">
          <router-link to="/businessfollower">
            {{ chosenNetwork.name }}
          </router-link>
        </strong>
        <br />
        {{ chosenNetwork.network_category }}
        <br />
        {{ chosenNetwork.member_count }} <br />

        <span class="location">
          <b-icon-geo-alt class="ico"></b-icon-geo-alt>
          {{ chosenNetwork.address }}
        </span>
        <br />

        {{ chosenNetwork.description }}
      </p>
    </b-modal>

    <b-modal id="deleteBusinessModal" title="Do you really want to delete network!!" centered hide-footer no-stacking>
      <b-row>
        <b-col><b-button class="mt-3" variant="success" block @click="$bvModal.hide('deleteBusinessModal')">Cancel</b-button></b-col>
        <b-col><b-button class="mt-3" variant="primary" block v-b-modal.deleteBusinessModal2>Approve</b-button></b-col>
      </b-row>
    </b-modal>

    <b-modal id="deleteBusinessModal2" title="Any particular reason why you want to delete network?" centered hide-footer>
      <b-form @submit.prevent="deleteNetwork(selectedNetwork)">
        <p>
          <b-form-textarea
            id="textarea"
            v-model="textReason"
            placeholder="Reason for deletion..."
            rows="3"
            max-rows="6"
            :state="textReason.length >= 10"
            no-resize
            required
          ></b-form-textarea>
        </p>
        <b-row>
          <b-col><b-button class="mt-3" variant="primary" type="submit" @click="$bvModal.hide('deleteBusinessModal2')" block>Delete</b-button></b-col>
        </b-row>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import Multiselect from "vue-multiselect";
import VuePhoneNumberInput from "vue-phone-number-input";
import AutocompleteLocation from "@/components/AutocompleteLocation";
export default {

  props:{
    type: {
      type: String,
      default: () => 'others'
    }
  },

  data() {
    return {
      page: 1,
      multiselecvalue: [],
      infiniteId: 1,
      logoimg_url: null,
      profileNetworks: [],
      BaseURL: process.env.VUE_APP_API_URL,
      showModal: false,
      selectedFile: "",
      editNet: false,
      logo: null,
      country: [],
      region: [],
      division: [],
      municipality: [],
      locality: [],
      textReason: "",
      selectedNetwork: null,

      dat: true,
      networks: [],
      viewnetwork: false,
      loader: false,
      success: {
        state: false,
        variant: "",
        msg: "",
      },
      createdNetwork: {
        name: "",
        description: "",
        neighbourhood: "",
        city: "",
        network_category: "",
        purpose: "",
        primary_phone: "",
        email: "",
        country_id: 0,
        network_category_id: 0,
        secondary_phone: "",
        special_needs: "",
        address: "",
        image: "",
        allow_business: 0,
      },
      chosenNetwork: {
        name: "",
        description: "",
        neighbourhood: "",
        city: "",
        network_category: "",
        purpose: "",
        email: "",
        country_id: 0,
        network_category_id: 0,
        primary_phone: "",
        secondary_phone: "",
        special_needs: "",
        address: "",
        image: "",
        allow_business: 0,
      },
    };
  },

  components: {
    Multiselect,
    VuePhoneNumberInput,
    AutocompleteLocation
  },

  mounted() {
    this.Country();
    this.categories();
  },

  computed: {
    old_profileNetworks: function () {
      return this.$store.state.profile.profilenetwork;
    },

    pcategories() {
      return this.$store.state.auth.categories;
    },

    selectedcategories: function () {
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

    pagee: function () {
      return this.page;
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

    selectedcountry: function () {
      return this.country.id;
    },
    selectedregion: function () {
      return this.region.id;
    },

    selecteddivision: function () {
      return this.division.id;
    },
    selectedmunicipality: function () {
      return this.municipality.id;
    },
    selectedlocality: function () {
      return this.locality.id;
    },
  },

  methods: {

    getGeoCoderResult(response) {console.log(response);
      this.coordinates = response.coordinates;
      this.createdNetwork.address = response.address;
      console.log("yoo mother fuckers");
      console.log(response);
    },

    flashErrors(errors) {
      let err = "";
      Object.values(errors).forEach((element) => {
        err = element[0];
      });

      return err;
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

    netCategory(category) {
      let cat = "";

      category.forEach((item) => {
        cat = cat + item + ",";
      });

      return cat;
    },

    chooseNlogo() {
      document.getElementById("net_pic").click();
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

    onLogoChangge(e) {
      this.logo = e.target.files[0];
      const logofile = e.target.files[0];
      this.logoimg_url = URL.createObjectURL(logofile);
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

    getNetworks() {
      this.loader = true;
      axios
        .get("profile/user/networks")
        .then((res) => {
          this.loader = false;
          this.networks = res.data.data;
        })
        .catch((err) => {
          this.loader = false;
        });
    },

    // getNetworks() {
    //   console.log("network loading !!!!!");
    //   this.$store
    //     .dispatch("profile/profileNetwork")
    //     .then(() => {
    //       console.log("hey yeah");
    //     })
    //     .catch((err) => {
    //       console.log({ err: err });
    //     });
    // },

    infiniteHandler($state) {
      console.log("network?page=" + this.page);

      let url = this.type == 'others' ? "network?page=" + this.page : 
`business/network/${this.$route.params.id}/${this.page}`
      
      if (this.page == 1) {
        this.profileNetworks.splice(0);
      }

      this.$store
        .dispatch("profile/loadMore", url)

        .then(({ data }) => {
          if (data.data.length) {
            this.page += 1;

            this.profileNetworks.push(...data.data);
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch((err) => {
          console.log({ err: err });

          if (err.response.status == 422) {
            this.flashMessage.show({
              status: "error",

              message: this.flashErrors(err.response.data.errors),
              blockClass: "custom-block-class",
            });
          } else {
            this.flashMessage.show({
              status: "error",

              message: err.response.statusText,
              blockClass: "custom-block-class",
            });
            console.log({ err: err });
          }
        });
    },

    // Add network to the database but doesn't work correctly for now
    addNetwork(newNetwork) {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.preview,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });

      axios
        .post("network", newNetwork)
        .then((res) => {
          loader.hide();
          this.success.state = true;
          this.success.msg = "Operation was successful !!";

          this.flashMessage.show({
            status: "success",

            message: "Network created",

            blockClass: "custom-block-class",
          });

          this.$refs["netmodal"].hide();

          setTimeout(() => {
            this.success.state = false;
          }, 5000);

          this.getNetworks();

          this.page = 1;
          this.infiniteId += 1;
        })
        .catch((err) => {
          console.log({ err: err });
          this.success.state = true;
          this.flashMessage.show({
            status: "error",

            message: "Something went wrong",

            blockClass: "custom-block-class",
          });
          this.success.msg = "Something wen't wrong !!";
          setTimeout(() => {
            this.success.state = false;
          }, 5000);
          loader.hide();
        });
    },

    // Edit a network
    editNetwork(editedNetwork) {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.preview,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });

      axios
        .post(`network/${editedNetwork.id}`, editedNetwork.data)
        .then((res) => {
          this.success.state = true;
          this.success.msg = "Operation was successful !!";
          setTimeout(() => {
            this.success.state = false;
          }, 5000);
          this.profileNetworks = this.profileNetworks.map(net => {
            if (net.id == editedNetwork.id)
              return res.data.data
            else
              return net
          })
          //this.getNetworks();
          loader.hide();
          this.showmodal(false, "edit")
          console.log('update sucess')
        })
        .catch((err) => {
          console.log({ err: err });
          this.success.state = true;
          this.success.msg = "Something wen't wrong !!";

          if (err.response.status == 422) {
            this.flashMessage.show({
              status: "error",
              message: this.flashErrors(err.response.data.errors),
              blockClass: "custom-block-class",
            });
          } else {
            this.wrapperError(err.response.data.errors).map(er => {
              this.flashMessage.show({
                status: "error",
                message: er,
                blockClass: "custom-block-class",
              });
            })
              console.log({ err: err });
            }

          loader.hide();
          setTimeout(() => {
            this.success.state = false;
          }, 5000);
          this.loader = false;
        });
    },

    wrapperError(error){
      return Object.values(error).map(err => err[0])
    },

    // delete a network
    deleteNetwork(network) {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.preview,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });

      console.log(this.textReason);
      let fd = new FormData();
      fd.append("reason", this.textReason)
      axios
        .post(`network/${network.id}`, fd)
        .then((res) => {
          console.log(res);
          this.getNetworks();
          loader.hide();
          this.flashMessage.show({
            status: "success",
            message: "Operation was successful !!"
          });  
        })
        .catch((err) => {
          this.loader = false;
          loader.hide();
          this.flashMessage.show({
            status: "error",
            message: "Something wen't wrong !!"
          });
        });
    },

    // Action handler
    action() {
      console.log(this.createdNetwork);
      const fd = new FormData();
      fd.append("business_id", "1");
      fd.append("name", this.createdNetwork.name);
      fd.append("address", this.createdNetwork.address);
      // fd.append("neighbourhood", this.createdNetwork.neighbourhood);
      fd.append("city", this.createdNetwork.city);
      fd.append("country_id", 2);
      fd.append(
        "primary_phone",
        this.createdNetwork.primary_phone.split(" ").join("")
      );
      fd.append(
        "secondary_phone",
        this.createdNetwork.secondary_phone.split(" ").join("")
      );
      fd.append("email",  this.createdNetwork.email);
      fd.append("network_categories", this.selectedcategories);

      fd.append("description", this.createdNetwork.description);
      fd.append("purpose", this.createdNetwork.purpose);
      fd.append("special_needs", this.createdNetwork.special_needs);
      fd.append("region_id", this.selectedregion);
      fd.append("country_id", this.selectedcountry);
      fd.append("division_id", this.selecteddivision);
      fd.append("council_id", this.selectedmunicipality);
      fd.append("neighbourhood", this.selectedlocality);
      fd.append("image", this.logo);

      fd.append("allow_business", this.createdNetwork.allow_business);
      if (this.editNet) {
        fd.append("_method", "POST");
        let data = {
          data: fd,
          id: this.createdNetwork.id,
        };
        this.editNetwork(data);
      } else {
        this.addNetwork(fd);
      }
    },

    //View network on pop up modal
    viewNetwork(network) {
      this.chosenNetwork = network;
      this.viewnetwork = true;
    },
    showmodal(state, arg) {
      this.showModal = state;
      if (arg == "edit") {
        this.editNet = true;
      } else {
        this.editNet = false;
        this.createdNetwork.image = "";
        this.createdNetwork.name = "";
        this.createdNetwork.address = "";
        this.createdNetwork.neighbourhood = "";
        this.createdNetwork.description = "";
        this.createdNetwork.purpose = "";
        this.createdNetwork.special_needs = "";
        this.createdNetwork.allow_business = 0;
      }
    },

    //Show Edit network modal
    showEditNetwork(network) {
      axios
        .get("network/" + network.id + "/edit-infos")
        .then(({ data }) => {
          console.log(data);

          this.country = data.data.country[0];
          this.region = data.data.region[0];
          this.division = data.data.division[0];
          this.municipality = data.data.council[0];
          this.locality = data.data.locality[0];
        })
        .catch((err) => {
          console.log({ err: err });
        });

      this.createdNetwork.id = network.id;
      this.createdNetwork.image = network.image;
      this.createdNetwork.name = network.name;
      this.createdNetwork.email = network.email;
      this.createdNetwork.country_id = network.country_id;
      this.createdNetwork.primary_phone = network.primary_phone;
      this.createdNetwork.city = network.city;
      this.createdNetwork.secondary_phone = network.secondary_phone;
      this.createdNetwork.network_category_id = network.network_category_id;
      this.createdNetwork.business_id = network.business_id;
      this.createdNetwork.address = network.address;
      this.createdNetwork.neighbourhood = network.neighbourhood;
      this.createdNetwork.network_categories = this.netCategory(
        network.assign_categories
      );
      this.createdNetwork.description = network.description;
      this.createdNetwork.purpose = network.purpose;
      this.createdNetwork.special_needs = network.special_needs;
      this.createdNetwork.allow_business = network.allow_business;

      this.createdNetwork.country = network.country;
      this.createdNetwork.region = network.region;
      this.createdNetwork.division = network.division;
      this.createdNetwork.municipality = network.municipality;
      this.createdNetwork.localities = network.localities;

      this.Region();
      this.Division();
      this.Municipality();
      this.Locality();
      this.showmodal(true, "edit");
    },
    selectImage(e) {
      this.createdNetwork.image = e.target.files[0];
    },
    selectNetwork(n) {
      this.selectedNetwork = n;
      console.log(this.selectedNetwork);
    },
  },
};
</script>

<style scoped>
.no-arrow {
  -moz-appearance: textfield;
}
.no-arrow::-webkit-inner-spin-button {
  display: none;
}
.no-arrow::-webkit-outer-spin-button,
.no-arrow::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.inline-flex {
  display: inline-flex;
}

@media only screen and (max-width: 768px) {
  .blec-font {
    font-size: 10px;
  }
}
.spin {
  width: 7rem;
  height: 7rem;
}
.button-btn {
  float: right;
}
.styling {
  padding-left: 0;
  padding-top: 3px;
}
.load {
  display: flex;
  justify-content: center;
}
.post-pending {
  font-size: 12;
  text-align: left;
}
.no-network {
  width: 100%;
  height: 500px;
  background-color: #ccc;
  border-radius: 10px;
}

.white-box {
  position: relative;
  width: 60%;
  background-color: #fff;
  min-height: 200px;
  left: 200px;
  top: 100px;
  padding: 20px;
}

.prod {
  max-width: 14rem;
  cursor: pointer;
}

h2,
p {
  text-align: center;
}

.networks {
  display: flex;
  flex-wrap: wrap;
}

.approved {
  color: green;
}
.pending {
  color: yellow;
}

.network:hover .overlay {
  opacity: 0.5;
  color: #e75d29;
}

.network:hover .text-static {
  display: none;
}

.btn-view {
  background-color: transparent;
  border: none;
  color: white;
}

.btn-view:focus {
  outline-color: transparent;
  border: none;
}

.network-name {
  color: #e75d29;
  text-align: center;
}

.pic-name {
  position: relative;
  left: -200px;
  color: white;
  font-weight: 200;
  opacity: 0;
}

.sp:hover .pic-name {
  opacity: 1;
}

.pic {
  cursor: pointer;
  background-color: transparent;
}
.pic:hover {
  box-shadow: 5px 10px 8px 2px #888888;
}

.create {
  position: relative;
  height: 175px;
  color: #fff;
  background-color: #bbb;
  padding: 20px;

  margin: 30px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 10;
  margin-top: -0px;
}

.others {
  position: absolute;
  right: 0px;
}

.network {
  height: 190px;
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
  .networks {
    position: relative;
    left: -25px;
  }

  .network {
    margin-top: 20px;
  }

  .create {
    height: 150px;
  }

  .white-box {
    position: relative;
    width: 80%;
    background-color: #fff;
    min-height: 200px;
    left: 35px;
    top: 100px;
    padding: 20px;
  }
}

.row.sub-sidebar-2.pending-post-view {
  background-color: #8bd06c;
  border-color: #000;
  border: solid 3px;
}

@media only screen and (max-width: 760px) {
  h4 {
    font-size: 15px;
  }

  .pop {
    font-size: 15px;
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

.text-show {
  color: #000;
  font-size: 15px;

  text-align: left;

  margin-left: -15px;

  margin-right: -15px;
}
.stock {
  color: green;
}

.b1 {
  width: 100px;
  margin-left: -20px;
}

.b2 {
  width: 120px;

  margin-left: -15px;
}

.ico {
  margin-right: 5px;
}

@media only screen and (min-width: 768px) {
  .btn-text {
    margin-left: 8px;
  }

  .btn-com {
    margin-left: 4px;
  }
  .btn-icon {
    margin-top: 3px;
  }

  .center-img {
    margin-right: -60px;
  }
}

@media only screen and (max-width: 768px) {
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

  .s-button {
    padding: 15px;
    margin-top: -15px;
  }

  .net-title {
    font-size: 16px;
    color: black;

    line-height: 35px;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  .text-pop {
    color: #000;

    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;

    font-weight: normal;
    line-height: 20px;
    font-style: normal;

    padding: 1px;
    text-align: left;

    margin-right: -5px;

    line-height: 25px;
  }
  .textt {
    color: #000;

    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;

    font-weight: normal;
    line-height: 20px;
    font-style: normal;

    padding: 1px;
    text-align: left;
    padding-left: 10px !important;

    margin-right: -5px;

    line-height: 25px;
  }

  .text-pop {
    color: #000;

    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;

    font-weight: normal;
    line-height: 20px;
    font-style: normal;

    padding: 1px;
    padding-left: 10px;
    text-align: left;

    margin-right: -5px;

    line-height: 25px;
  }

  .text {
    color: #000;

    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;

    font-weight: normal;
    line-height: 20px;
    font-style: normal;

    padding: 1px;
    text-align: left;

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
  .net-title {
    font-size: 20px;
    color: black;

    line-height: 35px;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  .text-pop {
    color: #000;

    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;

    font-weight: normal;
    line-height: 20px;
    font-style: normal;

    padding: 1px;
    text-align: left;

    margin-left: -2px;

    margin-right: -5px;

    line-height: 25px;
  }
  .textt {
    color: #000;

    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 14px;
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

.b1 {
  width: 100px;
  margin-left: -20px;
}

.b2 {
  width: 120px;

  margin-left: -15px;
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
    cursor: pointer;
    padding: 7px;
  }

  .btn-network {
    width: 118px !important;
    height: 38px !important ;
    margin-top: -4px !important;
    font-size: 16px;
  }
}

@media only screen and (max-width: 768px) {
  .people-style {
    border-top-left-radius: 5px;

    border-bottom-left-radius: 5px;

    border-top-right-radius: 5px;
    cursor: pointer;
    border-bottom-right-radius: 5px;

    background: white;

    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    margin-bottom: 10px;

    padding: 7px;
  }

  h4 {
    font-size: 15px;
  }
}

@media only screen and (max-width: 720px) {
  .card-body {
    padding: 0px;
  }

  .btn-network {
    width: 90px !important;
    height: 30px !important ;
    margin-top: 0px !important;
    font-size: 12px;
    text-align: center;
    padding: 2px;
  }
}

.t-color {
  color: #000;
}
</style>
