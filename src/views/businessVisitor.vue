<template>
  <div>
    <navbar />

    <b-container>
      
      <Business/>
      
        </b-container>
   
    <Footer/>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import Business from "../components/businessVisitor/business";
import Footer from "../components/footer";
export default {
  name: "Home",
  components: {
    navbar,
    Business,
    Footer,
  },
  data() {
    return {};
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
  .settings{
    top: -5px;
    left: -20px;
  }
}
</style>
