<template>
  <div>
  <b-tabs content-class="mt-3">
    <b-tab title="Posts" active><MediaPost/></b-tab>
    <b-tab title="Albums"><p>I'm the second tab</p></b-tab>
   
  </b-tabs>
</div>
</template>

<script>
import MediaPost from "../mediaPost"
export default {
 components:{
   MediaPost,
 }
}
</script>

<style>

</style>