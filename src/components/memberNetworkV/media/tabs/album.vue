<template>
  <div>
    <b-row>
      <div v-if="albumShow" class="albums ml-4">
  
        <b-col cols="4" class="my-auto" v-for="post in albums" :key="post.id">
          <b-img
            @click="openAlbum(post.id)"
            class="image-album"
            v-if="post.items[0].image"
            :src="post.items[0].image"
          ></b-img>
          <span class="album-text">
            <div>{{ post.name }}</div>
            <span> {{ post.items.length }} item(s)</span>
          </span>
        </b-col>
      </div>
    </b-row>

    <div v-if="pictureShow">
      <b-button @click="back" variant="primary">Back</b-button>

      <div class="album-name">Album Name</div>
      <b-row>
        <div class="albums">
          <b-modal hide-footer v-model="modalShow">
            <b-img
              fluid-grow
              src="https://picsum.photos/300/150/?image=41"
            ></b-img>
            <h3>Picture Title</h3>
          </b-modal>
        </div>
        <b-col md="4" class="mt-2">
          <div class="create sec" @click="chooseFile">
            <input id="default-btn" type="file" @change="onFileChange" />
            <div class="text">
              <b-icon icon="plus"></b-icon>
              <p>Add Photo</p>
            </div>
          </div>
        </b-col>
        <b-col md="4" v-if="image" class="album mt-2">
          <b-img @click="view" :src="image" class="image-album"></b-img>
        </b-col>
        <b-col
          md="4"
          v-for="item in album[0]"
          :key="item.id"
          class="album mt-2"
        >
          <b-img @click="view" :src="item.image" class="image-album"></b-img>
        </b-col>
      </b-row>
    </div>

    <b-modal hide-footer title="Create album" v-model="showModal">
      <b-form>
        <b-form-input v-model="text" placeholder="Album name"></b-form-input>
        <b-button class="mt-2" variant="primary"> Create</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      albumShow: true,
      pictureShow: false,
      modalShow: false,
      showModal: false,
      text: "",
      posts: [
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
        },
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
        },
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
        },
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
        },
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
        },
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
        }
      ],
      images: [
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41"
        },
        {
          id: 2,
          image: "https://picsum.photos/300/150/?image=41"
        }
      ],

      albums: [
        {
          id: 1,
          name: "Album 1",
          items: [
            {
              id: 1,
              image:
                "https://business.bridgeafrica.info/assets/img/portfolio/media2.png"
            },
            {
              id: 2,
              image:
                "https://business.bridgeafrica.info/assets/img/portfolio/media3.png"
            }
          ]
        },
        {
          id: 2,
          name: "Album 2",
          items: [
            {
              id: 1,
              image:
                "https://business.bridgeafrica.info/assets/img/portfolio/media.png"
            },
            {
              id: 2,
              image:
                "https://business.bridgeafrica.info/assets/img/portfolio/media2.png"
            },
            {
              id: 3,
              image:
                "https://business.bridgeafrica.info/assets/img/portfolio/media3.png"
            }
          ]
        },

        {
          id: 3,
          name: "Album 3",
          items: [
            {
              id: 1,
              image:
                "https://business.bridgeafrica.info/assets/img/portfolio/media2.png"
            },
            {
              id: 2,
              image:
                "https://business.bridgeafrica.info/assets/img/portfolio/media3.png"
            },
            {
              id: 3,
              image:
                "https://business.bridgeafrica.info/assets/img/portfolio/media.png"
            },
            {
              id: 4,
              image:
                "https://business.bridgeafrica.info/assets/img/portfolio/media3.png"
            }
          ]
        }
      ],

      album: [],
      image: ""
    };
  },
  methods: {
    /**

     Use to view the photo in the album
     @param id
    @return void
    */
    view() {
      this.modalShow = !this.modalShow;
    },

    /**
        Used for opening album
         @param id
        @return void
    */
    openAlbum(id) {
      id = id - 1;
      this.pictureShow = true;
      this.albumShow = false;
      this.album.splice(0, 1);
      this.album.push(this.albums[id].items);
      console.log(this.album);
    },

    /**

     Shows modal and create Album
    @param id
    @return void
    */
    createAlbum() {
      this.showModal = !this.showModal;
    },

    /**
     Used to leave an opened Album
    @param id
    @return void
    */
    back() {
      this.pictureShow = false;
      this.albumShow = true;
    },

    /**
      Used for Choosing a file from device file system
       @param id
      @return void
      */
    chooseFile() {
      var defaultBtn = document.getElementById("default-btn");
      defaultBtn.click();
    },
    /**
     *
     * @param e
     */
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    /**
     *
     * @param file
     */
    createImage(file) {
      // const image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    removeImage: function() {
      this.image = "";
    }
  }
};
</script>

<style scoped>
.albums {
  display: flex;
  flex-wrap: wrap;
}

.pic-name {
  position: relative;
  left: -200px;
  color: white;
  font-weight: 200;
  opacity: 0;
}

.album-text {
  position: relative;
  left: 50px;
  top: -60px;
  color: white;
}

.create {
  position: relative;
  /* height: auto; */
  color: #fff;
  background-color: #bbb;
  padding: 20px;
  width: inherit;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}

.album-name {
  position: relative;
  color: #e75d29;
  text-align: center;
  top: -40px;
}

.text {
  margin-top: 15%;
}

.album {
  /*width: inherit;*/
  /*height: auto;*/
  cursor: pointer;
}
.options {
  position: relative;
  top: -187px;
  left: 62px;
}
.image-album {
  width: inherit;
  height: fit-content;
}

input[type="file"] {
  display: none;
}
@media only screen and (max-width: 768px) {
  .albums {
    position: relative;
    left: -25px;
  }

  .album {
    margin-top: 10px;
  }

  .create {
    left: 15px;
    cursor: pointer;
    bottom: 10px;
  }
  .options {
    position: relative;
    top: -150px;
    left: 120px;
  }

  .create {
    margin-left: -1px;
    height: 120px;
    width: 250px;
  }
  .sec {
    position: relative;
    left: 50px;
    width: 245px;
  }
}
</style>
