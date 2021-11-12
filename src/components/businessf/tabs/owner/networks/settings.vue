<template>
  <b-container v-if="networkInfo" style="text-align:left">
    {{networkInfo}}
    <FlashMessage />
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
            id="bname"
            placeholder=""
            v-model="networkInfo.admin_name"
            required
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
          <multiselect
            v-model="multiselecvalue"
            tag-placeholder="Add this as new tag"
            placeholder="Search or add a tag"
            label="name"
            track-by="id"
            :options="pcategories"
            :multiple="true"
            :taggable="true"
            @tag="addTag"
          ></multiselect>
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
          class="mb-0"
        >
          <VuePhoneNumberInput v-model="networkInfo.primary_phone" />
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
          <VuePhoneNumberInput v-model="networkInfo.secondary_phone" />
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
            placeholder=""
            v-model="networkInfo.email"
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
          <multiselect
            v-model="country"
            @input="Region"
            placeholder="Search "
            label="name"
            track-by="id"
            :options="countries"
            :multiple="true"
          ></multiselect>
        </b-form-group>
      </b-container>
    </div>
    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Region"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <multiselect
            v-model="region"
            @input="Division"
            placeholder="Search"
            label="name"
            track-by="id"
            :options="regions"
            :multiple="true"
          ></multiselect>
        </b-form-group>
      </b-container>
    </div>
    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Division"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <multiselect
            v-model="division"
            @input="Municipality"
            placeholder="Search"
            label="name"
            track-by="id"
            :options="divisions"
            :multiple="true"
          ></multiselect>
        </b-form-group>
      </b-container>
    </div>
    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Municipality"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <multiselect
            v-model="municipality"
            @input="Locality"
            placeholder="Search"
            label="name"
            track-by="id"
            :options="municipalities"
            :multiple="true"
          ></multiselect>
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
          <multiselect
            v-model="locality"
            placeholder="Search"
            label="name"
            track-by="id"
            :options="localities"
            :multiple="true"
          ></multiselect>
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
            placeholder=""
            v-model="networkInfo.city"
            required
          ></b-form-input>
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
            placeholder=""
            v-model="networkInfo.website"
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
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
            v-model="networkInfo.description"
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
              :loading="loader"
              @click="updateInfo(networkInfo)"
              :disabled="Lspinner"
            ><b-spinner v-if="Lspinner" small type="grow"></b-spinner> Save Changes
            </b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <br />
  </b-container>
  <b-container v-else>
    <div class="text-center">
      <b-spinner style="width: 6rem; height: 6rem;" label="Text Centered Large Spinner" variant="primary"></b-spinner>
    </div>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import Multiselect from "vue-multiselect";
