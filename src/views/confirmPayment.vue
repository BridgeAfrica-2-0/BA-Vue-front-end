<template>
  <div>
    <navbar />
    <b-container fluid="xl" class="text-justify mt-2">
      <b-row>
        <b-col cols="12">
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
      </b-row>
      <validate-pay></validate-pay>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import navbar from "@/components/ngavbar";
import Footer from "@/components/footer";
import ValidatePay from "@/components/businessf/tabs/owner/validatePay";

export default {
  name: "confirmPayment",
  components: {
    ValidatePay,
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
