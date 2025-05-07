<template>
  <base-layout :top="20">
  <template v-slot:main>
    <stepper />
  </template>
  </base-layout>
</template>


<script>

import stepper from "@/components/payment/PaymentStepper";
import BaseLayout from "@/layouts/Layout"
export default {
  name: "payment",
  components: {
    stepper,
    BaseLayout
  }
};
</script>

<style></style>
