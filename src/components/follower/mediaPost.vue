<template>
  <div class="media-post">
    <div class="p-4" v-for="post in posts" :key="post.id">
      <b-img
        v-if="post.image"
        class="image"
        :src="post.image"
        rounded
        fluid
        @click="showModal"
      ></b-img>

      <iframe
        class="image"
        v-if="post.video"
        width="300"
        height="150"
        rounded
        :src="post.video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <b-modal hide-footer ref="modal-1">
      <b-img fluid-grow src="https://picsum.photos/300/150/?image=41"></b-img>
      <h3>{{ $t('profilefollower.Post_Title') }}</h3>
      <p class="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id
        sit consequuntur tempora molestiae blanditiis.
      </p>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          video: "https://www.youtube.com/embed/nMBQrM1FHZw",
          title: "Title 1",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
        },
        {
          id: 2,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
        }
      ]
    };
  },
  methods: {
    showModal() {
      this.$refs["modal-1"].show();
    }
  }
};
</script>

<style scoped>
.media-post {
  display: flex;
  flex-wrap: wrap;
}
.image {
  cursor: pointer;
  height: 200px;
  width: 200px;
}
.image:hover {
  box-shadow: 5px 10px 8px 2px #888888;
}

.text {
  margin-top: 10px;
}
@media only screen and (max-width: 768px) {
  .image {
    margin-left: 26px;
    height: 104px;
    width: 150px;
  }
}
</style>
