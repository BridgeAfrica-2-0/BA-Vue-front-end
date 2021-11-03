<template>
  <div class="">
    <b-card title="" class="">
      <b-container class="a-center">
        <!-- :src="require('@/assets/img/mayor.jpg')" -->
        <b-avatar
          :src="networkInfo[0].image"
          variant="primary"
          square
          rounded
          class="network-logo"
        >
        </b-avatar>

        <b-icon
          icon="camera"
          class="cursor-pointer network-avatar-icon"
          v-b-modal.modal-4
        ></b-icon>
      </b-container>

      <br />

      <b-container>
        <b-row>
          <b-col cols="6">
            <h6 class="m-0 p-0 a-center network-name">
              <b> {{ networkInfo[0].name }}</b>
            </h6>
          </b-col>
          <b-col cols="6">
            <b-button
              variant="primary"
              size="sm"
              @click="addNetwork"
              style="width: 120px"
              class="a-center"
            >
              <b-icon icon="pencil"></b-icon> Edit
            </b-button>
          </b-col>
        </b-row>
      </b-container>

      <br />

      <b-card-text class="text-left">
        <b-container>
          <b-row>
            <b-col>
              <p class="a-center">
                <b-icon icon="globe" variant="primary"></b-icon>
                <span class="pivate text"> Private </span>
              </p>
            </b-col>
            <b-col>
              <p class="a-center">
                <b-icon icon="people-fill" variant="primary"></b-icon>
                <span class="pivate text">
                  {{ nFormatter(networkInfo[0].community) }}
                  community
                </span>
              </p>
            </b-col>
          </b-row>
        </b-container>
        <h6 class="mt-2 font-weight-bolder title">About</h6>
        <p class="text-justify text">
          <span v-if="networkInfo[0].description.length < 130">{{
            networkInfo[0].description
          }}</span>
          <span v-else>{{
            networkInfo[0].description.substring(0, 130) + moreText
          }}</span>
          <span v-if="moreText === '...'" class="d-inline-block float-right">
            <a
              @click="moreText = networkInfo[0].description"
              style="cursor: pointer"
              >lire la Suite</a
            >
          </span>
        </p>
      </b-card-text>
    </b-card>

    <SidebarCommunity />

    <b-modal hide-footer title="Edit network" size="md" v-model="showModal">
      <b-container>
        <b-form v-if="updateNetwork_form">
          <b-form-group
            label-cols-lg="12"
            label="Network Name"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-input
              id="network_name"
              v-model="updateNetwork_form.name"
              name="name"
              type="text"
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
              id="description"
              v-model="updateNetwork_form.description"
              name="description"
              type="text"
              rows="3"
              max-rows="6"
              required
            ></b-form-textarea>
          </b-form-group>

          <b-form-group
            label-cols-lg="12"
            label="Email"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-input
              id="email"
              v-model="updateNetwork_form.email"
              name="email"
              type="email"
              required
            >
            </b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-lg="12"
            label="Tel 1"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-input
              id="tel-1"
              v-model="updateNetwork_form.phone1"
              name="phone1"
              type="tel"
              required
            >
            </b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-lg="12"
            label="Tel 2"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-input
              id="tel-2"
              v-model="updateNetwork_form.phone2"
              name="phone2"
              type="tel"
              required
            >
            </b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-lg="12"
            label="Location"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-input
              id="network_name"
              v-model="updateNetwork_form.address"
              name="address"
              type="text"
              required
            >
            </b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-md="6"
            label="Allow Business to join network"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-checkbox
              v-model="updateNetwork_form.allow_business"
              switch
              value="1"
              unchecked-value="0"
            >
            </b-form-checkbox>
          </b-form-group>

          <b-button
            class="mt-2"
            style="float: right"
            variant="primary"
            @click="updateNetwork()"
          >
            <b-spinner v-if="SPupdateN" small type="grow"></b-spinner> Update
            Network
          </b-button>
        </b-form>
        <FlashMessage />
      </b-container>
    </b-modal>

    <b-modal hide-footer id="modal-4" title="Upload Profile Picture">
      <div class="w3-container">
        <div class="row pb-3">
          <div
            class="col-sm-6 text-center"
            style="border-right: 1px solid #dee2e6"
          >
            <h1>
              <fas-icon class="primary" :icon="['fas', 'upload']" />
            </h1>
            <div>
              <input
                type="file"
                id="file"
                ref="file"
                @change="handleFileUpload"
                name="img"
                accept="image/*"
              />
            </div>
            <h4>Upload a New picture</h4>
          </div>

          <div class="col-sm-6 text-center" v-if="selectedImagePrv">
            <b-img :src="selectedImagePrv" rounded fluid alt="Image"></b-img>
          </div>
          <div class="col-sm-6 text-center" v-else>
            <h1>
              <fas-icon class="primary" :icon="['fas', 'edit']" />
            </h1>
            <h4>Edit Your New picture</h4>
          </div>
        </div>
        <FlashMessage />
      </div>
      <b-button
        style="float: right"
        class="mt-2"
        variant="primary"
        @click="submitFile"
      >
        <b-spinner v-if="SPupdateN" small type="grow"></b-spinner> Upload
      </b-button>
    </b-modal>
  </div>
