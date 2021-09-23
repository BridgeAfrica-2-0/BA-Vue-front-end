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
                  v-model="name"
                ></b-form-input>
                <b-button class="mt-2" variant="primary" @click="createAlbum">
                  Create</b-button
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
                <img class="card-img album-img" :src="albums.cover[0]" alt="" />
              </span>

              <div class="botmediadess">
                <p>
                  {{ albums.album_name }} <br />
                  {{ albums.item_number }} Items
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
                      >Edit</b-dropdown-item
                    >

                    <b-dropdown-item @click="deleteAlbum(albums.id)"
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
                v-model="edit_name"
              ></b-form-input>
              <b-button
                class="mt-2"
                variant="primary"
                @click="updateAlbum(edit_id)"
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
                    <label
                      class="col-md-4 control-label pr-0 text-design"
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
      <span class="text-center ml-2 f-20"> {{ album_name }} </span>

      <Images v-bind:album="album_id" />
    </div>
  </div>
</template>

<script>
import Images from "./images";
import axios from "axios";
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
      images: [
        "https://placekitten.com/801/800",
        "https://placekitten.com/802/800",
        "https://placekitten.com/803/800",
        "https://placekitten.com/804/800",
        "https://placekitten.com/805/800",
        "https://placekitten.com/806/800",
        "https://placekitten.com/807/800",
        "https://placekitten.com/808/800",
        "https://placekitten.com/809/800"
      ],
      imagees: [
        "https://i.wifegeek.com/200426/f9459c52.jpg",
        "https://i.wifegeek.com/200426/5ce1e1c7.jpg",
        "https://i.wifegeek.com/200426/5fa51df3.jpg",
        "https://i.wifegeek.com/200426/663181fe.jpg",
        "https://i.wifegeek.com/200426/2d110780.jpg",
        "https://i.wifegeek.com/200426/e73cd3fa.jpg",
        "https://i.wifegeek.com/200426/15160d6e.jpg",
        "https://i.wifegeek.com/200426/d0c881ae.jpg",
        "https://i.wifegeek.com/200426/a154fc3d.jpg",
        "https://i.wifegeek.com/200426/71d3aa60.jpg",
        "https://i.wifegeek.com/200426/d17ce9a0.jpg",
        "https://i.wifegeek.com/200426/7c4deca9.jpg",
        "https://i.wifegeek.com/200426/64672676.jpg",
        "https://i.wifegeek.com/200426/de6ab9c6.jpg",
        "https://i.wifegeek.com/200426/d8bcb6a7.jpg",
        "https://i.wifegeek.com/200426/4085d03b.jpg",
        "https://i.wifegeek.com/200426/177ef44c.jpg",
        "https://i.wifegeek.com/200426/d74d9040.jpg",
        "https://i.wifegeek.com/200426/81e24a47.jpg",
        "https://i.wifegeek.com/200426/43e2e8bb.jpg"
      ],
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
      console.log(abum_id);
      console.log("yoo yoo yooy ");
      console.log(this.url);
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.creatform,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18"
      });
      const albumUrl = this.url + "/" + abum_id;
      this.$store
        .dispatch("UserProfileOwner/getAlbumImages", albumUrl)
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
    deleteAlbum(album_id) {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.creatform,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18"
      });
      axios
        .post("business/album/edit/" + this.url + "/" + album_id, {
          name: this.name
        })
        .then(response => {
          console.log(response.data);
          this.flashMessage.show({
            status: "success",
            message: "Album Deleted"
          });
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
    },
    updateAlbum(album_id) {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.creatform,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18"
      });
      axios
        .post("business/album/update/" + this.url + "/" + album_id, {
          name: this.edit_name
        })
        .then(response => {
          console.log(response.data);
          this.flashMessage.show({
            status: "success",
            message: "Album Updated"
          });
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
              message: "Unable to create your Album"
            });
            console.log({ err: err });
            loader.hide();
          }
        });
    },
    createAlbum() {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.creatform,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18"
      });
      axios
        .post("business/album/create/" + this.url, {
          name: this.name
        })
        .then(response => {
          console.log(response.data);
          this.flashMessage.show({
            status: "success",
            message: "Album Created"
          });
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
              message: "Unable to create your Album"
            });
            console.log({ err: err });
            loader.hide();
          }
        });
    }
  },
  mounted() {
    this.url = this.$route.params.id;
  },
  computed: {
    albums() {
      return this.$store.state.UserProfileOwner.albums;
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
