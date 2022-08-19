<template>
	<b-card class="">
		<b-card-title class="headline-font-size font-weight-bold headline_and_btns">
			<span>{{$t("general.Shipping_Address")}}</span>
			<div class="buttons">
				<button class="btnx" @click="loadActualComponent3"><i class="fas fa-arrow-alt-circle-right"></i> Complete checkout</button>
				<button class="backBtn" @click="loadActualComponent1"><i class="fas fa-arrow-alt-circle-left"></i> Back</button>
			</div>
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

			
    


					<div class="d-inline-flex">

					
                        <div class="col-1">

				
	   <input type="radio" :v-model="shipping_item.id"  @change="shipping(shipping_item)"   :checked="shipping_item.active==1"     name="shipping" value="">   </div>
	

	      <div>     

	   
						<p class="body-font-size"> 
							{{ shipping_item.name }}, {{ shipping_item.phone }},{{
								shipping_item.country
							}}, {{shipping_item.email}}
						</p>
						<p class="body-font-size">
							{{ shipping_item.region }},{{ shipping_item.city }}
							
							<!-- ,{{
								shipping_item.division
							}}.{{ shipping_item.council_name }},
							{{ shipping_item.neighbourhood_name }} -->
						</p>   </div>
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
											variant="primary"
											class="mr-2 icon-size"
											icon="plus"
											aria-hidden="true"
										></b-icon>
										<span class="">{{$t("general.Add")}}</span>
									</b-dropdown-item-button>
									<b-dropdown-item-button v-b-modal.change-shipping-modal>
										<b-icon
											variant="primary"
											class="mr-2 icon-size"
											icon="arrow-down-up"
											aria-hidden="true"
										></b-icon>
										<span class="">{{$t("general.Change")}}</span>
									</b-dropdown-item-button>
									<ConfirmOperation
										:message="$t('general.Do_you_want_to_delete_this_shipping_address')"
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
				<b-spinner variant="primary" large label="loading shipping..."></b-spinner>
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


			shipping(data){
             
			 	let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.preview,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });


			 this.$store.dispatch("checkout/choseShipping", data).then(() => {
					  this.$store.dispatch("checkout/getCartt").then(() => {
					     loader.hide();

						 })
				.catch(() => {
					
				});
					
				})
				.catch(() => {
					
				});

			
			},


			handleDeleteShipping(id) {

			
				this.$store.dispatch("checkout/deleteShippingAdd", id)

				
				


			},
			showConfirmModal() {
				this.$emit("showconfirm");
			},

			loadActualComponent3() {
				this.$emit('loadActualComponent3')
			},

			loadActualComponent1() {
				this.$emit('loadActualComponent1')
			}
		},
		computed: {
			shippingsTab() {
				console.log(this.$store.state.checkout.allShipping);
				return this.$store.state.checkout.allShipping;
				
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

.btnx{
	/* display: inline-block; */
    font-weight: 400;
    color: white;
	background-color: #E75C18;
    text-align: center;
    vertical-align: middle;
	align-items: center;
	text-transform: capitalize;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
	float: right;
    border-radius: 0.25rem;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btnx:hover {
	color: #fff;
    background-color: #cc4d0d;
    border-color: #cc4d0d;
}

.headline_and_btns {
	display: flex;
	justify-content: space-between;
}

@media screen and (max-width: 600px) {
    .headline_and_btns {
        flex-direction: column;
		align-items: flex-start;
    }

	.buttons {
		margin-top: 7px;
		margin-bottom: -12px;
	}
}

@media screen and (max-width: 376px) {
    .btnx, .backBtn {
		float: left;
	}

	.btnx {
		margin-right: 6px;
		margin-bottom: 4px;
	}
}

@media screen and (max-width: 290px) {
	.btnx {
		padding: 0.275rem 0.65rem;
		font-size: 0.9rem;
		/* line-height: 1.5; */
	}
}
</style>
