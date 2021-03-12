<template>
  <div>
    <navbar />
    <br />

    <b-container fluid="xl" class="f-width">
      <b-row>
        <b-tabs content-class="mt-3 f-width">
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
                <span class="m-badge">
                  <b-badge pill variant="primary">4</b-badge>
                </span>
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
                Community Request
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

<style scoped>
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

.count_number {
  padding: 0px 5px;
  float: right;
  background: #ce4b0b;
  border-radius: 24px;
  color: white;
}

.a-left {
  align-content: left;
}

.nav-text {
  cursor: pointer;
}

.t-color {
  color: black;
}

.tab-title-class {
  color: #ffffff !important;
}
</style>
