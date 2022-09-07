<template>
  <div> 
    <head-page-owner @goto-cover-images="gotoCoverImages"></head-page-owner>
    <div class="row">
      <div class="text-justify mt-2 container-fluid wahala">
        <b-row class="center-content">
          <b-col cols="12">
            <b-tabs
              lazy
              content-class="mt-3 mobile-tab"
              fill
              pills
              v-model="currentTab"
            >
              <b-tab :title="$t('businessowner.Home')"
                ><HomePage @pageChange="pageChange"
              /></b-tab>
              <b-tab :title="$t('businessowner.About')"><About /></b-tab>
              <b-tab :title="$t('businessowner.Media')"
                ><Media type="business" class="p-3"
              /></b-tab>
              <b-tab :title="$t('businessowner.Market')"><MarketPlace /></b-tab>
              <b-tab :title="$t('profileowner.Networks')">
                <Networks type="business" />
              </b-tab>
              <b-tab :title="$t('businessowner.Community')"
                ><Followers
              /></b-tab>
            </b-tabs>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import HomePage from "../businessOwner/tabs/businessHome";
import About from "./tabs/about";
import Media from "@/components/owner/tabs/media";
import MarketPlace from "./tabs/marketPlace";
import Followers from "./tabs/memberNetwork";
import Networks from "@/components/owner/tabs/networks";
import HeadPageOwner from "@/components/businessOwner/headPageOwner";
export default {
  name: "Home",
  components: {
    HeadPageOwner,
    HomePage,
    About,
    Media,
    MarketPlace,
    Followers,
    Networks
  },

  data() {
    return {
      currentTab: 0,
      tabIndex: null,
      isCover: false,
      tabs: ["#post", "#about", "#media", "#market", "#network", "#community"],
    };
  },

  methods: {
    gotoCoverImages() {
      console.log("parent cover method");
      this.isCover = true;
      this.key = this.key + 1
      this.currentTab = 2;
    },
    pageChange() {
      console.log("business pageChange");
      this.$emit("pageChange");
    },
  },
  
  watch: {
    currentTab: (newVal, oldVal) => {
      localStorage.setItem("ba-business-active-tab", newVal);
      if (2 != newVal){
        this.showCoverAlbum = false
        this.key = this.key - 1
      }
    },

    $route(to, from) {
      this.currentTab = this.tabs.findIndex((tab) => tab === to.hash);
    },
  },
};
</script>

<style>
@media only screen and (max-width: 768px) {
  .mobile-tab .nav-fill > .nav-link,
  .nav-fill .nav-item {
    flex: 1 1 auto;
    text-align: center;
   
  }
}
</style>

<style scoped>
alig {
  padding-left: 70px;
  padding-right: 70px;
}
.images {
  display: flex;
  width: 100%;
}

img {
  width: 100%;
}

.btns {
  position: relative;
  left: 75%;
}

.photo-btns {
  margin-left: 80%;
  margin-top: -50px;
}
.cnt-btn {
  color: white;
}
@media only screen and (max-width: 768px) {
  .btns {
    position: relative;
    left: 25%;
  }
  .photo-btns {
    margin-left: 50%;
    margin-top: 10px;
  }
}

@media only screen and (min-width: 768px) {
  .center-content {
    padding-right: 63px;

    padding-left: 63px;
  }
}
</style>
