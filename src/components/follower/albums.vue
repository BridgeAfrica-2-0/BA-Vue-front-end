<template>
  <div>
    <div v-if="albumShow" class="main-album">
      <div class="p-4 album" v-for="post in posts" :key="post.id">
        <b-img v-if="post.image" :src="post.image" rounded fluid></b-img>
        <div @click="openAlbum" class="overlay">
          <div>
            <span class="text-hover">
              <div>Album Name</div>
              <span> {{ images.length }} item(s)</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="pictureShow">
      <b-button @click="back" variant="primary">Back</b-button>

      <div class="album-detail">
        <div class="album-name"><b>Album Name</b></div>
        <span> {{ images.length }} Pictures </span>
      </div>
      <div class="albums">
        <div v-for="item in images" :key="item.id" class="p-4 image">
          <span class="sp">
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
          <h3>Picture Title</h3>
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
    },
  },
};
</script>

<style scoped>
.main-album {
  display: flex;
  flex-wrap: wrap;
}
.overlay {
  width: 300px;
  height: 150px;
  background-color: #000;
  border-radius: 5px;
  position: relative;
  opacity: 0;
  top: -150px;
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
  top: 80px;
}
.album-detail{
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

.image{
  cursor: pointer;
}
</style>
