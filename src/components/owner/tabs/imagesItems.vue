<template>
  <div class="img-gall-item img-size" :ref="`sHowMedia-${im.id}`" style="width: 266px;height: 266px; position:relative">
    <a v-if="typeOfMedia() == 'image' && !loading"
      ><b-img
        class="card-img btn p-0 album-img"
        thumbnail
        fluid
        rounded
        :src="getFullMediaLink()"
        alt="media_img"
        v-b-modal="uuid"
        v-bind="imageProps"
        style="width: 266px;height: 266px;"

      ></b-img>
    </a>
    <video
      style="width: 266px;height: 266px;"
      controls
      v-else-if="typeOfMedia() == 'video' && !loading"
      class="card-img btn p-0 album-img"
    >
      <source :src="getFullMediaLink()" />
    </video>
    <youtube
      style="width: 266px;height: 266px;"
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
    <b-modal hide-footer :id="uuid" :title="`Details ${uuid}`" size="md">
      <img
        class="card-img"
        :src="getFullMediaLink()"
        @click="() => showImg()"
        alt="media_img"
      />
      <p class="my-4">{{ content }}</p>
    </b-modal>
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

    <br />
  </div>
</template>

<script>

import { mapMutations } from 'vuex'

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
    "showImg",
    "downloadPic",
    "setProfilePic",
    "setCoverPic",
    "deleteImage",
    "isAlbum"
  ],

  created(){
    this.uuid = this.isAlbum ?  `modal-album-${this.im.id}` : `modal-picture-${this.im.id}`

  },

  data() {
    return {
      loading: false,
      uuid:null
    };
  },

  methods: {

    ...mapMutations({
      updatePictureState: "auth/updateProfilePicture",
      addCoverPicture: "businessOwner/addCoverPicture"
    }),

    async onDownloadPic() {
      let loader = this.$loading.show({
        container: this.$refs[`sHowMedia-${this.im.id}`],
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });

      this.loading = true;
      this.loading = await this.downloadPic();

      loader.hide();
    },

    async onDeleteImage() {
      let loader = this.$loading.show({
        container: this.$refs[`sHowMedia-${this.im.id}`],
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });

      this.loading = true;
      this.loading = await this.deleteImage();

      loader.hide();
    },
    //set an image as a cover photo

     async onSetCoverPic() {
      let loader = this.$loading.show({
        container: this.$refs[`sHowMedia-${this.im.id}`],
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });

      this.loading = true;
      this.loading = await this.setCoverPic();

      if ("BusinessOwner" === this.$route.name)
        this.addCoverPicture(this.getFullMediaLink());

      loader.hide();
    },
    //set image as profile pic

    async onSetProfilePic() {
      let loader = this.$loading.show({
        container: this.$refs[`sHowMedia-${this.im.id}`],
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });
      this.loading = true;
      this.loading = await this.setProfilePic();

      if ("BusinessOwner" === this.$route.name)
        this.updatePictureState(this.getFullMediaLink());

      loader.hide();
    },
  },
};
</script>

<style scoped>
.img-size {
  width: 266px !important;
  height: 266px !important;
}
.botmediadess-position {
  text-align: center;
  bottom: -45%;
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
