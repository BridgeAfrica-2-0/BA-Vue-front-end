<template>
  <div  style="overflow-x: clip;">
        <navbar />
          <Skeleton  :loading="isloading" />
    <span v-if="!isloading">
      
       
      <Business :key="foll_id"  class="wahala" />
      <Footer />
    </span>
  </div>
</template> 

<script>
import navbar from "@/components/navbar";
import Business from "../components/businessf/business";
import Footer from "../components/footer";
import Skeleton from "@/components/businessPageSkeleton";
import { isGuestUser } from '@/helpers';
export default {
  name: "Home",

  components: {
    navbar,
    Business,
    Footer,
    Skeleton
  },

  data() {
    return {
      tabIndex: null,
      foll_id: null,
      isloading: true,
      isGuestUser: isGuestUser(),
      tabs: ["#post", "#about", "#business", "#media", "#community"],
    };
  },

  beforeRouteUpdate(to, from, next) {

    this.foll_id = to.params.id;
    next();
  },
 
 methods:{
    
     businessInfo() {
      const dispatchMethod = this.isGuestUser ? "businessGuest/businessInfo": "businessOwner/businessInfo";
      this.$store
        .dispatch(dispatchMethod, this.foll_id)
        .then(() => {
          this.isloading = false;
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },


 },
  
  created() {
    
    this.foll_id = this.$route.params.id;
    this.isloading = true;

    
    if (!this.isGuestUser) {
    this.$store
      .dispatch("businessOwner/roleCheck", this.foll_id)
      .then((data) => {
       
      })
      .catch((error) => {
        if (error.response.status == 404) {
          this.$router.push({ name: "notFound" });
        }
      });
    }

     this.businessInfo();

    //add guest user flag
    if (this.isGuestUser) {
      localStorage.setItem('isGuestUser', true);
    }
  },

  watch: {
    $route(to, from) {
      this.tabIndex = this.tabs.findIndex((tab) => tab === to.hash);

    },
  },
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