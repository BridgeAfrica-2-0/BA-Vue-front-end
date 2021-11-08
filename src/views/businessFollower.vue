<template>
  <div>
    <navbar />
    <Business />
   
    <Footer />
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
.main{
    width: 100%;
    overflow-x: hidden !important;
}
  
</style>


<style >

.main{
    width: 100%;
    overflow-x: hidden !important;
}
  
</style>