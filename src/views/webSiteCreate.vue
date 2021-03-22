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
              <b-button
                variant="primary"
                class="ml-3"
                size="sm"
                v-b-modal.modal-center
                >Change</b-button
              >
            </p>
          </div>
          <b-modal id="modal-center" centered>
            <h2 class="text-center"><b>Paid Subscription Required</b></h2>
            <p class="my-4 text-center px-3">
              You must subscribe to a paid in order to gain access to premium
              template
            </p>

            <template #modal-footer>
              <div class="w-100">
                <b-button
                  variant="outline-dark"
                  class="float-left"
                  @click="show = false"
                >
                  No, Thanks
                </b-button>

                <b-button
                  variant="primary"
                  class="float-right"
                  @click="show = false"
                >
                  Subscribe
                </b-button>
              </div>
            </template>
          </b-modal>
        </b-col>
      </b-row>
      <create-website-step1></create-website-step1>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CreateWebsiteStep1 from "@/components/businessf/tabs/owner/createWebsiteStep1";

export default {
  name: "webSiteCreate",
  components: {
    CreateWebsiteStep1,
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
