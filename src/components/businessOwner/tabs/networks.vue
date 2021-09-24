<template>
  <div class=" t-color">
    <div>
      <fas-icon class=" icons" :icon="['fas', 'project-diagram']" size="lg" />
      <span class="t-color"> Network </span>

      <hr />
      <b-row>
        <b-col
          cols="12"
          md="12"
          lg="6"
          v-for="(network, index) in getNetworksFromStore"
          :key="index"
        >
          <div class="people-style shadow">
            <b-row @click="viewNetwork(network)">
              <b-col md="3" xl="3" lg="3" cols="5" sm="3">
                <div class="center-img" v-b-modal.modal-1>
                  {{ network.business_image }}
                  <img
                    :src="BaseURL + `/` + `${network.business_image}`"
                    alt=""
                  />
                </div>
              </b-col>
              <b-col md="9" cols="7" lg="9" xl="9" sm="9">
                <p class="textt ml-5">
                  <b-row>
                    <b-col>
                      <strong class="net-title">
                        <router-link to="/businessfollower">
                          {{ network.name }}
                        </router-link>
                      </strong></b-col
                    >
                    <b-col cols="4">
                      <b-dropdown
                        class="options ml-4"
                        variant="primary"
                        size="sm"
                        id="dropdown-left"
                      >
                        <template #button-content>
                          <b-icon icon="three-dots" aria-hidden="true"></b-icon>
                        </template>
                        <b-dropdown-item-button
                          @click="showEditNetwork(network)"
                        >
                          <b-icon icon="pencil" aria-hidden="true"></b-icon>
                          Edit
                        </b-dropdown-item-button>
                      </b-dropdown>
                    </b-col>
                  </b-row>

                  {{ network.business_id }}
                  <br />
                  20k Community <br />

                  <span class="location">
                    <b-icon-geo-alt class="ico"></b-icon-geo-alt>
                    {{ network.business_address }}
                  </span>
                  <br />

                  {{ network.description.substring(0, 90) }}
                  <b-link>Read More</b-link>
                </p>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </div>
    <b-col v-if="loader" class="load">
      <b-spinner class="spin" variant="primary"></b-spinner>
    </b-col>
    <div class="engage" v-if="!getNetworksFromStore && !loader">
      <div class="mx-auto text-center my-5">
        <h2 class="my-3">Builds networks around your Business</h2>
        <p class="my-2">you want Engage, share, Make Plans and much more</p>
        <p class="my-2">No network to show !!</p>
        <p class="my-3"></p>
      </div>
    </div>

    <b-modal hide-footer title="Edit network" size="lg" v-model="showModal">
      <b-container>
        <b-form>
          <div
            v-show="false"
            class="row sub-sidebar-2 pending-post-view mt-4 pb-0 "
          >
            <div
              class="col-md-12 col-lg-12 d-flex align-items-stretch mb-lg-0 styling"
            >
              <a
                class="nav-link text-dark"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <b-icon-info-circle-fill scale="1.5"></b-icon-info-circle-fill>
              </a>
              <div class="post-pending pt-2">
                <p>
                  Approval Required <br />
                  Bridge Africa admin will review your request to create a
                  network and notify you upon approval you can the change the
                  network settings and invite people to join your network
                </p>
              </div>
            </div>
          </div>

          <b-form-group
            label-cols-lg="12"
            label="Network Name"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-input
              v-model="createdNetwork.name"
              id="network_name"
              placeholder=""
              required
            >
            </b-form-input>
          </b-form-group>
          <b-form-group
            label-cols-lg="12"
            label="Business Category"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-input
              v-model="createdNetwork.business_id"
              id="network_name"
              placeholder=""
              required
            >
            </b-form-input>
          </b-form-group>
          <b-form-group
            label-cols-lg="12"
            label="Business Address"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-input
              v-model="createdNetwork.business_address"
              id="network_name"
              placeholder=""
              required
            >
            </b-form-input>
          </b-form-group>
          <b-form-group
            label-cols-lg="12"
            label=" Brief Description"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-textarea
              id="textarea"
              v-model="createdNetwork.description"
              placeholder="Enter something..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>

          <b-form-group
            label-cols-lg="12"
            label="Purpose Of Network"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-textarea
              id="textarea"
              v-model="createdNetwork.purpose"
              placeholder=""
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>

          <b-form-group
            label-cols-lg="12"
            label="Special Needs"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-textarea
              id="textarea"
              v-model="createdNetwork.special_needs"
              placeholder=" "
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
          <b-form-group
            label-cols-lg="12"
            label="Bussiness Image"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <input @change="selectImage" type="file" accept="image/*" />
          </b-form-group>
          <b-form-group
            label-cols-md="6"
            label="Allow Business to join network"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-checkbox
              value="1"
              unchecked-value="0"
              v-model="createdNetwork.allow_business"
              name="check-button"
              switch
            >
            </b-form-checkbox>
          </b-form-group>
          <b-alert :show="success.state" :variant="success.success">
            {{ success.msg }}</b-alert
          >
          <b-spinner v-if="loader" variant="primary"></b-spinner>
          <b-button @click="edit" class="mt-2  button-btn" variant="primary">
            Edit Network</b-button
          >
        </b-form>
      </b-container>
    </b-modal>
    <b-modal id="modal-1" :title="chosenNetwork.name" hide-footer>
      <lightbox
        visible="true"
        css=" h-10"
        :items="chosenNetwork.image"
      ></lightbox>
      <p class="text-pop">
        <strong class="net-title">
          <router-link to="/businessfollower">
            {{ chosenNetwork.name }}
          </router-link>
        </strong>
        <br />
        {{ chosenNetwork.business_id }}
        <br />
        20k Community <br />

        <span class="location">
          <b-icon-geo-alt class="ico"></b-icon-geo-alt>
          {{ chosenNetwork.business_address }}
        </span>
        <br />

        {{ chosenNetwork.description }}
      </p>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      BaseURL: process.env.VUE_APP_API_URL,
      showModal: false,
      selectedFile: "",
      createdNetwork: {
        name: "",
        description: "",
        purpose: "",
        special_needs: "",
        business_address: "",
        business_image: "",
        allow_business: 0,
      },
      chosenNetwork: {
        name: "",
        description: "",
        purpose: "",
        special_needs: "",
        business_address: "",
        business_image: "",
        allow_business: 0,
      },
    };
  },
  beforeMount() {
    this.getNetworks();
  },
  computed: {
    getNetworksFromStore() {
      return this.getNetworksFromstore();
    },
    loader() {
      return this.getLoader();
    },
    success() {
      return this.getSuccess();
    },
  },
  methods: {
    ...mapGetters({
      getNetworksFromstore: "businessOwner/getnetWorks",
      getLoader: "businessOwner/getLoader",
      getSuccess: "businessOwner/getSuccess",
    }),

    // getting actions from the store
    ...mapActions({
      addNetwork: "businessOwner/addNetwork",
      getNetworks: "businessOwner/getNetworks",
      editNetwork: "businessOwner/editNetwork",
    }),

    //View network on pop up modal
    viewNetwork(network) {
      this.chosenNetwork = network;
    },

    //Show Edit network modal
    showEditNetwork(network) {
      this.createdNetwork.id = network.id;
      this.createdNetwork.business_image = network.business_image;
      this.createdNetwork.name = network.name;
      this.createdNetwork.business_id = network.business_id;
      this.createdNetwork.business_address = network.business_address;
      this.createdNetwork.description = network.description;
      this.createdNetwork.purpose = network.purpose;
      this.createdNetwork.special_needs = network.special_needs;
      this.createdNetwork.allow_business = network.allow_business;
      this.showModal = true;
    },
    edit() {
      const fd = new FormData();
      fd.append("_method", "PUT");
      fd.append("name", this.createdNetwork.name);
      fd.append("business_id", 1);
      fd.append("business_address", this.createdNetwork.business_address);
      fd.append("description", this.createdNetwork.description);
      fd.append("purpose", this.createdNetwork.purpose);
      fd.append("special_needs", this.createdNetwork.special_needs);
      fd.append("business_image", this.createdNetwork.business_image);
      fd.append("allow_busines", this.createdNetwork.allow_busines);
      let data = {
        id: this.createdNetwork.id,
        data: fd,
      };
      this.editNetwork(data);
    },
    selectImage(e) {
      this.createdNetwork.business_image = e.target.files[0];
    },
  },
};
</script>

