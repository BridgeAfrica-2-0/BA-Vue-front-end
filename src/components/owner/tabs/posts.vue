<template>
  <div>
    <b-row>
      <b-col md="3" class="p-0 m-0">
        <b-card title="" header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0 d-inline-block">Intro</h6>
            <span class="float-right btn m-0 p-0 action-intro"
              ><b-icon icon="pencil-fill" class="violet"></b-icon> Edit</span
            >
          </template>
          <b-card-text class="text-left">
            <p>
              <b-icon icon="briefcase-fill" class="violet"></b-icon> Work at:
              Current or Last Organization
            </p>
            <p>
              <b-icon icon="book-fill" class="violet"></b-icon> Studied at: Last
              Education
            </p>
            <p>
              <b-icon icon="house-fill" class="violet"></b-icon> Home Town
              Name:Dummy
            </p>
            <p>
              <b-icon icon="geo-alt-fill" class="violet"></b-icon> Current City
              Name:Dummy
            </p>
            <p>
              <b-icon icon="people-fill" class="violet"></b-icon> Followed by:
              525
            </p>
          </b-card-text>
        </b-card>

        <b-card class="mt-4" header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0 d-inline-block">Followers</h6>
            <b-avatar-group size="20px" class="float-right">
              <b-avatar></b-avatar>
              <b-avatar text="BV" variant="primary"></b-avatar>
              <b-avatar
                src="https://placekitten.com/300/300"
                variant="info"
              ></b-avatar>
              <b-avatar text="OK" variant="danger"></b-avatar>
              <b-avatar variant="warning"></b-avatar>
            </b-avatar-group>
          </template>
          <b-card-text>
            <b-list-group-item class="d-flex align-items-center m-0 p-2">
              <b-avatar
                variant="info"
                src="https://placekitten.com/300/300"
                class="mr-3"
              ></b-avatar>
              <span class="mr-auto font-weight-bolder">Username</span>
              <b-button variant="outline-primary" size="sm"
                ><b-icon icon="person-plus-fill" variant="primary"></b-icon>
                Follow</b-button
              >
            </b-list-group-item>
            <b-list-group-item class="d-flex align-items-center m-0 p-2">
              <b-avatar
                variant="info"
                src="https://placekitten.com/300/300"
                class="mr-3"
              ></b-avatar>
              <span class="mr-auto font-weight-bolder">Username</span>
              <b-button variant="outline-primary" size="sm"
                ><b-icon icon="person-plus-fill" variant="primary"></b-icon>
                Follow</b-button
              >
            </b-list-group-item>
            <b-list-group-item class="d-flex align-items-center m-0 p-2">
              <b-avatar
                variant="info"
                src="https://placekitten.com/300/300"
                class="mr-3"
              ></b-avatar>
              <span class="mr-auto font-weight-bolder">Username</span>
              <b-button variant="outline-primary" size="sm"
                ><b-icon icon="person-plus-fill" variant="primary"></b-icon>
                Follow</b-button
              >
            </b-list-group-item>
          </b-card-text>
          <template #footer>
            <span class="float-right"> <a href="#">See More</a> </span>
          </template>
        </b-card>

        <b-card class="mt-4" header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0 d-inline-block">Media</h6>
            <span class="float-right"
              ><b-icon icon="eye-fill" class="violet"></b-icon> See All</span
            >
          </template>
          <b-card-text>
            <b-row>
              <b-col cols="6" v-for="i in 4" :key="i" class="p-1">
                <img
                  class="mb-2 img-fluid"
                  src="@/assets/img/m2.jpg"
                  alt="Fluid image"
                />
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      <b-col md="4">
       <Intro/>
       <Followers/>
       <Media/>
      </b-col>
      <b-col md="8">
       <CreatePost/>
       <Post/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Intro from "../../intro";
import Followers from "../../followers";
import Media from "../../media";
import CreatePost from "../../createPost";
import Post from "../../post"
export default {
  name: "posts",
  components :{
    Intro,
    Followers,
    Media,
    CreatePost,
    Post
  }
};
</script>

<style scoped></style>
