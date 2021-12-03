<template>
  <b-container v-if="editnetworkinfo != 0" style="text-align:left">
    <!-- {{editnetworkinfo}} -->
    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          :label="$t('network.Network_Name')"
          label-size=" md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-input
            id="bname"
            placeholder=""
            v-model="editnetworkinfo.admin_name"
            required
          ></b-form-input>
        </b-form-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          :label="$t('network.Category')"
          label-size="md"
          label-class=" font-weight-bold pt-0"
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
          :label="$t('network.Phone_1')"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <VuePhoneNumberInput v-model="editnetworkinfo.primary_phone" />
        </b-form-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          :label="$t('network.Phone_2')"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <VuePhoneNumberInput v-model="editnetworkinfo.secondary_phone" />
        </b-form-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          :label="$t('network.Email')"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-input
            id="bname"
            placeholder=""
            v-model="editnetworkinfo.email"
            required
          ></b-form-input>
        </b-form-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <!-- {{country}}-----------
        {{countries}} -->
        <b-form-group
          label-cols-lg="3"
          :label="$t('network.Country')"
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
        <!-- {{region}}------------
        {{regions}} -->
        <b-form-group
          label-cols-lg="3"
          :label="$t('network.City')"
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
      <!-- {{division}}----------
      {{divisions}} -->
      <b-container>
        <b-form-group
          label-cols-lg="3"
          :label=" $t('network.Division')"
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
        <!-- {{municipality}}-------
        {{municipalities}} -->
        <b-form-group
          label-cols-lg="3"
          :label=" $t('network.Municipality')"
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
        <!-- {{locality}}--------
        {{localities}} -->
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
            track-by="neighborhood_id"
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
          :label="$t('network.Description')"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-textarea
            id="textarea"
            :placeholder="$t('network.Enter_something')"
            rows="3"
            max-rows="6"
            v-model="editnetworkinfo.description"
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
              @click="updateInfo(editnetworkinfo)"
              :disabled="Lspinner"
            ><b-spinner v-if="Lspinner" small type="grow"></b-spinner> {{ $t('network.Save_Changes') }}
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
      getNetworks: 'networkSetting/getNetworks',
    }),
    editnetworkinfo() {
    //   return this.$store.state.NetworkSettings.networkinfo;
      return this.$store.state.NetworkSettings.editnetworkinfo;
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
    this.getEditNetworkInfo();
  },
  mounted(){
    this.categories();
    this.Country();
  },

  methods: {
    ...mapActions({
      saveChange: 'networkSetting/saveChange',
      getNetworks: 'networkSetting/getNetworks',
    }),
    getEditNetworkInfo() {
      console.log("getEditNetworkInfo");
      this.$store
        // .dispatch("NetworkSettings/getnetworkinfo", this.url)
        .dispatch("NetworkSettings/getEditNetworkInfo", this.url)
        .then(() => {
          console.log("Edit Network Information Available ");
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
      console.log(this.editnetworkinfo);
      this.multiselecvalue=this.editnetworkinfo.assign_categories;
      this.countries.forEach(e => {
        if(e.name == this.editnetworkinfo.country){
          this.country.push(e)
        }
      });
      this.regions.forEach(e => {
        if(e.name == this.editnetworkinfo.region){
          this.region.push(e)
        }
      });
      this.divisions.forEach(e => {
        if(e.name == this.editnetworkinfo.division){
          this.division.push(e)
        }
      });
      this.municipalities.forEach(e => {
        if(e.name == this.editnetworkinfo.council){
          this.municipality.push(e)
        }
      });
      this.localities.forEach(e => {
        if(e.name == this.editnetworkinfo.neighborhood){
          this.locality.push(e)
        }
      });
      // this.country=this.editnetworkinfo.country;
      // this.region=this.editnetworkinfo.region;
      // this.division=this.editnetworkinfo.division;
      // this.municipality=this.editnetworkinfo.council;
      // this.locality=this.editnetworkinfo.neighborhood;

      this.Region();
      this.Division();
      this.Municipality();
      this.Locality();
    },

    updateInfo(editnetworkinfo) {
      this.Lspinner = true;
      console.log("updateInfo", editnetworkinfo)

      let formData = new FormData();
      formData.append('name', editnetworkinfo.admin_name);
      formData.append('network_categories_id', this.selectedcategories);
      formData.append("country_id", this.selectedcountry);
      formData.append("region_id", this.selectedregion);
      formData.append("division_id", this.selecteddivision);
      formData.append("council_id", this.selectedmunicipality);
      formData.append("neighborhood_id", this.selectedlocality);
      formData.append('primary_phone', editnetworkinfo.primary_phone);
      formData.append('secondary_phone', editnetworkinfo.secondary_phone);
      formData.append('email', editnetworkinfo.email);
      formData.append('description', editnetworkinfo.description);

      console.log('name', editnetworkinfo.admin_name);
      console.log('network_categories_id', this.selectedcategories);
      console.log("country_id", this.selectedcountry);
      console.log("region_id", this.selectedregion);
      console.log("division_id", this.selecteddivision);
      console.log("council_id", this.selectedmunicipality);
      console.log("neighborhood_id", this.selectedlocality);
      console.log('primary_phone', editnetworkinfo.primary_phone);
      console.log('secondary_phone', editnetworkinfo.secondary_phone);
      console.log('email', editnetworkinfo.email);
      console.log('description', editnetworkinfo.description);
      console.log(formData);
      this.$store
        .dispatch("NetworkSettings/updateNetworkInfo", {
          path: "update/"+this.url,
          formData: formData,
        })
        .then(({ data }) => {
        console.log(data);
        this.getEditNetworkInfo();
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
