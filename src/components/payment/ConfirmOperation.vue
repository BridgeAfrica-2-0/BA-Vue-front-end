<template>
	<div>
		<b-dropdown-item-button @click="showModal">
			<b-icon
				variant="primary"
				class="mr-2"
				icon="trash-fill"
				aria-hidden="true"
			></b-icon>
			<span class="">{{$t("general.Delete")}}</span>
		</b-dropdown-item-button>

		<b-modal :title="$t('general.Delete_Shipping_Address')" ref="confirm-modal" hide-footer>
			<p class="my-4 headline-font-size text-center">{{ message }}</p>
			<div class="d-flex align-items-center justify-content-end">
				<b-button class="mt-2 btn-custom" variant="primary" @click="sendId"
					>{{$t("general.Continue")}}</b-button
				>
				<b-button
					class="mt-2 ml-4 btn-custom"
					variant="success"
					@click="hideModal"
					>{{$t("general.Cancel")}}</b-button
				>
			</div>
		</b-modal>
	</div>
</template>

<script>
	export default {
		name: "ConfirmOperation",
		props: {
			id_item: Number,
			callback: {
				type: Function,
			},
			message: String,
		},
		methods: {
			hideModal() {
				this.$refs["confirm-modal"].hide();
			},
			showModal() {
				this.$refs["confirm-modal"].show();
			},
			sendId() {
				this.$emit("sendid", this.id_item);
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
</style>
