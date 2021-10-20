<template>
	<b-card class="border-0">
		<div class="row">
			<div class="col-12 col-sm-12 col-md-5 col-lg-5 mb-4">
				<b-card-title class="headline-font-size mb-3">
					Create Shipping Address
				</b-card-title>
				<FormCreateShippingAddress />
			</div>
			<div class="col-12 col-sm-12 col-md-7 col-lg-7 mb-4">
				<div class="row mb-3">
					<div class="col-12">
						<b-button class="float-right" variant="link"
							><b-icon icon="cart" class="mr-2"></b-icon>Cart</b-button
						>
					</div>
				</div>
				<div class="row order-item">
					<div class="col-4 order-item-caroussel col-sm-6 mb-3 col-md-6">
						<ProductCaroussel />
					</div>
					<div class="col-4 body-font-size col-sm-3 col-md-3">
						Name of item:
						<br />
						Amount :
						<br />
						Quantity :
						<br />
						Shipping:
						<br />
						Total:
					</div>
					<div class="col-4 body-font-size col-sm-3 col-md-3">
						Headset
						<br />
						12 000XAF
						<br />
						3
						<br />
						1 000 XAF
						<br />
						13 000 XAF
					</div>
				</div>
				<div class="row my-3">
					<div class="col-12  d-flex justify-content-center">
						<b-button class="btn-custom" variant="primary">Order</b-button>
					</div>
					<div
						class="col-12 mt-3 text-center text-success font-weight-bold title-font-size"
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

<style scoped>
	.btn-custom {
		height: 38px;
		min-width: 123px;
		font-size: 14px;
		
	}
	.order-item{
		max-height: 250px !important;
	}
	.order-item-caroussel{
		max-width: 200px;
	}
	@media only screen and (max-width: 768px) {
		.btn-custom {
			display: block;
			width: 100%;
		}
	}
</style>
