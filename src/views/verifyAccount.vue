<template>
  <b-container
    class="container p-2 p-md-5 h-100 w-100 mx-auto my-auto blec"
    fluid
  >
    <div class="w-100 h-100 my-auto mx-auto mt-10">
      <b-card tag="article" class="my-auto mx-auto text-center mw-30 h-100">
        <img src="../assets/logo.png" class="image" alt="" /> <br />
        <br />

        <span class="verif-text mb-5"> Verification </span>

        <div class="step-2">
          <b-card-text class="w-75 mx-auto mt-5 text-left">
            <div class="text-center">You will get an OTP by SMS</div>
          </b-card-text>
          <b-form class="w-75 mx-auto text-center">
            <b-form-input
              id="token"
              v-model="token"
              type="text"
              placeholder="****"
              required
            />

            <br />

            <b-button
              class="btn btn-primary buttonn"
              @click.prevent="Verify"
              type="submit"
            >
              Verify
            </b-button>
          </b-form>

          <p class="mt-5 mt-md-2">
            Didn't recieved the verification OTP?
            <b-link @click.prevent="resendOtp()"> Resend OTP </b-link>
          </p>
        </div>
      </b-card>
    </div>

    <FlashMessage />
  </b-container>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      token: "",
    };
  },
  methods: {
    resendOtp() {
      axios
        .post("user/resendOtp", {
          phone: this.$store.state.auth.user.user.phone,
        })
        .then((response) => {
          if (response.data.success) {
            this.flashMessage.show({
              status: "success",
              title: "Successfully Send",
              message: "SMS successfully send check your inbox",
            });
          } else {
            console.log(response.data);
          }
        })
        .catch((err) => {
          console.log({ err: err });

          this.flashMessage.show({
            status: "error",
            title: "Send Failed",
            message: "Message not send",
          });
        });
    },

    Verify() {
      console.log(this.$store.state.auth.user);
      this.$store
        .dispatch("auth/verify", {
          token: this.token,

          phone: this.$store.state.auth.user.data.phone,
        })
        .then(() => {
          this.$router.push({ name: "welcome" });
        })
        .catch((err) => {
          console.log(err);

          this.flashMessage.show({
            status: "error",
            title: "Verification Failed",
            message: "Unable to verify your account",
          });
        });
    },
  },
};
</script>

<style scoped>
.verif-text {
  font-size: 30px;
  margin-top: 10px;
}
.image {
  width: 50%;
}

.buttonn {
  background-color: #e75c18;
  border: none;
  color: white;
  width: 150px;
}

.buttonn:hover {
  background-color: #ed5a11;
}

.buttonn:active {
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

