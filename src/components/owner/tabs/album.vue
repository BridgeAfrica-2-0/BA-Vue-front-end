<template>
  <div>
    <FlashMessage />
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
                <b-button class="mt-2" variant="primary" @click="createAlbums">
                  Create</b-button
                >
              </b-form>
            </div>
          </b-modal>

          <div
            class="createp img-gall predit2"
            v-for="album in getAlbums"
            :key="album.id"
          >
            <a>
              <span @click="showlbum(album.id, album.name)">
                <img class="card-img album-img" :src="album.cover" alt="" />
              </span>

              <div class="botmediadess">
                <p>
                  {{ album.name }} <br />
                  {{ album.items }} Items
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

                    <b-dropdown-item @click="editAlbum(album.id)"
                      >Edit</b-dropdown-item
                    >

                    <b-dropdown-item @click="deleteAlbums(album.id)"
                      >Delete</b-dropdown-item
                    >
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
                placeholder="Album name"
                v-model="editName"
              ></b-form-input>
              <b-button class="mt-2" variant="primary" @click="update">
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

    <div class="container-flex" v-if="showalbum == true">
      <b-button variant="outline-primary" size="sm" @click="hidealbum">
        Back
      </b-button>
      <span class="text-center ml-2 f-20"> {{ this.album_name }} </span>

      <Images v-bind:album="album_id" />
    </div>
  </div>
</template>

<script>
import Images from "./images";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { Images },
  data: function() {
    return {
      showalbum: false,
      albumInfo: {
        name: "",
        type: "",
      },
      editName: "",
      editId: "",
      url: "",
      fullPage: "",
      album_id: "",
      album_name: "",
      album_type: "",
      edit_name: "",
    };
  },
  mounted() {
    this.url = this.$route.params.id;
  },

  computed: {
    ...mapGetters({
      getAlbums: "UserProfileOwner/getAlbums",
      getAlbumImage: "UserProfileOwner/getAlbumImage",
    }),
  },
  beforeMount() {
    this.getAlbums;
    this.getAlbumImages;
  },
  methods: {
    ...mapActions({
      createAlbum: "UserProfileOwner/createAlbum",
      updateAlbum: "UserProfileOwner/updateAlbum",
      deleteAlbum: "UserProfileOwner/deleteAlbum",
      getAlbumImages: "UserProfileOwner/getAlbumImages",
    }),

    hidealbum() {
      this.showalbum = false;
    },
    showlbum(id, name) {
      this.album_name = name;
      this.album_id = id;
      this.getAlbumImages(id)
        .then(() => {
          console.log("hey yeah photo loaded");
          this.showalbum = true;
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    createAlbums() {
      this.createAlbum(this.albumInfo)
        .then(() => {
          this.flashMessage.show({
            status: "success",
            message: "Album Created",
          });
          this.getAlbums();
        })
        .catch((err) => {
          this.sending = false;
          if (err.response.status == 422) {
            console.log({ err: err });
            this.flashMessage.show({
              status: "error",
              message: err.response.data.message,
            });
          } else {
            this.flashMessage.show({
              status: "error",
              message: "Unable to create your Album",
            });
            console.log({ err: err });
          }
        });
    },

    editAlbum(id) {
      this.editId = id;
      console.log(this.editId);
      this.$refs["editalbum"].show();
    },

    update() {
      this.updateAlbums(this.editId, this.editName);
    },

    updateAlbums(id, name) {
      let user = {
        id: id,
        name: name,
      };
      this.updateAlbum(user)
        .then(() => {
          this.flashMessage.show({
            status: "success",
            message: "Album Updated",
          });
        })
        .catch((err) => {
          this.sending = false;
          if (err.response.status == 422) {
            console.log({ err: err });
            this.flashMessage.show({
              status: "error",
              message: err.response.data.message,
            });
          } else {
            this.flashMessage.show({
              status: "error",
              message: "Unable to create your Album",
            });
            console.log({ err: err });
          }
        });
    },

    deleteAlbums(id) {
      this.deleteAlbum(id)
        .then(() => {
          this.flashMessage.show({
            status: "success",
            message: "Album Deleted",
          });
        })
        .catch((err) => {
          this.sending = false;
          if (err.response.status == 422) {
            console.log({ err: err });
            this.flashMessage.show({
              status: "error",
              message: err.response.data.message,
            });
          } else {
            this.flashMessage.show({
              status: "error",
              message: "Unable to Delete your abum",
            });
            console.log({ err: err });
          }
        });
    },
  },
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
