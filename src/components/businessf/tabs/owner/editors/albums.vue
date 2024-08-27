<template>
  <div>
    <div class="row">
      <div class="container-fluid" v-if="showalbum == false">
        <div class="one2">
          <div class="createp img-gall image-wrapp">
            <div class=" ">
              <a href="#" v-b-modal.addAlbumModal>
                <div class="drag-textt">
                  <fas-icon :icon="['fas', 'plus']" />
                  <h3>Create Album</h3>
                </div>
              </a>
            </div>
          </div>

          <b-modal
            hide-footer
            title="Create album"
            id="addAlbumModal"
            @keyup.enter="createAlbum()"
          >
            <b-form>
              <b-form-input
                id="name"
                :placeholder="$t('general.Album_name')"
                v-model="form.name"
                name="name"
              ></b-form-input>
              <b-button
                class="mt-2"
                modal-cancel
                variant="primary"
                @click="createAlbum()"
              >
                Create</b-button
              >
            </b-form>
          </b-modal>

          <div v-for="album in albums" :key="album.id">
            <div class="createp img-gall predit2">
              <a href="#!" @click="showlbum(album.album_id, album.album_name)">
                <b-img
                  v-if="album.album_cover.length != 0"
                  class="card-img"
                  :src="album.album_cover[0]"
                  alt="album-img"
                ></b-img>
                <b-img
                  v-else
                  class="card-img"
                  v-bind="albumProps"
                  rounded
                  alt="album_img"
                ></b-img>
                <div class="createdesc botmedia">
                  <div class="botmediades">
                    <h6>{{ album.album_name }}</h6>
                    <p>{{ album.almbum_item_number }} Item(s)</p>
                  </div>
                </div>
              </a>
              <div class="mediadesc">
                <ul class="navbar-nav pull-right">
                  <li class="nav-item dropdown">
                    <b-dropdown
                      size="sm"
                      class="float-right"
                      variant="link"
                      toggle-class="text-decoration-none"
                      no-caret
                    >
                      <template #button-content>
                        <fas-icon
                          class="drop-color font-weight-bolder"
                          :icon="['fas', 'ellipsis-v']"
                        />
                      </template>

                      <b-dropdown-item
                        href="#"
                        v-b-modal.editAlbumModal
                        @click="getAlbumId(album.album_id)"
                        >Edit</b-dropdown-item
                      >

                      <b-dropdown-item
                        href="#"
                        @click="deleteAlbum(album.album_id)"
                        >Delete</b-dropdown-item
                      >
                    </b-dropdown>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <b-modal hide-footer title="Create album" id="editAlbumModal">
            <b-form>
              <b-form-input
                id="name"
                :placeholder="$t('general.Album_name')"
                v-model="form.name"
                name="name"
              ></b-form-input>
              <b-button
                class="mt-2"
                modal-cancel
                variant="primary"
                @click="updateAlbum()"
              >
                Update</b-button
              >
            </b-form>
          </b-modal>
        </div>

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
                    <label
                      class="col-md-4 control-label pr-0 text-design"
                      for="name"
                      >14 Items -
                    </label>
                    <div class="col-md-5 pl-0 pr-0">
                      <select id="gender" class="form-control w-100">
                        <option>{{ $t("network.Public") }}</option>
                        <option>{{ $t("network.Private") }}</option>
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
        Back
      </b-button>
      <span class="text-center ml-2"> {{ this.albumName }} </span>

      <Album :album="albumimages" @albumImages="albumImages" />
    </div>
  </div>
</template>

<script>
import Album from "./album";

export default {
  components: { Album },
  props: ["albums"],
  data: function() {
    return {
      url: null,
      albumId: null,
      albumName: null,
      showalbum: false,
      selectedImagePrv: "",
      index: 0,
      form: {
        name: ""
      },
      albumProps: {
        blank: true,
        blankColor: "#777",
        width: 150,
        height: 165,
        class: "m1"
      }
    };
  },
  computed: {
    albumimages() {
      return this.$store.state.networkProfileMedia.albumimages;
    }
  },
  mounted() {
    this.url = this.$route.params.id;
  },
  methods: {
    hidealbum() {
      this.showalbum = false;
    },

    showlbum(album_Id, album_name) {
      this.albumId = album_Id;
      this.albumName = album_name;
      this.showalbum = true;
      console.log(
        "album Id: " + this.albumId + " album name: " + this.albumName
      );
      this.albumImages();
    },

    getAlbumId(album_Id) {
      this.albumId = album_Id;
      console.log("album Id: " + this.albumId);
    },

    onClick(i) {
      this.index = i;
    },

    albumImages() {
      console.log(
        "Got album(network id:" + this.url + "album id:" + this.albumId + ")"
      );
      this.$store
        .dispatch(
          "networkProfileMedia/getAlbumImages",
          this.url + "/" + this.albumId
        )
        .then(() => {
          console.log("Got album(network id)");
        })
        .catch(err => {
          console.log({ err: err });
        });
    },

    createAlbum: function() {
      // let loader = this.$loading.show({
      //   container: this.fullPage,
      //   canCancel: true,
      //   onCancel: this.onCancel,
      //   color: "#e75c18"
      // });
      let formData = new FormData();
      formData.append("name", this.form.name);
      this.axios
        .post("network/album/create/" + this.url, formData)
        .then(() => {
          console.log("ohh yeah");
          this.$emit("ownerAlbums");
          // loader.hide();
          this.flashMessage.show({
            status: "success",
            message: this.$t("general.Album_Created")
          });
        })
        .catch(err => {
          console.log({ err: err });
          // loader.hide();
          this.flashMessage.show({
            status: "error",
            message: this.$t("general.Unable_to_Create_Your_Album")
          });
        });
    },

    updateAlbum: function() {
      let formData = new FormData();
      formData.append("name", this.form.name);
      this.axios
        .post("network/album/update/" + this.url + "/" + this.albumId, formData)
        .then(() => {
          console.log("ohh yeah");
          this.$emit("ownerAlbums");
          this.flashMessage.show({
            status: "success",
            message: "Album Updated"
          });
        })
        .catch(err => {
          console.log({ err: err });
          this.flashMessage.show({
            status: "error",
            message: "Unable to Update Album"
          });
        });
    },

    deleteAlbum(album_id) {
      console.log("deleting ----------");
      // let loader = this.$loading.show({
      //   container: this.fullPage,
      //   canCancel: true,
      //   onCancel: this.onCancel,
      //   color: "#e75c18"
      // });
      this.axios
        .delete("network/album/delete/" + this.url + "/" + album_id)
        .then(response => {
          console.log(response.data);
          this.$emit("ownerAlbums");
          this.flashMessage.show({
            status: "success",
            message: "Album Deleted"
          });
          // loader.hide();
        })
        .catch(err => {
          this.sending = false;
          if (err.response.status == 422) {
            console.log({ err: err });
            this.flashMessage.show({
              status: "error",
              message: err.response.data.message
            });
            // loader.hide();
          } else {
            this.flashMessage.show({
              status: "error",
              message: "Unable to Delete your Album"
            });
            console.log({ err: err });
            // loader.hide();
          }
        });
    }
  }
};
</script>

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

  .img-gall {
    position: relative;
    margin: 5px;
    float: left;
    width: 18.7%;
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
    width: 18.7%;
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
    width: 47%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }
}
</style>
