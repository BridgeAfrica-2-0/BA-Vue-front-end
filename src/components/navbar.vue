<template>
  <header class="">
    <nav class="navbar navbar-expand-xl p-3 mb-3 rounded">
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

          <a class="d-inline-block align-top mt-1" href="#">
            <img src="@/assets/logo.png" alt="" class="balogo" loading="lazy" />
          </a>
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
                placeholder="Find Pharmacies"
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
                  placeholder="Find Pharmacy"
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
                style=""
                :placeholder="credentials.placeholder"
                v-model="credentials.keyword"
                aria-label=""
                data-original-title=""
                title=""
              />

              <input
                id="search-location"
                ref="foo"
                type="search"
                list="browsers"
                data-toggle="popover"
                class="form-control search-h"
                placeholder="Where "
                aria-label="search bridge africa"
                data-original-title=""
                title=""
              />

              <datalist id="browsers">
                <option value=" Current Location "></option>
                <option value="Yaounde " />
              </datalist>
              <slot name="button">
                <Button />
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
                <a class="nav-link text-dark hov" href=""> Home </a>
              </div>

              <div class="nav-item">
                <a class="nav-link text-dark hov" href=""> Market </a>
              </div>

              <div class="nav-item">
                <a
                  id="messages"
                  class="nav-link"
                  data-toggle="popover"
                  role="button"
                  data-original-title=""
                  title=""
                  ><span class="text-ored"
                    ><fas-icon
                      class="primary"
                      :icon="['fas', 'comment']" /></span
                ></a>
                <b-popover target="messages" triggers="hover" placement="top">
                  <div class="popover-body">
                    <p class="font-weight-bold">Messages</p>
                    <hr class="h-divider" />
                    <div
                      class="
                        d-inline-flex
                        flex-row
                        justify-content-between
                        align-items-center
                        suggest-item
                        cursor-pointer
                      "
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
                          <div class="font-weight-bold">David</div>
                          <div class="small text-muted">Hi</div>
                        </div>
                      </div>
                      <div class="small text-muted">1 min ago</div>
                    </div>
                    <hr class="h-divider" />
                    <div
                      class="
                        d-inline-flex
                        flex-row
                        justify-content-between
                        align-items-center
                        suggest-item
                        cursor-pointer
                      "
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
                          <div class="font-weight-bold">Alina</div>
                          <div class="small text-muted">How are you</div>
                        </div>
                      </div>
                      <div class="small text-muted">3 hours ago</div>
                    </div>
                    <hr class="h-divider" />
                    <div
                      class="
                        d-inline-flex
                        flex-row
                        justify-content-between
                        align-items-center
                        suggest-item
                        cursor-pointer
                      "
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
                          <div class="font-weight-bold">Maxine</div>
                          <div class="small text-muted">Please call me</div>
                        </div>
                      </div>
                      <div class="small text-muted">Yesterday</div>
                    </div>
                    <hr class="h-divider" />
                    <div
                      class="
                        d-inline-flex
                        flex-row
                        justify-content-between
                        align-items-center
                        suggest-item
                        cursor-pointer
                      "
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
                          <div class="font-weight-bold">Ali</div>
                          <div class="small text-muted">Hello</div>
                        </div>
                      </div>
                      <div class="small text-muted">20-Jan</div>
                    </div>
                    <hr class="h-divider" />
                    <div
                      class="
                        d-inline-flex
                        flex-row
                        justify-content-between
                        align-items-center
                        suggest-item
                        cursor-pointer
                      "
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
                          <div class="font-weight-bold">Paul</div>
                          <div class="small text-muted">1m</div>
                        </div>
                      </div>
                      <div class="small text-muted">1-Apr-19</div>
                    </div>
                    <hr class="h-divider" />
                    <a
                      href="https://bridgeafrica.info/nav/inbox.html"
                      class="text-ored"
                      ><u>See Inbox</u></a
                    >
                  </div>
                </b-popover>
              </div>

              <div class="nav-item">
                <a
                  id="notif"
                  class="nav-link"
                  data-toggle="popover"
                  role="button"
                  data-original-title=""
                  title=""
                  ><span class="text-ored"
                    ><b-icon-bell-fill class="col-bg"></b-icon-bell-fill></span
                ></a>
                <b-popover target="notif" triggers="hover" placement="top">
                  <div class="popover-body">
                    <p class="font-weight-bold">Notifications</p>
                    <hr class="h-divider" />
                    <div
                      class="
                        d-inline-flex
                        flex-row
                        align-items-center
                        suggest-item
                        cursor-pointer
                      "
                    >
                      <div>
                        <img
                          src="@/assets/img/profile-pic.jpg"
                          class="rounded-circle"
                          alt=""
                          width="30"
                          height="30"
                        />
                      </div>
                      <div class="d-flex flex-column ml-3">
                        <div>
                          <span class="font-weight-bold">David</span> started
                          following you
                        </div>
                        <div class="small text-muted">1m</div>
                      </div>
                    </div>
                    <hr class="h-divider" />
                    <div
                      class="
                        d-inline-flex
                        flex-row
                        align-items-center
                        suggest-item
                        cursor-pointer
                      "
                    >
                      <div>
                        <img
                          src="@/assets/img/profile-pic.jpg"
                          class="rounded-circle"
                          alt=""
                          width="30"
                          height="30"
                        />
                      </div>
                      <div class="d-flex flex-column ml-3">
                        <div>
                          <span class="font-weight-bold">Alina</span> commented
                          on your post
                        </div>
                        <div class="small text-muted">1m</div>
                      </div>
                    </div>
                    <hr class="h-divider" />
                    <div
                      class="
                        d-inline-flex
                        flex-row
                        align-items-center
                        suggest-item
                        cursor-pointer
                      "
                    >
                      <div>
                        <img
                          src="@/assets/img/profile-pic.jpg"
                          class="rounded-circle"
                          alt=""
                          width="30"
                          height="30"
                        />
                      </div>
                      <div class="d-flex flex-column ml-3">
                        <div>
                          <span class="font-weight-bold">Maxine</span> liked
                          your post
                        </div>
                        <div class="small text-muted">1m</div>
                      </div>
                    </div>
                    <hr class="h-divider" />
                    <div
                      class="
                        d-inline-flex
                        flex-row
                        align-items-center
                        suggest-item
                        cursor-pointer
                      "
                    >
                      <div>
                        <img
                          src="@/assets/img/profile-pic.jpg"
                          class="rounded-circle"
                          alt=""
                          width="30"
                          height="30"
                        />
                      </div>
                      <div class="d-flex flex-column ml-3">
                        <div>
                          <span class="font-weight-bold">Paul</span> approuved
                          your request to join the network
                        </div>
                        <div class="small text-muted">1m</div>
                      </div>
                    </div>
                    <hr class="h-divider" />
                    <div
                      class="
                        d-inline-flex
                        flex-row
                        align-items-center
                        suggest-item
                        cursor-pointer
                      "
                    >
                      <div>
                        <img
                          src="@/assets/img/profile-pic.jpg"
                          class="rounded-circle"
                          alt=""
                          width="30"
                          height="30"
                        />
                      </div>
                      <div class="d-flex flex-column ml-3">
                        <div>
                          <span class="font-weight-bold">David</span> started
                          following you
                        </div>
                        <div class="small text-muted">1m</div>
                      </div>
                    </div>
                    <hr class="h-divider" />
                    <a
                      href="https://bridgeafrica.info/nav/notifications-view-all.html"
                      class="text-ored"
                      ><u>See all Notifications</u></a
                    >
                  </div>
                </b-popover>
              </div>

              <div class="nav-item" id="profilepic">
                <a class="nav-link text-dark" href="">
                  <span
                    ><img
                      :src="auth.user.profile_picture"
                      class="rounded-circle"
                      alt=""
                      width="50"
                      height="50"
                  /></span>
                </a>
              </div>

              <b-tooltip target="profilepic" variant="light" triggers="hover">
                {{ auth.user.name }}
              </b-tooltip>

              <div class="nav-item">
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
                      class="
                        d-inline-flex
                        flex-row
                        align-items-center
                        mb-1
                        w-full
                      "
                    >
                      <Activity />
                    </div>

                    <hr />

                    <router-link
                      to="/myorders"
                      class="
                        other-menu
                        suggest-item
                        cursor-pointer
                        text-decoration-none text-dark
                      "
                    >
                      <span class="mr-2"
                        ><fas-icon
                          class="violet search"
                          :icon="['fas', 'cart-arrow-down']"
                      /></span>
                      My orders
                    </router-link>

                    <hr />

                    <a
                      href="/settings"
                      class="
                        other-menu
                        suggest-item
                        cursor-pointer
                        text-decoration-none text-dark
                      "
                    >
                      <span class="mr-2"
                        ><fas-icon
                          class="violet search"
                          :icon="['fas', 'cogs']"
                      /></span>
                      Account Settings
                    </a>
                    <hr class="h-divider" />
                    <div class="other-menu suggest-item cursor-pointer">
                      <span class="mr-1"
                        ><fas-icon
                          class="violet search"
                          :icon="['fas', 'question']"
                      /></span>
                      Help and Support
                    </div>
                    <hr class="h-divider" />
                    <div class="other-menu suggest-item cursor-pointer">
                      <span class="mr-2"
                        ><fas-icon
                          class="violet search"
                          :icon="['fas', 'globe-americas']"
                      /></span>
                      Language
                    </div>
                    <hr class="h-divider" />
                    <a
                      href="https://bridgeafrica.info/nav/owner-other-menu.html"
                      class="
                        other-menu
                        suggest-item
                        cursor-pointer
                        text-decoration-none text-dark
                      "
                    >
                      <span class="mr-2"
                        ><fas-icon
                          class="violet search"
                          :icon="['fas', 'sign-out-alt']"
                      /></span>
                      Logout
                    </a>
                  </div>
                </b-popover>
              </div>
            </b-collapse>
          </div>
        </div>

        <b-modal ref="setcat" id="myModallnav" hide-footer title=" ">
          <div class="d-block d-lg-block d-xl-none">
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
                  <div class="font-weight-bold">{{ auth.user.name }}</div>
                  <div class="small text-muted">Active</div>
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
                  <p class="font-weight-bold">Your Businesses</p>
                </div>
              </div>
            </div>

            <hr class="mup" />

            <router-link
              to="/myorders"
              class="
                other-menu
                suggest-item
                cursor-pointer
                text-decoration-none text-dark
              "
            >
              <span class="mr-2"
                ><fas-icon
                  class="violet search"
                  :icon="['fas', 'cart-arrow-down']"
              /></span>
              My orders
            </router-link>
            <hr class="mup" />

            <a
              href="/settings"
              class="
                other-menu
                suggest-item
                cursor-pointer
                text-decoration-none text-dark
              "
            >
              <span class="mr-2"
                ><fas-icon class="violet search" :icon="['fas', 'cogs']"
              /></span>
              Account Settings
            </a>
            <hr class="h-divider" />
            <div class="other-menu suggest-item cursor-pointer">
              <span class="mr-1"
                ><fas-icon class="violet search" :icon="['fas', 'question']"
              /></span>
              Help and Support
            </div>
            <hr class="h-divider" />
            <div class="other-menu suggest-item cursor-pointer">
              <span class="mr-2"
                ><fas-icon
                  class="violet search"
                  :icon="['fas', 'globe-americas']"
              /></span>
              Language
            </div>
            <hr class="h-divider" />
            <a
              href="https://bridgeafrica.info/nav/owner-other-menu.html"
              class="
                other-menu
                suggest-item
                cursor-pointer
                text-decoration-none text-dark
              "
            >
              <span class="mr-2"
                ><fas-icon
                  class="violet search"
                  :icon="['fas', 'sign-out-alt']"
              /></span>
              Logout
            </a>
          </div>
        </b-modal>
      </div>
    </nav>

    <div></div>
  </header>
</template>

<script>
import Button from "@/components/ButtonNavBarFind.vue";
import Activity from "@/components/ShowActivity.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "navbar",
  components: {
    Button,
    Activity,
  },
  props: {
    credentials: {
      type: Object,
      default: function () {
        return {
          keyword: "",
          placeholder: "",
        };
      },
    },
  },

  data() {
    return {
      isActive: false,
      shownav: false,
    };
  },

  computed: {
    ...mapGetters({
      hasLauchNetworkRequest: "social/INIT",
      user: "auth/user",
      social: "social/AUTH",
    }),

    auth() {
      return this.social ? this.social : this.user;
    },
  },

  created() {
    this.init();
  },

  methods: {
    ...mapActions({
      setNetworks: "social/FIND_USER_NETWORK",
      setBusiness: "social/FIND_USER_BUSNESS",
      lauchNetworkRequest: "social/INIT",
    }),
    toggleinfput() {
      this.$refs.mobileinput.style.display = "block";
      this.isActive = true;
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
          console.log("init navbar", this.hasLauchNetworkRequest);
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
  },
};
</script>

<style scoped>
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

.mup {
  margin-top: -5px;
}
</style>
