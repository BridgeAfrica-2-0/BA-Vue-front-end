<template>
  <div v-if="hasLoadPicture">
    <b-spinner
      class="custom-loader"
      :label="$t('profileowner.Large_Spinner')"
    ></b-spinner>
  </div>
  <div fluid v-else>
    <p v-if="!allImages.length" style="font-size: 3rem">
      {{ $t("profileowner.No_items_found") }}
    </p>
    <div>
      
      <b-modal
        id="modalxl"
        ref="modalxl"
        centered
        hide-footer
        :title="
          'image' == media ? $t('profileowner.Upload_image') : 'Upload video'
        "
      >
        <div id="preview" ref="preview" v-if="img_url">
          <img :src="img_url" v-if="'image' == media" />

          <video controls v-else>
            <source :src="img_url" />
          </video>
        </div>

        <br />

        <b-button
          @click="submitPosts"
          variant="primary"
          block
          :disabled="loading"
          ><b-icon icon="cursor-fill" variant="primary"></b-icon>
          {{ $t("profileowner.Publish") }}</b-button
        >
      </b-modal>

      <div
        :style="getStyle"
        class="createp img-gall image-wrapp img-size"
        v-if="isEditor ? (!canUpload ? true : false) : false"
        @click="$refs.movie.click()"
      >
        <div class="">
          <input
            type="file"
            id="chosefile"
            @change="selectMoviesOutsidePost"
            accept="video/mpeg, video/mp4, image/*"
            hidden
            ref="movie"
          />
          <a>
            <div class="drag-textt">
              <fas-icon :icon="['fas', 'plus']" />
              <h3>{{ $t("profileowner.Add_Item") }}</h3>
            </div>
          </a>
        </div>
      </div>
   
          <Picture
            class="img-gall" v-for="(im, index) in allImages" :key="index"
            :im="im"
            :typeOfMedia="() => typeOfMedia(im.media.path)"
            :getFullMediaLink="() => getFullMediaLink(im.media.path)"
            :getYoutubeKey="() => getYoutubeKey(getFullMediaLink(im.media.path))"
            :showImg="() => showImg(getFullMediaLink(im.media.path))"
            :downloadPic="() => downloadPic(im)"
            :setProfilePic="() => setProfilePic(im.media.id)"
            :setCoverPic="() => setCoverPic(im.media.id)"
            :deleteImage="() => deleteImage(im.media.id, index)"
            :content="im.content"
            :imageProps="imageProps"
            :isEditor="isEditor"
            :type="type"
            :getStyle="getStyle"
            :style="getStyle"
          />
        
      <vue-easy-lightbox
        :visible="visible"
        :imgs="Slideimges"
        :index="currentPicture"
        @hide="handleHide"
      >
      </vue-easy-lightbox>

    </div>
  </div>
 
</template>

<script>
import Picture from "./imagesItems.vue";
import { mapActions, mapMutations } from "vuex";
import { fullMediaLink } from "@/helpers";
import { v4 } from "uuid";

import { ResizeMediaImage } from '@/mixins'

