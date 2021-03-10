<template>
  <div class="container-fluid">
    <navbar />
    <b-container fluid="xl" class="text-justify">
      <b-row>
        <b-tabs content-class="mt-3">
          <b-tab active>
            <template slot="title">
              <p class="t-color">
                <b-icon icon="house" scale="1" variant="primary"></b-icon> Home
              </p> </template
            ><Business
          /></b-tab>

          <b-tab>
            <template slot="title">
              <p class="t-color">
                <b-icon icon="envelope" scale="1" variant="primary"></b-icon>
                Inbox
              </p>
            </template>
            <p>I'm the second tab</p></b-tab
          >

          <b-tab>
            <template slot="title">
              <p class="t-color">
                <b-icon icon="bell" scale="1" variant="primary"></b-icon>
                Notifications
              </p>
            </template>
            <Notification />
          </b-tab>

          <b-tab >   <template slot="title"  > 
              <p class="t-color" > <b-icon icon="arrow-clockwise" scale="1" variant="primary"></b-icon> Pending Posts </p>
          
        </template>  <Pending /></b-tab>

          <b-tab>
            <template slot="title">
              <p class="t-color">
                <b-icon icon="eye" scale="1" variant="primary"></b-icon>
                Insight
              </p>
            </template>
            <Insight />
          </b-tab>

          <b-tab>
            <template slot="title">
              <p class="t-color">
                <b-icon icon="gear" scale="1" variant="primary"></b-icon>
                Settings
              </p>
            </template>
            <Settings />
          </b-tab>
        </b-tabs>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import Business from "../components/businessf/business";
import Pending from "../components/businessf/pending";
import Insight from "../components/businessf/insight";
import Notification from "../components/businessf/notification";
import Settings from "../components/businessf/settings";

import Footer from "../components/footer";
export default {
  name: "Home",
  components: {
    navbar,
    Business,
    Pending,
    Settings,
    Insight,
    Notification,
    Footer
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.tabs {
  width: 100%;
}
.settings {
  margin-left: 90%;
  position: relative;
  top: 40px;
}




.a-left{
  align-content: left;
}

.nav-text {
  cursor: pointer;
}

.t-color{

  color: black;
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
