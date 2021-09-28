<template>
  <div>
    <b-row>
      <b-col lg="6">
        <div class="people-style shadow">
          <b-row>
            <b-col
              v-for="(network, index) in getNetworksFromStore"
              :key="index"
              md="3"
              xl="3"
              lg="3"
              cols="5"
              sm="3"
            >
              <div class="center-img">
                <img
                  :src="BaseURL + `/` + `${network.business_image}`"
                  class="r-image"
                />
              </div>
            </b-col>
            <b-col md="5" cols="7" lg="9" xl="5" sm="5">
              <p class="textt">
                <strong class="net-title"> {{ network.name }} </strong>
                <br />
                {{ network.business_id }}
                <br />
                {{ network.member_count }} <br />

                <span class="location">
                  <b-icon-geo-alt class="ico"></b-icon-geo-alt>
                  {{ network.business_address }}
                </span>
                <br />

                {{ network.description.substring(0, 90) }}
                <b-link v-if="network.description.length > 90"
                  >Read More</b-link
                >
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
                      <i class="fas fa-user-plus  fa-lg btn-icon "></i>
                      <span class="btn-com">Community</span>
                    </b-button>
                  </b-col>

                  <b-col md="12" lg="4" xl="12" sm="12" cols="4" class="mt-2">
                    <b-button
                      block
                      size="sm"
                      class="b-background shadow"
                      variant="primary"
                    >
                      <i class="fas fa-envelope   fa-lg btn-icon "></i>
                      <span class="btn-text">Message</span>
                    </b-button>
                  </b-col>
                  <b-col md="12" lg="4" xl="12" sm="12" cols="4" class="mt-2">
                    <b-button
                      block
                      size="sm"
                      class="b-background shadow"
                      variant="primary"
                      @click="joinNetwork"
                    >
                      <i class="fas fa-plus   fa-lg btn-icon "></i>
                      <span class="btn-text">Join</span>
                    </b-button>
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
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["network"],
  data: () => ({
    BaseURL: process.env.VUE_APP_API_URL,
  }),
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
      Joining: "businessFollowers/Joining",
    }),

    joinNetwork() {
      this.Joining();
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

@media only screen and (min-width: 768px) and (max-width: 1531px) {
  .textt {
    padding-left: 30px;
  }
}
</style>
