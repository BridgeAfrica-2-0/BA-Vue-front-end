<template>
  <div>
    <head-page-owner @goto-cover-images="gotoCoverImages"></head-page-owner>
    <div class="row">
      <div  class="text-justify mt-2 container-fluid" >
        <b-row class="center-content" >
          <b-col cols="12">
            <b-tabs lazy content-class="mt-3 mobile-tab"  v-model="currentTab"  fill pills >
              <b-tab :title="$t('general.Home')"><HomePage /></b-tab>
              <b-tab :title="$t('general.About')"><About /></b-tab>
              <b-tab :title="$t('general.Media')"><Media type="business" :showCoverAlbum="showCoverAlbum" :key="key"/></b-tab>
              <b-tab :title="$t('general.Market')"><MarketPlace /></b-tab>
              <b-tab :title="$t('general.Networks')"><Networks type="business" /></b-tab> 
              <b-tab :title="$t('general.Community')"><Followers /></b-tab>
            </b-tabs>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import HomePage from "./tabs/businessHome";   
import About from "@/components/businessOwner/tabs/about";
import Media from "@/components/owner/tabs/media";
import MarketPlace from "@/components/businessOwner/tabs/marketPlace";
import Followers from "@/components/businessOwner/tabs/memberNetwork";
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
      key:0,
      tabIndex: 0,
      showCoverAlbum:false,
      tabs: ["#post", "#about", "#media", "#market", "#community"],
    };
  },
 
  methods: {
    gotoCoverImages() {
      this.showCoverAlbum = true
      this.isCover = true;
      this.key = this.key + 1
      this.currentTab = 2;
    },
  },

  watch: {
    currentTab: (newVal, oldVal) => {
      if (2 != newVal){
        this.showCoverAlbum = false
        this.key = this.key - 1
      }
    },

    $route(to, from) {
        console.log(to.hash);
        this.currentTab = this.tabs.findIndex((tab) => tab === to.hash);
    },
  },
};
</script>


<style>

@media only screen and (max-width: 768px) {
  .mobile-tab .nav-fill > .nav-link, .nav-fill .nav-item {
    flex: 1 1 auto;
    text-align: center;
    width: 20px;
  }
}

</style>


<style scoped>

alig{

  padding-left:70px;
   padding-right:70px
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
