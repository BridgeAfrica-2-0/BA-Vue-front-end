<template>
  <div class=" ">
  
    <navbar />
   

    <div  class="text-justify " style="padding-left:60px; padding-right:60px;  margin-top: 100px;">
      <b-row>
        <b-tabs pills  content-class="mt-3" class="business-owner-tab" >
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
            
            <Inbox />
            </b-tab
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
    </div>
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

import Inbox from "../components/businessf/inbox";

import Footer from "../components/footer";
export default {
  name: "Home",
  components: {
    navbar,
    Business,
    Pending,
    Settings,
    Insight,
    Inbox,
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
    padding-right: 25px;
    border: 1px solid gray;
  

}


.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    
    background-color: #e6e6e6;
}



    </style>
