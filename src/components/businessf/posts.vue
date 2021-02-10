<template>
  <div class="posts">
    <div class="p-1" v-for="post in posts" :key="post.id">
      <b-img
        v-if="post.image"
        class="image"
        :src="post.image"
        rounded
        fluid
        @click="showModal"
      ></b-img>
    </div>
    <b-modal hide-footer ref="modal-1">
      <b-img fluid-grow src="https://picsum.photos/300/150/?image=41"></b-img>
      <h3>Post Title</h3>
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
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis.",
        },
        {
          id: 2,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis.",
        },
      ],
    };
  },
  methods: {
    /**
    Used for opening modal to have a proper view of the picture
    @param id
    @return void
*/
    showModal() {
      this.$refs["modal-1"].show();
    },
  },
};
</script>

<style scoped>
.posts {
  display: flex;
  flex-wrap: wrap;
}
.image {
  cursor: pointer;
}
.image:hover {
  box-shadow: 5px 10px 8px 2px #888888;
}

.text {
  margin-top: 10px;
}
</style>
