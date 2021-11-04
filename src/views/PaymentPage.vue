<template>
	<div>
		<nav-bar></nav-bar>
    <Stepper/>
	</div>
</template>

<script>
	import NavBar from "@/components/navbar";
	import Stepper from "@/components/payment/Stepper";
	export default {
    name: "PaymentPage",
    components: {
      NavBar,
      Stepper
    }
  };
</script>

<style></style>
