<template>
  <div>
    <Skeleton :loading="loader" />
    <Skeleton :loading="loader" />

    <b-alert v-if="networks.total == 0" show variant="warning"
      ><a href="#" class="alert-link"
        >{{ $t("search.No_Network_available") }}!
      </a>
    </b-alert>
 
  <Network v-for="item in networks.data" :network="item" :key="item.id"  />
   

    <b-modal v-model="show" id="modal-sm" size="sm" hide-header>
      <p class="text-center">Unable to join network!</p>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import Skeleton from "@/components/skeleton";
import Network from "@/components/Network";
export default {
  props: ["title", "image"],
  data() {
    return {
      show: false,
      showAction: null,
      viewProduct: false,
      total: 0,
      per_page: 10,
      list: [],
      currentPage: 1,
      nextLoad: false,
    };
  },

  components: {
    Skeleton,Network
  },

  created() {
    //console.log("Mini Networks => ".this.network());
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
        .catch((err) => {
          this.show = true;
          console.log(err);
        });
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
          });
        })
        .catch((err) => {
          this.show = true;
          console.log(err);
        });
    },

    changePage(value) {
      this.$store.commit("networkSearch/setNetworks", { data: [] });
      this.$store.commit("networkSearch/setLoader", true);
      this.currentPage = value;
      console.log("[debug] page before:", value);
      // this.networkSearch();
    },

    count(number) {
      if (number >= 1000000) {
        return number / 1000000 + "M";
      }
      if (number >= 1000) {
        return number / 1000 + "K";
      } else return number;
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
  .btn-join-mobile {
    padding-left: 20px;
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

  .title {
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

    margin-left: 10px;

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
  .title {
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

    margin-left: 70px;

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
    margin-right: -8px;
    margin-left: -8px;

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