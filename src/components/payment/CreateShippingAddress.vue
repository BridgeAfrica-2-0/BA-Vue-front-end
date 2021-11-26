<template>
	<b-card class="border-0">
		<div class="row">
			<div class="col-12 col-sm-12 col-md-5 col-lg-5 mb-4">
				<b-card-title class="headline-font-size mb-3">
					Create Shipping Address
				</b-card-title>
				<FormCreateShippingAddress
					:form="shippingAddress"
					@switchstep="handleSwitchStep"
				/>
			</div>
			<div class="col-12 col-sm-12 col-md-7 col-lg-7 mb-4">
				<div class="row mb-3">
					<div class="col-12 d-flex justify-content-between align-items-end">
						<b-card-title class="title-font-size d-inline-block mb-0">
							Order Summary
						</b-card-title>
						<b-button @click="gotoCart" class="btn-my-cart" variant="primary"
							><b-icon icon="cart" class="mr-2"></b-icon>My Cart</b-button
						>
					</div>
				</div>
				<OrderProductsList />
				<div class="row my-3">
					<!-- <div class="col-12  d-flex justify-content-center">
						<b-button class="btn-custom" variant="primary">Order</b-button>
					</div> -->
					<div
						class="col-12 mt-3 text-center text-success font-weight-bold title-font-size"
					>
						<p class="link">
							<b-icon icon="arrow-left-circle-fill"></b-icon> Back to Shopping
						</p>
					</div>
				</div>
			</div>
		</div>
	</b-card>
</template>

<script>
	import FormCreateShippingAddress from "./FormCreateShippingAddress.vue";
	import OrderProductsList from "./OrderProductsList.vue";
	export default {
		name: "CreateShippingAddress",
		components: {
			FormCreateShippingAddress,
			OrderProductsList,
		},
		methods: {
			handleSwitchStep() {
				this.$emit("switchstep", 2);
			},
			gotoCart(){
				this.$router.push('/cart');
			}
		},
		data() {
			return {
				shippingAddress: {
					name: "",
					phone: "",
					country_id: "",
					region_id: "",
					division_id: "",
					council_id: "",
					city: "",
					neighbourhood_id: "",
				},
				order_items: [
					{
						name: "Headset",
						amount: 12000,
						quantity: 3,
						shipping: 1000,
						total: 13000,
					},
					{
						name: "Smartphone",
						amount: 120000,
						quantity: 2,
						shipping: 2000,
						total: 13000,
					},
					{
						name: "HP computer",
						amount: 602000,
						quantity: 1,
						shipping: 5000,
						total: 13000,
					},
					{
						name: "Smart Watch",
						amount: 12000,
						quantity: 3,
						shipping: 1000,
						total: 13000,
					},
					{
						name: "USB Key",
						amount: 120000,
						quantity: 2,
						shipping: 2000,
						total: 13000,
					},
					{
						name: "Computer Keyboard",
						amount: 602000,
						quantity: 1,
						shipping: 5000,
						total: 13000,
					},
				],
			};
		},

	};
</script>

<style scoped>
	.btn-custom {
		height: 38px;
		min-width: 123px;
		font-size: 14px;
	}

	.btn-my-cart {
		height: 38px;
		min-width: 123px;
		font-size: 14px;
	}

	@media only screen and (max-width: 768px) {
		.btn-custom {
			display: block;
			width: 100%;
		}
	}
	@media only screen and (max-width: 576px) {
		.card-body {
			padding: 0 !important;
		}
	}
</style>
