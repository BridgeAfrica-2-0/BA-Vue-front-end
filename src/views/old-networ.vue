<template>
  <div style="overflow-y: hidden;">
    <navbar />

    <div class="container-fluid lynetowrk">
      <ly-tab
        v-model="selectedId"
        :items="items"
        :options="options"
        @change="handleChange"
      >
      </ly-tab>
      <hr />
    </div>

    <div class="demo container-fluid p-0">
      <div class="mt-3" v-if="selectedId == '0'">
        <b-row class="center-content">
          <b-col lg="5" xl="4" class=" ">
            <Parent />
          </b-col>

          <b-col
            lg="7"
            xl="8"
            class="order-sm-0 mt-sm-10 mt-md-10 mt-xl-0  marg-tap"
          >
            <Default />
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

    <Footer />
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Default from "@/components/businessf/tabs/owner/networks/defaultNetworks";

import Inbox from "@/components/businessf/tabs/owner/networks/inbox";
import General from "@/components/businessf/tabs/owner/networks/general";

import LyTab from "@/tab/src/index.vue";

import Parent from "@/components/businessf/tabs/owner/networks/parent";

export default {
  name: "networks",
  components: {
    General,

    LyTab,
    Default,
    Inbox,
    navbar,
    Footer,
    Parent
  },

  data() {
    return {
      selectedId: 0,
      bottomSelectedId: 0,

      items: [
        { label: "Home ", icon: "fas fa-home fa-lg " },

        { label: "Inbox", icon: "fas fa-comments fa-lg " },
        { label: "Notification", icon: "fas fa-bell fa-lg" },
        { label: "Member Request", icon: "fas  fa-user-plus fa-lg" },
        { label: "Pending Post", icon: "fas fa-sync fa-lg" },

        { label: "Keyword Alert", icon: "fas fa-exclamation-triangle fa-lg" },
        { label: "Roles", icon: "fas fa-user-cog fa-lg" },
        { label: "Settings", icon: "fas fa-cog fa-lg" }
      ],

      options: {
        activeColor: "#32a400"
      }
    };
  },

  methods: {
    handleChange(item, index) {
      console.log(item, index);
    }
  }
};
</script>

<style>
@media only screen and (max-width: 1500px) {
  .marg-tap {
    margin-top: 20px;
  }

  /** 
  
.lynetowrk .ly-tab-active-bar {
    position: absolute;
    bottom: 3px;
    left: 0;
    width: 30px;
    height: 3px;
    border-radius: 4px;
    background-color: yellow;
    
    display: none;
}





.ly-tab-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    text-align: center;
    border-style: solid;
    border-width: 1px;
   
    border-radius: 10px;
    padding-top: 5px;
    padding-bottom: 5px;

    width: 170px;
   
}
*/
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

.a-left {
  align-content: left;
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
