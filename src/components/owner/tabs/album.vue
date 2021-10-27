<template>
  <div>
    <FlashMessage class="glash" />
    <div class="row">
      <div class="container-fluid" v-if="showalbum == false">
        <div class="one2">
          <div class="createp img-gall image-wrapp">
            <div class="">
              <a v-b-modal.createalbumModal>
                <div class="drag-textt">
                  <fas-icon :icon="['fas', 'plus']" />
                  <h3>Create Album</h3>
                </div>
              </a>
            </div>
          </div>

          <b-modal hide-footer title="Create album" id="createalbumModal">
            <div ref="creatform">
              <b-form>
                <b-form-input
                  placeholder="Album name"
                  v-model="albumInfo.name"
                ></b-form-input>
                <b-form-input
                  placeholder="Album Type"
                  class="mt-2"
                  v-model="albumInfo.type"
                ></b-form-input>
                <b-button
                  class="mt-2"
                  variant="primary"
                  @click="createAlbums"
                  :disabled="loading || canCreateAlbum"
                >
                  Create</b-button
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
            :canBeUpdate="() => canBeUpdate(album)"
            :showAlbumPictures="() => showAlbumPictures(album)"
            :type="type"
          />
        </div>

        <b-modal hide-footer title="Edit album" ref="editalbum" id="editalbum">
          <div ref="creatform">
            <b-form>
              <b-form-input
                placeholder="Album name"
                v-model="editName"
              ></b-form-input>
              <b-button
                class="mt-2"
                variant="primary"
                @click="update"
                :disabled="loading || editName.trim().length ? false : true"
              >
                Update</b-button
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
                          >Custom Album 1
                          <i class="fa fa-caret-down" aria-hidden="true"></i
                        ></a>
                        <div
                          class="dropdown-menu dropdown-menu-right"
                          aria-labelledby="navbarDropdown"
                        >
                          <a
                            class="dropdown-item"
                            data-toggle="modal"
                            data-target="#namealbumModal"
                            >Edit Name</a
                          >
                          <a class="dropdown-item">Delete Album</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="input-group col-md-12 text-center mb-4 selec">
                    <label class="col-md-4 control-label pr-0 text-design"
                      >14 Items -
                    </label>
                    <div class="col-md-5 pl-0 pr-0">
                      <select id="gender" class="form-control w-100">
                        <option>Public</option>
                        <option>Private</option>
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
        Back
      </b-button>
      <span class="text-center ml-2 f-20"> {{ this.album_name }} </span>

      <Images
        :hasLoadPicture="hasLoadPicture"
        :album="album_id"
        :albumName="album_name"
        :showAlbum="canViewAlbum"
        :canUpload="
          ['profile_picture', 'cover_photo', 'post'].indexOf(album_name) == -1
            ? true
            : canUpload
        "
        :images="albumImages"
        @close:album="() => hidealbum()"
      />
    </div>
  </div>
</template>

<script>
import Images from "./images";
import AlbumItem from "./albumItem";
import { mapActions, mapGetters, mapMutations } from "vuex";

import defaultImage from "@/assets/img/nothing.jpg";

import { fullMediaLink } from "@/helpers";
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
      albumInfo: {
        name: "",
        type: "",
      },
      loading: false,
      editName: "",
      editId: "",
      url: "",
      fullPage: "",
      album_id: "",
      album_name: "",
      album_type: "",
      edit_name: "",
      strategy: null,
    };
  },
  created() {
    this.url = this.$route.params.id;

    this.strategy = {
      business: () => ({
        albums: this.getAlbumsBusiness,
      }),
      profile: () => ({
        albums: this.getAlbumsProfile,
      }),
    };
  },

  filters: {
    path: fullMediaLink,
    plural: function (val) {
      return val ? `${val} items` : "No item";
    },
  },

  computed: {
    ...mapGetters({
      getAlbumsProfile: "UserProfileOwner/getAlbums",
      getAlbumImageProfile: "UserProfileOwner/getAlbumImage",
      albumImagesProfile: "UserProfileOwner/getalbumImages",

      getAlbumsBusiness: "businessOwner/getAlbums",
      getAlbumImageBusiness: "businessOwner/getAlbumImage",
      albumImagesBusiness: "businessOwner/getalbumImages",
    }),

    canCreateAlbum() {
      return this.albumInfo.name && this.albumInfo.type ? false : true;
    },
  },

  methods: {
    ...mapActions({
      createAlbum: "UserProfileOwner/createAlbum",
      updateAlbum: "UserProfileOwner/updateAlbum",
      deleteAlbum: "UserProfileOwner/deleteAlbum",
      getAlbumImages: "UserProfileOwner/getAlbumImages",
      fetchAlbums: "UserProfileOwner/getAlbums",
    }),

    getFullMediaLink: fullMediaLink,

    cover(cover) {
      return cover.length ? this.getFullMediaLink(cover[0]) : defaultImage;
    },

    ...mapMutations({
      mapUpdate: "UserProfileOwner/updateAlbum",
      remove: "UserProfileOwner/removeAlbum",
    }),

    hidealbum() {
      this.showalbum = false;
    },

    showAlbumPictures(album) {
      this.getAlbumImages(album.id)
        .then(() => {
          this.album_id = album.id;
          this.album_name = album.name;
          this.showalbum = true;
          this.hasLoadPicture = false;
        })
        .catch(() => {
          this.hasLoadPicture = false;
        });
    },

    canBeUpdate(album) {
      return ["Profile", "Cover", "post"].includes(album.name) ? false : true;
    },

    createAlbums() {
      this.loading = true;
      this.createAlbum(this.albumInfo)
        .then(() => {
          this.fetchAlbums();
        })
        .then(() => {
          this.$bvModal.hide("createalbumModal");
          this.albumInfo = {
            name: "",
            type: "",
          };
          this.flashMessage.show({
            status: "success",
            message: "Album Created",
          });

          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
          this.sending = false;
          this.$bvModal.hide("createalbumModal");
          this.flashMessage.show({
            status: "error",
            message: "Album already exists with this name",
          });
        });
    },

    editAlbum(item) {
      this.editId = item.id;
      this.editName = item.name;
      this.$refs["editalbum"].show();
    },

    update() {
      this.updateAlbums(this.editId, this.editName);
    },

    updateAlbums(id, name) {
      this.loading = true;

      this.updateAlbum({
        id: id,
        name: name,
      })
        .then(() => {
          this.mapUpdate({ name, id });
          this.$bvModal.hide("editalbum");
          this.flashMessage.show({
            status: "success",
            message: "Album Updated",
          });
          this.loading = false;
          this.editId = "";
          this.editName = "";
        })
        .catch(() => {
          this.sending = false;
          this.flashMessage.show({
            status: "error",
            message: "Unable to update your Album",
          });
        });
    },

    deleteAlbums(id) {
      this.deleteAlbum(id)
        .then(() => {
          this.remove(id);
          this.flashMessage.show({
            status: "success",
            message: "Album Deleted",
          });
        })
        .catch((err) => {
          this.sending = false;

          this.flashMessage.show({
            status: "error",
            message: "Unable to Delete your abum",
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
