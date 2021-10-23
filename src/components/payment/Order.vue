<template
	><b-card class="">
		<div class="card-header title-font-size font-weight-bold bg-white h-50">
			Review and confirm your Order ( {{ order_items.length }} item)
			<br />
			Business: Largo
		</div>
		<div class="order card-body">
			<div>
				<OrderProductsList :order_items="order_items" />
				<div class="row">
					<div class="col d-flex justify-content-end mt-4">
						<button
							@click="showOperator"
							class="btn text-14 btn-custom btn-primary px-5 shadow-sm"
						>
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
		methods: {
			showOperator() {
				this.$emit("showoperator");
			},
			prepareOrder() {
				let order_data = {};
				const productlength = this.order_items.length;

				for (let index = 0; index < productlength; index++) {
					order_data[this.order_items[index].name] = {
						order_id: 1,
						product_id: index + 1,
						quantity: this.order_items[index].quantity,
						price: this.order_items[index].amount,
						total_amount:
							this.order_items[index].amount * this.order_items[index].quantity,
					};
				}
				console.log(order_data);
			},
		},
		mounted(){
			this.prepareOrder()
		}
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
