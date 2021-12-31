<template>
  <div>
    <div class="images">
      <div>
        <img src="@/assets/img/banner.jpg" class="img-fluid header-pic" />
      </div>
    </div>
    <div class="photo-btns">
      <b-button class="see" size="sm">See All</b-button>
    </div>
    <b-row class="mt-4 options">
      <b-col cols="6">
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
        <div class="d-inline-block ml-4 float-left">
          <h5 class="font-weight-bolder name">User Name</h5>
          <p>
            website <br />
            1.5k Community
          </p>
        </div>
      </b-col>
      <b-col cols="6">
        <p class="float-right">
          <b-button size="sm">
            <b-icon icon="check" variant="grey"></b-icon> Following</b-button
          >
          <b-dropdown
            id="dropdown-1"
            text="Contact"
            class="m-md-2 drop"
            size="sm"
          >
            <b-dropdown-item>
              <b-icon icon="chat-fill" variant="primary"></b-icon>
              Message</b-dropdown-item
            >
            <b-dropdown-item>
              <b-icon icon="geo-alt" variant="primary"></b-icon> Get
              Direction</b-dropdown-item
            >
          </b-dropdown>
          <b-dropdown size="sm">
            <template #button-content>
              <b-icon icon="three-dots" aria-hidden="true"></b-icon>
            </template>
            <b-dropdown-item> Report</b-dropdown-item>
          </b-dropdown>
        </p>
      </b-col>
    </b-row>
    <div class="mobile">
      <b-row>
        <b-col>
          <div>
            <b-avatar
              src="https://placekitten.com/400/300"
              class="owner-profile-image-profile float-left avat"
              badge-variant="primary"
              badge-offset="10px"
              size="70"
            >
            </b-avatar>
          </div>
          <div class="d-inline-block mt-4 ml-4 float-left texts">
            <h6 class="font-weight-bolder name">User Name</h6>
            <p class="details">
              website <br />
              1.5k Community
            </p>
          </div>
        </b-col>
        <b-col cols="3">
          <div class="more">
            <b-dropdown size="sm" variant="outline">
              <template #button-content>
                <b-icon icon="three-dots" aria-hidden="true"></b-icon>
              </template>
              <b-dropdown-item>
                <b-icon icon="house-fill" variant="primary"></b-icon> Get
                Direction</b-dropdown-item
              >
              <b-dropdown-item>
                <b-icon icon="chat" variant="primary"></b-icon>
                Message</b-dropdown-item
              >
              <b-dropdown-item>
                <b-icon icon="plus" variant="primary"></b-icon>
                Community</b-dropdown-item
              >
            </b-dropdown>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="row">
      <b-container fluid="md" class="text-justify mt-2">
        <b-row>
          <b-col cols="12">
            <b-tabs content-class="mt-3" fill pills card>
              <b-tab :title="$t('general.Home')"><HomePage /></b-tab>
              <b-tab :title="$t('general.About')"><About /></b-tab>
              <b-tab :title="$t('general.Media')"><Media /></b-tab>
              <b-tab :title="$t('general.Market')"><MarketPlace /></b-tab>
              <b-tab :title="$t('general.Networks')"><Networks /></b-tab>
              <b-tab :title="$t('general.Community')"><Community /></b-tab>
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
