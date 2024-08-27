<template>
  <div id="dashsidebar">
    <!-- position: fixed;
  
    margin-top: -85px; -->

    <div
      class="text-left border-bottom  sidebarcover"
      style="
        
        background: url('assets/images/tissu-choisit.jpg');
        background-size: cover !important;
      "
    >
      <div class="user-profile">
        <!-- <b-avatar
          class="p-avater bg-white"
          variant="primary"
          :src="profile.picture"
          size="3em"
        ></b-avatar> -->
      </div>

      <div class="text-lost text-center">
        <h6 class="white">
          <router-link
            :to="{ name: 'profile_owner' }"
            class="card-title p-3 white"
          >
            {{ profile.name }}
          </router-link>
        </h6>
      </div>

      <!-- <hr class="mt-2"> -->
    </div>

    <div class="text-left show-sidebar dashboardsidebar">
      <aside class="sidebar">
        <!-- <div class="toggle">
       
      </div> -->
        <div class="side-inner d-block">
          <VuePerfectScrollbar class="scroll-area" :settings="settings">
            <div class="nav-menu">
              <ul>
                <li>
                  <router-link :to="userOwnPage">
                    <span class="icon-location-arrow mr-3">
                      <fas-icon
                        class="icons"
                        :icon="['fas', 'user']"
                        size="lg"
                      />
                    </span>
                    Profile
                  </router-link>
                </li>

                <li class="accordion">
                  <a
                    href="#"
                    v-b-toggle.my-collapse
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    class="collapsible"
                  >
                    <span class="icon-home mr-3">
                      <fas-icon
                        class="icons"
                        :icon="['fas', 'hands-helping']"
                        size="lg"
                      />
                    </span>
                    Your Businesses
                  </a>

                  <b-collapse id="my-collapse">
                    <div class="ml-3">
                      <ul>
                        <li
                          @click="activedBusiness(item)"
                          v-for="(item, index) in business"
                          :key="index"
                        >
                          <a href="#"> {{ item.name }} </a>
                        </li>
                      </ul>
                    </div>
                  </b-collapse>
                </li>

                <li class="accordion">
                  <a
                    v-b-toggle.my-collapsenetwork
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    class="collapsible"
                  >
                    <span class="icon-search2 mr-3">
                      <fas-icon
                        class="icons"
                        :icon="['fas', 'project-diagram']"
                        size="lg"
                      />
                    </span>
                    Your Networks
                  </a>

                  <b-collapse id="my-collapsenetwork">
                    <div class="ml-3">
                      <ul>
                        <li
                          @click="activedNetwork(item)"
                          v-for="(item, index) in networks"
                          :key="index"
                        >
                          <a href="#"> {{ item.name }} </a>
                        </li>
                      </ul>
                    </div>
                  </b-collapse>
                </li>
                <li>
                  <router-link :to="{ name: 'settings' }" class="">
                    <span class="icon-location-arrow mr-3">
                      <fas-icon
                        class="icons"
                        :icon="['fas', 'cog']"
                        size="lg"
                      />
                    </span>

                    Account Settings
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'orders' }" class="">
                    <span class="icon-search2 mr-3">
                      <fas-icon
                        class="icons"
                        :icon="['fas', 'cart-arrow-down']"
                        size="lg"
                      />
                    </span>

                    Order
                  </router-link>
                </li>
                <li>
                  <router-link v-if="islogin" :to="newRedirection('message')">
                    <span class="icon-search2 mr-3">
                      <fas-icon
                        class="icons"
                        :icon="['fas', 'comments']"
                        size="lg"
                      />
                    </span>

                    Inbox
                  </router-link>
                </li>
                <li>
                  <router-link
                    v-if="islogin"
                    :to="newRedirection('notification')"
                  >
                    <span class="icon-search2 mr-3">
                      <fas-icon
                        class="icons"
                        :icon="['fas', 'bell']"
                        size="lg"
                      />
                    </span>

                    Notifications
                  </router-link>
                </li>

                <li>
                  <router-link :to="{ name: 'GlobalSearch' }">
                    <span class="icon-search2 mr-3">
                      <fas-icon
                        class="icons"
                        :icon="['fas', 'store']"
                        size="lg"
                      />
                    </span>

                    Market
                  </router-link>
                </li>
              </ul>
            </div>
          </VuePerfectScrollbar>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import _ from "lodash";
