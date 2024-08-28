<template>
  <div class="p-3">
    <div class="row">
      <div class="container-fluid" v-if="showalbum == false">
        <div class="one2">
          <div class="createp img-gall image-wrapp">
            <div class="">
              <a v-b-modal.createalbumModal>
                <div class="drag-textt">
                  <fas-icon :icon="['fas', 'plus']" />
                  <h3>{{ $t("businessowner.Create_Album") }}</h3>
                </div>
              </a>
            </div>
          </div>

          <b-modal hide-footer title="Create album" id="createalbumModal">
            <div ref="creatform">
              <b-form>
                <b-form-input
                  :placeholder="$t('general.Album_name')"
                  v-model="name"
                ></b-form-input>
                <b-button class="mt-2" variant="primary" @click="createAlbum">
                  {{ $t("businessowner.Create") }}</b-button
                >
              </b-form>
            </div>
          </b-modal>

          <div
            class="createp img-gall predit2"
            v-for="albums in albums"
            :key="albums.id"
          >
            <a>
              <span @click="showlbum(albums.id, albums.album_name)">
                <img class="card-img album-img" :src="albums.media[0]" alt="" />
              </span>

              <div class="botmediadess">
                <p>
                  {{ albums.album_name }} <br />
                  {{ albums.item_number }} {{ $t("businessowner.Items") }}
                </p>
              </div>
            </a>

            <div class="mediadesc">
              <ul class="navbar-nav pull-right">
                <li class="nav-item dropdown">
                  <b-dropdown
                    size="sm"
                    class=" call-action"
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

                    <b-dropdown-item
                      @click="editAlbum(albums.id, albums.album_name)"
                      >{{ $t("businessowner.Edit") }}</b-dropdown-item
                    >

                    <b-dropdown-item @click="deleteAlbum(albums.id)">{{
                      $t("businessowner.Delete")
                    }}</b-dropdown-item>
                  </b-dropdown>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <b-modal
          hide-footer
          title="Create album"
          ref="editalbum"
          id="editalbum"
        >
          <div ref="creatform">
            <b-form>
              <b-form-input
                :placeholder="$t('general.Album_name')"
                v-model="edit_name"
              ></b-form-input>
              <b-button
                class="mt-2"
                variant="primary"
                @click="updateAlbum(edit_id)"
              >
                {{ $t("businessowner.Update") }}</b-button
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
                          >{{ $t("businessowner.Custom_Album") }} 1
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
                            >{{ $t("businessowner.Edit_Name") }}</a
                          >
                          <a class="dropdown-item">{{
                            $t("businessowner.Delete_Album")
                          }}</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="input-group col-md-12 text-center mb-4 selec">
                    <label class="col-md-4 control-label pr-0 text-design"
                      >14 {{ $t("businessowner.Items") }} -
                    </label>
                    <div class="col-md-5 pl-0 pr-0">
                      <select id="gender" class="form-control w-100">
                        <option>{{ $t("businessowner.Public") }}</option>
                        <option>{{ $t("businessowner.Private") }}</option>
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

    <div class="container-flex" v-if="showalbum == true">
      <b-button variant="outline-primary" size="sm" @click="hidealbum">
        {{ $t("businessowner.Back") }}
      </b-button>
      <span class="text-center ml-2 f-20"> {{ album_name }} </span>

      <Images :album="album_id" />
    </div>
  </div>
</template>

