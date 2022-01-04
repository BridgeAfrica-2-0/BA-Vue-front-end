<template>
  <div>
    <div>
      <b-spinner v-if="loader" 
                 variant="primary" 
                 :label="$t('search.Spinning')"></b-spinner>

      <b-alert v-if="posts.total == 0" show variant="warning"
        ><a href="#" class="alert-link">
          {{$t("search.No_data_available_for_that_search")}}!
        </a></b-alert
      > 

      <Post
        v-for="item in posts.data"
        :key="item.updated_at"
        :post="item"
        :mapvideo="() => mapvideo(item.media)"
        :mapmediae="() => mapmediae(item.media)"
        :businessLogo="item.logo_path"
        :editPost="f => f"
        :deletePost="f => f"
        :isDisplayInSearch="true"
      />
    </div>
  </div>
</template>

<script>

import Post from "@/components/businessOwner/ownerPostComponent.vue";

export default {
 name: 'postNetwork',
  data() {
     return {
      post:null,
    };
  },

  computed: {
    posts() {
      return this.$store.getters["allSearch/getPosts"];
    },
    loader() {
      return this.$store.getters["allSearch/getLoader"];
    },

  },

  components: {
    Post,
  },

  methods: {
    mapmediae(media) {
      let mediaarr = [];

      media.forEach((item) => {
        let type = this.checkMediaType(item.media_type);
        if (type != "video") {
          mediaarr.push(item.media_url);
        }
      });

      return mediaarr;
    },

    mapvideo(media) {
      let mediaarr = [];

      media.forEach((item) => {
        let type = this.checkMediaType(item.media_type);
        if (type == "video") {
          mediaarr.push(item.media_url);
        }
      });

      return mediaarr;
    },
  },
};
</script>

