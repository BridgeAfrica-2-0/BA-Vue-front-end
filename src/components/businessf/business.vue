<template>
  <div class="main">
    <div class="splide" v-if="business_info.cover.length">
      <splide :options="options" class="banner r-image">
        <splide-slide v-for="cover in business_info.cover" :key="cover.id">
          <img :src="cover.media_url" class="r-image" />
        </splide-slide>
      </splide>
    </div>

    <div v-else class="splide">
      <splide :options="options" class="banner r-image">
        <splide-slide v-for="(cover, index) in getCustomCover" :key="index">
          <img :src="cover" class="r-image" />
        </splide-slide>
      </splide>
    </div>

    <b-button class="float-right see-all" @click="gotoCoverImages">
      {{ $t("businessf.See_All") }}
    </b-button>

    <b-row class="mt-4 desktop container-fluid">
      <b-col>
        <b-row class="profile ml-md-0 ">
          <div>
            <img class="logo" :src="business_info.logo_path" />
          </div>
          <div class="d-inline-block ml-4 float-left name-block">
            <b-link>
              <h5 class="font-weight-bolder name w-md-bizname">{{ business_info.name }}</h5>
            </b-link>
            <p>
              <br />
              {{ business_info.community }} {{ $t("businessf.Community") }}
            </p>
          </div>
        </b-row>
      </b-col>
      <b-col cols="6">
        <div class="float-right d-inline-flex">
          <b-button
            class="community size d-flex"
            size="sm"
            id="followbtn"
            :class="hasBeFollow !== 0 && 'u-btn'"
            @click="handleFollow"
          > <span class=" d-flex m-auto">   
            <i
              :class="`fas ${
                hasBeFollow ? 'fa-user-minus' : 'fa-user-plus'
              } fa-lg btn-icon`"
            ></i>
            <span class="f-14"> {{ $t("businessf.Community") }}</span>
            </span>
          </b-button>

          <BtnCtaMessage
            class="ml-1"
            :element="{ id: Number(url_data), ...business_info }"
            type="business"
            :header="true"
          />

          <b-button
            class="direction ml-1 size"
            variant="primary"
            size="sm"
            @click="gotoAbout()"
          >
            <i class="fas fa-map-marked-alt fa-lg btn-icon"></i>
            <span class="f-14">{{ $t("businessf.Direction") }}</span>
          </b-button>

          <b-dropdown
            class="ml-2 dot-btn mt-2 mt-sm-2 mt-md-0"
            no-caret
            dropleft
            variant="link"
          >
            <template #button-content>
              <b-icon-three-dots></b-icon-three-dots>
            </template>
            <b-dropdown-item>
              <b-icon icon="flag" variant="primary"></b-icon>
              {{ $t("businessf.Report") }}</b-dropdown-item
            >
          </b-dropdown>
        </div>
      </b-col>
    </b-row>
    <div class="mobile">
      <b-row>
        <b-col>
          <b-row>
            <div>
              <img class="logo" :src="business_info.logo_path" />
            </div>
            <div class="d-inline-block mt-4 ml-4 float-left texts">
              <h6 class="font-weight-bolder name w-biznam">{{ business_info.name }}</h6>
              <p class="details">
                {{ business_info.community }} {{ $t("businessf.Community") }}
              </p>
            </div>
          </b-row>
        </b-col>
        <b-col cols="2">
          <b-button
            class="community size"
            variant="primary"
            id="followbtn"
            
            :class="hasBeFollow !== 0 && 'u-btn'"
            @click="handleFollow"
          >
            <i class="fas fa-user-plus fa-lg btn-icon"></i>
            <span>{{ $t("businessf.Community") }}</span></b-button
          >
        </b-col>
      </b-row>
    </div>
    <div class="mb-1 m-btn d-inline-flex d-md-none">
      <!-- <b-button class="message size">
        <i class="fas fa-envelope fa-lg btn-icon"></i>
        <span>{{ $t("businessf.Message") }}</span>
      </b-button> -->
      <BtnCtaMessage :element="business_info" type="business" :header="true" />

      <b-button
        class="direction size ml-2"
        variant="primary"
        @click="gotoAbout()"
      >
        <i class="fas fa-map-marked-alt fa-lg btn-icon"></i>
        <span>{{ $t("businessf.Direction") }}</span></b-button
      >

      <b-dropdown
        class="ml-1 dot-btn mt-1 mt-sm-2 mt-md-0"
        no-caret
        variant="link"
      >
        <template #button-content>
          <b-icon-three-dots></b-icon-three-dots>
        </template>
        <b-dropdown-item>
          <b-icon icon="flag" variant="primary"></b-icon>
          {{ $t("businessf.Report") }}</b-dropdown-item
        >
      </b-dropdown>
    </div>
    <div class="body container">
      <b-row>
        <b-col cols="12" class="p-0">
          <b-tabs lazy content-class="mt-3 p-0" v-model="currentTab" fill pills>
            <b-tab :title="$t('general.Home')"><HomePage /></b-tab>
            <b-tab :title="$t('general.About')"><About /></b-tab>
            <b-tab type="business" :title="$t('general.Media')"
              ><Media
                :key="key"
                :type="'business'"
                :isEditor="false"
                :showCoverAlbum="showCoverAlbum"
            /></b-tab>
            <b-tab :title="$t('general.Market')"><MarketPlace /></b-tab>
            <b-tab :title="$t('general.Networks')"><Networks /></b-tab>
            <b-tab :title="$t('general.Community')"><Community /></b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </div>
  </div>
</template>


<script>
import HomePage from "../businessf/tabs/businessHome";
import About from "./tabs/about";
import Media from "@/components/owner/tabs/media";
import MarketPlace from "./tabs/marketPlace";
import Community from "@/components/businessOwner/tabs/memberNetwork";
import Networks from "./tabs/networks";
import { isGuestUser } from '@/helpers';

import { defaultCoverImage } from "@/mixins";

import axios from "axios";

export default {
  name: "Home",
  mixins: [defaultCoverImage],

  components: {
    HomePage,
    About,
    Media,
    MarketPlace,
    Community,
    Networks,
  },

  data() {
    return {
      key: 0,
      hasBeFollow: 0,
      showCoverAlbum: false,
      url_data: null,
      currentTab: 0,
      tabIndex: null,
      tabs: ["#post", "#about", "#media", "#market","#network", "#community"],
      isGuestUser: isGuestUser(),
    };
  },

  computed: {
    business_info() {
      return this.isGuestUser ? this.$store.state.businessGuest.businessInfo: this.$store.state.businessOwner.businessInfo;
    },
     perPage() {
      console.log(this.business_info.cover)
      if (this.business_info.cover) {
        if (this.business_info.cover.length == 1) {
          return 1;
        } else if (this.business_info.cover.length == 2) {
          return 2;
        } else {
          return 3;
        }
      } else {
        return 3;
      }
    },

    perPageM() {
      if (this.business_info.cover) {
        if (this.business_info.cover.length == 1) {
          return 1;
        } else {
          return 2;
        }
      } else {
        return 3;
      }
    },

    options() {
      return {
        rewind: true,
        autoplay: true,
        perPage: this.perPage,
        pagination: false,

        type: "loop",
        perMove: 1,

        breakpoints: {
          760: {
            perPage: 1,
            gap: "0rem",
          },
          992: {
            perPage: this.perPageM,
            gap: "1rem",
          },
        },
      };
    },

  },

  created() {
    this.currentTab = this.$route.query.tabId ? this.$route.query.tabId :this.tabs.findIndex((tab) => tab === this.$route.hash) ;

    

    
    this.currentAuthType = "business";
    this.url_data = this.$route.params.id;
    this.businessInfo();
  },

  watch: {
    "$store.state.businessOwner.businessInfo": function () {
      this.hasBeFollow = this.$store.state.businessOwner.businessInfo.is_follow;
    },

    currentTab: (newVal, oldVal) => {
      if (2 != newVal) {
        this.showCoverAlbum = false;
        this.key = this.key - 1;
      }
    },

    $route(to, from) { 
      if ("#media" == to.hash)
        this.showCoverAlbum = true;

      this.currentTab = this.tabs.findIndex((tab) => tab === to.hash);


       if ("#about" == to.hash)
      

      this.currentTab = this.tabs.findIndex((tab) => tab === to.hash);
    },


    
  },

  mounted() {
    this.businessCommunityTotal();
    this.ownerPost();
  },
  methods: {
    gotoCoverImages() {
      this.showCoverAlbum = true;
      this.key = this.key + 1;
      this.currentTab = 2;
    },

    async handleFollow() {
      const uri = !this.hasBeFollow ? `/follow-community` : `/unfollow`;
      const nextFollowState = !this.hasBeFollow ? 1 : 0;
      const data = {
        id: this.business_info.id ? this.business_info.id : this.$route.params.id,
        type: "business",
      };

      await axios
        .post(uri, data)
        .then((response) => {
          console.log(response);
          this.hasBeFollow = nextFollowState;
          // document.getElementById("followbtn").disabled = nextFollowState;
        })
        .catch((err) => {
          console.log(err);
          // document.getElementById("followbtn").disabled = false;
        });
    },

    gotoAbout() {
      this.currentTab = 1;
    },

    businessInfo() {
      const dispatchMethod = this.isGuestUser ? "businessGuest/businessInfo": "businessOwner/businessInfo";
      this.$store
        .dispatch(dispatchMethod, this.url_data)
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    businessCommunityTotal() {
      const dispatchMethod = this.isGuestUser ? "businessGuest/businessCommunityTotal": "businessOwner/businessCommunityTotal";
      this.$store
        .dispatch(dispatchMethod, this.url_data)
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    ownerPost() {
      const dispatchMethod = this.isGuestUser ? "businessGuest/ownerPost": "businessOwner/ownerPost";
      this.$store
        .dispatch(dispatchMethod, this.url_data)
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
  },
};
</script>

<style scoped>

.f-14{
  font-size: 14px;
}

.w-md-bizname{
  max-width: 300px;
}
.w-biznam{
   max-width: 150px;
}
.place_holder {
  width: 50% !important;
  height: 50% !important;
}

.images {
  display: flex;
  width: 100%;
}

/* .body {
  margin: 63px;
  margin-top: 10px;
} */
.profile {
  position: relative;
  left: 52px;
  top: -34px;
}
.see {
  margin-left: 120px;
  background-color: #fff;
  color: black;
  border: none;
}
.r-image {
  height: 426px;
  object-fit: cover;
  width: 100%;
  background-size: contain;
}

.main {
  width: 100%;
  overflow-x: none;
}
.logo {
  height: 120px;
  width: 120px;
  position: relative;
  top: 8px;
}
.m-btn {
  display: flex;
  margin-left: 15px;
}
.btn {
  position: relative;
  z-index: 5;
}
img {
  width: 100%;
  height: 426px;
}
.slides {
  display: flex;
}


span {
  font-size: 16px;
  margin-left: 4px;
 
}
p {

  font-size: 14px;
}
.btns {
  position: relative;
  left: 75%;
}
.m-btn {
  display: none;
}
.photo-btns {
  margin-left: 80%;
  margin-top: -50px;
}
.cnt-btn {
  color: white;
}
.mobile {
  display: none;
}

.see-all:hover {
  background-color: rgba(220, 220, 220, 0.398);
  color: #fff;
  border: solid 2px white;
}
.row {
  margin: 10px;
}
.txt {
  color: #fff;
}
.size {
  width: 137px;
  height: 38px;
}

.name {
  position: relative;
  top: 11px;
  font-size: 20px;
 
}

.name-block {
  position: relative;
  top: 40px;
}
.community {
  color: #fff;
  background-color: #ffd200;
  border: none;
  border-radius: none;
}
.community:hover {
  background-color: #b39500;
}
/* cta comp */
.message {
  color: #fff !important;
  background-color: #32a400;
  border: none;
  border-radius: none;
}
.message:hover {
  background-color: #006400;
}
/* cta comp */
.direction {
  color: #fff;
  border: none;
  border-radius: none;
}
.direction:hover {
  background-color: #cc4d0d;
}

.drop {
  height: 38px;
  background-color: #ee7600;
}

.dot-btn {
  height: px;
  margin-left: 3px;
}

@media only screen and (max-width: 768px) {
  .body {
    margin: 2px;
  }

  .dot-btn {
    height: 33px;
    margin-left: 3px;
  }

  .desktop {
    display: none;
  }
  .see-all {
    /* width: 91px;
    height: 38px; */
    position: relative;
    top: 35px;
  }
  .row {
    width: 100%;
    margin-left: -5px;
  }
  span {
    font-size: 13px;
    margin-left: 2px;
  }
  .logo {
    height: 64px;
    width: 64px;
    position: relative;
    top: 6px;
  }
  .size {
    width: 120px;
    height: 38px;
  }
  .r-image {
    height: 180px;
    object-fit: cover;
    width: 100%;

    background-size: contain;
  }

  img {
    height: 180px;
  }
  .btn-mobile {
    display: flex;
  }
  .community {
    display: flex;
    margin-left: -70px;
    margin-top: 40px;
  }
  .name {
    position: relative;
    font-size: 16px;
   
  }
  p {
  
    font-size: 12px;
  }
  .m-fol {
    width: 160px;
  }
  .m-msg {
    width: 150px;
  }
  .m-btn {
    display: block;
  }
  .mobile {
    display: block;
  }

  .avat {
    margin-top: 20px;
  }
  .details {
    font-size: 10px;
  }
  .texts {
    position: relative;
    left: -15px;
    top: -20px;
  }
  .more {
    position: relative;
    top: 20px;
  }
  .options {
    margin-right: -8px;
  }
  .photo-btns {
    display: none;
  }
}

@media (min-width: 760px) {
  .profile-name {
    font-size: 20px;

    margin-left: 20px;
  }

  .community {
    font-size: 14px;
  }

  .avatar-header-icon {
    width: 2em;
    height: 2em;
    position: absolute;
    left: 100px;
    top: 100px;
    background-color: #e75c18;
    color: white;
    border-radius: 24px;
    padding: 6px;
  }

  .logo_avat {
    width: 120px;
    height: 120px;
  }
  .banner {
    height: 426px;
  }

  .edit-btn {
    width: 146px;
    height: 40px;
    background-color: #e4c229;
    border-color: #e4c229;
  }

  .edit-btn:hover {
    border-color: #e4c229;
  }

  .edit-btn:focus {
    border-color: #e4c229;
  }

  .edit-btn:active {
    border-color: #e4c229;
  }

  .dot-btn {
    height: 40px;
    margin-left: 3px;
  }
}

.round-coner {
  border-radius: 4px;
}

@media (min-width: 768px) {
  .r-image {
    height: 486px;
    object-fit: cover;
    width: 100%;

    background-size: contain;
  }

  .logo-container {
    padding-left: 73px;
    padding-right: 63px;
  }

  .see-all {
    height: 48px;
    width: 174px;
    position: relative;
    margin-top: -100px;
    left: -20px;
    background-color: transparent;
    color: black;
    border: solid 2px black;
    font-weight: bold;
  }
  .see-all:hover {
    background-color: rgba(220, 220, 220, 0.398);
    color: #fff;
    border: solid 2px white;
  }
}

@media (max-width: 760px) {
  .r-image {
    height: 180px;
    object-fit: cover;
    width: 100%;

    background-size: contain;
  }

  .see-all {
    /* height: 38px;
    width: 91px; */
    position: relative;
    margin-top: -50px;
    left: -20px;
    background-color: transparent;
    color: black;
    border: solid 2px black;
    font-weight: bold;
  }
  .see-all:hover {
    background-color: rgba(220, 220, 220, 0.398);
    color: #fff;
    border: solid 2px white;
  }
}
</style>