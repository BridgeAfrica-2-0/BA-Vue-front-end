<template>
  <div class="lalala">
    <b-tabs lazy content-class="mt-3" fill pills>
      <b-tab :title="$t('businessowner.Followers')"><Followers @BlockUser="BlockUser"/></b-tab>
      <b-tab :title="$t('businessowner.Following')"><Following @BlockUser="BlockUser"/></b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Followers from "./tabs/followers";
import Following from "./tabs/following";
export default {
  components: {
    Followers,
    Following
  },
  methods: {
    BlockUser(dataInfo) {
      console.log(dataInfo);
      this.$emit('BlockUser', dataInfo);
    }
  }
};
</script>

<style></style>
