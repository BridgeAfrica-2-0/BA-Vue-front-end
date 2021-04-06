<template>
  <div>
    <div class="images">
      <div>
        <img src="@/assets/img/banner.jpg" class="img-fluid header-pic ml-3" />
      </div>
    </div>






    <b-row class="mt-6 options">
      <b-col cols="6">
        <div>
          <b-avatar
            src="https://placekitten.com/400/300"
            class="owner-profile-image-profile bbavater float-left ml-5"
            badge-variant="primary"
            badge-offset="10px"
            size="80"
          >
          </b-avatar>
        </div>
        <div class="d-inline-block ml-4 float-left">
          <h5 class="font-weight-bolder name">User Name</h5>
          <p>
            <br />
            1.5k Community
          </p>
        </div>
      </b-col>
      <b-col cols="6">
        <p class="float-right mr-5">

          <b-button size="" class="orange m-2">
            <b-icon icon="plus"></b-icon> Community </b-button
          >


           <b-button size="" class="yellow m-2">
           <b-icon icon="chat-fill" ></b-icon> Message </b-button
          >



         



          <b-dropdown size="" class="orange">
            <template #button-content>
              <b-icon icon="three-dots" aria-hidden="true"></b-icon>
            </template>
            <b-dropdown-item><b-icon icon="flag" ></b-icon> Report</b-dropdown-item>
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
              class=" float-left avat"
              badge-variant="primary"
              badge-offset="10px"
              size="70"
            >
            </b-avatar>
          </div>
          <div class="d-inline-block mt-4 ml-4 float-left texts">
            <h6 class="font-weight-bolder ">User Name</h6>
            <p class="details">
              www.bridgeafrica.com <br />
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
                <b-icon icon="geo-alt" variant="primary"></b-icon> Get
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

    <div fluid="md" class="profile">
      <b-row>
        <b-col cols="12">
          <b-tabs content-class="mt-3" fill pills >
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

.bbavater{
  margin-top: 5px;
}
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

.yellow{

  background-color: #ffd200;
  border-style: none;
}

.orange{
   background-color: #e75c18;
  
   border-style: none;
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
.txt {
  color: #fff;
}

.name {
  position: relative;
  top: 11px;
}
.profile {
  width: 90%;
  margin-left: 100px;
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
