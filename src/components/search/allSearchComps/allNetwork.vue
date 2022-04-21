<template>
  <div>
    <Skeleton :loading="loader" />
    <Skeleton :loading="loader" />

    <b-alert v-if="networks.total == 0" show variant="warning"
      ><a href="#" class="alert-link"
        >{{ $t("search.No_Network_available") }}!
      </a>
    </b-alert>

    <div
      class="people-style shadow"
      v-for="(network, index) in networks.data"
      :key="index"
    >
      <b-row>
        <b-col md="3" xl="3" lg="3" cols="4" sm="3" class="pr-0">
          <div class="center-img">
            <img :src="network.image" class="r-image" />
          </div>
        </b-col>
        <b-col md="7" cols="8" lg="5" sm="5">
          <p class="textt">
            <strong class="net-title">
              <router-link :to="'network/' + network.id">
                {{ network.name }}
              </router-link>
            </strong>

            {{ count(network.community) }} {{ $t("dashboard.Community") }}
            <br />

            <span class="location">
              <b-icon-geo-alt class="ico"></b-icon-geo-alt>
              {{ network.address }}
            </span>
            <br />
            <read-more
              :more-str="$t('search.read_more')"
              class="readmore"
              :text="network.description"
              link="#"
              :less-str="$t('search.read_less')"
              :max-chars="30"
            >
            </read-more>
            <!-- <b-link>{{ $t("search.Read_More") }}</b-link> -->
          </p>
        </b-col>

        <b-col lg="4" md="12" xl="4" cols="12" sm="4">
          <div class="s-button">
            <b-row>
              <b-col md="4" lg="12" xl="12" sm="12" cols="4" class="mt-2">
                <b-button
                  block
                  size="sm"
                  :class="network.is_follow === 1 && 'u-btn'"
                  variant="primary"
                  @click="handleFollow(network)"
                >
                  <i
                    class="fas fa-lg btn-icon"
                    :class="
                      network.is_follow === 1 ? 'fa-user-minus' : 'fa-user-plus'
                    "
                  ></i>
                  <span class="btn-com">{{ $t("search.Community") }}</span>
                </b-button>
              </b-col>

              <b-col md="4" lg="12" xl="12" sm="12" cols="4" class="mt-2">
                <BtnCtaMessage :element="network" type="network" />
              </b-col>

              <b-col md="4" lg="12" xl="12" sm="12" cols="4" class="mt-2">
                <b-button
                  block
                  size="sm"
                  :class="network.is_member == 1 && 'u-btn'"
                  variant="primary"
                  @click="handleJoin(network)"
                >
                  <i
                    class="fas fa-lg btn-icon"
                    :class="
                      network.is_member == 1 ? 'fa-user-minus' : 'fa-user-plus'
                    "
                  ></i>

                  <span class="btn-text"> {{ $t("search.Join") }} </span>
                </b-button>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </div>
    <b-modal v-model="show" id="modal-sm" size="sm" hide-header>
      <p class="text-center">Unable to join network!</p>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import Skeleton from "@/components/skeleton";

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
    Skeleton,
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