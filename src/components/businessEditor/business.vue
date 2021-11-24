<template>
  <div>
    <head-page-owner></head-page-owner>
    <div class="row">
      <div  class="text-justify mt-2 container-fluid" >
        <b-row class="center-content" >
          <b-col cols="12">
            <b-tabs lazy content-class="mt-3 mobile-tab"  v-model="currentTab"  fill pills >
              <b-tab title="Home"><HomePage /></b-tab>
              <b-tab title="About"><About /></b-tab>
              <b-tab title="Media"><Media /></b-tab>
              <b-tab title="Market"><MarketPlace /></b-tab>
              <b-tab title="Networks"><Networks /></b-tab> 
              <b-tab title="Community"><Followers /></b-tab>
            </b-tabs>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import HomePage from "./tabs/businessHome";   
import About from "@/components/businessOwner/tabs/about";
import Media from "@/components/businessOwner/tabs/media";
import MarketPlace from "@/components/businessOwner/tabs/marketPlace";
import Followers from "@/components/businessOwner/tabs/memberNetwork";
import Networks from "@/components/businessOwner/tabs/networks";
import HeadPageOwner from "@/components/businessOwner/headPageOwner";

export default {
  name: "Home",
  components: {
    HeadPageOwner,
    HomePage,
    About,
    Media,
    MarketPlace,
    Followers,
     Networks
  },
  data() {
    return {
       currentTab: 0,
      tabIndex: null,
      tabs: ["#post", "#about", "#media", "#market", "#community"],
    };
  },
  computed: {},

    created() {

  
   let tab = this.tabs.findIndex(tab => tab === this.$route.hash)

  if(tab==-1){
    
    
    this.currentTab =
      localStorage.getItem('ba-businesse-active-tab') !== null ? localStorage.getItem('ba-businesse-active-tab') : 0;

  } else{

    this.currentTab =tab;
  }
  },  

  methods: {},

    watch: {
    currentTab: (newVal, oldVal) => {
      localStorage.setItem('ba-business-active-tab', newVal);
    },


   
  $route(to, from) {
      console.log(to.hash);
      this.currentTab = this.tabs.findIndex((tab) => tab === to.hash);

    },

  

  },



};
</script>


<style>




@media only screen and (max-width: 768px) {
   

  .mobile-tab .nav-fill > .nav-link, .nav-fill .nav-item {
    flex: 1 1 auto;
    text-align: center;
    width: 20px;
}


}




</style>



<style scoped>



alig{

  padding-left:70px;
   padding-right:70px
}
.images {
  display: flex;
  width: 100%;
}

img {
  width: 100%;
}

.btns {
  position: relative;
  left: 75%;
}

.photo-btns {
  margin-left: 80%;
  margin-top: -50px;
}
.cnt-btn {
  color: white;
}
@media only screen and (max-width: 768px) {
  .btns {
    position: relative;
    left: 25%;
  }
  .photo-btns {
    margin-left: 50%;
    margin-top: 10px;
  }
}



@media only screen and (min-width: 768px) {
 
  .center-content {
    padding-right: 63px;

    padding-left: 63px;

  }

}






</style>
