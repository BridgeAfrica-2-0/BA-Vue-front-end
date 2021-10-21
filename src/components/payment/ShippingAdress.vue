<template>
	<b-card class="">
		<b-card-title class="headline-font-size font-weight-bold">
			Shipping Address
		</b-card-title>
		<b-card-text class="mt-4 d-flex justify-content-between align-items-start">
			<div class="row">
				<div
					class="col-sm"
					v-for="shipping_item in shippingsTab"
					:key="shipping_item.id"
				>
					<p class="body-font-size">
						{{ shipping_item.user_name }}. {{ shipping_item.phone }},{{ shipping_item.country_name }}
					</p>
					<p class="body-font-size">
						{{ shipping_item.region_name }},{{
							shipping_item.division_name
						}}.{{ shipping_item.council_name }}, {{ shipping_item.city }},
						{{ shipping_item.neighbourhood_name }}
					</p>
				</div>
			</div>
			<div class="col-sm">
				<div class="float-right">
					<a
						href="#"
						class="text-primary text-14 font-weight-bold text-uppercase mr-1 mr-sm-2"
						>Edit</a
					>
					<div class="d-inline-block">
						<b-dropdown
							size="lg"
							right
							variant="link"
							toggle-class="text-decoration-none"
							no-caret
						>
							<template #button-content>
								<b-icon icon="three-dots-vertical"></b-icon>
							</template>
							<b-dropdown-item-button>
								<b-icon
									variant=""
									class="mr-2"
									icon="plus"
									aria-hidden="true"
								></b-icon>
								<span class="">Add</span>
							</b-dropdown-item-button>
							<b-dropdown-item-button>
								<b-icon
									variant=""
									class="mr-2"
									icon="arrow-down-up"
									aria-hidden="true"
								></b-icon>
								<span class="">Change</span>
							</b-dropdown-item-button>
							<b-dropdown-item-button>
								<b-icon
									variant=""
									class="mr-2"
									icon="trash-fill"
									aria-hidden="true"
								></b-icon>
								<span class="">Delete</span>
							</b-dropdown-item-button>
						</b-dropdown>
					</div>
				</div>
			</div>
		</b-card-text>
	</b-card>
</template>

<script>
	export default {
		name: "ShippingAddress",
		data() {
			return {};
		},
		computed: {
			shippingsTab() {
				return this.$store.state.checkout.allShipping;
			},
		},
		mounted() {
			this.$store.dispatch("checkout/getAllShippingAdd");
		},
	};
</script>

<style></style>
