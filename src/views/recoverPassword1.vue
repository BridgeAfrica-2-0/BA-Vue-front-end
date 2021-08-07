<template>
  <b-container class="container p-5 h-100 w-100 mx-auto my-auto" fluid>
    <div class="w-100 h-100 my-auto mx-auto">
      <b-card tag="article" class="my-auto mx-auto text-center mw-30">
        <img src="../assets/logo.png" class="image" alt="" />
        <div class="step-2">
          <b-card-text class="w-75 mx-auto mt-5 text-left">
            <p class="username bold text-left">Recover Password</p>
            <div class="text-left">Enter Your Phone or Email</div>
          </b-card-text>
          <b-form @click.prevent="next" class="w-75 mx-auto">
            <b-form-input
              id="input-4"
              v-model="data"
              type="text"
              placeholder="Phone or Email"
              required
            />

            <br />
            <b-button class="btn btn-primary button float-right" type="submit">
              Next
            </b-button>
          </b-form>
        </div>
      </b-card>
    </div>
  </b-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      data: "",
    };
  },
  methods: {
    ...mapActions(["auth/recoverPassword2"]),

    next() {
      this.$store
        .dispatch("auth/recoverPassword2", {
          email: this.data,
        })
        .then(() => {
          this.$router.push({ name: "RecoverPass2" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
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
</style>
