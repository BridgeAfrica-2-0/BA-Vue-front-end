<template>
  <div>
    <b-alert show class="primary-bg">
      <b-icon icon="image" class="purple"></b-icon>
      <b>
       {{$t('general.Media')}} 
      </b></b-alert
    >
    <b-tabs content-class="mt-3">
      <b-tab :title="$t('general.Posts')" active><MediaPost /></b-tab>
      <b-tab :title="$t('general.Albums')"><Album /></b-tab>
    </b-tabs>
  </div>
</template>

<script>
import MediaPost from "../mediaPost";
import Album from "../albums";
export default {
  components: {
    MediaPost,
    Album
  }
};
</script>

<style scoped>
.purple {
  color: purple;
}
.primary-bg {
  background-color: rgb(242, 242, 242);
  border: none;
}
</style>
