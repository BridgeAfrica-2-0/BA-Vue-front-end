<template>
  <b-container class="container-fluid account-type">
    <b-container class="text">
      <b-container class="bv-example-row">  
        <b-row>
          <b-col cols="12" md="12">
            <div>
              <b-table-simple hover caption-top responsive>
                <b-thead>
                  <b-tr>
                    <b-th class="a-text username">
                      {{ $t("businessowner.Account_Type") }}
                    </b-th>

                    <b-th>
                      {{ $t("businessowner.Status") }}
                    </b-th>
                  </b-tr>
                </b-thead>
   
                <b-tbody v-for="Package in Packages.packages" :key="Package.id"> 
                  <b-tr
                    @click="ToggleModal(Package.name, Package.id)"
                    :variant="
                      Package.id === Packages.user_actived_plan[0].package_id
                        ? 'secondary'
                        : ' '
                    "
                    style="cursor:pointer"
                  >
                    <b-td class="a-text" style="text-transform: capitalize;">
                      {{ Package.name }} 
                    </b-td>
                    <b-td class="a-text">
                      <b-link  v-if="Package.name==='premium'">{{Package.id === Packages.user_actived_plan[0].package_id ? "Current": " Upgrade "}}</b-link>

                       <b-link v-if="Package.name==='basic'"> {{Package.id === Packages.user_actived_plan[0].package_id ? "Current": "Downgrade"}}</b-link>
                      <span class="text-success">
                        {{
                          Package.id ===
                            Packages.user_actived_plan[0].package_id &&
                          Package.name === "premium"
                            ? "Expires " +
                              moment(
                                Packages.user_actived_plan[0].expired_at
                              ).fromNow()
                            : " "
                        }}
                      </span>
                    </b-td>
                  </b-tr>
                </b-tbody>
              </b-table-simple>
            </div>
          
          </b-col>
        </b-row>
        <!-- Basics -->
        <b-modal
          v-model="modalShowBasics"
          ref="modalShowBasics"
          centered
          size="lg"
          hide-footer
          no-stacking
          header-bg-variant="light"
          body-bg-variant="light"
        >
          <b-row class="pt-5 pb-5">
            <b-col cols="8">
              <h5>
                <b-icon icon="check-circle-fill" variant="success"></b-icon>
                {{ $t("businessowner.NORMAL_ACCOUNT") }} ({{
                  $t("businessowner.BASIC_ACCOUNT")
                }})
              </h5>
              <br />
              <p class="poppins">
                <b>{{
                  $t(
                    "businessowner.These_are_the_features_with_the_normal_account"
                  )
                }}</b>
              </p>
              <p class="descrip">
               <span class="p-2 mt-2">  <b-icon icon="check2" variant="success" class="h5"></b-icon>
                {{ $t("businessowner.Website_with_a_unique_domain_name") }},{{
                  $t("businessowner.phone_number")
                }}, {{ $t("businessowner.GPS_location") }}. </span> 
                <br /><br />

                <span class="p-2 mt-2"> 
                <b-icon icon="check2" variant="success" class="h5"></b-icon>
                {{
                  $t(
                    "businessowner.Have_community_engagement_untionality_like_messaging_and_gathering_of_followers"
                  )
                }}.   </span>
                
                <br /><br />

                <span class="p-2 mt-2" >  
                <b-icon icon="check2" variant="success" class="h5"></b-icon>
                {{
                  $t(
                    "businessowner.Marketplace_to_display_products_and_services"
                  )
                }}, {{ $t("businessowner.photos") }},
                {{
                  $t(
                    "businessowner.price_and_will_allow_interaction_with_customers"
                  )
                }}.

                </span>
              </p>
            </b-col>
            <b-col>
              <h4>{{ $t("businessowner.Choose_Your_Plan") }}</h4>
              <br />
              <b-row>
                <b-col>{{ $t("businessowner.Monthly") }}</b-col>
                <b-col
                  ><b-button
                    variant="primary"
                    @click="confirmPayment"
                    :disabled="bntStatus"
                    >{{ $t("businessowner.Free") }}</b-button
                  ></b-col
                >
              </b-row>
              <br />
              <b-row>
                <b-col>{{ $t("businessowner.Yearly") }}</b-col>
                <b-col
                  ><b-button
                    variant="primary"
                    @click="confirmPayment"
                    :disabled="bntStatus"
                    >{{ $t("businessowner.Free") }}</b-button
                  ></b-col
                >
              </b-row>
            </b-col>
          </b-row>
        </b-modal>

        <!-- Premium -->
        <b-modal
          v-model="modalShowPremium"
          centered
          size="lg"
          hide-footer
          header-bg-variant="light"
          body-bg-variant="light"
          no-stacking
        >
          <b-row>
            <b-col cols="7">
              <h5>
                <b-icon icon="check-circle-fill" variant="success"></b-icon>
                {{ $t("businessowner.UPGRADE_TO_PREMIUM") }}
              </h5>
              <br />
              <p class="poppins">
                <b>{{
                  $t(
                    "businessowner.By_upgrading_your_account_you_can_get_all_feature_to_improve_your_business"
                  )
                }}</b>
              </p>
              <p class="descrip">

                <span class="p-2">
                <b-icon icon="check2" variant="success" class="h5"></b-icon>
                {{
                  $t(
                    "businessowner.All_the_functionalities_as_in_the_normal_account"
                  )
                }}.  </span><br /><br />

                <span class="p-2">
                <b-icon icon="check2" variant="success" class="h5"></b-icon>
                {{
                  $t(
                    "businessowner.Ability_to_directy_exchange_money_between_the_customer_and_the_business_owner"
                  )
                }}. </span> <br /><br />

                <span class="p-2">
                <b-icon icon="check2" variant="success" class="h5"></b-icon>
                {{ $t("businessowner.Shipping_calculation") }}.</span>
                <br /><br />

                <span class="p-2">
                <b-icon icon="check2" variant="success" class="h5"></b-icon>
                {{ $t("businessowner.Advanced_business_verification") }}. </span>
              </p>
            </b-col>
            <b-col>
              <h4>{{ $t("businessowner.Choose_Your_Plan") }}</h4>
              <br />
              <b-row>
                <b-col
                  ><span class="text-success"
                    ><b>{{ $t("businessowner.Most_Popular") }}:</b></span
                  >
                  {{ $t("businessowner.Monthly") }}<br />{{
                    $t("businessowner.Billed_Monthly")
                  }}</b-col
                >
                <b-col
                  >{{ Packages.premium_package_prices[0] }}XAF 
                  <br>
                  <b-button
                    v-b-modal.PackageSelection
                    @click="PaymentForm.subscribe = 'one month'"
                    variant="primary"
                    >{{ $t("businessowner.Select") }}</b-button
                  ></b-col
                >
              </b-row>
              <br /><br />
              <b-row>
                <b-col
                  ><span class="text-success"
                    ><b>{{ $t("businessowner.Best_Value") }}:</b> <br>
                    </span
                  >
                  {{ $t("businessowner.Yearly") }}<br />{{
                    $t("businessowner.Billed_Anually")
                  }}
                 </b-col
                >
                <b-col
                  >{{ Packages.premium_package_prices[1] }}XAF <br>
                  <b-button
                    v-b-modal.PackageSelection
                    @click="PaymentForm.subscribe = 'one year'"
                    variant="primary"
                    >{{ $t("businessowner.Select") }}</b-button
                  ></b-col
                >
              </b-row>
            </b-col>
          </b-row>
        </b-modal>

        <!-- Package Selection -->
        <b-modal
          id="PackageSelection"
          centered
          :title="$t('businessowner.Select_Your_Package')"
          size="md"
          hide-footer
          no-stacking
        >
          <div class="">
            <div class="my-4 operator">
              <div class="">
                <img
                  :src="require('@/assets/img/payment/mtn.png')"
                  alt="MOBILE MONEY"
                />
              </div>
              <div class="operator-name">
                <p class="mb-0 mx-4 title-font-size">
                  MTN Mobile Money
                </p>
              </div>
              <div class="operator-select-box">
                <b-form-radio
                  v-model="PaymentForm.operator"
                  name="operator"
                  value="MTN"
                  class="operator-select"
                ></b-form-radio>
              </div>
            </div>
   
            <div class="my-4 operator">
              <div class="">
                <img
                  :src="require('@/assets/img/payment/orange_money.png')"
                  alt="ORANGE MONEY"
                />
              </div>
              <div class="operator-name">
                <p class="mb-0 mx-4 title-font-size ">
                  Orange Money
                </p>
              </div>
              <div class="operator-select-box">
                <b-form-radio
                  v-model="PaymentForm.operator"
                  name="operator"
                  value="ORANGE"
                  class="operator-select"
                ></b-form-radio>
              </div>
            </div>

            <div class="row p-2">
              <div class="col">
                <button
                  v-b-modal.AcRequestPayment
                  class="float-right btn-custom p-2 btn btn-primary mt-2"
                >
                  {{ $t("businessowner.Confirm_Payment") }}
                </button>
              </div>
            </div>
          </div>
        </b-modal>

        <!-- Request Payment -->
        <b-modal
          id="AcRequestPayment"
          ref="AcRequestPayment"
          class="poppins"
          centered
          :title="$t('businessowner.Enter_your_MTN_Mobile_Money_number')"
          size="md"
          hide-footer
        >
          <div class="px-0">
            <b-overlay :show="show" rounded="sm">
              <div class="row">
                <div class="col-10 col-sm-9 col-md-8">
                  <VuePhoneNumberInput default-country-code="CM" v-model="PaymentForm.phone" placeholder="237 6XX XXX XXX" required/>
                </div>
                <div class="col-2 col-sm-3 col-md-4 px-0 btn-custom-box">
                  <b-button
                    variant="primary"
                    class="font-weight-light shadow-sm btn-custom text-14"
                    @click="confirmPayment"
                    >{{ $t("businessowner.PAY") }}</b-button
                  >
                </div>
              </div>
              <div class="row my-3">
                <div class="col body-font-size">
                  <p class="">
                    {{
                      $t(
                        "businessowner.Please_make_sure_your_account_balance_is_greater_than"
                      )
                    }}

                    <span v-if="PaymentForm.subscribe=='one month'">  
                        {{ Packages.premium_package_prices[0] }}XAF 
                        </span>
                        <span v-else>   
                          {{ Packages.premium_package_prices[1] }}XAF 
                        </span>
                     
                    {{
                      $t(
                        "businessowner.Otherwise_your_payment_will_not_be_completed"
                      )
                    }}.
                  </p>
                 
                </div>
              </div>
            </b-overlay>
          </div>
        </b-modal>

      </b-container>

      <b-container class="m-footer">
        <Footer />
      </b-container>
    </b-container>
  </b-container>
