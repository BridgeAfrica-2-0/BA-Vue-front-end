<template>
	<div>
		<b-button v-b-modal.product-details variant="primary">Product Details</b-button>
		<ProductDetails/>
		<b-container>
			<b-row>
				<b-col>
					<hr class="h-divider" />
					<!-- Stepper header start-->
					<b-container class="my-4" fluid>
						<PaymentProgress :steps="steps" />
					</b-container>
					<!-- Stepper header end-->
					<hr class="h-divider" />
				</b-col>
			</b-row>

			<b-row v-if="current_step == 1">
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

			<b-row v-if="current_step == 2">
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
	import ProductDetails from "./ProductDetails";

	export default {
		name: "PaymentStepper",
		components: {
			Order,
			ShippingAdress,
			PaymentOperator,
			RequestPayment,
			ConfirmPayment,
			PaymentProgress,
			ProductDetails,
		},
		data() {
			return {
				current_step: 1,
				max_step: 5,
				steps: ["Checkout", "Payment"],
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
</style>
