<template>
  <div class="" style="overflow-x: clip; padding: 0px" ref="wrapper"> 
    <navbar />
     <Skeleton  :loading="!isloaded" />
    <div v-if="isloaded">
      <div class="container-fluid">  
        <ly-tab
          v-model="selectedId"
          :items="items"
          :options="options"
          class="center-ly"
        >
        </ly-tab>
        <hr width="100%" class="d-none" d-md-block />
      </div>

      <div class="" v-if="selectedId == '0'">
        <Business @pageChange="pageChange" />
      </div>

      <div class="mt-3" v-if="selectedId == '1'">
        <Inbox />
      </div>

      <div class="mt-3" v-if="selectedId == '2'">
        <Settings v-bind:currenttab="selectedId" />
      </div>

      <div class="mt-3" v-if="selectedId == '3'">
        <Settings v-bind:currenttab="selectedId" />
      </div>

      <div class="mt-3" v-if="selectedId == '4'">
        <Settings v-bind:currenttab="selectedId" />
      </div>

      <div class="mt-3" v-if="selectedId == '5'">
        <Settings v-bind:currenttab="selectedId" />
      </div>

      <div class="mt-3" v-if="selectedId == '6'">
        <Settings v-bind:currenttab="selectedId" />
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import Business from "../components/businessOwner/business";
import Settings from "../components/businessOwner/settings";
import Inbox from "../components/businessOwner/inbox";
import LyTab from "@/tab/src/index.vue";
// import Footer from "../components/footer";
import { WhoIsIt } from "@/mixins";
import axios from "axios";
import { isPremium } from '@/helpers';
import Skeleton from "@/components/businessPageSkeleton";
export default {
  name: "Home",
  mixins: [WhoIsIt],
  components: {
    navbar,
    Skeleton,
    Business,
    LyTab,
    Settings,
    Inbox,
    // Footer,
  },
  data() {
    return {
      selectedId: 0,
      bottomSelectedId: 0,
      foll_id: null,
      isloaded: false,
      url_data: null,
      items: [
        { label: this.$t('search.Home'), icon: "" },
        { label: this.$t('search.Inbox'), icon: "" },
        { label: this.$t('search.Notification'), icon: "" },
        { label: this.$t('search.Settings'), icon: "" },
      ],
      options: {
        activeColor: "#1d98bd",
      },
      isPremium: isPremium()
    };
  },
  methods: {
    pageChange(){
      console.log("pageChange")
      this.selectedId = 6
    },

   
    async  businessInfo() {
       
      let url=`business/info/${this.$route.params.id}`;

      await axios.get(url)
      .then(({ data }) => {
         this.$store.commit("businessOwner/setBusinessInfo", data.data);
         this.auth({ ...data.data,profile_picture: data.data.logo_path, user_type: 'business' });
          })
  
    },

    CommunityBusiness() {
      this.$store
        .dispatch("businessOwner/CommunityBusiness", this.url_data)
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
    CommunityPeople() {
      this.$store
        .dispatch("businessOwner/CommunityPeople", this.url_data)
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
    businessCommunityTotal() {
      this.$store
        .dispatch("businessOwner/businessCommunityTotal", this.url_data)
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
    ownerPost() {
      this.$store
        .dispatch("businessOwner/ownerPost", this.url_data)
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
  },
  watch: {
    "$route.query.tabId": function () {
      this.selectedId = this.$route.query.tabId;
    },

   
  },

  beforeCreate: async function () {
    await this.$repository.share.switch(this.$route.params.id, "business");
  },

  created() {

    //Insight is only for premium account
    if (this.isPremium) {
      this.items.push({ label: this.$t('search.Insight'), icon: "" });
      this.items.push({ label: this.$t('search.Pending_Post'), icon: "" });
    }

    let loader = this.$loading.show({
      container: this.$refs.wrapper,
      canCancel: true,
      onCancel: this.onCancel,
      color: "#e75c18",
    });

  
    this.selectedId = this.$route.query.tabId ? this.$route.query.tabId : "0";
    
   

    this.foll_id = this.$route.params.id;
    this.$store
      .dispatch("businessOwner/roleCheck", this.foll_id)
      .then((data) => {
        let role = data.data.data.role;
        switch (role) {
          case "editor":
            this.$router.push({
              name: "BusinessEditor",
              params: { id: this.foll_id },
            });
            break;
          case "visitor":
            this.$router.push({
              name: "BusinessFollower",
              params: { id: this.foll_id },
            });
            break;
        }
         this.businessInfo();
        this.isloaded = true;
        loader.hide()
      })
      .catch((error) => {
        console.log({ error: error });
        console.log(error.response.status);
        loader.hide()
        if (error.response.status == 404) {
          this.$router.push({ name: "notFound" });
        }
      });


   
  },
  mounted() {
    if (this.$store.state.profileSettingsEdit.etat == 1) {
      this.selectedId = this.$store.state.profileSettingsEdit.selectedId;
    }
    this.url_data = this.$route.params.id;
   
    this.CommunityBusiness();
    this.CommunityPeople();
    this.businessCommunityTotal();
    this.ownerPost();
  },
};
</script>

<style scoped>
.mar-left {
  margin-left: 25px;
}
.tabs {
  width: 100%;
}
.settings {
  margin-left: 90%;
  position: relative;
  top: 40px;
}
.a-left {
  align-content: left;
}
.nav-text {
  cursor: pointer;
}
.tab-title-class {
  color: #ffffff !important;
}
@media only screen and (max-width: 768px) {
  .settings {
    top: -5px;
    left: -20px;
  }
}
</style>

<style>
.business-owner-tab .nav-link {
  display: block;
  padding: 0.5rem 1rem;
  padding-top: 1px;
  padding-bottom: 1px;
  padding: 1px;
  padding-right: 1px;
  padding-left: 1px;
  text-align: center;
  padding-left: 10px;
  padding-right: 20px;
  border: 1px solid gray;
}
@media only screen and (max-width: 768px) {
  .business-owner-tab .nav-pills .nav-link {
    border-radius: 0.25rem;
    font-size: 10px;
    margin-left: -8px;
    padding-left: 0px;
    padding-right: 0px;
  }
}

.center-ly {
  margin-top: -25px;
}
.hrr {
  margin-top: 0px;
}
</style>