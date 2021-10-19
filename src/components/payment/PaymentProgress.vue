<template>
	<b-row class="">
		<b-col
			class="progress-content mx-2 p-2"
			:class="`box-${i + 1}`"
			v-for="(step, i) in steps"
			:key="i"
		>
			<div
				class="progress-item-box d-flex align-items-center flex-row justify-content-start"
			>
				<div
					class="mr-3 z-index-sup d-flex align-items-center flex-row justify-content-start"
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
				<div class=".z-index-sup card-style">
					<b-progress
						class="rounded-pill"
						height="8px"
						:value="current_step >= i + 1 ? 100 : 0"
						:variant="current_step === i + 1 ? 'success' : 'secondary'"
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
			current_step: Number,
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
	/* .progress-content {
		background: #28a745;
		height: 100% !important;
	} */
	/* .progress-item-box {
		position: relative;
	} */
	/* .box-progress {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100% !important;
		background: crimson;
	}
	.z-index-sup{
		z-index: 12;
	} */
	/* .box-1 {
		clip-path: polygon(0% 0%, 75% 0%, 87% 50%, 75% 100%, 0% 100%);
	}
	.box-2 {
		clip-path: polygon(75% 0%, 85% 50%, 75% 100%, 0% 100%, 5% 51%, 0% 0%);
	}
	.box-3 {
		clip-path: polygon(100% 0, 100% 100%, 0% 100%, 4% 51%, 0% 0%);
	} */

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
