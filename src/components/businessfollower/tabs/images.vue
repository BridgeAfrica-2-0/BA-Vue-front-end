<template>
  <div v-if="hasLoadPicture">
    <b-spinner class="custom-loader" label="Large Spinner"></b-spinner>
  </div>
 
  <div class="row" v-else>
     
    <div class="container-fluid">
      <p v-if="!allImages.length && !canUpload" style="font-size: 3rem">
       {{$t('profileowner.No_items_found')}} 
      </p>
     
      <b-modal
        id="modalxl"
        ref="modalxl"
        centered
        hide-footer
        :title="'image' == media ? 'Upload image' : 'Upload video'"
      >
        <br />

        <div id="preview" ref="preview" v-if="img_url">
          <img :src="img_url" v-if="'image' == media" />

          <video controls v-else>
            <source :src="img_url" />
          </video>
        </div>

        <br />

        <br />

        <b-button @click="submitPosts" variant="primary" block :disabled="loading"
          ><b-icon icon="cursor-fill" variant="primary"></b-icon> Publish</b-button
        >
      </b-modal>

      <div v-for="(image, cmp) in allImages" :key="cmp">
        <div class="img-gall img-gall-height" v-for="(im, index) in image.media" :key="index">
          <Picture
            :im="im"
            :typeOfMedia="() => typeOfMedia(im.path)"
            :getFullMediaLink="() => getFullMediaLink(im.path)"
            :getYoutubeKey="() => getYoutubeKey(getFullMediaLink(im.path))"
            :showImg="() => showImg(getFullMediaLink(im.path))"
            :downloadPic="() => downloadPic(im)"
            :setProfilePic="() => setProfilePic(im.id)"
            :setCoverPic="() => setCoverPic(im.id)"
            :deleteImage="() => deleteImage(im.id, cmp)"
            :content="image.content"
            :imageProps="imageProps"
            class="h-100"
          />

          <!-- <a v-if="typeOfMedia(im.path) == 'image' && !loading"
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
          <video
            controls
            v-else-if="typeOfMedia(im.path) == 'video' && !loading"
            class="card-img btn p-0 album-img"
          >
            <source :src="getFullMediaLink(im.path)" />
          </video>
          <youtube
            class="card-img btn p-0 album-img"
            v-if="typeOfMedia(im.path) == 'youtube' && !loading"
            :video-id="getYoutubeKey(getFullMediaLink(im.path))"
            :player-vars="playerVars"
          ></youtube>

          <div class="botmediadess-position" v-if="loading">
            <b-spinner
              style="width: 3rem; height: 3rem; color: #e75c18"
              label="Large Spinner"
            ></b-spinner>
          </div>
          <b-modal hide-footer :id="`modal-${im.id}`" title="Details" size="md">
            <img
              class="card-img"
              :src="getFullMediaLink(im.path)"
              @click="() => showImg(getFullMediaLink(im.path))"
              alt="media_img"
            />
            <p class="my-4">{{ image.content }}</p>
          </b-modal>

          <div
            class="mediadesc"
            v-if="!['youtube'].includes(typeOfMedia(im.path))"
          >
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
                  <b-dropdown-item @click="downloadPic(im)">
                    Download</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="#"
                    @click="setProfilePic(im.id)"
                    v-if="!['video'].includes(typeOfMedia(im.path))"
                    >Make Profile Picture</b-dropdown-item
                  >
                  <b-dropdown-item
                    @click="setCoverPic(im.id)"
                    v-if="!['video'].includes(typeOfMedia(im.path))"
                    >Make Cover Photo</b-dropdown-item
                  >
                  <b-dropdown-item href="#" @click="deleteImage(im.id, cmp)"
                    >Delete</b-dropdown-item
                  >
                </b-dropdown>
              </li>
            </ul>
          </div> -->

          <br />
        </div>
      </div>

      <vue-easy-lightbox
        :visible="visible"
        :imgs="Slideimges"
        :index="currentPicture"
        @hide="handleHide"
      ></vue-easy-lightbox>
    </div>
  </div>
</template>

<script>
import Picture from './imagesItems.vue';
import { mapActions, mapMutations } from 'vuex';
import { fullMediaLink } from '@/helpers';
import { v4 } from 'uuid';

