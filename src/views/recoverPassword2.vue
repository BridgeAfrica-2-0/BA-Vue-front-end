<template>
  <b-container class="container  p-2 p-md-5 h-100 w-100 mx-auto my-auto" fluid>
    <div class="w-100 h-100 my-auto mx-auto">
      <b-card tag="article" class="my-auto mx-auto text-center mw-30">
        <img src="../assets/logo.png" class="image" alt="" />

        <div class="step-2">
          <b-card-text class="w-75 mx-auto mt-5"> </b-card-text>
          <b-form class="w-75 mx-auto">
            <b-form-group id="input-group-4">
              <md-field>
                <label for="otp"> OTP</label>
                <md-input
                  type="text"
                  name="otp"
                  id="otp"
                  v-model="code"
                  required
                />
              </md-field>
            </b-form-group>

            <b-row class="mt-2">
              <b-col cols="6"> </b-col>
              <b-col cols="6">
                <b-button
                  class="btn btn-primary button float-right"
                  @click.prevent="next"
                >
                  Next
                </b-button>
              </b-col>
            </b-row>
          </b-form>
        </div>
      </b-card>
    </div>
    <FlashMessage />
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      code: "",
    };
  },
  computed: mapGetters(["recoverPassData"]),
  methods: {
    change() {
      this.$router.push({ name: "RecoverPass1" });
    },

    next() {
      console.log(this.$store.state.auth.passwordToken);
      const otpVerifcationUrl = "user/verifyResetOtp";
      axios
        .post(otpVerifcationUrl, {
          OTP: this.code,
          phone: this.$store.state.auth.passwordToken.user.phone,
        })
        .then(response => {
          if (response.status === 200) {
            console.log(response);
            this.$router.push({ name: "RecoverPass3" });
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

              message: err.response.data.message,
            });
          }
        });
    },
  },
};
</script>

<style scoped>
.image {
  width: 80%;
}
.button {
  margin-left: 265px;
  background-color: #e75c18;
  border: none;
}
.btnz {
  border: solid 1px #e75c18;
  color: #e75c18;
  background-color: #fff;

  padding: 2px !important;
  /* float: left; */
  margin-right: 20px;
}

.btnz:hover {
  color: #fff;
  background-color: #e75c18;
  border: none;
}

@media only screen and (max-width: 768px) {
  .btn {
    margin-left: -20px;
    border: solid 1px #e75c18;
  }
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
