<template>
  <div class="home">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="success">
        <b-navbar-brand href="#">BridgeTask</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/">Home</b-nav-item>
            <b-nav-item
              ><router-link to="/about">About</router-link></b-nav-item
            >
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right v-if="login">
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <b-avatar
                  variant="info"
                  src="https://placekitten.com/300/300"
                  class="mr-3"
                ></b-avatar>
                <span class="mr-auto">{{ userData[0].fullname }}</span>
              </template>
              <b-dropdown-item href="/logout">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-navbar-nav v-else>
              <b-nav-item
                ><router-link to="/login">Login</router-link></b-nav-item
              >
              <b-nav-item
                ><router-link to="/signin">SignIn</router-link></b-nav-item
              >
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <b-row class="mt-4">
      <b-col cols="10" offset="1">
        <b-row>
          <b-col md="6" class="mx-auto my-5">
            <b-card
              title="Create A Service"
              tag="article"
              class="my-auto mx-auto"
            >
              <div class="step-2">
                <b-card-text class="w-75 mx-auto mt-5">
                  Create Service
                </b-card-text>
                <b-form class="w-75 mx-auto">
                  <b-form-group id="input-group-4">
                    <b-form-input
                      id="input-4"
                      v-model="id"
                      type="text"
                      :placeholder="id"
                      :value="id"
                      disabled
                    />
                  </b-form-group>
                  <b-form-group id="input-group-4">
                    <b-form-input
                      id="input-4"
                      v-model="name"
                      type="text"
                      placeholder="name"
                      required
                    />
                  </b-form-group>
                  <b-form-group id="input-group-4">
                    <b-form-input
                      id="input-4"
                      v-model="location"
                      type="text"
                      placeholder="location"
                      required
                    />
                  </b-form-group>
                  <b-form-textarea
                    id="textarea"
                    v-model="description"
                    placeholder="description"
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
                </b-form>
                <br />
                <b-button
                  type="submit"
                  variant="outline-primary"
                  v-on:click="add"
                >
                  Create
                </b-button>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "createService",
  data() {
    return {
      id: "",
      name: "",
      location: "",
      description: ""
    };
  },
  beforeMount() {
    let long = this.$store.state.services.length + 1;
    this.id = "S2021-" + long;
  },
  computed: {
    ...mapState(["login", "service", "userData"]),
    ...mapGetters({}),
    noMore() {
      return this.count >= this.totalPages - 1;
    },
    disabled() {
      return this.lloading || this.noMore;
    },
    player() {
      return this.$refs.surf[0].waveSurfer;
    },
    logged() {
      return this.$store.getters.loggedIn;
    }
  },
  methods: {
    add() {
      this.$store
        .dispatch("storeService", {
          id: this.id,
          name: this.name,
          location: this.location,
          resume: this.description,
          user_id: this.userData[0].id
        })
        .then(() => {
          this.$router.push("/");
        });
    }
  }
};
</script>

<style scoped></style>
