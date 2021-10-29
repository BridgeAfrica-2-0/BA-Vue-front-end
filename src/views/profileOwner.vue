<template>
  <div class="mx-auto" style="overflow-y: hidden;">
    <navbar></navbar>
    <head-page></head-page>
    <div class=" container-fluid text-justify   corps prof center-content">
      <b-row class=""> 
        <b-col cols="12" class="p-3">
          <b-tabs content-class="mt-3" pills small fill lazy  v-model="tabIndex">
            <b-tab title="Posts" href="#post">
              <Post />
            </b-tab>
            <b-tab title="About" href="#about"><About /></b-tab>
            <b-tab title="Business"  href="#business" class="m-0 p-0">
              <bussiness />
            </b-tab>
            <b-tab title="Media" href="#media">
              <Media type="profile" />
            </b-tab>
            <b-tab title="Networks">
              <Networks />
            </b-tab>
            
            <b-tab title="Community"  href="#community" class="m-0 p-0">
              <following />
            </b-tab>
            
          </b-tabs>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import headPage from "@/components/ownerHeadpage";
import Post from "@/components/owner/tabs/posts";
import About from "@/components/owner/tabs/about";
import Media from "@/components/owner/tabs/media";
import Networks from "@/components/owner/tabs/networks";
import Following from "@/components/owner/tabs/memberNetwork";
import Bussiness from "@/components/owner/tabs/bussiness";

export default {
  name: "profileOwner",

  components: {
    Bussiness,
    Following,
    navbar,
    headPage,
    Post,
    About,
    Media,
    Networks,
  },
  data() {
    return {   
       tabIndex:null,
       tabs: ['#post','#about', '#business', '#media', '#community'],

    };
  },

   watch:{
    $route (to, from){
        console.log(to.hash);
        this.tabIndex = this.tabs.findIndex(tab => tab === to.hash);
        
        console.log(from);
    }
  },
  methods: {

    ownerPost() {
      this.$store
        .dispatch("UserProfileOwner/ownerPost", this.url_data)
        .then(() => {
          console.log("hey yeah");
        })
        .catch(err => {
          console.log({ err: err });
        });
    }
  },

 
  computed: {},
   created() {
      this.tabIndex = this.tabs.findIndex(tab => tab === this.$route.hash);
      
      this.$store
      .dispatch("profile/loadUserPostIntro", null)
      .then((response) => {
         console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  mounted(){

    this.$store
      .dispatch("profile/Tcommunity", null)
      .then((response) => {
       
      })  
      .catch((error) => {
        console.log({error:error});
      });
 
      this.$store
      .dispatch("follower/UcommunityFollower", null)
      .then((response) => {
       
      })
      .catch((error) => {
        console.log({error:error});
      });

      this.$store
      .dispatch("profile/UcommunityFollowing", null)
      .then((response) => {
       
      })
      .catch((error) => {
        console.log({error:error});
      });

     
   
      this.$store
      .dispatch("profile/BcommunityFollower", null)
      .then((response) => {
       
      })
      .catch((error) => {
        console.log({error:error});
      });

     
      this.$store
      .dispatch("profile/BcommunityFollowing", null)
      .then((response) => {
       
      })
      .catch((error) => {
        console.log({error:error});
      });

      this.$store
      .dispatch("profile/NcommunityFollower", null)
      .then((response) => {
       
      })
      .catch((error) => {
        console.log({error:error});
      });

      this.$store
      .dispatch("profile/NcommunityFollowing", null)
      .then((response) => {
       
      })
      .catch((error) => {
        console.log({error:error});
      });
  }
};
</script>

<style scoped>
@media (max-width: 576px) {
  .lb-grid {
    height: 200px;
  }
  .corps {
    margin-top: 2rem !important;
  }
}
@media (min-width: 576px) {
  .lb-grid {
    height: 300px;
  }
}
@media (min-width: 768px) {
  .lb-grid {
    height: 350px;
  }
}
@media (min-width: 992px) {
  .lb-grid {
    height: 400px;
  }
}
@media (min-width: 1200px) {
  .lb-grid {
    height: 500px;
  }
  .corps {
    margin-top: 2rem !important;
  }
}
@media (min-width: 1400px) {
  .lb-grid {
    height: 500px;
  }

  .corps {
    margin-top: 2rem !important;
  }

  .toto {
    font-size: x-large;
    font-weight: 600;
  }
}

@media (min-width: 768px) {
  .center-content {
    padding-left: 64px;
    padding-right: 64px;
  }
}
</style>
