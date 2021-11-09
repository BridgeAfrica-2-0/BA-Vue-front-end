<template>
  <div>
    <fas-icon class="violet mr-2 pt-1 icon-size primary" :icon="['fas', 'file-image']" />Media

    <hr />

    <b-tabs content-class="mt-3" pills>
      <b-tab title="Posts" active @click="getImages">
        <div v-if="!hasLoadPicture">
          <b-spinner class="load" label="Large Spinner"></b-spinner>
        </div>

        <Images
          :canUpload="canUpload"
          :hasLoadPicture="!hasLoadPicture"
          :images="all()"
          :albumName="'notFound'"
          :showAlbum="showAlbum"
          :type="type"
          v-else
        />
      </b-tab>
      <b-tab title="Albums" @click="getAlbums">
        <div v-if="!hasLoadAlbum">
          <b-spinner class="load" label="Large Spinner"></b-spinner>
        </div>
        <Album :canUpload="!canUpload" :type="type" v-else :OwnerRoute="OwnerRoute" />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Album from './album';
import Images from './images';

import _ from 'lodash';

import { mapGetters } from 'vuex';

export default {
  props: {
    type: {
      type: String,
      validator: function (value) {
        return ['profile', 'network', 'business'].indexOf(value) !== -1;
      },
    },
  },
  data: function () {
    return {
      canUpload: false,
      loading: false,
      hasLoadAlbum: false,
      hasLoadPicture: false,
      showAlbum: false,
      strategy: null,
      OwnerRoute: true,
    };
  },

  components: {
    Album,
    Images,
  },

  computed: {
    ...mapGetters({
      getProfilePictures: 'UserProfileOwner/getImages',
      getBusinessPictures: 'businessOwner/getAllImages',
      getBusinessNetwork: 'networkProfileMedia/getAllImages',
    }),
  },

  methods: {
    all() {
      const wrapper = (data) => {
        data
          .filter((img) => img.media.length)
          .map((img) => {
            let render = img.media.map((picture) => {
              return {
                id: img.id,
                content: img.content,
                media: [{ path: picture.path, type: picture.type, id: picture.id }],
              };
            });

            return render;
          });

        return _.flatten(data);
      };
      return wrapper(this.strategy[this.type]().pictures);
    },

    getAlbums() {
      try {
        const type = this.strategy[this.type]();

        //if (!this.hasLoadAlbum) {
        this.$store
          .dispatch(type.album, this.urlData)
          .then(() => {
            this.hasLoadAlbum = true;
          })
          .catch((err) => {
            this.hasLoadAlbum = false;
            console.log(err);
          });
        //}
      } catch (error) {
        console.log(error);
        throw new Error('Invalid type', this.type);
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
          })
          .catch((err) => {
            this.hasLoadPicture = false;
            console.log({ err: err });
          });
        //}
      } catch (error) {
        console.log(error);
        throw new Error('Invalid type', this.type);
      }
    },
  },

  created() {
    this.urlData = this.$route.params.id;

    this.strategy = {
      business: () => ({
        album: 'businessOwner/getAlbums',
        image: 'businessOwner/getImages',
        pictures: this.getBusinessPictures,
      }),
      profile: () => ({
        album: 'UserProfileOwner/getAlbums',
        image: 'UserProfileOwner/getImages',
        pictures: this.getProfilePictures,
      }),
      networks: () => ({
        album: 'networkProfileMedia/getAlbums',
        image: 'networkProfileMedia/getImages',
        pictures: this.getNetworkPictures,
      }),
    };

    this.getImages();
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
