<template>
  <div class=" ">
    <b-card v-if="networkInfo" title="" class="">
      <b-container class="a-center">
        <!-- :src="require('@/assets/img/mayor.jpg')" -->
        <b-avatar
          :src="networkInfo.image"
          variant="primary"
          square
          rounded
          class="network-logo"
        >
        </b-avatar>
      </b-container>
      <br />
      <b-container>
        <b-row>
          <b-col cols="6">
            <h6 class="  m-0 p-0 a-center network-name ">
              <b> {{ networkInfo.name }}</b>
            </h6>
          </b-col>
          <b-col cols="6">
            <b-button
              variant="primary"
              size="sm"
              @click="addFollower"
              :disabled="buttonStatus"
              :style="
                networkInfo.is_follow !== 0
                  ? 'background-color: rgb(162,107,80);'
                  : ''
              "
              class="a-center"
            >
              <i
                :class="
                  networkInfo.is_follow
                    ? 'fas fa-user-minus fa-lg btn-icon'
                    : 'fas fa-user-plus fa-lg btn-icon'
                "
              ></i>
              <span> {{ $t("general.Community") }}</span>
            </b-button>
          </b-col>
        </b-row>
      </b-container>

      <br />

      <b-card-text class="text-left">
        <b-container>
          <b-row>
            <b-col>
              <p class="a-center ">
                <b-icon icon="globe" variant="primary"></b-icon>
                <span class="pivate text"> Private </span>
              </p>
            </b-col>
            <b-col>
              <p class="a-center">
                <b-icon icon="people-fill" variant="primary"></b-icon>
                <span class="pivate text">
                  {{ nFormatter(networkInfo.community) }}
                  {{ $t("general.community") }}
                </span>
              </p>
            </b-col>
          </b-row>
        </b-container>
        <h6 class="mt-2 font-weight-bolder title ">
          {{ $t("general.About") }}
        </h6>
        <p class="text-justify text">
          <read-more
            :more-str="$t('search.read_more')"
            class="readmore"
            :text="networkInfo.description"
            link="#"
            :less-str="$t('search.read_less')"
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
            :disabled="SPupdateN"
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
  </div>
</template>

<script>
// import ReadMore from 'vue-read-more';
//import SidebarCommunity from "@/components/businessf/tabs/owner/editors/sidebarcommunity";

import SidebarCommunity from "@/components/businessf/tabs/owner/networks/sidebarcommunity";
export default {
  name: "parent",
  components: {
    SidebarCommunity
    // ReadMore
  },
  data() {
    return {
      url: null,
      networkShow: true,
      showModal: false,
      Pcommunity: false,
      buttonStatus: false,
      updateNetwork_form: null,
      text: "",
      file: "",
      SPupdateN: false
    };
  },
  computed: {
    networkInfo() {
      return this.$store.state.networkProfile.networkInfo;
    }
  },
  mounted() {
    this.url =
      this.$route.params.id !== undefined
        ? this.$route.params.id
        : this.$router.push("notFound");
    this.getNetworkInfo();
  },
  methods: {
    addNetwork() {
      this.updateNetwork_form = {
        name: this.networkInfo.name,
        description: this.networkInfo.description,
        email: this.networkInfo.email,
        primary_phone: this.networkInfo.primary_phone,
        secondary_phone: this.networkInfo.secondary_phone,
        address: this.networkInfo.address,
        allow_business: this.networkInfo.allow_business
      };
      console.log(this.networkInfo[0]);
      console.log("hello");
      this.showModal = !this.showModal;
    },

    updateNetwork: function() {
      this.SPupdateN = true;
      console.log("this.updateNetwork_form", this.updateNetwork_form);
      this.$store
        .dispatch("networkProfile/updateNetwork", {
          path: "network/" + this.url + "/about/update",
          formData: this.updateNetwork_form
        })
        .then(({ data }) => {
          console.log(data);
          this.SPupdateN = false;
          this.getNetworkInfo();
          this.flashMessage.show({
            status: "success",
            message: this.$t("network.Changes_Made_Successfuly")
          });
          this.showModal = !this.showModal;
        })
        .catch(err => {
          console.log({ err: err });
          this.SPupdateN = false;
          this.flashMessage.show({
            status: "error",
            message: this.$t("network.Unable_To_Make_Changes")
          });
        });
    },

    nFormatter: function(num) {
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
    openNetwork() {
      this.networkShow = false;
    },
    addFollower: function() {
      this.buttonStatus = true;
      this.SPcommunity = !this.SPcommunity;
      this.axios
        .post("network/" + this.url + "/about/follow")
        .then(() => {
          this.getNetworkInfo();
          this.SPcommunity = !this.SPcommunity;
          if (this.networkInfo.is_follow) {
            this.buttonStatus = false;
            this.flashMessage.show({
              status: "success",
              message: this.$t("network.You_Are_Not_more_Following")
            });
          } else {
            this.buttonStatus = false;
            this.flashMessage.show({
              status: "success",
              message: this.$t("network.You_Are_Now_Following")
            });
          }
        })
        .catch(err => {
          console.log({ err: err });
          this.buttonStatus = false;
          this.flashMessage.show({
            status: "error",
            message: this.$t("network.Unable_To_follow")
          });
        });
    },
    getNetworkInfo() {
      this.$store
        .dispatch("networkProfile/getnetworkInfo", this.url)
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
