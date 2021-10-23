<template>
	<div id="orderList">
		<div
			class="row order-item mb-4"
			v-for="(cart_item, i) in orderForCurrentPage"
			:key="i"
		>
			<div class="col-12 order-item-caroussel col-sm-4 mb-3 col-md-4">
				<ProductCaroussel />
			</div>
			<div
				class="col-auto flex-fill order-info body-font-size col-sm-8 col-md-8"
			>
				<b-table-simple borderless>
					<b-tbody>
						<b-tr>
							<b-td>
								Name of item:
							</b-td>
							<b-th>
								<!-- {{ cart_item.product_name }} -->
								{{ cart_item.name }}
							</b-th>
						</b-tr>
						<b-tr>
							<b-td>
								Amount :
							</b-td>
							<b-th>
								<!-- {{ formatMoney(Number(cart_item.product_price)) }}  -->
								{{ formatMoney(Number(cart_item.amount)) }}
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
								Shipping:
							</b-td>
							<b-th> {{ formatMoney(cart_item.shipping) }} </b-th>
						</b-tr>
						<b-tr>
							<b-td>
								Total:
							</b-td>
							<b-th>
								<!-- {{
									formatMoney(
										Number(cart_item.product_price) * cart_item.quantity + 1000
									)
								}} -->
								{{
									formatMoney(
										Number(cart_item.amount) * cart_item.quantity +
											cart_item.shipping
									)
								}}
							</b-th>
						</b-tr>
					</b-tbody>
				</b-table-simple>
			</div>
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
				<b-alert dismissible show variant="danger">Error!</b-alert>
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
		props: {
			order_items: {
				type: Array,
				required: true,
			},
		},
		components: {
			ProductCaroussel,
		},
		mounted() {
			this.loading = true;
			this.$store
				.dispatch("checkout/getCart")
				.then(() => {
					this.loading = false;
					this.error = false;
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
				// this.cart.data[index].quantity = quantity;
				this.order_items[index].quantity = quantity;
			},
			formatMoney(money) {
				return this.formatObject.format(money);
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
			};
		},
		computed: {
			rowsOrder() {
				// let rows = 1
				// if(this.cart['data']){
				// 	rows = this.cart['data'].length
				// }
				return this.order_items.length;
			},
			orderForCurrentPage() {
				return this.order_items.slice(
					(this.currentPage - 1) * this.per_page,
					this.currentPage * this.per_page
				);
			},
			// cart() {
			// 	return this.$store.state.checkout.cart;
			// },
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
		max-height: 250px !important;
	}
	.order-item-caroussel {
		max-width: 200px;
	}

	@media only screen and (max-width: 446px) {
		.order-item-caroussel {
			max-width: 100%;
		}
	}
</style>
