<template>
  <div class="t-color">
    <div>
      <fas-icon class="icons" :icon="['fas', 'project-diagram']" size="lg" />
      <span class="t-color"> {{$t("general.Network")}} </span>

      <b-button 
      v-if="display != 'BusinessFollower' && display != 'BusinessFollowerGuest' "
        class="float-right w-auto"
        @click="showmodal(true, 'add')"
        variant="primary"
        >{{$t("general.Add_Network")}}</b-button
      >
      <hr />
      <b-row>
        <b-col
          cols="12"
          md="12"
          lg="6"
          class="p-0 mb-2"
          v-for="network in network"
          :key="network.id"
        >
          <div class="people-style shadow h-100">
            <b-row>
              <b-col md="3" xl="3" lg="3" cols="5" sm="3">
                <div class="center-img">
                  <img :src="network.image" class="r-image" />
                </div>
              </b-col>
              <b-col md="5" cols="7" lg="7" xl="5" sm="5">
                <p class="textt">
                  <strong class="net-title"> {{ network.name }} </strong> <br />
                  <span v-for="cat in network.categories" :key="cat">
                    {{ cat }}
                  </span>
                  <br />
                  {{ network.followers }} {{$t("general.Community")}} <br />

                  <span class="location">
                    <b-icon-geo-alt class="ico"></b-icon-geo-alt>
                    {{ network.address }}
                  </span>
                  <br />

                  <read-more
                    v-if="network.description"
                     :more-str="$t('search.read_more')"
                    :text="network.description"
                    link="#"
                    :less-str="$t('search.read_less')"
                    :max-chars="200"
                  ></read-more>
                  
                </p>
              </b-col>

              <b-col lg="12" md="4" xl="4" cols="12" sm="4">
                <div class="s-button">
                  <b-row>
                    <b-col md="12" lg="4" xl="12" sm="12" cols="4" class="mt-2">
                      <b-button
                        block
                        size="sm"
                        class="b-background shadow"
                        variant="primary"
                      >
                        <i class="fas fa-user-plus fa-lg btn-icon"></i>
                        <span class="btn-com" v-b-modal.modal-sm
                          >{{$t("general.Community")}}</span
                        >
                      </b-button>
                    </b-col>

                    <b-col md="12" lg="4" xl="12" sm="12" cols="4" class="mt-2">
                      <BtnCtaMessage :element="network" type="network" />
                    </b-col>

                    <b-col md="12" lg="4" xl="12" sm="12" cols="4" class="mt-2">
                    </b-col>
                  </b-row>
                </div>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>

      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { isGuestUser } from '@/helpers';

export default {
  data() {
    return {
      page: 1,
      biz_id: null,

      BaseURL: process.env.VUE_APP_API_URL,
      showModal: false,
      selectedFile: "",
      editNet: false,
      dat: true,
      viewnetwork: false,
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
      isGuestUser: isGuestUser
    };
  },
  beforeMount() {
    this.getNetworks();
  },

  mounted() {
    this.biz_id = this.$route.params.id;
  },

  computed: {
    display(){
      return this.$route.name;
    },
    network() {
      return this.$store.state.businessOwner.networks;
    },

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
    ...mapActions({
      addNetwork: "businessOwner/addNetwork",
      getNetworks: isGuestUser ? "businessGuest/getNetworks": "businessOwner/getNetworks",
      editNetwork: "businessOwner/editNetwork",
    }),

    infiniteHandler($state) {
      let url = "business/network/" + this.biz_id + "/" + this.page, dispatchMethod = "businessOwner/loadMore";
      if (this.isGuestUser ) {
        url = "guest/business/network/" + this.biz_id + "/" + this.page;
        dispatchMethod = "businessGuest/loadMore";
      }
      if (this.page == 1) {
        this.network.splice(0);
      }
      this.$store
        .dispatch(dispatchMethod, url)
        .then(({ data }) => {
          console.log(data.data);
          if (data.data.length) {
            this.network.push(...data.data);

            this.page += 1;

            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    //View network on pop up modal
    viewNetwork(network) {
      this.chosenNetwork = network;
      this.viewnetwork = true;
    },
    showmodal(state, arg) {
      this.showModal = state;
      if (arg == "edit") {
        this.editNet = true;
      } else {
        this.editNet = false;
        this.createdNetwork.image = "";
        this.createdNetwork.name = "";
        this.createdNetwork.address = "";
        this.createdNetwork.neighbourhood = "";
        this.createdNetwork.description = "";
        this.createdNetwork.purpose = "";
        this.createdNetwork.special_needs = "";
        this.createdNetwork.allow_business = 0;
      }
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
  .btn-icon {
    margin-top: 3px;
  }

  .btn-text {
    margin-left: 5px;
  }

  .btn-com {
    margin-left: 3px;
  }
}

.btnpngs {
  width: 20px;
  margin-right: 5px;
}

.btn {
  border-radius: 5px;
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

  .location {
    margin-bottom: 30px;
  }

  .btn {
    padding-top: 6px;
    font-size: 10px;

    height: 28px;
    width: 85px;
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

  .btn {
    padding-top: 6px;

    height: 38px;
    width: 123px;
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

.btn {
  display: flex;
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

    padding: 7px;
  }
}

@media only screen and (max-width: 768px) {
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

    padding: 7px;
  }

  .btn {
    display: flex;

    padding-right: 60px;
  }

  h4 {
    font-size: 15px;
  }
}

@media only screen and (max-width: 520px) {
  .btn {
    display: flex;
  }
}

.w-auto {
  widows: auto;
}
</style>