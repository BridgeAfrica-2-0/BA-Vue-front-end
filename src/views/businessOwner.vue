<template>
  <div class="" style="overflow-x: clip; padding: 0px" ref="wrapper"> 
    <navbar />
    <head-page></head-page>
    <BusinessCover />
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import headPage from "@/components/ownerHeadpage";
import BusinessCover from "../components/site/business-cover.vue";
import Business from "../components/businessOwner/business";
import Settings from "../components/businessOwner/settings";
import Inbox from "../components/businessOwner/inbox";
import LyTab from "@/tab/src/index.vue";
// import Footer from "../components/footer";
import { WhoIsIt } from "@/mixins";
import axios from "axios";
import { isPremium } from '@/helpers';
import Skeleton from "@/components/businessPageSkeleton";
export default {
  name: "Home",
  mixins: [WhoIsIt],
  components: {
    navbar,
    headPage,
    BusinessCover,
  },

};
</script>

<style scoped>
.mar-left {
  margin-left: 25px;
}
.tabs {
  width: 100%;
}
.settings {
  margin-left: 90%;
  position: relative;
  top: 40px;
}
.a-left {
  align-content: left;
}
.nav-text {
  cursor: pointer;
}
.tab-title-class {
  color: #ffffff !important;
}
@media only screen and (max-width: 768px) {
  .settings {
    top: -5px;
    left: -20px;
  }
}
</style>

<style>
.business-owner-tab .nav-link {
  display: block;
  padding: 0.5rem 1rem;
  padding-top: 1px;
  padding-bottom: 1px;
  padding: 1px;
  padding-right: 1px;
  padding-left: 1px;
  text-align: center;
  padding-left: 10px;
  padding-right: 20px;
  border: 1px solid gray;
}
@media only screen and (max-width: 768px) {
  .business-owner-tab .nav-pills .nav-link {
    border-radius: 0.25rem;
    font-size: 10px;
    margin-left: -8px;
    padding-left: 0px;
    padding-right: 0px;
  }
}

.center-ly {
  margin-top: -25px;
}
.hrr {
  margin-top: 0px;
}
</style>