export default {
  mixins: [ResizeMediaImage],
  components: {
    Picture,
  },
  props: {
    album: {},
    isEditor: {},
    canUpload: {},
    addItem: {
      type: Boolean,
      default: function() {
        return false;
      },
    },
    albumName: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },
    isAlbum: {
      type: Boolean,
      default: function() {
        return false;
      },
    },

    hasLoadPicture: {
      type: Boolean,
      default: function() {
        return false;
      },
    },
    showCreateForm: {
      type: Boolean,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },

    showAlbum: {
      type: Boolean,
      default: function() {
        return false;
      },
    },
  },

  data() {
    return {
      img_url: null,
      profile_pic: null,
      loading: false,
      allImages: [],
      strategy: null,
      media: null,
      imageProps: { width: 250, height: 250 },
      Slideimges: [],
      visible: false,
      currentPicture: 0,
      playerVars: {
        autoplay: 1,
      },
      text: "",
      pattern: null,
    };
  },

  filters: {
    path: fullMediaLink,
  },

  created() {

    console.log(this.images)
    this.allImages = this.images
   
    this.url = this.$route.params.id;

    this.pattern = {
      profile: () => ({
        submitPost: this.submitPost,
        setProfilePicture: this.setProfilePicture,
        setCoverPicture: this.setCoverPicture,
        deleteImagePicture: this.deleteImagePicture,
        onDownloadPic: this.onDownloadPic,
        getAlbumImages: this.getAlbumImages,
        updateItem: this.updateItem,
      }),
      business: () => ({
        submitPost: this.submitPostBusiness,
        setProfilePicture: this.setProfilePictureBusiness,
        setCoverPicture: this.setCoverPictureBusiness,
        deleteImagePicture: this.deleteImagePictureBusiness,
        onDownloadPic: this.onDownloadPicBusiness,
        getAlbumImages: this.getAlbumImagesBusiness,
        updateItem: this.updateItemBusiness,
      }),
      network: () => ({
        submitPost: this.submitPostNetwork,
        setProfilePicture: this.setProfilePictureNetwork,
        setCoverPicture: this.setCoverPictureNetwork,
        deleteImagePicture: this.deleteImagePictureNetwork,
        onDownloadPic: this.onDownloadPicNetwork,
        getAlbumImages: this.getAlbumImagesNetwork,
        updateItem: this.updateItemNetwork,
      }),
    };

    this.strategy = {
      jpeg: () => "image",
      jpg: () => "image",
      png: () => "image",
      mpeg: () => "video",
      mp4: () => "video",
      youtube: () => "youtube",
      "image/jpeg": () => "image",
      "image/jpg": () => "image",
      "image/png": () => "image",
      "video/mpeg": () => "video",
      "video/mp4": () => "video",
    };
    this.loadImages();
  },

  destroyed() {
    this.$emit("reste");
  },
  // computed: mapGetters({
  //   auth: "auth/profilConnected",
  // }),

  methods: {
    ...mapActions({
      submitPost: "UserProfileOwner/submitPost",
      setProfilePicture: "UserProfileOwner/setProfilePic",
      setCoverPicture: "UserProfileOwner/setCoverPic",
      deleteImagePicture: "UserProfileOwner/deleteImage",
      onDownloadPic: "UserProfileOwner/downloadPic",
      getAlbumImages: "UserProfileOwner/getAlbumImages",

      submitPostBusiness: "businessOwner/submitPost",
      setProfilePictureBusiness: "businessOwner/setProfilePic",
      setCoverPictureBusiness: "businessOwner/setCoverPic",
      deleteImagePictureBusiness: "businessOwner/deleteImage",
      onDownloadPicBusiness: "businessOwner/downloadPic",
      getAlbumImagesBusiness: "businessOwner/getAlbumImages",

      submitPostNetwork: "networkProfileMedia/submitPost",
      setProfilePictureNetwork: "networkProfileMedia/setProfilePic",
      setCoverPictureNetwork: "networkProfileMedia/setCoverPic",
      deleteImagePictureNetwork: "networkProfileMedia/deleteImage",
      onDownloadPicNetwork: "networkProfileMedia/downloadPic",
      getAlbumImagesNetwork: "networkProfileMedia/getAlbumImages",
    }),

    ...mapMutations({
      updateItem: "UserProfileOwner/updateAlbumItem",
      updateItemBusiness: "businessOwner/updateAlbumItem",
      updateItemNetwork: "networkProfileMedia/updateAlbumItem",
      
    }),

    getFullMediaLink: fullMediaLink,

    getYoutubeKey(path) {
      let videoID = path.split("v=")[1];
      const ampersandPosition = videoID.indexOf("&");

      if (ampersandPosition != -1) {
        videoID = videoID.substring(0, ampersandPosition);
      }
      return videoID;
    },

    showImg(index) {
      this.currentPicture = this.Slideimges.indexOf(index);
      this.visible = true;
    },

    handleHide() {
      this.visible = false;
    },

    showPic(image) {
      this.image_details = image;
      this.$refs["Details"].show();
    },

    loadImages() {
      const pictures = this.images
        .filter((e) => e.media.length)
        .map((e) => {
          return this.getFullMediaLink(e.media[0].path);
        });
      this.Slideimges = pictures;
    },

    getFileExtension(file) {
      if (file.startsWith("https://www.youtube.com")) return "youtube";

      const fileArray = file.split(".");
      return fileArray[fileArray.length - 1];
    },

    typeOfMedia(file) {
      try {
        const extension = this.getFileExtension(this.getFullMediaLink(file));
        return "youtube" == extension
          ? extension
          : this.strategy[this.getFileExtension(file)]();
      } catch (error) {
        console.log(error);
        return "image";
      }
    },

    removePicture(imageID, key) {
      const newImage = this.allImages.map((im, index) => {
        if (index == key) {
          return im.media.filter((i) => i.id != imageID);
        } else {
          return im;
        }
      });

      this.allImages = newImage;
    },

    downloadPic(media) {
      this.loading = true;
      this.pattern[this.type]()
        .onDownloadPic(media.id)
        .then((response) => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement("a");
          fileLink.href = fileURL;
          fileLink.setAttribute(
            "download",
            `${v4()}.${this.getFileExtension(media.path)}`
          );
          document.body.appendChild(fileLink);
          fileLink.click();
          this.flashMessage.show({
            status: "success",
            message: "Image Downloaded",
          });
          this.loading = false;
          return false;
        })
        .catch((error) => {
          this.sending = false;
          this.loading = false;
          this.flashMessage.show({
            status: "error",
            message: error.response.data.message,
          });
          return false;
        });
    },

    deleteImage(id, key) {
      this.loading = true;
      this.pattern[this.type]()
        .deleteImagePicture(id)
        .then(() => {
          this.removePicture(id, key);

          this.pattern[this.type]().updateItem({
            id: this.album,
            action: "remove",
          });
          this.loading = false;
          this.flashMessage.show({
            status: "success",
            message: "Media Deleted",
          });
          return false;
        })
        .catch((error) => {
          this.sending = false;
          this.loading = false;
          this.flashMessage.show({
            status: "error",
            message: error.response.data.message,
          });
          return false;
        });
    },
    //set an image as a cover photo

    setCoverPic(id) {

      this.loading = true;
      
      const data =
        "business" == this.type || "network" == this.type
          ? { businessID: this.$route.params.id, id: id }
          : id;

      this.pattern[this.type]()
        .setCoverPicture(data)
        .then(() => {
          this.loading = false;
          this.flashMessage.show({
            status: "success",
            message: "Cover Picture succesfully set",
          });
          return false;
        })
        .catch((error) => {
          this.sending = false;
          this.loading = false;
          this.flashMessage.show({
            status: "error",
            message: error.response.data.message,
          });
          return false;
        });
    },
    //set image as profile pic

    setProfilePic(id) {
      this.loading = true;
      const data =
        "business" == this.type || "network" == this.type
          ? { businessID: this.$route.params.id, id: id }
          : id;

      return this.pattern[this.type]()
        .setProfilePicture(data)
        .then(() => {
          this.loading = false;
          this.flashMessage.show({
            status: "success",
            message: "Profile Picture set",
          });
          return false;
        })
        .catch((error) => {
          this.sending = false;
          this.loading = false;
          this.flashMessage.show({
            status: "error",
            message: error.response.data.message,
          });
          return false;
        });
    },

    submitPosts() {
      this.loading = true;
      let albumId = this.album;

      let formData = new FormData();
      
      formData.append("media", this.profile_pic);
      formData.append("dob", this.text);

      let payload = {
        id: albumId,
        businessID:
          "business" == this.type || "network" == this.type
            ? this.$route.params.id
            : null,
        data: formData,
      };

      const data =
        "business" == this.type || "network" == this.type
          ? { businessId: this.$route.params.id, albumId }
          : albumId;

      this.pattern[this.type]()
        .submitPost(payload)
        .then(() => {
          this.pattern[this.type]().updateItem({ id: albumId, action: "add" });
          this.pattern[this.type]().getAlbumImages(data);
          this.loading = false;
          this.text = "";
          this.flashMessage.show({
            status: "success",
            message: "Media Updated",
            blockClass: "custom-block-class",
          });
          this.$refs["modalxl"].hide();
          this.$emit("new-item");
        })
        .then(() => {
          this.$emit("reste");
        })
        .catch((error) => {
          this.loading = false;
          this.flashMessage.show({
            status: "error",
            message: error.response.data.message,
          });
        });
    },

    selectMoviesOutsidePost(e) {
      this.profile_pic = e.target.files[0];
      const file = e.target.files[0];
      this.img_url = URL.createObjectURL(file);
      this.$refs["modalxl"].show();

      try {
        this.media = this.strategy[this.profile_pic.type]();
      } catch (error) {
        this.media = null;
      }
    },
  },
};
</script>

