<template>
  <div>
    <div v-if="albumShow" class="albums ml-4">
      <div class="create" @click="createAlbum">
        <div class="text">
          <b-icon icon="plus"></b-icon>
          <p>Create Album</p>
        </div>
      </div>

      <div class="p-1 album ml-2" v-for="post in posts" :key="post.id">
        <b-img
          @click="openAlbum"
          v-if="post.image"
          :src="post.image"
          rounded
          fluid
        ></b-img>
        <span class="album-text">
          <div>Album Name</div>
          <span> {{ images.length }} item(s)</span>
        </span>
        <b-dropdown
          class="options"
          variant="outline"
          size="sm"
          id="dropdown-left"
        >
          <template #button-content>
            <b-icon icon="three-dots" aria-hidden="true"></b-icon>
          </template>
          <b-dropdown-item-button>
            <b-icon icon="pencil-fill" aria-hidden="true"></b-icon>
            Edit
          </b-dropdown-item-button>
          <b-dropdown-item-button>
            <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
            Delete
          </b-dropdown-item-button>
        </b-dropdown>
      </div>
    </div>

    <div v-if="pictureShow">
      <b-button @click="back" variant="primary">Back</b-button>

      <div class="album-name">Album Name</div>
      <div class="albums">
        <div class="create sec" @click="chooseFile">
          <input id="default-btn" type="file" />
          <div class="text">
            <b-icon icon="plus"></b-icon>
            <p>Add Photo</p>
          </div>
        </div>
        <div v-for="item in images" :key="item.id" class=" ml-5 album">
          <span class="sp">
            <b-img
              @click="view"
              src="https://picsum.photos/300/150/?image=41"
              rounded
              fluid
              class="pic"
            ></b-img>
          </span>
        </div>
        <b-modal hide-footer v-model="modalShow">
          <b-img
            fluid-grow
            src="https://picsum.photos/300/150/?image=41"
          ></b-img>
          <h3>Picture Title</h3>
        </b-modal>
      </div>
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
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis.",
        },
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis.",
        },
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis.",
        },
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis.",
        },
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis.",
        },
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis.",
        },
      ],
      images: [
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
        },
        {
          id: 2,
          image: "https://picsum.photos/300/150/?image=41",
        },
      ],
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
    openAlbum() {
      this.pictureShow = true;
      this.albumShow = false;
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
  },
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
  height: 150px;
  color: #fff;
  background-color: #bbb;
  padding: 20px;
  width: 300px;
  top: 5px;
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
  margin-top: 20px;
}

.album {
  height: 160px;
  cursor: pointer;
}
.options {
  position: relative;
  top: -170px;
  left: 190px;
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
