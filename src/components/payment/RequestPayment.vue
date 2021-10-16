<template>
	<b-card class="border-0">
		<div class="card-header text-black border-bottom-0  bg-white h-50">
			Enter your MTN Mobile Money number
		</div>
    <div class="card-body">
      <div class="row">
			<div class="col">
				<b-form-input
					placeholder="237 6XX XXX XXX"
					id="number"
					size="lg"
					type="tel"
				></b-form-input>
			</div>
			<div class="col">
				<b-button
					variant="primary"
					class="font-weight-light shadow-sm"
					size="lg"
					>CHANGE</b-button
				>
			</div>
		</div>
		<div class="row my-3">
			<div class="col">
				<b-button
					variant="primary"
					class="font-weight-light shadow-sm"
					size="lg"
          @click="confirmPayment"
					>PAY 13 000XAF</b-button
				>
			</div>
		</div>
		<div class="row my-3">
			<div class="col">
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
		},
    methods:{
      confirmPayment(){
        this.$emit('confirmpayment')
      }
    }
	};
</script>

<style></style>
