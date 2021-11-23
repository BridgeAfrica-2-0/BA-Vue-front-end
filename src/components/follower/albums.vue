<template>
  <div>
    <div v-if="albumShow" class="main-album">
      <div class="p-4 album" v-for="post in posts" :key="post.id">
        <b-img
          v-if="post.image"
          :src="post.image"
          width="250"
          rounded
          fluid
        ></b-img>
        <div @click="openAlbum" class="overlay">
          <div>
            <span class="text-hover">
              <div>{{ $t('profilefollower.Album_Name') }}</div>
              <span> {{images.length}} {{ $t('profilefollower.item_s') }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="pictureShow">
      <b-button @click="back" variant="primary">{{ $t('profilefollower.Back') }}</b-button>

      <div class="album-detail">
        <div class="album-name"><b>{{ $t('profilefollower.Album_Name') }}</b></div>
        <span> {{ images.length }} {{ $t('profilefollower.Pictures') }} </span>
      </div>
      <div class="albums">
        <div v-for="item in images" :key="item.id" class="p-4 image">
          <span class="sp">
            <b-icon icon="download" class="download" variant="primary"></b-icon>
            <b-img
              @click="modalShow = !modalShow"
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
          <b-row>
            <h3 class="ml-3">{{ $t('profilefollower.Picture_Title') }}</h3>
            <b-icon
              icon="download"
              class="download-view mt-1"
              variant="primary"
            ></b-icon>
          </b-row>
        </b-modal>
      </div>
    </div>
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
      ]
    };
  },
  methods: {
    openAlbum() {
      this.pictureShow = true;
      this.albumShow = false;
    },
    back() {
      this.pictureShow = false;
      this.albumShow = true;
    },
    showModal() {
      this.$refs["modal-1"].show();
    }
  }
};
</script>

<style scoped>
.main-album {
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
  top: -125px;
  color: #fff;
  text-align: center;
  cursor: pointer;
}
.album:hover .overlay {
  opacity: 0.5;
  color: #e75d29;
}
.text-hover {
  position: relative;
  top: 60px;
}
.album-detail {
  text-align: center;
}
.album-name {
  color: #e75d29;
  margin-top: -30px;
}
.albums {
  display: flex;
  flex-wrap: wrap;
}

.image {
  cursor: pointer;
}
.download {
  position: relative;
  left: 320px;
  top: -70px;
}

.download:hover {
  height: 20px;
}

.download-view {
  cursor: pointer;
  margin-left: 300px;
}

@media only screen and (max-width: 768px) {
  .album {
    margin-left: 35px;
  }
  .pic {
    margin-left: 28px;
  }
}
</style>
