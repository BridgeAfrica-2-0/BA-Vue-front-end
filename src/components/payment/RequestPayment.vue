<template>
	<b-card class="border-0">
		<div class="card-header px-0 text-black border-bottom-0  bg-white h-50">
			Enter your MTN Mobile Money number
		</div>
		<div class="px-0">
			<div class="row">
				<div class="col-8 col-sm-9 col-md-6">
					<b-form-input
						placeholder="237 6XX XXX XXX"
						id="number"
						v-model="number"
						type="tel"
					></b-form-input>
				</div>
				<div class="col-4 col-sm-3 col-md-6 px-0 btn-custom-box">
					<b-button
						variant="primary"
						class="font-weight-light btn-custom text-14 shadow-sm"
						>CHANGE</b-button
					>
				</div>
			</div>
			<div class="row my-3">
				<div class="col btn-custom-box">
					<b-button
						variant="primary"
						class="font-weight-light shadow-sm btn-custom text-14"
						@click="confirmPayment"
						>PAY {{formatMoney(price)}}</b-button
					>
				</div>
			</div>
			<div class="row my-3">
				<div class="col body-font-size">
					<p>
						Please make sure your account balance is greater than 13 000XAF,
						Otherwise your payment will not be completed.
					</p>
					<p>
						Reference NO: XXXXXXXXXXXX
					</p>
				</div>
			</div>
		</div>
	</b-card>
</template>

<script>
	export default {
		name: "RequestPayment",
		props: {
			operator: {
				type: String,
			},
			amount: {
				type: String,
			},
			price: {
				type: Number,
				default: 0,
			},
		},
		data() {
			return {
				formatObject: new Intl.NumberFormat("fr-FR", {
					style: "currency",
					currency: "XAF",
					minimumFractionDigits: 2,
				}),
				number: '',
			};
		},
		methods: {
			confirmPayment() {
				this.$emit('confirmpayment', {number: this.number, amount: this.price, operator: this.operator});
			},
			formatMoney(money) {
				return this.formatObject.format(money);
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
	@media only screen and (max-width: 768px) {
		/* .btn-custom {
			float: right;
		} */
		/* .btn-custom-box{
			width: fit-content;
		} */
		/* .payment-body{
			padding: 20px 0px !important;
		} */
		.card-body {
			padding: 0 !important;
		}
	}
</style>
