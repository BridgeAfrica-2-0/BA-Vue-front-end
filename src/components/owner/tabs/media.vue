<template>
  <div>
    <fas-icon
      class="violet mr-2 pt-1 icon-size primary"
      :icon="['fas', 'file-image']"
    />{{ $t("profileowner.Media") }}

    <hr />
    <b-tabs content-class="mt-3" v-model="tabIndex" pills>
      <b-tab :title="$t('profileowner.Posts')" @click="getImages">
        <div v-if="!hasLoadPicture">
          <b-spinner
            class="load"
            :label="$t('profileowner.Large_Spinner')"
          ></b-spinner>
        </div>

        <Images
          :isEditor="isEditor"
          :canUpload="true"
          :showCreateForm="false"
          :hasLoadPicture="!hasLoadPicture"
          :images="all()"
          :albumName="'notFound'"
          :showAlbum="showAlbum"
          :type="type"
          v-else
        />
        
      </b-tab>

      <b-tab :title="$t('profileowner.Albums')" @click="getAlbums">
        <div v-if="!hasLoadAlbum">
          <b-spinner class="load" :label="$t('profileowner.Large_Spinner')"></b-spinner>
        </div>
        <Album
          :isEditor="isEditor"
          :type="type"
          v-else
          :getAlbums="getAlbums"
          :getImages="getImages"
          :showCoverAlbum="showCoverAlbum"
        />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Album from "./album";
import Images from "./images";
import { mapGetters } from "vuex";

import _ from "lodash";

export default {
  props: {
    
    type: {
      type: String,
      validator: function(value) {
        return ["profile", "network", "business"].indexOf(value) !== -1;
      },
    },

    showCoverAlbum: {
      type: Boolean,
      default: () => false,
    },

    isEditor: {
      type: Boolean,
      default: () => true,
    },

    isablum: {
      type: Boolean,
    },
  },

  watch: {
    showCoverAlbum: function(newValue){
      if (newValue){
        this.tabIndex = 1
      }else{
        this.tabIndex = 0;
      }
    },

    tabIndex: function(newValue){
      if (newValue){
        this.getAlbums()
      }else{
        this.getImages()
      }
    }

  },

  data: function() {
    return {
      loading: false,
      hasLoadAlbum: false,
      hasLoadPicture: false,
      showAlbum: false,
      strategy: null,
      tabIndex: 0,
      addItem: false,
    };
  },

  components: {
    Album,
    Images,
  },

  computed: {
    ...mapGetters({
      getProfilePictures: "UserProfileOwner/getImages",
      getBusinessPictures: "businessOwner/getAllImages",
      getNetworkPictures: "networkProfileMedia/getImages",
      profile: "auth/profilConnected",
    }),
  },

  methods: {
    all() {
      const wrapper = (data) => {
        const newData = data
          .filter((img) => img.media.length)
          .map((img) => {
            let render = img.media.map((picture) => {
              return {
                id: img.id,
                content: img.content,
                media: { 
                  path: picture.path, 
                  type: picture.type, 
                  id: picture.id,
                  preview_url: picture.preview_url 
                },
              };
            });
            return render;
          });
        return _.flatten(newData);
      };

      return wrapper(this.strategy[this.type]().pictures);
    },

    getAlbums() {
      try {
        const type = this.strategy[this.type]();
        this.hasLoadAlbum = false;
        //if (!this.hasLoadAlbum) {
        this.$store
          .dispatch(type.album, this.urlData)
          .then(() => {
            this.hasLoadAlbum = true;
            this.addItem = true;
          })
          .catch((err) => {
            this.hasLoadAlbum = true;
          })
          .finally(() => console.log("End load album"));
        //}
      } catch (error) {
        console.log(error);
        throw new Error("Invalid type", this.type);
      }
    },

    getImages() {
      try {
        const type = this.strategy[this.type]();
        //if (!this.hasLoadPicture) {
        this.$store
          .dispatch(type.image, this.urlData)
          .then(() => {
            this.hasLoadPicture = true;
            this.addItem = true;
          })
          .catch((err) => {
            this.hasLoadPicture = true;
            this.hasLoadAlbum = true;
          })
          .finally(() => console.log("End load images"));
        //}
      } catch (error) {
        console.log(error);
        throw new Error("Invalid type", this.type);
      }
    },
  },

  created() {
    
    this.urlData = this.$route.params.id
      ? this.$route.params.id
      : this.profile.id;

    if (this.isablum) {
      this.tabIndex = 1;
    }

    if (this.showCoverAlbum) this.tabIndex = 1;
    this.strategy = {
      business: () => ({
        album: "businessOwner/getAlbums",
        image: "businessOwner/getImages",
        pictures: this.getBusinessPictures,
      }),
      profile: () => ({
        album: "UserProfileOwner/getAlbums",
        image: "UserProfileOwner/getImages",
        pictures: this.getProfilePictures,
      }),
      network: () => ({
        album: "networkProfileMedia/getAlbums",
        image: "networkProfileMedia/getImages",
        pictures: this.getNetworkPictures,
      }),
    };

    if (this.showCoverAlbum){
      this.tabIndex = 1;
      this.getAlbums()
    }else{
      this.getImages();
    }

  },
};
</script>

<style scoped>
.load {
  width: 4rem;
  height: 4rem;
  color: rgb(231, 92, 24);
  align-self: center;
  margin: auto;
  display: block;
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
