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
          <b-form-input id="bname" placeholder="" v-model="item.networkName" required></b-form-input>
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
          v-model="item.category"
        >
          <b-form-input id="bname" placeholder="" v-model="item.category" required></b-form-input>
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
          <b-form-input id="bname" placeholder="" v-model="item.phoneOne" required></b-form-input>
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
          <b-form-input id="bname" placeholder="" v-model="item.phoneTwo" required></b-form-input>
        </b-form-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <b-form-group label-cols-lg="3" label="Email" label-size="md" label-class="font-weight-bold pt-0" class="mb-0">
          <b-form-input id="bname" placeholder="" v-model="item.email" required></b-form-input>
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
          <country-select v-model="item.country" :country="country" topCountry="US" class="form-control" />
        </b-form-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <b-form-group label-cols-lg="3" label="City" label-size="md" label-class="font-weight-bold pt-0" class="mb-0">
          <b-form-input id="bname" placeholder="" v-model="item.city" required></b-form-input>
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
          <b-form-input id="bname" placeholder="" v-model="item.neighborhood" required></b-form-input>
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
          <b-form-input id="bname" placeholder="" v-model="item.website" required></b-form-input>
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
            v-model="item.description"
          ></b-form-textarea>
        </b-form-group>
      </b-container>
    </div>

    <b-container class="">
      <b-row>
        <b-col>
          <div class="b-bottomn f-right">
            <b-button @click="saveChanges" variant="primary" class="a-button-l b-font" :loading="loader">
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
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'general',
  data: () => ({
    item: {
      networkName: '',
      category: '',
      phoneOne: '',
      phoneTwo: '',
      email: '',
      country: '',
      city: '',
      neighborhood: '',
      website: '',
      description: '',
    },
    loader: null,
  }),
  computed: {
    ...mapGetters({
      getNetworks: 'networkSetting/getNetworks',
    }),
  },
  methods: {
    ...mapActions({
      saveChange: 'networkSetting/saveChange',
      getNetworks: 'networkSetting/getNetworks',
    }),
    saveChanges() {
      this.loader = true;
      let networkId = this.getNetworks.id;
      this.saveChange(networkId, this.item)
        .then(() => {
          this.loader = false;
        })
        .catch(err => {
          this.loader = false;
          console.log(err);
        });
    },
  },
  beforeMount() {
    this.getNetworks();
    return this.getNetworks.id;
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
