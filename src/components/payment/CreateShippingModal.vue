<template>
	<b-modal
		id="create-shipping-modal"
		:title="title"
		ref="create-shipping-modal"
		hide-footer
	>
		<FormCreateShippingAddress
			@closecshippingm="hideModal"
			:modal="true"
			:form="shippingAddress"
		/>
	</b-modal>
</template>

<script>
	import FormCreateShippingAddress from "./FormCreateShippingAddress.vue";
	export default {
		name: "CreateShippingModal",
		props: {
			id: String,
			title: {
				type: String,
				default: "Add Shipping Address",
			},
		},
		components: {
			FormCreateShippingAddress,
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
			};
		},
		methods: {
			hideModal() {
				this.$refs["create-shipping-modal"].hide();
			},
		},
	};
</script>

<style></style>
