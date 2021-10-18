<template
	><b-card class="">
		<div class="card-header title-font-size font-weight-bold bg-white h-50">
			Review and confirm your Order (1 item)
			<br />
			Business: Largo
		</div>
		<div class="card-body">
			<div>
				<div class="row">
					<div class="col-12 col-sm-6 mb-3 col-md-3">
						<ProductCaroussel />
					</div>
					<div class="col-6 body-font-size col-sm-3">
						Name of item:
						<br /><br />
						Amount :
						<br /><br />
						Shipping:
						<br /><br />
						Total:
					</div>
					<div class="col-6 body-font-size col-sm-3">
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
					<div class="col d-flex justify-content-end mt-4">
						<button
							@click="showOperator"
							class="btn text-14 btn-custom btn-primary px-5 shadow-sm"
						>
							Order
						</button>
					</div>
				</div>
			</div>
		</div>
	</b-card>
</template>

<script>
	import ProductCaroussel from "./ProductCaroussel";
	export default {
		name: "Order",
		components: {
			ProductCaroussel,
		},
		methods: {
			showOperator() {
				this.$emit("showoperator");
			},
		},
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
	}
</style>
