<template>
  <div class="row">
    <div class="container-fluid">
      <div v-for="(image, cmp) in allImages" :key="cmp">
        <!-- {{post.id}} -->
        <div class="img-gall" v-for="(im, index) in image.media" :key="index">
          <a v-if="typeOfMedia(im.path) == 'image'"
            ><b-img
              class="card-img btn p-0 album-img"
              thumbnail
              fluid
              rounded
              :src="getFullMediaLink(im.path)"
              alt="media_img"
              v-b-modal="`modal-${im.id}`"
              v-bind="imageProps"
            ></b-img>
          </a>
          <video controls v-else class="card-img btn p-0 album-img">
            <source :src="getFullMediaLink(im.path)" />
          </video>
          <b-modal hide-footer :id="`modal-${im.id}`" title="Details" size="md">
            <img
              class="card-img"
              :src="getFullMediaLink(im.path)"
              @click="() => showImg(index)"
              alt="media_img"
            />
            <p class="my-4">{{ image.content }}</p>
          </b-modal>

          <div class="mediadesc">
            <ul class="navbar-nav pull-right options">
              <li class="nav-item dropdown m-0 p-0">
                <b-dropdown
                  size="sm"
                  class="float-right"
                  variant="link"
                  toggle-class="text-decoration-none"
                  no-caret
                >
                  <template #button-content>
                    <b-icon
                      icon="three-dots-vertical"
                      color="white"
                      variant="light"
                    >
                    </b-icon>
                  </template>
                  <b-dropdown-item href="#" @click="downloadPic(im)"
                    >Download</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="#"
                    @click="setProfilePic(im.id)"
                    v-if="typeOfMedia(im.path) != 'video'"
                    >Make Profile Picture</b-dropdown-item
                  >
                  <b-dropdown-item
                    @click="setCoverPics(im.id)"
                    v-if="typeOfMedia(im.path) != 'video'"
                    >Make Cover Photo</b-dropdown-item
                  >
                  <b-dropdown-item href="#" @click="deleteImage(im.id)"
                    >Delete</b-dropdown-item
                  >
                </b-dropdown>
              </li>
            </ul>
          </div>

          <br />
        </div>
      </div>
      <vue-easy-lightbox
        :visible="visible"
        :imgs="Slideimges"
        :index="index"
        @hide="handleHide"
      ></vue-easy-lightbox>

      <FlashMessage />
      <!-- {{images}} -->
      <!-- {{images[0].type}} -->
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { fullMediaLink } from "@/helpers";

import { v4 } from "uuid";
export default {
  props: {
    album: {},
    canUpload: {
      type: Boolean,
      default: function () {
        return false;
      },
    },
    albumName: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },

    showAlbum: {
      type: Boolean,
      default: function () {
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
      imageProps: { width: 205, height: 205 },
      Slideimges: [],
      visible: false,
      index: 0,
    };
  },

  filters: {
    path: fullMediaLink,
  },

  created() {
    this.allImages = this.images;
    this.strategy = {
      jpeg: () => "image",
      jpg: () => "image",
      png: () => "image",
      mpeg: () => "video",
      mp4: () => "video",
      "image/jpeg": () => "image",
      "image/jpg": () => "image",
      "image/png": () => "image",
      "video/mpeg": () => "video",
      "video/mp4": () => "video",
    };
    this.loadImages();
  },

  methods: {
    getFullMediaLink: fullMediaLink,
    ...mapActions({
      submitPost: "UserProfileOwner/submitPost",
      setProfilePic: "UserProfileOwner/setProfilePic",
      setCoverPic: "UserProfileOwner/setCoverPic",
      deleteImage: "UserProfileOwner/deleteImage",
      onDownloadPic: "UserProfileOwner/downloadPic",
      //fetchImages: "UserProfileOwner/getImages",
      getAlbumImages: "UserProfileOwner/getAlbumImages",
    }),

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

    loadImages() {
      const pictures = this.allImages.map((e) =>
        this.getFullMediaLink(e.media[0].path)
      );

      this.Slideimges = pictures;
    },

    getFileExtension(file) {
      const fileArray = file.split(".");
      return fileArray[fileArray.length - 1];
    },

    typeOfMedia(file) {
      try {
        return this.strategy[this.getFileExtension(file)]();
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
      this.onDownloadPic(media.id)
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
          // loader.hide();
        })
        .catch((error) => {
          console.log(error);
          this.sending = false;
          this.flashMessage.show({
            status: "error",
            message: "Unable to download ",
          });
        });
    },

    deleteImages(id, key) {
      this.deleteImage(id)
        .then(() => {
          this.removePicture(id, key);
          this.flashMessage.show({
            status: "success",
            message: "Album Deleted",
          });
        })
        .catch((err) => {
          this.sending = false;
          if (err.response.status == 422) {
            console.log({ err: err });
            this.flashMessage.show({
              status: "error",
              message: err.response.data.message,
            });
          } else {
            this.flashMessage.show({
              status: "error",
              message: "Unable to Delete your Image",
            });
            console.log({ err: err });
          }
        });
    },
    //set an image as a cover photo
    setCoverPics(id) {
      this.setCoverPic(id)
        .then(() => {
          this.flashMessage.show({
            status: "success",
            message: "cover Picture succesfully set",
          });
        })
        .catch((err) => {
          this.sending = false;

          this.flashMessage.show({
            status: "error",
            message: "Unable to set your cover picture",
          });
          console.log({ err: err });
        });
    },
    //set image as profile pic

    setProfilePics(id) {
      this.setProfilePic(id)
        .then(() => {
          this.flashMessage.show({
            status: "success",
            message: "Profile Picture set",
          });
        })
        .catch((err) => {
          this.sending = false;

          this.flashMessage.show({
            status: "error",
            message: "Unable to set your profile pic",
          });
          console.log({ err: err });
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
        data: formData,
      };

      this.submitPost(payload)
        .then(() => this.getAlbumImages(albumId))
        .then(() => {
          this.loading = false;
          this.flashMessage.show({
            status: "success",
            message: "Profile Updated",
            blockClass: "custom-block-class",
          });
          this.$refs["modalxl"].hide();
        })
        .catch(() => {
          this.loading = false;

          this.flashMessage.show({
            status: "error",
            message: "Unable to upload your image",
            blockClass: "Size too large. It must be lower or equal to 25Mb",
          });
        });
    },

    selectMoviesOutsidePost(e) {
      this.type = null;
      this.profile_pic = e.target.files[0];
      const file = e.target.files[0];
      this.img_url = URL.createObjectURL(file);
      console.log(this.img_url);
      this.$refs["modalxl"].show();

      try {
        this.media = this.strategy[this.profile_pic.type]();
      } catch (error) {
        this.media = null;
      }
    },
  },

  mounted() {
    this.url = this.$route.params.id;
  },
};
</script>

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
    width: 46.5%;
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
    width: 20%;
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
    width: 46.5%;
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
}
</style>