<template>
  <b-container class="container p-2 p-md-5 h-100 w-100 mx-auto my-auto" fluid>
    <div class="w-100 h-100 my-auto mx-auto">
      <b-card tag="article" class="my-auto mx-auto text-center mw-30">
        <img src="../assets/logo.png" class="image" alt="" />
        <div class="step-2">
          <b-card-text class="w-75 mx-auto mt-5">
            <b-alert show v-if="!match" variant="danger"
              >{{ $t('passrecover.Passwords_do_not_match') }}</b-alert
            >
            <div class="row">
              <div class="col text-left">{{ $t('passrecover.Create_New_Password') }}</div>
            </div>
          </b-card-text>
          <b-form class="w-75 mx-auto">
            <b-form-group id="input-group-4">
              <md-field>
                <label for="password1"> {{ $t('passrecover.Password') }}</label>
                <md-input
                  type="password"
                  name="password1"
                  id="password1"
                  v-model="password1"
                  required
                />
              </md-field>

              <md-field>
                <label for="password2"> {{ $t('passrecover.Confirm_Password') }}</label>
                <md-input
                  type="password"
                  name="password2"
                  id="password2"
                  v-model="password2"
                  required
                />
              </md-field>
            </b-form-group>
            <b-button
              class="btnz"
              @click.prevent="next"
              variant="outline-primary"
            >
              {{ $t('passrecover.Finish') }}
            </b-button>
          </b-form>
        </div>
      </b-card>
    </div>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      code: "",
      password1: "",
      password2: "",
      match: true
    };
  },
  methods: {
    change(e) {
      e.preventDefault();
      window.location.href = "recoverPass1";
    },
    recover(e) {
      e.preventDefault();
      if (this.password1 == this.password2) {
        window.location.href = "login";
      } else {
        this.match = false;
        this.password1 = "";
        this.password2 = "";
      }
    },

    next() {
      if (this.password1 == this.password2) {
        console.log(this.$store.state.auth.passwordToken.user.phone);

        const resetpasswordUrl =
          "user/resetpassword/" + this.$store.state.auth.passwordToken.user.id;
        axios
          .post(resetpasswordUrl, {
            password: this.password1,
            password_confirmation: this.password2,
            phone: this.$store.state.auth.passwordToken.user.phone
          })
          .then(response => {
            if (response.status === 200) {
              var delayInMilliseconds = 2000;

              setTimeout(function() {}, delayInMilliseconds);

              this.flashMessage.show({
                status: "success",
                title: this.$t('passrecover.Password_Reset_Success'),
                message:
                  this.$t('passrecover.You_have_successfull_Reset_your_password_you_will_be_redirected_in_a_second')
              });

              this.$router.push({ name: "Login" });
            } else {
              console.log(response.data);
            }
          })
          .catch(err => {
            if (err.response.status === 422) {
              console.log({ err: err });
              console.log(err.response.data.message);

              this.flashMessage.show({
                status: "error",

                message: err.response.data.message
              });
            }
          });
      } else {
        this.match = false;
        this.password1 = "";
        this.password2 = "";
      }
    }
  }
};
</script>

<style scoped>
.image {
  width: 50%;
}

.btnz {
  border: solid 1px #e75c18;
  color: #e75c18;
  background-color: #fff;
  margin-left: 265px;
}

.btnz:hover {
  color: #fff;
  background-color: #e75c18;
  border: none;
}
@media only screen and (max-width: 768px) {
  .btn {
    margin-left: -20px;
  }
}

.mw-30 {
  max-width: 30rem;
}

.verif-text {
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.image {
  width: 50%;
}

.button {
  margin-left: 265px;
  background-color: #e75c18;
  border: none;
  color: white;
}

.button:hover {
  background-color: #ed5a11;
}
.mw-30 {
  max-width: 30rem;
}

@media only screen and (max-width: 768px) {
  .image {
    width: 75%;
  }

  .mt-10 {
    margin-top: 10px !important;
  }

  .card-body {
    margin-top: 30px !important;
    padding-bottom: 100px !important;
  }
}
</style>
