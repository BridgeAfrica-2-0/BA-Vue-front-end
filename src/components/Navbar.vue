<template>
  <header class=""> 
    <nav class="navbar navbar-expand-xl p-3 mb-3 rounded" >
      <div class="container-fluid">
        <div class="col-md-12 col-lg-2 col-xl-2 text-center">
          <span class="d-block d-lg-none">
            <b-icon
              icon="house-fill"
              style="float: left"
              font-scale="1.5; margin-top:5px"
              variant="primary"
            ></b-icon>
          </span>

          <router-link
            class="d-inline-block align-top mt-1"
            :to="{ name: 'home1' }"
          >
            <img src="@/assets/logo.png" alt="" class="balogo" loading="lazy" />
          </router-link>
        </div>

        <div class="col-lg-9 col-xl-6">
          <form class="d-block d-lg-none">
            <b-input-group class="b-shadow mt-3">
              <div class="input-group-append color-mobile" style="border: none">
                <span
                  class="input-group-text border-left-0 color-mobile"
                  style="width: 40px; border-right: none"
                >
                  <b-icon
                    icon="search"
                    style="color: #e75c18"
                    font-scale="1.5"
                  ></b-icon>
                </span>
              </div>

              <input
                id="search-ba"
                type="search"
                data-toggle="popover"
                class="form-control search-mobile"
                style="border-left: none"
                :placeholder="$t('general.Find_Pharmacies')"
                aria-label=""
                data-original-title=""
                title=""
                v-on:click="toggleinput()"
              />
            </b-input-group>

            <span style="display: none" ref="mobileinput">
              <b-input-group class="b-shadow mt-2">
                <div
                  class="input-group-append color-mobile"
                  style="border: none"
                >
                  <span
                    class="input-group-text border-left-0 color-mobile"
                    style="width: 40px; border-right: none"
                  >
                    <b-icon
                      icon="geo-alt"
                      style="color: #e75c18"
                      font-scale="1.5"
                    ></b-icon>
                  </span>
                </div>

                <input
                  id="search-ba"
                  type="search"
                  list="browsers"
                  data-toggle="popover"
                  class="form-control search-mobile"
                  style="border-left: none"
                  :placeholder="$t('general.Find_Pharmacy')"
                  aria-label=""
                  data-original-title=""
                  title=""
                />

                <datalist id="browsers">
                  <option value=" Current Location "></option>
                  <option value="Yaounde " />
                </datalist>
              </b-input-group>
            </span>
          </form>
          <span class="d-none d-lg-block">
            <form class="form-inline input-group b-shadow b-radius">
              <input
                id="search-ba"
                type="search"
                data-toggle="popover"
                class="form-control search-h"
                style="font-size: 17px !important"
                :placeholder="searchOptions.placeholder"
                v-model="searchOptions.keyword"
                aria-label=""
                data-original-title=""
                title=""
              />

              <vue-bootstrap-typeahead
                v-model="query"
                :data="neigbourhoods"
                :minMatchingChars="0"
                :maxMatches="10"
                :serializer="(item) => item.name"
                :placeholder="$t('general.Where')"
                class="search-hh w-44"
              />

              <slot name="button">
                <Button @click.native="getKeyword" />
              </slot>
            </form>
          </span>
          <div id="search-popover" class="d-none"></div>
        </div>

        <div class="col-md-12 col-lg-1 col-xl-4">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
            v-b-modal="'myModallnav'"
            @click="togglenav()"
            :class="{ togglebtn: isActive }"
          >
            <fas-icon class="primary search" :icon="['fas', 'bars']" />
          </button>

          <div style="float: right">
            <b-collapse id="nav-collapse" is-nav>
              <div class="nav-item">
                <router-link
                  :to="navLink('home')"
                  class="nav-link text-dark hov"
                  href=""
                >
                  {{ $t("general.Home") }}
                </router-link>
              </div>

              <div class="nav-item">
                <router-link
                  :to="{ name: 'Search' }"
                  class="nav-link text-dark hov"
                >
                  {{ $t("general.Market") }}
                </router-link>
              </div>


              <div  v-if="!islogin" class="nav-item" >
                <router-link
                  :to="{ name: 'signup' }"
                  class="nav-link text-dark hov"
                >
                  {{ $t("auth.signup") }}
                </router-link>
              </div>


              <div  v-if="!islogin" class="nav-item" >
                <router-link
                  :to="{ name: 'Login' }"
                  class="nav-link text-dark hov"
                >
                  {{ $t("auth.login") }}
                </router-link>
              </div>



              <!-- Messages Started -->
              <div v-if="islogin" class="nav-item">
                <a
                  id="messages"
                  class="nav-link"
                  role="button"
                  data-original-title=""
                  title=""
                  ><span class="text-ored"
                    ><fas-icon
                      class="primary"
                      :icon="['fas', 'comment']"
                    /> </span
                ></a>
                <b-popover target="messages" triggers="hover" placement="top">
                  <div class="popover-body">
                    <p class="font-weight-bold">Messages</p>
                    <div v-for="message in messages" :key="message.id">
                      <hr class="h-divider" />
                      <div
                        class="d-inline-flex flex-row justify-content-between align-items-center suggest-item cursor-pointer"
                      >
                        <div class="d-inline-flex flex-row align-items-center">
                          <div>
                            <img
                              src="@/assets/img/profile-pic.jpg"
                              class="rounded-circle"
                              alt=""
                              width="30"
                              height="30"
                            />
                          </div>
                          <div class="d-flex flex-column ml-1 line-size">
                            <div class="font-weight-bold">
                              {{
                                message.sender_business
                                  ? message.sender_business.name
                                  : ""
                              }}
                            </div>
                            <div class="small text-muted">
                              {{ message.message.substring(0, 20) }}
                            </div>
                          </div>
                        </div>
                        <div class="small text-muted">
                          {{ message.created_at | moment("from", "now") }}
                        </div>
                      </div>
                    </div>
                    <hr class="h-divider" />
                    <router-link :to="newRedirection('message')">
                      <u>{{ $t("general.See_Inbox") }}</u>
                    </router-link>
                  </div>
                </b-popover>
              </div>
              <!-- Messages Ended -->
              <!-- Notifications Started -->
              <div v-if="islogin" class="nav-item">
                <a
                  id="notif"
                  class="nav-link"
                  data-toggle="popover"
                  role="button"
                  data-original-title=""
                  title=""
                  ><span class="text-ored"
                    ><b-icon-bell-fill class="col-bg"> </b-icon-bell-fill></span
                ></a>
                <b-popover target="notif" triggers="hover" placement="top">
                  <div class="popover-body">
                    <p class="font-weight-bold">
                      {{ $t("general.Notifications") }}
                    </p>
                    <div
                      v-for="notification in notifications"
                      :key="notification.id"
                    >
                      <hr class="h-divider" />
                      <div
                        class="d-inline-flex flex-row align-items-center suggest-item cursor-pointer"
                      >
                        <!-- <div>
                          <img src="@/assets/img/profile-pic.jpg" class="rounded-circle" alt="" width="30" height="30" />
                        </div> -->
                        <div class="d-flex flex-column ml-3">
                          <div>{{ notification.notification_text }}</div>
                          <div class="small text-muted">
                            <span class="text-capitalize">
                              {{
                                notification.created_at | moment("from", "now")
                              }}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr class="h-divider" />

                    <router-link :to="newRedirection('notification')"
                      ><u>{{
                        $t("general.See_all_Notifications")
                      }}</u></router-link
                    >
                  </div>
                </b-popover>
              </div>
              <!-- Notifications Ended -->

              <div  v-if="islogin"  class="nav-item cursor" id="profilepic">
                <router-link :to="userOwnPage">
                  <b-avatar
                    variant="light"
                    :src="user.profile_picture"
                    :square="'user' == user.user_type ? false : true"
                    class="logo-sizee"
                  ></b-avatar>
                </router-link>
              </div>

              <b-tooltip v-if="islogin"  target="profilepic" variant="light" triggers="click">
                {{ user.name }}
              </b-tooltip>

              <div  v-if="islogin"  class="nav-item">
                <a
                  id="other-menu"
                  class="nav-link text-dark arrow-down"
                  data-toggle="popover"
                  role="button"
                  data-original-title=""
                  title=""
                >
                </a>
                <b-popover target="other-menu" triggers="hover" placement="top">
                  <div class="popover-body">
                    <div
                      style="width: 100%"
                      class="d-inline-flex flex-row align-items-center mb-1"
                    >
                      <Activity class="w-full" />
                    </div>

                    <a
                      v-if="'user' != user.user_type"
                      @click.prevent="switchToProfile"
                      href="#"
                      class="other-menu suggest-item cursor-pointer text-decoration-none text-dark"
                    >
                      <span class="mr-2"
                        ><fas-icon
                          class="violet search"
                          :icon="['fas', 'user']"
                      /></span>
                      Profile
                    </a>
                    <hr class="h-divider" />

                    <router-link
                      :to="{ name: 'orders' }"
                      class="other-menu suggest-item cursor-pointer text-decoration-none text-dark"
                    >
                      <span class="mr-2"
                        ><fas-icon
                          class="violet search"
                          :icon="['fas', 'cart-arrow-down']"
                      /></span>
                      {{ $t("general.My_orders") }}
                    </router-link>
                    <hr class="h-divider" />

                    <router-link
                      :to="{ name: 'settings' }"
                      class="other-menu suggest-item cursor-pointer text-decoration-none text-dark w-full"
                    >
                      <span class="mr-2 w-full"
                        ><fas-icon
                          class="violet search"
                          :icon="['fas', 'cogs']"
                      /></span>
                      {{ $t("general.Account_Settings") }}
                    </router-link>
                    <hr class="h-divider" />
                    <div class="other-menu suggest-item cursor-pointer">
                      <span class="mr-1"
                        ><fas-icon
                          class="violet search"
                          :icon="['fas', 'question']"
                      /></span>
                      {{ $t("general.Help_and_Support") }}
                    </div>
                    <hr class="h-divider" />

                    <div class="other-menu suggest-item cursor-pointer">
                      <b-link v-b-toggle="'collapse-2'"
                        ><fas-icon
                          class="violet search mr-1"
                          :icon="['fas', 'globe-americas']"
                        />
                        {{ $t("general.Language") }}</b-link
                      >

                      <b-collapse id="collapse-2" class="mt-1">
                        <b-card-text
                          @click="$i18n.locale = 'en'"
                          class="cursor-pointer mb-1"
                          >{{ $t("auth.english") }}</b-card-text
                        >
                        <b-card-text @click="$i18n.locale = 'fr'">{{
                          $t("auth.french")
                        }}</b-card-text>
                      </b-collapse>
                    </div>
                    <hr class="h-divider" />
                    <a
                      @click="logout"
                      href="#"
                      class="other-menu suggest-item cursor-pointer text-decoration-none text-dark"
                    >
                      <span class="mr-2"
                        ><fas-icon
                          class="violet search"
                          :icon="['fas', 'sign-out-alt']"
                      /></span>
                      {{ $t("general.Logout") }}
                    </a>
                  </div>
                </b-popover>
              </div>
            </b-collapse>
          </div>
        </div>

        <b-modal ref="setcat" id="myModallnav" hide-footer title=" ">
          <div  v-if="islogin"  class="d-block d-lg-block d-xl-none">
            <div class="mt-3">
              <div class="d-inline-flex flex-row align-items-center">
                <div>
                  <img
                    src="@/assets/img/profile-pic.jpg"
                    class="rounded-circle"
                    alt=""
                    width="30"
                    height="30"
                  />
                </div>
                <div class="d-flex flex-column ml-1 line-size">
                  <div class="font-weight-bold">{{ user.name }}</div>
                  <div class="small text-muted">{{ $t("general.Active") }}</div>
                </div>
              </div>

              <br />

              <div class="d-inline-flex flex-row align-items-center mb-1">
                <div>
                  <img
                    src="@/assets/img/logo3.png"
                    class="rounded-circle"
                    alt=""
                    width="25"
                    height="25"
                  />
                </div>
                <div class="ml-3 mt-2">
                  <p class="font-weight-bold">
                    {{ $t("general.Your_Businesses") }}
                  </p>
                </div>
              </div>
            </div>

            <hr class="mup" />

            <router-link
              :to="{ name: 'orders' }"
              class="other-menu suggest-item cursor-pointer text-decoration-none text-dark"
            >
              <span class="mr-2"
                ><fas-icon
                  class="violet search"
                  :icon="['fas', 'cart-arrow-down']"
              /></span>
              {{ $t("general.My_orders") }}
            </router-link>
            <hr class="h-divider" />

            <router-link
              :to="{ name: 'settings' }"
              class="other-menu suggest-item cursor-pointer text-decoration-none text-dark"
            >
              <span class="mr-2"
                ><fas-icon class="violet search" :icon="['fas', 'cogs']"
              /></span>

              {{ $t("general.Account_Settings") }}
            </router-link>
            <hr class="h-divider" />
            <div class="other-menu suggest-item cursor-pointer">
              <span class="mr-1"
                ><fas-icon class="violet search" :icon="['fas', 'question']"
              /></span>
              {{ $t("general.Help_and_Support") }}
            </div>
            <hr class="h-divider" />
            <div class="other-menu suggest-item cursor-pointer">
              <b-link v-b-toggle="'collapse-2'" class="m-1"
                ><fas-icon
                  class="violet search"
                  :icon="['fas', 'globe-americas']"
                />
                {{ $t("general.Language") }}</b-link
              >

              <b-collapse id="collapse-2" class="mt-1">
                <b-card-text
                  @click="$i18n.locale = 'en'"
                  class="cursor-pointer mb-1"
                  >{{ $t("auth.english") }}</b-card-text
                >
                <b-card-text @click="$i18n.locale = 'fr'">{{
                  $t("auth.french")
                }}</b-card-text>
              </b-collapse>
            </div>
            <hr class="h-divider" />
            <a
              href="#"
              @click.prevent="logout"
              class="other-menu suggest-item cursor-pointer text-decoration-none text-dark"
            >
              <span class="mr-2"
                ><fas-icon
                  class="violet search"
                  :icon="['fas', 'sign-out-alt']"
              /></span>
              {{ $t("general.Logout") }}
            </a>
          </div>
        </b-modal>
      </div>
    </nav>

    <div></div>
  </header>
