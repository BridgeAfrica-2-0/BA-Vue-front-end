<template>
  <div>
    <div class="row" >
      <div class="container-fluid" v-if="!showalbum">
        <div class="one2">
          <div class="createp img-gall image-wrapp img-size" v-if="isEditor" v-b-modal.createalbumModal>
            <div class="">
              <a>
                <div class="drag-textt">
                  <fas-icon :icon="['fas', 'plus']" />
                  <h3>{{ $t('profileowner.Create_Album') }}</h3>
                </div>
              </a>
            </div>
          </div>

          <b-modal hide-footer :title="$t('profileowner.Create_album')" id="createalbumModal">
            <div ref="creatform">
              <b-form>
                <b-form-input :placeholder="$t('profileowner.Album_name')" v-model="albumInfo.name"></b-form-input>
                <b-button class="mt-2" variant="primary" @click="createAlbums" :disabled="loading || canCreateAlbum">
                  {{ $t('profileowner.Create') }}</b-button
                >
              </b-form>
            </div>
          </b-modal>

          <AlbumItem
            v-for="album in strategy[type]().albums"
            :key="album.id"
            :album="album"
            :editAlbum="() => editAlbum(album)"
            :deleteAlbums="() => deleteAlbums(album.id)"
            :canBeUpdate="canBeUpdate(album)"
            :showAlbumPictures="() => showAlbumPictures(album)"
            :type="type"
            :isEditor="isEditor"
            :showCoverAlbum="
              showCoverAlbum ? 
              'Cover' == album_name ? true : false
              : false"
          />
        </div>

        <b-modal hide-footer title="Edit album" ref="editalbum" id="editalbum">
          <div ref="creatform">
            <b-form>
              <b-form-input :placeholder="$t('profileowner.Album_name')" v-model="editName"></b-form-input>
              <b-button
                class="mt-2"
                variant="primary"
                @click="update"
                :disabled="loading ? true : editName.trim().length ? false : true"
              >
                {{ $t('profileowner.Update') }}</b-button
              >
            </b-form>
          </div>
        </b-modal>

        <div class="two2 d-none">
          <div class="row">
            <div class="container">
              <div class="col-md-4 mx-auto">
                <form>
                  <div class="form-group col-md-12 text-center mb-3">
                    <ul class="navbar-nav">
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle1"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          >{{ $t('profileowner.Custom_Album_1') }} <i class="fa fa-caret-down" aria-hidden="true"></i
                        ></a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" data-toggle="modal" data-target="#namealbumModal">{{
                            $t('profileowner.Edit_Name')
                          }}</a>
                          <a class="dropdown-item">{{ $t('profileowner.Delete_Album') }}</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="input-group col-md-12 text-center mb-4 selec">
                    <label class="col-md-4 control-label pr-0 text-design">{{ $t('profileowner.14_Items') }} - </label>
                    <div class="col-md-5 pl-0 pr-0">
                      <select id="gender" class="form-control w-100">
                        <option>{{ $t('profileowner.') }}</option>
                        <option>{{ $t('profileowner.PublicPrivate') }}</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- show  images in an album -->

    <div class="container-flex" v-if="showalbum">
      <b-button variant="outline-primary" size="sm" @click="hidealbum">
        {{ $t('profileowner.Back') }}
      </b-button>
      <span class="text-center ml-2 f-20"> {{ album_name }}</span>

      <Images

        :isAlbum="true"
        @update:item="() => updateItem()"
        :showCreateForm="isEditor"
        :hasLoadPicture="hasLoadPicture"
        :album="album_id"
        :type="type"
        :albumName="album_name"
        :showAlbum="canViewAlbum"
        :isEditor="isEditor"
        :canUpload="
          ['profile_picture', 'Profile', 'Cover', 'cover_photo', 'Cover Photo', 'logo', 'Logo', 'post'].includes(
            album_name,
          )
        "
        :images="strategy[type]().showAlbumImages"
        @reste="hidealbum"

      />
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
    isEditor: {
      type: Boolean,
      required: true,
    },

    showCoverAlbum:{
      type:Boolean,
      default: () => false
    },

    type: {
      type: String,
      require: true,
    },
    
    getImages: {},
    getAlbums: {},
  },

  data: function () {
    return {
      key:1,
      hasLoadPicture: true,
      canViewAlbum: true,
      showalbum: false,
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
    this.url = this.$route.params.id ? this.$route.params.id : this.profile.id;

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

      network: () => ({
        albums: this.getAlbumsNetwork,
        showalbum: this.getAlbumNetworkImages,
        showAlbumImages: this.albumImagesNetwork,
        createAlbum: this.createAlbumNetwork,
        fetchAlbums: this.fetchAlbumsNetwork,
        deleteAlbum: this.deleteAlbumNetwork,
        updateAlbum: this.updateAlbumNetwork,
        remove: this.removeNetwork,
        mapUpdate: this.mapUpdateNetwork,
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

      getAlbumsNetwork: 'networkProfileMedia/getAlbums',
      getAlbumImageNetwork: 'networkProfileMedia/getAlbumImage',
      albumImagesNetwork: 'networkProfileMedia/getAlbumImages',

      profile: 'auth/profilConnected'
    }),

    canCreateAlbum() {
      return this.albumInfo.name ? false : true;
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

      createAlbumNetwork: 'networkProfileMedia/createAlbum',
      getAlbumNetworkImages: 'networkProfileMedia/getAlbumImages',
      fetchAlbumsNetwork: 'networkProfileMedia/getAlbums',
      deleteAlbumNetwork: 'networkProfileMedia/deletedAlbum',
      updateAlbumNetwork: 'networkProfileMedia/updatedAlbum',
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

      mapUpdateNetwork: 'networkProfileMedia/updateAlbum',
      removeNetwork: 'networkProfileMedia/removeAlbum',
    }),

    hidealbum() {
      this.showalbum = false;
    },

    showAlbumPictures(album) {
      this.key = this.key++
      const credentials =
        'business' == this.type || 'network' == this.type
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
      return ['profile_picture', 'Profile', 'Cover', 'cover_photo', 'Cover Photo', 'logo', 'Logo', 'post'].includes(
        album.name,
      )
        ? false
        : true;
    },

    createAlbums() {
      this.loading = true;

      const data =
        'business' == this.type || 'network' == this.type
          ? { id: this.$route.params.id, data: this.albumInfo }
          : this.albumInfo;

      this.strategy[this.type]()
        .createAlbum(data)
        .then(() => {
          this.strategy[this.type]().fetchAlbums(this.$route.params.id ? this.$route.params.id: this.profile.id);
          
        })
        .then(() => {
          this.$bvModal.hide('createalbumModal');
          this.albumInfo = {
            name: '',
            type: '',
          };
          this.flashMessage.show({
            status: 'success',
            message: this.$t('general.Album_Created')
          });

          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
          this.sending = false;
          this.$bvModal.hide('createalbumModal');
          this.flashMessage.show({
            status: 'error',
            message: error.response.data.message,
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
        .catch((error) => {
          this.sending = false;
          this.loading = false;
          this.flashMessage.show({
            status: 'error',
            message: error.response.data.message,
          });
        });
    },

    deleteAlbums(id) {
      const data =
        'business' == this.type || 'network' == this.type ? { businessID: this.$route.params.id, albumID: id } : id;

      this.strategy[this.type]()
        .deleteAlbum(data)
        .then(() => {
          this.strategy[this.type]().remove(id);
          this.flashMessage.show({
            status: 'success',
            message: 'Album Deleted',
          });
        })
        .catch((error) => {
          this.sending = false;

          this.flashMessage.show({
            status: 'error',
            message: error.response.data.message,
          });
        });
    },
  },
};
</script>

<style scoped>
.img-size {
  width: 266px !important;
  height: 266px !important;
}
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
  width: 120px;
  height: 120px;
  position: absolute;
  top: 25%;
  left: 25%;
}
</style>
