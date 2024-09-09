<template>
  <div ref="wrapper" class="main-sub-con">
    <VuePerfectScrollbar class="scrool-area" :settings="settings">
      <div class="container wahala">
        <b-row>
          <b-col cols="12" md="12" lg="12" xl="12">
            <div class="mbl-wrap">
              <b-card-text class="mt-3">
                <b-row>
                  <b-col cols="12" md="12">
                    <div>
                      <div v-if="getUserInfos.id">
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

                            <VuePhoneNumberInput
                              default-country-code="CM"
                              v-model="getUserInfos.phone"
                              required
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
                            {{ $t("settings.Region") }}
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
                          <button class="btn btn-primary" @click="update">
                            {{ $t("settings.Save_Changes") }}
                          </button>
                        </form>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </b-card-text>
            </div>
          </b-col>
          <b-col> </b-col>
        </b-row>
      </div>
    </VuePerfectScrollbar>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import VuePhoneNumberInput from "vue-phone-number-input";

export default {
  components: {
    VuePhoneNumberInput,
    VuePerfectScrollbar
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
      this.$store.state.auth.country.map(dat => {
        country.push({
          value: dat.id,
          text: dat.name
        });
      });
      return country;
    },
    region() {
      let region = [];
      this.$store.state.auth.region.map(dat => {
        region.push({
          value: dat.id,
          text: dat.name
        });
      });
      return region;
    },

    division() {
      let division = [];
      this.$store.state.auth.division.map(dat => {
        division.push({
          value: dat.id,
          text: dat.name
        });
      });
      return division;
    },

    municipality() {
      let municipality = [];
      this.$store.state.auth.municipality.map(dat => {
        municipality.push({
          value: dat.id,
          text: dat.name
        });
      });
      return municipality;
    },

    neighbor() {
      let neighbor = [];
      this.$store.state.auth.locality.map(dat => {
        neighbor.push({
          value: dat.id,
          text: dat.name
        });
      });
      return neighbor;
    }

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
      settings: {
        maxScrollbarLength: 60
      },
      activeTab: 0,
      loading: false,
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
        { value: "female", text: "female" }
      ],
      psw1Strength: 0,
      psw2Strength: 0
    };
  },

  methods: {
    update1Strength(newPass) {
      this.psw1Strength = this.checkPassword(newPass);
    },
    update2Strength(newPass1) {
      this.psw2Strength = this.checkPassword(newPass1);
    },
    checkPassword(pass) {
      let crossMinNum = pass.length > 4 ? 1 : 0;
      let hasNum = /\d/.test(pass) ? 1 : 0;
      let hasLetters = /[a-zA-Z]/.test(pass) ? 1 : 0;
      let hasSymbols = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(pass)
        ? 1
        : 0;
      return crossMinNum + hasNum + hasLetters + hasSymbols;
    },

    userInfos() {
      this.$store
        .dispatch("profileSettingsEdit/userInfos")
        .then(response => {
          this.selected = this.$store.state.profileSettingsEdit.userInfos.payement_method;

          // if(this.$store.state.profileSettingsEdit.userInfos.gender == "male"){

          //   }else { this.selectedGender = 1 }
          this.selectedGender = this.$store.state.profileSettingsEdit.userInfos.gender;
          // this.selectedCounty = this.getUserInfos.country.id;
          // console.log("-----------------"+this.selectedCounty);
        })
        .catch(err => {
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
        .then(response => {
          console.log(response);
          console.log(this.getUserInfos);
          this.flashMessage.show({
            status: "success",
            message: response.data.message
          });
          this.$refs["modal-10"].hide();
          this.userInfos();
        })
        .catch(err => {
          console.log("--------- error: ");
          console.error(err);
        });
    },

    changePayment() {
      let formData1 = new FormData();
      formData1.append("payement_method", this.selected);
      this.$store
        .dispatch("profileSettingsEdit/changePayment", formData1)
        .then(response => {
          console.log(response);
          console.log(this.getUserInfos);
        })
        .catch(err => {
          console.log("--------- error: ");
          console.error(err);
        });
    },

    getCountry() {
      let loader = this.$loading.show({
        container: this.$refs.wrapper,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18"
      });
      this.$store
        .dispatch("auth/country")
        .then(response => {
          console.log(this.country);
        })
        .catch(err => {
          console.log("--------- error: ");
          console.error(err);
        })
        .finally(() => {
          loader.hide();
        });
    },

    changePassword() {
      this.loading = true;
      let formData2 = new FormData();
      formData2.append("check_password", this.currentPass);
      formData2.append("password", this.newPass);
      formData2.append("password_confirmation", this.newPass1);

      if (this.newPass != this.newPass1) {
        this.flashMessage.show({
          status: "warning",
          message: "the password does not match"
        });
        this.loading = false;
      } else {
        this.$store
          .dispatch("profileSettingsEdit/changePassword", formData2)
          .then(response => {
            console.log("------------------------");
            console.log(response.data.message);
            this.flashMessage.show({
              status: "success",
              message: response.data.message
            });
            this.loading = false;
          })
          .catch(err => {
            this.flashMessage.show({
              status: "error",
              message: "An error occured"
            });
            console.log("--------- error: ");
            console.error(err);
            this.loading = false;
          });
      }
    },

    getRegion() {
      console.log(this.country, "id country: ", this.selectedCounty);
      let data = { countryId: this.selectedCounty };
      this.$store
        .dispatch("auth/region", data)
        .then(response => {
          console.log("------------------------");
        })
        .catch(err => {
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
        .then(response => {
          console.log("------------------------");
        })
        .catch(err => {
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
        .then(response => {
          console.log("------------------------");
        })
        .catch(err => {
          console.log("--------- error: ");
          console.error(err);
        });
    },

    getNeighbor() {
      let data = { councilId: this.selectedMunicipality };
      this.$store
        .dispatch("auth/locality", data)
        .then(response => {
          console.log("------------------------");
        })
        .catch(err => {
          console.log("--------- error: ");
          console.error(err);
        });
    },

    redirection() {
      this.$store.dispatch("profileSettingsEdit/redirection").then(response => {
        // this.$router.push({ name: "business_owner", params: { id: 1} }) ;
        this.$router.push(`business_owner/${1}`);
      });
    }
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

  beforeMount() {
    this.userInfos();
  },

  watch: {
    "$store.state.profileSettingsEdit.userInfos": function() {
      this.selectedCounty = this.$store.state.profileSettingsEdit.userInfos.country.id;
      this.selectedRegion = this.$store.state.profileSettingsEdit.userInfos.region.id;

      this.selectedDivision = this.$store.state.profileSettingsEdit.userInfos
        .division
        ? this.$store.state.profileSettingsEdit.userInfos.division.id
        : "";
      this.selectedMunicipality = this.$store.state.profileSettingsEdit
        .userInfos.council
        ? this.$store.state.profileSettingsEdit.userInfos.council.id
        : "";
      this.selectedNeighbor = this.$store.state.profileSettingsEdit.userInfos
        .neigborhood
        ? this.$store.state.profileSettingsEdit.userInfos.neigborhood.id
        : "";

      this.getCountry();
      this.getRegion();
      this.getDivision();
      this.getMunicipality();
      this.getNeighbor();
    }
  },

  mounted() {
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
  }
};
</script>

<style>
.mbl-wrap {
  height: 100%;
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

.main-sub-con {
  height: 800px;

  overflow: hidden;
}
.scrool-area {
  height: inherit;
}
</style>