import { mapGetters, mapActions, mapMutations } from "vuex";
import axios from "axios";
export default {
  name: "newdashboard",

  data() {
    return {
      settings: {
        maxScrollbarLength: 60
      },

      isActive: false,
      notifications: [],
      messages: [],
      notificationPatterns: null,
      messagePatterns: null,
      redirectionPatterns: null,
      selectedUser: null,
      users: [],

      pending: false,
      strategy: null
    };
  },

  components: {
    VuePerfectScrollbar
  },

  computed: {
    islogin() {
      return this.$store.getters["auth/isLogged"];
    },
    details() {
      return this.$store.getters["ProfileAndBusinessDetails/getdetails"];
    },

    // profile() {
    //   return this.$store.state.ProfileAndBusinessDetails.profile;
    // },

    ...mapGetters({
      hasLauchNetworkRequest: "social/INIT",
      user: "auth/profilConnected",
      //auth: "auth/user",
      networks: "social/FIND_USER_NETWORK",
      business: "social/FIND_USER_BUSNESS",

      profile: "auth/profilConnected"
    })
  },

  created() {
    this.strategy = {
      business: {
        newType: item => ({
          name: item.name,
          profile_picture: item.logo_path,
          id: item.id,
          user_type: "business"
        }),
        redirect: obj => this.redirection(obj)
      },

      network: {
        newType: item => ({
          name: item.name,
          profile_picture: item.image,
          id: item.id,
          user_type: "network"
        }),
        redirect: obj => this.redirection(obj)
      }
    };

    this.islogin = this.$store.getters["auth/profilConnected"];
    if (this.islogin) {
      this.init();
      this.userOwnPage = this.onRedirect();

      this.notificationPatterns = {
        user: () => "user/notification",
        business: () => `/notification/business/${this.user.slug}`,
        network: () => `/notification/network/${this.user.slug}`
      };

      this.messagePatterns = {
        user: () => "/messages/latest/user",
        business: () => `/messages/latest/${this.user.slug}/business`,
        network: () => `/messages/latest/${this.user.slug}/network`
      };

      this.redirectionPatterns = {
        message: {
          user: () => ({
            name: "Nav Meassage"
          }),
          business: () => ({
            name: "BusinessOwner",
            params: { id: this.user.id },
            query: { tabId: 1 }
          }),
          network: () => null
        },
        notification: {
          business: () => ({
            name: "BusinessOwner",
            params: { id: this.user.id },
            query: { tabId: 2 }
          }),

          user: () => ({
            name: "settings"
          }),
          network: () => ({
            name: "networks",
            params: { id: this.user.id },
            query: { tabId: 2 }
          })
        }
      };

      this.updateNotificationEvent();
    }
  },

  filters: {
    stringify(value) {
      return JSON.stringify(value, null, 2);
    }
  },

  methods: {
    ...mapActions({
      setNetworks: "social/FIND_USER_NETWORK",
      setBusiness: "social/FIND_USER_BUSNESS",
      lauchNetworkRequest: "social/INIT"
    }),

    ...mapMutations({
      auth: "auth/profilConnected"
    }),

    gotoProfile() {
      this.$router.push("profile_owner");
    },

    onRedirect() {
      const link = {
        network: () => ({ name: "networks", params: { id: this.user.id } }),
        business: () => ({
          name: "BusinessOwner",
          params: { id: this.user.id }
        }),
        user: () => ({ name: "profile_owner" })
      };
      return link[this.user.user_type]();
    },

    //from business activity

    redirection(obj) {
      if (obj.routeName !== this.$router.name)
        this.$router.push({
          name: obj.routeName,
          params: { id: obj.routeId }
        });
    },

    process: async function(item, type) {
      let loader = this.$loading.show({
        container: this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18"
      });

      try {
        const data = {
          routeName: "network" == type ? "networks" : "BusinessOwner",
          routeId: item.slug
        };

        const request =
          "network" == type
            ? await this.$repository.share.switch(item.slug, "network")
            : await this.$repository.share.switch(item.slug, "business");

        if (request.success) {
          this.flashMessage.success({
            time: 5000,
            message:
              "business" == type
                ? item.is_owner
                  ? `You are now connected as ${item.name}`
                  : `You are now redirect to ${item.name}`
                : item.is_owner || item.is_editor
                ? `You are now connected as ${item.name}`
                : `You are now redirect to ${item.name}`
          });

          this.auth(this.strategy[type].newType(item));
        }

        loader.hide();
        this.strategy[type].redirect(data);
      } catch (error) {
        console.log(error);
      }
    },

    activedBusiness(item) {
      if (!this.pending) this.process(item, "business");
    },

    activedNetwork(item) {
      if (!this.pending) this.process(item, "network");
    },

    updateNotificationEvent() {
      try {
        const newRouteNotificationApi = this.notificationPatterns[
          this.$store.state.auth.profilConnected.user_type
        ]();

        const newRouteMessageApi = this.messagePatterns[
          this.$store.state.auth.profilConnected.user_type
        ]();

        this.newNotification(newRouteNotificationApi);
        this.newMessage(newRouteMessageApi);
      } catch (error) {
        return new Error(error);
      }
    },

    newRedirection(type) {
      try {
        const newPath = this.redirectionPatterns[type][this.user.user_type]();

        if (newPath) {
          let path = { name: newPath.name };

          if (newPath.params)
            path = Object.assign(path, { params: newPath.params });

          if (newPath.query)
            path = Object.assign(path, { query: newPath.query });

          return path;
        }

        return { name: this.$route.name };
      } catch (err) {
        console.log(err);
      }
    },

    navLink(type) {
      const link = {
        home: () => {
          return this.profile ? { name: "dashboard" } : { name: "Bridge-home" };
        }
      };
      try {
        return link[type]();
      } catch (error) {
        throw new Error(error);
      }
    },

    getUsers() {
      this.$store
        .dispatch("userChat/GET_USERS", "")
        .then(() => {
          console.log("->[Data logged]<-");
        })
        .catch(() => console.log("error"));
    },

    switchToProfile: async function() {
      let loader = this.$loading.show({
        container: this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18"
      });

      const response = await this.$repository.share.switch(null, "reset");

      if (response.success) {
        this.profile({ ...this.auth.user, user_type: "user" });
        this.$router.push({
          name: "profile_owner"
        });
      }

      loader.hide();
    },

    getNetworks: async function() {
      let request = await this.$repository.share.getNetworks();
      if (request.success) this.setNetworks(request.data);
    },

    getBusiness: async function() {
      let request = await this.$repository.share.getBusiness();
      if (request.success) this.setBusiness(request.data);
    },

    init() {
      try {
        if (!this.hasLauchNetworkRequest) {
          this.getNetworks();
          this.getBusiness();
          this.lauchNetworkRequest();
        }
      } catch (error) {
        console.log(error);
      }
    },

    async newNotification(url) {
      await axios
        .get(url)
        .then(response => {
          this.notifications = response.data.data.slice(0, 5);
        })
        .catch(error => console.log("Error In newNotification  => " + error));
    },

    async newMessage(url) {
      await axios
        .get(url)
        .then(response => {
          this.messages = response.data.data;
        })
        .catch(error => console.log(error));
    },

    checkIfExists(object, key) {
      return _.has(object, key);
    }
  }
};
</script>

