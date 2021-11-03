<template>
  <div>
    <div class="row">
      <div class="container-fluid">
        <b-modal hide-footer size="md" id="Details" ref="Details">
          <div>
            <agile
              :nav-buttons="false"
              :autoplay-speed="5000"
              :speed="2500"
              fade="fade"
              pause-on-hover="pause-on-hover"
              pause-on-dots-hover="pause-on-dots-hover"
              autoplay="autoplay"
            >
              <div class="slide" v-for="img_url in show_url" :key="img_url.id">
                <img :src="img_url.media_ulr" alt="" />
              </div>
              <template slot="prevButton"
                ><i class="fas fa-chevron-left"></i
              ></template>
              <template slot="nextButton"
                ><i class="fas fa-chevron-right"></i
              ></template>
              <template slot="caption"> {{ content }}</template>
            </agile>
          </div>
        </b-modal>

        <div v-for="pictures in pictures" :key="pictures.id">
          <div class="img-gall" v-for="pic in pictures.media" :key="pic.id">
            <a
              ><img
                class="card-img btn p-0 album-img"
                :src="pic.media_ulr"
                alt=""
                @click="showPic(pictures.media, pictures.content)"
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

                    <b-dropdown-item @click="downloadPic(pic.id)"
                      >Download</b-dropdown-item
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
import axios from "axios";
export default {
  components: {},

  computed: {
    pictures() {
      return this.$store.state.businessOwner.ownerPostImages;
    },
  },

  methods: {
    showPic(img, content) {
      console.log(img);
      this.content = content;
      this.show_url = img;
      this.$refs["Details"].show();
    },

    downloadPic(image_id) {
      console.log("downloading");

      let loader = this.$loading.show({
        container: this.fullPage,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });

      axios
        .get("business/download/media/" + this.url + "/" + image_id, {})
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

          loader.hide();
        })
        .catch((err) => {
          this.sending = false;

          if (err.response.status == 422) {
            console.log({ err: err });

            this.flashMessage.show({
              status: "error",

              message: err.response.data.message,
            });

            loader.hide();
          } else {
            this.flashMessage.show({
              status: "error",

              message: "Unable to download ",
            });
            console.log({ err: err });

            loader.hide();
          }
        });
    },

    deleteImage(image_id) {
      console.log("deleting ----------");

      let loader = this.$loading.show({
        container: this.fullPage,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });

      axios
        .post("business/delete/media/" + this.url + "/" + image_id, {
          name: this.name,
        })
        .then((response) => {
          console.log(response.data);

          this.flashMessage.show({
            status: "success",

            message: "Album Deleted",
          });

          loader.hide();
        })
        .catch((err) => {
          this.sending = false;

          if (err.response.status == 422) {
            console.log({ err: err });

            this.flashMessage.show({
              status: "error",

              message: err.response.data.message,
            });

            loader.hide();
          } else {
            this.flashMessage.show({
              status: "error",

              message: "Unable to Delete your Image",
            });
            console.log({ err: err });

            loader.hide();
          }
        });
    },

    //set an image as a cover photo

    setCoverPic(image_id) {
      let loader = this.$loading.show({
        container: this.fullPage,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });

      axios
        .post("business/make/coverpic/" + this.url + "/" + image_id, {
          name: this.name,
        })
        .then((response) => {
          console.log(response.data);

          this.flashMessage.show({
            status: "success",

            message: "cover Picture succesfully set",
          });

          loader.hide();
        })
        .catch((err) => {
          this.sending = false;

          if (err.response.status == 422) {
            console.log({ err: err });

            this.flashMessage.show({
              status: "error",

              message: err.response.data.message,
            });

            loader.hide();
          } else {
            this.flashMessage.show({
              status: "error",

              message: "Unable to set your cover picture",
            });
            console.log({ err: err });

            loader.hide();
          }
        });
    },

    //set image as profile pic

    setProfilePic(image_id) {
      let self = this;

      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.creatform,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });

      axios
        .post("business/album/edit/" + this.url + "/" + self.album_id, {
          name: this.name,
        })
        .then((response) => {
          console.log(response.data);

          this.flashMessage.show({
            status: "success",

            message: "Profile Picture set",
          });

          loader.hide();
        })
        .catch((err) => {
          this.sending = false;

          if (err.response.status == 422) {
            console.log({ err: err });

            this.flashMessage.show({
              status: "error",

              message: err.response.data.message,
            });

            loader.hide();
          } else {
            this.flashMessage.show({
              status: "error",

              message: "Unable to set your profile pic",
            });
            console.log({ err: err });

            loader.hide();
          }
        });
    },

    submitPost() {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.preview,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });

      let formData = new FormData();
      formData.append("media", this.profile_pic);

      formData.append("dob", this.text);

      this.axios
        .post("business/store/media/" + this.url + "/" + this.album, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);

          this.flashMessage.show({
            status: "success",

            message: "Profile Updated",

            blockClass: "custom-block-class",
          });

          loader.hide();
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

            loader.hide();
          } else {
            this.flashMessage.show({
              status: "error",

              message: "Unable to upload your image",
              blockClass: "custom-block-class",
            });
            console.log({ err: err });

            loader.hide();
          }
        });
    },
    selectMoviesOutsidePost(e) {
      this.profile_pic = e.target.files[0];
      const file = e.target.files[0];
      this.img_url = URL.createObjectURL(file);

      console.log(this.img_url);

      this.$refs["modalxl"].show();
    },

    onClick(i) {
      this.index = i;
    },
  },

  mounted() {
    this.url = this.$route.params.id;
  },

  props: ["album"],

  watch: {
    album: function(newVal) {
      this.album_id = newVal;
    },
  },
  data: function() {
    return {
      content: null,
      show_url: null,
      album_id: null,
      url: null,
      fullPage: null,
      img_url: null,
      profile_pic: null,
      text: null,
      images: [
        "https://placekitten.com/801/800",
        "https://placekitten.com/802/800",
        "https://placekitten.com/803/800",
        "https://placekitten.com/804/800",
        "https://placekitten.com/805/800",
        "https://placekitten.com/806/800",
        "https://placekitten.com/807/800",
        "https://placekitten.com/808/800",
        "https://placekitten.com/809/800",
      ],
      imagees: [
        "https://i.wifegeek.com/200426/f9459c52.jpg",
        "https://i.wifegeek.com/200426/5ce1e1c7.jpg",
        "https://i.wifegeek.com/200426/5fa51df3.jpg",
        "https://i.wifegeek.com/200426/663181fe.jpg",
        "https://i.wifegeek.com/200426/2d110780.jpg",
        "https://i.wifegeek.com/200426/e73cd3fa.jpg",
        "https://i.wifegeek.com/200426/15160d6e.jpg",
        "https://i.wifegeek.com/200426/d0c881ae.jpg",
        "https://i.wifegeek.com/200426/a154fc3d.jpg",
        "https://i.wifegeek.com/200426/71d3aa60.jpg",
        "https://i.wifegeek.com/200426/d17ce9a0.jpg",
        "https://i.wifegeek.com/200426/7c4deca9.jpg",
        "https://i.wifegeek.com/200426/64672676.jpg",
        "https://i.wifegeek.com/200426/de6ab9c6.jpg",
        "https://i.wifegeek.com/200426/d8bcb6a7.jpg",
        "https://i.wifegeek.com/200426/4085d03b.jpg",
        "https://i.wifegeek.com/200426/177ef44c.jpg",
        "https://i.wifegeek.com/200426/d74d9040.jpg",
        "https://i.wifegeek.com/200426/81e24a47.jpg",
        "https://i.wifegeek.com/200426/43e2e8bb.jpg",
      ],
      index: 0,
    };
  },
};
</script>

