<template>
  <div ref="wrapper">
    <Navbar />

    <div class="container wahala" v-if="getUserInfos">
      <b-row>
        <b-col cols="12" md="12" lg="12" xl="12">
          <div>
            <b-tabs
              pills
              :vertical="vertical"
              class="itzlala"
              nav-wrapper-class="w-15"
              v-model="activeTab"
              lazy
            >
              <!-- NOTIFICATIONS TAB -->
              <b-tab :title="$t('settings.Notifications')">
                <b-card-text class="mt-3">
                  <b-row>
                    <b-col cols="12" md="12">
                      <SettingsNotifications />
                    </b-col>
                  </b-row>
                </b-card-text>
              </b-tab>
              <b-tab :title="$t('settings.General')">
                <b-card-text class="mt-3">
                  <b-row>
                    <b-col cols="12" md="12">
                      <div>
                        <b-table-simple hover small caption-top responsive>
                          <b-tbody v-if="getUserInfos.id">
                            <b-tr>
                              <b-td class="a-text text">
                                {{ $t("settings.Name") }}
                              </b-td>

                              <b-td class="a-text text">
                                <b-link href="#">{{
                                  getUserInfos.name
                                }}</b-link>
                              </b-td>
                            </b-tr>
                            <br />

                            <b-tr>
                              <b-td class="a-text text">
                                {{ $t("settings.Public_url") }}
                              </b-td>

                              <b-td class="text"
                                ><b-link href="#">
                                  http://blec.bridgeafrica.com
                                </b-link>
                              </b-td>
                            </b-tr>

                            <br />

                            <b-tr>
                              <b-td class="a-text text">
                                {{ $t("settings.Email") }}
                              </b-td>

                              <b-td class="a-text text">
                                <b-link href="#">{{
                                  getUserInfos.email
                                }}</b-link>
                              </b-td>
                            </b-tr>
                            <br />

                            <b-tr>
                              <b-td class="a-text text"
                                >{{ $t("settings.Phone") }}
                              </b-td>

                              <b-td class="a-text text">
                                <b-link href="#">{{
                                  getUserInfos.phone
                                }}</b-link>
                              </b-td>
                            </b-tr>
                            <br />

                            <b-tr>
                              <b-td class="a-text text">
                                {{ $t("settings.DOB") }}
                              </b-td>

                              <b-td class="a-text text">
                                <b-link href="#">{{ getUserInfos.dob }}</b-link>
                              </b-td>
                            </b-tr>
                            <br />

                            <b-tr>
                              <b-td class="a-text text">
                                {{ $t("settings.Gender") }}
                              </b-td>

                              <b-td class="a-text text">
                                <b-link href="#">{{
                                  getUserInfos.gender
                                }}</b-link>
                              </b-td>
                            </b-tr>
                            <br />

                            <b-tr>
                              <b-td class="a-text text">
                                {{ $t("settings.Proffession") }}
                              </b-td>

                              <b-td class="a-text text">
                                <b-link href="#">{{
                                  getUserInfos.profession
                                }}</b-link>
                              </b-td>
                            </b-tr>
                            <br />

                            <b-tr>
                              <b-td class="a-text text">
                                {{ $t("settings.Country") }}
                              </b-td>

                              <b-td class="a-text text">
                                <b-link href="#">{{
                                  getUserInfos.country
                                }}</b-link>
                              </b-td>
                            </b-tr>
                            <br />
                            <b-tr>
                              <b-td class="a-text text">
                                {{ $t("settings.Region") }}
                              </b-td>

                              <b-td class="a-text text">
                                <b-link href="#">{{
                                  getUserInfos.region
                                }}</b-link>
                              </b-td>
                            </b-tr>

                            <br />

                            <b-tr>
                              <b-td class="a-text text">
                                {{ $t("settings.Division") }}
                              </b-td>

                              <b-td class="a-text text">
                                <b-link href="#">{{
                                  getUserInfos.division
                                }}</b-link>
                              </b-td>
                            </b-tr>

                            <br />

                            <b-tr>
                              <b-td class="a-text text">
                                {{ $t("settings.Municipality") }}
                              </b-td>

                              <b-td class="a-text text">
                                <b-link href="#">{{
                                  getUserInfos.council
                                }}</b-link>
                              </b-td>
                            </b-tr>

                            <br />

                            <b-tr>
                              <b-td class="a-text tetx">
                                {{ $t("settings.City") }}
                              </b-td>

                              <b-td class="a-text text">
                                <b-link href="#">{{
                                  getUserInfos.city
                                }}</b-link>
                              </b-td>
                            </b-tr>
                            <br />

                            <b-tr>
                              <b-td class="a-text text">
                                {{ $t("settings.Neighbourhood") }}</b-td
                              >

                              <b-td class="a-text text">
                                <b-link href="#">{{
                                  getUserInfos.neigborhood
                                }}</b-link>
                              </b-td>
                            </b-tr>
                            <br />
                            <div>
                              <b-button
                                variant="ligth"
                                class="btn btn-primary button"
                                v-b-modal.modal-10
                                >{{ $t("settings.Edit") }}
                              </b-button>

                              <b-modal
                                id="modal-10"
                                title="$t('settings.Edit_your_information_here')"
                                hide-footer
                              >
                                <form>
                                  <div class="mb-3">
                                    <label class="form-label">{{
                                      $t("settings.Name")
                                    }}</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      v-model="getUserInfos.name"
                                    />
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">{{
                                      $t("settings.Email")
                                    }}</label>
                                    <input
                                      type="email"
                                      class="form-control"
                                      v-model="getUserInfos.email"
                                    />
                                  </div>

                                  <div class="mb-3">
                                    <label class="form-label">{{
                                      $t("settings.Phone")
                                    }}</label>
                                    <input
                                      type="number"
                                      class="form-control"
                                      v-model="getUserInfos.phone"
                                    />
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">{{
                                      $t("settings.DOB")
                                    }}</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      v-model="getUserInfos.dob"
                                    />
                                  </div>
                                  <div class="mb-3">
                                    {{ $t("settings.Gender") }}

                                    <b-form-select
                                      v-model="selectedGender"
                                      :options="genderOptions"
                                    ></b-form-select>
                                  </div>
                                  <div class="mb-3">
                                    {{ $t("settings.Country") }}
                                    <b-form-select
                                      v-model="selectedCounty"
                                      :options="country"
                                      @change="getRegion"
                                    ></b-form-select>
                                  </div>
                                  <div class="mb-3">
                                    {{ $t("settings.Region ") }}
                                    <b-form-select
                                      v-model="selectedRegion"
                                      :options="region"
                                      @change="getDivision"
                                      required
                                    ></b-form-select>
                                  </div>

                                  <div class="mb-3">
                                    {{ $t("settings.Division") }}
                                    <b-form-select
                                      v-model="selectedDivision"
                                      :options="division"
                                      @change="getMunicipality"
                                      required
                                    ></b-form-select>
                                  </div>

                                  <div class="mb-3">
                                    {{ $t("settings.Municipality") }}
                                    <b-form-select
                                      v-model="selectedMunicipality"
                                      :options="municipality"
                                      @change="getNeighbor"
                                      required
                                    ></b-form-select>
                                  </div>

                                  <div class="mb-3">
                                    {{ $t("settings.Neighbourhood") }}
                                    <b-form-select
                                      v-model="selectedNeighbor"
                                      :options="neighbor"
                                      required
                                    ></b-form-select>
                                  </div>

                                  <div class="mb-3">
                                    <label class="form-label">{{
                                      $t("settings.City")
                                    }}</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      v-model="getUserInfos.city"
                                    />
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">{{
                                      message1
                                    }}</label>
                                  </div>
                                  <button
                                    class="btn btn-primary"
                                    @click="update"
                                  >
                                    {{ $t("settings.Save_Changes") }}
                                  </button>
                                </form>
                              </b-modal>
                            </div>
                            <br />

                            <br />
                          </b-tbody>
                        </b-table-simple>
                      </div>
                    </b-col>
                  </b-row>
                </b-card-text>
              </b-tab>

              <b-tab :title="$t('settings.Account_Type')">
                <Website :profileId="getUserInfos.id" />
              </b-tab>

              <b-tab :title="$t('settings.Payment')">
                <Payment :profileId="getUserInfos.id" />
              </b-tab>

              <b-tab title="Blocking">
                <Blocking :profileId="getUserInfos.id" />
              </b-tab>

              <b-tab :title="`${$t('settings.Password')}`">
                <b-card-text class="mt-3 text">
                  <h3 class="username">
                    {{ $t("settings.Change_current_password") }}
                  </h3>
                  <br />

                  <div class="b-bottom">
                    <b-container>
                      <b-form-group
                        label-cols-lg="3"
                        :label="`${$t('settings.Current_password')}`"
                        label-size="md"
                        label-class=" text"
                        class="mb-0"
                      >
                        <b-form-input
                          id="bname"
                          placeholder=""
                          required
                          v-model="currentPass"
                        ></b-form-input>
                      </b-form-group>
                    </b-container>
                  </div>

                  <br />

                  <div class="b-bottom">
                    <b-container>
                      <b-form-group
                        label-cols-lg="3"
                        :label="`${$t('settings.New_password')}`"
                        label-size="md"
                        label-class=" text"
                        class="mb-0"
                      >
                        <b-form-input
                          id="bname"
                          placeholder=""
                          required
                          v-model="newPass"
                        ></b-form-input>
                      </b-form-group>
                    </b-container>
                  </div>

                  <br />

                  <div class="b-bottom">
                    <b-container>
                      <b-form-group
                        label-cols-lg="3"
                        :label="`${$t('settings.Confirm_password')}`"
                        label-size="md"
                        label-class="text"
                        class="mb-0"
                      >
                        <b-form-input
                          id="bname"
                          placeholder=""
                          required
                          v-model="newPass1"
                        >
                        </b-form-input>
                        <br />
                        <p>{{ message }}</p>
                        <br />
                        <button
                          class=" btn btn-primary"
                          @click="changePassword"
                        >
                          {{ $t("settings.change") }}
                        </button>
                      </b-form-group>
                    </b-container>
                  </div>

                  <br />
                </b-card-text>
              </b-tab>
            </b-tabs>
          </div>
        </b-col>
        <b-col> </b-col>
      </b-row>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SettingsNotifications from "@/components/SettingsNotifications.vue";
