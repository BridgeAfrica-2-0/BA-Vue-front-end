<template>
  <div ref="wrapper">
    <Navbar />
    <div class="container wahala" >
      <b-row>
        <b-col cols="12" md="12" lg="12" xl="12">
          <div class="mbl-wrap">
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

             <b-tab :title="$t('businessowner.Account_Type')">
                <b-card-text> <Website /> </b-card-text
              ></b-tab> 

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
                                  http://www.bridgeafrica.com
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
                                <b-link href="#">
                                  {{ getUserInfos && getUserInfos.country ? getUserInfos.country.name : null}}
                                </b-link>
                              </b-td>
                            </b-tr>
                            <br />
                            <b-tr>
                              <b-td class="a-text text">
                                {{ $t("settings.Region") }}
                              </b-td>

                              <b-td class="a-text text">
                                <b-link href="#">
                                  {{getUserInfos.region ? getUserInfos.region.name : Null}}
                                </b-link>
                              </b-td>
                            </b-tr>

                            <br />

                            <b-tr>
                              <b-td class="a-text text">
                                {{ $t("settings.Division") }}
                              </b-td>

                              <b-td class="a-text text">
                                <b-link href="#">{{
                                  getUserInfos.division ? getUserInfos.division.name : Null
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
                                  getUserInfos.council ? getUserInfos.council.name : Null
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
                                  getUserInfos.neigborhood ? getUserInfos.neigborhood.name : Null
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
                                ref="modal-10"
                                :title="$t('settings.Edit_your_information_here')"
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

              <b-tab :title="$t('settings.Payment')">
                <Payment :profileId="getUserInfos.id" />
              </b-tab>

              <b-tab :title="$t('settings.Blocking')">
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
                          type="password"
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
                        <VuePassword
                          v-model="newPass"
                          id="password1"
                          :strength="psw1Strength"
                          type="password"
                          @input="update1Strength"
                          required
                        />
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
                        <VuePassword
                          v-model="newPass1"
                          id="password2"
                          type="password"
                          :strength="psw2Strength"
                          @input="update2Strength"
                          required
                        />
                        <br />
                        <button
                          class=" btn btn-primary"
                          @click="changePassword"
                        >
                          {{$t("settings.Change")}}
                        </button>
                      </b-form-group>
                    </b-container>
                  </div>

                  <br />
                </b-card-text>
              </b-tab>

              
              <b-tab :title="$t('settings.delete_account')">
                <Delete  />
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
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import SettingsNotifications from '@/components/SettingsNotifications.vue';
import Payment from "@/components/owner/settings/payment";
import Blocking from "@/components/owner/settings/blocking";
import Delete from "@/components/owner/settings/delete";
import Website from "@/components/owner/settings/website";
import VuePassword from 'vue-password';
import VuePhoneNumberInput from "vue-phone-number-input";

export default {
  components: {
    Navbar,
    Footer,
    SettingsNotifications,
    Payment,
    Blocking,
    Website,
    VuePassword,
    Delete,
    VuePhoneNumberInput
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
        { value: "female", text: "female" },
      ],
      psw1Strength: 0,
      psw2Strength: 0,
    };
  },

  methods: {
    update1Strength(newPass){
      this.psw1Strength = this.checkPassword(newPass);
    },
    update2Strength(newPass1){
      this.psw2Strength = this.checkPassword(newPass1);
    },
    checkPassword(pass){
      let crossMinNum = pass.length > 4 ? 1 : 0;
      let hasNum = /\d/.test(pass) ? 1 : 0;
      let hasLetters = /[a-zA-Z]/.test(pass) ? 1 : 0;
      let hasSymbols = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(pass) ? 1 : 0;
      return crossMinNum + hasNum + hasLetters + hasSymbols;
    },

    userInfos() {
      this.$store
        .dispatch("profileSettingsEdit/userInfos")
        .then((response) => {

          
          this.selected = this.$store.state.profileSettingsEdit.userInfos.payement_method;
         
          // if(this.$store.state.profileSettingsEdit.userInfos.gender == "male"){

          //   }else { this.selectedGender = 1 }
          this.selectedGender = this.$store.state.profileSettingsEdit.userInfos.gender;
          // this.selectedCounty = this.getUserInfos.country.id;
          // console.log("-----------------"+this.selectedCounty);
        })
        .catch((err) => {
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
          this.flashMessage.show({
            status: "success",
            message: response.data.message
          });  
          this.$refs['modal-10'].hide()
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
          
        })
        .catch((err) => {
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

      if(this.newPass != this.newPass1){
        this.flashMessage.show({
          status: "warning",
          message: "the password does not match"
        }); 
         this.loading=false;
      }else{

        
        this.$store
      .dispatch("profileSettingsEdit/changePassword",formData2)
      .then(response =>{
        console.log("------------------------");
        console.log(response.data.message);
        this.flashMessage.show({
          status: "success",
          message: response.data.message
        }); 
         this.loading=false;
        
      })
      .catch((err) => {
        this.flashMessage.show({
          status: "error",
          message: "An error occured"
        }); 
        console.log('--------- error: ');
          console.error(err);
           this.loading=false;
        });
        }
    },

    getRegion() {
      console.log(this.country,'id country: ',this.selectedCounty)
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

beforeMount(){
  this.userInfos();
  
},

watch: {
  "$store.state.profileSettingsEdit.userInfos": function(){
     this.selectedCounty = this.$store.state.profileSettingsEdit.userInfos.country.id;
     this.selectedRegion = this.$store.state.profileSettingsEdit.userInfos.region.id;

     this.selectedDivision = this.$store.state.profileSettingsEdit.userInfos.division ?this.$store.state.profileSettingsEdit.userInfos.division.id:'';
    this.selectedMunicipality = this.$store.state.profileSettingsEdit.userInfos.council?this.$store.state.profileSettingsEdit.userInfos.council.id:'';
    this.selectedNeighbor = this.$store.state.profileSettingsEdit.userInfos.neigborhood ? this.$store.state.profileSettingsEdit.userInfos.neigborhood.id:'';

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
      this.activeTab = 1;
    }
  }

  
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
  .mbl-wrap {
    overflow: hidden;
    width: 100%;
    display: flex;
    flex-direction: row;
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
</style>
