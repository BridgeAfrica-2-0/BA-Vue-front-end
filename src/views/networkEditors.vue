<template>
  <div style="overflow-y: hidden">
    <span v-if="isloaded">
      <navbar />

      <div class="container-fluid lynetowrk" style="margin-top: -30px">
        <ly-tab
          v-model="selectedId"
          :items="items"
          :options="options"
          @change="handleChange"
        >
        </ly-tab>
        <hr class="d-none d-md-block" />
      </div>

      <div class="demo container-fluid p-0">
        <div class="mt-3" v-if="selectedId == '0'">
          <b-row class="center-content">
            <b-col lg="5" xl="4" class="">
              <Parent />
            </b-col>

            <b-col
              lg="7"
              xl="8"
              class="order-sm-0 mt-sm-10 mt-md-10 mt-xl-0 marg-tap"
            >
              <Default @changeSelected="changer" />
            </b-col>
          </b-row>
        </div>

        <div class="mt-3" v-if="selectedId == '1'">
          <Inbox />
        </div>

        <div class="mt-3" v-if="selectedId == '2'">
          <General v-bind:currenttab="selectedId" />
        </div>

        <div class="mt-3" v-if="selectedId == '3'">
          <General v-bind:currenttab="selectedId" />
        </div>

        <div class="mt-3" v-if="selectedId == '4'">
          <General v-bind:currenttab="selectedId" />
        </div>

        <div class="mt-3" v-if="selectedId == '5'">
          <General v-bind:currenttab="selectedId" />
        </div>

        <div class="mt-3" v-if="selectedId == '6'">
          <General v-bind:currenttab="selectedId" />
        </div>
        <div class="mt-3" v-if="selectedId == '7'">
          <General v-bind:currenttab="selectedId" />
        </div>
      </div>
      <!-- <Footer /> -->
    </span>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
// import Footer from "@/components/footer";
import Default from "@/components/businessf/tabs/owner/editors/defaultEditors";

// import Inbox from "@/components/businessf/tabs/owner/editors/inbox";

import Inbox from "@/components/businessf/tabs/owner/networks/inbox";

import General from "@/components/businessf/tabs/owner/editors/general";

import LyTab from "@/tab/src/index.vue";
import axios from "axios";
import Parent from "@/components/businessf/tabs/owner/networks/parent";

import { WhoIsIt } from "@/mixins";
export default {
  name: "editors",
  mixins: [WhoIsIt],
  components: {
    General,
    LyTab,
    Default,
    Inbox,
    navbar,
    // Footer,
    Parent,
  },

  data() {
    return {
      selectedId: 0,
      bottomSelectedId: 0,
      foll_id: null,
      isloaded: false,

      items: [
        { label: this.$t("network.Home"), icon: " " },

        { label: this.$t("network.Inbox"), icon: " " },
        { label: this.$t("network.Notification"), icon: "" },
        { label: this.$t("network.Member_Request"), icon: "" },
        { label: this.$t("network.Pending_Post"), icon: "" },

        { label: this.$t("network.Keyword_Alert"), icon: "" },

        { label: this.$t("network.Blocking"), icon: "" },
         { label: this.$t("network.Settings"), icon: "" },
      ],

      options: {
        activeColor: "#32a400",
      },
    };
  },

  created() {
    this.foll_id = this.$route.params.id;

    this.$store
      .dispatch("networkDetails/roleCheck", this.foll_id)
      .then((data) => {
        let role = data.data.data;
       this.$store.commit("networkProfile/setNetworkRole", role);
        switch (role) {
          case "follower":
            this.$router.push({
              name: "BuMembar Network FollowernessEditor",
              params: { id: this.foll_id },
            });
            break;

          case "network_member":
            this.$router.push({
              name: "memberNetwork",
              params: { id: this.foll_id },
            });
            break;
        }
        this.getNetworkInfo()
        this.isloaded = true;
      })
      .catch((error) => {
        console.log({ error: error });

        console.log(error.response.status);

        if (error.response.status == 404) {
          // this.$router.push({ name: "notFound" });
        }
      });
  },

  methods: {
    changer(){
      this.selectedId = 4
      console.log("evenement arrive au parent network",  this.selectedId )
    },
    handleChange(item, index) {
      console.log(item, index);
    },


    async  getNetworkInfo() {
       
      let url=`network/${this.$route.params.id}/about/information`;

      await axios.get(url)
      .then(({ data }) => {
         this.$store.commit("networkProfile/setNetworkInfo", data.data);
         this.auth({ ...data.data,profile_picture: data.data.image, user_type: 'network' });
          })  
    },
  },
};
</script>

<style>
@media only screen and (max-width: 1500px) {
  .marg-tap {
    margin-top: 20px;
  }
}

.m-top {
  margin-top: 50px;
}

.m-badge {
  margin-top: -10px;
}

.tabs {
  width: 100%;
}
.full-width {
  width: 100%;
}

.bongo .nav {
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.nav-text {
  cursor: pointer;
}

.tt-color {
  padding-top: 8px;
}

.tab-title-class {
  color: #ffffff !important;
}

.box-item {
  border-bottom: 1px solid red;
  background-color: white;
}

.yaya {
  border-bottom: 1px solid red;
  background-color: white;
}

.active-nav-item-class {
  color: #fff;

  border-bottom: 1px solid red;
}

.a-box {
  margin-left: -15px;
}

@media only screen and (min-width: 768px) {
  .center-content {
    padding-right: 63px;
    padding-left: 63px;
  }
}
</style>