</template>

<script>
import _ from "lodash";

import Button from "@/components/ButtonNavBarFind.vue";
import Activity from "@/components/ShowActivity.vue";
// import NavBarNotifications from '@/components/NavBarNotifications.vue';
import { mapGetters, mapActions, mapMutations } from "vuex";
import axios from "axios";
import VueBootstrapTypeahead from "vue-bootstrap-typeahead";

export default {
  name: "navbar",
  components: {
    Button,
    Activity,
    VueBootstrapTypeahead,
    // NavBarNotifications
  },
  props: {
    credentials: {
      type: Object,
      default: function () {
        return {
          keyword: "",
          placeholder: this.$t("general.All"),
        };
      },
    },
  },
  data() {
    return {
      isActive: false,
      islogin:true,
      shownav: false,
      notifications: [],
      messages: [],
      notificationPatterns: null,
      messagePatterns: null,
      redirectionPatterns: null,
      searchOptions: {
        keyword: "",
        placeholder: this.$t("general.All"),
      },
      query: "",
      selectedUser: null,
      users: [],
    };
  },
  computed: {
    ...mapGetters({
      hasLauchNetworkRequest: "social/INIT",
      user: "auth/profilConnected",
      auth: "auth/user",
      neigbourhoods: "auth/neigbourhoods",
    }),
  },
  beforeMount() {
    console.log("beforeMount");

    this.getLocation();
  },
  created() {
    //check for authentication

      this.islogin=this.$store.getters["auth/isLogged"];
     
     console.log(this.islogin);
     console.log("yoo mother fucjjeryt");
     
     if(this.islogin){    
    this.init();
    this.userOwnPage = this.onRedirect(); 

    this.notificationPatterns = {
      user: () => "/notification/latest/user",
      business: () => `/notification/business/${this.user.id}`,
      network: () => `/network/${this.user.id}/notifications`,
    };

    this.messagePatterns = {
      user: () => "/messages/latest/user",
      business: () => `/messages/latest/${this.user.id}/business`,
      network: () => `/messages/latest/${this.user.id}/network`,
    };

    this.redirectionPatterns = {
      message: {
        user: () => ({
          name: "Nav Meassage",
        }),
        business: () => ({
          name: "BusinessOwner",
          params: { id: this.user.id },
          query: { tabId: 1 },
        }),
        network: () => null,
      },
      notification: {
        business: () => ({
          name: "BusinessOwner",
          params: { id: this.user.id },
          query: { tabId: 2 },
        }),

        user: () => ({
          name: "settings",
        }),
        network: () => ({
          name: "networks",
          params: { id: this.user.id },
          query: { tabId: 2 },
        }),
      },
    };

    this.updateNotificationEvent();
     }
  },

  watch: {
    "$store.state.auth.profilConnected": function () {
      this.updateNotificationEvent();
      this.userOwnPage = this.onRedirect();
    },

    credentials: {
      deep: true,
      handler() {
        this.searchOptions = this.credentials;
      },
    },

    query(newQuery) {
      axios
        .get(`business-community/neighborhood/${newQuery}`)
        .then(({ data }) => {
          this.$store.commit("auth/setneigbourhoods", data.data);
        });
    },
  },

  filters: {
    stringify(value) {
      return JSON.stringify(value, null, 2);
    },
  },

  methods: {
    ...mapActions({
      setNetworks: "social/FIND_USER_NETWORK",
      setBusiness: "social/FIND_USER_BUSNESS",
      lauchNetworkRequest: "social/INIT",
      getGeo: "business/getGeo",
      getNeigbourhoods: "auth/neigbourhoods",
      Logout: "auth/logout",
    }),

    ...mapMutations({
      profile: "auth/profilConnected",
    }),

    onRedirect() {
      const link = {
        network: () => ({ name: "networks", params: { id: this.user.id } }),
        business: () => ({
          name: "BusinessOwner",
          params: { id: this.user.id },
        }),
        user: () => ({ name: "profile_owner" }),
      };
      return link[this.user.user_type]();
    },

    getLocation() {
      const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        this.getGeo({ lat: latitude, lng: longitude });

        //time to get some neighbourhood mother fuckers ?lat=3.87374300&lng=11.49966000
        this.getNeigbourhoods({ lat: "", lng: "" });
      };

      const error = (err) => {
        console.log(error);
      };

      // This will open permission popup
      navigator.geolocation.getCurrentPosition(success, error);
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
      const newPath = this.redirectionPatterns[type][this.user.user_type]();

      if (newPath) {
        let path = { name: newPath.name };

        if (newPath.params)
          path = Object.assign(path, { params: newPath.params });

        if (newPath.query) path = Object.assign(path, { query: newPath.query });

        return path;
      }

      return { name: this.$route.name };
    },

    getKeyword() {
      if (!this.searchOptions.keyword) return false;

      if (this.$route.name != "Search") {
        console.log("the keyword is: ", this.credentials.keyword);
        this.$store
          .dispatch("allSearch/SEARCH", {
            keyword: this.credentials.keyword,
          })
          .catch((err) => {
            console.log("Error erro!");
          });

        this.$router.push({
          name: "GlobalSearch",
          query: { keyword: this.credentials.keyword },
        });
      }
    },
    navLink(type) {
      const link = {
        home: () => {
          return this.profile ? "dashboard" : "home1";
        },
      };
      try {
        return link[type]();
      } catch (error) {
        throw new Error(error);
      }
    },
    toggleinfput() {
      this.$refs.mobileinput.style.display = "block";
      this.isActive = true;
    },
    getUsers() {
      this.$store
        .dispatch("userChat/GET_USERS", "")
        .then(() => {
          console.log("->[Data logged]<-");
        })
        .catch(() => console.log("error"));
    },

    logout: async function () {
      let loader = this.$loading.show({
        container: this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });

      const requestForReset = await this.$repository.share.switch(
        null,
        "reset"
      );

      if (requestForReset.success) {
        const response = await this.$repository.notification.logOut();

        if (response.success) {
          loader.hide();
          this.$router.push({ name: "home1" });
          this.Logout();
        }
        return false;
      }
      loader.hide();
    },

    switchToProfile: async function () {
      let loader = this.$loading.show({
        container: this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });

      const response = await this.$repository.share.switch(null, "reset");

      if (response.success) {
        this.profile({ ...this.auth.user, user_type: "user" });
        this.$router.push({
          name: "profile_owner",
        });
      }

      loader.hide();
    },

    toggleinput() {
      this.$refs.mobileinput.style.display = "block";
    },

    getNetworks: async function () {
      let request = await this.$repository.share.getNetworks();
      if (request.success) this.setNetworks(request.data);
    },

    getBusiness: async function () {
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

    togglenav() {
      if (this.shownav == false) {
        this.shownav = true;
        console.log(this.shownav);
      } else {
        this.shownav = false;
        console.log(this.shownav);
      }
    },

    async newNotification(url) {
      await axios
        .get(url)
        .then((response) => {
          this.notifications = response.data.data.slice(0, 5);
        })
        .catch((error) => console.log("Error In newNotification  => " + error));
    },

    async newMessage(url) {
      await axios
        .get(url)
        .then((response) => {
          this.messages = response.data.data;
        })
        .catch((error) => console.log(error));
    },

    // async getNotifications() {
    //   await axios
    //     .get(`notification/latest/user`)
    //     .then((response) => {
    //       console.warn(response.data.data);
    //       this.notifications = response.data.data;
    //     })
    //     .catch((error) => console.log("Error In newMessage  => " + error));
    // },
    // async getMessages() {
    //   await axios
    //     .get(`messages/latest/user`)
    //     .then((response) => {
    //       this.messages = response.data.data;
    //     })
    //     .catch((error) => console.log(error));
    // },
  },
};
</script>
<style>
.vbst-item:hover {
  color: white !important;
}
</style>

