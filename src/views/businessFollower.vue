<template>
  <div>
    <navbar />
    <Business />
   
    <Footer />
    <p class="text-center">
      <span class="display-inline">
        <b-link @click="$i18n.locale = 'en'"> {{ $t("english") }}</b-link>
        <span class="vl"></span>
        <b-link class="ml-2" @click="$i18n.locale = 'fr'">
          {{ $t("french") }}
        </b-link>
      </span>
      Bridge Africa © 2021
    </p>
  </div>
  
  
  
</template>

<script>
import navbar from '@/components/navbar';
import Business from '../components/businessf/business';
import Footer from '../components/footer';


export default {
  name: 'Home',
  components: {
    navbar,
    Business,
    Footer,
   
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