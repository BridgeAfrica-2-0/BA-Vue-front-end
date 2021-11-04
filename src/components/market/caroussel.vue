<template>
  <div>
    <div class="baba">
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
        <b-carousel-slide
          caption="   Find The Best Products & Services At The Best Price Around You  "
          img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=58"
          caption="   Find The Best Products & Services At The Best Price Around You  "
        >
        </b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
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
};
</script>

<style>
.d-block.img-fluid {
  max-width: 100%;
  height: 300px;

  border-radius: 10px;
}

@media only screen and (max-width: 768px) {
  .baba .d-block.img-fluid {
    max-width: 100%;
    height: 250px;

    border-radius: 10px;
  }

  h1 {
    font-size: 12px;
  }
}
</style>
