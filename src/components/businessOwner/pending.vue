<template>
  <div>
    <b-container fluid style="padding-left:30px; padding-right:30px">
      <b-container
        class="bb-bottom"
        v-for="(post, index) in pendingPosts"
        :key="index"
      >
        <b-list class="d-flex align-items-center m-list">
          <b-avatar class="mr-3 profile-pic"></b-avatar>
          <span class="mr-auto username">
            {{ post.name }}
            <p class="duration">{{ post.time }}</p>
          </span>
          <span class=" ">
            <div>
              <b-dropdown
                size="lg"
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template #button-content>
                  <b-icon icon="three-dots-vertical" font-scale="1"></b-icon>
                </template>
                <b-dropdown-item href="#" @click="approvePendingPosts(post)">
                  Approve</b-dropdown-item
                >
                <b-dropdown-item href="#" @click="unApprovePendingPosts(post)">
                  Un Approved
                </b-dropdown-item>
              </b-dropdown>
            </div>
          </span>
        </b-list>
        <p class="text">
          {{ post.text }}
        </p>
      </b-container>

      <b-col v-if="loader" class="loader">
        <b-spinner
          style="width: 7rem; height: 7rem;"
          variant="primary"
        ></b-spinner>
      </b-col>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "pending",
  components: {},
  data() {
    return {};
  },
  computed: {
    pendingPosts() {
      return this.sendPendingPosts();
    },
    loader() {
      return this.getLoader();
    },
  },
  beforeMount() {
    this.getPendingPosts();
  },
  methods: {
    ...mapGetters({
      sendPendingPosts: "businessOwner/sendPendingPosts",
      getLoader: "businessOwner/getLoader",
    }),
    // Getting the actions
    ...mapActions({
      getPendingPosts: "businessOwner/getPendingPosts",
      approvePendingPosts: "businessOwner/approvePendingPosts",
      unApprovePendingPosts: "businessOwner/unApprovePendingPosts",
    }),
  },
};
</script>

<style scoped>
.f-right {
  float: right;
}

.b-bottom {
  border-bottom: 1px solid;
}

.bb-bottom {
  border-bottom: 0.5px solid;
  border-color: aqua;
  margin-bottom: 7px;
  margin-top: 5px;
}
</style>
