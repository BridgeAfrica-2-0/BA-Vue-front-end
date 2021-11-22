<template>
  <div>
    <FlashMessage class="glash" />
    <div class="row">
      <div class="container-fluid" v-if="showalbum == false">
        <div class="one2">
          <AlbumItem
            v-for="album in strategy[type]().albums"
            :key="album.id"
            :album="album"
            :editAlbum="() => editAlbum(album)"
            :deleteAlbums="() => deleteAlbums(album.id)"
            :canBeUpdate="!canBeUpdate(album)"
            :showAlbumPictures="() => showAlbumPictures(album)"
            :type="type"
          />
        </div>
      </div>
    </div>
    <!-- show  images in an album -->

    <div class="container-flex" v-if="showalbum">
      <b-button variant="outline-primary" size="sm" @click="hidealbum"> Back </b-button>
      <span class="text-center ml-2 f-20"> {{ this.album_name }} </span>

      <Images
        @update:item="() => updateItem()"
        :hasLoadPicture="hasLoadPicture"
        :album="album_id"
        :type="type"
        :albumName="album_name"
        :showAlbum="canViewAlbum"
        :canUpload="
          ['profile_picture', 'Profile', 'Cover', 'cover_photo', 'logo', 'post'].includes(album_name)
            ? false
            : true || canUpload
        "
        :images="strategy[type]().showAlbumImages"
        @reste="hidealbum"
      />

      <div class="container-fluid" v-if="!strategy[type]().showAlbumImages.length">
        <p style="font-size: 3rem">
          {{ $t('profileowner.No_items_found') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Images from './images';
import AlbumItem from './albumItem';
import { mapActions, mapGetters, mapMutations } from 'vuex';

import defaultImage from '@/assets/img/nothing.jpg';

import { fullMediaLink } from '@/helpers';
export default {
  components: {
    Images,
    AlbumItem,
  },

  props: {
    canUpload: {
      type: Boolean,
    },
    type: {
      type: String,
      require: true,
    },
  },

  data: function () {
    return {
      hasLoadPicture: true,
      canViewAlbum: true,
      showalbum: false,
      OwnerRoute: true,
      albumInfo: {
        name: '',
        type: '',
      },
      loading: false,
      editName: '',
      editId: '',
      url: '',
      fullPage: '',
      album_id: '',
      album_name: '',
      album_type: '',
      edit_name: '',
      strategy: null,
    };
  },
  created() {
    this.url = this.$route.params.id;

    this.strategy = {
      business: () => ({
        albums: this.getAlbumsBusiness,
        showalbum: this.getAlbumProfileImages,
        showAlbumImages: this.albumImagesBusiness,
        createAlbum: this.createAlbumBusiness,
        fetchAlbums: this.fetchAlbumsBusiness,
        deleteAlbum: this.deleteAlbumBusiness,
        remove: this.removeBusiness,
        updateAlbum: this.updateAlbumBusiness,
        mapUpdate: this.mapUpdateBusiness,
      }),
      profile: () => ({
        albums: this.getAlbumsProfile,
        showalbum: this.getAlbumImages,
        showAlbumImages: this.albumImagesProfile,
        createAlbum: this.createAlbum,
        fetchAlbums: this.fetchAlbums,
        deleteAlbum: this.deleteAlbum,
        updateAlbum: this.updateAlbum,
        remove: this.remove,
        mapUpdate: this.mapUpdate,
      }),
    };
  },

  filters: {
    path: fullMediaLink,
    plural: function (val) {
      return val ? `${val} items` : 'No item';
    },
  },

  computed: {
    ...mapGetters({
      getAlbumsProfile: 'UserProfileOwner/getAlbums',
      getAlbumImageProfile: 'UserProfileOwner/getAlbumImage',
      albumImagesProfile: 'UserProfileOwner/getalbumImages',

      getAlbumsBusiness: 'businessOwner/getAlbums',
      getAlbumImageBusiness: 'businessOwner/getAlbumImage',
      albumImagesBusiness: 'businessOwner/getalbumImages',
    }),

    canCreateAlbum() {
      return this.albumInfo.name && this.albumInfo.type ? false : true;
    },
  },

  methods: {
    ...mapActions({
      createAlbum: 'UserProfileOwner/createAlbum',
      updateAlbum: 'UserProfileOwner/updateAlbum',
      deleteAlbum: 'UserProfileOwner/deleteAlbum',
      getAlbumImages: 'UserProfileOwner/getAlbumImages',
      fetchAlbums: 'UserProfileOwner/getAlbums',

      createAlbumBusiness: 'businessOwner/createAlbum',
      getAlbumProfileImages: 'businessOwner/getAlbumImages',
      fetchAlbumsBusiness: 'businessOwner/getAlbums',
      deleteAlbumBusiness: 'businessOwner/deletedAlbum',
      updateAlbumBusiness: 'businessOwner/updatedAlbum',
    }),

    getFullMediaLink: fullMediaLink,

    cover(cover) {
      return cover.length ? this.getFullMediaLink(cover[0]) : defaultImage;
    },

    ...mapMutations({
      mapUpdate: 'UserProfileOwner/updateAlbum',
      remove: 'UserProfileOwner/removeAlbum',

      mapUpdateBusiness: 'businessOwner/updateAlbum',
      removeBusiness: 'businessOwner/removeAlbum',
    }),

    hidealbum() {
      this.showalbum = false;
    },

    showAlbumPictures(album) {
      const credentials =
        'business' == this.type
          ? {
              data: { businessId: this.$route.params.id, albumId: album.id },
            }
          : { data: album.id };

      return this.strategy[this.type]()
        .showalbum(credentials.data)
        .then(() => {
          this.album_id = album.id;
          this.album_name = album.name;
          this.showalbum = true;
          this.hasLoadPicture = false;
          return true;
        })
        .catch(() => {
          this.hasLoadPicture = false;
          return false;
        });
    },

    canBeUpdate(album) {
      return ['profile_picture', 'Profile', 'Cover', 'cover_photo', 'logo', 'post', 'follower'].includes(album.name)
        ? false
        : true;
    },

    createAlbums() {
      this.loading = true;

      const data = 'business' == this.type ? { id: this.$route.params.id, data: this.albumInfo } : this.albumInfo;

      this.strategy[this.type]()
        .createAlbum(data)
        .then(() => {
          this.strategy[this.type]().fetchAlbums(this.$route.params.id);
        })
        .then(() => {
          this.$bvModal.hide('createalbumModal');
          this.albumInfo = {
            name: '',
            type: '',
          };
          this.flashMessage.show({
            status: 'success',
            message: 'Album Created',
          });

          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
          this.sending = false;
          this.$bvModal.hide('createalbumModal');
          this.flashMessage.show({
            status: 'error',
            message: 'Album already exists with this name',
          });
        });
    },

    editAlbum(item) {
      this.editId = item.id;
      this.editName = item.name;
      this.$refs['editalbum'].show();
    },

    update() {
      this.updateAlbums(this.editId, this.editName);
    },

    updateAlbums(id, name) {
      this.loading = true;

      this.strategy[this.type]()
        .updateAlbum({
          id: id,
          name: name,
        })
        .then(() => {
          this.strategy[this.type]().mapUpdate({ name, id });
          this.$bvModal.hide('editalbum');
          this.flashMessage.show({
            status: 'success',
            message: 'Album Updated',
          });
          this.loading = false;
          this.editId = '';
          this.editName = '';
        })
        .catch(() => {
          this.sending = false;
          this.flashMessage.show({
            status: 'error',
            message: 'Unable to update your Album',
          });
        });
    },

    deleteAlbums(id) {
      const data = 'business' == this.type ? { businessID: this.$route.params.id, albumID: id } : id;

      this.strategy[this.type]()
        .deleteAlbum(data)
        .then(() => {
          this.strategy[this.type]().remove(id);
          this.flashMessage.show({
            status: 'success',
            message: 'Album Deleted',
          });
        })
        .catch((err) => {
          this.sending = false;

          this.flashMessage.show({
            status: 'error',
            message: 'Unable to Delete your abum',
          });
        });
    },
  },
};
</script>

<style scoped>
._vue-flash-msg-body._vue-flash-msg-body_success,
._vue-flash-msg-body._vue-flash-msg-body_error {
  z-index: 10000 !important;
}
.options {
  background: #e75c18 !important;
  border-radius: 50%;
}
</style>

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

  .image-wrapp {
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

  .image-wrapp {
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

  .image-wrapp {
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