</template>

<script>
import SidebarCommunity from "@/components/businessf/tabs/owner/networks/sidebarcommunity";

export default {
  name: "parent",

  data() {
    return {
      url: null,
      networkShow: true,
      showModal: false,
      SPupdateN: false,
      moreText: "...",
      fileToUpload: "",
      selectedImagePrv: "",
      updateNetwork_form: null,
      overlay: false,
    };
  },

  components: {
    SidebarCommunity,
  },

  computed: {
    networkInfo() {
      return this.$store.state.networkProfile.networkInfo;
    },
  },

  created() {
    this.init();
    console.log(this.networkInfo);
  },

  methods: {
    init: async function () {
      this.url = this.$route.params.id;
      await this.getNetworkInfo();
    },

    openNetwork() {
      this.networkShow = false;
    },

    addNetwork() {
      this.updateNetwork_form = {
        name: this.networkInfo[0].name,
        description: this.networkInfo[0].description,
        email: this.networkInfo[0].email,
        phone1: this.networkInfo[0].phone1,
        phone2: this.networkInfo[0].phone2,
        address: this.networkInfo[0].address,
        allow_business: this.networkInfo[0].allow_business,
      };
      console.log(this.networkInfo[0]);
      console.log("hello");
      this.showModal = !this.showModal;
    },

    nFormatter(num) {
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
      }
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
      }
      return num;
    },

    getNetworkInfo() {
      this.$store
        .dispatch("networkProfile/getnetworkInfo", this.url)
        .then(() => {
          console.log("ohh yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    updateNetwork: function () {
      this.SPupdateN = true;
      console.log("this.updateNetwork_form", this.updateNetwork_form);
      this.$store
        .dispatch("networkProfile/updateNetwork", {
          path: "network/" + this.url + "/about/update",
          formData: this.updateNetwork_form,
        })
        .then(({ data }) => {
          console.log(data);
          this.SPupdateN = false;
          this.getNetworkInfo();
          this.flashMessage.show({
            status: "success",
            message: "Changes Made Successfuly",
          });
        })
        .catch((err) => {
          console.log({ err: err });
          this.SPupdateN = false;
          this.flashMessage.show({
            status: "error",
            message: "Unable To Make Changes ",
          });
        });
    },

    submitFile() {
      this.SPupdateN = !this.SPupdateN;
      let formData = new FormData();
      formData.append("image", this.fileToUpload);
      console.log("this.fileToUpload", this.fileToUpload);
      console.log("formData", formData);
      this.$store
        .dispatch("networkProfile/submitFile", {
          path: "network/" + this.url + "/about/update/logo",
          formData: formData,
        })
        .then(({ data }) => {
          console.log(data);
          this.getNetworkInfo();
          this.SPupdateN = !this.SPupdateN;
          this.flashMessage.show({
            status: "success",
            message: "Image Uploaded Successfuly",
          });
        })
        .catch((err) => {
          console.log({ err: err });
          this.SPupdateN = !this.SPupdateN;
          this.flashMessage.show({
            status: "error",
            message: "Unable To Uploaded Image ",
          });
        });
    },

    handleFileUpload(e) {
      this.fileToUpload = this.$refs.file.files[0];
      let file = e.target.files[0] || e.dataTransfer.files;
      this.selectedImagePrv = URL.createObjectURL(file);
      console.log(this.selectedImagePrv);
    },
  },
};
</script>

<style>
.a-center {
  text-align: center;
  align-content: center;
  justify-content: center;

  display: flex;
}
.b-none {
  border-style: none;
}
.t-align {
  text-align: left;
}

.i-color {
  color: #e75c18;
}

@media only screen and (min-width: 768px) {
  .network-avatar-icon {
    position: absolute;
    width: 2rem;
    height: 2rem;

    top: 200px;
    margin-left: 200px;

    padding: 0px 0px;
    color: #ffff;
    background: #e75c18;
    border-radius: 25px;
    border: 4px solid #ffff;
  }

  .network-name {
    font-size: 20px;
  }

  .pivate {
    padding-left: 8px;
    text-align: left;
  }

  .network-logo {
    width: 200px !important;
    height: 200px !important;
  }
}

@media only screen and (max-width: 768px) {
  .network-logo {
    width: 200px !important;
    height: 200px !important;
  }

  .network-name {
    font-size: 16px;
  }

  .pivate {
    font-size: 12px;

    padding-left: 8px;

    text-align: left;
  }

  .network-avatar-icon {
    position: absolute;
    width: 2rem;
    height: 2rem;

    top: 200px;
    margin-left: 200px;

    padding: 0px 0px;
    color: #ffff;
    background: #e75c18;
    border-radius: 25px;
    border: 4px solid #ffff;
  }
}
</style>
