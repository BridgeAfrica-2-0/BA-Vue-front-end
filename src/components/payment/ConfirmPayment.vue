<template>
	<b-card>
		<div class="card-body">
			<div class="row">
				<div
					class="col d-flex justify-content-center align-items-center"
					style="height: 200px;"
				>
					<h1 class="text-36 font-weight-bold text-center">
						Transaction Completed
					</h1>
				</div>
			</div>
			<div class="row my-3">
				<div class="col">
					<b-button
						variant="success"
						href="/"
						class="btn-custom text-14 font-weight-light float-left shadow-sm"
						size="lg"
						><b-icon icon="arrow-left-circle-fill"></b-icon> To Home</b-button
					>
				</div>
				<div class="col">
					<b-button
						variant="primary"
						class="btn-custom text-14 font-weight-light float-right shadow-sm"
						size="lg"
						><b-icon icon="arrow-right-circle-fill"></b-icon> To
						Search</b-button
					>
				</div>
			</div>
		</div>
	</b-card>
</template>

<script>
	export default {
		name: "ConfirmPayment",
	};
</script>

<style scoped>
	.text-14 {
		font-size: 14px;
	}
	.text-36 {
		font-size: 36px;
	}

	.btn-custom {
		height: 38px;
		min-width: 123px;
	}
	@media only screen and (max-width: 576px) {
		.text-36 {
			font-size: 30px;
		}
	}</style>
