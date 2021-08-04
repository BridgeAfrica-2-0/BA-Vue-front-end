<template>
  <div class=" t-color">
    <div>
      <fas-icon class=" icons" :icon="['fas', 'project-diagram']" size="lg" />
      <span class="t-color"> Network </span>

      <b-button
        variant="outline-primary"
        @click="addnetwork(false)"
        data-toggle="modal"
        data-target="#addbusinessbtnModal"
        class="float-right btn-network "
      >
        Add Network
      </b-button>

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
                  <!-- <img :src="network.image[0]" class="r-image" /> -->
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
                        <b-dropdown-item-button
                          @click="deleteNetwork(network.id)"
                        >
                          <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                          Delete
                        </b-dropdown-item-button>
                      </b-dropdown>
                    </b-col>
                  </b-row>

                  {{ network.category }}
                  <br />
                  {{ network.community }}k Community <br />

                  <span class="location">
                    <b-icon-geo-alt class="ico"></b-icon-geo-alt>
                    {{ network.address }}
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
    <div class="h-100 w-100" v-if="getNetworksFromStore.length < 1">
      <div class="mx-auto text-center my-5">
        <h2 class="my-3">Builds networks around your Business</h2>
        <p class="my-2">Create network to stay in touch with just the people</p>
        <p class="my-2">you want Engage, share, Make Plans and much more</p>
        <p class="my-3">
          <b-button @click="addnetwork(false)" variant="primary"
            >Add network</b-button
          >
        </p>
      </div>
    </div>

    <b-modal
      hide-footer
      :title="edit ? 'Edit network' : 'Add network'"
      size="lg"
      v-model="showModal"
    >
      <b-container>
        <b-form>
          <div
            v-if="!edit"
            class="row sub-sidebar-2 pending-post-view mt-4 pb-0 "
          >
            <div
              class="col-md-12 col-lg-12 d-flex align-items-stretch mb-lg-0"
              style="padding-left: 0; padding-top: 3px;"
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
              v-model="createdNetwork.category"
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
              v-model="createdNetwork.address"
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
              v-model="createdNetwork.needs"
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
            <input type="file" />
          </b-form-group>
          <b-form-group
            label-cols-md="6"
            label="Allow Business to join network"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-checkbox
              v-model="createdNetwork.isInNetwork"
              name="check-button"
              switch
            >
            </b-form-checkbox>
          </b-form-group>
          <b-button
            @click="addNet"
            class="mt-2 "
            style="float:right"
            variant="primary"
          >
            {{ edit ? "Edit Network" : "Add Network" }}</b-button
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
        {{ chosenNetwork.category }}
        <br />
        {{ chosenNetwork.community }}k Community <br />

        <span class="location">
          <b-icon-geo-alt class="ico"></b-icon-geo-alt>
          {{ chosenNetwork.address }}
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
      showModal: false,
      createdNetwork: {
        id: "",
        name: "",
        address: "",
        category: "",
        description: "",
        purpose: "",
        needs: "",
        isInNetwork: "",
      },
      network: [],
      chosenNetwork: {
        image: [],
        name: "",
        category: "",
        community: 0,
        address: "",
        description: " ",
      },
      edit: false,
    };
  },
  beforeMount() {
    this.getNetworks();
  },
  computed: {
    getNetworksFromStore() {
      return this.getNetworksFromstore();
    },
  },
  methods: {
    ...mapGetters({
      getNetworksFromstore: " businessOwner/getnetWorks",
    }),

    // getting actions from the store
    ...mapActions({
      addNetwork: " businessOwner/addNetwork",
      getNetworks: " businessOwner/getNetworks",
    }),

    //View network on pop up modal
    viewNetwork(network) {
      console.log(this.getNetworksFromStore);
      this.chosenNetwork.image = network.image;
      this.chosenNetwork.name = network.name;
      this.chosenNetwork.category = network.category;
      this.chosenNetwork.address = network.address;
      this.chosenNetwork.description = network.description;
    },
    addNet() {
      this.addNetwork();
    },

    // add a network and initializing
    addnetwork(state) {
      this.showModal = true;
      this.edit = state;
      if (!state) {
        this.createdNetwork.image = "";
        this.createdNetwork.name = "";
        this.createdNetwork.category = "";
        this.createdNetwork.community = "";
        this.createdNetwork.address = "";
        this.createdNetwork.description = "";
        this.createdNetwork.purpose = "";
        this.createdNetwork.needs = "";
      }
    },

    //delete network
    deleteNetwork(id) {},

    //Show Edit network modal
    showEditNetwork(network) {
      this.createdNetwork.image = network.image;
      this.createdNetwork.name = network.name;
      this.createdNetwork.category = network.category;
      this.createdNetwork.community = network.community;
      this.createdNetwork.address = network.address;
      this.createdNetwork.description = network.description;
      this.createdNetwork.purpose = network.purpose;
      this.createdNetwork.needs = network.needs;
      this.addnetwork(true);
    },
  },
};
</script>

<style scoped>
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
