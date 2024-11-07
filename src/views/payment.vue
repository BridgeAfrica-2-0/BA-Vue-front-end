<template>
  <base-layout :top="20">
  <template v-slot:main>
    <navbar />
    <stepper />
  </template>
  </base-layout>
</template>


<script>
import navbar from "@/components/navbar";
import stepper from "@/components/payment/PaymentStepper";
import BaseLayout from "@/layouts/Layout"
export default {
  name: "payment",
  components: {
    navbar,
    stepper,
    BaseLayout
  }
};
</script>

<style></style>
