<template>
  <div>
    <b-alert show variant="primary">
      <b-icon icon="people-fill" variant="primary"></b-icon>
      <b>
        Following
      </b></b-alert
    >
  <b-tabs content-class="mt-3">
    <b-tab title="Following" active><Following/></b-tab>
    <b-tab title="Follow"><Follow/></b-tab>
  </b-tabs>
</div>
</template>

<script>
import Following from "../followers"
import Follow from "../follow"
export default {
 components:{
   Following,
   Follow,
 }
}
</script>

<style></style>
