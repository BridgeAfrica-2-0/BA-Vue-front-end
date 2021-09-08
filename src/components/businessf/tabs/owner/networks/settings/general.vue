<template>
  <b-container>
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
              :options="['Public', 'Private']"
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
              v-model="form.PostingPermissions"
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
            v-model="form.PostApproval"
          >
            All posts must be approved by an admin
          </b-form-checkbox>
        </b-form-group>
      </b-container>
      <hr />
    </div>

    <b-container>
      <b-link href="#foo" class="f-left text" v-on:click="deleteNetwork">Delete Network</b-link>
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
        PostingPermissions: "",
        PostApproval: ""
      }
    };
  },

  methods: {
    submit() {
      axios.post("", this.form).then(
        function(response) {
          // Handle success
        }.bind(this)
      );
      console.log(this.form);
    },

    deleteNetwork() {
      this.$axios.delete("")
        .then( res => {
          let { status, data, error } = res.data;
          if(status) {
            this.flashMessage.success({
              title: 'Don\'t Warry',
              message: 'Be Happy!',
              time: 5000,
              flashMessageStyle: {
                backgroundColor: 'linear-gradient(#e66465, #9198e5)'
              }
            });
          }
          else {
            this.flashMessage.error({title: error.name || 'Error', message: error.message});
          }
        })
        .catch();
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
