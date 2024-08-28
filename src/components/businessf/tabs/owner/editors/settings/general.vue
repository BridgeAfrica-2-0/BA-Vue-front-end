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
export default {
  name: "general",
  data() {
    return {
      url: this.$route.params.id,
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
      this.axios
        .post("/network/generalSettings/" + this.url, this.form)
        .then(res => {
          console.log(this.form);
          this.flashMessage.success({
            title: "OK",
            message: "Changes Made Successfuly",
            icon: true
          });
        })
        .catch(() => {
          this.flashMessage.error({
            title: "Error",
            message: "Changes not made",
            icon: true
          });
        });
    },

    deleteNetwork() {
      this.$axios
        .delete("/api/v1/network/delete/", this.url)
        .then(function(response) {
          console.log(this.form);
          this.flashMessage.success({
            title: "OK",
            message: "Deleted Successfuly",
            icon: true
          });
        })
        .catch(() => {
          this.flashMessage.error({
            title: "Error",
            message: "Deletion Unsuccessful",
            icon: true
          });
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
