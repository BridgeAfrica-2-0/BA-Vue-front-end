<template>
  <b-container class="container-fluid">
    <b-container class="text">
      <b-container class="bv-example-row">
        <b-row>
          <!-- {{ Packages }}
          ---------------
          {{ dataPackages }} -->
          <b-col cols="12" md="12">
            <div>
              <b-table-simple hover caption-top responsive>
                <b-thead>
                  <b-tr>
                    <b-th class="a-text username"> {{ $t('businessowner.Account_Type') }} </b-th>

                    <b-th>
                      {{ $t('businessowner.Status') }}
                    </b-th>
                  </b-tr>
                </b-thead>

                <b-tbody v-for="Package in Packages.packages" :key="Package.id">
                  <b-tr 
                    @click="ToggleModal(Package.name, Package.id)" 
                    :variant="Package.id === Packages.user_actived_plan[0].package_id ? 'secondary':' '" 
                    style="cursor:pointer"
                  >
                    <b-td class="a-text" style="text-transform: capitalize;"> {{Package.name}} </b-td>
                    <b-td class="a-text">
                      <b-link>{{Package.id === Packages.user_actived_plan[0].package_id ? 'Current':'Upgrade'}}</b-link>
                      <span class="text-success">
                        {{Package.id === Packages.user_actived_plan[0].package_id  && Package.name === "premium" ? 
                        'Expires '+moment(Packages.user_actived_plan[0].expired_at).fromNow() : ' '}}
                        </span>
                    </b-td>
                  </b-tr>
                </b-tbody>
              </b-table-simple>
            </div>
            <!-- <b-button variant="outline" class="btn-outline-primary" v-b-modal.PackageDelete>
              Delete Account
            </b-button> -->
          </b-col>

        </b-row>
        <!-- Basics -->
        <b-modal v-model="modalShowBasics" centered  size="xl" hide-footer="true" no-stacking header-bg-variant="light" body-bg-variant="light">
          <b-row>
            <b-col cols="8">
              <h5><b-icon icon="check-circle-fill" variant="success"></b-icon> {{ $t('businessowner.NORMAL_ACCOUNT') }} ({{ $t('businessowner.BASIC_ACCOUNT') }})</h5><br>
              <p><b>{{ $t('businessowner.These_are_the_features_with_the_normal_account') }}</b></p>
              <p class="descrip">
                <b-icon icon="check2" variant="success" class="h5"></b-icon> {{ $t('businessowner.Website_with_a_unique_domain_name') }},{{ $t('businessowner.phone_number') }}, {{ $t('businessowner.GPS_location') }}.<br/>
                <b-icon icon="check2" variant="success" class="h5"></b-icon> {{ $t('businessowner.Have_community_engagement_untionality_like_messaging_and_gathering_of_followers') }}.<br/>
                <b-icon icon="check2" variant="success" class="h5"></b-icon> {{ $t('businessowner.Marketplace_to_display_products_and_services') }}, {{ $t('businessowner.photos') }}, {{ $t('businessowner.price_and_will_allow_interaction_with_customers') }}.
              </p>
            </b-col>
            <b-col>
              <h4>{{ $t('businessowner.Choose_Your_Plan') }}</h4>
              <br>
              <b-row>
                <b-col>{{ $t('businessowner.Monthly') }}</b-col>
                <b-col><b-button variant="primary" @click="confirmPayment" :disabled="bntStatus">{{ $t('businessowner.Free') }}</b-button></b-col>
              </b-row>
              <br/>
              <b-row>
                <b-col>{{ $t('businessowner.Yearly') }}</b-col>
                <b-col><b-button variant="primary" @click="confirmPayment" :disabled="bntStatus">{{ $t('businessowner.Free') }}</b-button></b-col>
              </b-row>
            </b-col>
            
          </b-row>
        </b-modal>

        <!-- Premium -->
        <b-modal v-model="modalShowPremium" centered  size="xl" hide-footer="true" header-bg-variant="light" body-bg-variant="light" no-stacking>
          <b-row>
            <b-col cols="7">
              <h5><b-icon icon="check-circle-fill" variant="success"></b-icon> {{ $t('businessowner.UPGRADE_TO_PREMIUM') }}</h5><br>
              <p><b>{{ $t('businessowner.By_upgrading_your_account_you_can_get_all_feature_to_improve_your_business') }}</b></p>
              <p class="descrip">
                <b-icon icon="check2" variant="success" class="h5"></b-icon> {{ $t('businessowner.All_the_functionalities_as_in_the_normal_account') }}.<br/>
                <b-icon icon="check2" variant="success" class="h5"></b-icon> {{ $t('businessowner.Ability_to_directy_exchange_money_between_the_customer_and_the_business_owner') }}.<br/>
                <b-icon icon="check2" variant="success" class="h5"></b-icon> {{ $t('businessowner.Shipping_calculation') }}.<br/>
                <b-icon icon="check2" variant="success" class="h5"></b-icon> {{ $t('businessowner.Advanced_business_verification') }}.
              </p>
            </b-col>
            <b-col>
              <h4>{{ $t('businessowner.Choose_Your_Plan') }}</h4>
              <br>
              <b-row>
                <b-col><span class="text-success"><b>{{ $t('businessowner.Most_Popular') }}:</b></span> {{ $t('businessowner.Monthly') }}<br/>{{ $t('businessowner.Billed_Monthly') }}</b-col>
                <b-col>{{Packages.premium_package_prices[0]}}XAF/{{ $t('businessowner.Month') }} <b-button v-b-modal.PackageSelection @click="PaymentForm.subscribe = 'one month'" variant="primary">{{ $t('businessowner.Select') }}</b-button></b-col>
              </b-row>
              <br/>
              <b-row>
                <b-col><span class="text-success"><b>{{ $t('businessowner.Best_Value') }}:</b></span> {{ $t('businessowner.Yearly') }}<br/>{{ $t('businessowner.Billed_Anually') }} - 36000XAF</b-col>
                <b-col>{{Packages.premium_package_prices[1]}}XAF/{{ $t('businessowner.Month') }} <b-button v-b-modal.PackageSelection @click="PaymentForm.subscribe = 'one year'" variant="primary">{{ $t('businessowner.Select') }}</b-button></b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-modal>

        <!-- Package Selection -->
        <b-modal id="PackageSelection" centered  :title="$t('businessowner.Select_Your_Package')" size="md" hide-footer no-stacking>
          <div class="">
            <div class="my-4 operator">
              <div class="">
                <img
                  :src="require('@/assets/img/payment/mtn.png')"
                  alt="MOBILE MONEY"
                />
              </div>
              <div class="operator-name">
                <p class="mb-0 mx-4 title-font-size font-weight-bold">
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
                <p class="mb-0 mx-4 title-font-size font-weight-bold">Orange Money</p>
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
            <div class="my-4 operator">
              <div class="operator-img-box">
                <img
                  :src="require('@/assets/img/payment/expressU.jpg')"
                  alt="EXPRESS UNION"
                />
              </div>
              <div class="operator-name">
                <p class="mb-0 mx-4 title-font-size font-weight-bold">
                  Express Union
                </p>
              </div>
              <div class="operator-select-box ml-md-2">
                <b-form-radio
                  v-model="PaymentForm.operator"
                  name="operator"
                  value="EXPRESS"
                  class="operator-select"
                ></b-form-radio>
              </div>
            </div>

            <div class="row p-2">
              <div class="col">
                <button
                  v-b-modal.AcRequestPayment
                  class="float-right btn-custom p-2 btn btn-primary mt-2"
                > {{ $t('businessowner.Confirm_Payment') }}</button>
              </div>
            </div>
          </div>
        </b-modal>

        <!-- Request Payment -->
        <b-modal id="AcRequestPayment" ref="AcRequestPayment" centered  :title="$t('businessowner.Enter_your_MTN_Mobile_Money_number')" size="md" hide-footer>
          <div class="px-0">
            <b-overlay :show="show" rounded="sm">
              <div class="row">
                <div class="col-10 col-sm-9 col-md-8">
                  <b-form-input
                    placeholder="237 6XX XXX XXX"
                    id="number"
                    v-model="PaymentForm.phone"
                    type="tel"
                  ></b-form-input>
                </div>
                <div class="col-2 col-sm-3 col-md-4 px-0 btn-custom-box">
                  <!-- <b-button
                    variant="primary"
                    class="font-weight-light btn-custom text-14 shadow-sm"
                  >CHANGE</b-button> -->
                  <b-button
                    variant="primary"
                    class="font-weight-light shadow-sm btn-custom text-14"
                    @click="confirmPayment"
                  >{{ $t('businessowner.PAY') }}</b-button>
                </div>
              </div>
              <!-- <div class="row my-3">
                <div class="col btn-custom-box">
                  <b-button
                    variant="primary"
                    class="font-weight-light shadow-sm btn-custom text-14"
                    @click="confirmPayment"
                  >PAY {{formatMoney(2000)}}</b-button>
                </div>
              </div> -->
              <div class="row my-3">
                <div class="col body-font-size">
                  <p>
                    {{ $t('businessowner.Please_make_sure_your_account_balance_is_greater_than') }} 13 000XAF,
                    {{ $t('businessowner.Otherwise_your_payment_will_not_be_completed') }}.
                  </p>
                  <p>
                    Reference NO: XXXXXXXXXXXX
                  </p>
                </div>
              </div>
            </b-overlay>
          </div>
        </b-modal>

        <!-- Delete Account -->
        <!-- <b-modal id="PackageDelete" centered  title="Delete Acitve Package❗❗" size="sm" hide-footer class="alert alert-success">
          <div class="">
            <div>
              <b-table-simple responsive>
                <b-thead>
                  <b-tr>
                    <b-th class="a-text username"> Package </b-th>
                    <b-th>Information</b-th>
                  </b-tr>
                </b-thead>
                <b-tbody>
                  <b-tr>
                    <b-td class="a-text"> Name: </b-td>
                    <b-td class="a-text"> {{Packages.user_actived_plan[0].name}} </b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="a-text"> Start Date: </b-td>
                    <b-td class="a-text"> {{Packages.user_actived_plan[0].start_at}} </b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="a-text"> Expiring Date: </b-td>
                    <b-td class="a-text"> {{Packages.user_actived_plan[0].expired_at}} </b-td>
                  </b-tr>
                </b-tbody>
              </b-table-simple>
            </div>

            <div class="row p-2">
              <div class="col">
                <button
                  @click="deletePackage()"
                  class="float-right btn-custom p-2 btn btn-primary mt-2"
                > Delete</button>
              </div>
            </div>
          </div>
        </b-modal> -->

      </b-container>

      <b-container class="m-footer">
        <Footer />
      </b-container>
    </b-container>
  </b-container>
