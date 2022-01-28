<template>
	<b-card>
		<div class="">
			<!-- <div class="row p-2">
				<div class="col">
					<button @click="showRewiew" class="float-left p-2 btn btn-primary">
						Back
					</button>
				</div>
			</div> -->    

			

			<div class="my-4 operator">
				<div class="operator-img-box">
					<img
						:src="require('@/assets/img/payment/mtn.png')"
						style="width:40px"
						alt="MOBILE MONEY"
					/>
				</div>
				<div class="operator-name">
					<p class="mb-0 mx-4 title-font-size font-weight-bold">
						MTN Mobile Money
					</p>
				</div>
				<div class="operator-select-box">
					<b-form-radio
						v-model="operator"
						name="operator"
						value="MTN"
						class="operator-select"
					></b-form-radio>
				</div>
			</div>

			<div class="my-4 operator">
				<div class="operator-img-box">
					<img
						:src="require('@/assets/img/payment/orange_money.png')"
						alt="ORANGE MONEY"
						style="width:40px"
					/>
				</div>
				<div class="operator-name">
					<p class="mb-0 mx-4 title-font-size font-weight-bold">Orange Money</p>
				</div>
				<div class="operator-select-box">
					<b-form-radio
						v-model="operator"
						name="operator"
						value="ORANGE"
						class="operator-select"
					></b-form-radio>
				</div>
			</div>
			<div class="my-4 operator">
				<div class="operator-img-box">
					<img
						:src="require('@/assets/img/payment/expressU.jpg')"
						alt="EXPRESS UNION"

						style="width:40px"
					/>
				</div>
				<div class="operator-name">
					<p class="mb-0 mx-4 title-font-size font-weight-bold">
						Express Union
					</p>
				</div>
				<div class="operator-select-box ml-md-2">
					<b-form-radio
						v-model="operator"
						name="operator"
						value="EXPRESS"
						class="operator-select"
					></b-form-radio>
				</div>
			</div>

			<div class="row p-2">
				<div class="col">
					<button
						@click="requestPayment"
						class="float-right btn-custom p-2 btn btn-primary mt-2"
					>
						Pay: {{ formatMoney(price) }}
					</button>
				</div>
			</div>
		</div>
	</b-card>
</template>

<script>
	export default {
		name: "PaymentOperator",
		props: {
			price: {
				type: Number,
				default: 0,
			},
		},
		data() {
			return {
				operator: "",
				formatObject: new Intl.NumberFormat("fr-FR", {
					style: "currency",
					currency: "XAF",
					minimumFractionDigits: 2,
				}),
			};
		},
		methods: {
			showRewiew() {
				this.$emit("showreview");
			},
			requestPayment() {
				if (this.operator !== "" && this.price > 0)
					this.$emit("requestpayment", this.price,this.operator);
			},
			formatMoney(money) {
				return this.formatObject.format(money);
			},
		},
	};
</script>

<style scoped>
	/* .d-flex .img {
		display: block;
		width: 60px !important;
	} */
	.btn-custom {
		height: 38px;
		min-width: 123px;
		font-size: 14px;
	}
	.operator {
		display: flex;
		justify-content: start;
		align-items: center;
	}

	@media only screen and (max-width: 768px) {
	.operator-img-box {
		width: 50% !important;
	}

	}
	.operator img {
		display: inline-block;
		height: 40px;
		width: 100%;
	}
	.operator-name {
		width: 30rem;
	}
	.operator-select {
		cursor: pointer !important;
	}

	@media only screen and (max-width: 992px) {
		.operator-select-box {
			width: 80%;
		}
		.operator-select {
			float: right;
		}
	}
</style>
