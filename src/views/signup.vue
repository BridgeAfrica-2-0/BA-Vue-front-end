<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-50 md-small-size-100 p-card">
        <md-card-header>
          <div class="md-title center">
            {{ $t("auth.Sign_Up_On_Bridge_Africa") }}
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
                  {{ $t("auth.Sign_Up_with_facebook") }}
                </md-button>
              </b-col>

              <b-col cols="12" md="6" lg="12" xl="6">
                <md-button
                  @click.prevent="authProvider('google')"
                  class="b-color b-w"
                  style="color: white"
                >
                  <b-icon icon="google" aria-hidden="true"></b-icon>
                  {{ $t("auth.Sign_Up_with_Google") }}
                </md-button>
              </b-col>
            </b-row>
          </div>

          <br />

          <p class="t-center">- {{ $t("auth.OR") }} -</p>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100 m-left">
              <md-field :class="getValidationClass('firstName')">
                <label for="first_name"> {{ $t("auth.First_Name") }} </label>
                <md-input
                  type="text"
                  name="firstName"
                  id="firstName"
                  v-model="form.firstName"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.firstName.required">
                  {{ $t("auth.First_Name_is_required") }}
                </span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('lastName')">
                <label for="lastName"> {{ $t("auth.Last_Name") }} </label>
                <md-input
                  type="text"
                  name="lastName"
                  id="lastName"
                  v-model="form.lastName"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.lastName.required">
                  {{ $t("auth.last_Name_is_required") }}
                </span>
              </md-field>
            </div>
          </div>

          <md-field :class="getValidationClass('email')">
            <label for="email"> {{ $t("auth.email") }} </label>
            <md-input
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              v-model="form.email"
              :disabled="sending"
            />
            <span class="md-error" v-if="!$v.form.email.required">
              {{ $t("auth.the_email_is_required") }}
            </span>
            <span class="md-error" v-else-if="!$v.form.email.email"
              >{{ $t("auth.invalid_email") }}
            </span>
          </md-field>

          <md-field :class="getValidationClass('tel')">
            <label for="tel"> {{ $t("auth.Tel") }} </label>
            <md-input type="number" name="tel" id="tel" v-model="form.tel" />
            <span class="md-error" v-if="!$v.form.tel.required">
              {{ $t("auth.tel_is_required") }}
            </span>
          </md-field>

          <md-field :class="getValidationClass('password')">
            <label for="password"> {{ $t("auth.Password") }} </label>
            <md-input
              type="password"
              name="password"
              id="password"
              v-model="form.password"
              :disabled="sending"
            />

            <span class="md-error" v-if="!$v.form.password.required">
              {{ $t("auth.password_is_required") }}
            </span>

            <span class="md-error" v-if="!$v.form.password.minLength" >
              {{ $t("auth.password_is_required") }}
              {{ $t("auth.Password_must_have_at_least") }} {{ $v.form.password.$params.minLength.min }} letters.
            </span>

            
          </md-field>

          <md-field :class="getValidationClass('confirmPassword')">
            <label for="confirmPassword"> {{ $t("auth.confirm_password") }} </label>
            <md-input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              v-model="form.confirmPassword"
              :disabled="sending"
            />
            <span class="md-error" v-if="!$v.form.confirmPassword.required"
              >   {{ $t("auth.password_is_required") }}
            </span>

             <span class="md-error" v-if="!$v.form.confirmPassword.sameAsPassword"
              > {{ $t("auth.Password_is_required") }} 
               {{ $t("auth.Passwords_must_be_identical") }} .
            </span>

          </md-field>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <div>
          <b-row>
            <b-col cols="6">
              <md-button
                type="submit"
                class="b-color f-left"
                style="color: white"
                :disabled="sending"
              >
                {{ $t("auth.signup") }}
              </md-button>
            </b-col>
            <b-col cols="6">
              <router-link to="login">
                <md-button class="md-raised f-right"
                  >{{ $t("auth.login") }}
                </md-button>
              </router-link>
            </b-col>
          </b-row>
        </div>

        <div>
          <br />
          <br />

          <label> {{ $t("auth.by_loging_in_you_agree_to_bridge_africa") }} </label>
          <br />

          <label>
            <b-link href="#">{{ $t("auth.terms_and_conditions") }} </b-link> &
            <b-link href="#"> {{ $t("auth.Privacy_policies") }}</b-link>
          </label>
        </div>
      </md-card>

      <div class="md-layout-item md-size-50 md-small-size-100 b-div"></div>

      <md-snackbar :md-active.sync="userSaved">
        {{ $t("auth.the_user") }} {{ lastUser }} {{ $t("auth.was_saved_with_success") }}
      </md-snackbar>
    </form>

    <hr class="localfoter" />

    <p class="text-center">
     
      <span class="display-inline">
        <b-link @click=" setLang('en')  "> {{ $t("auth.english") }} </b-link>
        <span class="vl"></span> 
        <b-link class="ml-2"  @click="setLang('fr')">
          {{ $t("auth.french") }}
        </b-link>
      </span>


      Bridge Africa © 2021
    </p>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import axios from "axios";

