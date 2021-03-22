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
              <b-tab title="Market Place"><MarketPlace /></b-tab>
              <b-tab title="Networks"><Networks /></b-tab>
              <b-tab title="Followers"><Followers /></b-tab>
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
.see {
  margin-left: 120px;
  background-color: #fff;
  color: black;
  border: none;
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
.mobile {
  display: none;
}
.txt {
  color: #fff;
}
.name {
  position: relative;
  top: 11px;
}
@media only screen and (max-width: 768px) {
  .mobile {
    display: block;
  }
  .options {
    display: none;
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
  }
  .more {
    position: relative;
    top: 20px;
    left: -100px;
  }

  .photo-btns {
    position: relative;
    left: -100px;
    top: 60px;
  }
}
</style>