<style scoped>
.sidebarcover {
  background-size: cover !important ;
}

.dash-fixed-top {
  overflow-x: hidden;
  position: fixed;

  margin-top: -10%;
}

.user-profile {
  width: 50px;
  margin-left: 30px;
  padding: 35px 0;
}

.scroll-area {
  position: relative;
  margin: auto;

  height: inherit;
}

.nav-menu a {
  font-size: 14px !important;
}

.nav-menu > ul {
  display: block !important;
}

.dashboardsidebar {
  background-color: #fcfcfc;
}

p {
  font-weight: 300;
}

a {
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
a,
a:hover {
  text-decoration: none !important;
}

h2 {
  font-size: 20px;
}

.dashboardsidebar {
  position: relative;
}
.dashboardsidebar:before {
  position: absolute;
  content: "";
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.05);
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.3s all ease-in-out;
  -o-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
}
.dashboardsidebar.show-sidebar:before {
  opacity: 1;
  visibility: visible;
}

.site-section {
  padding: 7rem 0;
}

aside,
main {
  height: 100vh;
  min-height: 580px;
}

aside {
  width: inherit;
  left: 0;
  z-index: 1001;
  position: relative;
  -webkit-transform: translateX(-100%);
  -ms-transform: translateX(-100%);
  transform: translateX(-100%);
  background-color: #fff;
  -webkit-transition: 1s -webkit-transform cubic-bezier(0.23, 1, 0.32, 1);
  transition: 1s -webkit-transform cubic-bezier(0.23, 1, 0.32, 1);
  -o-transition: 1s transform cubic-bezier(0.23, 1, 0.32, 1);
  transition: 1s transform cubic-bezier(0.23, 1, 0.32, 1);
  transition: 1s transform cubic-bezier(0.23, 1, 0.32, 1),
    1s -webkit-transform cubic-bezier(0.23, 1, 0.32, 1);
}
.show-sidebar aside {
  -webkit-transform: translateX(0%);
  -ms-transform: translateX(0%);
  transform: translateX(0%);
}
aside .toggle {
  padding-left: 30px;
  padding-top: 30px;
  position: absolute;
  right: 0;
  -webkit-transform: translateX(100%);
  -ms-transform: translateX(100%);
  transform: translateX(100%);
}
.show-sidebar aside .toggle .burger:before,
.show-sidebar aside .toggle .burger span,
.show-sidebar aside .toggle .burger:after {
  background: #000;
}
.show-sidebar aside {
  -webkit-box-shadow: 10px 0 30px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 10px 0 30px 0 rgba(0, 0, 0, 0.1);
}
aside .side-inner {
  padding: 6px 0;
  height: 100vh;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
}

