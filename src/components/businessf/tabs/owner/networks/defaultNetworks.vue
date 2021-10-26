<template>
  <div class="t-left yolo">
    <b-tabs content-class="" fill pills>
      <b-tab active>
        <template slot="title" class="tt-color">
          <h6 class="h6">Posts</h6>
        </template>

        <post-network></post-network>
      </b-tab>
      <b-tab>
        <template slot="title" class="tt-color">
          <h6 class="h6">Media</h6>
        </template>

        <media-network></media-network>
      </b-tab>
      <b-tab>
        <template slot="title" class="tt-color">
          <h6 class="h6">Community</h6>
        </template>

        <member-network></member-network>
      </b-tab>

      <b-tab>
        <template slot="title" class="tt-color">
          <h6 class="h6">Members</h6>
        </template>

        <Members>  </Members>
      </b-tab>


      <b-tab>
        <template slot="title">
          <h6 class="h6" >Feedback</h6>
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

import Members from "@/components/businessf/tabs/owner/networks/member";

import PostNetwork from "@/components/businessf/tabs/owner/networks/postNetwork";

export default {
  name: "default",
  components: {
    PostNetwork,
    MemberNetwork,
    MediaNetwork,
    Members,
    FeedbackNetwork
  }
};
</script>

<style >
.t-color {
  color: black;
}

.t-left{

  text-align: left;
}

.bongo .yolo .nav {
   
   
 
  border-style: hidden;
  
}


@media (max-width: 768px) {

.h6{
  font-size: 12px !important;
}
}


</style>

