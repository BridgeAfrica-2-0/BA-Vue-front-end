<template>
  <div>
    <navbar />
    <Business />
    <div class=" container-fluid text-justify   corps prof center-content">
      <b-row class="">
        <b-col cols="12" class="p-3">
          <b-tabs content-class="mt-3" pills small fill lazy v-model="tabIndex">
            <b-tab title="Posts" href="#post">
              <Post />
            </b-tab>
            <b-tab title="About" href="#about"><About /></b-tab>
            <b-tab title="Business" href="#business" class="m-0 p-0">
              <bussiness />
            </b-tab>
            <b-tab title="Media" href="#media">
              <Media type="profile" />
            </b-tab>
            <b-tab title="Networks">
              <Networks />
            </b-tab>

            <b-tab title="Community" href="#community" class="m-0 p-0">
              <following />
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </div>
    <Footer />
  </div>
</template>

<script>
import navbar from '@/components/navbar';
import Business from '../components/businessf/business';
import Footer from '../components/footer';
import Post from '@/components/businessfollower/tabs/posts';
import About from '@/components/businessfollower/tabs/about';
import Media from '@/components/businessfollower/tabs/media';
import Networks from '@/components/businessfollower/tabs/networks';
import Album from '@/components/businessfollower/tabs/album';

export default {
  name: 'Home',
  components: {
    navbar,
    Business,
    Footer,
    Post,
    About,
    Media,
    Networks,
   
  },
  data() {
    return {
      tabIndex: null,
      tabs: ['#post', '#about', '#business', '#media', '#community'],
    };
  },
  watch: {
    $route(to, from) {
      console.log(to.hash);
      this.tabIndex = this.tabs.findIndex(tab => tab === to.hash);

      console.log(from);
    },
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
.settings {
  margin-left: 90%;
  position: relative;
  top: 40px;
}

@media only screen and (max-width: 768px) {
  .settings {
    top: -5px;
    left: -20px;
  }
}
</style>
