<template>
<div>

    <navbar />
    
	<b-card>
		<div class="card-body">
			<div class="row">
				<div
					class="col d-flex justify-content-center align-items-center"
					style="height: 200px;"
				>
					<h1 class="text-36 font-weight-bold text-center">
						Transaction Failed
					</h1>
				</div>
			</div>
			<div class="row my-3">
				<div
					class="col-12 back-buttons-group d-flex justify-content-between flex-wrap align-items-center"
				>
					<b-button
						variant="success"
						href="/"
						class="btn-custom text-14 font-weight-light mb-3  shadow-sm"
						size="lg"
						><b-icon icon="arrow-left-circle-fill"></b-icon> To Home</b-button
					>
					<b-button
						variant="primary"
						class="btn-custom text-14 mb-3 font-weight-light  shadow-sm"
						size="lg"
						><b-icon icon="arrow-right-circle-fill"></b-icon> To
						Search</b-button
					>
				</div>
			</div>
		</div>
	</b-card>

      <Footer />  </div>
</template>

<script>

import navbar from "@/components/navbar";

import Footer from "../components/footer";
	export default {
		name: "ConfirmPayment",

          components: {
    navbar,
   
    Footer
  },
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
	}
	@media only screen and (max-width: 362px) {
		.back-buttons-group {
			justify-content: center !important;
		}
	}
</style>
