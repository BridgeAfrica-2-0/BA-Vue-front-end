<template>
	<div>
		<!-- <b-button v-b-modal.product-details variant="primary">Product Details</b-button>
		<ProductDetails/> -->
		<!-- Stepper header start-->
		<b-container class="my-4" fluid="md">
			<hr class="h-divider" />
			<PaymentProgress @switchstep="handleSwitchStep" :steps="steps" />
			<hr class="h-divider" />
		</b-container>
		<!-- Stepper header end-->

		<b-container fluid="md">
			<b-row>
				<b-col> </b-col>
			</b-row>

			<b-row v-if="current_step == 1">
				<b-col>
					<h1 class="text-center">No yet Define</h1>
				</b-col>
			</b-row>

			<b-row v-if="current_step == 2">
				<!-- Card Stepper for Shipping Address Start -->
				<b-col v-if="showReview" class="my-4" cols="12">
					<ShippingAdress />
				</b-col>
				<!-- Card Stepper for Shipping Address End -->

				<!-- Card Stepper for Order Start -->
				<b-col v-if="showReview" class="my-4" cols="12">
					<Order @showoperator="handleShowOperator" />
				</b-col>
				<!-- Card Stepper for Order End -->
				<b-col v-if="showOperators" class="my-4" cols="12">
					<PaymentOperator
						@requestpayment="handleRequestPayment"
						@showreview="handleShowReview"
					/>
				</b-col>
			</b-row>
			<!-- Stepper Page 1  End -->

			<b-row v-if="current_step == 3">
				<b-col class="my-4" cols="12">
					<RequestPayment
						v-if="showRequestPayment"
						@confirmpayment="handleConfirmPayment"
					/>
				</b-col>
				<b-col v-if="showConfirmPayment" class="my-4" cols="12">
					<ConfirmPayment />
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>
<script>
	import Order from "./Order";
	import ShippingAdress from "./ShippingAdress";
	import PaymentOperator from "./PaymentOperator";
	import RequestPayment from "./RequestPayment";
	import ConfirmPayment from "./ConfirmPayment";
	import PaymentProgress from "./PaymentProgress";
	// import ProductDetails from "./ProductDetails";

	export default {
		name: "PaymentStepper",
		components: {
			Order,
			ShippingAdress,
			PaymentOperator,
			RequestPayment,
			ConfirmPayment,
			PaymentProgress,
		},
		data() {
			return {
				current_step: 1,
				max_step: 5,
				steps: [
					{
						text: "Shipping Address",
						status: true,
					},
					{
						text: "Checkout",
						status: false,
					},
					{
						text: "Confirm Payment",
						status: false,
					},
				],
				sizeStepperIndicator: "md",
				showOperators: false,
				showReview: true,
				showRequestPayment: true,
				showConfirmPayment: false,
			};
		},
		computed: {
			progress: function() {
				return Math.round(100 / this.max_step) * this.current_step;
			},
		},
		created() {
			window.addEventListener("resize", this.resizeHandler);
		},
		methods: {
			onClickNext: function() {
				this.current_step++;
			},
			onClickBack: function() {
				this.current_step--;
			},
			onClickFirst: function() {
				this.current_step = 1;
			},
			handleSwitchStep(step) {
				this.current_step = step;
			},
			handleShowOperator() {
				this.showOperators = true;
				this.showReview = false;
			},
			handleShowReview() {
				this.showReview = true;
				this.showOperators = false;
			},
			handleRequestPayment() {
				this.steps = ["Request Payment", "Confirm Payment"];
				this.onClickNext();
			},
			handleConfirmPayment() {
				this.$emit("nextpaymentstep");
				this.showRequestPayment = false;
				this.showConfirmPayment = true;
			},
		},
	};
</script>

<style>
	.card-style {
		width: 80%;
		margin: 0 auto;
	}
	.step .icon {
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 2.3rem;
		height: 2.3rem;
		background-color: var(--secondary);
		color: var(--primary-text);
		margin-right: 0.5rem;
	}
	.step.active .icon,
	.step.complete .icon {
		background-color: #13b93c;
	}
	.title-font-size {
		font-size: 16px;
		cursor: pointer !important;
		color: #000;
	}
	.headline-font-size {
		font-size: 20px;
		color: #000;
	}
	.avatar-size {
		height: 40px;
		width: 40px;
	}
	.body-font-size {
		font-size: 14px;
	}
	.text-14 {
		font-size: 14px;
	}
	@media only screen and (max-width: 768px) {
		.headline-font-size {
			font-size: 16px;
		}
		.title-font-size {
			font-size: 14px !important;
		}
		.avatar-size {
			height: 35px !important;
			width: 35px !important;
		}
		.body-font-size {
			font-size: 12px;
		}
	}
</style>