<style scoped>
.load {
  display: flex;
  justify-content: center;
}
.post-pending {
  font-size: 12;
  text-align: left;
}
.no-network {
  width: 100%;
  height: 500px;
  background-color: #ccc;
  border-radius: 10px;
}

.white-box {
  position: relative;
  width: 60%;
  background-color: #fff;
  min-height: 200px;
  left: 200px;
  top: 100px;
  padding: 20px;
}

.prod {
  max-width: 14rem;
  cursor: pointer;
}

.engage {
  height: 100%;
  width: 100%;
}

.spin {
  width: 7rem;
  height: 7rem;
}

.styling {
  padding-left: 0;
  padding-top: 3px;
}
.button-btn {
  float: right;
}

h2,
p {
  text-align: center;
}

.networks {
  display: flex;
  flex-wrap: wrap;
}

.approved {
  color: green;
}
.pending {
  color: yellow;
}

.network:hover .overlay {
  opacity: 0.5;
  color: #e75d29;
}

.network:hover .text-static {
  display: none;
}

.btn-view {
  background-color: transparent;
  border: none;
  color: white;
}

.btn-view:focus {
  outline-color: transparent;
  border: none;
}

.network-name {
  color: #e75d29;
  text-align: center;
}

.pic-name {
  position: relative;
  left: -200px;
  color: white;
  font-weight: 200;
  opacity: 0;
}

