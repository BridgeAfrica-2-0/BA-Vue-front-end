<template>
	<b-card class="border-0">
		<b-card-title class="headline-font-size text-center mb-3">
			Create Shipping Address
		</b-card-title>
		<div class="row">
			<div class="col-12 col-sm-12 col-md-12 col-lg-5 mb-4">
				<FormCreateShippingAddress />
			</div>
			<div class="col-12 col-sm-12 col-md-12 col-lg-7 mb-4">
				<div class="row">
					<div class="col-12 col-sm-6 mb-3 col-md-6">
						<ProductCaroussel />
					</div>
					<div class="col-6 body-font-size col-sm-3 col-md-3">
						Name of item:
						<br /><br />
						Amount :
						<br /><br />
						Quantity :
						<br /><br />
						Shipping:
						<br /><br />
						Total:
					</div>
					<div class="col-6 body-font-size col-sm-3 col-md-3">
						Headset
						<br /><br />
						12 000XAF
						<br /><br />
						3
						<br /><br />
						1 000 XAF
						<br /><br />
						13 000 XAF
					</div>
				</div>
				<div class="row ">
					<div
						class="col mt-3 text-center text-success font-weight-bold title-font-size"
					>
						<p class="link">
							<b-icon icon="arrow-left-circle-fill"></b-icon> Back to Shooping
						</p>
					</div>
				</div>
			</div>
		</div>
	</b-card>
</template>

<script>
	import FormCreateShippingAddress from "./FormCreateShippingAddress.vue";
	import ProductCaroussel from "./ProductCaroussel.vue";
	export default {
		name: "CreateShippingAddress",
		components: {
			FormCreateShippingAddress,
			ProductCaroussel,
		},
	};
</script>

<style></style>