.card-title {
  font-size: 18px;
  line-height: 1.2;
  font-family: poppins;
  font-weight: 400;
  color: white;
}

h6 {
  font-size: 0.875rem;
  font-weight: 400;
}

small {
  font-size: 0.875em;
  color: #a1aab2 !important;
}

.text-muted {
  --bs-text-opacity: 1;
  color: #a1aab2 !important;
}

/* aside .side-inner .profile {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #efefef;
} */
/* aside .side-inner .profile img {
  width: 80px;
  margin: 0 auto 20px auto;
  border-radius: 50%;
} */

aside .side-inner .profile .name {
  font-size: 14px;
  margin-bottom: 0;
}
aside .side-inner .profile .country {
  font-size: 14px;
  color: #cfcfcf;
}
aside .side-inner .counter {
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #efefef;
  text-align: center;
}
aside .side-inner .counter div .number {
  display: block;
  font-size: 20px;
  color: #000;
}
aside .side-inner .counter div .number-label {
  color: #cfcfcf;
}
aside .side-inner .nav-menu ul,
aside .side-inner .nav-menu ul li {
  padding: 0;
  margin: 0px;
  list-style: none;
}
aside .side-inner .nav-menu ul li a {
  display: block;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #455a64;
  font-size: 15px !important;

  line-height: 25px;
  font-family: poppins;
  font-weight: 200;
  position: relative;
  -webkit-transition: 0.3s padding-left ease;
  -o-transition: 0.3s padding-left ease;
  transition: 0.3s padding-left ease;
}
aside .side-inner .nav-menu ul li a:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0px;
  background-color: #ff7315;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.3s opacity ease, 0.3s visibility ease, 0.3s width ease;
  -o-transition: 0.3s opacity ease, 0.3s visibility ease, 0.3s width ease;
  transition: 0.3s opacity ease, 0.3s visibility ease, 0.3s width ease;
}
aside .side-inner .nav-menu ul li a:active,
aside .side-inner .nav-menu ul li a:focus,
aside .side-inner .nav-menu ul li a:hover {
  outline: none;
}
aside .side-inner .nav-menu ul li a:hover {
  background: #fcfcfc;
  color: #000;
}
aside .side-inner .nav-menu ul li a:hover:before {
  width: 4px;
  opacity: 1;
  visibility: visible;
}
aside .side-inner .nav-menu ul li.active a {
  background: #fcfcfc;
  color: #000;
}
aside .side-inner .nav-menu ul li.active a:before {
  opacity: 1;
  visibility: visible;
  width: 4px;
}
aside .side-inner .nav-menu ul li .collapsible {
  position: relative;
}
aside .side-inner .nav-menu ul li .collapsible:after {
  /* content: "\e315"; */
  font-size: 14px;

  position: absolute;
  right: 20px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  -webkit-transition: 0.3s transform ease;
  -o-transition: 0.3s transform ease;
  transition: 0.3s transform ease;
}
aside .side-inner .nav-menu ul li .collapsible[aria-expanded="true"] {
  background: #fcfcfc;
  color: #000;
}
aside .side-inner .nav-menu ul li .collapsible[aria-expanded="true"]:before {
  opacity: 1;
  visibility: visible;
  width: 4px;
}
aside .side-inner .nav-menu ul li .collapsible[aria-expanded="true"]:after {
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}

