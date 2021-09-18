<template>
  <div class="container">
    <!--
    <b-row>
      <b-col class="f-left">
        <h5 class=" d-inline-block">
          Pending Posts
        </h5>
      </b-col>
      <b-col class="f-right"> <span class="">35 Pending</span> </b-col>
    </b-row>


-->

    <b-row>
      <b-col cols="12" class="f-left">
        <div
          v-for="post in pendingPost"
          :key="post.id"
          :loading="load"
          class="mb-4"
        >
          <div class="mb-2">
            <div class="f-left">
              <b-row class="px-md-3">
                <b-col cols="2" md="1" class="m-0 p-0">
                  <b-avatar
                    class="d-inline-block mt-1"
                    variant="primary"
                    src="https://business.bridgeafrica.info/assets/img/team/3.png"
                    size="3.5rem"
                  ></b-avatar>
                </b-col>
                <b-col cols="10" md="11" class="pt-2">
                  <h6 class="m-0 font-weight-bolder">
                    {{ post.profileName }}
                    <span class="float-right">
                      <b-dropdown
                        size="lg"
                        variant="link"
                        toggle-class="text-decoration-none"
                        no-caret
                      >
                        <template #button-content>
                          <b-icon-three-dots-vertical></b-icon-three-dots-vertical
                          ><span class="sr-only">Settings</span>
                        </template>
                        <b-dropdown-item @click="approved" href="#">
                          Approved
                        </b-dropdown-item>
                        <b-dropdown-item @click="unapproved" href="#">
                          Unapproved
                        </b-dropdown-item>
                      </b-dropdown>
                    </span>
                  </h6>
                  <p>
                    {{ post.timeCountdown }} -
                    <span class="text-primary">Commented on a Post</span>
                  </p>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12" class="mt-2">
                  <p class="text-justify text">
                    {{ post.postContent }}
                  </p>
                </b-col>
              </b-row>
            </div>
          </div>

          <hr width="100%" />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "pendingPost",
  data: () => ({
    pendingPosts: [],
    profilePicture: "",
    profileName: "",
    postComment: "",
    timeCountdown: "",
    postContent: "",
    approved: "",
    unapproved: "",
    load: null,
  }),
  beforeMount() {
    this.getPendingPost();
  },
  methods: {
    getPendingPost() {
      this.load = true;
      axios
        .get()
        .then((res) => {
          this.pendingPosts = res.data.reverse();
          this.load = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    approved() {
      axios
        .post()
        .then((res) => {
          alert("success");
        })
        .catch((err) => {
          alert("error");
        });
    },

    unapproved() {
      axios
        .post()
        .then((res) => {
          alert("success");
        })
        .catch((err) => {
          alert("error");
        });
    },
  },
};
</script>

<style scoped>
.f-right {
  text-align: right;
}

.f-left {
  text-align: left;
}
</style>
