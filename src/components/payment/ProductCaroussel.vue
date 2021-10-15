<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="2000"
      controls
      indicators
      background="#ababab"
      img-width="200"
      img-height="50"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <!-- Slides with image only -->
      <b-carousel-slide img-src="@/assets/img/payment/headset.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="@/assets/img/payment/headset1.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="@/assets/img/payment/headset2.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="@/assets/img/payment/headset.jpg"></b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>