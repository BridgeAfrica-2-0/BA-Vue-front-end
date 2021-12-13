<template>
	<div id="orderList">
		<div
			class="row order-item mb-4"
			v-for="(cart_item, i) in orderForCurrentPage"
			:key="i"
		>
			<div class="col-12 order-item-caroussel col-sm-4 mb-3 col-md-4">
				<ProductCaroussel :productImages="productImages" />
			</div>

			<div class="col-auto flex-fill order-info body-font-size col-sm-8 col-md-8">
				<div class="row">
					<div class="col-4">Name of item:</div>
					<div class="col">{{ cart_item.product_name }}</div>
				</div>

				<div class="row">
					<div class="col-4">Amount :</div>
					<div class="col">{{ formatMoney(Number(cart_item.product_price)) }}</div>
				</div>

				<div class="row">
					<div class="col-4">Quantity :</div>
					<div class="col"> 
						<input
									class="quantity-input"
									type="number"
									min="1"
									@change="changeQuantity($event, i)"
									v-model="cart_item.quantity"
								/>
					</div>
				</div>

				<div class="row">
					<div class="col-4">Total :</div>
					<div class="col">
						{{
									formatMoney(
										Number(cart_item.product_price) * cart_item.quantity
									)
								}}
					</div>
				</div>
			</div>
			<!-- <div
				class="col-auto flex-fill order-info body-font-size col-sm-8 col-md-8"
			>
				<b-table-simple borderless>
					<b-tbody>
						<b-tr>
							<b-td>
								Name of item:
							</b-td>
							<b-th>
								{{ cart_item.product_name }}
								
							</b-th>
						</b-tr>
						<b-tr>
							<b-td>
								Amount :
							</b-td>
							<b-th>
								{{ formatMoney(Number(cart_item.product_price)) }}
								
							</b-th>
						</b-tr>
						<b-tr>
							<b-td>
								Quantity :
							</b-td>
							<b-th>
								<input
									class="quantity-input"
									type="number"
									min="1"
									@change="changeQuantity($event, i)"
									v-model="cart_item.quantity"
								/>
							</b-th>
						</b-tr>
						
						<b-tr>
							<b-td>
								Total:
							</b-td>
							<b-th>
								{{
									formatMoney(
										Number(cart_item.product_price) * cart_item.quantity
									)
								}}
								
							</b-th>
						</b-tr>
					</b-tbody>
				</b-table-simple>
			</div> -->
		</div>
		<div class="row my-4" v-if="loading">
			<div class="col-12 d-flex justify-content-center align-items-center">
				<b-spinner
					style="width: 3rem; height: 3rem;"
					label="Loading"
				></b-spinner>
			</div>
		</div>
		<div class="row" v-if="error">
			<div class="col-12">
				<b-alert dismissible show variant="secondary">Your cart is empty!</b-alert>
			</div>
		</div>
		<div class="row my-4">
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
</template>

<script>
	import ProductCaroussel from "./ProductCaroussel.vue";
	export default {
		name: "OrderProductsList",
		components: {
			ProductCaroussel,
		},
		async created() {
			this.loading = true;
			await this.$store
				.dispatch("checkout/getCart")
				.then(() => {
					this.loading = false;
					this.error = false;
					this.orderForCurrentPage = this.makeOrderforCurrentPage(
						this.cart,
						this.currentPage
					);
				})
				.catch(() => {
					this.loading = false;
					this.error = true;
				});
		},
		methods: {
			changeQuantity(event, index) {
				let quantity = event.target.value;
				if (quantity < 1) {
					quantity = 1;
				}
				this.cart.data[index].quantity = quantity;
				// this.order_items[index].quantity = quantity;
			},
			formatMoney(money) {
				return this.formatObject.format(money);
			},
			makeOrderforCurrentPage(cart, currentPage) {
				return cart["data"].slice(
					(currentPage - 1) * this.per_page,
					currentPage * this.per_page
				);
			},
		},
		data() {
			return {
				currentPage: 1,
				per_page: 3,
				loading: false,
				error: false,
				formatObject: new Intl.NumberFormat("fr-FR", {
					style: "currency",
					currency: "XAF",
					minimumFractionDigits: 2,
				}),
				orderForCurrentPage: [],
				productImages: [
					{
						img: require("@/assets/img/payment/headset.jpg"),
					},
					{
						img: require("@/assets/img/payment/headset1.jpg"),
					},
					{
						img: require("@/assets/img/payment/headset2.jpg"),
					},
					{
						img: require("@/assets/img/payment/headset3.jpg"),
					},
				],
			};
		},
		computed: {
			rowsOrder() {
				let rows = 1;
				if (this.cart["data"]) {
					rows = this.cart["data"].length;
				}
				return rows;
				// return this.order_items.length;
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
		},
		watch: {
			currentPage: function(val) {
				this.orderForCurrentPage = this.cart["data"].slice(
					(val - 1) * this.per_page,
					val * this.per_page
				);
			},
		},
	};
</script>

<style scoped>
	.quantity-input {
		width: 2rem !important;
		border: none !important;
		outline: none !important;
	}

	.order-info td,
	.order-info th {
		padding: 2px 12px !important;
	}
	.quantity-input::-webkit-inner-spin-button {
		opacity: 1;
	}

	.order-item {
		max-height: 350px !important;
	}
	.order-item-caroussel {
		max-width: 200px;
	}

	@media only screen and (max-width: 548px) {
		.order-item-caroussel {
			max-width: 100%;
		}
	}
</style>
