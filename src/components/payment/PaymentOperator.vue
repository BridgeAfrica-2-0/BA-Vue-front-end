<template>
	<b-card>
		<div class="card-body">
			<!-- <div class="row p-2">
				<div class="col">
					<button @click="showRewiew" class="float-left p-2 btn btn-primary">
						Back
					</button>
				</div>
			</div> -->

			<div class="my-4 operator">
				<div class="">
					<img
						:src="require('@/assets/img/payment/mtn.png')"
						alt="MOBILE MONEY"
					/>
				</div>
				<div class="operator-name">
					<p class="mb-0 mx-4 title-font-size font-weight-bold">MTN Mobile Money</p>
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
				<div class="">
					<img
						:src="require('@/assets/img/payment/orange_money.png')"
						alt="MOBILE MONEY"
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
			<div class="mt-4 mb-3 operator">
				<div class="operator-img-box">
					<img
						:src="require('@/assets/img/payment/expressU.jpg')"
						alt="EXPRESS UNION"
					/>
				</div>
				<div class="operator-name">
					<p class="mb-0 mx-4 title-font-size font-weight-bold">Express Union</p>
				</div>
				<div class="operator-select-box">
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
						class="float-right text-14 p-2 btn btn-primary mt-2"
					>
						Pay: 13 000 XAF
					</button>
				</div>
			</div>
		</div>
	</b-card>
</template>

<script>
	export default {
		name: "PaymentOperator",
		data() {
			return {
				operator: "",
			};
		},
		methods: {
			showRewiew() {
				this.$emit("showreview");
			},
			requestPayment() {
				this.$emit("requestpayment");
			},
		},
	};
</script>

<style scoped>
	/* .d-flex .img {
		display: block;
		width: 60px !important;
	} */
	.operator {
		display: flex;
		justify-content: start;
		align-items: center;
	}
	.operator-img-box{
		width: 50px !important;
	}
	.operator img {
		display: inline-block;
		height: 40px;
		width: 100%;
	}
	.operator-name {
		width: 20rem;
	}
	.operator-select > input {
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
