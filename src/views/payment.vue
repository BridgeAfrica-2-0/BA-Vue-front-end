<template>
  <div>
    <navbar />
    <stepper />
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import stepper from "@/components/payment/PaymentStepper";
// import stepper from '@/components/payment/Stepper'
// import info from '@/components/payment/Info'
export default {
  name: "payment",
  components: {
    navbar,
    stepper
  }
};
</script>

<style></style>
