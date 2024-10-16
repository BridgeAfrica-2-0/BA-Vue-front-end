<template>
  <!-- Our Resources -->
  <div class="container-flex">
    <div class=" mt-3 bridge-resources">
      <splide :options="options" class="r-image">
        <splide-slide v-for="(item, i) in videos" :key="item.id">
          <div class="hotbizz text-center">
            <b-img :src="item.thumb" @click="openGallery(i)" class="" />
          </div>
        </splide-slide>
      </splide>
    </div>

    <!-- 
 <splide :options="options" class="r-image">
          <splide-slide v-for="(item, i) in videos " class="p-4" :key="item.id">
             <div class="" @click="openGallery(i)">
                <b-img
                  :src="item.thumb"
                  alt="..."
                  class="p-image"
                />
              </div>
          </splide-slide>
        </splide> -->

    <LightBox
      ref="lightbox"
      :media="videos"
      :show-caption="true"
      :show-light-box="false"
    ></LightBox>
  </div>
</template>

<script>
import LightBox from "vue-it-bigger";
import("vue-it-bigger/dist/vue-it-bigger.min.css");

export default {
  name: "Resources",

  components: {
    LightBox
  },

  data() {
    return {
      options: {
        rewind: true,
        autoplay: true,
        perPage: 1,
        pagination: false,
        type: "loop",
        perMove: 1,

        breakpoints: {
          425: {
            perPage: 1,
            gap: "0rem"
          },
          760: {
            perPage: 2,
            gap: "0rem"
          },
          992: {
            perPage: 2,
            gap: "1rem"
          }
        }
      }
    };
  },

  props: {
    videos: {
      type: Array,
      default: () => []
    }
  },

  computed: {},

  methods: {
    openGallery(i) {
      this.$emit("openGallery", i);
    }
  }
};
</script>

<style scoped>
.p-image {
  height: 150px;
  object-fit: contain;
}

/* .r-image{
    height: 200px;
  } */
</style>

<style>
.vib-container:hover .vib-hidden {
  opacity: 1 !important;
}
</style>

<style>
.splide__arrow {
  opacity: unset !important;
  color: #fff !important;
}

.bridge-resources .splide__arrow--prev {
  left: 0 !important;
  margin-left: 20px;
  background: linear-gradient(
    90deg,
    rgba(224, 119, 21, 1),
    rgba(255, 158, 25, 1)
  ) !important;
}

.bridge-resources .splide__arrow--next {
  right: 0 !important;
  margin-right: 20px;
  background: linear-gradient(
    90deg,
    rgba(224, 119, 21, 1),
    rgba(255, 158, 25, 1)
  ) !important;
}

.splide__arrow--prev {
  background: linear-gradient(
    90deg,
    rgba(224, 119, 21, 1),
    rgba(255, 158, 25, 1)
  ) !important;
}

.splide__arrow--next {
  background: linear-gradient(
    90deg,
    rgba(224, 119, 21, 1),
    rgba(255, 158, 25, 1)
  ) !important;
}

@media only screen and (min-width: 768px) {
  .bridge-resources .splide__arrow--prev {
    width: 40px !important;
    height: 40px !important;
  }

  .bridge-resources .splide__arrow--next {
    width: 40px !important;
    height: 40px !important;
  }
}

@media only screen and (max-width: 768px) {
  .bridge-resources .splide__arrow--prev {
    width: 30px !important;
    height: 30px !important;
  }

  .bridge-resources .splide__arrow--next {
    width: 30px !important;
    height: 30px !important;
  }
}

@media screen and (max-width: 431px) {
  .bridge-resources .splide__slide {
    width: unset !important;
    height: 250px !important;
  }

  .bridge-resources .splide__slide img {
    height: 250px !important;
  }

  .bridge-resources .splide__slide .hotbizz {
    height: 250px !important;
  }
}
</style>
