<template>
  <div class="posts">
    <b-row>
      <b-col cols="6" class="" v-for="post in posts" :key="post.id">
        <div class="container-fluid" v-if="post.video">
          <b-embed
            type="iframe"
            aspect="16by9"
            :src="post.video"
            allowfullscreen
          ></b-embed>
        </div>

        <b-img
          v-if="post.image"
          class="image img-fluid"
          :src="post.image"
          rounded
          fluid
          @click="showModal"
        ></b-img>
        <b-dropdown
          class="options"
          variant="primary"
          size="sm"
          id="dropdown-left"
        >
          <template #button-content>
            <b-icon icon="three-dots" aria-hidden="true"></b-icon>
          </template>
          <b-dropdown-item-button v-on:click="deletePost(post.id)">
            <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
            {{ $t('network.Delete') }} 
          </b-dropdown-item-button>
        </b-dropdown>
      </b-col>
    </b-row>
    <b-modal hide-footer ref="modal-1">
      <b-img fluid-grow src="https://picsum.photos/300/150/?image=41"></b-img>
      <h3>{{ $t('network.Post_Title') }} </h3>
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
  name: 'networkPosts',
  data() {
    return {
      posts: [
        
      ]
    };
  },
  methods: {
  
    showModal() {
      this.$refs["modal-1"].show();
    },

    postDescription(id){
        var post=this.posts(id);
        return post.text;
    },
    deletePost(id) {
      const index = id - 1;
      if (index > -1) {
        this.posts.splice(index, 1);
      }
    }
  }
};
</script>

<style scoped>
.image {
  cursor: pointer;
  width: inherit;
  height: auto;
}
.image:hover {
  box-shadow: 5px 10px 8px 2px #888888;
}

.text {
  margin-top: 10px;
}
.options {
  position: relative;
  top: -34px;
  left: 25px;
}
</style>