<style scoped>
.img-size {
  width: 266px;
  height: 266px;
}

.botmediadess-position {
  text-align: center;
  bottom: -45%;
  width: 100%;
  font-size: 20px;
  position: relative;
}
.custom-loader {
  width: 4rem !important;
  height: 4rem !important;
  color: rgb(231, 92, 24);
  align-self: center !important;
  margin: auto;
  display: block !important;
}

</style>

<style>
.options {
  background: #e75c18;
  border-radius: 50%;
}
.notFound {
  text-align: center;
  font-weight: bold;
  font-size: 24px;
}
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

  .image-wrap {
    border: 4px dashed #e75c18;
    position: relative;

    position: relative;
    margin: 5px;
    float: left;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }

  .img-gall {
    position: relative;
    margin: 5px;
    float: left;
    
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
    margin: 3px;
    float: left;
    width: 19.1%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }

  .image-wrap {
    border: 4px dashed #e75c18;
    position: relative;
    margin: 5px;
    float: left;
    width: 46.5%;
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
    margin: 5px;
    border-radius: 3px;
  }

  .img-gall {
  
    position: relative;
    margin: 5px;
    float: left;
    
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }

  .image-wrap {
    border: 4px dashed #e75c18;
    position: relative;

    position: relative;
    margin: 5px;
    float: left;
    width: 46.5%;
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
    /* width: 45.5%; */
    height: 175px;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }

  .image-wrap {
    border: 4px dashed #e75c18;
    position: relative;

    position: relative;
    margin: 5px;
    float: left;
    width: 46.5%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }
}

.drag-textt {
  text-align: center;
  font-weight: 100;
  text-transform: uppercase;
  color: #000;
  width: 120px;
  height: 120px;
  position: absolute;
  top: 25%;
  left: 25%;
}
</style>
