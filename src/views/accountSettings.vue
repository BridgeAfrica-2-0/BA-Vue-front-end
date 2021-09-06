<template>
  <div>
    <Navbar />
    <b-container>
      <div class="m-5">
        <b-card no-body>
          <b-tabs pills card vertical>
            <b-tab title="GENERAL" active
              ><b-card-text>Tab contents 1</b-card-text></b-tab
            >
            <b-tab title="LOGIN HISTORY"
              ><b-card-text>Tab contents 2</b-card-text></b-tab
            >
            <b-tab title="BUSINESS ROLES"
              ><b-card-text>Tab contents 3</b-card-text></b-tab
            >
              <b-tab title="PAYMENTS"
              ><b-card-text>Tab contents 3</b-card-text></b-tab
            >
              <b-tab title="WEBSITE"
              ><b-card-text>Tab contents 3</b-card-text></b-tab
            >
          </b-tabs>
        </b-card>
      </div>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style></style>
