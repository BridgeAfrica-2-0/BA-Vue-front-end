<template>
  <div>
    <b-carousel
      id="caroussel-product"
      v-model="slide"
      :interval="2000"
      controls
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with image only -->
      <b-carousel-slide
        class="product-slide"
        v-for="(product, i) in productImages"
        :key="i"
      >
        <template #img>
          <img
            class="d-block img-fluid w-100 sizee"
            width="180"
            height="180"
            :src="product.img"
            alt="product"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  props: {
    productImages: Array
  },
  data() {
    return {
      slide: 0,
      sliding: null
      // productImages: [
      // 	{
      // 		img: require("@/assets/img/payment/headset.jpg"),
      // 	},
      // 	{
      // 		img: require("@/assets/img/payment/headset1.jpg"),
      // 	},
      // 	{
      // 		img: require("@/assets/img/payment/headset2.jpg"),
      // 	},
      // 	{
      // 		img: require("@/assets/img/payment/headset3.jpg"),
      // 	},
      // ],
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style scoped>
.product-slide img {
  display: block;
  height: 200px;
}

@media only screen and (min-width: 548px) {
  .product-slide img {
    display: block;
    height: 200px;
  }
}
@media only screen and (min-width: 768px) {
  .product-slide img {
    display: block !important;
    height: 200px !important;
  }
  /* .caroussel-product{
			height: 400px !important;
		} */
}

.sizee {
  object-fit: cover !important;
}
</style>
