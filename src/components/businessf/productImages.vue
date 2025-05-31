<template>
  <div class="col justify-content-center">
    <div
      class=" d-flex align-items-center justify-content-center"
      style="flex-grow: 1; background-color: whitesmoke;"
    >
      <!-- <div class="main-image-container">
        <img
          :src="currentImage.src"
          class="img-fluid"
          :alt="currentImage.alt"
        />
      </div> -->
      <div class="main-image-container">
  <img
    v-if="currentImage.type === 'image'"
    :src="currentImage.src"
    class="img-fluid"
    :alt="currentImage.alt"
  />
  <video
    v-else-if="currentImage.type === 'video'"
    class="img-fluid"
    :src="currentImage.src"
    controls
  ></video>
</div>

    </div>
    <!-- <div class="px-3 mt-2">
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
    </div> -->
    <div class="thumbnail-carousel px-3 mt-2">
  <div class="d-flex align-items-center">
    <!-- Left Arrow -->
    <button
      class="carousel-arrow"
      @click="scrollThumbnails('prev')"
      :disabled="thumbnailStart === 0"
    >
      ‹
    </button>

    <!-- Thumbnails Wrapper -->
    <div class="thumbnail-track-container">
      <div class="thumbnail-track">
        <div
          v-for="(image, index) in visibleThumbnails"
          :key="thumbnailStart + index"
          class="thumbnail-item"
          @click="showImage(thumbnailStart + index)"
          :class="{ selected: currentIndex === thumbnailStart + index }"
        >
        <template v-if="image.type === 'image'">
  <img :src="image.src" :alt="image.alt || name" />
</template>
<!-- <template v-else-if="image.type === 'video'">
  <video :src="image.src" muted playsinline></video>
</template> -->
<template v-else-if="image.type === 'video'">
  <div class="video-thumbnail-wrapper">
    <video :src="image.src" muted playsinline></video>
    <div class="play-button-overlay">▶</div>
  </div>
</template>

        </div>
      </div>
    </div>

    <!-- Right Arrow -->
    <button
      class="carousel-arrow"
      @click="scrollThumbnails('next')"
      :disabled="thumbnailStart + thumbnailsToShow >= images.length"
    >
      ›
    </button>
  </div>
</div>

  </div>
</template>

<script>
export default {
  // props: {
  //   images: {
  //     type: Array,
  //     required: true,
  //     default: () => [],
  //   },
  // },
  props: {
  images: {
    type: Array,
    required: true,
    default: () => [],
  },
  picture: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  videoUrl: {
    type: String,
    default: '',
  },
},

  data() {
    // return {
    //   currentIndex: -1,
    // };
    return {
    currentIndex: 0,
    thumbnailStart: 0,
    thumbnailsToShow: 3,
  };
  },
  // computed: {
  //   // currentImage() {
  //   //   return this.images[this.currentIndex];
  //   // },
  //   // currentImage() {
  //   //   if (this.currentIndex === -1 || this.images.length === 0) {
  //   //     return {
  //   //       src: this.picture,
  //   //       alt: this.name,
  //   //     };
  //   //   }
  //   //   return this.images[this.currentIndex];
  //   // },
  //   currentImage() {
  //     console.log('.................', this.images);
  //   if (this.currentIndex === -1 || this.images.length === 0) {
  //     return {
  //       src: this.picture,
  //       alt: this.name,
  //     };
  //   }
  //   return this.images[this.currentIndex];
  // },
  // visibleThumbnails() {
  //   return this.images.slice(this.thumbnailStart, this.thumbnailStart + this.thumbnailsToShow);
  // },
  // },
  computed: {
  currentImage() {
    // if (this.currentIndex === -1 || this.mediaList.length === 0) {
    //   return {
    //     type: 'image',
    //     src: this.picture,
    //     alt: this.name,
    //   };
    // }
    return this.mediaList[this.currentIndex];
  },
  mediaList() {
    let media = [...this.images.map(img => ({
      type: 'image',
      src: img.src,
      alt: img.alt || this.name,
    }))];

    if (this.videoUrl) {
      // Insert video as second item (index 1)
      media.splice(1, 0, {
        type: 'video',
        src: this.videoUrl,
        alt: this.name,
      });
    }

    return media;
  },
  visibleThumbnails() {
    return this.mediaList.slice(this.thumbnailStart, this.thumbnailStart + this.thumbnailsToShow);
  },
},

  methods: {
    // showImage(index) {
    //   this.currentIndex = index;
    // },
    // showImage(index) {
    //   if (this.images.length > 0) {
    //     this.currentIndex = index;
    //   }
    // },
    showImage(index) {
    this.currentIndex = index;
  },
  scrollThumbnails(direction) {
    const maxStart = this.images.length - this.thumbnailsToShow;
    if (direction === 'prev' && this.thumbnailStart > 0) {
      this.thumbnailStart--;
    } else if (direction === 'next' && this.thumbnailStart < maxStart) {
      this.thumbnailStart++;
    }
  },
//   scrollThumbnails(direction) {
//   const maxStart = this.images.length - this.thumbnailsToShow;

//   if (direction === 'prev' && this.thumbnailStart > 0) {
//     this.thumbnailStart--;
//   } else if (direction === 'next' && this.thumbnailStart < maxStart) {
//     this.thumbnailStart++;
//   }

//   // Always update the main image to the first visible thumbnail
//   this.currentIndex = this.thumbnailStart;
// }

  },
};
</script>
<style scoped>
.video-thumbnail-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.video-thumbnail-wrapper video {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.play-button-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: #2b2525;
  /* background-color: rgba(0, 0, 0, 0.4); */
  border-radius: 50%;
  padding: 0.4rem 0.6rem;
  pointer-events: none;
}

.main-image-container {
  position: relative;
  height: 300px;
}

.main-image-container img,
.main-image-container video {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

.thumbnail-carousel {
  user-select: none;
}

.carousel-arrow {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  width: 40px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.carousel-arrow:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.thumbnail-track-container {
  width: 420px; /* 3 thumbnails × 140px */
  overflow: hidden;
}

.thumbnail-track {
  display: flex;
  gap: 10px;
  transition: transform 0.3s ease;
}

.thumbnail-item {
  width: 130px;
  height: 110px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid transparent;
}

.thumbnail-item.selected {
  border-color: #007bff;
  background-color: #e0e0e0;
}

.thumbnail-item img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>

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
