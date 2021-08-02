<template>
  <b-container class="container p-5 h-100 w-100 mx-auto my-auto" fluid>
    <div class="w-100 h-100 my-auto mx-auto">
      <b-card tag="article" style="max-width: 30rem;" class="my-auto mx-auto">
        <img src="../assets/img/logo_bridge_africa.png" class="image" alt="" />
        <div class="step-2">
          <b-card-text class="w-75 mx-auto mt-5">
            <b-alert show v-if="!match" variant="danger"
              >Passwords do not match</b-alert
            >
            <div class="row">
              <div class="col">
                Create New Password
              </div>
            </div>
          </b-card-text>
          <b-form @submit="recover" class="w-75 mx-auto">
            <b-form-group id="input-group-4">
              <b-form-input
                id="input-4"
                v-model="password1"
                type="password"
                placeholder="Enter New password"
                required
              />
            </b-form-group>
            <b-form-group id="input-group-4">
              <b-form-input
                id="input-4"
                v-model="password2"
                type="password"
                placeholder="Confirm password"
                required
              />
            </b-form-group>
            <b-button class="btnz" type="submit" variant="outline-primary">
              Finish
            </b-button>
          </b-form>
        </div>
      </b-card>
    </div>
  </b-container>
</template>

<script>
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
    }
  }
};
</script>

<style scoped>
.image {
  width: 80%;
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
</style>
