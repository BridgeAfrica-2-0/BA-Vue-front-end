<template>
  <div>
    <!--
    <b-button v-b-modal.modal-1>share peaple</b-button>
    <b-button v-b-modal.modal-2>share netword</b-button>
    <b-button v-b-modal.modal-3>share business</b-button>
    <b-button v-b-modal.modal-4>post</b-button> -->

    <Box
      id="modal-1"
      title="Share people"
      placeholder="Search for people..."
      subtitle="All peoples"
    />

    <Box
      id="modal-2"
      title="Share network"
      placeholder="Search for network..."
      subtitle="All networks"
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
      id="modal-3"
      title="Share business"
      placeholder="Search for business..."
      subtitle="All business"
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

    <!--
    <div style="width: 3rem">
      <a
        id="sharing"
        class="nav-link"
        data-toggle="popover"
        role="button"
        data-original-title=""
        title=""
        ><span class="text-ored"
          ><b-icon-share class="col-bg"></b-icon-share></span
      ></a>
      <b-popover target="sharing" triggers="hover" placement="top">
        <div class="popover-body">
          <p class="font-weight-bold close"></p>
          <hr class="h-divider" />

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
              <span>Share to New fedd</span>
            </div>
          </div>

          <div
            class="d-inline-flex flex-row align-items-center suggest-item py-2 cursor-pointer"
          >
            <span class="text-ored">
              <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
            </span>
            <div class="d-flex flex-column ml-3">
              <span>Share inbox</span>
            </div>
          </div>

          <div
            class="d-inline-flex flex-row align-items-center suggest-item py-2 cursor-pointer"
            v-b-modal.modal-2
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
            v-b-modal.modal-3
          >
            <span class="text-ored">
              <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
            </span>
            <div class="d-flex flex-column ml-3">
              <span>Share to business</span>
            </div>
          </div>

          <div
            class="d-inline-flex flex-row align-items-center suggest-item py-2 cursor-pointer"
            id="sharing-community"
            data-toggle="popover"
            role="button"
            data-original-title=""
          >
            <span class="text-ored">
              <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
            </span>
            <div class="d-flex flex-column ml-3">
              <span>Share to your community</span>
            </div>
          </div>
          <b-popover target="sharing-community" triggers="hover">
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
                v-b-modal.modal-2
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
                v-b-modal.modal-3
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

          <div
            class="d-inline-flex flex-row align-items-center suggest-item py-2 cursor-pointer"
          >
            <span class="text-ored">
              <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
            </span>
            <div class="d-flex flex-column ml-3">
              <span>Copy link</span>
            </div>
          </div>

          <div
            class="d-inline-flex flex-row align-items-center suggest-item py-2 cursor-pointer"
            id="sharing-via"
            data-toggle="popover"
            role="button"
            data-original-title=""
          >
            <span class="text-ored">
              <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
            </span>
            <div class="d-flex flex-column ml-3">
              <span>Share via</span>
            </div>
            <span class="text-ored">
              <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
            </span>
          </div>
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
        </div>
      </b-popover>
    </div>
    -->
    <b-dropdown
      size="lg"
      variant="link"
      toggle-class="text-decoration-none"
      no-caret
      position="bottom"
    >
      <template #button-content>
        &#x1f50d;<span class="sr-only">Search</span>
      </template>
      <b-dropdown-item href="#" class="d-flex py-2 cursor-pointer">
        <span class="text-ored">
          <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
        </span>
        <div class="d-flex flex-column ml-1">
          <span>Share to your profile</span>
        </div>
      </b-dropdown-item>

      <b-dropdown-item href="#" class="d-flex py-2 cursor-pointer">
        <span class="text-ored">
          <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
        </span>
        <div class="d-flex flex-column ml-1">
          <span>Share to New Feed</span>
        </div>
      </b-dropdown-item>

      <b-dropdown-item href="#" class="d-flex py-2 cursor-pointer">
        <span class="text-ored">
          <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
        </span>
        <div class="d-flex flex-column ml-1">
          <span>Share inbox</span>
        </div>
      </b-dropdown-item>

      <b-dropdown-item href="#" class="d-flex py-2 cursor-pointer">
        <span class="text-ored">
          <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
        </span>
        <div class="d-flex flex-column ml-1">
          <span>Share to network</span>
        </div>
      </b-dropdown-item>

      <b-dropdown-item href="#" class="d-flex py-2 cursor-pointer">
        <span class="text-ored">
          <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
        </span>
        <div class="d-flex flex-column ml-1">
          <span>Share to business</span>
        </div>
      </b-dropdown-item>

      <b-dropdown-item href="#" class="d-flex py-2 cursor-pointer">
        <span class="text-ored">
          <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
        </span>
        <div class="d-flex flex-column ml-1">
          <span>Share to commnunity</span>
        </div>
      </b-dropdown-item>

      <b-dropdown-item href="#" class="d-flex py-2 cursor-pointer">
        <span class="text-ored">
          <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
        </span>
        <div class="d-flex flex-column ml-1">
          <span>Copy link</span>
        </div>
      </b-dropdown-item>

      <b-dropdown-item href="#" class="d-flex py-2 cursor-pointer">
        <span class="text-ored">
          <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
        </span>
        <div class="d-flex flex-column ml-1">
          <span>Share via</span>
        </div>
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
import Box from "./Box";
import Post from "./SharePost";
export default {
  name: "ShareButton",
  components: {
    Box,
    Post,
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
.d-flex {
  display: inline-flex !important;
}
</style>