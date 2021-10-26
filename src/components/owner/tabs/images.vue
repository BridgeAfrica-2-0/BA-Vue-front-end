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
            <img v-if="img_url" :src="img_url" />
          </div>

          <br />
          <b-form-textarea
            id="textarea-small"
            class="mb-2 border-none"
            v-model="text"
            placeholder="Enter a description"
          >
          </b-form-textarea>

          <br />

          <b-button @click="submitPosts" variant="primary" block
            ><b-icon icon="cursor-fill" variant="primary"></b-icon>
            Publish</b-button
          >
        </b-modal>

        <div class="createp img-gall image-wrapp">
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

        <div class="img-gall" v-for="image in getImages" :key="image.id">
          <span></span>
          <a
            ><img
              class="card-img btn p-0 album-img"
              :src="image.media"
              alt=""
              @click="showPic(image, image.content)"
          /></a>

          <div class="mediadesc">
            <ul class="navbar-nav pull-right">
              <li class="nav-item dropdown m-0 p-0">
                <b-dropdown
                  size="sm"
                  class=" call-action"
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

                  <b-dropdown-item @click="downloadPics(image.id)"
                    >Download</b-dropdown-item
                  >
                  <b-dropdown-item @click="setProfilePics(image.id)"
                    >Make Profile Picture</b-dropdown-item
                  >
                  <b-dropdown-item @click="setCoverPics(image.id)"
                    >Make Cover Photo</b-dropdown-item
                  >
                  <b-dropdown-item @click="deleteImages(image.id)" href="#"
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
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["album"],

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
    };
  },
  components: {},

  computed: {
    ...mapGetters({
      getImages: "UserProfileOwner/getImages",
      albumImages: "UserProfileOwner/getalbumImages",
      getAlbums: "UserProfileOwner/getAlbums",
    }),
  },

  beforeMount() {
    this.getImages;
    this.albumImages;
  },

  methods: {
    ...mapActions({
      submitPost: "UserProfileOwner/submitPost",
      setProfilePic: "UserProfileOwner/setProfilePic",
      setCoverPic: "UserProfileOwner/setCoverPic",
      deleteImage: "UserProfileOwner/deleteImage",
      downloadPic: "UserProfileOwner/downloadPic",
    }),

    showPic(image, content) {
      this.showIndex = this.getImages.indexOf(image);
      this.showImage = Object.assign({}, image);
      this.content = content;
      this.$refs["Details"].show();
    },
    downloadPics(id) {
      this.downloadPic(id)
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
        });
    },

    deleteImages(id) {
      this.deleteImage(id)
        .then((response) => {
          console.log(response.data);
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
        .then((response) => {
          console.log(response.data);
          this.flashMessage.show({
            status: "success",
            message: "cover Picture succesfully set",
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
              message: "Unable to set your cover picture",
            });
            console.log({ err: err });
          }
        });
    },
    //set image as profile pic

    setProfilePics(id) {
      this.setProfilePic(id)
        .then((response) => {
          console.log(response.data);
          this.flashMessage.show({
            status: "success",
            message: "Profile Picture set",
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
              message: "Unable to set your profile pic",
            });
            console.log({ err: err });
          }
        });
    },
    submitPosts() {
      let albumId = this.album;
      console.log(albumId);

      let formData = new FormData();
      formData.append("media", this.profile_pic);
      formData.append("dob", this.text);
      let payload = {
        id: albumId,
        headers: { "Content-Type": "multipart/form-data" },
        data: formData,
      };
      this.submitPost(payload)
        .then(() => {
          this.flashMessage.show({
            status: "success",
            message: "Profile Updated",
            blockClass: "custom-block-class",
          });
          this.$refs["modalxl"].hide();
        })
        .catch((err) => {
          console.log({ err: err });

          if (err.response.status == 422) {
            console.log({ err: err });

            this.flashMessage.show({
              status: "error",
              message: err.response.data.message,
              blockClass: "custom-block-class",
            });
          } else {
            this.flashMessage.show({
              status: "error",

              message: "Unable to upload your image",
              blockClass: "custom-block-class",
            });
            console.log({ err: err });
          }
        });
    },

    selectMoviesOutsidePost(e) {
      this.profile_pic = e.target.files[0];
      const file = e.target.files[0];
      this.img_url = URL.createObjectURL(file);
      console.log(this.img_url);
      console.log("look up");
      this.$refs["modalxl"].show();
    },
  },

  mounted() {
    this.url = this.$route.params.id;
  },

  watch: {
    album: function(newVal) {
      this.album_id = newVal;
    },
  },
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
