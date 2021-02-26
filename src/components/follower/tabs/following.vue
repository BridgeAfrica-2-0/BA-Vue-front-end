<template>
  <div>
    <b-alert show class="primary-bg">
      <b-icon class="purple" icon="people-fill"></b-icon>
      <b>
        Following
      </b></b-alert
    >
    <b-tabs content-class="mt-3">
      <b-tab title="Followers" active><Followers /></b-tab>
      <b-tab title="Follow"><Follow /></b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Followers from "../followers";
import Follow from "../follow";
export default {
  components: {
    Followers,
    Follow,
  },
};
</script>

<style scoped>
.primary {
  color: #e75c18;
}
.purple{
  color: purple;
}
.primary-bg {
  background-color: rgb(242, 242, 242);
  border: none;
}
</style>
