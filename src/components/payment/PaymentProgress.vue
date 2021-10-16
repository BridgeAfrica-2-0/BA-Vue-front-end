<template>
	<b-row>
		<b-col>
			<div class="d-flex align-items-center flex-row justify-content-start">
				<div
					class="mr-3 d-flex align-items-center flex-row justify-content-start"
				>
					<b-avatar
						variant="success"
						size="md"
						class="mr-2"
						text="1"
					></b-avatar>
					<a class="step">
						<span class="label">{{steps[0]}}</span>
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
		<b-col @nextpaymentstep="handleNextPaymentStep">
			<div class="d-flex align-items-center flex-row justify-content-start">
				<div
					class="mr-3 d-flex align-items-center flex-row justify-content-start"
				>
					<b-avatar class="mr-2" text="2"></b-avatar>
					<a class="step">
						<span class="label text-secondary">{{steps[1]}}</span>
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
</template>

<script>
	export default {
    props: {
      steps: {
        type: Array,
        required: true
      }
    },
    data(){
      return{
          next_step: {
            text_color:"text-black",
            avatar:'success',
            progress: 'success',
          }
      }
    },
    methods: {
      handleNextPaymentStep(){

      }
    }
  };
</script>

<style></style>