<script>
import Images from "./image";
import { mapActions } from "vuex";
export default {
  components: { Images },
  data: function() {
    return {
      showalbum: false,
      name: null,
      url: null,
      fullPage: null,
      album_id: null,
      album_name: null,
      edit_id: null,
      edit_name: null,
      images: [],
      imagees: [],
      index: 0
    };
  },
  methods: {
    hidealbum() {
      this.showalbum = false;
    },
    showlbum(abum_id, album_name) {
      this.album_name = album_name;
      this.album_id = abum_id;

      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.creatform,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18"
      });
      const albumUrl = this.url + "/" + abum_id;
      this.$store
        .dispatch("businessOwner/getAlbumImages", albumUrl)
        .then(() => {
          console.log("hey yeah photo loaded");
          this.showalbum = true;
          loader.hide();
        })
        .catch(err => {
          console.log({ err: err });
          loader.hide();
        });
    },
    onClick(i) {
      this.index = i;
    },
    editAlbum(album_id, album_name) {
      this.edit_id = album_id;
      this.edit_name = album_name;
      this.$refs["editalbum"].show();
    },

    ...mapActions({
      createAlbumm: "businessOwner/createAlbum",
      updateAlbumm: "businessOwner/updateAlbum",
      deleteAlbumm: "businessOwner/deleteAlbum",
      getAlbums: "businessOwner/getAlbums"
    }),

    createAlbum() {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.creatform,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18"
      });
      this.createAlbumm({ name: this.name, id: this.url })
        .then(response => {
          this.flashMessage.show({
            status: "success",
            message: this.$t("general.Album_Created")
          });
          this.getAlbums(this.url);
          loader.hide();
        })
        .catch(err => {
          this.sending = false;
          if (err.response.status == 422) {
            console.log({ err: err });
            this.flashMessage.show({
              status: "error",
              message: err.response.data.message
            });
            loader.hide();
          } else {
            this.flashMessage.show({
              status: "error",
              message: this.$t("general.Unable_to_create_your_Album")
            });
            console.log({ err: err });
            loader.hide();
          }
        });
    },

    updateAlbum(album) {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.creatform,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18"
      });
      this.updateAlbumm({ name: this.edit_name, url: this.url, id: album })
        .then(() => {
          this.flashMessage.show({
            status: "success",
            message: "Album Updated"
          });
          this.getAlbums(this.url);
          loader.hide();
          this.$refs["editalbum"].hide();
        })
        .catch(err => {
          this.sending = false;
          if (err.response.status == 422) {
            console.log({ err: err });
            this.flashMessage.show({
              status: "error",
              message: err.response.data.message
            });
            loader.hide();
          } else {
            this.flashMessage.show({
              status: "error",
              message: this.$t("general.Unable_to_create_your_Album")
            });
            console.log({ err: err });
            loader.hide();
          }
        });
    },

    deleteAlbum(album) {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.creatform,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18"
      });
      this.deleteAlbumm({ url: this.url, id: album })
        .then(() => {
          this.flashMessage.show({
            status: "success",
            message: "Album Deleted"
          });
          this.getAlbums(this.url);
          loader.hide();
        })
        .catch(err => {
          this.sending = false;
          if (err.response.status == 422) {
            console.log({ err: err });
            this.flashMessage.show({
              status: "error",
              message: err.response.data.message
            });
            loader.hide();
          } else {
            this.flashMessage.show({
              status: "error",
              message: "Unable to Delete your abum"
            });
            console.log({ err: err });
            loader.hide();
          }
        });
    }
  },

  beforeMount() {
    this.url = this.$route.params.id;
    this.getAlbums(this.url);
  },
  computed: {
    albums() {
      return this.$store.state.businessOwner.albums;
    }
  }
};
</script>

<style>
.call-action {
  border-radius: 50%;
  background: gray;
  height: 30px !important;
  width: 30px !important;
  font-weight: 50px !important;
  text-align: center;
  padding-right: 35px !important;
}
.text-design {
  align-items: first baseline;
}

.drop-color {
  color: black;
}

.botmediadess {
  text-align: center;
  bottom: -5%;
  width: 100%;
  font-size: 20px;
}

@media (min-width: 960px) {
  .album-img {
    height: 300px !important;
    object-fit: contain !important;
  }

  .drag-textt {
    height: 290px !important;
    padding-top: 95px;
  }

  .f-20 {
    font-size: 20px;
  }

  .img-gall {
    background-size: contain;
    cursor: pointer;
    margin: 10px;
    border-radius: 3px;
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
  .album-img {
    height: 300px !important;
    object-fit: contain !important;
  }

  .drag-textt {
    height: 290px !important;
    padding-top: 95px;
  }

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
  .album-img {
    height: 200px !important;
    object-fit: contain !important;
  }

  .drag-textt {
    height: 190px !important;
    padding-top: 55px;
  }

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
