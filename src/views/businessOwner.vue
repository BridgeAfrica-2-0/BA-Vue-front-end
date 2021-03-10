<template>
  <div class="container-fluid">
    <navbar />
    <b-container class="text-justify">
      <b-row>
        <b-col cols="12">
          <a class="settings" href="#">Settings</a>
          <b-tabs content-class="mt-3">
            <b-tab title="Business" active><Business /></b-tab>
            <b-tab title="Inbox"><p>I'm the second tab</p></b-tab>
            <b-tab title="Notification"><notification></notification></b-tab>
            <b-tab title="Insights"><p>I'm a disabled tab!</p></b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import Business from "../components/businessf/business";
import Footer from "../components/footer";
import Notification from "@/components/businessf/notification";

export default {
  name: "Home",
  components: {
    Notification,
    navbar,
    Business,
    Footer
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.settings {
  margin-left: 90%;
  position: relative;
  top: 40px;
}

@media only screen and (max-width: 768px) {
  .settings {
    top: -5px;
    left: -20px;
  }
}
</style>
