<template>
  <div>
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333; border-radius:10px;"
      >
        <!-- Text slides with image -->
        <b-carousel-slide :img-src="getFirstImage"></b-carousel-slide>

        <b-carousel-slide :img-src="getSecondImage"></b-carousel-slide>

        <b-carousel-slide
          :img-src="require('@/assets/img/dash3.png')"
        ></b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  computed: {
    getFirstImage() {
      return this.$i18n.locale == "en"
        ? require("@/assets/img/dash1.png")
        : require("@/assets/img/dash1-fr.png");
    },
    getSecondImage() {
      return this.$i18n.locale == "en"
        ? require("@/assets/img/dash2.png")
        : require("@/assets/img/dash2-fr.png");
    },
  },
};
</script>

<style>
.d-block.img-fluid {
  max-width: 100%;
  height: 426px;

  border-radius: 10px;
}

@media only screen and (max-width: 768px) {
  .d-block.img-fluid {
    max-width: 100%;
    height: 180px;

    border-radius: 10px;
  }

  h1 {
    font-size: 12px;
  }
}
</style>
