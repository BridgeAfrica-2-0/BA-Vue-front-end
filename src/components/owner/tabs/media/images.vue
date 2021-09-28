<template>
  <div>
    <div class="row">
      <div class="container-fluid">
        <div class="d-flex justify-content-center mb-3">
          <b-spinner label="Loading..." v-show="!displayComponent"></b-spinner>
        </div>

        <div v-show="displayComponent">
          <div class="img-gall" v-for="img in postList" :key="img.id">
            <image-item v-bind="img" @deletePicture="deletePicture" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MediaDao from "./MediaDao";
import ImageItem from "./ImageItem.vue";

const mediaDao = new MediaDao();

export default {
  name: "Image",

  components: {
    ImageItem,
  },

  data() {
    return {
      postList: null,
      displayComponent: false,
    };
  },

  async created() {
    this.postList = await mediaDao.getPostMedia();
    this.displayComponent = true;
  },

  methods: {

    deletePicture(data) {
      // let images = this.imagesList;
      // let p;
      // images.filter(() => {
      //   for (let i = 0; i < images.length; i++) {
      //     const index = images[i];
      //     if (data === index.id) p = i;
      //   }
      // });

      // images.splice(p, 1);
      // console.log(p);

      //mediaDao.deleteImage(data);
    },

    makeCoverPicture(data) {
      mediaDao.makeCoverPicture(data);
    },

    makeProfile(data) {
      mediaDao.makeProfile(data);
    },
  },
};
</script>

