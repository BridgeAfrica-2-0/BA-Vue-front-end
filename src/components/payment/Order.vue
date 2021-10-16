<template
	><b-card class="">
		<div class="card-header font-weight-bold bg-white h-50">
			Review and confirm your Order (1 item)
			<br />
			Business: Largo
		</div>
		<div class="card-body">
			<div>
				<div class="row">
					<div class="col-12 col-sm-6 col-md-3">
						<ProductCaroussel/>
					</div>
					<div class="col-6 col-sm-3">
						Name of item:
						<br /><br />
						Amount :
						<br /><br />
						Shipping:
						<br /><br />
						Total:
					</div>
					<div class="col-6 col-sm-3">
						Headset
						<br /><br />
						12 000XAF
						<br /><br />
						1 000 XAF
						<br /><br />
						13 000 XAF
					</div>
				</div>
				<div class="row">
					<div class="col mt-4">
						<button @click="showOperator" class="btn btn-primary float-right px-5 shadow-sm">
							Order
						</button>
					</div>
				</div>
			</div>
		</div>
	</b-card>
</template>

<script>
import ProductCaroussel from "./ProductCaroussel"
	export default {
		name: "Order", 
		components: {
			ProductCaroussel
		},
		methods: {
			showOperator(){
				this.$emit('showoperator')
			}
		}

	};
</script>

<style>
	.user_img {
		width: 40px;
		height: 40px;
	}
</style>