export default {
  name: "general",
  components: {
    Multiselect,
    VuePhoneNumberInput,
  },
  data: () => ({
    url: null,

    multiselecvalue: [],
    country: [],
    region: [],
    division: [],
    municipality: [],
    locality: [],

    loader: null,
    Lspinner: false,
  }),
  computed: {
    ...mapGetters({
      getNetworks: "networkSetting/getNetworks",
    }),
    networkInfo() {
      return this.$store.state.networkProfile.networkInfo;
    },
    pcategories() {
      return this.$store.state.auth.categories;
    },
    countries() {
      return this.$store.state.auth.country;
    },
    regions() {
      return this.$store.state.auth.region;
    },

    divisions() {
      return this.$store.state.auth.division;
    },

    municipalities() {
      return this.$store.state.auth.municipality;
    },

    localities() {
      return this.$store.state.auth.locality;
    },
    selectedcategories: function() {
      let selectedUsers = [];
      this.multiselecvalue.forEach((item) => {
        selectedUsers.push(item.id);
      });
      return selectedUsers;
    },
    selectedcountry: function() {
      let sub_cat = [];
      this.country.forEach((item) => {
        sub_cat.push(item.id);
      });
      return sub_cat;
    },
    selectedregion: function() {
      let sub_cat = [];
      this.region.forEach((item) => {
        sub_cat.push(item.id);
      });
      return sub_cat;
    },
    selecteddivision: function() {
      let sub_cat = [];
      this.division.forEach((item) => {
        sub_cat.push(item.id);
      });
      return sub_cat;
    },
    selectedmunicipality: function() {
      let sub_cat = [];
      this.municipality.forEach((item) => {
        sub_cat.push(item.id);
      });
      return sub_cat;
    },
    selectedlocality: function() {
      let sub_cat = [];
      this.locality.forEach((item) => {
        sub_cat.push(item.id);
      });
      return sub_cat;
    },
  },
  beforeMount() {
    this.url = this.$route.params.id;
    this.getNetworkInfo();
  },
  mounted(){
    // this.getNetworkInfo();
    this.categories();
    this.Country();
  },

  methods: {
    ...mapActions({
      saveChange: "networkSetting/saveChange",
      getNetworks: "networkSetting/getNetworks",
    }),
    // getNetworkInfo() {
    //   console.log("getNetworkInfo");
    //   this.$store
    //     .dispatch("networkProfile/getnetworkInfo", this.url)
    //     .then(() => {
    //       console.log("Network Information Available ");
    //       this.setEditData();
    //       console.log("Setting Network Available Information");
    //     })
    //     .catch((err) => {
    //       console.log({ err: err });
    //     });
    // },
    getNetworkInfo() {
      console.log("getNetworkInfo");
      this.$store
        .dispatch("networkProfile/getEditNetworkInfo", this.url)
        .then(() => {
          console.log("Network Information Available ");
          this.setEditData();
          console.log("Setting Network Available Information");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
    
    categories() {
      this.$store
        .dispatch("auth/categories")
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
    Country() {
      this.$store
        .dispatch("auth/country")
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
    Region() {
      let formData2 = new FormData();
      formData2.append("countryId", this.selectedcountry);

      this.$store
        .dispatch("auth/region", formData2)
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
    Division() {
      let formData2 = new FormData();
      formData2.append("regionId", this.selectedregion);

      this.$store
        .dispatch("auth/division", formData2)
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
    Municipality() {
      let formData2 = new FormData();
      formData2.append("divisionId", this.selecteddivision);

      this.$store
        .dispatch("auth/municipality", formData2)
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
    Locality() {
      console.log("Locality");
      let formData2 = new FormData();
      formData2.append("councilId", this.selectedmunicipality);

      this.$store
        .dispatch("auth/locality", formData2)
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
    setEditData(){
      console.log("setting Network data");
      console.log(this.networkInfo);
      this.multiselecvalue=this.networkInfo.assign_categories;
      // this.country=this.networkInfo.country;
      // this.region=this.networkInfo.region;
      // this.division=this.networkInfo.division;
      // this.municipality=this.networkInfo.council;
      // this.locality=this.networkInfo.neighborhood;

      this.Region();
      this.Division();
      this.Municipality();
      this.Locality();
    },

    updateInfo(networkInfo) {
      this.Lspinner = true;
      console.log("updateInfo", networkInfo)

      let formData = new FormData();
      formData.append('business_id', networkInfo.business_id);
      formData.append('name', networkInfo.admin_name);
      formData.append('categoryId', this.selectedcategories);
      formData.append("country", this.selectedcountry);
      formData.append("region", this.selectedregion);
      formData.append("division", this.selecteddivision);
      formData.append("council", this.selectedmunicipality);
      formData.append("neighborhood_id", this.selectedlocality);
      formData.append('primary_phone', networkInfo.primary_phone);
      formData.append('secondary_phone', networkInfo.secondary_phone);
      formData.append('email', networkInfo.email);
      formData.append('city', networkInfo.city);
      formData.append('city', networkInfo.website);
      formData.append('description', networkInfo.description);
      console.log(formData);
      this.$store
        .dispatch("NerworkSettings/updateNetworkInfo", {
          path: "update/"+this.url,
          formData: formData,
        })
        .then(({ data }) => {
        console.log(data);
        this.getNetworkInfo();
        console.log(this.networkInfo);
        this.Lspinner = false;
        this.flashMessage.show({
          status: "success",
          message: "Changes Made Successfuly"
        });  
      })
      .catch(err => {
        console.log({ err: err });
        this.Lspinner = false;
        this.flashMessage.show({
          status: "error",
          message: "Unable To Make Changes"
        });
      });
    },
  },

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