main {
  width: calc(100%);
  -webkit-transition: 1s -webkit-transform cubic-bezier(0.23, 1, 0.32, 1);
  transition: 1s -webkit-transform cubic-bezier(0.23, 1, 0.32, 1);
  -o-transition: 1s transform cubic-bezier(0.23, 1, 0.32, 1);
  transition: 1s transform cubic-bezier(0.23, 1, 0.32, 1);
  transition: 1s transform cubic-bezier(0.23, 1, 0.32, 1),
    1s -webkit-transform cubic-bezier(0.23, 1, 0.32, 1);
}
.show-sidebar main {
  -webkit-transform: translateX(300px);
  -ms-transform: translateX(300px);
  transform: translateX(300px);
}
main .post-entry {
  margin-bottom: 30px;
}
main .post-entry .custom-thumbnail {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 80px;
  flex: 0 0 80px;
  margin-right: 30px;
}
main .post-content h3 {
  font-size: 14px;
}
main .post-content .post-meta {
  font-size: 15px;
  color: #ccc;
}

/* Burger */
.burger {
  width: 28px;
  height: 32px;
  cursor: pointer;
  position: relative;
  z-index: 99;
  float: right;
}

.burger:before,
.burger span,
.burger:after {
  width: 100%;
  height: 2px;
  display: block;
  background: #000;
  border-radius: 2px;
  position: absolute;
  opacity: 1;
}

.burger:before,
.burger:after {
  -webkit-transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1),
    -webkit-transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
  transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1),
    -webkit-transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
  -o-transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    transform 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1);
  transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    transform 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1);
  transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    transform 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1),
    -webkit-transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
  -webkit-transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-transform 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1);
  content: "";
}

.burger:before {
  top: 4px;
}

.burger span {
  top: 15px;
}

.burger:after {
  top: 26px;
}

/* Hover */
.burger:hover:before {
  top: 7px;
}

.burger:hover:after {
  top: 23px;
}

/* Click */
.burger.active span {
  opacity: 0;
}

.burger.active:before,
.burger.active:after {
  top: 40%;
}

.burger.active:before {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=5);
  /*for IE*/
}

.burger.active:after {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=-5);
  /*for IE*/
}

.burger:focus {
  outline: none;
}
</style>
