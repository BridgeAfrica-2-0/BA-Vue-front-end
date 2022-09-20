<template>
	<div id="orderList">    
		<div
			class=" order-item mb-4"
			v-for="(cart_item, i) in cart.data "
			:key="i"
		>  

<div  class="d-inline-flex">   
			<div class="">
				<!-- <ProductCaroussel :productImages="images(cart_item.product_picture)" /> -->
				<img :src="cart_item.product_picture" class="r-image" alt="">
			</div>
			<div
				class=" flex-fill order-info body-font-size m-auto "
			>
				
						<b-tr>
							<b-td class="capitalized">
								{{$t('general.Name')}}
							</b-td>
							<b-th>    
								{{ cart_item.product_name }}
								
							</b-th>
						</b-tr>
						<b-tr>
							<b-td>
								{{$t('general.Amount')}} :
							</b-td>
							<b-th>
								{{ formatMoney(Number(cart_item.product_price)) }}
								
							</b-th>
						</b-tr>

						<b-tr>
							<b-td>
								{{$t('general.Shipping')}} :
							</b-td>
							<b-th>
								{{ formatMoney(Number( cart_item.shipping_cost )) }}
								
							</b-th>
						</b-tr>



                     


						<b-tr>
							<b-td>
								{{$t('general.Quantity')}} :
							</b-td>
							<b-th>

								{{cart_item.quantity}}
								<!-- <input
									class="quantity-input"
									type="number"
									min="1"
									@change="changeQuantity($event, i)"
									v-model="cart_item.quantity"
								/> -->
							</b-th>
						</b-tr>
						<b-tr>
							
							
						</b-tr>
						<b-tr>
							<b-td>
								{{$t('general.Total')}}:
							</b-td>
							<b-th>
								 {{ formatMoney(Number(cart_item.sub_total) ) }} 
								
								<!-- {{
									formatMoney(
										Number(cart_item.product_price) * cart_item.quantity + 1000
									)
								}} -->
								<!-- {{
									formatMoney(
										Number(cart_item.amount) * cart_item.quantity +
											cart_item.shipping
									)
								}} -->
							</b-th>
						</b-tr>
				
			</div>

			 </div>
		</div>
		<div class="row my-4" v-if="loading">
			<div class="col-12 d-flex justify-content-center align-items-center">
				<b-spinner variant="primary"
					style="width: 3rem; height: 3rem;"
					label="Loading"
				></b-spinner>
			</div>
		</div>
		<div class="row" v-if="error">
			<div class="col-12">
				<b-alert dismissible show variant="secondary">{{$t('general.Your_cart_is_empty')}}!</b-alert>
			</div>
		</div>
		<div class="row my-4">
			<div class="col-12 d-flex justify-content-center">
				

				  
              <b-pagination
      v-if="cart.next || cart.previous"
      v-model="currentPage"
      pills
      :total-rows="cart.total"
      :per-page="cart.per_page"
      aria-controls="my-table"
      @change="changePage"
      align="center"
    ></b-pagination>


			</div>
		</div>
	</div>
</template>

<script>
	// import ProductCaroussel from "./ProductCaroussel.vue";
	export default {
		name: "OrderProductsList",
		components: {
			// ProductCaroussel,
		},
		async created() {
			this.loading = true;
			await this.$store
				.dispatch("checkout/getCart")
				.then(() => {
					this.loading = false;
					this.error = false;  
					
				})
				.catch(() => {
					this.loading = false;
					this.error = true;
				});
		},
		methods: {


			
        changePage(value) {
      console.log("next page loading ");
      this.loading = true;
      this.currentPage = value;
     let url="ckeckout-cart&page="+value;       

      this.$store
        .dispatch("checkout/next", url).then((res) => {
          console.log(res);
          this.loading=false;
          
        })
       
        .catch((err) => {
        
          console.error(err);
        });
    },




			images(img1){
				let image = [];
				if(img1.length){
					image=  img1;
				}else{
					image.push({
						img: img1
					})
				}
				return image
			},

			shippingCost(item){
				let data ={};
				
					for (let val in item) {
					// console.log(key + " -- " + value);
					data = {
						adress: val,
						price: item[val]
					
					}
				};
			
				 return data 
			},

			changeQuantity(event, index) {
				let quantity = event.target.value;
				if (quantity < 1) {
					quantity = 1;
				}
				this.cart.data[index].quantity = quantity;
				// this.order_items[index].quantity = quantity;
			},
			formatMoney(money) {
				return this.formatObject.format(money);
			},
			makeOrderforCurrentPage(cart, currentPage) {
				return cart["data"].slice(
					(currentPage - 1) * this.per_page,
					currentPage * this.per_page
				);
			},
		},
		data() {
			return {
				currentPage: 1,
				per_page: 3,
				loading: false,
				error: false,
				formatObject: new Intl.NumberFormat("fr-FR", {
					style: "currency",
					currency: "XAF",
					minimumFractionDigits: 2,
				}),
				orderForCurrentPage: [],
				productImages: [
					{
						img: require("@/assets/img/payment/headset.jpg"),
					},
					{
						img: require("@/assets/img/payment/headset1.jpg"),
					},
					{
						img: require("@/assets/img/payment/headset2.jpg"),
					},
					{
						img: require("@/assets/img/payment/headset3.jpg"),
					},
				],
			};
		},
		computed: {

			
			rowsOrder() {
				let rows = 1;
				if (this.cart["data"]) {
					rows = this.cart["data"].length;
				}
				return rows;
				// return this.order_items.length;
			},
			cart() {
				return this.$store.state.checkout.cart;
				
			},
		},
		watch: {
			currentPage: function(val) {
				this.orderForCurrentPage = this.cart["data"].slice(
					(val - 1) * this.per_page,
					val * this.per_page
				);
			},
		},
	};
</script>

<style scoped>

.capitalized{
	text-transform: capitalize;
}

@media only screen and (min-width: 768px) {
  .title {
    font-size: 20px;
    color: black;

    line-height: 35px;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .textt {
    color: #000;

    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;

    font-weight: normal;
    line-height: 20px;
    font-style: normal;

    padding: 1px;
    text-align: left;

    margin-left: 60px;

    margin-right: -5px;

    line-height: 25px;
  }

  .location {
    margin-bottom: 30px;
  }


  .r-image {
    border-radius: 8px;

    height: 160px;
    width: 160px;
  }
}






@media only screen and (max-width: 768px) {
  .a-flex {
    margin-right: -15px;
  }

  .s-button {
    padding: 15px;
    margin-top: -15px;
  }

  .title {
    font-size: 16px;
    color: black;

    line-height: 35px;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .textt {
    color: #000;

    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 12px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;

    font-weight: normal;
    line-height: 20px;
    font-style: normal;

    padding: 1px;
    text-align: left;

    margin-right: -5px;

    line-height: 25px;
  }

  .location {
    margin-bottom: 30px;
  }

  .btn {
    padding-top: 6px;
    font-size: 10px;

    height: 28px;
    width: 85px;
  }

  .r-image {
    border-radius: 8px;

    height: 100px;
    width: 100px;
  }
}



.cimage{

	height: 200px;
    width: 100%;
    object-fit: cover;

};
	.quantity-input {
		width: 2rem !important;
		border: none !important;
		outline: none !important;
	}

	.order-info td,
	.order-info th {
		padding: 2px 12px !important;
	}
	.quantity-input::-webkit-inner-spin-button {
		opacity: 1;
	}

	
	.order-item-caroussel {
		max-width: 200px;
	}

	@media only screen and (max-width: 548px) {
		.order-item-caroussel {
			max-width: 100%;
		}
	}
</style>
