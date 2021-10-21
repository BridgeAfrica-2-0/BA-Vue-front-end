<template>
	<div id="orderList">
		<div
			class="row order-item mb-2"
			v-for="(order, i) in ordersForCurrentPage"
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
		methods: {},
		data() {
			return {
				currentPage: 1,
				per_page: 3,
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
	.quantity-input {
		width: 2rem !important;
		border: none;
		outline: none;
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
