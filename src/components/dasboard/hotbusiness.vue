<template>
  <div>
    <b-card
      class="border blecrr shadow border pt-0"
      style="height: 500px; padding-bottom: 50px"
    >
      <span>
        <h6 class=" m-3 mt-1">
          <fas-icon class="icons" :icon="['fas', 'hands-helping']" size="lg" />
          <span class="ml-2"> {{ $t("dashboard.HOT_BUSINESSES") }} </span>
        </h6>
      </span>

      <div class="s-comcardd pt-0" infinite-wrapper>
        <VuePerfectScrollbar
          class="scroll-area s-card p-1"
          settings="{maxScrollbarLength: 60px}"
          @ps-y-reach-end="scrollHandle"
        >
          <Business
            v-for="item in business"
            :key="item.id"
            :business="item"
            @getTotalCommunity="getTotalCommunity"
          />

          <infinite-loading
            @infinite="infiniteHandler"
            ref="infiniteLoading"
          ></infinite-loading>
        </VuePerfectScrollbar>
      </div>
    </b-card>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import Ps from "perfect-scrollbar";
import BtnCtaMessage from "@/components/messagesCTA/Btn-cta-message";
import Business from "@/components/Business";

import axios from "axios";
export default {
  props: ["title", "image"],
  components: {
    //  BtnCtaMessage,
    Business,
    VuePerfectScrollbar
  },
  data() {
    return {
      page: 1,
      isloading: false,
      business: [],
      options: {
        rewind: true,
        autoplay: true,
        perPage: 1,
        pagination: false,
        disable: false,
        type: "loop",
        perMove: 1
      }
    };
  },

  mounted() {
    this.$refs.infiniteLoading.attemptLoad();
  },
  methods: {
    getTotalCommunity() {
      this.$store
        .dispatch("profile/Tcommunity")
        .then(response => {})
        .catch(error => {});
    },

    scrollHandle(evt) {
      this.$refs.infiniteLoading.attemptLoad();
      console.log(evt);
    },

    gotoBusiness(id) {
      this.$router.push(`/business/${id}?tabId=1`);
    },
    count(number) {
      if (number >= 1000000) {
        return number / 1000000 + "M";
      }
      if (number >= 1000) {
        return number / 1000 + "K";
      } else return number;
    },

    async handleFollow(user) {
      document.getElementById("followbtn" + user.id).disabled = true;

      const uri = user.is_follow === 0 ? `/follow-community` : `/unfollow`;
      const nextFollowState = user.is_follow === 0 ? 1 : 0;
      const data = {
        id: user.id,
        type: "business"
      };

      await axios
        .post(uri, data)
        .then(response => {
          user.is_follow = nextFollowState;
          document.getElementById("followbtn" + user.id).disabled = false;
          this.getTotalCommunity();
        })
        .catch(err => {
          document.getElementById("followbtn" + user.id).disabled = false;
        });
    },

    infiniteHandler($state) {
      let url = "profile/hot/business/";
      console.log("loading page " + this.page);
      axios
        .get(url + this.page)
        .then(({ data }) => {
          if (data.data.length) {
            this.page += 1;

            this.business.push(...data.data);
            $state.loaded();
            this.$nextTick(() => {});
          } else {
            $state.complete();
          }
        })
        .catch(err => {});
    }
  }
};
</script>

<style scoped>
.hov-btn {
  width: 40px !important;
  height: 40px !important;
  vertical-align: center;
  text-align: center;
  align-items: center;
  align-self: center;
  color: #455a64;
}

.biz-name {
  font-size: 16px;
  line-height: 1.2;
  font-family: poppins;
  font-weight: 400;
  color: #455a64;
}

.biz-name:hover {
  color: #e75c18;
}
.s-comcardd {
  height: 100%;
  overflow: hidden;
  overflow-x: hidden;
  padding-bottom: 5px;
}

.card-body {
  padding-left: 5px;
}
.flx100 {
  flex-basis: 80% !important;
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

  .textt {
    color: #000;

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
  .btn {
    font-size: 11.5px !important;
  }

  .textt {
    color: #000;

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

    margin-left: 60px;

    margin-right: -5px;

    line-height: 25px;
  }

  .location {
    margin-bottom: 30px;
  }

  .btn {
    padding-top: 6px;

    height: 38px;
    width: 110px;
  }

  .r-image {
    border-radius: 8px;

    height: 100px;
    width: 100px;
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

<style>
.u-btn {
  filter: grayscale(0.6);
}
</style>
