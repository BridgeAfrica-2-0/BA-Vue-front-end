<template>
  <b-container class="container-fluid">
    <b-container class="text">
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="12" md="12">
            <div>
              <b-table-simple hover caption-top responsive>
                <b-thead>
                  <b-tr>
                    <b-th class="a-text username"> Account Type </b-th>

                    <b-th>
                    </b-th>
                  </b-tr>
                </b-thead>

                <b-tbody v-for="Package in dataPackages.packages" :key="Package.id">
                  <!-- <b-tr 
                    @click="ToggleModal(Package.name, Package.id)" 
                    :variant="Package.id === dataPackages.user_actived_plan[0].package_id ? 'secondary':' '" 
                    style="cursor:pointer"
                  > -->
                  <b-tr 
                    @click="ToggleModal(Package.name, Package.id)"
                    style="cursor:pointer"
                  >
                    <b-td class="a-text"> {{Package.name}} </b-td>

                    <b-td class="a-text">
                      <b-link href="#">Upgrade</b-link>
                    </b-td>
                  </b-tr>
                </b-tbody>
              </b-table-simple>
            </div>

            <b-button variant="outline" class="btn-outline-primary" @click="deleteAccount()">
              Delete Account
            </b-button>
          </b-col>

        </b-row>
        <!-- Basics -->
        <b-modal v-model="modalShowBasics" size="xl" hide-footer="true" no-stacking header-bg-variant="light" body-bg-variant="light">
          <b-row>
            <b-col cols="8">
              <h5><b-icon icon="check-circle-fill" variant="success"></b-icon> NORMAL ACCOUNT (BASIC ACCOUNT)</h5><br>
              <p><b>These are the features with the normal account</b></p>
              <p class="descrip">
                <b-icon icon="check2" variant="success" class="h5"></b-icon> Website with a unique domain name,phone number, GPS location.<br/>
                <b-icon icon="check2" variant="success" class="h5"></b-icon> Have community engagement untionality like messaging and gathering of followers.<br/>
                <b-icon icon="check2" variant="success" class="h5"></b-icon> Marketplace to display products and services, photos, price and will allow interaction with customers.
              </p>
            </b-col>
            <b-col>
              <h4>Choose Your Plan</h4>
              <br>
              <b-row>
                <b-col>Monthly</b-col>
                <b-col><b-button variant="primary" @click="confirmPayment('free')" :disabled="bntStatus">Free</b-button></b-col>
              </b-row>
              <br/>
              <b-row>
                <b-col>Yearly</b-col>
                <b-col><b-button variant="primary" @click="confirmPayment('free')" :disabled="bntStatus">Free</b-button></b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-modal>

        <!-- Premium -->
        <b-modal v-model="modalShowPremium" size="xl" hide-footer="true" header-bg-variant="light" body-bg-variant="light" no-stacking>
          <b-row>
            <b-col cols="7">
              <h5><b-icon icon="check-circle-fill" variant="success"></b-icon> UPGRADE TO PREMIUM</h5><br>
              <p><b>By upgrading your account you can get all feature to improve your business</b></p>
              <p class="descrip">
                <b-icon icon="check2" variant="success" class="h5"></b-icon> All the functionalities as in the normal account.<br/>
                <b-icon icon="check2" variant="success" class="h5"></b-icon> Ability to directy exchange money between the customer and the business owner.<br/>
                <b-icon icon="check2" variant="success" class="h5"></b-icon> Shipping calculation.<br/>
                <b-icon icon="check2" variant="success" class="h5"></b-icon> Advanced business verification.
              </p>
            </b-col>
            <b-col>
              <h4>Choose Your Plan</h4>
              <br>
              <b-row>
                <b-col><span class="text-success"><b>Most Popular:</b></span> Monthly<br/>Billed Monthly</b-col>
                <b-col>4000XAF / Month <b-button v-b-modal.PackageSelection @click="subscribe = 'one year'" variant="primary">Select</b-button></b-col>
              </b-row>
              <br/>
              <b-row>
                <b-col><span class="text-success"><b>Best Value:</b></span> Yearly<br/>Billed Anually - 36000XAF</b-col>
                <b-col>3000XAF / Month <b-button v-b-modal.PackageSelection @click="subscribe = 'one month'" variant="primary">Select</b-button></b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-modal>

        <!-- Request Payment -->
        <b-modal id="RequestPayment" title="Enter your MTN Mobile Money number" size="md" hide-footer>
          <div v-if="!congratulation" class="px-0">
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
                  <b-button
                    variant="primary"
                    class="font-weight-light btn-custom text-14 shadow-sm"
                  >CHANGE</b-button>
                </div>
              </div>
              <div class="row my-3">
                <div class="col btn-custom-box">
                  <b-button
                    variant="primary"
                    class="font-weight-light shadow-sm btn-custom text-14"
                    @click="confirmPayment"
                  >PAY {{formatMoney(2000)}}</b-button>
                </div>
              </div>
              <div class="row my-3">
                <div class="col body-font-size">
                  <p>
                    Please make sure your account balance is greater than 13 000XAF,
                    Otherwise your payment will not be completed.
                  </p>
                  <p>
                    Reference NO: XXXXXXXXXXXX
                  </p>
                </div>
              </div>
            </b-overlay>
          </div>
          <div v-else class="text-center">
            <h3><b>🥳❗Transaction Completed❗🥳</b></h3>
          </div>
        </b-modal>

        <!-- Package Selection -->
        <b-modal id="PackageSelection" title="Select Your Package" size="md" hide-footer no-stacking>
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
                  v-b-modal.RequestPayment
                  class="float-right btn-custom p-2 btn btn-primary mt-2"
                > Confirm Payment</button>
              </div>
            </div>
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
import moment from 'moment';
export default {
  name: "website",
  data() {
		return {
      url: null,
      modalShowBasics: false,
      modalShowPremium: false,
      bntStatus: false,

      PaymentForm: {
        subscribe: '',
        phone: '',
        operator: '',
        package_id: '',
        type: ''
      },

     
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
                  "laravel_through_key": 1
              }
          ]
      },
     
		}
	},

  computed: {
    accounts() {
      return this.$store.state.businessAccountType.accounts;
    }
  },

  mounted(){
    this.url = this.$route.params.id;
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
        path: `community/people/${this.url}`
        })
      .then(() => {
        console.log('ohh yeah');
      })
      .catch(err => {
        console.log({ err: err });
      });
    },

    confirmPayment() {
      this.bntStatus = true;
      let date = this.getNow();
      console.log(date);
      console.log("this.PaymentForm.type", this.PaymentForm.type)
      let formData = new FormData();
      formData.append("type", this.PaymentForm.type)
      formData.append("time", this.PaymentForm.type)
       this.$store
      .dispatch("businessAccountType/confirmPayment", {
        path: `community/people/${this.url}`,
        data: formData
        })
      .then(() => {
        console.log('ohh yeah');
        this.bntStatus = false
      })
      .catch(err => {
        this.bntStatus = false
        console.log({ err: err });
      });
    },

    formatMoney(money) {
      return this.formatObject.format(money);
    },

    deleteAccounts: function(){
      let formData = new FormData();
      // formData.append('name', this.form.name);
      // formData.append('role', this.form.role);
      this.axios.delete("business/account/delete/"+this.url, formData)
      .then(() => {
        console.log('ohh yeah');
        this.displayEditor();
        this.flashMessage.show({
          status: "success",
          message: "Editor Deleted"
        });
          
      })
      .catch(err => {
        console.log({ err: err });
        this.flashMessage.show({
          status: "error",
          message: "Unable To Delete Editor"
        });
      });
		},

    getNow: function() {
      console.log("getNow");
      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const startDate = date +' '+ time;
      console.log("priorDate:");
      // var priorDate = new Date().setDate(today.getDate()-30)
      let endMonth = moment().add(-30, 'days').format('YYYY-MM-DD HH:mm:ss');
      let endYear = moment().add(1, 'years').format('YYYY-MM-DD HH:mm:ss');
      // Date.today().add({days:-30});
      console.log("startDate: "+startDate);
      console.log("endMonth: "+endMonth);
      console.log("endYear: "+endYear);
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