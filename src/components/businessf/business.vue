<template>
  <div>
    <head-page-owner></head-page-owner>
    <div class="row">
      <b-container fluid="md" class="text-justify mt-2">
        <b-row>
          <b-col cols="12">
            <b-tabs content-class="mt-3" fill pills card>
              <b-tab title="Home"><HomePage /></b-tab>
              <b-tab title="About"><About /></b-tab>
              <b-tab title="Media"><Media /></b-tab>
              <b-tab title="Market"><MarketPlace /></b-tab>
              <b-tab title="Networks"><Networks /></b-tab>
              <b-tab title="Community"><Followers /></b-tab>
            </b-tabs>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import HomePage from "../businessf/tabs/businessHome";
import About from "./tabs/about";
import Media from "./tabs/media";
import MarketPlace from "./tabs/marketPlace";
import Followers from "./tabs/followers";
import Networks from "./tabs/networks";
import HeadPageOwner from "@/components/businessf/headPageOwner";

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
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
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
</style>
