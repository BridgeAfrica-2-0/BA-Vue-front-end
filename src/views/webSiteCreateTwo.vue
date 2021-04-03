<template>
  <div>
    <navbar />
    <b-container fluid="xl" class="text-justify mt-2">
      <b-row>
        <b-col cols="8">
          <b-avatar
            src="https://business.bridgeafrica.info/assets/img/team/3.png"
            class="owner-profile-image-profile float-left"
            badge-variant="primary"
            badge-offset="10px"
            size="80"
          >
          </b-avatar>
          <div class="d-inline-block mt-3 ml-2">
            <h5 class="font-weight-bolder m-0 p-0">Mapoure Agrobusiness</h5>
            <p class="m-0 p-0">@mapoureagrobusiness</p>
          </div>
        </b-col>
        <b-col cols="4">
          <div class="d-inline-block float-right mt-3">
            <p>
              Current Plan: <span class="font-weight-bolder">Basic</span>
              <b-button variant="primary" class="ml-3" size="sm"
                >Change</b-button
              >
            </p>
          </div>
        </b-col>
      </b-row>
      <create-website-step2></create-website-step2>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import CreateWebsiteStep2 from "@/components/businessf/tabs/owner/createWebsiteStep2";
import navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default {
  name: "webSiteCreateTwo",
  components: {
    CreateWebsiteStep2,
    navbar,
    Footer
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped></style>
