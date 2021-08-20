<template>
  <b-container class="container p-2 p-md-5 h-100 w-100 mx-auto my-auto" fluid>
    <div class="w-100 h-100 my-auto mx-auto">
      <b-card tag="article" class="my-auto mx-auto text-center mw-30">
        <img src="../assets/logo.png" class="image" alt="" />
        <div class="step-2">
          <b-card-text class="w-75 mx-auto mt-5 text-left">
            <span class="verif-text mb-5"> Recover Password </span> <br />
            <br />

            <div class="text-left">Enter Your Phone Number</div>
          </b-card-text>
          <b-form class="w-75 mx-auto">
            <md-field>
              <label for="phone"> Phone</label>
              <md-input
                type="text"
                name="phone"
                id="phone"
                v-model="phone"
                required
              />
            </md-field>

            <br />
            <b-button
              class="btn btn-primary button float-right"
              @click.prevent="verify"
            >
              Next
            </b-button>
          </b-form>
        </div>
      </b-card>
    </div>

    <FlashMessage />
  </b-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      phone: "",
    };
  },
  methods: {
    ...mapActions(["auth/recoverPassword2"]),

    verify() {
      this.$store
        .dispatch("auth/recoverPassword2", {
          phone: this.phone,
        })
        .then(() => {
          this.$router.push({ name: "RecoverPass2" });
        })
        .catch((err) => {
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
