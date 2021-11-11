<template>
  <Post :item="post" :editPost="(f) => f" :deletePost="(f) => f" :isOwner="profile.id == post.user_id" v-if="loader" />
  <span v-else></span>
</template>
<script>
import Post from '@/components/businessf/tabs/owner/networks/postNetworkComponent';

import { mapGetters } from 'vuex';
export default {
  props: ['id'],
  components: {
    Post,
  },
  data: () => ({
    loader: false,
    post: null,
  }),

  // beforeRouteEnter(to, from, next) {
  //   console.log(this.profile)
  //   if (this.profile.id) next();
  //   else window.location.href = '/login';
  // },

  computed: {
    ...mapGetters({
      profile: 'auth/profilConnected',
    }),
  },

  methods: {
    init: async function () {
      const response = await this.$repository.post.get(this.id);
      console.log(response);
      if (response.status) {
        this.post = response.data;
        this.loader = true;
      } else {
        // this.$router.push({name:'Login'})
      }
    },
  },

  created() {
    this.init();
  },
};
</script>