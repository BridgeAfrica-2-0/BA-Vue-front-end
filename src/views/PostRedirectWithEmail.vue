<template>
  <div style="overflow-x: hidden; color: black" v-if="loader">
    <Nav id="top" />
    <hr style="margin-top: -0px" class="d-none d-sm-none d-lg-block" />
    <div class="container-flex p-md-3 p-t-0 upp">
      <b-row class="p-3 center">
        <b-col cols="12" md="8" lg="8" xl="6" ref="middleblock" >
          <Post :item="post" :editPost="(f) => f" :deletePost="(f) => f" :isOwner="profile.id == post.user_id"  class="border"/>
        </b-col>
      </b-row>
    </div>
  </div>
  <span v-else></span>
</template>
<script>
import Post from '@/components/businessf/tabs/owner/networks/postNetworkComponent';
import Nav from '@/components/navbar';

import { mapGetters, mapMutations } from 'vuex';

export default {
  props: ['id'],
  components: {
    Post,
    Nav,
  },
  data: () => ({
    loader: false,
    post: null,
  }),

  computed: {
    ...mapGetters({
      profile: 'auth/profilConnected',
    }),
  },

  methods: {
    ...mapMutations({
      auth: 'auth/profilConnected',
    }),

    async getAuth() {
      const response = await this.$repository.share.WhoIsConnect({ networkId: null });
      if (response.success) this.auth(response.data);
    },
    init: async function () {
      await this.getAuth();
      const response = await this.$repository.post.get(this.id);
      console.log(response);
      console.log(this.profile);
      if (response.success) {
        this.post = response.data;
        this.loader = true;
      } else {
        // this.$router.push({name:'Login'})
      }
    },
  },

  created() {
    console.log('post single');
    this.init();
  },
};
</script>

<style scoped>
.border {
  border: 1px solid #ddd;
  border-radius: 12px;
}
.center{
  margin-left: auto;
  margin-right: auto;
}
</style>