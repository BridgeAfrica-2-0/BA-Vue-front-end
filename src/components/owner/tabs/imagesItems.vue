<template>
  
  <div class="img-gall">
      <b-img
        v-if="typeOfMedia() == 'image' && !loading"
        class="card-img btn p-0 album-img "
        
        :src="getFullMediaLink()"
        alt="media_img"
        v-b-modal="`modal-${im.id}`"
        v-bind="imageProps"
      ></b-img>

    <video
      controls
      v-else-if="typeOfMedia() == 'video' && !loading"
      class="card-img btn p-0 album-img"
    >
      <source :src="getFullMediaLink()" />
    </video>
    <youtube
      class="card-img btn p-0 album-img"
      v-if="typeOfMedia == 'youtube' && !loading"
      :video-id="getYoutubeKey()"
      :player-vars="playerVars"
    ></youtube>
      
    <div class="botmediadess-position" v-if="loading">
      <b-spinner
        style="width: 3rem; height: 3rem; color: #e75c18"
        :label="$t('profileowner.Large_Spinner')"
      ></b-spinner>
    </div>
    <div class="mediadesc" v-if="!['youtube'].includes(typeOfMedia())">
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
              <b-icon icon="three-dots-vertical" color="white" variant="light">
              </b-icon>
            </template>

            <b-dropdown-item @click="onDownloadPic()">
              {{ $t("profileowner.Download") }}</b-dropdown-item
            >

            <b-dropdown-item
              href="#"
              @click="onSetProfilePic()"
              v-if="isEditor && !['video'].includes(typeOfMedia())"
            >
              {{ $t("profileowner.Make_Profile_Picture") }}
            </b-dropdown-item>

            <b-dropdown-item
              @click="onSetCoverPic()"
              v-if="
                isEditor &&
                  !['video'].includes(typeOfMedia()) &&
                  type != 'network'
              "
            >
              {{ $t("profileowner.Make_Cover_Photo") }}
            </b-dropdown-item>
            <b-dropdown-item href="#" @click="onDeleteImage()" v-if="isEditor">
              {{ $t("profileowner.Delete") }}
            </b-dropdown-item>
          </b-dropdown>
        </li>
      </ul>
    </div>
    <b-modal hide-footer :id="`modal-${im.id}`" title="Details" size="md">
      <img
        class="card-img"
        :src="getFullOriginalMediaLink()"
        @click="() => showImg()"
        alt="media_img"
      />
      <p class="my-4">{{ content }}</p>
    </b-modal>
    
  </div>
</template>

<script>

import { mapMutations,mapGetters } from 'vuex'

export default {
  props: [
    "im",
    "imageProps",
    "content",
    "canUpload",
    "isEditor",
    "type",
    "typeOfMedia",
    "getFullMediaLink",
    "getYoutubeKey",
    "getFullOriginalMediaLink",
    "showImg",
    "downloadPic",
    "setProfilePic",
    "setCoverPic",
    "deleteImage",
    "isAlbum",
    "getStyle"
  ],

  created() {
    
    this.uuid = this.isAlbum
      ? `modal-album-${this.im.id}`
      : `modal-picture-${this.im.id}`;

    console.log(this.uuid, this.im.id)

    this.strategy = {
      BusinessOwner: {
        picture: ({ media_url }) => this.updatePictureState(media_url),
        cover: (data) => this.addCoverPictureBusiness(data),
      },

      profile_owner: {
        picture: ({ media_url }) => this.updatePictureState(media_url),
        cover: ({ media_url }) => this.addCoverPictureProfile(media_url),
      },
    };
  },

  computed:{
    ...mapGetters({
      auth: "auth/profilConnected"
    })
  },

  data() {
    return {
      loading: false,
      uuid: null,
      strategy: null,
    };
  },

  methods: {

    ...mapMutations({
      updatePictureState: "auth/updateProfilePicture",
      addCoverPictureBusiness: "businessOwner/addCoverPicture",
      addCoverPictureProfile: "auth/addCoverPicture",
      
      
    }),

    async onDownloadPic() {
      
      const imageSrc = this.getFullOriginalMediaLink()
      
      const image = await fetch(imageSrc)
      const imageBlog = await image.blob()
      const imageURL = URL.createObjectURL(imageBlog)
      const splitName = imageSrc.split('/')
      
      const link = document.createElement('a')
      link.href = imageURL
      link.download = splitName[splitName.length-1]

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    
    },

    async onDeleteImage() {
      
      let loader = this.$loading.show({
        container: this.$refs[`sHowMedia-${this.im.id}`],
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });


      this.deleteImage()
      .then(() => {
        this.loading = false;
      })
      .catch((error) => {
          this.sending = false;
          this.loading = false;
          this.flashMessage.show({
            status: "error",
            message: "something wrong happen",
          });
          return false;
        })
      .finally(() => loader.hide())
    },
    //set an image as a cover photo

    onSetCoverPic() {
      let loader = this.$loading.show({
        container: this.$refs[`sHowMedia-${this.im.id}`],
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });

      this.setCoverPic()
        .then(() => {
          try {
            this.strategy[this.$route.name].cover({
              media_url: this.getFullMediaLink(),
              id: this.im.id,
              media_type: "image/png",
            });
          } catch (error) {
            console.error(error);
          }
          loader.hide()
        })
        .catch(() => loader.hide());
    },
    //set image as profile pic

    async onSetProfilePic() {
      let loader = this.$loading.show({
        container: this.$refs[`sHowMedia-${this.im.id}`],
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });
      this.setProfilePic()
        .then(() => {
          try {
            this.strategy[this.$route.name].picture({
              media_url: this.getFullMediaLink(),
              id: this.im.id,
              media_type: "image/png",
            });
          } catch (error) {
            console.error(error);
          }
        })
        .catch(() => loader.hide());
    },

  },
};
</script>

<style scoped>
.img-size {
  width: 100% !important;
  height: 100% ;
}
.botmediadess-position {
  text-align: center;
  margin: auto;
  width: 100%;
  font-size: 20px;
  position: relative;
  width: 340.73px;
  height: 340.73px;
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
    width: auto;
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
    width: 45.5% !important;
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
