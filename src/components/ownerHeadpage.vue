<template>
  <div class="p-0">
    <b-container fluid class="p-0 gradient">
      <div class="container-flex">
        <img
          :src="info.user.cover_picture"
          class="img-fluid banner"
          alt="banner"
        />
      </div>

      <div class="container-fluid p-63">
        <b-row class="mt-md-2 text-left">
          <b-col cols="12" md="12" class="m-0 p-0 text-left put-top">
            <b-avatar
              v-if="info.user.profile_picture == ''"
              src="https://placekitten.com/400/300"
              class="avat text-center"
              badge-variant="primary"
              badge-offset="10px"
            >
            </b-avatar>

            <b-avatar
              v-if="info.user.profile_picture != ''"
              :src="info.user.profile_picture"
              class="avat text-center"
              badge-variant="primary"
              badge-offset="10px"
            >
            </b-avatar>

            <b-icon
              icon="camera-fill"
              class="avatar-header-icon btn cursor-pointer size"
              @click="selectlogo"
            ></b-icon>

            <span style="display: inline-block">
              <h6 class="profile-name text-center">
                <div class="username">
                  <b> {{ info.user.name }} </b>
                </div>

                <span class="duration float-left">
                  {{ nFormatter(total.total_community) }} Community
                </span>
              </h6>
            </span>

            <input
              type="file"
              id="cover_pic"
              @change="selectMoviesOutsidePost"
              accept="video/mpeg, video/mp4, image/*"
              hidden
              ref="movie"
            />

            <input
              type="file"
              id="logo_pic"
              @change="setlogo"
              accept=" image/*"
              hidden
              ref="logo_pic"
            />

            <div class="">
              <div class="text-box">
                <div class="">
                  <span class="float-right profileedit-btn put-topbtn">
                    <b-button
                      variant="primary"
                      class="d-none d-md-inline edit-btn"
                      @click="selectCover"
                    >
                      <fas-icon
                        class="mr-2"
                        :icon="['fas', 'pencil-alt']"
                        size="lg"
                      />
                      Edit
                    </b-button>

                    <b-dropdown
                      id="dropdown-1"
                      class="
                        float-right
                        options
                        dot-btn
                        mt-2 mt-sm-2 mt-md-0
                        mr-3
                      "
                      no-caret
                      variant="outline"
                      style="border-color: #ffD20; color: #ffD20"
                    >
                      <template #button-content>
                        <b-icon-three-dots></b-icon-three-dots>
                      </template>

                      <b-dropdown-item @click="selectCover">
                        Change Cover</b-dropdown-item
                      >

                      <b-dropdown-item @click="RemoveCover">
                        Remove cover
                      </b-dropdown-item>

                      <!--
                      <b-dropdown-item
                        >Invite Friends On Bridge Africa</b-dropdown-item
                      >
-->
                      <b-dropdown-item>View As</b-dropdown-item>
                    </b-dropdown>
                  </span>
                </div>
              </div>
            </div>

            <b-modal
              id="logomodal"
              ref="logomodal"
              @ok="submitLogo"
              title="Upload Your Logo"
            >
              <div class="w3-container">
                <div id="preview">
                  <img :src="img_url" />
                </div>
              </div>
            </b-modal>

            <!-- second modal box  to edit the big cover photo -->

            <b-modal
              id="coverphoto"
              ref="coverphoto"
              @ok="submitCover"
              title="Upload  Cover photo"
            >
              <div class="w3-container">
                <div id="preview">
                  <img :src="img_url" />
                </div>
              </div>
            </b-modal>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "headPageOwner",

  data() {
    return {
      url: null,
      img_url: null,
      cover_photo: null,
      profile_photo: null,

      options: {
        rewind: true,
        autoplay: true,
        perPage: 3,
        pagination: false,

        type: "loop",
        perMove: 1,

        breakpoints: {
          760: {
            perPage: 1,
            gap: "0rem",
          },
          992: {
            perPage: 2,
            gap: "1rem",
          },
        },
      },
    };
  },

  methods: {
    nFormatter(num) {
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
      }
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
      }
      return num;
    },

    RemoveCover() {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.preview,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });

      this.$store
        .dispatch("profile/deleteCover")
        .then((response) => {
          console.log(response);

          this.$store
            .dispatch("profile/loadUserPostIntro", null)
            .then((response) => {
              console.log(response);

              this.flashMessage.show({
                status: "success",

                message: "Cover Deleted",

                blockClass: "custom-block-class",
              });

              loader.hide();
            })
            .catch((error) => {
              console.log(error);
              loader.hide();
            });
        })
        .catch((error) => {
          console.log(error);
          loader.hide();
          this.flashMessage.show({
                status: "error",

                message: "Can not delete your cover",

                blockClass: "custom-block-class",
              });

        });
    },

    setlogo(e) {
      console.log(e);

      this.profile_photo = e.target.files[0];
      const file = e.target.files[0];
      this.img_url = URL.createObjectURL(file);

      this.$refs["logomodal"].show();
    },

    selectlogo() {
      document.getElementById("logo_pic").click();
    },

    selectCover() {
      document.getElementById("cover_pic").click();
    },
    selectMoviesOutsidePost(e) {
      console.log(e);

      this.cover_photo = e.target.files[0];
      const file = e.target.files[0];
      this.img_url = URL.createObjectURL(file);

      this.$refs["coverphoto"].show();
    },

    chooseProfile2: function () {
      document.getElementById("cover-imag").click();
    },

    chooseProfile1: function () {
      document.getElementById("profile-imag").click();
    },

    submitLogo() {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.preview,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });

      let formData = new FormData();
      formData.append("image", this.profile_photo);

      this.axios
        .post("user/upload/profile-picture", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);

          this.$store
            .dispatch("profile/loadUserPostIntro", null)
            .then((response) => {
              console.log(response);

              this.flashMessage.show({
                status: "success",

                message: "Logo Updated",

                blockClass: "custom-block-class",
              });

              loader.hide();
              this.$refs["modalxl"].hide();
            })
            .catch((error) => {
              console.log(error);
            });
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

              message: "Unable to set your Logo",
              blockClass: "custom-block-class",
            });
            console.log({ err: err });

            loader.hide();
          }
        });
    },

    submitCover() {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.preview,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });

      let formData = new FormData();
      formData.append("image", this.cover_photo);

      this.axios
        .post("user/upload-cover", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);

          this.$store
            .dispatch("profile/loadUserPostIntro", null)
            .then((response) => {
              console.log(response);

              this.flashMessage.show({
                status: "success",

                message: "Cover  Updated",

                blockClass: "custom-block-class",
              });

              loader.hide();
              this.$refs["modalxl"].hide();
            })
            .catch((error) => {
              console.log(error);
            });
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
  },

  mounted() {
    this.url = this.$route.params.id;
  },

  computed: {
    total() {
      return this.$store.state.profile.Tcommunity;
    },

    profile_info() {
      if (this.$store.state.businessOwner.businessInfo == []) {
        return this.$store.state.businessOwner.businessInfo;
      } else {
        return this.$store.state.businessOwner.businessInfo;
      }
    },

    info: function () {
      return this.$store.getters["profile/getUserPostIntro"];
    },
  },
};
</script>

