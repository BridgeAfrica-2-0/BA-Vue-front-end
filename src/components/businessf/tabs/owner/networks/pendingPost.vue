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
          v-for="post in allPendingPost"
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
                    :src="post.profile_picture"
                    size="3.5rem"
                  ></b-avatar>
                </b-col>
                <b-col cols="10" md="11" class="pt-2">
                  <h6 class="m-0 font-weight-bolder">
                    {{ post.name }}
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
                        <b-dropdown-item
                          @click="approved(post.id)"
                          :loading="load"
                        >
                          Approved
                        </b-dropdown-item>
                        <b-dropdown-item
                          @click="unapproved(post.id)"
                          :loading="load"
                        >
                          Unapproved
                        </b-dropdown-item>
                      </b-dropdown>
                    </span>
                  </h6>
                  <p>
                    {{ post.created_at }} -
                    <span class="text-primary">{{ post.comment }}</span>
                  </p>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12" class="mt-2">
                  <p class="text-justify text">
                    {{ post.content }}
                  </p>
                </b-col>
              </b-row>
            </div>
          </div>

          <hr width="100%" />
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p class="text-center" v-if="allPendingPost < 1">
          No Pending Posts To Show
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "pendingPost",
  data: () => ({
    load: null,
  }),
  beforeMount() {
    this.getPendingPost();
  },
  computed: {
    ...mapGetters({
      allPendingPost: "networkSetting/allPendingPost",
    }),
  },
  methods: {
    ...mapActions({
      getPendingPost: "networkSetting/getPendingPost",
      approvedPost: "networkSetting/approvedPost",
      unapprovedPost: "networkSetting/unapprovedPost",
    }),
    approved(id) {
      this.load = true;
      this.approvedPost(id)
        .then(() => {
          this.load = false;
        })
        .catch((err) => {
          this.load = true;
          console.log(err);
        });
    },

    unapproved(id) {
      this.load = true;
      this.unapprovedPost(id)
        .then(() => {
          this.load = false;
        })
        .catch((err) => {
          this.load = true;
          console.log(err);
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
