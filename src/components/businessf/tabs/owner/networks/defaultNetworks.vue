<template>
  <div class="t-left yolo wahala">
    <b-tabs content-class="" lazy fill pills>
      <b-tab active>
        <template slot="title" class="tt-color">
          <h6 class="h6 p-0 m-0">{{ $t('network.Posts') }}
          </h6>   
        </template>
 
        <post-network @changeSelected="changeSelected"></post-network>
      </b-tab>
      <b-tab>
        <template slot="title" class="tt-color">
          <h6 class="h6 p-0 m-0">{{ $t('network.Media') }}</h6>
        </template>
        
        <media-network :type="'network'"></media-network>
      </b-tab>
      <b-tab>
        <template slot="title" class="tt-color">
          <h6 class="h6 p-0 m-0">{{ $t('network.Community') }}</h6>
        </template>

        <member-network></member-network>
      </b-tab>

      <b-tab>
        <template slot="title" class="tt-color">
          <h6 class="h6 p-0 m-0">{{ $t('network.Members') }}</h6>
        </template>

        <Members from="admin"> </Members>
      </b-tab>

      <b-tab>
        <template slot="title">
          <h6 class="h6 p-0 m-0 ">{{ $t('network.Feedback') }}</h6>
        </template>
        <feedback-network></feedback-network>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import FeedbackNetwork from '@/components/businessf/tabs/owner/networks/feedbackNetwork';
import MediaNetwork from '@/components/owner/tabs/media';
import MemberNetwork from '@/components/businessf/tabs/owner/networks/memberNetwork';

import Members from '@/components/businessf/tabs/owner/networks/member';

import PostNetwork from '@/components/businessf/tabs/owner/networks/postNetwork';

export default {
  name: 'default',
  components: {
    PostNetwork,
    MemberNetwork,
    MediaNetwork,
    Members,
    FeedbackNetwork,
  },

  methods: {
    changeSelected(){
      console.log("defaultNetwork")
      this.$emit('changeSelected')
    }
  }
};
</script>

<style >
.t-color {
  color: black;
}

.t-left {
  text-align: left;
}

.bongo .yolo .nav {
  border-style: hidden;
}

@media (max-width: 768px) {
  .h6 {
    font-size: 12px !important;
  }
}
</style>

