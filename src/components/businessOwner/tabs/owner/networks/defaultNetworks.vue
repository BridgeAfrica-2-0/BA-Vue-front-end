<template>
  <div>
    <b-tabs content-class="mt-1" fill pills>
      <b-tab :title="$t('businessowner.Posts')" active>
        <post-network></post-network>
      </b-tab>
      <b-tab :title="$t('businessowner.Media')">
        <media-network></media-network>
      </b-tab>
      <b-tab :title="$t('businessowner.Members')">
        <member-network></member-network>
      </b-tab>
      <b-tab :title="$t('businessowner.Feedback')">
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

<style scoped></style>
