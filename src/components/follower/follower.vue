<template>
  <div class="main">
    <div class="images">
      <div>
        <img src="@/assets/img/banner.jpg" class="banner" />
      </div>
      <b-row class="mt-2 mb-2 options">
        <b-col cols="6" class="avata">
          <div>
            <b-avatar
              src="https://placekitten.com/400/300"
              class=" float-left avatar"
              badge-variant="primary"
              badge-offset="10px"
              variant="white"
            >
            </b-avatar>
          </div>
          <div class="d-inline-block ml-4 float-left mt-4">
            <h5 class="font-weight-bolder name">User Name</h5>
            <p>
              <br />
              <span class="k15"> 1.5k </span> Community
            </p>
          </div>
        </b-col>
        <b-col cols="12">
          <div class="btns">
            <b-button class="community size">
              <i class="fas fa-user-plus  fa-lg btn-icon m-fa "></i>
              <span class="txt-btn">Community</span></b-button
            >
            <b-button class="message size ml-1">
              <i class="fas fa-envelope fa-lg btn-icon "></i>
              <span class="txt-btn">Message</span></b-button
            >

            <b-dropdown
              size="sm"
              class="ml-2 dropdown"
              no-caret
              variant="outline-primary"
            >
              <template #button-content>
                <b-icon-three-dots></b-icon-three-dots>
              </template>
              <b-dropdown-item>
                <b-icon icon="flag" variant="primary"></b-icon>
                Report</b-dropdown-item
              >
            </b-dropdown>
          </div>
        </b-col>
      </b-row>
    </div>

    <div class="mobile">
      <b-row class="mob-head">
        <b-col>
          <div>
            <b-avatar
              src="https://placekitten.com/400/300"
              class=" float-left avatar"
              badge-variant="primary"
              badge-offset="10px"
            >
            </b-avatar>
          </div>
          <div class="d-inline-block mt-4 ml-4 float-left texts">
            <h6 class="font-weight-bolder name ">User Name</h6>
            <p class="details">
              www.bridgeafrica.com <br />
              1.5k Community
            </p>
          </div>
        </b-col>
        <b-col cols="2">
          <b-button class="m-community size" size="sm">
            <i class="fas fa-map-marked-alt fa-lg btn-icon "></i>

            <span class="txt-btn">Direction</span></b-button
          >
        </b-col>
      </b-row>
    </div>
    <div class="m-btn mobile mb-2">
      <b-button class="m-msg size" size="sm">
        <i class="fas fa-envelope fa-lg btn-icon "></i>
        <span class="txt-btn">Message</span>
      </b-button>

      <b-button class="direction ml-1 size" size="sm">
        <i class="fas fa-user-plus  fa-lg btn-icon "></i>
        <span class="txt-btn">Community</span></b-button
      >

      <b-dropdown
        class="ml-1 dropdown"
        no-caret
        variant="outline-primary"
        size="sm"
      >
        <template #button-content>
          <b-icon icon="three-dots" aria-hidden="true"></b-icon>
        </template>
        <b-dropdown-item>
          <b-icon icon="flag" variant="primary"></b-icon>
          Report</b-dropdown-item
        >
      </b-dropdown>
    </div>

    <div class="body p-0">
      <b-row>
        <b-col cols="12" class="p-0" >
          <b-tabs content-class="mt-3" fill pills>
            <b-tab title="Posts" active>
              <Post />
            </b-tab>
            <b-tab title="About"><About /></b-tab>
            <b-tab title="Business"><Businesses /></b-tab>
            <b-tab title="Media"><Media /></b-tab>
            <b-tab title="Community"><Community /></b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Post from "@/components/follower/tabs/posts";
import About from "@/components/follower/tabs/about";
import Media from "@/components/follower/tabs/media";
import Community from "@/components/follower/tabs/community";
import Businesses from "@/components/follower/tabs/businesses";

export default {
  name: "Home",
  components: {
    Post,
    About,
    Media,
    Community,
    Businesses,
  },
};
</script>

