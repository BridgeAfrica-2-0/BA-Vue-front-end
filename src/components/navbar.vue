<template>
  <div>
    <v-container>
      <b-navbar toggleable="lg" class="py-2 my-auto montre color">
        <b-navbar-brand href="#" class="nav-logo">
          <img
            src="@/assets/img/logo_bridge_africa.png"
            class="w-50 h-50 m-0"
            alt="Kitten"
          />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="move-search">
            <b-input-group class="my-auto input-size">
              <b-form-input
                placeholder="Search Bridge Africa"
                class=""
              ></b-form-input>
            </b-input-group>
            <fas-icon class="primary search" :icon="['fas', 'search']" />
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-5 pl-5 my-auto col nav-move">
            <div class="home">
              <b-nav-item href="#" class="ml-3 home-icon"
                ><fas-icon class="primary" :icon="['fas', 'home']" />
                <span class="ml-1">Home</span>
              </b-nav-item>
            </div>
            <b-nav-item href="#" class="ml-2">
              <fas-icon class="primary" :icon="['fas', 'store']" />
              <span class="ml-1">MarketPlace</span>
            </b-nav-item>
            
              <b-dropdown
                size="sm"
                variant="link"
                class="p-0 ml-2"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template #button-content>
                  <fas-icon class="primary" :icon="['fas', 'comment']" />
                </template>
                <b-dropdown-item-button>
                  <b-link class="link" href="/message"> Messages</b-link>
                </b-dropdown-item-button>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-group id="dropdown-group-1">
                  <b-dropdown-item-button
                    >First Grouped item</b-dropdown-item-button
                  >
                  <b-dropdown-item-button
                    >Second Grouped Item</b-dropdown-item-button
                  >
                </b-dropdown-group>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item-button>
                  See Others Messages
                </b-dropdown-item-button>
              </b-dropdown>
              <b-dropdown
                size="sm"
                variant="link"
                class="p-0 ml-1"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template #button-content>
                  <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
                </template>
                <b-dropdown-item-button>
                  Messages
                </b-dropdown-item-button>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-group id="dropdown-group-1">
                  <b-dropdown-item-button
                    >First Grouped item</b-dropdown-item-button
                  >
                  <b-dropdown-item-button
                    >Second Grouped Item</b-dropdown-item-button
                  >
                </b-dropdown-group>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item-button>
                  See Others Messages
                </b-dropdown-item-button>
              </b-dropdown>


            <b-nav-item-dropdown right>
              <template #button-content class="my-auto">
                <b-avatar
                  size="sm"
                  class="my-auto"
                  src="https://placekitten.com/300/300"
                ></b-avatar
                >&nbsp;
                <em>Maxine </em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <b-row class="show">
        <b-col cols="9">
          <b-navbar-brand href="#">
            <img
              src="@/assets/img/logo_bridge_africa.png"
              class="w-100 h-100 m-0 px-3 py-2"
              alt="Kitten"
            />
          </b-navbar-brand>
        </b-col>
        <b-col cols="3" class="mx-auto my-auto">
          <b-icon
            icon="three-dots-vertical"
            font-scale="2"
            v-b-toggle.sidebar-right
          ></b-icon>
        </b-col>
      </b-row>
      <b-sidebar id="sidebar-right" title="Menu" right shadow>
        <div class="px-3 py-2">
          <b-input-group class="my-auto input-size-phone">
            <template #append>
              <b-input-group-text class=""
                ><strong class="color-site">
                  <b-icon-search></b-icon-search> </strong
              ></b-input-group-text>
            </template>
            <b-form-input
              placeholder="Search Bridge Africa"
              class="border-right-0"
            ></b-form-input>
          </b-input-group>
          <fas-icon class="primary" :icon="['fas', 'home']" />
          <b-nav-item href="#" class="ml-3">
            Home
          </b-nav-item>
          <b-nav-item href="#" class="ml-2"
            ><b-icon-shop class="col-bg font-weight-bolder"></b-icon-shop>
            MarketPlace
          </b-nav-item>
          <b-dropdown
            size="sm"
            variant="link"
            class="p-0 ml-2"
            toggle-class="text-decoration-none"
            no-caret
          >
            <template #button-content>
              <b-icon-chat-dots-fill class="col-bg"></b-icon-chat-dots-fill>
            </template>
            <b-dropdown-item-button>
              Messages
            </b-dropdown-item-button>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-group id="dropdown-group-1">
              <b-dropdown-item-button
                >First Grouped item</b-dropdown-item-button
              >
              <b-dropdown-item-button
                >Second Grouped Item</b-dropdown-item-button
              >
            </b-dropdown-group>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item-button>
              See Others Messages
            </b-dropdown-item-button>
          </b-dropdown>
          <b-dropdown
            size="sm"
            variant="link"
            class="p-0 ml-1"
            toggle-class="text-decoration-none"
            no-caret
          >
            <template #button-content>
              <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
            </template>
            <b-dropdown-item-button>
              Messages
            </b-dropdown-item-button>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-group id="dropdown-group-1">
              <b-dropdown-item-button
                >First Grouped item</b-dropdown-item-button
              >
              <b-dropdown-item-button
                >Second Grouped Item</b-dropdown-item-button
              >
            </b-dropdown-group>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item-button>
              See Others Messages
            </b-dropdown-item-button>
          </b-dropdown>

          <b-nav-item-dropdown>
            <template #button-content class="my-auto">
              <b-avatar
                size="sm"
                class="my-auto"
                src="https://placekitten.com/300/300"
              ></b-avatar
              >&nbsp;
              <em>Maxine </em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </div>
      </b-sidebar>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style scoped>
.input-size {
  width: 401px;
}

.input-size-phone {
  width: 401px;
}

.color-site {
  color: #e75c18;
}

.msg-bell-icon {
  border-left: 1px solid rgb(230, 230, 230);
  border-right: 1px solid rgb(230, 230, 230);
  height: 20px;
  padding-left: 5px;
  padding-right: 5px;
}

.home {
  border-left: 1px solid rgb(230, 230, 230);
  border-right: 1px solid rgb(230, 230, 230);
  height: 20px;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 10px;
}

.home-icon {
  margin-top: -10px;
}

.col-bg {
  color: #e75c18;
}

.color {
  background-color: #fff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.nav-move {
  position: relative;
  left: 380px;
}

.move-search {
  position: relative;
  left: 300px;
}

.search {
  margin-top: 10px;
  margin-left: -25px;
  z-index: 3;
  cursor: pointer;
}
.nav-logo {
  position: relative;
  left: 140px;
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
    display: none;
  }
}
@media (min-width: 768px) {
  .lb-grid {
    height: 350px;
  }
  .show {
    display: none;
  }
}
@media (min-width: 992px) {
  .lb-grid {
    height: 400px;
  }
  .show {
    display: none;
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
    display: none;
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
    display: none;
  }
}
</style>
