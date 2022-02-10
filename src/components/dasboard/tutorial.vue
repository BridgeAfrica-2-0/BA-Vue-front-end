<template>
  <div>
    <b-card class=" border shadow ">
      <h6 class="title">

        <fas-icon class="icons" :icon="['fas', 'video']" /> <b> {{ $t('dashboard.Tutorial') }}</b>

      </h6>

      <div class="s-card">
        <b-row>
          <b-col
            cols="6"
            class="m-media m-0 p-0 mt-2"
            v-for="post in posts"
            :key="post.id"
          >
            <div class="container-fluid px-1 px-md-2" v-if="post.video">
              <b-embed
                type="iframe"
                aspect="16by9"
                :src="post.video"
                allowfullscreen
                class="s-embed"
              ></b-embed>
              <!-- <p class="text">

                {{ $t('dashboard.video_name') }} <br />
                {{ $t('dashboard.video_description') }}

              </p> -->
            </div>
          </b-col>
        </b-row>
   <br>  

   <p class="text-center"> 
        <b-link href="https://www.youtube.com/watch?v=-4oUr7s_aD4&list=PLFJI1PXxh7D5dohknvccnaWBIUb7wP1f2&index=12">  View More  </b-link>
    
     </p> 
     
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
          video: "https://www.youtube.com/embed/X7ZK3elhVGI",
           },

        {
          id: 2,
          video: "https://www.youtube.com/embed/0-QElbdS65o",
          },

        {
          id: 4,  
          video: "https://www.youtube.com/embed/embed/-h4VD53PHHY",
         },

        {
          id: 5,
          video: "https://www.youtube.com/embed/vbgShfVz9Iw",
         },
        {
          id: 6,
          video: "https://www.youtube.com/embed/FFd3M5tBGmo",
          },


           {
          id: 7,
          video: "https://www.youtube.com/embed/yaXcd-okF5I",
          },



           {
          id: 8,
          video: "https://www.youtube.com/embed//BJ1fRB37XRg",
          },



           {
          id: 9,
          video: "https://www.youtube.com/embed/hdXKfd10hP0",
          },


            {
          id: 10,
          video: "https://www.youtube.com/embed/c3qwM7K3134",
          },


            {
          id: 11,
          video: "https://www.youtube.com/embed/qlJIwRI1AEI",
          },


            {
          id: 12,
          video: "https://www.youtube.com/embed/-4oUr7s_aD4",
          },



            {
          id: 13,
          video: "https://www.youtube.com/embed/xE_MDyTftuY",
          },


        

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

  .embed-responsive-16by9 {
    height: 150px !important;
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
