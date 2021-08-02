<template>
  <b-container class="container p-5 h-100 w-100 mx-auto my-auto" fluid>
    <div class="w-100 h-100 my-auto mx-auto">
      <b-card tag="article" style="max-width: 30rem;" class="my-auto mx-auto">
        <img src="../assets/img/logo_bridge_africa.png" class="image" alt="" />
        <div class="step-2">
          <b-card-text class="w-75 mx-auto mt-5">
            Recover Password
            <div>Enter Your Phone or Email</div>
          </b-card-text>
          <b-form @submit="next" class="w-75 mx-auto">
            <b-form-input
              id="input-4"
              v-model="data"
              type="text"
              placeholder="Phone or Email"
              required
            />

            <br />
            <b-button class="button" type="submit">
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
      data: ""
    };
  },
  methods: {
    ...mapActions(["recoverPassword2"]),
    next(e) {
      e.preventDefault();
      this.recoverPassword2(this.data);
      window.location.href = "recoverPass2";
    }
  }
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
</style>
