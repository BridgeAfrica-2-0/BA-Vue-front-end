<template>
  <div>
    <b-card class=" border shadow ">
      <h6 class="title">
        <fas-icon class="icons" :icon="['fas', 'video']" /> <b> {{ $t('dashboard.title') }}</b>
      </h6>

      <div class="s-card">
        <b-row>
          <b-col cols="6" class="m-media" v-for="post in posts" :key="post.id">
            <div class="container-fluid  " v-if="post.video">
              <b-embed
                type="iframe"
                aspect="16by9"
                :src="post.video"
                allowfullscreen
                class="s-embed"
              ></b-embed>
              <p class="text">
                {{ $t('dashboard.video_name') }} <br />
                {{ $t('dashboard.video_description') }}
              </p>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          video: "https://www.youtube.com/embed/JKJECtmqviQ",
          title: "Title 1",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
        },

        {
          id: 2,
          video: "https://www.youtube.com/embed/xVISKL18jLs",
          title: "Title 1",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
        },

        {
          id: 4,
          video: "https://www.youtube.com/embed/nMBQrM1FHZw",
          title: "Title 1",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
        },

        {
          id: 5,
          video: "https://www.youtube.com/embed/iPhGrDZhaAU",
          title: "Title 1",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
        },
        {
          id: 7,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
        }
      ]
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

    /**
     *
     * @param id
     */
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
@media only screen and (min-width: 768px) {
  .title {
    font-size: 20px;
  }

  .text {
    font-size: 14px;
  }
}

@media only screen and (max-width: 768px) {
  .title {
    font-size: 16px;
  }

  .text {
    font-size: 12px;
  }
}

.embed-responsive-16by9 {
  height: 200px;
}
.s-embed {
  border-radius: 10px;
}

.s-card {
  height: 540px;
  overflow: auto;
  overflow-x: hidden;
}
</style>
