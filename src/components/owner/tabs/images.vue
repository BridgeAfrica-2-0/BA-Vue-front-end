<template>
  <div>
    <FlashMessage />
    <div class="row">
      <div class="container-fluid">
        <b-modal
          id="modalxl"
          ref="modalxl"
          centered
          hide-footer
          title="Upoad Image"
        >
          <br />

          <div id="preview" ref="preview">
            <img v-if="media == 'image'" :src="img_url" />

            <video controls v-if="media == 'video'">
              <source :src="img_url" :type="img_url.type" />
            </video>
          </div>
          <br />

          <b-button
            @click="submitPosts"
            variant="primary"
            block
            :disabled="loading"
            ><b-icon icon="cursor-fill" variant="primary"></b-icon>
            Publish</b-button
          >
        </b-modal>

        <div class="createp img-gall image-wrapp" v-if="canBeUpdate">
          <div class="">
            <input
              type="file"
              id="chosefile"
              @change="selectMoviesOutsidePost"
              accept="video/mpeg, video/mp4, image/*"
              hidden
              ref="movie"
            />

            <a @click="$refs.movie.click()">
              {{ canBeUpdate }}
              <div class="drag-textt">
                <fas-icon :icon="['fas', 'plus']" />
                <h3>Add Item</h3>
              </div>
            </a>
          </div>
        </div>

        <b-modal hide-footer size="xl" id="Details" ref="Details">
          <img class="card-img" :src="showImage" alt="Oops" />
          <div>
            <p>
              {{ this.content }}
            </p>
          </div>
        </b-modal>

        <div class="img-gall" v-for="(image, cmp) in allImages" :key="cmp">
          <span></span>
          <div v-for="(im, index) in image.media" :key="index">
            <a v-if="typeOfMedia(im.path) == 'image'"
              ><img
                class="card-img btn p-0 album-img"
                :src="im.path | path"
                alt=""
                @click="showPic(im, im.content)"
                download
              />
            </a>
            <video controls v-else>
              <source :src="getFullMediaLink(im.path)" />
            </video>
            <div class="mediadesc">
              <ul class="navbar-nav pull-right">
                <li class="nav-item dropdown m-0 p-0">
                  <b-dropdown
                    size="sm"
                    class="call-action"
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

                    <b-dropdown-item @click="downloadPics(im.path)"
                      >Download</b-dropdown-item
                    >
                    <b-dropdown-item @click="setProfilePics(im.id)"
                      >Make Profile Picture</b-dropdown-item
                    >
                    <b-dropdown-item @click="setCoverPics(im.id)"
                      >Make Cover Photo</b-dropdown-item
                    >
                    <b-dropdown-item @click="deleteImages(im.id, cmp)" href="#"
                      >Delete</b-dropdown-item
                    >
                  </b-dropdown>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { fullMediaLink } from "@/helpers";

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
      showImage: null,
      showIndex: "",
      content: "",
      album_id: null,
      url: null,
      fullPage: null,
      img_url: null,
      profile_pic: null,
      text: null,
      loading: false,
      allImages: [],
      strategy: null,
      media: null,
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
  },

  computed: {
    canBeUpdate() {
      return this.albumName
        ? ["profile_picture", "cover_photo", "post"].indexOf(this.albumName) !==
          -1
          ? false
          : true
        : false;
    },
  },

  methods: {
    getFullMediaLink: fullMediaLink,
    ...mapActions({
      submitPost: "UserProfileOwner/submitPost",
      setProfilePic: "UserProfileOwner/setProfilePic",
      setCoverPic: "UserProfileOwner/setCoverPic",
      deleteImage: "UserProfileOwner/deleteImage",
      downloadPic: "UserProfileOwner/downloadPic",
      //fetchImages: "UserProfileOwner/getImages",
      getAlbumImages: "UserProfileOwner/getAlbumImages",
    }),

    getFileExtension(file) {
      const fileArray = file.split(".");
      console.log(fileArray[fileArray.length - 1]);
      return fileArray[fileArray.length - 1];
    },

    typeOfMedia(file) {
      try {
        console.log(file);
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

    showPic(image, content) {
      this.showIndex = this.getImages.indexOf(image);
      this.showImage = Object.assign({}, image);
      this.content = content;
      this.$refs["Details"].show();
    },

    downloadPics: async function (url) {
      const imageSrc = fullMediaLink(url);

      const imageURL = URL.createObjectURL(new Blob([imageSrc]));

      const link = document.createElement("a");
      link.href = imageURL;
      link.download = imageSrc;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      this.flashMessage.show({
        status: "success",
        message: "Image Downloaded",
      });

      /*this.downloadPic(id)
        .then((response) => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement("a");

          fileLink.href = fileURL;
          fileLink.setAttribute("download", "file.jpg");
          document.body.appendChild(fileLink);

          fileLink.click();
          this.flashMessage.show({
            status: "success",
            message: "Image Downloaded",
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
              message: "Unable to download ",
            });
            console.log({ err: err });
          }
        }); */
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

  watch: {
    images: function (images) {
      console.log("test wathc image chagne");
      this.allImages = images;
    },
    album: function (newVal) {
      console.log(newVal, "in wath");
      this.album_id = newVal;
    },

    albumName: function (newVal, oldVal) {
      console.log(newVal, oldVal, "in hasLoadPicture");
    },
  },
};
</script>

<style>
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