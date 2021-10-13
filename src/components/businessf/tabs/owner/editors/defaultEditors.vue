<template>
  <div class="t-left yolo">
    <b-tabs content-class="" fill pills>
      <b-tab active>
        <template slot="title" class="tt-color">
          <h6 class="h6">Posts</h6>
        </template>

        <post-editor></post-editor>
      </b-tab>
      <b-tab>
        <template slot="title" class="tt-color">
          <h6 class="h6">Media</h6>
        </template>

        <media-editor></media-editor>
      </b-tab>
      <b-tab>
        <template slot="title" class="tt-color">
          <h6 class="h6">Community</h6>
        </template>

        <member-editor></member-editor>
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
        <feedback-editor></feedback-editor>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import FeedbackEditor from "@/components/businessf/tabs/owner/editors/feedbackEditor";
import MediaEditor from "@/components/businessf/tabs/owner/editors/mediaEditor";
import MemberEditor from "@/components/businessf/tabs/owner/editors/memberEditor";

import Members from "@/components/businessf/tabs/owner/editors/member";

import PostEditor from "@/components/businessf/tabs/owner/editors/postEditor";

export default {
  name: "default",
  components: {
    PostEditor,
    MemberEditor,
    MediaEditor,
    Members,
    FeedbackEditor
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

