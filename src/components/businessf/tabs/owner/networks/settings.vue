<template>
  <b-container style="text-align:left">
    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Network Name"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-input
            v-model="form.Network_Name"
            :placeholder="networkinfo.Network_Name"
          ></b-form-input>
        </b-form-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Category"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-input
            id="bname"
            v-model="form.Category"
            :placeholder="networkinfo.Category"
            required
          ></b-form-input>
        </b-form-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Phone 1"
          label-size="md"
          label-class="font-weight-bold pt-0"
          :state="phone1"
          class="mb-0"
        >
          <b-form-input
            id="bname"
            v-model="form.Phone_1"
            :placeholder="networkinfo.Phone_1"
            required
          ></b-form-input>
        </b-form-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Phone 2"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-input
            id="bname"
            v-model="form.Phone_2"
            :placeholder="networkinfo.Phone_2"
            required
          ></b-form-input>
        </b-form-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Email"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-input
            id="bname"
            v-model="form.Email"
            :placeholder="networkinfo.Email"
            required
          ></b-form-input>
        </b-form-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Country"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <country-select
            v-model="form.country"
            :country="country"
            topCountry="US"
            class="form-control"
          />
        </b-form-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="City"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-input
            id="bname"
            v-model="form.City"
            :placeholder="networkinfo.City"
            required
          ></b-form-input>
        </b-form-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Neighborhood"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-input id="bname" placeholder="" required></b-form-input>
        </b-form-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Website"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-input
            id="bname"
            v-model="form.Website"
            :placeholder="networkinfo.Website"
            required
          ></b-form-input>
        </b-form-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label=" Description "
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-textarea
            id="textarea"
            v-model="form.Description"
            :placeholder="networkinfo.Description"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
      </b-container>
    </div>

    <b-container class="">
      <b-row>
        <b-col>
          <div class="b-bottomn f-right">
            <b-button
              variant="primary"
              class="a-button-l b-font"
              v-on:click="submit()"
            >
              Save Changes
            </b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <br />
  </b-container>
</template>

<script>
export default {
  name: "general",
  data() {
    return {
      form: {
        Network_Name: "",
        Category: "",
        Phone_1: "",
        Phone_2: "",
        Email: "",
        Country: "",
        City: "",
        Neighborhood: "",
        Website: "",
        Description: ""
      }
    };
  },
  computed: {
    networkinfo() {
      return this.$store.getters["NetworkSettings/getNinfo"];
    },
    phone1() {
      return this.form.Phone_1 < 9 ? true : false;
    }
  },
  mounted() {
    this.getnetworkinfo();
  },
  methods: {
    submit() {
      this.axios
        .post("/network/update/" + this.url, this.form)
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
        .delete("/network", this.network_id)
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
    },
    getnetworkinfo() {
      this.$store
        .dispatch("NetworkSettings/getnetworkinfo")
        .then(() => {
          console.log("ohh yeah");
        })
        .catch(err => {
          console.log({ err: err });
        });
    }
  }
};
</script>

<style scoped>
.f-left {
  float: left;
}

.f-right {
  float: right;
}
.b-bottom {
  margin-top: 20px;
  margin-bottom: 30px;
  padding-bottom: 10px;

  border-bottom: 0.25px solid rgb(238, 230, 230);
}

.m-left {
  margin-left: -20px;
}

.bb-bottom {
  margin-bottom: 7px;
  margin-top: 5px;
}

.b-font {
  font-size: 14px;
}
</style>