<style scoped>
@media only screen and (min-width: 762px) {
  .username {
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    height: 1.5em;
    white-space: nowrap;
    font-size: 32px !important;
  }
}

@media only screen and (max-width: 762px) {
  .username {
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    height: 1.5em;
    white-space: nowrap;
    font-size: 22px;
  }
}
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 100%;
  max-height: 300px;
}

.text-box {
  margin-top: 1.5rem;
  text-align: left;
}

.position-loup {
  display: none;
}

.img-avatar {
  width: 6em;
  height: 6em;
  margin-top: 10px;
}

@media (max-width: 575.98px) {
  .text-box {
    margin: 0px;
    margin-top: 7px;
    text-align: left;
  }

  .position-loup {
    margin-top: -27px;
    display: inherit;
  }
}
@media (max-width: 768px) {
  .options {
    margin-right: -5px;
  }
}
@media (min-width: 992px) {
}
@media (min-width: 1200px) {
}
@media (min-width: 1400px) {
  .header-group {
    float: right;
    margin-top: -20px;
    margin-right: 20px;
  }
}

@media (max-width: 760px) {
  .put-top {
    margin-top: -45px !important;
  }

  .put-topbtn {
    margin-top: -50px !important;
  }

  .profileedit-btn {
    margin-top: 5px;
  }

  .avatar-header-icon {
    width: 25px;
    height: 25px;
    position: absolute;

    margin-left: -20px;
    top: 47px;

    background-color: #e75c18;
    color: white;
    border-radius: 24px;
    padding: 6px;
  }

  .banner {
    height: 180px;

    width: 100%;

    object-fit: cover !important;
  }

  .avat {
    width: 84px;
    height: 84px;
  }

  .profile-name {
    font-size: 18px !important;
    font-size: 32px;
    margin-top: -0px;
    margin-left: 30px;
    position: absolute;
  }

  .dot-btn {
    height: 33px;
    margin-left: 3px;
  }

  .edit-btn {
    width: 112px;
    height: 33px;
    background-color: #ffd200;
    border-color: #ffd200;
  }
}

@media (min-width: 760px) {
  .put-top {
    margin-top: -75px !important;
  }

  .put-topbtn {
    margin-top: -100px !important;
  }

  .profileedit-btn {
    margin-top: 10px;
  }

  .profile-name {
    font-size: 32px;

    font-size: 32px;
    margin-top: -10px;
    margin-left: 30px;
    position: absolute;
  }

  .avatar-header-icon {
    width: 2em;
    height: 2em;
    position: absolute;

    top: 100px;
    margin-left: -20px;
    background-color: #e75c18;
    color: white;
    border-radius: 24px;
    padding: 6px;
  }

  .avat {
    width: 168px;
    height: 168px;
  }
  .banner {
    height: 426px;

    width: 100%;
    object-fit: cover !important;
  }

  .edit-btn {
    width: 146px;
    height: 40px;
    background-color: #ffd200;
    border-color: #e4c229;
  }

  .dot-btn {
    height: 40px;
    margin-left: 3px;
  }

  .p-63 {
    padding-right: 63px;
    padding-left: 63px;
  }
}

/*
.gradient{

  background-image: linear-gradient(1deg, black, transparent);  */
/*  background-image: url("../assets/img/profile_back.png");  

} 
 */

.edit-btn:hover {
  border-color: #b39500 !important ;
  background-color: #b39500 !important ;
}

.btn:focus {
  border-color: #b39500 !important;
  background-color: #b39500 !important ;
}

.btn:active {
  border-color: #e4c229 !important;
  background-color: #b39500 !important ;
}
</style>
