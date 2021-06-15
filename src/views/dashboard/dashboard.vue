<template>
  <div style="overflow-x:hidden">
    <navbar></navbar>
    <b-container fluid="xl" class="text-justify mt-3 order-sm-1">
      <b-row>
        <b-col md="3">
          <b-card title="" header-tag="header" footer-tag="footer">
            <template #header>
              <h6 class="mb-0 d-inline-block">Intro</h6>
              <span class="float-right btn m-0 p-0 mt-1 action-intro"
                ><b-icon icon="pencil-fill" variant="primary"></b-icon> Edit
                Profile</span
              >
            </template>
            <img
              src="https://dashboard.bridgeafrica.info/resources/images/profile-pic.jpg"
              class="info-image"
            />
            <b-card-text class="text-left text-size mt-2">
              <p>
                <b-icon icon="briefcase-fill" variant="primary"></b-icon> Work
                at: Current or Last Organization
              </p>
              <p>
                <b-icon icon="book-fill" variant="primary"></b-icon> Studied at:
                Last Education
              </p>
              <p>
                <b-icon icon="house-fill" variant="primary"></b-icon> Home Town
                Name:Dummy
              </p>
              <p>
                <b-icon icon="geo-alt-fill" variant="primary"></b-icon> Current
                City Name:Dummy
              </p>
              <p>
                <b-icon icon="people-fill" variant="primary"></b-icon> Followed
                by: 525
              </p>
            </b-card-text>
          </b-card>

          <b-card class="text-center mt-2 p-2">
            <div class="">
              <h6 class="font-weight-bolder">
                Invite friends on Bridge Africa
              </h6>
              <b-button variant="outline-primary" class="btn-block mt-2">
                <b-icon-plus></b-icon-plus> Invite</b-button
              >
            </div>
          </b-card>
        </b-col>
        <b-col md="6">
          <posts-dahboard></posts-dahboard>
        </b-col>
        <b-col md="3">
          <b-card class="text-center mt-2 p-2" v-if="!bussinessExist">
            <div class="">
              <h6 class="font-weight-bolder">Setup your business identity</h6>
              <p>
                Create your business profile so the people can search you, see
                your products, communicate with you and much more
              </p>
              <b-button variant="outline-primary" class="btn-block mt-2">
                Add Business</b-button
              >
            </div>
          </b-card>

          <b-card class="text-center mt-2 p-2" v-if="bussinessExist">
            <div class="">
              <b-form-select
                v-model="selected"
                :options="options"
              ></b-form-select>
              <b-row class="mt-2">
                <b-col cols="4" class="m-0 p-0 p-2">
                  <img
                    src="https://dashboard.bridgeafrica.info/resources/images/profile-pic.jpg"
                    class="img-left"
                  />
                </b-col>
                <b-col cols="8" class="m-0 p-0 my-auto">
                  <h6 class="text-blue font-weight-bolder m-0 p-1 ">
                    1.1 M Followers
                  </h6>
                  <p class="m-0 p-1">Category Name Here</p>
                  <p class="m-0 p-1">Current Plan: Basic</p>
                </b-col>
              </b-row>
              <b-row class="mt-2">
                <b-col cols="12" class="text-left text-size">
                  <p>
                    <b-icon icon="person-fill" variant="primary"></b-icon> view
                    Profile
                  </p>
                  <p>
                    <b-icon icon="chat-fill" variant="primary"></b-icon> Message
                    <span class="float-right badge badge-pill badge-success"
                      >3</span
                    >
                  </p>
                  <p>
                    <b-icon icon="bell-fill" variant="primary"></b-icon>
                    Notifications
                    <span class="float-right badge badge-pill badge-success"
                      >9+</span
                    >
                  </p>
                  <p>
                    <b-icon icon="globe2" variant="primary"></b-icon> Visite
                    Website
                  </p>
                  <p>
                    <b-icon icon="arrow-repeat" variant="primary"></b-icon>
                    Upgrade Plan
                  </p>
                </b-col>
              </b-row>
              <b-button variant="outline-primary" class="btn-block mt-2">
                Add Business</b-button
              >
            </div>
          </b-card>

          <br />

          <b-card title="" header-tag="header" footer-tag="footer">
            <template #header>
              <h6 class="mb-0 d-inline-block font-weight-bolder">
                Hot Businesses
              </h6>
              <span class="float-right btn m-0 p-0 mt-1 action-intro"
                ><b-icon-chevron-left
                  class="font-weight-bolder"
                ></b-icon-chevron-left>
                <b-icon-chevron-right
                  class="font-weight-bolder"
                ></b-icon-chevron-right>
              </span>
            </template>
            <img
              src="https://dashboard.bridgeafrica.info/resources/images/profile-pic.jpg"
              class="info-image"
            />
            <b-card-text class="text-left text-size mt-2">
              <h6 class="text-blue font-weight-bolder m-0 p-1 ">
                Business Name Here
              </h6>
              <p class="m-0 p-1">Business Category</p>
              <p class="m-0 p-1">1.1 M Followers</p>
              <p class="m-0 p-1">Neighborhood, City, Country</p>
              <p class="m-0 p-1">Keyword 1, Keyword 2, Keyword 3</p>
              <b-button variant="primary" class="mt-2" size="sm">
                Contact Us</b-button
              >
              <b-button variant="primary" class="mt-2 float-right" size="sm">
                Follow</b-button
              >
            </b-card-text>
          </b-card>
          <br />

          <b-card title="" header-tag="header" footer-tag="footer">
            <template #header>
              <h6 class="mb-0 d-inline-block font-weight-bolder">
                Popular Networks
              </h6>
              <span class="float-right btn m-0 p-0 mt-1 action-intro"
                ><b-icon-chevron-left
                  class="font-weight-bolder"
                ></b-icon-chevron-left>
                <b-icon-chevron-right
                  class="font-weight-bolder"
                ></b-icon-chevron-right>
              </span>
            </template>
            <img
              src="https://dashboard.bridgeafrica.info/resources/images/profile-pic.jpg"
              class="info-image"
            />
            <b-card-text class="text-left text-size mt-2">
              <h6 class="text-blue font-weight-bolder m-0 p-1 ">
                Network Name Here
              </h6>
              <p class="m-0 p-1">Business Name Here</p>
              <p class="m-0 p-1">1.1 M Members</p>
              <b-button variant="outline-primary" class="btn-block mt-2">
                Join</b-button
              >
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import PostsDahboard from "@/components/dasboard/postsDahboard";
import Footer from "@/components/footer";

export default {
  name: "dashboard",
  components: {
    PostsDahboard,
    Navbar,
    Footer
  },
  data() {
    return {
      bussinessExist: true,
      selected: null,
      options: [
        { value: null, text: "Bussiness Name Her" },
        { value: "a", text: "Action" },
        { value: "b", text: "Another Action" },
        { value: "c", text: "Someting else Here" }
      ]
    };
  }
};
</script>

<style scoped>
.action-intro {
  font-size: 0.8rem;
  font-family: Arial, sans-serif;
}
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0.5rem;
}
.text-size {
  font-size: 13px;
}
.info-image {
  vertical-align: middle;
  border-style: none;
  width: -moz-available;
  height: 227px;
}
.text-blue {
  color: dodgerblue;
}

.img-left {
  vertical-align: middle;
  border-style: none;
  width: inherit;
  height: inherit;
}
</style>
