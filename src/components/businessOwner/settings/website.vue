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
                      <!-- <b-button variant="outline" class="btn-outline-primary">
                        change
                      </b-button> -->
                    </b-th>
                  </b-tr>
                </b-thead>

                <b-tbody>
                  <b-tr @click="ToggleModal('basic')" style="cursor:pointer">
                    <b-td class="a-text"> Basics </b-td>

                    <b-td class="a-text">
                      <b-link href="#">Upgrade</b-link>
                    </b-td>
                  </b-tr>

                  <b-tr @click="ToggleModal('premium')" style="cursor:pointer">
                    <b-td class="a-text"> Premium</b-td>

                    <b-td><b-link href="#"> Not Available </b-link> </b-td>
                  </b-tr>
                </b-tbody>
              </b-table-simple>
            </div>

            <b-button variant="outline" class="btn-outline-primary" @click="deleteAccount()">
              Delete Account
            </b-button>
          </b-col>

          

          <!-- <b-col cols="12" md="4">
            <p class="web-template-label">Website Template</p>

            <b-link href="#" class="f-left">Visit Website</b-link>
            <b-link href="#" class="f-right">Open Editor</b-link>

            <img
              class="mb-2 img-fluid"
              src="@/assets/img/web-template.jpg"
              alt="Fluid image"
            />
          </b-col> -->

        </b-row>
        <!-- Basics -->
        <b-modal v-model="modalShowBasics" size="xl" hide-footer="true" header-bg-variant="light" body-bg-variant="light">
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
                <b-col><b-button variant="primary">Free</b-button></b-col>
              </b-row>
              <br/>
              <b-row>
                <b-col>Yearly</b-col>
                <b-col><b-button variant="primary">Free</b-button></b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-modal>
        <!-- Premium -->
        <b-modal v-model="modalShowPremium" size="xl" hide-footer="true" header-bg-variant="light" body-bg-variant="light">
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
                <b-col><span text-variant="success">Most Popular:</span> Monthly<br/>Billed Monthly</b-col>
                <b-col>4000XAF / Month <b-button variant="primary">Select</b-button></b-col>
              </b-row>
              <br/>
              <b-row>
                <b-col><span text-variant="success">Best Value:</span> Yearly<br/>Billed Anually - 36000XAF</b-col>
                <b-col>3000XAF / month <b-button variant="primary">Select</b-button></b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-modal>
      </b-container>

      <b-container class="m-footer">
        <Footer />
      </b-container>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: "website",
  data() {
			return {
        url: null,
        modalShowBasics: false,
        modalShowPremium: false,
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

    ToggleModal(AccType) {
      console.log("AccType: ", AccType);
      if(AccType === "basic")
        this.modalShowBasics = !this.modalShowBasics
      else
        this.modalShowPremium = !this.modalShowPremium
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
  }
};
</script>

<style scoped>
.descrip{
  font-size: 14px;
}
</style>
