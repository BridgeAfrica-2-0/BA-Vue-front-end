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
					<div class="col">
						<ProductCaroussel/>
					</div>
					<div class="col-2">
						Name of item:
						<br /><br />
						Shipping:
						<br /><br />
						Total:
					</div>
					<div class="col-4">
						500XAf
						<br /><br />
						100
						<br /><br />
						1000
					</div>
				</div>
				<div class="row">
					<div class="col">
						<button class="btn btn-primary float-right px-5 shadow-sm">
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
		}

	};
</script>

<style>
	.user_img {
		width: 40px;
		height: 40px;
	}
</style>
