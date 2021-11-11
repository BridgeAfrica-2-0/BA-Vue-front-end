<template>
  <div class="img-gall-item">
    <a v-if="typeOfMedia() == 'image' && !loading"
      ><b-img
        class="card-img btn p-0 album-img"
        thumbnail
        fluid
        rounded
        :src="getFullMediaLink()"
        alt="media_img"
        v-b-modal="`modal-${im.id}`"
        v-bind="imageProps"
      ></b-img>
    </a>
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
    <b-modal hide-footer :id="`modal-${im.id}`" title="Details" size="md">
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
              {{ $t('profileowner.Download') }}</b-dropdown-item
            >
            <b-dropdown-item
              href="#"
              @click="onSetProfilePic()"
              v-if="!['video'].includes(typeOfMedia())"
              >{{ $t('profileowner.Make_Profile_Picture') }}</b-dropdown-item
            >
            <b-dropdown-item
              @click="onSetCoverPic()"
              v-if="!['video'].includes(typeOfMedia())"
              >{{ $t('profileowner.Make_Cover_Photo') }}</b-dropdown-item
            >
            <b-dropdown-item href="#" @click="onDeleteImage()"
              >{{ $t('profileowner.Delete') }}</b-dropdown-item
            >
          </b-dropdown>
        </li>
      </ul>
    </div>

    <br />
  </div>
</template>

<script>
export default {
  props: [
    "im",
    "imageProps",
    "content",
    "typeOfMedia",
    "getFullMediaLink",
    "getYoutubeKey",
    "showImg",
    "downloadPic",
    "setProfilePic",
    "setCoverPic",
    "deleteImage",
  ],

  data() {
    return {
      loading: false,
    };
  },

  methods: {
    async onDownloadPic() {
      console.log(this.loading)
      this.loading = true;
      this.loading = await this.downloadPic();
    },

    async onDeleteImage() {
      this.loading = true;
      this.loading = await this.deleteImage();
    },
    //set an image as a cover photo

    async onSetCoverPic() {
      this.loading = true;
      this.loading = await this.setCoverPic();
    },
    //set image as profile pic

   async  onSetProfilePic() {
      this.loading = true;
      this.loading = await this.setProfilePic();
    },
  },
};
</script>

<style scoped>
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