<template>
	<div class="modal-shi">
		<b-modal
			id="create-shipping-modal"
			:title="title"
			ref="create-shipping-modal"
			hide-footer
			v-if="mode === 'create'"
		>
			<FormCreateShippingAddress
				@closecshippingm="hideModal"
				:modal="true"
				:form="shippingAddress"
			/>
		</b-modal>
		<b-modal
			v-else
			id="edit-shipping-modal"
			:title="title"
			ref="create-shipping-modal"
			hide-footer
		>
			<FormCreateShippingAddress
			:mode="mode"
				@closecshippingm="hideModal"
				:modal="true"
				:form="editForm"
			/>
		</b-modal>
	</div>
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
			mode: {
			type: String,
			default: 'create'
			},
			editForm: {
				type: Object
			}
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
