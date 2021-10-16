<template>
	<b-card>
		<div class="card-body">
			<div class="row p-2">
				<div class="col">
					<button @click="showRewiew" class="float-left p-2 btn btn-primary">
						Back
					</button>
				</div>
			</div>

			<div class="my-4 operator">
				<div class="">
					<img
						height="30px"
						width="50px"
						:src="require('@/assets/img/payment/mtn.png')"
						alt="MOBILE MONEY"
					/>
				</div>
				<div class="operator-name">
					<p class="mb-0 mx-4">MTN Mobile Money</p>
				</div>
				<div class="">
					<input
						class="p-3 float-sm-right"
						type="radio"
						name="drone"
						value="MTN"
						checked
					/>
				</div>
			</div>

			<div class="my-4 operator">
				<div class="">
					<img
						height="30px"
						width="50px"
						:src="require('@/assets/img/payment/orange_money.png')"
						alt="MOBILE MONEY"
					/>
				</div>
				<div class="operator-name">
					<p class="mb-0 mx-4">Orange Money</p>
				</div>
				<div class="">
					<input
						class="p-3 float-sm-right"
						type="radio"
						name="drone"
						value="ORANGE"
						checked
					/>
				</div>
			</div>
			<div class="mt-4 mb-3 operator">
				<div class="">
					<img
						height="30px"
						width="50px"
						:src="require('@/assets/img/payment/gimac.jpg')"
						alt="MOBILE MONEY"
					/>
				</div>
				<div class="operator-name">
					<p class="mb-0 mx-4">GIMAC</p>
				</div>
				<div class="">
					<input
						class="p-3 float-sm-right"
						type="radio"
						name="drone"
						value="GIMAC"
						checked
					/>
				</div>
			</div>

			<div class="row p-2">
				<div class="col">
					<button @click="requestPayment" class="float-right p-2 btn btn-primary mt-2">
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
		methods: {
			showRewiew() {
				this.$emit("showreview");
			},
			requestPayment(){
				this.$emit("requestpayment")
			}
		},
	};
</script>

<style scoped>
	.d-flex .img {
		display: block;
		width: 60px !important;
	}
  .operator{
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .operator-name{
    width: 20rem;
  }
</style>
