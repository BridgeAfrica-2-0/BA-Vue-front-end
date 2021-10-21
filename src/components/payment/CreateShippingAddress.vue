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
					<div class="col-12 d-flex justify-content-between align-items-end">
						<b-card-title class="title-font-size d-inline-block mb-0">
							Order Summary
						</b-card-title>
						<b-button class="btn-my-cart" variant="primary"
							><b-icon icon="cart" class="mr-2"></b-icon>My Cart</b-button
						>
					</div>
				</div>
				<div id="orderList">
					<div
						class="row order-item"
						v-for="(order, i) in ordersForCurrentPage"
						:key="i"
					>
						<div class="col-4 order-item-caroussel col-sm-4 mb-3 col-md-4">
							<ProductCaroussel />
						</div>
						<div class="col-auto flex-fill order-info body-font-size col-sm-8 col-md-8">
							<b-table-simple borderless>
								<b-tbody>
									<b-tr>
										<b-td>
											Name of item:
										</b-td>
										<b-th>
											{{ order.name }}
										</b-th>
									</b-tr>
									<b-tr>
										<b-td>
											Amount :
										</b-td>
										<b-th> {{ order.amount }} FCFA </b-th>
									</b-tr>
									<b-tr>
										<b-td>
											Quantity :
										</b-td>
										<b-th>
											<input
												class="quantity-input"
												type="number"
												v-model="order.quantity"
											/>
										</b-th>
									</b-tr>
									<b-tr>
										<b-td>
											Shipping:
										</b-td>
										<b-th> {{ order.shipping }} FCFA </b-th>
									</b-tr>
									<b-tr>
										<b-td>
											Total:
										</b-td>
										<b-th>
											{{ order.amount * order.quantity + order.shipping }} FCFA
										</b-th>
									</b-tr>
								</b-tbody>
							</b-table-simple>
						</div>
					</div>
					<div class="row my-3">
						<div class="col-12 d-flex justify-content-center">
							<b-pagination
								v-model="currentPage"
								pills
								aria-controls="orderList"
								:per-page="per_page"
								:total-rows="rowsOrder"
							></b-pagination>
						</div>
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
		data() {
			return {
				currentPage: 1,
				per_page: 3,
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
		computed: {
			rowsOrder() {
				return this.order_items.length;
			},
			ordersForCurrentPage() {
				return this.order_items.slice(
					(this.currentPage - 1) * this.per_page,
					this.currentPage * this.per_page
				);
			},
		},
	};
</script>

<style scoped>
	.btn-custom {
		height: 38px;
		min-width: 123px;
		font-size: 14px;
	}
	.quantity-input {
		width: 2rem !important;
		border: none;
		outline: none;
	}
	/* .order-info {
		width: 100% !important;
	} */
	.order-info td,
	.order-info th {
		padding: 2px 12px !important;
	}
	.quantity-input::-webkit-inner-spin-button {
		opacity: 1;
	}
	.btn-my-cart {
		height: 38px;
		min-width: 123px;
		font-size: 14px;
	}
	.order-item {
		max-height: 250px !important;
	}
	.order-item-caroussel {
		max-width: 200px;
	}
	@media only screen and (max-width: 768px) {
		.btn-custom {
			display: block;
			width: 100%;
		}
	}
</style>
