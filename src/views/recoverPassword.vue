<template>
  <div>
    <form
      novalidate
      autocomplete="off"
      class="md-layout"
      @submit.prevent="validateUser"
    >
      <md-card class="md-layout-item md-size-50 md-small-size-100 p-card">
        <md-card-header>
          <div class="md-title center f-22">
            {{ $t("verification.Passwor_reset") }}
          </div>
        </md-card-header>

        <md-card-content>
          <div class="center"></div>

          <br />

          <div v-if="!chosemethod">
            <b-row class="row border">
              <b-col cols="10">
                <div class="d-inline-flex mt-3 mb-3">
                  <span class="mr-4">
                    <b-icon
                      icon="envelope"
                      variant="primary"
                      font-scale="3"
                    ></b-icon>
                  </span>

                  <span class="ml-3 md-title l-20"> Via Email </span>
                </div>
              </b-col>
              <b-col class="d-" cols="1">
                <span class="float-right mt-3">
                  <b-button @click="verifyMethod('email')">
                    <b-icon
                      icon="chevron-right"
                      variant=""
                      class="mt-1"
                      font-scale="2"
                    ></b-icon>
                  </b-button>
                </span>
              </b-col>
            </b-row>

            <div class="row border mt-3">
              <b-col cols="10">
                <div class="d-inline-flex mt-3 mb-3">
                  <span class="mr-4">
                    <b-icon
                      icon="telephone"
                      variant="primary"
                      font-scale="3"
                    ></b-icon>
                  </span>

                  <span class="ml-3 md-title l-20"> Via SMS </span>
                </div>
              </b-col>
              <div class="col-1">
                <span class="ml-4 float-right mt-3">
                  <b-button @click="verifyMethod('tel')">
                    <b-icon
                      icon="chevron-right"
                      variant=""
                      class="mt-1"
                      font-scale="2"
                    ></b-icon>
                  </b-button>
                </span>
              </div>
            </div>

            <br />
            <br />
            <br />
            <br />
          </div>

          <!-- <div v-if="verify_method"> -->
          <div>
            <md-field v-if="showOtp && !showConfirm ">
              <label for="otp"> {{ $t("verification.otp") }}</label>

              <md-input
                type="text"
                name="otp"
                id="otp"
                v-model="form.otp"
                required
              />
            </md-field>




          <p class="mt-5 mt-md-2"   v-if="showOtp && !showConfirm "  >       
            {{ $t("verification.Didnt_recieved_the_verification_OTP") }}
            <b-link @click.prevent="resendOtp()">   
              {{ $t("verification.Resend_OTP") }}
            </b-link>
          </p>

          

         <div class="center"    v-if="showOtp && !showConfirm " >
            <b-button
              class="buttonn mt-5"
              @click.prevent="VerifyOtp"
              :disabled="sending"
              variant="primary"
              type="submit"
            >
              {{ $t("verification.Verify") }}
            </b-button>
          </div>

    




            <div v-if="showConfirm & !showOtp ">
              <md-field>
                <label for="password"> {{ $t("auth.password") }}</label>

                <md-input
                  type="password"
                  name="password"
                  id="password"
                  v-model="form.password"
                  required
                />
              </md-field>

              <md-field>
                <label for="confirm_password">
                  {{ $t("auth.confirm_password") }}</label
                >

                <md-input
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  v-model="form.confirm_password"
                  required
                />
              </md-field>






              <div class="center">
            <b-button
              class="buttonn mt-5"
              @click.prevent="ResetPassword"
              :disabled="sending"
              variant="primary"
              type="submit"
            >
              {{ $t("verification.Reset") }}
            </b-button>
          </div>

          
            </div> 

            <div v-if="showChoseMethod" > 

            <md-field v-if="chosemethod == 'tel'">
              <label for="email"> {{ $t("auth.tel") }}</label>

              <md-input
                type="text"
                name="tel"
                id="tel"
                v-model="form.phone"
                required
              />
            </md-field>

            <md-field v-if="chosemethod == 'email'">
              <label for="otp"> {{ $t("auth.email") }}</label>

              <md-input
                type="email"
                name="email"
                id="email"
                v-model="form.email"
                required
              />
            </md-field>

            <br />

            <div class="md-layout md-gutter">
              <br />
            </div>


            <div class="center">
            <b-button
              class="buttonn"
              @click.prevent="Verify"
              :disabled="sending"
              variant="primary"
              type="submit"
            >
              {{ $t("verification.Verify") }}
            </b-button>
          </div>



          </div> 
          
            

          
           </div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <div v-if="chosemethod">
         

          <br />
          <br />

         
        </div>

        <div></div>

        <div>
          <br />
          <br />

          <br />
          <br />
        </div>
      </md-card>

      <div class="md-layout-item md-size-50 md-small-size-100 b-div"></div>
    </form>

    <hr class="localfoter" />
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import "vue-material/dist/vue-material.min.css";
import { mapActions } from "vuex";
import axios from "axios";
import "@/assets/default.css";
import { required, email } from "vuelidate/lib/validators";
export default {
  name: "FormValidation",
  boolean: true,
  mixins: [validationMixin],
  data: () => ({
    form: {
      password: null,
      email: null,
      tel: null,
      confirm_password:null,
      otp:null,
    },
    das: [],
    langs: ["en", "fr"],
    token: "",
    showChoseMethod:false,
    showOtp: false,
    showConfirm: false,
    verify_method: false,
    chosemethod: "",
    userSaved: false,
    sending: false,
    lastUser: null,
  }),
  validations: {
    form: {
      password: {
        required,
      },
      email: {
        required,
        email,
      },
    },
  },

  created() {
    this.das = JSON.parse(localStorage.getItem("signup"));
  },

  computed: {
    auth() {
      return this.$store.state.auth.password_reset;
       
     
    },
  },

  methods: {



    verifyMethod(metho) {
      console.log(metho);
      this.chosemethod = metho;
      this.showChoseMethod=true;

      let url = "";
      if (this.chosemethod == "tel") {
        //implement the logic for tel
      } else {
        //implement the logic for email
      }
    },



    resendOtp() {
      let url = "";
     
      if (this.chosemethod == "email") {
        url = "user/resetemail";
      } else {
        url = "user/reset";
      }

      this.$store
        .dispatch("auth/verifyuser", {
          url: url,
          email: this.form.email,
          phone: this.form.phone,
        }).then((response) => {
          if (response.status === 200) {
            console.log("response: ", response);
            this.flashMessage.show({
              status: "success",

              message: this.$t("verification.Successfully_Send"),
            });

            this.sending = false;
          } else {
            console.log(response.data);
          }
        })
        .catch((err) => {
          console.log({ err: err });

         

          this.sending = false;
        });
    },

    
    VerifyOtp() {
      this.sending = true;
      let url = "user/verifyResetOtp";

      this.$store
        .dispatch("auth/VerifyOtp", {
          url: url,
          email: this.form.email,
          OTP:this.form.otp,
          type: this.chosemethod,
          phone: this.form.phone,
        })
        .then((data) => {

          this.sending = false;
          this.showConfirm=true;
          this.showOtp = false;
          this.flashMessage.show({
            status: "success",

            message: this.$t("verification.otp_verified"),
          });
        })
        .catch((err) => {
          console.log({ err: err });

          if (err.response.status == 422) {
            console.log({ err: err });
           

            this.flashMessage.show({
              status: "error",

             message: err.response.data.message+ " "+ this.flashErrors(err.response.data.errors),
              blockClass: "custom-block-class",
            });
          } else {
            this.flashMessage.show({
              status: "error",

              message: this.$t("auth.resend_otp_failed"),
            });
            console.log({ err: err });
          }

          this.sending = false;
        });
    },



 
    
    ResetPassword() {
      this.sending = true;
      let url = "user/resetpassword/"+this.auth.user.id;

      this.$store
        .dispatch("auth/VerifyOtp", {
          url: url,
          email: this.form.email,
          password:this.form.password,
          password_confirmation :this.form.confirm_password,
          type: this.chosemethod,
          phone: this.form.phone,
        })
        .then((response) => {
          this.sending = false;

          this.showOtp = true;
          this.flashMessage.show({
            status: "success",

            message: this.$t("verification.password_reset_sucessful"),
          });

           this.$router.push({ name: "Login" });
        })
        .catch((err) => {
          console.log({ err: err });

          if (err.response.status == 422) {
            console.log({ err: err });
            console.log(err.response.data.message);

            this.flashMessage.show({
              status: "error",

              message: err.response.data.message+ " "+ this.flashErrors(err.response.data.errors),
              blockClass: "custom-block-class",
            });
          } else {
            this.flashMessage.show({
              status: "error",

              message: this.$t("auth.reset_password_failed"),
            });
            console.log({ err: err });
          }

          this.sending = false;
        });
    },





    Verify() {
      this.sending = true;
      let url = "";

      if (this.chosemethod == "email") {
        url = "user/resetemail";
      } else {
        url = "user/reset";
      }

      this.$store
        .dispatch("auth/verifyuser", {
          url: url,
          email: this.form.email,
          phone: this.form.phone,
        })
        .then((response) => {
          this.sending = false;
          this.showChoseMethod=false;
          this.showOtp = true;
          this.flashMessage.show({
            status: "success",

            message: this.$t("verification.we_have_sent_an_otp_code_to_your_inbox"),
          });
        })
        .catch((err) => {
          console.log({ err: err });

          if (err.response.status == 422) {
            console.log({ err: err });
            console.log(err.response.data.message);

            this.flashMessage.show({
              status: "error",

              message: err.response.data.message+ " "+ this.flashErrors(err.response.data.errors),
              blockClass: "custom-block-class",
            });
          } else {
            this.flashMessage.show({
              status: "error",

              message: this.$t("auth.resend_otp_failed"),
            });
            console.log({ err: err });
          }

          this.sending = false;
        });
    },

    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];
      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty,
        };
      }
    },

    setLang(data) {
      console.log(data);
      this.$i18n.locale = data;
      this.$store.commit("auth/setAppLanguage", data);
    },

    flashErrors(errors) {
      let err = "";
      if (errors) {
        Object.values(errors).forEach((element) => {
          err = element[0];
        });
      }

      return err;
    },

    clearForm() {
      this.$v.$reset();

      this.form.password = null;
      this.form.email = null;
    },
    saveUser() {
      this.sending = true;

      this.login();
    },
  },
};
</script>

<style scoped>
.w-90 {
  width: 90%;
}

.l-20 {
  line-height: 20px;
  font-size: 18px;
}

.buttonn {
  width: 150px !important;
}

.vl {
  border-left: 1px solid green;
  height: 50px;
}

.f-right {
  float: left;
}

.f-left {
  float: right;
}

.m-left {
  align-content: left;
  text-align: left;
}
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
.md-checkbox {
  display: flex;
}
.b-color {
  background-color: orange;
  color: white;
}
.p-card {
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 80px;
  padding-bottom: 80px;
}
.b-div {
  background-image: url("ash.jpg");
  background-position: center;
  background-size: cover;
}
.t-center {
  text-align: center;
}

.center {
  align-content: center;
  text-align: center;
}

.b-w {
  width: 230px;
}

.f-22 {
  font-size: 22px;
}
.f-12 {
  font-size: 12px;
}
@media only screen and (max-width: 768px) {
  .p-card {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 100px;
  }
}

.localfoter {
  margin-top: -10px;
}
</style>
