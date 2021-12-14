<template>
	<b-card class="">
		<b-card-title class="headline-font-size font-weight-bold">
			{{$t("general.Shipping_Address")}}
		</b-card-title>
		<div class="row">
			<div class="col-12">
				<CreateShippingModal />
			</div>
			<div class="col-12">
				<CreateShippingModal
					:title="$t('general.Edit_Shipping_Address')"
					mode="edit"
					:editForm="shippingsTab[0]"
				/>
			</div>
			<div class="col-12">
				<ChangeShippingAddress
					:shippingsTab="shippingsTab"
					:currentShipping="1"
				/>
			</div>
		</div>
		<b-card-text class="mt-4 mr-0 w-100 d-flex justify-content-between align-items-start">
			<div class="row w-100">
				<div
					class="ship-add w-100 col-12 d-flex justify-content-between align-items-start"
					v-for="shipping_item in shippingsTab"
					:key="shipping_item.id"
				>
					<div>
						<p class="body-font-size">
							{{ shipping_item.user_name }}. {{ shipping_item.phone }},{{
								shipping_item.country_name
							}}, {{shipping_item.email}}
						</p>
						<p class="body-font-size">
							{{ shipping_item.region_name }},{{
								shipping_item.division_name
							}}.{{ shipping_item.council_name }}, {{ shipping_item.city }},
							{{ shipping_item.neighbourhood_name }}
						</p>
					</div>
					<div class="">
						<div class="">
							<a
								href="#"
								v-b-modal.edit-shipping-modal
								class="text-primary text-14 font-weight-bold text-uppercase mr-1 mr-sm-2"
								>{{$t("general.Edit")}}</a
							>
							<div class="d-inline-block">
								<b-dropdown
									
									right
									variant="link"
									toggle-class="text-decoration-none"
									no-caret
								>
									<template #button-content>
										<b-icon icon="three-dots-vertical"></b-icon>
									</template>
									<b-dropdown-item-button v-b-modal.create-shipping-modal>
										<b-icon
											variant=""
											class="mr-2"
											icon="plus"
											aria-hidden="true"
										></b-icon>
										<span class="">{{$t("general.Add")}}</span>
									</b-dropdown-item-button>
									<b-dropdown-item-button v-b-modal.change-shipping-modal>
										<b-icon
											variant=""
											class="mr-2"
											icon="arrow-down-up"
											aria-hidden="true"
										></b-icon>
										<span class="">{{$t("general.Change")}}</span>
									</b-dropdown-item-button>
									<ConfirmOperation
										message="Do you want to delete this shipping address?"
										@sendid="handleDeleteShipping"
										:id_item="shipping_item.id"
									/>
								</b-dropdown>
							</div>
						</div>
					</div>
				</div>
			</div>
		</b-card-text>
		<div class="row" v-if="loading">
			<div class="col-12 d-flex justify-content-center">
				<b-spinner large label="loading shipping..."></b-spinner>
			</div>
		</div>
	</b-card>
</template>

<script>
	import ConfirmOperation from "./ConfirmOperation.vue";
	import CreateShippingModal from "./CreateShippingModal.vue";
	import ChangeShippingAddress from "./ChangeShippingAddress.vue";
	export default {
		name: "ShippingAddress",
		data() {
			return {
				loading: false,
			};
		},
		components: {
			ConfirmOperation,
			CreateShippingModal,
			ChangeShippingAddress,
		},
		methods: {
			handleDeleteShipping(id) {
				this.$store.dispatch("checkout/deleteShippingAdd", id);
			},
			showConfirmModal() {
				this.$emit("showconfirm");
			},
		},
		computed: {
			shippingsTab() {
				console.log(this.$store.state.checkout.allShipping);
				return this.$store.state.checkout.allShipping;
				// return [
				// 	{
				// 		user_name: "Rivaland",
				// 		phone: "+23752513344",
				// 		country_name: "Cameroun",
				// 		region_name: "Centre",
				// 		council_name: "Yaoundé IV",
				// 		division_name: "MEFOU",
				// 		neighbourhood_name: "Mimboman",
				// 		city: "Yaoundé",
				// 	},
				// 	{
				// 		user_name: "Rivaland",
				// 		phone: "+23752513344",
				// 		country_name: "Gabon",
				// 		region_name: "Nord",
				// 		council_name: "Libreville IV",
				// 		division_name: "Ondo Ondo",
				// 		neighbourhood_name: "Adjougou",
				// 		city: "Libreville",
				// 	},
				// ];
			},
		},
		mounted() {
			this.loading = true;
			this.$store
				.dispatch("checkout/getAllShippingAdd")
				.then(() => {
					this.loading = false;
				})
				.catch(() => {
					this.loading = false;
				});
		},
	};
</script>

<style scoped>
	/* .ship-add:not(:last-child){
	border-bottom: 1px solid #c2c0c0;
} */
</style>