.sp:hover .pic-name {
  opacity: 1;
}

.pic {
  cursor: pointer;
  background-color: transparent;
}
.pic:hover {
  box-shadow: 5px 10px 8px 2px #888888;
}

.create {
  position: relative;
  height: 175px;
  color: #fff;
  background-color: #bbb;
  padding: 20px;

  margin: 30px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 10;
  margin-top: -0px;
}

.text {
  margin-top: 50px;
}

.network {
  height: 190px;
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
  .networks {
    position: relative;
    left: -25px;
  }

  .network {
    margin-top: 20px;
  }

  .create {
    height: 150px;
  }
  .text {
    margin-top: 30px;
  }

  .white-box {
    position: relative;
    width: 80%;
    background-color: #fff;
    min-height: 200px;
    left: 35px;
    top: 100px;
    padding: 20px;
  }
}

.row.sub-sidebar-2.pending-post-view {
  background-color: #8bd06c;
  border-color: #000;
  border: solid 3px;
}

@media only screen and (max-width: 760px) {
  h4 {
    font-size: 15px;
  }

  .pop {
    font-size: 15px;
  }
}

.card {
  color: orange;
}

.s-button {
  align-content: center;
  text-align: center;

  padding: 15px;
}

.text-show {
  color: #000;
  font-size: 15px;

  text-align: left;

  margin-left: -15px;

  margin-right: -15px;
}
.stock {
  color: green;
}

.b1 {
  width: 100px;
  margin-left: -20px;
}

.b2 {
  width: 120px;

  margin-left: -15px;
}

.ico {
  margin-right: 5px;
}

@media only screen and (min-width: 768px) {
  .btn-text {
    margin-left: 8px;
  }

  .btn-com {
    margin-left: 4px;
  }
  .btn-icon {
    margin-top: 3px;
  }

  .center-img {
    margin-right: -60px;
  }
}