</template>

<script>
import VuePhoneNumberInput from "vue-phone-number-input";

import moment from "moment";
export default {
  name: "website",
  props: ["profileId"],
  components: {
    VuePhoneNumberInput,
  },
  data() {
    return {
      url: null,
      moment: moment,
      default_package:{package_id: 1, name: "basic"},
        
      modalShowBasics: false,
      modalShowPremium: false,
      bntStatus: false,
      show: false,

      PaymentForm: {
        subscribe: "",
        phone: "",
        operator: "",
        package_id: "",
        type: "",
      },
      formatObject: new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "XAF",
        minimumFractionDigits: 2,
      }),

      
    };
  },

  watch:{

     Packages: {
      


       handler(newValue, oldValue) { 

          if(!newValue.user_actived_plan.length){

      this.Packages.user_actived_plan.push(this.default_package);
       
      }

           
        }

     }

  },

  computed: {
    Packages() {

      return this.$store.state.profileAccountType.accounts ;
    },
    
  },

  mounted() {
    console.log("profileId", this.profileId);
    this.url =
      this.$route.params.id !== undefined
        ? this.$route.params.id
        : this.profileId;
    this.getAccounts();
  },

  methods: {
    ToggleModal(AccType, Package_id) {
      console.log("AccType: ", AccType);
      this.PaymentForm.type = AccType;
      if (AccType === "basic") {
        this.PaymentForm.package_id = Package_id;
        this.modalShowBasics = !this.modalShowBasics;
      } else {
        this.PaymentForm.package_id = Package_id;
        this.modalShowPremium = !this.modalShowPremium;
      }
    },

    getAccounts() {
      this.$store
        .dispatch("profileAccountType/getaccounts", {
        path: `profile/settings/packages`
        })
        .then(() => {
          console.log("ohh yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    confirmPayment() {
      this.show = true;
      let date = this.getNow();
      console.log(this.PaymentForm);
      let formData = new FormData();

      formData.append("subscribe", this.PaymentForm.subscribe);
      formData.append("phone", "+237"+this.PaymentForm.phone);
      formData.append("operator", this.PaymentForm.operator);
      formData.append("package_id", this.PaymentForm.package_id);
    console.log('lalallala');
    console.log(this.PaymentForm);
       
    
      this.$store
        .dispatch("profileAccountType/confirmPayment", {
          path: `profile/settings/packages`,
          formData: formData,
        })
        .then(({ data }) => {
            
            this.$refs["AcRequestPayment"].hide();
            this.show = false;
          if(this.PaymentForm.operator == "ORANGE"){

             window.location.href =data.payment_url;
          }
          
         else if(this.PaymentForm.operator == "MTN"){
          
          this.getAccounts();
          this.flashMessage.show({
            status: "success",
            message: this.$t("businessowner.Transaction_Completed"),
          });
         }

         if(this.PaymentForm.type=='basic'){
            this.getAccounts();
           
           this.$refs["modalShowBasics"].hide();

           this.flashMessage.show({
            status: "success",
            message: this.$t("businessowner.Transaction_Completed"),
          });
          
         }

        })
        .catch((err) => {
          console.log({ err: err });
          this.$refs["AcRequestPayment"].hide();
          this.$refs["modalShowBasics"].hide();
          this.show = false;
          this.flashMessage.show({
            status: "error",
            message: this.$t("businessowner.Unable_Complete_Payment"),
          });
        });
    },

    formatMoney(money) {
      return this.formatObject.format(money);
    },

    // deletePackage: function(){
    //   this.axios.delete("business/account/delete/"+this.url, formData)
    //   .then(() => {
    //     console.log('ohh yeah');
    //     this.displayEditor();
    //     this.flashMessage.show({
    //       status: "success",
    //       message: "Editor Deleted"
    //     });

    //   })
    //   .catch(err => {
    //     console.log({ err: err });
    //     this.flashMessage.show({
    //       status: "error",
    //       message: "Unable To Delete Editor"
    //     });
    //   });
    // },

    getNow: function() {
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const startDate = date + " " + time;
      let endMonth = moment()
        .add(-30, "days")
        .format("YYYY-MM-DD HH:mm:ss");
      let endYear = moment()
        .add(1, "years")
        .format("YYYY-MM-DD HH:mm:ss");
      let data = {
        startDate: startDate,
        endMonth: endMonth,
        endYear: endYear,
      };
      return data;
    },
  },
};
</script>

<style scoped>
.descrip {
  font-size: 14px;
      font-family: poppins !important;
      font-weight: 500;
}
.btn-custom {
  height: 38px;
  min-width: 123px;
  font-size: 14px;
}
</style>
<style scoped>
.payment-type {
  background-color: #f7f7f7;
  padding: 4px 15px;
  text-align: left;
}


.b-color {
  color: #7952b3;
}
.tabs {
  width: 100%;
}

.account-headnig {
  padding-left: 12px;
  padding-top: 7px;
  text-align: left;
}
.h-background {
  display: flex;
  background-color: #e4e3e3;
}
.payment-image {
  margin-top: -50px;
  float: right;
}

@media only screen and (max-width: 1065px) {
  .payment-image {
    margin-top: 0px;
    float: right;
  }
}
.a-text {
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
<style scoped>

.btn-custom {
  height: 38px;
  min-width: 123px;
  font-size: 14px;
}
.operator {
  display: flex;
  justify-content: start;
  align-items: center;
}
.operator-img-box {
  width: 50px !important;
}
.operator img {
  display: inline-block;
  height: 40px;
  width: 100%;
}
.operator-name {
  width: 30rem;
}
.operator-select {
  cursor: pointer !important;
}

@media only screen and (max-width: 992px) {
  .operator-select-box {
    width: 80%;
  }
  .operator-select {
    float: right;
  }
}

.h5{
  font-family: poppins;
}
.h6{
  font-family: poppins;
}
.poppins{
  font-family: poppins;
}
.account-type{
  font-family: poppins, Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #455a64 !important;
}
</style>