</template>

<script>
import moment from 'moment';
export default {
  name: "website",
  props: ['profileId'],
  data() {
		return {
      url: null,
      moment: moment,

      modalShowBasics: false,
      modalShowPremium: false,
      bntStatus: false,
      show: false,

      PaymentForm: {
        subscribe: '',
        phone: '',
        operator: '',
        package_id: '',
        type: ''
      },
      formatObject: new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'XAF',
        minimumFractionDigits: 2,
      }),
     
      dataPackages: {
          packages: [
              {
                  "id": 1,
                  "name": "basic"
              },
              {
                  "id": 2,
                  "name": "premium"
              }
          ],
          premium_package_prices: [
              1000,
              12000
          ],
          user_actived_plan: [
              {
                "package_id": 2,
                "name": "premium",
                "status": 1,
                "start_at": "2021-10-18 13:00:33",
                "expired_at": "2021-11-18 13:00:33",
                "laravel_through_key": 1
              }
          ]
      },
     
		}
	},

  computed: {
    Packages() {
      return this.$store.state.businessAccountType.accounts;
    }
  },

  mounted(){
    console.log("profileId", this.profileId)
    this.url = this.$route.params.id !== undefined ? this.$route.params.id : this.profileId;
    this.getAccounts();
  },

  methods:{

    ToggleModal(AccType, Package_id) {
      console.log("AccType: ", AccType);
      this.PaymentForm.type = AccType;
      if(AccType === "basic"){
        this.PaymentForm.package_id = Package_id;
        this.modalShowBasics = !this.modalShowBasics
      }else{
        this.PaymentForm.package_id = Package_id;
        this.modalShowPremium = !this.modalShowPremium
      }
    },
    
    getAccounts() {
     this.$store
      .dispatch("businessAccountType/getaccounts", {
        path: `settings/packages/${this.url}`
        })
      .then(() => {
        console.log('ohh yeah');
      })
      .catch(err => {
        console.log({ err: err });
      });
    },

    confirmPayment() {
      this.show = true;
      let date = this.getNow();
      console.log(date);
      console.log("PaymentForm:", this.PaymentForm);
      let formData = new FormData();
      formData.append("subscribe", this.PaymentForm.subscribe)
      formData.append("phone", this.PaymentForm.phone)
      formData.append("operator", this.PaymentForm.operator)
      formData.append("package_id", this.PaymentForm.package_id)
      // formData.append("start_at", date.startDate)
       this.$store
      .dispatch("businessAccountType/confirmPayment", {
        path: `settings/packages/${this.url}`,
        formData: formData
        })
      .then(({data}) => {
        console.log(data);
        console.log('ohh yeah');
        this.$refs['AcRequestPayment'].hide()
        this.show = false;
        this.getAccounts();
        this.flashMessage.show({
          status: "success",
          message: this.$t('businessowner.Transaction_Completed')
        });
      })
      .catch(err => {
        console.log({ err: err });
        this.$refs['AcRequestPayment'].hide()
        this.show = false
        this.flashMessage.show({
          status: "error",
          message: this.$t('businessowner.Unable_Complete_Payment')
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
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const startDate = date +' '+ time;
      let endMonth = moment().add(-30, 'days').format('YYYY-MM-DD HH:mm:ss');
      let endYear = moment().add(1, 'years').format('YYYY-MM-DD HH:mm:ss');
      let data = {
        startDate: startDate,
        endMonth: endMonth,
        endYear: endYear,
      };
      return data;
    }
  }
};
</script>

<style scoped>
.descrip{
  font-size: 14px;
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

.h3-color {
  color: #000;
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
	/* .d-flex .img {
		display: block;
		width: 60px !important;
	} */
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
</style>