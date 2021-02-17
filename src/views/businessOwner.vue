<template>
  <div>
    <navbar />
    <b-container fluid="md" class="text-justify mt-1">
      <div>
        <a class="settings" href="#">Settings</a>
        <b-tabs content-class="mt-3">
          <b-tab title="Business" active><Business /></b-tab>
          <b-tab title="Inbox"><p>I'm the second tab</p></b-tab>
          <b-tab title="Notification"><p>I'm a disabled tab!</p></b-tab>
          <b-tab title="Insights"><p>I'm a disabled tab!</p></b-tab>
        </b-tabs>
      </div>
    </b-container>
    <Footer/>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import Business from "../components/businessf/business";
import Footer from "../components/footer";
export default {
  name: "Home",
  components: {
    navbar,
    Business,
    Footer,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
.settings {
  margin-left: 90%;
  position: relative;
  top: 40px;
}

@media only screen and (max-width: 768px) {
  .settings{
    top: -5px;
    left: -20px;
  }
}
</style>
