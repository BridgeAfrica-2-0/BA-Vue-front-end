<template>
  <b-container>
    <flashMessage />
    <div class="">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Privacy"
          label-size="md"
          label-class="font-weight-bold pt-0 username"
          class="mb-0 text"
        >
          <b-form-group class="mb-0" v-slot="{ ariaDescribedby }">
            <b-form-radio-group
              class="pt-2 text"
              :options="['Publics', 'Private']"
              :aria-describedby="ariaDescribedby"
              v-model="form.privacy"
            ></b-form-radio-group>
          </b-form-group>
        </b-form-group>
      </b-container>
      <hr />
    </div>

    <div class="">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Posting Permissions"
          label-size="md"
          label-class="font-weight-bold pt-0 username"
          class="mb-0 text"
        >
          <b-form-group class="mb-0" v-slot="{ ariaDescribedby }">
            <b-form-radio-group
              class="pt-2 text "
              :options="['Admin only', 'Allow visitors/followers to post']"
              :aria-describedby="ariaDescribedby"
              v-model="form.post_permission"
            ></b-form-radio-group>
          </b-form-group>
        </b-form-group>
      </b-container>

      <hr />
    </div>

    <div>
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Post Approval"
          label-size="md"
          label-class="font-weight-bold pt-0 username"
          class="mb-0"
        >
          <b-form-checkbox
            class="text"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
            v-model="form.post_approval"
          >
            All posts must be approved by an admin
          </b-form-checkbox>
        </b-form-group>
      </b-container>
      <hr />
    </div>

    <b-container>
      <b-link href="#foo" class="f-left text" v-on:click="deleteNetwork"
        >Delete Network</b-link
      >
    </b-container>

    <div class="b-bottomn">
      <b-button variant="primary" class="a-button-l text" v-on:click="submit()"
        >Save Changes</b-button
      >
      <br />
    </div>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  name: "general",
  data() {
    return {
      form: {
        privacy: "",
        post_permission: "",
        post_approval: ""
      },
      network_id: ""
    };
  },

  methods: {
    submit() {
      this.axios.post("/network/generalSettings/1", this.form).then(
        function(response) {
          // Handle success
        }.bind(this)
      );
      console.log(this.form);
      this.flashMessage.show({
        status: "success",
        message: "Changes Made Successfuly"
      });
    },

    deleteNetwork() {
      this.$axios
        .post("/network", this.network_id)
        .then(function(response){

        }.bind(this));
      console.log(this.form);
      this.flashMessage.show({
        status: "success",
        message: "Deleted Successfuly"
      });
    }
  }
};
</script>

<style scoped>
.b-bottom {
  margin-top: 20px;
  margin-bottom: 30px;
  padding-bottom: 10px;

  border-bottom: 0.5px solid;
  border-color: gray;
}

.b-bottomn {
  margin-bottom: 30px;
  padding-bottom: 10px;
}

.f-left {
  float: left;
}

.tabs {
  width: 100%;
}

.a-button-l {
  margin-bottom: 1000px;
  /*align-content: right;*/
  float: right;
}
.a-text {
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
}
.settings {
  margin-left: 90%;
  position: relative;
  top: 40px;
}

@media only screen and (max-width: 768px) {
  .settings {
    top: -5px;
    left: -20px;
  }
  .btn {
    font-size: 12px;
  }
}
</style>
