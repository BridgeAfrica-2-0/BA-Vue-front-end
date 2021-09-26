<template>
  <div>
    <div class="row">
      <div class="container-fluid">
        <div class="createp img-gall image-wrapp">
          <div class=" ">
            <a href="#" v-b-modal.addAlbumImageModal>
              <div class="drag-textt">
                <fas-icon :icon="['fas', 'plus']" />
                <h3>Add Image</h3>
              </div>
            </a>
          </div>
        </div>
        <b-modal hide-footer title="Add Album Image" id="addAlbumImageModal" @keyup.enter="addAlbumImage(album.album_id)">
          <b-form>
            <div class="row pb-3">
              <div class="col-sm-6 text-center" style="border-right:1px solid #dee2e6;">
                <h1>
                  <fas-icon class="primary" :icon="['fas', 'upload']" />
                </h1>
                <div>
                  <input type="file" id="file" ref="file" @change="onFileChange" name="img" accept="image/*" />
                </div>
                <h4>Upload Album New picture</h4>
              </div>
              <div v-if="selectedImagePrv" class="col-sm-6 text-center">
                <b-img v-bind="imageProps" thumbnail fluid rounded :src="selectedImagePrv" alt="Rounded image"></b-img>
              </div>
            </div>
            <b-button class="mt-2" modal-cancel variant="primary" @click="addAlbumImage(album.album_id)"> Upload</b-button>
          </b-form>
        </b-modal>

          <div class="img-gall" v-for="image in album.media" :key="image.id">
            <a href="#!"
              ><b-img
                class="card-img btn p-0"
                thumbnail
                fluid 
                rounded
                :src="image.media_url"
                alt="image-img"
                v-b-modal="'modal-'+image.id"
                v-bind="imageProps"
              ></b-img>
            </a>
            <b-modal hide-footer :id="'modal-'+image.id" title="Details">
              <img class="card-img" :src="image.media_url" alt="media_img" />
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
                    <b-dropdown-item href="#" @click="downloadPic(image.id)">Download</b-dropdown-item>
                    <b-dropdown-item href="#" @click="setProfilePic(image.id)">Make Profile Picture</b-dropdown-item>
                    <b-dropdown-item href="#" @click="deleteImage(image.id)">Delete</b-dropdown-item>
                  </b-dropdown>
                </li>
              </ul>
            </div>
          </div>
         <FlashMessage />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["album"],
  data: function() {
    return {
      show_url:null,
      url:null,
      img_url: null,
      image_details:null,
      selectedImagePrv: '',
      fileToUpload: '',
      // images: [
      //   "https://placekitten.com/801/800",
      //   "https://placekitten.com/802/800",
      //   "https://placekitten.com/803/800",
      //   "https://placekitten.com/804/800",
      //   "https://placekitten.com/805/800",
      //   "https://placekitten.com/806/800",
      //   "https://placekitten.com/807/800",
      //   "https://placekitten.com/808/800",
      //   "https://placekitten.com/809/800"
      // ],
      // imagees: [
      //   "https://i.wifegeek.com/200426/f9459c52.jpg",
      //   "https://i.wifegeek.com/200426/5ce1e1c7.jpg",
      //   "https://i.wifegeek.com/200426/5fa51df3.jpg",
      //   "https://i.wifegeek.com/200426/663181fe.jpg",
      //   "https://i.wifegeek.com/200426/2d110780.jpg",
      //   "https://i.wifegeek.com/200426/e73cd3fa.jpg",
      //   "https://i.wifegeek.com/200426/15160d6e.jpg",
      //   "https://i.wifegeek.com/200426/d0c881ae.jpg",
      //   "https://i.wifegeek.com/200426/a154fc3d.jpg",
      //   "https://i.wifegeek.com/200426/71d3aa60.jpg",
      //   "https://i.wifegeek.com/200426/d17ce9a0.jpg",
      //   "https://i.wifegeek.com/200426/7c4deca9.jpg",
      //   "https://i.wifegeek.com/200426/64672676.jpg",
      //   "https://i.wifegeek.com/200426/de6ab9c6.jpg",
      //   "https://i.wifegeek.com/200426/d8bcb6a7.jpg",
      //   "https://i.wifegeek.com/200426/4085d03b.jpg",
      //   "https://i.wifegeek.com/200426/177ef44c.jpg",
      //   "https://i.wifegeek.com/200426/d74d9040.jpg",
      //   "https://i.wifegeek.com/200426/81e24a47.jpg",
      //   "https://i.wifegeek.com/200426/43e2e8bb.jpg"
      // ],
      index: 0,
      imageProps: {  width: 205, height: 205}
    };
  },
  mounted(){
    this.url = this.$route.params.id;
  },
  methods: {
    /**
     *
     * @param i
     */
    onClick(i) {
      this.index = i;
    },



    showPic(image) {    
      console.log(image);
      this.image_details = image;
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
        .get("network/download/media/" + this.url + "/" + image_id, {})
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
        .post("network/delete/media/" + this.url + "/" + image_id, {
          name: this.name
        })
        .then(response => {
          console.log(response.data);
          this.$emit('ownerPostImages');
          this.flashMessage.show({
            status: "success",
            message: "Image Deleted"
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

    //set image as profile pic
    setProfilePic(image_id) {
      // let self = this;
      // let loader = this.$loading.show({
      //   container: this.fullPage ? null : this.$refs.creatform,
      //   canCancel: true,
      //   onCancel: this.onCancel,
      //   color: "#e75c18"
      // });
      this.axios
        .post("network/make/profile/" + this.url + "/" + image_id)
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

    addAlbumImage(album_id){
      console.log('media[0] '+this.fileToUpload);
      console.log('album_id '+album_id);
      let formData = new FormData();
      formData.append('media[0]', this.fileToUpload);
      this.axios.post( 'network/store/media/'+this.url+'/'+album_id, formData,
        {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        }
      ).then(function(){
        console.log('SUCCESS!!');
        this.$emit('albumImages');
        this.flashMessage.show({
          status: "success",
          message: "Picture Added"
        });
      })
      .catch(function(){
        console.log('FAILURE!!');
        this.flashMessage.show({
          status: "error",
          message: "Unable to Added Picture"
        });
      });
    },

    onFileChange(e) {
      this.fileToUpload = this.$refs.file.files[0];
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },

    createImage(file) {
      let reader = new FileReader();
      let vm = this;
      reader.onload = e => {
        vm.selectedImagePrv = e.target.result;
      };
      reader.readAsDataURL(file);
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