<style scoped>
.call-action {
  border-radius: 50%;
  background: gray;
  height: 30px !important;
  width: 30px !important;
  font-weight: 50px !important;
  text-align: center;
  padding-right: 35px !important;
}
.text-design {
  align-items: first baseline;
}

.drop-color {
  color: black;
}

.botmediadess {
  text-align: center;
  bottom: -5%;
  width: 100%;
  font-size: 20px;
}

@media (min-width: 960px) {
  .album-img {
    height: 300px !important;
    object-fit: cover !important;
  }

  .drag-textt {
    height: 290px !important;
    padding-top: 95px;
  }

  .img-gall {
    background-size: contain;
    cursor: pointer;
    margin: 10px;
    border-radius: 3px;
  }

  .image-wrapp {
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

  .image-wrapp {
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
}

@media only screen and (min-width: 768px) and (max-width: 1331px) {
  .album-img {
    height: 300px !important;
    object-fit: cover !important;
  }

  .drag-textt {
    height: 290px !important;
    padding-top: 95px;
  }

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

  .image-wrapp {
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
}

@media (max-width: 762px) {
  .album-img {
    height: 200px !important;
    object-fit: cover !important;
  }

  .drag-textt {
    height: 190px !important;
    padding-top: 55px;
  }

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

  .image-wrapp {
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
}

.drag-textt {
  text-align: center;
  font-weight: 100;
  text-transform: uppercase;
  color: #000;
}
</style>

<style>
.agile__dots {
  bottom: 10px;
  flex-direction: column;
  right: 30px;
  position: absolute;
}
.agile__dot {
  margin: 5px 0;
}
.agile__dot button {
  background-color: transparent;
  border: 1px solid #fff;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button,
.agile__dot:hover button {
  background-color: #fff;
}

.slide {
  display: block;
  height: auto;
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
}

.agile__nav-button {
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 24px;
  height: 100%;
  position: absolute;
  top: 0;
  transition-duration: 0.3s;
  width: 80px;
}

.agile__nav-button--prev {
  left: 0;
}
.agile__nav-button--next {
  right: 0;
}
</style>
