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
          <h5 class="font-weight-bolder">User Name</h5>
          <p>
            website <br />
            1.5k Community
          </p>
        </div>
      </b-col>
      <b-col cols="6">
        <p class="float-right">
          <b-button class="mr-1" variant="success">
            <b-icon icon="house-fill" variant="white"></b-icon>
            Get Direction</b-button
          >
          <b-button class="mr-1 txt" variant="warning">
            <b-icon icon="chat-fill" variant="white"></b-icon>
            Message</b-button
          >
          <b-button variant="primary">+ Community</b-button>
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
            <h6 class="font-weight-bolder ">User Name</h6>
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
                <b-icon icon="chat-fill" variant="primary"></b-icon>
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

    <b-container fluid="md" class="text-justify mx-auto mt-4 corps">
      <b-row>
        <b-col cols="12">
          <b-tabs content-class="mt-3" fill pills card>
            <b-tab title="Posts" active>
              <Post />
            </b-tab>
            <b-tab title="About"><About /></b-tab>
            <b-tab title="Business"><Businesses /></b-tab>
            <b-tab title="Media"><Media /></b-tab>
            <b-tab title="Following"><Following /></b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Post from "@/components/follower/tabs/posts";
import About from "@/components/follower/tabs/about";
import Media from "@/components/follower/tabs/media";
import Following from "@/components/follower/tabs/following";
import Businesses from "@/components/follower/tabs/businesses";

export default {
  name: "Home",
  components: {
    Post,
    About,
    Media,
    Following,
    Businesses,
  },
};
</script>

<style scoped>
.nav-link {
  background-color: #e75c18;
}
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

.below-head {
  width: 80%;
}

.mobile {
  display: none;
}
.txt{
  color: #fff;
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
