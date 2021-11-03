<template>
  <div class="p-0">
    
    <b-container fluid class="p-0 gradient">
      <div class="container-flex">  
        <img  v-if="info.user.cover_picture =='' "
          src="@/assets/img/banner.jpg"
          class="img-fluid  banner"
          alt="Cover Image"
        />
         <img  v-if="info.user.cover_picture"
          :src="info.user.cover_picture"
          class="img-fluid  banner"
          alt="Cover Image"
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
                      v-b-modal.modal-upp
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

            <b-modal id="modal-upp" ref="modal" title="Upload Profile Picture">
              <div class="w3-container">
                <div class="row pb3">
                  <div class="col-sm-6 text-center" style="border-right: 1px solid rgb(222, 226, 230);">
                    <h1 @click="selectCover">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="upload" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="primary svg-inline--fa fa-upload fa-w-16">
                        <path fill="currentColor" d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" class=""></path>
                      </svg>
                      <h4>Upload a New picture</h4>
                    </h1>
                  </div>
                  <div class="col-sm-6 text-center">
                    <h1>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="primary svg-inline--fa fa-edit fa-w-18">
                        <path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" class=""></path>
                      </svg>
                    </h1>
                    <h4> Edit Your New picture </h4>
                  </div>
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

  setlogo(e){
    console.log(e);
    this.profile_photo= e.target.files[0]
    const file = e.target.files[0];
    this.img_url = URL.createObjectURL(file);
    this.$refs["logomodal"].show();

  },

  selectlogo(){
    document.getElementById("logo_pic").click();
  },

  selectCover(){
    document.getElementById("cover_pic").click();
    console.log("Cover test");
  },
  
  selectMoviesOutsidePost(e) {
    console.log(e);
    this.cover_photo= e.target.files[0]
    const file = e.target.files[0];
    this.img_url = URL.createObjectURL(file);
    this.$refs["coverphoto"].show();
  },

  chooseProfile2: function() {
    document.getElementById("cover-imag").click()
  },

  chooseProfile1: function() {
    document.getElementById("profile-imag").click()
  },

  submitLogo(){
    let loader = this.$loading.show({               
    container: this.fullPage ? null : this.$refs.preview,
    canCancel: true,
    onCancel: this.onCancel,
    color:"#e75c18"
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
        loader.hide()
      } 
      else {
        this.flashMessage.show({
          status: "error",       
          message: "Unable to set your Logo",
          blockClass: "custom-block-class",
        });
        console.log({ err: err });
        loader.hide()
      }

    });
  },

  submitCover(){
    let loader = this.$loading.show({                
      container: this.fullPage ? null : this.$refs.preview,
      canCancel: true,
      onCancel: this.onCancel,
      color:"#e75c18"
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
              message: "Cover Updated",
              blockClass: "custom-block-class",
            });
            loader.hide()
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
          loader.hide()
        } 
        else {
          this.flashMessage.show({
            status: "error",
            message: "Unable to upload your image",
            blockClass: "custom-block-class",
          });
          console.log({ err: err });
          loader.hide()
        }
      });
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

},

mounted(){
     this.url = this.$route.params.id;
},

computed: {    
    total(){
      return  this.$store.state.profile.Tcommunity;
    },
    profile_info() {
      if(this.$store.state.businessOwner.businessInfo ==[] ){  
        return  this.$store.state.businessOwner.businessInfo;
      }
      else{
        return  this.$store.state.businessOwner.businessInfo;
      }
    },
  }
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
