<template>
  <div>
    <b-alert show variant="primary">
      <b-icon icon="image" variant="primary"></b-icon>
      <b>
        Media
      </b></b-alert
    >
  <b-tabs content-class="mt-3">
    <b-tab title="Posts" active><MediaPost/></b-tab>
    <b-tab title="Albums"><Album/></b-tab>
  </b-tabs>
</div>
</template>

<script>
import MediaPost from "../mediaPost"
import Album from "../albums"
export default {
 components:{
   MediaPost,
   Album,
 }
}
</script>

<style>

</style>