import Website from "@/components/businessOwner/settings/website";
import Payment from "@/components/businessOwner/settings/payment";
import Blocking from "@/components/owner/settings/blocking";

export default {
  components: {
    Navbar,
    Footer,
    SettingsNotifications,
    Website,
    Payment,
    Blocking,
  },

  computed: {
    vertical() {
      if (this.size > 992) return true;
      return false;
    },
    getUserInfos() {
      return this.$store.state.profileSettingsEdit.userInfos;
    },
    country() {
      let country = [];
      this.$store.state.auth.country.map((dat) => {
        country.push({
          value: dat.id,
          text: dat.name,
        });
      });
      return country;
    },
    region() {
      let region = [];
      this.$store.state.auth.region.map((dat) => {
        region.push({
          value: dat.id,
          text: dat.name,
        });
      });
      return region;
    },

    division() {
      let division = [];
      this.$store.state.auth.division.map((dat) => {
        division.push({
          value: dat.id,
          text: dat.name,
        });
      });
      return division;
    },

    municipality() {
      let municipality = [];
      this.$store.state.auth.municipality.map((dat) => {
        municipality.push({
          value: dat.id,
          text: dat.name,
        });
      });
      return municipality;
    },

    neighbor() {
      let neighbor = [];
      this.$store.state.auth.locality.map((dat) => {
        neighbor.push({
          value: dat.id,
          text: dat.name,
        });
      });
      return neighbor;
    },

    // locality(){

    //    let locality =[];
    //   this.$store.state.auth.locality.map(dat =>{
    //    locality.push({
    //       value: dat.id,
    //       text: dat.name
    //    }
    //     )
    //   })
    //        return locality ;
    // }
  },

  data() {
    return {
      activeTab: 0,
      hasLoad: false,
      size: 0,
      selected: "",
      options: "",
      selectedCounty: "",
      selectedRegion: "",
      selectedDivision: "",
      selectedMunicipality: "",
      selectedNeighbor: "",
      currentPass: "",
      newPass: "",
      newPass1: "",
      selectedGender: "",
      message: "",
      message1: "",
      genderOptions: [
        { value: "male", text: "male" },
        { value: "female", text: "female" },
      ],
    };
  },

  methods: {
    userInfos() {
      this.$store
        .dispatch("profileSettingsEdit/userInfos")
        .then((response) => {
          this.selected = this.$store.state.profileSettingsEdit.userInfos.payement_method;
          console.log("-----------------------" + this.selected);
          // if(this.$store.state.profileSettingsEdit.userInfos.gender == "male"){

          //   }else { this.selectedGender = 1 }
          this.selectedGender = this.$store.state.profileSettingsEdit.userInfos.gender;
          // this.selectedCounty = this.getUserInfos.country.id;
          // console.log("-----------------"+this.selectedCounty);
        })
        .catch((err) => {
          console.log("--------- error: ");
          console.error(err);
        });
    },
    update(e) {
      e.preventDefault();
      console.log(this.getUserInfos.name);
      let formData = new FormData();
      formData.append("name", this.getUserInfos.name);
      formData.append("email", this.getUserInfos.email);
      formData.append("phone", this.getUserInfos.phone);
      formData.append("dob", this.getUserInfos.dob);
      formData.append("gender", this.selectedGender);
      formData.append("country_id", this.selectedCounty);
      formData.append("region_id", this.selectedRegion);
      formData.append("division_id", this.selectedDivision);
      formData.append("council_id", this.selectedMunicipality);
      formData.append("neighborhood_id", this.selectedNeighbor);
      formData.append("profession", "DEV");

      this.$store
        .dispatch("profileSettingsEdit/updateUserInfos", formData)
        .then((response) => {
          console.log(response);
          console.log(this.getUserInfos);
          this.message1 = response.data.message;
          this.userInfos();
        })
        .catch((err) => {
          console.log("--------- error: ");
          console.error(err);
        });
    },

    changePayment() {
      let formData1 = new FormData();
      formData1.append("payement_method", this.selected);
      this.$store
        .dispatch("profileSettingsEdit/changePayment", formData1)
        .then((response) => {
          console.log(response);
          console.log(this.getUserInfos);
        })
        .catch((err) => {
          console.log("--------- error: ");
          console.error(err);
        });
    },

    getCountry() {
      let loader = this.$loading.show({
        container: this.$refs.wrapper,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });
      this.$store
        .dispatch("auth/country")
        .then((response) => {
          console.log(this.country);
          this.hasLoad = true;
        })
        .catch((err) => {
          console.log("--------- error: ");
          console.error(err);
        })
        .finally(() => loader.hide());
    },

    changePassword() {
      let formData2 = new FormData();
      formData2.append("check_password", this.currentPass);
      formData2.append("password", this.newPass);
      formData2.append("password_confirmation", this.newPass1);

      if (this.newPass != this.newPass1) {
        this.message = "the password does not match";
      } else {
        this.$store
          .dispatch("profileSettingsEdit/changePassword", formData2)
          .then((response) => {
            console.log("------------------------");
            console.log(response.data.message);
            this.message = response.data.message;
          })
          .catch((err) => {
            console.log("--------- error: ");
            console.error(err);
          });
      }
    },

    getRegion() {
      let data = { countryId: this.selectedCounty };
      this.$store
        .dispatch("auth/region", data)
        .then((response) => {
          console.log("------------------------");
        })
        .catch((err) => {
          console.log("--------- error: ");
          console.error(err);
        });

      console.log("getregion clicked");
      console.log(this.selectedCounty);
    },

    getDivision() {
      let data = { regionId: this.selectedRegion };
      this.$store
        .dispatch("auth/division", data)
        .then((response) => {
          console.log("------------------------");
        })
        .catch((err) => {
          console.log("--------- error: ");
          console.error(err);
        });
      console.log("getDivision clicked");
      console.log(this.selectedDivision);
    },

    getMunicipality() {
      let data = { divisionId: this.selectedDivision };
      this.$store
        .dispatch("auth/municipality", data)
        .then((response) => {
          console.log("------------------------");
        })
        .catch((err) => {
          console.log("--------- error: ");
          console.error(err);
        });
    },

    getNeighbor() {
      let data = { councilId: this.selectedMunicipality };
      this.$store
        .dispatch("auth/locality", data)
        .then((response) => {
          console.log("------------------------");
        })
        .catch((err) => {
          console.log("--------- error: ");
          console.error(err);
        });
    },

    redirection() {
      this.$store
        .dispatch("profileSettingsEdit/redirection")
        .then((response) => {
          // this.$router.push({ name: "business_owner", params: { id: 1} }) ;
          this.$router.push(`business_owner/${1}`);
        });
    },
    // getLocality(){

    //    this.$store
    //   .dispatch("auth/locality")
    //   .then(response =>{

    //   })
    //   .catch((err) => {

    //       console.log('--------- error: ');
    //       console.error(err);
    //     });
    // }
  },

  mounted() {
    this.userInfos();
    this.getCountry();
    // this.getLocality();

    var that = this;
    window.onresize = function() {
      that.size = window.innerWidth;
    };

    if (that.size == "") {
      that.size = window.innerWidth;
    }
  },

  created() {
    if ("account" === this.$route.query.tab) {
      this.activeTab = 2;
    }
  },
};
</script>

<style>
@media only screen and (max-width: 768px) {
  .wahala .nav-pills .nav-link {
    border-radius: 0.25rem;
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>

<style scoped>
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