<style scoped>
.body {
  margin-left: 63px;
  margin-right: 63px;
  margin-top: 20px;
}

.btns {
  margin-left: 670px;
  margin-top: -80px;
}

.options {
  display: grid;
  position: relative;
  width: 100%;
  top: -8px;
}
.bbavater {
  margin-top: 5px;
}
.nav-link {
  background-color: #e75c18;
}
.main {
  width: 100%;
  overflow-x: none;
}
.images {
  display: grid;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #eee;
}
.banner {
  width: 100%;
  height: 348px;
}
.m-fa {
  margin-top: 5px;
}
.k15 {
  font-size: 14px;
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
.mobile {
  display: none;
}
.btns {
  display: flex;
  float: right;
}
.m-community:active {
  background-color: #fff;
  outline-color: #fff;
}
.m-community {
  background-color: #e75d29;
  border: none;
}
.m-community:hover {
  background-color: #cc3b07;
}
.yellow {
  background-color: #ffd200;
  border-style: none;
}

.orange {
  background-color: #e75c18;
  border-style: none;
}

.cnt-btn {
  color: white;
}

.below-head {
  width: 80%;
}

.mobile {
  display: none;
}
.txt {
  color: #fff;
}
.avatar {
  height: 102px;
  width: 102px;
}
.name {
  position: relative;
  top: 14px;
  font-family: "Open Sans Helvetica";
  font-size: 20px;
}
p {
  font-family: "Open sans Helvetica";
  font-size: 14px;
}
.community {
  color: #fff;
  background-color: #e4c229;
  border: none;
  border-radius: none;
  display: flex;
}

.btn-icon {
  color: #fff;
}
.message:hover,
.message:focus {
  background-color: #006400;
}
.community:hover {
  background-color: #b39500;
}

.size {
  width: 133px;
  height: 38px;
}
.message {
  color: #fff !important;
  background-color: #32a400;
  border: none;
  border-radius: none;
}
p,
.name {
  font-family: "Open sans Helvetica";
  font-size: 16px;
}
.txt-btn {
  margin-left: 10px;
  font-family: "Open Sans Helvetica";
  font-size: 16px;
  color: #fff;
}
.avata {
  margin-left: 30px;
  margin-top: 8px;
}

@media only screen and (max-width: 768px) {
  .m-community {
    position: relative;
    left: -75px;
    top: 40px;
  }
  .body {
    margin: 1px;
  }
  .size {
    width: 100px;
    height: 28px;
  }
  .banner {
    width: 100%;
    height: 180px;
  }
  p,
  .name {
    font-family: "Open Sans" "Helvetica";
    font-size: 20px;
    position: relative;
    top: -1px;
  }
  .m-msg {
    color: #fff !important;
    background-color: #32a400;
    border: none;
    border-radius: none;
  }
  .direction {
    color: #fff;
    background-color: #e4c229;
    border: none;
    border-radius: none;
  }
  .m-msg:hover,
  .m-msg:focus {
    background-color: #006400;
  }
  .direction:hover {
    background-color: #ffdb58;
  }
  .avatar {
    height: 64px;
    width: 64px;
    margin-top: 15px;
  }
  .profile {
    width: 100%;
    margin-left: 0;
  }
  .mobile {
    display: block;
  }
  .m-btn {
    display: flex;
    margin-left: 15px;
    margin-top: 5px;
  }
  .options {
    display: none;
  }
  .avat {
    margin-top: 20px;
  }
  .details {
    font-size: 12px;
  }
  .texts {
    position: relative;
    left: -15px;
  }
  .mob-head {
    background-color: #eee;
  }
  .more {
    position: relative;
    top: 20px;
    left: -100px;
  }

  .photo-btns {
    display: none;
  }

  .m-btn {
    margin-left: 0px;
  }
  .txt-btn {
    margin-left: 2px;
    font-size: 12px;
  }
}
</style>
