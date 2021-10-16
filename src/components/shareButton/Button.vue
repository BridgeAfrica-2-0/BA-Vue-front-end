<template>
  <div>
    <!--
    <b-button v-b-modal.modal-1>share peaple</b-button>
    <b-button v-b-modal.modal-2>share netword</b-button>
    <b-button v-b-modal.modal-3>share business</b-button>
    <b-button v-b-modal.modal-4>post</b-button> -->

    <Box
      id="modal-1"
      title="Share to people"
      placeholder="Search for people..."
      subtitle="All peoples"
      :type="type"
      :post="post"
    />

    <Box
      id="modal-2"
      title="Share to network"
      placeholder="Search for network..."
      subtitle="All networks"
      :type="type"
      :post="post"
    >
      <template v-slot:owner>
        <div class="d-flex align-items-center py-3 px-2 mb-2 border">
          <b-avatar class="mr-3"></b-avatar>
          <p>
            <span class="mr-auto">Share as</span><br />
            <span class="mr-auto">J. Circlehead</span>
          </p>
        </div>
      </template>
    </Box>

    <Box
      id="modal-5"
      title="Send Inbox"
      placeholder="Search for network..."
      subtitle="All networks"
      :type="type"
      :post="post"
    >
      <template v-slot:owner>
        <div class="d-flex flex-direction py-3 px-2 mb-2 border">
          <div class="d-flex align-items-center py-3 px-2 mb-2">
            <b-avatar class="mr-3"></b-avatar>
            <p>
              <span class="mr-auto">Share as</span><br />
              <span class="mr-auto">2h</span>
            </p>
          </div>
          <div class="d-flex align-items-center py-3 px-2 mb-2">
            <p>
              Le lorem ipsum est, en imprimerie, une provisoire pour calibrer
              une mise en page, le texte définitif venant remplacer le
              faux-texte dès qu'il est prêt ou que la mise en page est achevée.
              Généralement, on utilise un texte en faux latin, le Lorem ipsum ou
              Lipsum.
            </p>
          </div>
        </div>
      </template>
    </Box>

    <Box
      id="modal-3"
      title="Share business"
      placeholder="Search for business..."
      subtitle="All business"
      :type="type"
      :post="post"
    >
      <template v-slot:owner>
        <div class="d-flex align-items-center py-3 px-2 mb-2 border">
          <b-avatar class="mr-3"></b-avatar>
          <p>
            <span class="mr-auto">Share as</span><br />
            <span class="mr-auto">J. Circlehead</span>
          </p>
        </div>
      </template>
    </Box>

    <Post id="modal-4" />

    <b-dropdown
      size="lg"
      variant="link"
      toggle-class="text-decoration-none"
      no-caret
      position="bottom"
    >
      <template #button-content>
        <b-icon-reply-fill class="col-bg text-ored"></b-icon-reply-fill>
      </template>

      <b-dropdown-text class="box-title"> Share </b-dropdown-text>

      <b-dropdown-item
        class="d-flex py-2 cursor-pointer"
        @click="shareToYourProfile"
      >
        <span class="text-ored">
          <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
        </span>
        <div class="d-flex flex-column ml-1">
          <span>Share to your Profile</span>
        </div>
      </b-dropdown-item>

      <b-dropdown-item class="d-flex py-2 cursor-pointer" v-b-modal.modal-4>
        <span class="text-ored">
          <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
        </span>
        <div class="d-flex flex-column ml-1">
          <span>Share to News Feed</span>
        </div>
      </b-dropdown-item>

      <b-dropdown-item
        v-if="'network' !== type"
        class="d-flex py-2 cursor-pointer"
        v-b-modal.modal-2
      >
        <span class="text-ored">
          <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
        </span>
        <div class="d-flex flex-column ml-1">
          <span>Share to Network</span>
        </div>
      </b-dropdown-item>

      <b-dropdown-item
        v-if="'business' !== type"
        class="d-flex py-2 cursor-pointer"
        v-b-modal.modal-3
      >
        <span class="text-ored">
          <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
        </span>
        <div class="d-flex flex-column ml-1">
          <span>Share to Business</span>
        </div>
      </b-dropdown-item>

      <b-dropdown-item
        class="d-flex py-2 cursor-pointer"
        id="sharing-community"
        data-toggle="popover"
        role="button"
        data-original-title=""
      >
        <span class="text-ored">
          <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
        </span>
        <div class="d-flex flex-column ml-1">
          <span>Share to commnunity</span>
        </div>
      </b-dropdown-item>

      <b-popover target="sharing-community" triggers="hover">
        <div class="popover-body">
          <div
            @mousedown="open('modal-1')"
            class="d-inline-flex flex-row align-items-center suggest-item py-2 cursor-pointer"
          >
            <span class="text-ored">
              <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
            </span>
            <div class="d-flex flex-column ml-3">
              <span>Share to People</span>
            </div>
          </div>

          <div
            v-if="'network' !== type"
            @mousedown="open('modal-5')"
            class="d-inline-flex flex-row align-items-center suggest-item py-2 cursor-pointer"
          >
            <span class="text-ored">
              <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
            </span>
            <div class="d-flex flex-column ml-3">
              <span>Share to Network</span>
            </div>
          </div>

          <div
            v-if="'business' !== type"
            @mousedown="open('modal-5')"
            class="d-inline-flex flex-row align-items-center suggest-item py-2 cursor-pointer"
          >
            <span class="text-ored">
              <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
            </span>
            <div class="d-flex flex-column ml-3">
              <span>Share to Business</span>
            </div>
          </div>
        </div>
      </b-popover>

      <b-dropdown-item class="d-flex py-2 cursor-pointer">
        <span class="text-ored">
          <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
        </span>
        <div class="d-flex flex-column ml-1">
          <span>Copy link</span>
        </div>
      </b-dropdown-item>

      <b-dropdown-item
        class="d-flex py-2 cursor-pointer"
        id="sharing-via"
        data-toggle="popover"
        role="button"
        data-original-title=""
      >
        <span class="text-ored">
          <b-icon-share-fill class="col-bg"></b-icon-share-fill>
        </span>
        <div class="d-flex flex-column ml-1">
          <span>Share via</span>
        </div>
      </b-dropdown-item>
      <b-popover target="sharing-via" triggers="hover" placement="left">
        <div class="popover-body">
          <div
            class="d-inline-flex flex-row align-items-center suggest-item py-2 cursor-pointer"
          >
            <span class="text-ored">
              <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
            </span>
            <div class="d-flex flex-column ml-3">
              <span>Share to your profile</span>
            </div>
          </div>

          <div
            class="d-inline-flex flex-row align-items-center suggest-item py-2 cursor-pointer"
          >
            <span class="text-ored">
              <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
            </span>
            <div class="d-flex flex-column ml-3">
              <span>Share to network</span>
            </div>
          </div>

          <div
            class="d-inline-flex flex-row align-items-center suggest-item py-2 cursor-pointer"
          >
            <span class="text-ored">
              <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
            </span>
            <div class="d-flex flex-column ml-3">
              <span>Share to your business</span>
            </div>
          </div>
        </div>
      </b-popover>
    </b-dropdown>
  </div>
</template>

<script>
import Box from "./Box";
import Post from "./SharePost";

export default {
  name: "ShareButton",
  props: {
    post: {
      type: Object,
    },
    type: {
      type: String,
      validator: function (value) {
        if (["network", "business", "profile"].includes(value)) return true;
      },
    },
  },
  components: {
    Box,
    Post,
  },

  methods: {
    open(id) {
      this.$bvModal.show(id);
    },

    shareToYourProfile: async function () {
      let data = {
        [this.type]: "",
        post_id: this.post.id,
        source_id: this.post.source_id,
      };

      if ("profile" !== this.type)
        data = Object.assign(data, { target_id: this.post.target_id });

      const request = await this.$repository.share.userPost(data);
    },
  },
};
</script>

<style scoped>
.border {
  border-radius: 12px;
}
.fb {
  font-weight: bold;
}
.align-items-center {
  width: 100%;
}
.d-flex {
  display: inline-flex !important;
  width: 100%;
}
.dropdown-menu {
  border: 1px solid red !important;
  border-radius: 12px;
}

li:hover {
  background: transparent;
}

.box-title {
  border-bottom: 1px solid #ced4da;
}
.flex-direction {
  flex-direction: column;
}
</style>