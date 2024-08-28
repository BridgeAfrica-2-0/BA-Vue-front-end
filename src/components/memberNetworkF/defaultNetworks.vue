<template>
  <div class="t-left yolo">
    <b-tabs content-class="" lazy fill pills>
      <b-tab active>
        <template slot="title" class="tt-color">
          <h6 class="">{{ $t("memnetwork.Posts") }}</h6>
        </template>

        <post-network></post-network>
      </b-tab>
      <b-tab>
        <template slot="title" class="tt-color">
          <h6 class="">{{ $t("memnetwork.Media") }}</h6>
        </template>

        <media-network></media-network>
      </b-tab>
      <b-tab>
        <template slot="title" class="tt-color">
          <h6 class="">{{ $t("memnetwork.Community") }}</h6>
        </template>

        <member-network></member-network>
      </b-tab>
      <b-tab>
        <template slot="title">
          <h6>{{ $t("memnetwork.Feedback") }}</h6>
        </template>
        <feedback-network></feedback-network>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import FeedbackNetwork from "@/components/businessf/tabs/owner/networks/feedbackNetwork";
import MediaNetwork from "@/components/businessf/tabs/owner/networks/mediaNetwork";
import MemberNetwork from "@/components/businessf/tabs/owner/networks/memberNetwork";
import PostNetwork from "@/components/businessf/tabs/owner/networks/postNetwork";

export default {
  name: "default",
  components: {
    PostNetwork,
    MemberNetwork,
    MediaNetwork,
    FeedbackNetwork
  }
};
</script>

<style>
.t-color {
  color: black;
}

.t-left {
  text-align: left;
}

.bongo .yolo .nav {
  border-style: hidden;
}

h6 {
  font-size: 12px;
}

.card-body {
  padding: 0px;
}
</style>