import { required,sameAs, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "FormValidation",
  mixins: [validationMixin],
  data: () => ({
    baseurl: process.env.baseURL,
    form: {
      firstName: null,
      lastName: null,
      gender: null,
      age: null,
      email: null,
      password: null,

      confirmPassword: null,
    },
    userSaved: false,
    sending: false,
    lastUser: null,
  }),

  validations: {
    form: {
      firstName: {
        required,
      },

      lastName: {
        required,
      },

      password: {
        required,
         minLength: minLength(8),
      },

      confirmPassword: {
        required,
         minLength: minLength(8),
         sameAsPassword: sameAs('password')
      },

      tel: {
        required,
      },

      email: {
       // required,
       email,
      },
    },
  },

  methods: {
    authProvider(provider) {
      let self = this;
      this.$auth
        .authenticate(provider)
        .then((response) => {
          self.socialLogin(provider, response);
          console.log(response);
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    setLang(data){
        
         console.log(data);
          this.$i18n.locale = data;
         this.$store.commit("auth/setAppLanguage", data);
    },


     flashErrors(errors) {
      let err = "";
      Object.values(errors).forEach((element) => {
        err = element[0];
      });

      return err;
    },

    socialLogin(provider, response) {
      this.$http
        .post("user/social/" + provider, response)
        .then(({ data }) => {
          console.log(data.data);

          this.$store.commit("auth/setUserData", data.data);

          this.flashMessage.show({
            status: "success",

            message: this.$t('auth.Successfully_Register'),
          });

          this.$router.push({ name: "welcome" });
          return response.data.token;
        })
        .catch((err) => {
          console.log({ err: err });
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
    clearForm() {
      this.$v.$reset();
      this.form.firstName = null;
      this.form.lastName = null;

      this.form.email = null;
      this.password = null;
      this.confirmPassword = null;
    },
    saveUser() {
      this.sending = true;

      axios
        .post("user/register", {
          first_name: this.form.firstName,
          last_name: this.form.lastName,
          email: this.form.email,
          password: this.form.password,
          phone: this.form.tel,
          password_confirmation: this.form.password,
        })
        .then(({ data }) => {
          console.log(data.data);
          this.$store.commit("auth/setSignupData", data.data);

          this.flashMessage.show({
            status: "success",
            title: this.$t('auth.Successfully_Register'),
        
          });

          this.$router.push({ name: "verifyAccount" });
        })
        .catch((err) => {
          this.sending = false;

          if (err.response.status == 422) {
            console.log({ err: err });
            console.log(err.response.data.message);

            this.flashMessage.show({
              status: "error",

              message: this.flashErrors(err.response.data.errors),
               blockClass: "custom-block-class",
            });
          } else {
            this.flashMessage.show({
              status: "error",
              title: this.$t('auth.Registration_Failed'),
              message: this.$t('auth.Unable_to_store_this_data'),
            });
            console.log({ err: err });
          }
        });
    },
    validateUser() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.saveUser();
      }
    },
  },
};
</script>

<style scoped>
.vl {
  border-left: 1px solid green;
  height: 50px;
}

.localfoter {
  margin-top: -10px;
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
  padding-top: 30px;
  padding-bottom: 30px;
}

@media only screen and (max-width: 768px) {
  .p-card {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 100px;
  }
}

.center {
  align-content: center;
  text-align: center;
}

.b-w {
  width: 230px;
}

.b-div {
  background-image: url("ash.jpg");
  background-position: center;
  background-size: cover;
}
.t-center {
  text-align: center;
}
.b-primary {
  background-color: #425e9e;
}
</style>
