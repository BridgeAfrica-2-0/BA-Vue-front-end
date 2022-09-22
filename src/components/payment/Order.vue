<template>
<b-card class=""> 


		<div class="card-header title-font-size font-weight-bold bg-white h-50">
			{{$t("Order.Review_and_confirm_your_Order")}} ( {{ cartLenght }} {{$t("Order.item")}})
			<br />
			
		</div>
		<div class="order card-body">
			<div>
				<OrderProductsList />
				<div class="row">
					<div class="col d-flex justify-content-end mt-4">
						<button
							@click="handleCreateOrder"
							class="btn text-14 btn-custom btn-primary px-5 shadow-sm"
						>
							<b-spinner v-if="loading" small variant="light"></b-spinner>
							{{$t("Order.Order")}}   
						</button>
					</div>
				</div>
			</div>
		</div>
	</b-card>
</template>

<script>
	// import ProductCaroussel from "./ProductCaroussel";
	import OrderProductsList from "./OrderProductsList.vue";
	export default {
		name: "Order",
		components: {
			OrderProductsList,
		},
		data() {
			return {
				loading: false,
			};
		},
		computed: {
			cartLenght() {
				return this.$store.state.checkout.cart.data.length;
				
			},

			

			order() {
				return this.$store.state.checkout.order.data;
				
			},


			cart() {
				return this.$store.state.checkout.cart; 
				
			},
			allShipping() {
				return this.$store.state.checkout.allShipping;
			},
		},
		methods: {
			showOperator() {
				this.prepareOrder();
				this.$emit("showoperator");
			},
		 	 handleCreateOrder() {
              
				if(this.cartLenght){  
				this.loading = true;
				let order_data = {};
				
				let order_items = this.cart.data;
				
				const productlength = this.cartLenght;

			  	this.$store
					.dispatch("checkout/createOrder")
					.then(({ data }) => {
						 console.log(data);
					

					 this.$emit("showoperator",data.data.total_orders_amount, data.data.order_ids);
						 this.loading = false; 



					// this.$store
					// .dispatch("checkout/getorder", data)
					// .then(({ data }) => {   
                     

					// })
						 
						  
					})
					.catch(() => {
						this.loading = false;
					});
					
					} else{

				this.flashMessage.show({
                status: 'error',

                message: "no product in your shopping cart",
                blockClass: 'custom-block-class',
              });
					}
			},
		},
		mounted() {},
	};
</script>

<style scoped>
	.text-14 {
		font-size: 14px;
	}
	.btn-custom {
		height: 38px;
		min-width: 123px;
	}

	@media only screen and (max-width: 576px) {
		.btn-custom {
			display: block;
			height: 38px;
			width: 100%;
			min-width: 100% !important;
		}
		.order.card-body,
		.card-header {
			padding: 0 !important;
		}
		.order.card-body {
			margin-top: 15px !important;
		}
	}
</style>
