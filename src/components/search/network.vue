<template>
  <div v-if="islogin">
    <!-- <b-spinner
      v-if="loader"
      variant="primary"
      :label="$t('search.Spinning')"
    ></b-spinner> -->


    <Skeleton  :loading="loader" />
      <Skeleton  :loading="loader" />


    <b-alert v-if="networks.data.length == 0 && !loader " show variant="warning"
      ><a href="#" class="alert-link">
        {{ $t("search.No_Network_available") }}!
      </a>
    </b-alert>
    

      
  <Network v-for="item in networks.data" :network="item" :key="item.id"  @getTotalCommunity='getTotalCommunity' />

 <!-- pagination -->

    <b-pagination
      v-if="networks.next || networks.previous"
      v-model="currentPage"
      pills
      :total-rows="networks.total"
      :per-page="networks.per_page"
      aria-controls="my-table"
      @change="changePage"
      align="center"
      :disabled="networks.data.length > 0 ? false : true"
    ></b-pagination>

    <!-- End pagination -->

    <b-modal id="modal-sm" size="sm" hide-header>
      {{ $t("search.Do_you_want_to_join_this_network") }}?
    </b-modal>
  </div>
  <div v-else>
    <login />
  </div>
</template>

<script>
import axios from "axios";
import login from "@/components/search/login";
import Skeleton from "@/components/skeleton";
import Network from "@/components/Network";
export default {
  props: ["title", "image"],
  data() {
    return {
      showAction: null,
      viewProduct: false,
      total: 0,
      per_page: 10,
      list: [],
      islogin: true,
      currentPage: 1,
      nextLoad: false,
    };
  },

  components: {
    login,
    Skeleton,
    Network
  },

  computed: {
    networks() {
      return this.$store.getters["networkSearch/getNetworks"];
    },
    loader() {
      return this.$store.getters["networkSearch/getLoader"];
    },
  },
  created() {
    // this.networkSearch()
    if (this.networks.data.length == 0) {
      console.log("[debug] network on created:", this.networks);

      this.networkSearch();
    }

    this.islogin = this.$store.getters["auth/isLogged"];

    console.log(this.islogin);
  },

  methods: {

      count(number) {
      if (number >= 1000000) {
        return number / 1000000 + "M";
      }
      if (number >= 1000) {
        return number / 1000 + "K";
      } else return number;
    },
    
    async handleFollow(user) {
      const uri = user.is_follow === 0 ? `/follow-community` : `/unfollow`;
      const nextFollowState = user.is_follow === 0 ? 1 : 0;
      const data = {
        id: user.id,
        type: "network",
      };
      await axios
        .post(uri, data)
        .then((response) => {
          user.is_follow = nextFollowState;
        })
        .catch((err) => console.log(err));
    },

    async handleJoin(user) {
      const uri = user.is_member == 0 ? `/add-member` : `/remove-member`;
      const nextFollowState = user.is_member == 0 ? 1 : 0;
      const data = {
        id: user.id,
        type: "network",
      };
      await axios
        .post(uri, data)
        .then((response) => {
          user.is_member = nextFollowState;
          this.flashMessage.show({
            status: "success",
            message: response.data.message,
            blockClass: "custom-block-class",
          })
        })
        .catch((err) => console.log(err));
    },
    changePage(value) {
      this.$store.commit("networkSearch/setNetworks", { data: [] });
      this.$store.commit("networkSearch/setLoader", true);
      this.currentPage = value;
      console.log("[debug] page before:", value);
      this.networkSearch();
    },

    networkSearch() {
      this.$store
        .dispatch("networkSearch/SEARCH", {
          country_id: 1,
          page: this.currentPage,
        })
        .then((res) => {
          this.total = this.networks.total;
        })
        .catch((err) => {
          // this.prodLoader = false;
          console.log("loader: ", this.prodLoader);
          console.log("products error: ");
          console.error(err);
        });
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
    width: 97px;
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
    width: 127px;
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