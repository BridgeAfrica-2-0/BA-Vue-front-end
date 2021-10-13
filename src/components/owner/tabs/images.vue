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

          <b-button @click="submitPost" variant="primary" block
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
          <img class="card-img" :src="show_url" alt="" />
        </b-modal>

        <div class="img-gall" v-for="pictures in picturess" :key="pictures.id">
          <a
            ><img
              class="card-img btn p-0 album-img"
              :src="pictures.media_url"
              alt=""
              @click="showPic(pictures.media_url)"
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

                  <b-dropdown-item @click="downloadPic(pictures.id)"
                    >Download</b-dropdown-item
                  >
                  <b-dropdown-item @click="setProfilePic(pictures.id)"
                    >Make Profile Picture</b-dropdown-item
                  >
                  <b-dropdown-item @click="setCoverPic(pictures.id)"
                    >Make Cover Photo</b-dropdown-item
                  >
                  <b-dropdown-item @click="deleteImage(pictures.id)" href="#"
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
import { mapActions } from "vuex";
export default {
  props: ["album"],

  data() {
    return {
      show_url: null,
      album_id: null,
      url: null,
      fullPage: null,
      img_url: null,
      profile_pic: null,
      text: null,
      headers: { "Content-Type": "multipart/form-data" },

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
  components: {},

  computed: {
    picturess() {
      return this.$store.state.UserProfileOwner.albumImages;
    },
  },

  methods: {
    ...mapActions({
      submitPost: "UserProfileOwner/submitPost",
      setProfilePic: "UserProfileOwner/setProfilePic",
      setCoverPic: "UserProfileOwner/setCoverPic",
      deleteImage: "UserProfileOwner/deleteImage",
      downloadPic: "UserProfileOwner/downloadPic",
    }),

    showPic(url) {
      console.log(url);
      this.show_url = url;
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
      this.downloadPic(image_id)
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
      this.deleteImage(image_id, this.name)
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
      this.setCoverPic(image_id, this.name)
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
      this.setProfilePic(image_id, this.name)
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
      this.submitPost(formData, this.headers)
        .then(() => {
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
