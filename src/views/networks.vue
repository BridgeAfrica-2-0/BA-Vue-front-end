<template>
  <div style="overflow-y: hidden">
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
    </div>

    <Footer />
    <p class="text-center">
      <span class="display-inline">
        <b-link @click="$i18n.locale = 'en'"> {{ $t("auth.english") }}</b-link>
        <span class="vl"></span>
        <b-link class="ml-2" @click="$i18n.locale = 'fr'">
          {{ $t("auth.french") }}
        </b-link>
      </span>
      Bridge Africa © 2021
    </p>
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
    Parent,
  },

  data() {
    return {
      selectedId: 0,
      bottomSelectedId: 0,

      items: [
        { label: this.$t('network.Home'), icon: " " },

        { label: this.$t('network.Inbox'), icon: " " },
        { label: this.$t('network.Notification'), icon: "" },
        { label: this.$t('network.Member_Request'), icon: "" },
        { label: this.$t('network.Pending_Post'), icon: "" },

        { label: this.$t('network.Keyword_Alert'), icon: "" },

        { label: this.$t('network.Settings'), icon: "" },
      ],

      options: {
        activeColor: "#32a400",
      },
    };
  },

  methods: {
    handleChange(item, index) {
      console.log(item, index);
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
