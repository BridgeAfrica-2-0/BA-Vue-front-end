<template>
  <div>
    <b-spinner v-if="loader" variant="primary" label="Spinning"></b-spinner>

    <b-alert v-if="networks.total == 0 || networks.data.length == 0" show variant="warning"
      ><a href="#" class="alert-link"> No Network available! </a>
    </b-alert>

    <div
      class="people-style shadow"
      v-for="(network, index) in networks.data"
      :key="index"
    >
      <b-row @mouseover="showAction = index" @mouseleave="showAction = null">
        <b-col md="3" xl="3" lg="3" cols="5" sm="3">
          <div class="center-img">
            <img
              src="https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg"
              class="r-image"
            />
          </div>
        </b-col>
        <b-col md="7" cols="7" lg="5" sm="5">
          <p class="textt">
            <strong class="net-title"> {{ network.name }} </strong>
            <br />
            {{ network.purpose }}
            <br />
            {{ network.member_count }} Community member <br />

            <span class="location">
              <b-icon-geo-alt class="ico"></b-icon-geo-alt>
              {{ network.address }}
            </span>
            <br />
            {{ network.description }}
            <br />
            <b-link>Read More</b-link>
          </p>
        </b-col>

        <b-col
          lg="4"
          md="12"
          xl="4"
          cols="12"
          sm="4"
          v-if="index == showAction"
        >
          <b>{{ index }}</b>
          <div class="s-button">
            <b-row>
              <b-col md="4" lg="12" xl="12" sm="12" cols="4" class="mt-2">
                <b-button
                  block
                  size="sm"
                  class="b-background shadow"
                  variant="primary"
                >
                  <i class="fas fa-user-plus fa-lg btn-icon"></i>
                  <span class="btn-com" v-b-modal.modal-sm>Community</span>
                </b-button>
              </b-col>

              <b-col md="4" lg="12" xl="12" sm="12" cols="4" class="mt-2">
                <b-button
                  block
                  size="sm"
                  class="b-background shadow"
                  variant="primary"
                  @click="cta_business(network)"
                >
                  <i class="fas fa-envelope fa-lg btn-icon"></i>
                  <span class="btn-text">Message</span>
                </b-button>
              </b-col>

              <b-col md="4" lg="12" xl="12" sm="12" cols="4" class="mt-2">
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </div>
    <!-- pagination -->

    <!-- <b-pagination
      v-if="networks.next || networks.previous"
      v-model="currentPage"
      :total-rows="networks.total"
      :per-page="networks.per_page"
      aria-controls="my-table"
      @change="changePage"
      align="center"
      :disabled="networks.data.length > 0 ? false : true"
    ></b-pagination> -->

    <!-- End pagination -->

    <b-modal id="modal-sm" size="sm" hide-header>
      Do you want to join this network?
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ["title", "image"],
  data() {
    return {
      showAction: null,
      viewProduct: false,
      total: 0,
      per_page: 10,
      list: [],
      currentPage: 1,
      nextLoad: false,
    };
  },
  computed: {
    networks() {
      return this.$store.getters["allSearch/getNetworks"];
    },
    loader() {
      return this.$store.getters["allSearch/getLoader"];
    },
  },

  methods: {
    changePage(value) {
      this.$store.commit("networkSearch/setNetworks", { data: [] });
      this.$store.commit("networkSearch/setLoader", true);
      this.currentPage = value;
      console.log("[debug] page before:", value);
      // this.networkSearch();
    },
     cta_business(data) {
      console.log(data);
      this.$store.commit('businessChat/setSelectedChat', data);
      
      let path = '';
      if (this.activeAccount.user_type == 'business') {
        path = '/business_owner/' + this.activeAccount.id;
      } else if (this.activeAccount.user_type == 'network') {
        path = '/';
      } else path = '/messaging';

      // this.$router.push({ path: `${path}`, query: { tabId: 1, msgTabId: 1 } });
      this.$router.push({ path: `/business_owner/${this.activeAccount.id}`, query: { tabId: 1, msgTabId: 0 } });

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
    font-size: 12px;
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

    margin-left: -15px;
    margin-right: -15px;

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
</style>
