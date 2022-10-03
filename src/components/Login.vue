<template>
  <div>
    <form novalidate autocomplete="off" class="md-layout" @submit.prevent="validateUser">
      <div class="md-layout-item md-size-50 md-small-size-100 p-card">
        <md-card-header>
          <div class="md-title center f-22">
            {{ $t("auth.Login_To_Bridge_Africa") }}
          </div>
        </md-card-header>

        <md-card-content>
        
          <div class="center">
            <b-row>
              <b-col cols="12" md="6" lg="12" xl="6">
                <md-button
                  @click.prevent="authProvider('facebook')"
                  class="md-raised md-primary b-w"
                >
                  <b-icon icon="facebook" aria-hidden="true"></b-icon>
                  {{ $t("auth.Login_With_Facebook") }}
                </md-button>
              </b-col>

              <b-col cols="12" md="6" lg="12" xl="6">
                <md-button
                  @click.prevent="authProvider('google')"
                  class="b-color b-w"
                  style="color: white"
                >
                  <b-icon icon="google" aria-hidden="true"></b-icon>
                  {{ $t("auth.login_with_google") }}
                </md-button>
              </b-col>
            </b-row>
          </div>

          <br />

          <p class="t-center">- {{ $t("auth.OR") }} -</p>

          <md-field :class="getValidationClass('email')">
            <label for="email"> {{ $t("auth.email") }} / {{ $t("auth.Tel") }} </label>
            <md-input
              type="text"
              name="email"
              id="email"
              autocomplete="off"
              v-model="form.email"
              :disabled="sending"
            />
            <span class="md-error" v-if="!$v.form.email.required">
              {{ $t("auth.the_email_is_required") }}
            </span>
            <span class="md-error" v-else-if="!$v.form.email.email">
              {{ $t("auth.invalid_email") }}
            </span>
          </md-field>

          <md-field>
            <label for="password"> {{ $t("auth.Password") }} </label>
            <md-input
              type="password"
              name="password"
               autocomplete="off"
              id="password"
              v-model="form.password"
              :disabled="sending"
            />
          </md-field>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100 m-left">
              <b-form-checkbox
                id="checkbox-1"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted"
              >
                {{ $t("auth.remeber_me") }}
              </b-form-checkbox>
            </div>

            <div class="md-layout-item md-small-size-100">
              <br />
            </div>
          </div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <div>
          <b-row>
            <b-col cols="6">
              <md-button
                type="submit"
                :disabled="sending"
                class="b-color f-left"
                style="color: white"
              >
                {{ $t("auth.login") }}
              </md-button>
            </b-col>
            <b-col cols="6">
              <router-link to="signup">
                <md-button class="md-raised f-right"
                  >{{ $t("auth.signup") }}
                </md-button>
              </router-link>
            </b-col>
          </b-row>

          <router-link to="password" class="nav-link text">
            {{ $t("auth.forget_password") }}
          </router-link>
        </div>

        <div></div>

        <div>
          <br />
          <br />

          <label class="f-12">
            {{ $t("auth.by_loging_in_you_agree_to_bridge_africa") }}
          </label>
          <br /> 

          <label class="f-12">
            <b-link href="#"> {{ $t("auth.terms_and_conditions") }} </b-link> &
            <b-link href="#"> {{ $t("auth.Privacy_policies") }} </b-link>
          </label>
        </div>
      </div>

      <div class="md-layout-item md-size-50 md-small-size-100 b-div"></div>

      <md-snackbar :md-active.sync="userSaved">
        {{ $t("auth.the_user") }} {{ lastUser }} {{ $t("auth.was_saved_with_success") }} !
      </md-snackbar>
    </form>

   
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import "vue-material/dist/vue-material.min.css";

import "@/assets/default.css";
import { required, email } from "vuelidate/lib/validators";
export default {
  name: "FormValidation",
  boolean: true,
  mixins: [validationMixin],
  data: () => ({
    form: {
      password: null,
      email: null
    },

    langs: ["en", "fr"],

    userSaved: false,
    sending: false,
    lastUser: null
  }),
  validations: {
    form: {
      password: {
        required
      },
      email: {
        required
        
      }
    }
  },

   created(){
   
  },

  methods: {
    getValidationClass(fieldName) { 
      const field = this.$v.form[fieldName];
      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },

  

    flashErrors(errors) {
      let err = "";
      if(errors){   
      Object.values(errors).forEach((element) => {
        err = element[0];
      });

      }

      return err;
    },

    authProvider(provider) {
      let self = this;
      this.$auth
        .authenticate(provider)
        .then(response => {
          self.socialLogin(provider, response);
          console.log(response);
        })
        .catch(err => {  
          console.log({ err: err });
        });
    },

  closeModal(){
   
   this.$emit("hideAuthModal")
  },
  
    socialLogin(provider, response) {
      this.$http
        .post("user/social/" + provider, response)
        .then(({ data }) => {
          console.log(data);

          this.$store.commit("auth/setUserData", data.data);
           this.$store.dispatch("auth/profilePackage")
          this.flashMessage.show({
            status: "success",

            message: this.$t('auth.Successfully_Register')
          });
        
         this.closeModal();
          
        })
        .catch(err => {
          console.log({ err: err });   
        });
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

    login() {
      this.$store
        .dispatch("auth/login", {
          email: this.form.email,
          password: this.form.password
        })
        .then(() => {
          this.sending = false;
           this.$store.dispatch("auth/profilePackage")

           this.closeModal();

        })
        .catch(err => {
          console.log(err);
          this.sending = false;

          if (err.response.status == 422) {
            console.log({ err: err });

            this.flashMessage.show({
              status: "error",
              message: err.response.data.message+ " "+ this.flashErrors(err.response.data.errors),
            });
          } else if (err.response.status == 403) {
            
            console.log(err.response.data); 
           this.$store.commit("auth/setSignupData",err.response.data.data);
            this.flashMessage.show({
              status: "error",
              message: err.response.data.message, 
            });
            
            this.closeModal();
            this.$router.push({ name: "verifyAccount" });
          }
           else {
            this.flashMessage.show({
              status: "error",

              message: this.$t('auth.An_error_has_occured')
            });
          }
        });
    },

    validateUser() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.saveUser();
      }
    }
  }
};
</script>

<style scoped>
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
 background-image: url("/assets/home/login-ban.jpg");
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
