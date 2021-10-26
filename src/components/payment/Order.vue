<template
	><b-card class="">
		<div class="card-header title-font-size font-weight-bold bg-white h-50">
			Review and confirm your Order ( {{ cartLenght }} item)
			<br />
			Business: Largo
		</div>
		<div class="order card-body">
			<div>
				<OrderProductsList />
				<div class="row">
					<div class="col d-flex justify-content-end mt-4">
						<button
							@click="handleCreateOrder"
							class="btn text-14 btn-custom btn-primary px-5 shadow-sm"
						>
							<b-spinner v-if="loading" small variant="light"></b-spinner>
							Order
						</button>
					</div>
				</div>
			</div>
		</div>
	</b-card>
</template>

<script>
	// import ProductCaroussel from "./ProductCaroussel";
	import OrderProductsList from "./OrderProductsList.vue";
	export default {
		name: "Order",
		components: {
			OrderProductsList,
		},
		data() {
			return {
				loading: false,
			};
		},
		computed: {
			cartLenght() {
				return this.$store.state.checkout.cart.data.length;
				// return this.cart.data.length;
			},
			cart() {
				return this.$store.state.checkout.cart;
				// return {
				// 	data: [
				// 		{
				// 			product_name: "Headset1",
				// 			quantity: 3,
				// 			product_price: 2000,
				// 		},
				// 		{
				// 			product_name: "Headset2",
				// 			quantity: 3,
				// 			product_price: 2000,
				// 		},
				// 		{
				// 			product_name: "Headset3",
				// 			quantity: 3,
				// 			product_price: 2000,
				// 		},
				// 		{
				// 			product_name: "Headset4",
				// 			quantity: 3,
				// 			product_price: 2000,
				// 		},
				// 		{
				// 			product_name: "Headset5",
				// 			quantity: 3,
				// 			product_price: 2000,
				// 		},
				// 		{
				// 			product_name: "Headset6",
				// 			quantity: 3,
				// 			product_price: 2000,
				// 		},
				// 		{
				// 			product_name: "Headset6",
				// 			quantity: 3,
				// 			product_price: 2000,
				// 		},
				// 	],
				// 	shipping_amount: 1000,
				// };
			},
			allShipping() {
				return this.$store.state.checkout.allShipping;
			},
		},
		methods: {
			showOperator() {
				this.prepareOrder();
				this.$emit("showoperator");
			},
			handleCreateOrder() {
				this.loading = true;
				let order_data = {};
				order_data["produits"] = {};
				let order_items = this.cart.data;
				const productlength = this.cartLenght;

				this.$store.dispatch("checkout/getBussiness", 1);
				//init variable
				order_data.total_amount = 0;
				order_data.tax_amount = 200;
				order_data.shipping_address = this.allShipping[0].id;
				order_data.shipping_amount = 3000;

				console.log(order_items[0]);
				for (let index = 0; index < productlength; index++) {
					order_data["produits"][`data${index}`] = {
						product_id: order_items[index].product_id,
						quantity: order_items[index].quantity,
						price: order_items[index].product_price,
						total_amount:
							order_items[index].product_price * order_items[index].quantity,
					};
					order_data.total_amount +=
						order_data["produits"][`data${index}`].total_amount;
				}
				order_data.total_amount += order_data.shipping_amount;
				console.log(order_data);
				this.$store
					.dispatch("checkout/createOrder", order_data)
					.then(() => {
						this.$emit("showoperator", order_data.total_amount);
						this.loading = false;
					})
					.catch(() => {
						this.loading = false;
					});
			},
		},
		mounted() {},
	};
</script>

<style scoped>
	.text-14 {
		font-size: 14px;
	}
	.btn-custom {
		height: 38px;
		min-width: 123px;
	}

	@media only screen and (max-width: 576px) {
		.btn-custom {
			display: block;
			height: 38px;
			width: 100%;
			min-width: 100% !important;
		}
		.order.card-body,
		.card-header {
			padding: 0 !important;
		}
		.order.card-body {
			margin-top: 15px !important;
		}
	}
</style>
