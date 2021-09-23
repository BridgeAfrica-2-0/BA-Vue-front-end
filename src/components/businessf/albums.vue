<template>
  <div>
    <b-row>
      <div v-if="albumShow" class="albums ml-4">
        <b-col cols="4">
          <div class="create" @click="createAlbum">
            <div class="text">
              <b-icon icon="plus"></b-icon>
              <p>Create Album</p>
            </div>
          </div>
        </b-col>
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
          <b-dropdown
              class="options"
              variant="primary"
              size="sm"
              id="dropdown-left"
          >
            <template #button-content>
              <b-icon icon="three-dots" aria-hidden="true"></b-icon>
            </template>
            <b-dropdown-item-button @click="openAlbum">
              <b-icon icon="pencil-fill" aria-hidden="true"></b-icon>
              Edit
            </b-dropdown-item-button>
            <b-dropdown-item-button>
              <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
              Delete
            </b-dropdown-item-button>
          </b-dropdown>
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
      posts: [
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
    openAlbum(id) {
      id = id - 1;
      this.pictureShow = true;
      this.albumShow = false;
      this.album.splice(0, 1);
      this.album.push(this.albums[id].items);
      console.log(this.album);
    },
    back() {
      this.pictureShow = false;
      this.albumShow = true;
    },
    showModal() {
      this.$refs["modal-1"].show();
    },
    open(){
      this.modalShow = !this.modalShow
    }
  },
};
</script>

<style scoped>
.albums {
  display: flex;
  flex-wrap: wrap;
}
.overlay {
  width: 250px;
  height: 125px;
  background-color: #000;
  border-radius: 5px;
  position: relative;
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
  top: -125px;
  color: #fff;
  background-color: #bbb;
  padding: 20px;
  width: inherit;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}
.album:hover .overlay {
  opacity: 0.5;
  color: #e75d29;
}
.text-hover {
  position: relative;
  top: 40px;
}
.album-detail {
  text-align: center;
}
.album-name {
  color: #e75d29;
  text-align: center;
  top: -40px;
}

.text {
  margin-top: 15%;
}

.album {
  cursor: pointer;
}
.options {
  position: relative;
  top: -187px;
  left: 174px;
  margin-top: -30px;
}
.albums {
  display: flex;
  flex-wrap: wrap;
}
.image-album {
  width: inherit;
  height: fit-content;
}

.image {
  cursor: pointer;
}

.imag {
  width: 250px;
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
  .imag {
    width: 200px;
  }
  .overlay {
    width: 200px;
    height: 100px;
    top: -100px;
  }
}
</style>
