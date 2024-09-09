<template>
  <div>
    <div class="row">
      <div class="container-fluid">
        <div v-for="post in images" :key="post.id">
          <!-- {{post.id}} -->
          <div
            class="img-gall"
            v-for="(image, index) in post.media"
            :key="index"
          >
            <a href="#!"
              ><b-img
                class="card-img btn p-0"
                thumbnail
                fluid
                rounded
                :src="image.media_url"
                alt="media_img"
                v-b-modal="'modal-' + image.media_id"
                v-bind="imageProps"
              ></b-img>
            </a>
            <b-modal
              hide-footer
              :id="'modal-' + image.media_id"
              :title="$t('memnetwork.Details')"
            >
              <img
                class="card-img"
                :src="image.media_url"
                @click="() => showImg(index)"
                alt="media_img"
              />
              <p class="my-4">{{ image.post_content[0] }}</p>
            </b-modal>
          </div>
        </div>
        <vue-easy-lightbox
          :visible="visible"
          :imgs="Slideimges"
          :index="index"
          @hide="handleHide"
        ></vue-easy-lightbox>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["images"],
  data: function() {
    return {
      show_url: null,
      url: null,
      img_url: null,
      image_details: null,
      file: "",

      visible: false,
      index: 0,
      imageProps: { width: 205, height: 205 },
      Slideimges: []
    };
  },
  mounted() {
    this.url = this.$route.params.id;
    this.loadImages();
  },
  methods: {
    /**
     *
     * @param i
     */
    onClick(i) {
      this.index = i;
    },

    showImg(index) {
      console.log(index);
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },

    showPic(image) {
      console.log(image);
      this.image_details = image;
      this.$refs["Details"].show();
    },

    loadImages: function() {
      this.images.forEach(post => {
        post.media.forEach(media => {
          this.Slideimges.push(media.media_url);
        });
        // this.Slideimges = post.media;
      });
      // this.Slideimges = this.images;
    }
  }
};
</script>

<style>
.text-design {
  align-items: first baseline;
}
.drop-color {
  color: black;
}
@media (min-width: 960px) {
  .img-gall {
    background-size: contain;
    cursor: pointer;
    margin: 10px;
    border-radius: 3px;
  }
  .img-gall {
    position: relative;
    margin: 5px;
    float: left;
    width: 18.7%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }
  @media (min-width: 1400px) {
    .lb-grid {
      height: 274px;
      margin-bottom: 8px;
    }
  }
  .img-gall {
    position: relative;
    margin: 5px;
    float: left;
    width: 18.7%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1331px) {
  .img-gall {
    background-size: contain;
    cursor: pointer;
    margin: 10px;
    border-radius: 3px;
  }
  .img-gall {
    position: relative;
    margin: 5px;
    float: left;
    width: 31%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }
}
@media (max-width: 762px) {
  .img-gall {
    background-size: contain;
    cursor: pointer;
    margin: 10px;
    border-radius: 3px;
  }
  .img-gall {
    position: relative;
    margin: 5px;
    float: left;
    width: 47%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }
}
</style>
