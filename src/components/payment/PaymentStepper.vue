<template>
	<b-container>
		<b-row>
			<b-col>
				<hr class="h-divider" />
				<!-- Stepper header start-->
				<b-container class="my-4" fluid>
					<b-row>
						<b-col>
							<div
								class="d-flex align-items-center flex-row justify-content-start"
							>
								<div
									class="mr-3 d-flex align-items-center flex-row justify-content-start"
								>
									<b-avatar
										variant="success"
										:size="sizeStepperIndicator"
										class="mr-2"
										text="1"
									></b-avatar>
									<a class="step">
										<span class="label">Checkout</span>
									</a>
								</div>
								<div class="card-style">
									<b-progress
										class="rounded-pill"
										height="8px"
										:value="100"
										variant="success"
									></b-progress>
								</div>
							</div>
						</b-col>
						<b-col>
							<div
								class="d-flex align-items-center flex-row justify-content-start"
							>
								<div
									class="mr-3 d-flex align-items-center flex-row justify-content-start"
								>
									<b-avatar class="mr-2" text="2"></b-avatar>
									<a class="step">
										<span class="label text-secondary">Payment</span>
									</a>
								</div>
								<div class="card-style">
									<b-progress
										class="rounded-pill"
										height="8px"
										:value="0"
										variant="success"
									></b-progress>
								</div>
							</div>
						</b-col>
					</b-row>
				</b-container>
				<!-- Stepper header end-->
				<hr class="h-divider" />
			</b-col>
		</b-row>

	<!-- Card stepper -->
		<b-row>
			<b-col>
				<div>
					<b-card v-if="current_step == 1" class="card-style" title="STEP1">
						<b-card-text>Something for first step.</b-card-text>
						<b-button class="float-right" variant="primary" @click="onClickNext"
							>Next</b-button
						>
					</b-card>
					<b-card v-if="current_step == 2" class="card-style" title="STEP2">
						<b-card-text>Do something for second step.</b-card-text>
						<b-button
							class="float-left"
							variant="secondary"
							@click="onClickBack"
							>Back</b-button
						>
						<b-button class="float-right" variant="primary" @click="onClickNext"
							>Next</b-button
						>
					</b-card>
					<b-card v-if="current_step == 3" class="card-style" title="STEP3">
						<b-card-text>For furthermore in 3rd step.</b-card-text>
						<b-button
							class="float-left"
							variant="secondary"
							@click="onClickBack"
							>Back</b-button
						>
						<b-button class="float-right" variant="primary" @click="onClickNext"
							>Next</b-button
						>
					</b-card>
					<b-card v-if="current_step == 4" class="card-style" title="STEP4">
						<b-card-text>Will soon finish.</b-card-text>
						<b-button
							class="float-left"
							variant="secondary"
							@click="onClickBack"
							>Back</b-button
						>
						<b-button class="float-right" variant="primary" @click="onClickNext"
							>Next</b-button
						>
					</b-card>
					<b-card v-if="current_step == 5" class="card-style" title="STEP5">
						<b-card-text>Finished!</b-card-text>
						<b-button
							class="float-left"
							variant="secondary"
							@click="onClickBack"
							>Back</b-button
						>
						<b-button
							class="float-center"
							variant="success"
							@click="onClickFirst"
							>Back to first</b-button
						>
					</b-card>
				</div>
			</b-col>
		</b-row>
	</b-container>
</template>
<script>
	export default {
		name: "PaymentStepper",
		data() {
			return {
				current_step: 1,
				max_step: 5,
				sizeStepperIndicator: "md",
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
