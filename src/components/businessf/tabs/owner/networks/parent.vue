<template>
  <div>
    <b-card v-if="networkInfo != 0" title="" class="" style="position: relative">
      <b-container class="a-center">
        <!-- :src="require('@/assets/img/mayor.jpg')" -->
        <b-avatar
          :src="networkInfo.image ? networkInfo.image : require('@/assets/default_network.png')"
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
              <b> {{ networkInfo.name }}</b>
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
              <b-icon icon="pencil"></b-icon> {{ $t("network.Edit") }}
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
                <span class="pivate text"> {{ $t("network.Private") }} </span>
              </p>
            </b-col>
            <b-col>
              <p class="a-center">
                <b-icon icon="people-fill" variant="primary"></b-icon>
                <span class="pivate text">
                  {{ nFormatter(networkInfo.community) }}
                  {{ $t("network.community") }}
                </span>
              </p>
            </b-col>
          </b-row>
        </b-container>
        <h6 class="mt-2 font-weight-bolder title">
          {{ $t("network.about") }}
        </h6>
        <p class="text-justify text">
          <read-more
            more-str="read more"
            class="readmore"
            :text="networkInfo.description"
            link="#"
            less-str="read less"
            :max-chars="100"
          ></read-more>
        </p>
      </b-card-text>
    </b-card>
    <b-card v-else class="text-center">
      <b-spinner
        variant="primary"
        label="Text Centered"
        style="width: 3rem; height: 3rem"
      ></b-spinner>
    </b-card>

    <SidebarCommunity />

    <b-modal
      hide-footer
      :title="$t('network.Edit_network')"
      size="md"
      v-model="showModal"
    >
      <b-container>
        <b-form v-if="updateNetwork_form">
          <b-form-group
            label-cols-lg="12"
            :label="$t('network.Network_Name')"
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
            :label="$t('network.Brief_Description')"
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
            ></b-form-textarea>
          </b-form-group>

          <b-form-group
            label-cols-lg="12"
            :label="$t('network.Email')"
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
            :label="$t('network.Tel_1')"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-input
              id="tel-1"
              v-model="updateNetwork_form.primary_phone"
              name="primary_phone"
              type="tel"
              required
            >
            </b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-lg="12"
            :label="$t('network.Tel_2')"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-input
              id="tel-2"
              v-model="updateNetwork_form.secondary_phone"
              name="secondary_phone"
              type="tel"
              required
            >
            </b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-lg="12"
            :label="$t('network.Location')"
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
            :label="$t('network.Allow_Business_to_join_network')"
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
            <b-spinner v-if="SPupdateN" small type="grow"></b-spinner>
            {{ $t("network.Update_Network") }}
          </b-button>
        </b-form>
      </b-container>
    </b-modal>

    <!-- Edit Profile Picture -->
    <b-modal hide-footer id="" :title="$t('network.Upload_Profile_Picture')">
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
            <h4>{{ $t("network.Upload_a_New_picture") }}</h4>
          </div>

          <div class="col-sm-6 text-center" v-if="selectedImagePrv">
            <b-img :src="selectedImagePrv" rounded fluid alt="Image"></b-img>
          </div>
          <div class="col-sm-6 text-center" v-else>
            <h1>
              <fas-icon class="primary" :icon="['fas', 'edit']" />
            </h1>
            <h4>{{ $t("network.Edit_Your_New_picture") }}</h4>
          </div>
        </div>
      </div>
      <b-button
        style="float: right"
        class="mt-2"
        variant="primary"
        @click="submitFile"
      >
        <b-spinner v-if="SPupdateN" small type="grow"></b-spinner
        >{{ $t("network.Upload") }}
      </b-button>
    </b-modal>

    <b-modal
      id="modal-4"
      ref="modal-4"
      centered
      hide-footer
      :title="$t('network.Upload_a_New_picture')"
    >
      <b-row>
        <b-col cols="1" md="1" cl ass="m-0 p-0"></b-col>
        <b-col cols="10" md="10" class="m-0 p-0">
          <br />
          <div class="bordder">
            <span class="float-left">{{
              $t("network.Edit_Your_New_picture")
            }}</span>
            <span class="float-right">
              <b-button-group size="sm" class="">
                <input id="video" type="file" hidden />
                <input
                  hidden
                  type="file"
                  id="file"
                  ref="file"
                  @change="handleFileUpload"
                  name="img"
                  accept="image/*"
                />
                <b-button
                  :title="$t('general.Add_Profile_Image') "
                  size="sm"
                  variant="outline-primary"
                  @click="$refs.file.click()"
                >
                  <fas-icon
                    class="icons"
                    :icon="['fas', 'photo-video']"
                    size="lg"
                  />
                </b-button>
              </b-button-group>
            </span>
          </div>
          <br />
          <br />

          <div class="h300px" v-if="selectedImagePrv">
            <div id="preview">
              <span> </span>
              <img :src="selectedImagePrv" rounded fluid alt="Image" />
            </div>
          </div>

          <br />
          <span>
            <b-button
              variant="primary"
              block
              :disabled="SPupdateN"
              @click="submitFile"
            >
              <b-spinner v-if="SPupdateN" small type="grow"></b-spinner
              >{{ $t("network.Upload") }}
            </b-button>
          </span>
        </b-col>
        <b-col cols="1" md="1" class="m-0 p-0"></b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import SidebarCommunity from "@/components/businessf/tabs/owner/networks/sidebarcommunity";
export default {
  name: "parent",
  data() {
    return {
      default_profile_image: "require(`@/assets/default_network.png`)",
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

  created() {
    this.init();
    // console.log(this.networkInfo);
  },

  computed: {
    networkInfo() {
      return this.$store.state.networkProfile.networkInfo;
    },
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
        name: this.networkInfo.name,
        description: this.networkInfo.description,
        email: this.networkInfo.email,
        primary_phone: this.networkInfo.primary_phone,
        secondary_phone: this.networkInfo.secondary_phone,
        address: this.networkInfo.address,
        allow_business: this.networkInfo.allow_business,
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
      console.log("getNetworkInfo");
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
            message: this.$t("network.Changes_Made_Successfuly"),
          });
        })
        .catch((err) => {
          console.log({ err: err });
          this.SPupdateN = false;
          this.flashMessage.show({
            status: "error",
            message: this.$t("network.Unable_To_Make_Changes"),
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
            message: this.$t("network.Image_Uploaded_Successfuly"),
          });
        })
        .catch((err) => {
          console.log({ err: err });
          this.SPupdateN = !this.SPupdateN;
          this.flashMessage.show({
            status: "error",
            message: this.$t("network.Unable_To_Uploaded_Image"),
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
    top: 404px;
    margin-left: 296px;
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
    width: 400px !important;
    height: 400px !important;
  }
}
@media only screen and (max-width: 768px) {
  .network-logo {
    width: 300px !important;
    height: 300px !important;
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
    top: 300px;
    margin-left: 230px;
    padding: 0px 0px;
    color: #ffff;
    background: #e75c18;
    border-radius: 25px;
    border: 4px solid #ffff;
  }
}
</style>