<style scoped>
.w-44 {
  width: 44%;
}

.logo-sizee {
  width: 40px !important;
  height: 40px !important;
  object-fit: cover;
}
.hov:hover {
  background-color: #eeeeef;
  border-color: #eeeeef;
}

@media (min-width: 992px) {
  .balogo {
    width: 170px;
  }
}

@media (max-width: 992px) {
  .balogo {
    width: 100px;
    margin-left: -30px;
  }
}

.b-shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.b-radius {
  border-radius: 10px;
}

.color-sit {
  background-color: #e75c18;
}

@media only screen and (max-width: 992px) {
  .search-mobile {
    border-left: none;
  }

  .color-mobile {
    background-color: white;
  }
}

@media only screen and (min-width: 768px) {
  .search-h {
    height: 48px;
  }
}

.input-size {
  width: 401px;
}

.input-size-phone {
  width: 401px;
}

.color-site {
  color: #e75c18;
}

.col-bg {
  color: #e75c18;
}

/*Responsive Side*/

@media (max-width: 576px) {
  .lb-grid {
    height: 200px;
  }
  .corps {
    margin-top: 2rem !important;
  }

  .montre {
    display: none;
  }
}
@media (min-width: 576px) {
  .lb-grid {
    height: 300px;
  }
  .show {
    display: block;
  }
}
@media (min-width: 768px) {
  .lb-grid {
    height: 350px;
  }
  .show {
    display: block;
  }
}
@media (min-width: 992px) {
  .lb-grid {
    height: 400px;
  }
  .show {
    display: block;
  }
}
@media (min-width: 1200px) {
  .lb-grid {
    height: 500px;
  }
  .corps {
    margin-top: 6rem !important;
  }

  .show {
    display: block;
  }
}
@media (min-width: 1400px) {
  .lb-grid {
    height: 500px;
  }

  .corps {
    margin-top: 6rem !important;
  }

  .show {
    display: block;
  }
}

.website-logo-name {
  font-size: 24px;
  color: #2e2e2e;
  margin-top: 2px;
}
.vl {
  border-left: 1px solid #dee2e6;
  height: 20px;
}
.text-ored {
  color: #e75c18;
}

.text-dark {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: rgba(43, 39, 60, 1);
  text-align: left;
}

.line-size {
  width: 150px;
}

.blec-container {
  width: 95%;
}

@media (max-width: 992px) {
  .navbar-toggler {
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    position: absolute !important;

    margin-top: -100px !important;

    right: 13px !important;
  }

  .togglebtn {
    margin-top: -145px !important;
  }
}
.shadow-nav {
  box-shadow: 0 0.25rem 0.5rem rgb(0 0 0 / 10%) !important;
}
.mup {
  margin-top: -5px;
}
.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}
.msg-number {
  color: black;
  background: transparent;
  position: relative;
  top: -9 px;
  right: 9 px;
  font-weight: bold;
}
</style>

<style >
@media only screen and (min-width: 768px) {
  .search-hh .form-control {
    height: 48px !important;

    margin-bottom: 0;
    border-radius: 0px;

    border-bottom: hidden;
  }
}
</style>