<template>
  <div>
    <div class="row">
      <div class="container-fluid">

        <div v-for="post in images" :key="post.id">
          <!-- {{post.id}} -->
          <div class="img-gall" v-for="(image, index) in post.media" :key="index">
            <a href="#!"
              ><b-img
                class="card-img btn p-0"
                thumbnail
                fluid 
                rounded
                :src="image.media_url"
                alt="media_img"
                v-b-modal="'modal-'+image.media_id"
                v-bind="imageProps"
              ></b-img>
            </a>
            <b-modal hide-footer :id="'modal-'+image.media_id" title="Details">
              <img class="card-img" :src="image.media_url"  @click="() => showImg(index)" alt="media_img" />
              <p class="my-4">{{image.post_content[0]}}</p>
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
                    <b-dropdown-item href="#" @click="downloadPic(image.media_id)">Download</b-dropdown-item>
                    <b-dropdown-item href="#" @click="setProfilePic(image.media_id)">Make Profile Picture</b-dropdown-item>
                    <b-dropdown-item href="#" @click="deleteImage(image.media_id)">Delete</b-dropdown-item>
                  </b-dropdown>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <vue-easy-lightbox
          :visible="visible"
          :imgs="Slideimges"
          :index="index"
          @hide="handleHide"
        ></vue-easy-lightbox>

         <FlashMessage />
        <!-- {{images}} -->
        <!-- {{images[0].type}} -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["images"],
  data: function() {
    return {
      show_url:null,
      url:null,
      img_url: null,
      image_details:null,
      file: '',
     
      visible: false,
      index: 0,
      imageProps: {  width: 205, height: 205},
      Slideimges: [],
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
    showImg(index) {
      console.log(index);
      this.index = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
    },
    showPic(image) {    
      console.log(image);
      this.image_details = image;
      this.$refs["Details"].show();
    },
    
    loadImages: function(){
      this.images.forEach(post => {
        post.media.forEach(media => {
          this.Slideimges.push(media.media_url);
        });
      });
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
    addAlbumImage(){
      let formData = new FormData();
      formData.append('file', this.file);
      this.axios.post( 'network/addalbum/image',formData,
        {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        }
      ).then(function(){
        console.log('SUCCESS!!');
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
    handleFileUpload(){
      this.file = this.$refs.file.files[0];
    }
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