export default {
  components: {
    Picture,
  },
  props: {
    album: {},
    canUpload: {
      type: Boolean,
      default: function() {
        return false;
      },
    },
    albumName: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    hasLoadPicture: {
      type: Boolean,
      default: function() {
        return false;
      },
    },
    images: {
      type: Array,
      required: true,
    },

    showAlbum: {
      type: Boolean,
      default: function() {
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
      currentPicture: 0,
      playerVars: {
        autoplay: 1,
      },
      text: '',
      pattern: null,
    };
  },

  filters: {
    path: fullMediaLink,
  },

  created() {
    this.allImages = this.images;

    this.pattern = {
      profile: () => ({
        submitPost: this.submitPost,
        setProfilePicture: this.setProfilePicture,
        setCoverPicture: this.setCoverPicture,
        deleteImagePicture: this.deleteImagePicture,
        onDownloadPic: this.onDownloadPic,
        getAlbumImages: this.getAlbumImages,
        updateItem: this.updateItem,
      }),
      business: () => ({
        submitPost: this.submitPostBusiness,
        setProfilePicture: this.setProfilePictureBusiness,
        setCoverPicture: this.setCoverPictureBusiness,
        deleteImagePicture: this.deleteImagePictureBusiness,
        onDownloadPic: this.onDownloadPicBusiness,
        getAlbumImages: this.getAlbumImagesBusiness,
        updateItem: this.updateItemBusiness,
      }),
    };

    this.strategy = {
      jpeg: () => 'image',
      jpg: () => 'image',
      png: () => 'image',
      mpeg: () => 'video',
      mp4: () => 'video',
      youtube: () => 'youtube',
      'image/jpeg': () => 'image',
      'image/jpg': () => 'image',
      'image/png': () => 'image',
      'video/mpeg': () => 'video',
      'video/mp4': () => 'video',
    };
    this.loadImages();
    this.url = this.$route.params.id;
  },

  destroyed() {
    this.$emit('reste');
  },

  methods: {
    ...mapActions({
      submitPost: 'UserProfileOwner/submitPost',
      setProfilePicture: 'UserProfileOwner/setProfilePic',
      setCoverPicture: 'UserProfileOwner/setCoverPic',
      deleteImagePicture: 'UserProfileOwner/deleteImage',
      onDownloadPic: 'UserProfileOwner/downloadPic',
      getAlbumImages: 'UserProfileOwner/getAlbumImages',

      submitPostBusiness: 'businessOwner/submitPost',
      setProfilePictureBusiness: 'businessOwner/setProfilePic',
      setCoverPictureBusiness: 'businessOwner/setCoverPic',
      deleteImagePictureBusiness: 'businessOwner/deleteImage',
      onDownloadPicBusiness: 'businessOwner/downloadPic',
      getAlbumImagesBusiness: 'businessOwner/getAlbumImages',
    }),

    ...mapMutations({
      updateItem: 'UserProfileOwner/updateAlbumItem',
      updateItemBusiness: 'businessOwner/updateAlbumItem',
    }),

    getFullMediaLink: fullMediaLink,

    getYoutubeKey(path) {
      let videoID = path.split('v=')[1];
      const ampersandPosition = videoID.indexOf('&');

      if (ampersandPosition != -1) {
        videoID = videoID.substring(0, ampersandPosition);
      }
      return videoID;
    },

    showImg(index) {
      this.currentPicture = this.Slideimges.indexOf(index);
      this.visible = true;
    },

    handleHide() {
      this.visible = false;
    },

    showPic(image) {
      this.image_details = image;
      this.$refs['Details'].show();
    },

    loadImages() {
      const pictures = this.allImages
        .filter(e => e.media.length)
        .map(e => {
          return this.getFullMediaLink(e.media[0].path);
        });

      this.Slideimges = pictures;
    },

    getFileExtension(file) {
      if (file.startsWith('https://www.youtube.com')) return 'youtube';

      const fileArray = file.split('.');
      return fileArray[fileArray.length - 1];
    },

    typeOfMedia(file) {
      try {
        const extension = this.getFileExtension(this.getFullMediaLink(file));
        return 'youtube' == extension ? extension : this.strategy[this.getFileExtension(file)]();
      } catch (error) {
        console.log(error);
        return 'image';
      }
    },

    removePicture(imageID, key) {
      const newImage = this.allImages.map((im, index) => {
        if (index == key) {
          return im.media.filter(i => i.id != imageID);
        } else {
          return im;
        }
      });

      this.allImages = newImage;
    },

    downloadPic(media) {
      this.loading = true;
      this.pattern[this.type]()
        .onDownloadPic(media.id)
        .then(response => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement('a');
          fileLink.href = fileURL;
          fileLink.setAttribute('download', `${v4()}.${this.getFileExtension(media.path)}`);
          document.body.appendChild(fileLink);
          fileLink.click();
          this.flashMessage.show({
            status: 'success',
            message: 'Image Downloaded',
          });
          this.loading = false;
          return false;
        })
        .catch(() => {
          this.sending = false;
          this.loading = false;
          this.flashMessage.show({
            status: 'error',
            message: 'Unable to download ',
          });
          return false;
        });
    },

    deleteImage(id, key) {
      this.loading = true;
      this.pattern[this.type]()
        .deleteImagePicture(id)
        .then(() => {
          this.removePicture(id, key);

          this.pattern[this.type]().updateItem({
            id: this.album,
            action: 'remove',
          });
          this.loading = false;
          this.flashMessage.show({
            status: 'success',
            message: 'Media Deleted',
          });
          return false;
        })
        .catch(() => {
          this.sending = false;
          this.loading = false;
          this.flashMessage.show({
            status: 'error',
            message: 'Unable to delete media',
          });
          return false;
        });
    },
    //set an image as a cover photo

    setCoverPic(id) {
      this.loading = true;
      const data = 'business' == this.type ? { businessID: this.$route.params.id, albumID: id } : id;

      this.pattern[this.type]()
        .setCoverPicture(data)
        .then(() => {
          this.loading = false;
          this.flashMessage.show({
            status: 'success',
            message: 'Cover Picture succesfully set',
          });
          return false;
        })
        .catch(() => {
          this.sending = false;
          this.loading = false;
          this.flashMessage.show({
            status: 'error',
            message: 'Unable to set Cover Picture',
          });
          return false;
        });
    },
    //set image as profile pic

    setProfilePic(id) {
      this.loading = true;
      const data = 'business' == this.type ? { businessID: this.$route.params.id, albumID: id } : id;
      this.pattern[this.type]()
        .setProfilePicture(data)
        .then(() => {
          this.loading = false;
          this.flashMessage.show({
            status: 'success',
            message: 'Profile Picture set',
          });
          return false;
        })
        .catch(() => {
          this.sending = false;
          this.loading = false;
          this.flashMessage.show({
            status: 'error',
            message: 'Unable to set your profile pic',
          });
          return false;
        });
    },

    submitPosts() {
      this.loading = true;
      let albumId = this.album;

      let formData = new FormData();
      formData.append('media', this.profile_pic);
      formData.append('dob', this.text);
      let payload = {
        albumID: albumId,
        businessID: 'business' == this.type ? this.$route.params.id : null,
        data: formData,
      };

      const data = 'business' == this.type ? { businessId: this.$route.params.id, albumId } : albumId;

      this.pattern[this.type]()
        .submitPost(payload)
        .then(() => {
          this.pattern[this.type]().updateItem({ id: albumId, action: 'add' });
          this.pattern[this.type]().getAlbumImages(data);
          this.loading = false;
          this.text = '';
          this.flashMessage.show({
            status: 'success',
            message: 'Media Updated',
            blockClass: 'custom-block-class',
          });
          this.$refs['modalxl'].hide();
        })
        .then(() => {
          this.$emit('reste');
        })
        .catch(() => {
          this.loading = false;

          this.flashMessage.show({
            status: 'error',
            message: 'Unable to submit a post. Size too large. It must be lower or equal to 25Mb',
          });
        });
    },

    selectMoviesOutsidePost(e) {
      this.profile_pic = e.target.files[0];
      const file = e.target.files[0];
      this.img_url = URL.createObjectURL(file);
      this.$refs['modalxl'].show();

      try {
        this.media = this.strategy[this.profile_pic.type]();
      } catch (error) {
        this.media = null;
      }
    },
  },
};
</script>

<style scoped>

.img-gall-height{
  height: 200px;
}
.botmediadess-position {
  text-align: center;
  margin: auto;
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
