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
					<div class="row">
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
		</b-modal>
	</div>
</template>

<script>
	export default {
		name: "ChangeShippingAddress",
		props: {
			currentShipping: Number,
			shippingTab: Array,
		},
	};
</script>

<style></style>
