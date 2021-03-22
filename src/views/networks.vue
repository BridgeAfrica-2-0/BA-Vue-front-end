<template>
  <div>
    <navbar />
    <br />

    <b-container  class="full-width">
      <b-row>
        <b-tabs  pills  fill  class="yaya" content-class="mt-3 f-width" active-nav-item-class=" box-item" >
          <b-tab active>
            <template slot="title">
              <p class="t-color">
                <b-icon icon="house" scale="1" variant="primary"></b-icon> Home
              </p>
            </template>

            <b-container>
              <b-row>
                <b-col cols="" class="text-center px-3">
                  <Parent />
                </b-col>

                <b-col md="8" class="order-sm-0">
                  <Default />
                </b-col>
              </b-row>
            </b-container>
          </b-tab>

          <b-tab>
            <template slot="title">
              <p class="t-color">
                <b-icon icon="envelope" scale="1" variant="primary"></b-icon>

                Inbox
               
              </p>
            </template>

            <b-container>
              <Inbox />
            </b-container>
          </b-tab>

          <b-tab>
            <template slot="title">
              <p class="t-color">
                <b-icon icon="bell" scale="1" variant="primary"></b-icon>
                Notification <b-badge pill variant="primary">9</b-badge>
              </p>
            </template>

            <b-container>
              <b-row>
                <b-col cols="" class="text-center px-3">
                  <Parent />
                </b-col>

                <b-col md="8" class="order-sm-0">
                  <Notification />
                </b-col>
              </b-row>
            </b-container>
          </b-tab>

          <b-tab title=" ">
            <template slot="title">
              <p class="t-color">
                <b-icon icon="person-plus" scale="1" variant="primary"></b-icon>
                Community Management
              </p>
            </template>

            <b-container>
              <b-row>
                <b-col cols="" class="text-center px-3">
                  <Parent />
                </b-col>

                <b-col md="8" class="order-sm-0">
                  <MemberShip />
                </b-col>
              </b-row>
            </b-container>
          </b-tab>

          <b-tab>
            <template slot="title">
              <p class="t-color">
                <b-icon
                  icon="arrow-clockwise"
                  scale="1"
                  variant="primary"
                ></b-icon>
                Pending Posts
              </p>
            </template>

            <b-container>
              <b-row>
                <b-col cols="" class="text-center px-3">
                  <Parent />
                </b-col>

                <b-col md="8" class="order-sm-0">  
                  <PendingPost />
                </b-col>
              </b-row>
            </b-container>
          </b-tab>

          <b-tab>
            <template slot="title">
              <p class="t-color">
                <b-icon
                  icon="exclamation-triangle"
                  scale="1"
                  variant="primary"
                ></b-icon>
                Keywords Alerts
              </p>
            </template>

            <b-container>
              <b-row>
                <b-col cols="" class="text-center px-3">
                  <Parent />
                </b-col>

                <b-col md="8" class="order-sm-0">
                  <KeywordAlert />
                </b-col>
              </b-row>
            </b-container>
          </b-tab>

          <b-tab>
            <template slot="title">
              <p class="t-color">
                <b-icon icon="person" scale="1" variant="primary"></b-icon>
                Roles
              </p>
            </template>

            <b-container>
              <b-row>
                <b-col cols="" class="text-center px-3">
                  <Parent />
                </b-col>

                <b-col md="8" class="order-sm-0">
                  <Roles />
                </b-col>
              </b-row>
            </b-container>
          </b-tab>

          <b-tab>
            <template slot="title">
              <p class="t-color">
                <b-icon icon="gear" scale="1" variant="primary"></b-icon>
                Settings
              </p>
            </template>

            <b-container>
              <b-row>
                <b-col cols="" class="text-center px-3">
                  <Parent />
                </b-col>

                <b-col md="8" class="order-sm-0">
                  <Settings />
                </b-col>
              </b-row>
            </b-container>
          </b-tab>
        </b-tabs>
      </b-row>
    </b-container>

    <Footer />
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Default from "@/components/businessf/tabs/owner/networks/defaultNetworks";
import MemberShip from "@/components/businessf/tabs/owner/networks/memberShip";
import KeywordAlert from "@/components/businessf/tabs/owner/networks/keywordAlert";
//import PendingFeedback from "@/components/businessf/tabs/owner/networks/pendingFeedback";
import PendingPost from "@/components/businessf/tabs/owner/networks/pendingPost";
import Settings from "@/components/businessf/tabs/owner/networks/settings";
import Inbox from "@/components/businessf/tabs/owner/networks/inbox";
import Notification from "@/components/businessf/tabs/owner/networks/notification";

import Roles from "@/components/businessf/tabs/owner/networks/roles";

import Parent from "@/components/businessf/tabs/owner/networks/parent";

export default {
  name: "networks",
  components: {
    PendingPost,
    // PendingFeedback,
    Settings,
    KeywordAlert,
    MemberShip,
    Notification,
    Roles,
    Default,
    Inbox,
    navbar,
    Footer,
    Parent
  }
};
</script>

<style >
.network-profile-image-profile {
  width: 12rem;
  height: 12rem;
  bottom: 5px;
  right: 5px;
}

.m-badge {
  margin-top: -10px;
}
.network-avatar-icon {
  position: absolute;
  width: 3rem;
  height: 3rem;
  top: 77px;
  right: 81px;
  padding: 0px 0px;
  color: #ffff;
  background: #e75c18;
  border-radius: 25px;
  border: 4px solid #ffff;
}

.tabs {
  width: 100%;
}
.full-width {
  width: 100%;
}

.nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  
}

.a-left {
  align-content: left;
}

.nav-text {
  cursor: pointer;
}

.t-color {
  color: black;
  padding-top: 8px;
}

.tab-title-class {
  color: #ffffff !important;
}

.box-item{
     
       border-bottom: 1px solid red;
    background-color:white;
}

.yaya{
   
   
    border-bottom: 1px solid red;
    background-color:white;
}

.active-nav-item-class{

    color: #fff;
   
    border-bottom: 1px solid red;
}




.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    color: #fff;
    background-color: white;
    border-bottom: 4px solid red;
    border-top: 3px solid red;
}


</style>
