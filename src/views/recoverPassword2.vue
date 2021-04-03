<template>
  <b-container class="container p-5 h-100 w-100 mx-auto my-auto" fluid>
    <div class="w-100 h-100 my-auto mx-auto">
      <b-card tag="article" style="max-width: 30rem;" class="my-auto mx-auto">
        <img src="../assets/img/logo_bridge_africa.png" class="image" alt="" />
        <div class="step-2">
          <b-card-text class="w-75 mx-auto mt-5">
            <div class="row">
              <div class="col">
                {{ recoverPassData }}
              </div>

              <div class="col-4">
                <b-button class="btnz" @click="change">
                  Change
                </b-button>
              </div>
              Enter the that you received.
            </div>
          </b-card-text>
          <b-form @submit="next" class="w-75 mx-auto">
            <b-form-group id="input-group-4">
              <b-form-input
                id="input-4"
                v-model="code"
                type="text"
                placeholder="Enter the code that your received"
                required
              />
            </b-form-group>
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
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      code: "",
    };
  },
  computed: mapGetters(["recoverPassData"]),
  methods: {
    change(e) {
      e.preventDefault();
      window.location.href = "recoverPass1";
    },
    next(e) {
      e.preventDefault();
      window.location.href = "recoverPass3";
    },
  },
};
</script>

<style scoped>
.image {
  width: 80%;
}

<<<<<<< HEAD
.button {
  margin-left: 265px;
  background-color: #e75c18;
  border: none;
}
.btnz {
  border: solid 1px #e75c18;
  color: #e75c18;
  background-color: #fff;
}

.btnz:hover {
  color: #fff;
  background-color: #e75c18;
  border: none;
}

=======
>>>>>>> 5fa58d2361ad6890173d8e3b361c69f390e719da
@media only screen and (max-width: 768px) {
  .btn {
    margin-left: -20px;
    border: solid 1px #e75c18;
  }
}
</style>
