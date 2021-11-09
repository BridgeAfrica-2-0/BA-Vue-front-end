<template>
	<div>
		<b-modal
			id="change-shipping-modal"
			title="Change Shipping Address"
			ref="change-shipping-modal"
			hide-footer
		>
			<div class="row">
				<div
					class="ship-add w-100 col-12 d-flex justify-content-between align-items-start"
					v-for="shipping_item in shippingsTab"
					:key="shipping_item.id"
				>
					<div class="row w-100">
						<div class="col-9">
							<p class="body-font-size">
								{{ shipping_item.user_name }}. {{ shipping_item.phone }},{{
									shipping_item.country_name
								}}
							</p>
							<p class="body-font-size">
								{{ shipping_item.region_name }},{{
									shipping_item.division_name
								}}.{{ shipping_item.council_name }}, {{ shipping_item.city }},
								{{ shipping_item.neighbourhood_name }}
							</p>
						</div>
						<div class="col-3">
							<b-form-radio
								v-model="currentShipping"
								class="float-right"
								name="currentShipping"
								:value="shipping_item.id"
							></b-form-radio>
						</div>
					</div>
					<div class="row">
						<hr />
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-12 w-100">
					<div class="d-flex w-100 justify-content-between align-items-center">
						<b-button class="btn-custom mr-3" type="submit" variant="primary">
							<!-- <b-spinner v-if="loading" small variant="light"></b-spinner> -->
							Save</b-button
						>
						<b-button class="btn-custom" @click="hideModal" variant="success"
							>Cancel</b-button
						>
					</div>
				</div>
			</div>
		</b-modal>
	</div>
</template>

<script>
	export default {
		name: "ChangeShippingAddress",
		props: {
			currentShipping: Number,
			shippingsTab: Array,
		},
		methods: {
			hideModal() {
				this.$refs["change-shipping-modal"].hide();
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
	@media only screen and (max-width: 768px) {
		.btn-custom {
			display: block !important;
			width: 100% !important;
		}
	}
</style>
