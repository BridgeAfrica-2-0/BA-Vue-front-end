<template>
  <div>
    <div class="images">
      <div>
       <img
        src="@/assets/img/banner.jpg"
        class="img-fluid header-pic"
      />
      </div>
   
    </div>
    <div class="photo-btns">
      <b-button class="see" size="sm">See All</b-button>
    </div>
    <b-row class="mt-4">
      <b-col cols="8">
        <div>
          <b-avatar
              src="https://placekitten.com/400/300"
              class="owner-profile-image-profile float-left"
              badge-variant="primary"
              badge-offset="10px"
              size="80"
          >
          </b-avatar>
        </div>
        <div class="d-inline-block mt-4 ml-4 float-left">
          <h5 class="font-weight-bolder">User Name</h5>
          <p>@User Name Alias</p>
        </div>
      </b-col>
      <b-col cols="4">
        <p class="float-right">
          <b-button class="mr-1" variant="success">Promote</b-button>
          <b-button class="mr-1" variant="warning">Contact</b-button>
          <b-button variant="primary">Community</b-button>
        </p>
      </b-col>
    </b-row>
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
              <b-tab title="Community"><Community /></b-tab>
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
import Community from "./tabs/community";
import Networks from "./tabs/networks";

export default {
  name: "Home",
  components: {
    HomePage,
    About,
    Media,
    MarketPlace,
    Community,
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
.see{
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
