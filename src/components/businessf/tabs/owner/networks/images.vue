<template>
  <div>
    <div class="row">
      <div class="container-fluid">
        <div class="img-gall" v-for="pictures in pictures" :key="pictures.id">
          <a href="#!"
            ><img
              class="card-img btn p-0"
              src="@/assets/img/m1.jpg"
              alt=""
              v-b-modal.modal-8
              @click="showPic(pictures.media_url)"
          /></a>

          <b-modal id="modal-8" title="Details">
            <img class="card-img" src="@/assets/img/m1.jpg" alt="" />
            <h4>{{pictures.title}}</h4>
            <p class="my-4">{{pictures.content}}</p>
          </b-modal>
          <div class="mediadesc">
            <ul class="navbar-nav pull-right">
              <li class="nav-item dropdown m-0 p-0">
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
                  <b-dropdown-item @click="downloadPic(pictures.id)">Download</b-dropdown-item>
                  <b-dropdown-item @click="setProfilePic(pictures.id)">Make Profile Picture</b-dropdown-item>
                  <b-dropdown-item @click="setCoverPic(pictures.id)">Make Cover Photo</b-dropdown-item>
                  <b-dropdown-item @click="deleteImage(pictures.id)">Delete</b-dropdown-item>
                </b-dropdown>
              </li>
            </ul>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data: function() {
    return {
      content:null,  
      show_url:null,
      album_id:null,
      url:null,
      fullPage:null,
      img_url: null,
      profile_pic: null,
      text: null,
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

  mounted() {
    this.url = this.$route.params.id;
  },

  computed: {
    pictures() {
      return this.$store.state.businessOwner.albumImages;
    }
  },

  methods: {
      /**
     *
     * @param i
     */
    onClick(i) {
      this.index = i;
    },
    
    showPic(url) {    
      console.log(url);
      this.show_url = url;
      this.$refs["Details"].show();
    },

    downloadPic(image_id) {
      console.log("downloading");
      // let loader = this.$loading.show({
      //   container: this.fullPage,
      //   canCancel: true,
      //   onCancel: this.onCancel,
      //   color: "#e75c18"
      // });
      this.axios
        .get("business/download/media/" + this.url + "/" + image_id, {})
        .then(response => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement("a");
          fileLink.href = fileURL;
          fileLink.setAttribute("download", "file.jpg");
          document.body.appendChild(fileLink);
          fileLink.click();
          this.flashMessage.show({
            status: "success",
            message: "Image Downloaded"
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
              message: "Unable to download "
            });
            console.log({ err: err });
            // loader.hide();
          }
        });
    },

    deleteImage(image_id) {
      console.log("deleting ----------");
      // let loader = this.$loading.show({
      //   container: this.fullPage,
      //   canCancel: true,
      //   onCancel: this.onCancel,
      //   color: "#e75c18"
      // });
      this.axios
        .post("business/delete/media/" + this.url + "/" + image_id, {
          name: this.name
        })
        .then(response => {
          console.log(response.data);
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
              message: "Unable to Delete your Image"
            });
            console.log({ err: err });
            // loader.hide();
          }
        });
    },

    //set an image as a cover photo
    setCoverPic(image_id) {
      // let loader = this.$loading.show({
      //   container: this.fullPage,
      //   canCancel: true,
      //   onCancel: this.onCancel,
      //   color: "#e75c18"
      // });
      this.axios
        .post("business/make/coverpic/" + this.url + "/" + image_id, {
          name: this.name
        })
        .then(response => {
          console.log(response.data);
          this.flashMessage.show({
            status: "success",
            message: "cover Picture succesfully set"
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
              message: "Unable to set your cover picture"
            });
            console.log({ err: err });
            // loader.hide();
          }
        });
    },

    //set image as profile pic
    setProfilePic(image_id) {
      let self = this;
      // let loader = this.$loading.show({
      //   container: this.fullPage ? null : this.$refs.creatform,
      //   canCancel: true,
      //   onCancel: this.onCancel,
      //   color: "#e75c18"
      // });
      this.axios
        .post("business/album/edit/" + this.url + "/" + self.album_id, {
          name: this.name
        })
        .then(response => {
          console.log(response.data);
          this.flashMessage.show({
            status: "success",
            message: "Profile Picture set"
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
              message: "Unable to set your profile pic"
            });
            console.log({ err: err });
            // loader.hide();
          }
        });
    },
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
