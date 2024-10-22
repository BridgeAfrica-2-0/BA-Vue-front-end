<template>
  <div style="height: 100vh;">
    <form
      novalidate
      autocomplete="off"
      class="md-layout"
      @submit.prevent="validateUser"
      style="height: 100vh;"
    >
      <md-card class="md-layout-item md-size-45 md-small-size-100 p-card shadow-none">
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
                  class="md-raised md-primary b-w rounded"
                >
                  <b-icon icon="facebook" aria-hidden="true"></b-icon>
                  {{ $t("auth.Login_With_Facebook") }}
                </md-button>
              </b-col>

              <b-col cols="12" md="6" lg="12" xl="6">
                <md-button
                  @click.prevent="authProvider('google')"
                  class="b-color b-w rounded"
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
            <label for="email">
              {{ $t("auth.email") }} / {{ $t("auth.Tel") }}
            </label>
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
          <div>
              <md-button
                type="submit"
                class="btn btn-primary px-4 w-100 rounded m-0"
                style="color: white"
                :disabled="sending"
              >
              {{ $t("auth.login") }}
              </md-button>
              <div class="row m-0 mt-2">
                <span class="mr-2 text-secondary">{{ $t("auth.You_dont_have_an_account") }}</span>
                <router-link to="signup">
                  {{ $t("auth.signup") }}
              </router-link>
              </div>
        </div>

          <router-link to="password" class="nav-link text">
            {{ $t("auth.forget_password") }}
          </router-link>
        </div>

        <div></div>

        <div class="mt-4 text-center" style="font-size: 15px;">

<label>
  {{ $t("auth.by_loging_in_you_agree_to_bridge_africa") }}
</label>

<label class="ml-2">
  <b-link class="font-weight-bold" href="#">{{ $t("auth.terms_and_conditions") }} </b-link> &
  <b-link class="font-weight-bold" href="#"> {{ $t("auth.Privacy_policies") }}</b-link>
</label>
<p class="text-center" style="font-size: 14px;">
<span class="display-inline">
  <b-link @click="setLang('en')"> {{ $t("auth.english") }} </b-link>
  <span class="vl"></span>
  <b-link class="ml-2" @click="setLang('fr')">
    {{ $t("auth.french") }}
  </b-link>
</span>

Bridge Africa © 2021
</p>
</div>
      </md-card>

      <div class="md-layout-item md-size-55 md-small-size-100 b-div"></div>

      <md-snackbar :md-active.sync="userSaved">
        {{ $t("auth.the_user") }} {{ lastUser }}
        {{ $t("auth.was_saved_with_success") }} !
      </md-snackbar>
    </form>

    <hr class="localfoter" />

    <p class="text-center">
      <span class="display-inline">
        <b-link @click="setLang('en')"> {{ $t("auth.english") }} </b-link>
        <span class="vl"></span>
        <b-link class="ml-2" @click="setLang('fr')">
          {{ $t("auth.french") }}
        </b-link>
      </span>

      Bridge Africa © 2021
    </p>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { previousRoute } from "@/router";
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

  created() {
    if (this.$store.getters["auth/isLogged"]) {
      this.$router.push({ name: "dashboard" });
    }
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

    setLang(data) {
      console.log(data);
      this.$i18n.locale = data;
      this.$store.commit("auth/setAppLanguage", data);
    },

    flashErrors(errors) {
      let err = "";
      if (errors) {
        Object.values(errors).forEach(element => {
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

    socialLogin(provider, response) {
      this.$http
        .post("user/social/" + provider, response)
        .then(({ data }) => {
          console.log(data);

          this.$store.commit("auth/setUserData", data.data);
          this.$store.dispatch("auth/profilePackage");
          this.flashMessage.show({
            status: "success",

            message: this.$t("auth.Successfully_Register")
          });

          this.$router.push({ name: "dashboard" });
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

          // if (this.$store.state.auth.user.user.profile_complete == null) {
          //   this.$router.push({ name: "welcome" });
          // } else {
          //   this.$router.push({ name: "dashboard" });
          // }

          this.$store.dispatch("auth/profilePackage");

          if (previousRoute.value) {
            // Redirect to the previous route if it exists
            this.$router.push(previousRoute.value.fullPath);
          } else {
            // Redirect to a default path if no previous route is stored
            this.$router.push(this.$route.query.redirect || "/dashboard");
          }
        })
        .catch(err => {
          console.log(err);
          this.sending = false;

          if (err.response.status == 422) {
            console.log({ err: err });

            this.flashMessage.show({
              status: "error",
              message:
                err.response.data.message +
                " " +
                this.flashErrors(err.response.data.errors)
            });
          } else if (err.response.status == 403) {
            console.log(err.response.data);
            this.$store.commit("auth/setSignupData", err.response.data.data);
            this.flashMessage.show({
              status: "error",
              message: err.response.data.message
            });

            this.$router.push({ name: "verifyAccount" });
          } else {
            this.flashMessage.show({
              status: "error",

              message: this.$t("auth.An_error_has_occured")
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
.md-field {
  align-items: end;
}
.md-field.md-theme-default:after {
  background-color: #ccc;
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
  background-color: #FF0000;
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
