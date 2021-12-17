<template>
  <div>
    <div class="row">
        
      <div class="container-fluid" v-if="showalbum == false">
        <div class="one2">
          <div v-for="album in albums" :key="album.id">
            <div class="createp img-gall predit2">
              <a href="#!" @click="showlbum(album.album_id, album.album_name)">
                <b-img v-if="album.album_cover.length != 0"
                  class="card-img"
                  :src="album.album_cover[0]"
                  alt="album-img"
                ></b-img>
                <b-img v-else
                  class="card-img"
                  v-bind="albumProps" 
                  rounded 
                  alt="album_img"
                ></b-img>
                <div class="createdesc botmedia">
                  <div class="botmediades">
                    <h6>{{album.album_name}}</h6>
                    <p>{{album.almbum_item_number}} {{ $t('memnetwork.Item_s') }}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
    <!-- show  images in an album -->

    <div class="container-flex" v-if="showalbum == true">
      <b-button variant="outline-primary" size="sm" @click="hidealbum">
        {{ $t('memnetwork.Back') }}
      </b-button>
      <span class="text-center ml-2"> {{this.albumName}} </span>

      <Album :album="albumimages" @albumImages="albumImages" />
    </div>
  </div>
</template>

<script>
import Album from "./album";

export default {
  components: { Album },
  props:["albums"],
  data: function() {
    return {
      url: null,
      albumId: null,
      albumName: null,
      showalbum: false,
      selectedImagePrv: "",

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
      form: {
        name: ""
      },
      albumProps: { blank: true, blankColor: '#777', width: 150, height: 165, class: 'm1' }
    };
  },
  computed: {
    albumimages() {
      return this.$store.state.networkProfileMedia.albumimages;
    },
  },
  mounted(){
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
      console.log('album Id: '+this.albumId+' album name: '+this.albumName);
      this.albumImages();
    },
    
    getAlbumId(album_Id) {
      this.albumId = album_Id;
      console.log('album Id: '+this.albumId);
    },

    onClick(i) {
      this.index = i;
    },
    
    albumImages() {
      console.log('Got album(network id:'+this.url+'album id:'+this.albumId+')');
    this.$store
      .dispatch("networkProfileMedia/getAlbumImages", this.url+"/"+this.albumId)
      .then(() => {
        console.log('Got album(network id)');
      })
      .catch(err => {
        console.log({ err: err });
      });
    },

    createAlbum: function(){
      // let loader = this.$loading.show({
      //   container: this.fullPage,
      //   canCancel: true,
      //   onCancel: this.onCancel,
      //   color: "#e75c18"
      // });
      let formData = new FormData();
      formData.append('name', this.form.name);
      this.axios.post("network/album/create/"+this.url, formData)
      .then(() => {
        console.log('ohh yeah');
        this.$emit('ownerAlbums');
        // loader.hide();
        this.flashMessage.show({
          status: "success",
          message: this.$t('general.Album_Created'),
        });
      })
      .catch(err => {
        console.log({ err: err });
        // loader.hide();
        this.flashMessage.show({
          status: "error",
          message: "Unable to Created Album"
        });
      });
		},

    updateAlbum: function(){
      let formData = new FormData();
      formData.append('name', this.form.name);
      this.axios.post("network/album/update/"+this.url+"/"+this.albumId, formData)
      .then(() => {
        console.log('ohh yeah');
        this.$emit('ownerAlbums');
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
          this.$emit('ownerAlbums');
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
