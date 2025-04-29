<template>
  <div class="col justify-content-center">
    <div
      class=" d-flex align-items-center justify-content-center"
      style="flex-grow: 1; background-color: whitesmoke;"
    >
      <div class="main-image-container">
        <img
          :src="currentImage.src"
          class="img-fluid"
          :alt="currentImage.alt"
        />
      </div>
    </div>
    <div class="px-3 mt-2">
      <ul class="list-unstyled">
        <li v-for="(image, index) in images" :key="index" class="mb-3 img-align">
          <img
            :src="image.src"
            class="img-thumbnail rounded-0 p-3"
            :alt="image.alt"
            @click="showImage(index)"
            :class="{ 'border-primary': currentIndex === index }"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  methods: {
    showImage(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.img-align {
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-image-container {
  position: relative;
  height: 300px;
}
.main-image-container img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}

.img-thumbnail {
  cursor: pointer;
  width: 130px;
  height: 110px;
  object-fit: contain;
}
</style>
