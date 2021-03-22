<template>
  <div class="main">
    <!--  <b-card-->
    <!--      overlay-->
    <!--      img-src="https://picsum.photos/900/250/?image=3"-->
    <!--      img-alt="Card Image"-->
    <!--      text-variant="white"-->
    <!--      title="Image Overlay"-->
    <!--      sub-title="Subtitle"-->
    <!--  >-->
    <!--    <b-card-text class="text-center">-->
    <!--      Some quick example text to build on the card and make up the bulk of the card's content.-->
    <!--    </b-card-text>-->
    <!--  </b-card>-->
  </div>
</template>

<script>
export default {
  name: "carousselDashboard",
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>

<style scoped>
/*.main {*/
/*  display: flex;*/
/*  height: 25%;*/
/*  width: inherit;*/
/*  align-items: center;*/
/*  justify-content: center;*/
/*}*/

.mt-header {
  margin-top: 66px !important;
}
</style>
