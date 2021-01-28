<template>
  <div class="col">
    <div class="row">
      <div>
        <img class="ml-4" fluid src="../../assets/img/about2.jpg" alt="" />
        <img class="ml-2" src="../../assets/img/about2.jpg" alt="" />
        <img class="ml-2" src="../../assets/img/about2.jpg" alt="" />
      </div>
      <div class="container"></div>
    </div>
    <div class="row mt-2">
      <div class="col">
        <div>
          <b-avatar
            src="https://placekitten.com/400/300"
            class="owner-profile-image-profile float-left"
            badge-variant="primary"
            badge-offset="10px"
            size="100"
          >
          </b-avatar>
        </div>
        <div class="d-inline-block mt-4 ml-4 float-left">
          <h5 class="font-weight-bolder">User Name</h5>
          <p>@User Name Alias</p>
        </div>
      </div>
      <div class="col- mt-4">
        <div>
          <b-button class="mr-2" variant="danger">Promote</b-button>
          <b-button class="mr-2" variant="success">Contact</b-button>
          <b-button variant="primary">Website</b-button>
        </div>
      </div>
    </div>
    <div class="row">
      <b-container fluid="md" class="text-justify mt-2">
        <b-row>
          <b-col cols="12">
            <b-tabs content-class="mt-3" fill pills card>
              <b-tab title="Home"><HomePage /></b-tab>
              <b-tab title="About"></b-tab>
              <b-tab title="Media"></b-tab>
              <b-tab title="Market Place"></b-tab>
              <b-tab title="Networks"></b-tab>
              <b-tab title="Followers"></b-tab>
            </b-tabs>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import HomePage from "../businessf/tabs/businessHome";

export default {
  name: "Home",
  components: {
    HomePage,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
