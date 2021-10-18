<template>
	<b-row>
		<b-col v-for="(step, i) in steps" :key="i">
			<div class="d-flex align-items-center flex-row justify-content-start">
				<div
					class="mr-3 d-flex align-items-center flex-row justify-content-start"
				>
					<b-avatar
						:variant="step.status ? 'success' : 'secondary'"
						class="mr-2 avatar-size"
						:text="(i + 1).toString()"
					></b-avatar>
					<a class="step" @click="switchStep(i)">
						<span class="label title-font-size font-weight-bold text-black">{{
							step.text
						}}</span>
					</a>
				</div>
				<div class="card-style">
					<b-progress
						class="rounded-pill"
						height="8px"
						:value="step.status ? 100 : 0"
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
				required: true,
			},
		},
		data() {
			return {
				next_step: {
					text_color: "text-black",
					avatar: "success",
					progress: "success",
				},
			};
		},
		methods: {
			switchStep(step) {
				const goTo = step + 1;
				this.$emit("switchstep", goTo);
			},
		},
	};
</script>

<style scoped>
	.title-font-size {
		font-size: 16px;
		cursor: pointer !important;
		color: #000;
	}
	.avatar-size {
		height: 40px;
		width: 40px;
	}

	@media only screen and (max-width: 768px) {
		.title-font-size {
			font-size: 14px !important;
		}
		.avatar-size {
			height: 35px !important;
			width: 35px !important;
		}
	}
</style>