@media only screen and (max-width: 768px) {
}

.card {
  color: orange;
}

.s-button {
  align-content: center;
  text-align: center;

  padding: 15px;
}

@media only screen and (max-width: 768px) {
  .a-flex {
    margin-right: -15px;
  }

  .s-button {
    padding: 15px;
    margin-top: -15px;
  }

  .net-title {
    font-size: 16px;
    color: black;

    line-height: 35px;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  .text-pop {
    color: #000;

    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;

    font-weight: normal;
    line-height: 20px;
    font-style: normal;

    padding: 1px;
    text-align: left;

    margin-left: -30px;

    margin-right: -5px;

    line-height: 25px;
  }
  .textt {
    color: #000;

    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;

    font-weight: normal;
    line-height: 20px;
    font-style: normal;

    padding: 1px;
    text-align: left;

    margin-left: -30px;

    margin-right: -5px;

    line-height: 25px;
  }

  .text-pop {
    color: #000;

    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;

    font-weight: normal;
    line-height: 20px;
    font-style: normal;

    padding: 1px;
    text-align: left;

    margin-left: -30px;

    margin-right: -5px;

    line-height: 25px;
  }

  .text {
    color: #000;

    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;

    font-weight: normal;
    line-height: 20px;
    font-style: normal;

    padding: 1px;
    text-align: left;

    margin-left: -30px;

    margin-right: -5px;

    line-height: 25px;
  }

  .location {
    margin-bottom: 30px;
  }

  .r-image {
    border-radius: 8px;

    height: 100px;
    width: 100px;
  }
}

@media only screen and (min-width: 768px) {
  .net-title {
    font-size: 20px;
    color: black;

    line-height: 35px;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  .text-pop {
    color: #000;

    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;

    font-weight: normal;
    line-height: 20px;
    font-style: normal;

    padding: 1px;
    text-align: left;

    margin-left: -2px;

    margin-right: -5px;

    line-height: 25px;
  }
  .textt {
    color: #000;

    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;

    font-weight: normal;
    line-height: 20px;
    font-style: normal;

    padding: 1px;
    text-align: left;

    margin-left: 30px;

    margin-right: -5px;

    line-height: 25px;
  }

  .location {
    margin-bottom: 30px;
  }

  .r-image {
    border-radius: 8px;

    height: 160px;
    width: 160px;
  }
}

.stock {
  color: green;
}

.b1 {
  width: 100px;
  margin-left: -20px;
}

.b2 {
  width: 120px;

  margin-left: -15px;
}

.ico {
  margin-right: 5px;
}

@media only screen and (min-width: 768px) {
  .people-style {
    border-top-left-radius: 5px;

    border-bottom-left-radius: 5px;

    border-top-right-radius: 5px;

    border-bottom-right-radius: 5px;

    background: white;

    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    margin-bottom: 10px;

    margin-right: 8px;
    cursor: pointer;
    padding: 7px;
  }

  .btn-network {
    width: 118px !important;
    height: 38px !important ;
    margin-top: -4px !important;
    font-size: 16px;
  }
}

@media only screen and (max-width: 768px) {
  .people-style {
    border-top-left-radius: 5px;

    border-bottom-left-radius: 5px;

    border-top-right-radius: 5px;
    cursor: pointer;
    border-bottom-right-radius: 5px;

    background: white;

    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    margin-bottom: 10px;

    padding: 7px;
  }

  h4 {
    font-size: 15px;
  }
}

@media only screen and (max-width: 720px) {
  .card-body {
    padding: 0px;
  }

  .btn-network {
    width: 90px !important;
    height: 30px !important ;
    margin-top: 0px !important;
    font-size: 12px;
    text-align: center;
    padding: 2px;
  }
}

.t-color {
  color: #000;
}
</style>
