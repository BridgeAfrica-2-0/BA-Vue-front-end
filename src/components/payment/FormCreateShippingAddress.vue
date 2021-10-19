<template>
	<div>
		<b-form @submit="onSubmit" @reset="onReset">
			<b-form-group
				class="body-font-size"
				id="input-group-1"
				label="Name :"
				label-for="input-1"
			>
				<b-form-input
					id="input-1"
					v-model="form.name"
					type="text"
					required
				></b-form-input>
			</b-form-group>

			<b-form-group
				class="body-font-size"
				id="input-group-2"
				label="Phone :"
				label-for="input-2"
			>
				<b-form-input
					id="input-2"
					v-model="form.phone"
					type="tel"
					required
				></b-form-input>
			</b-form-group>

			<b-form-group
				class="body-font-size"
				id="input-group-3"
				label="Country :"
				label-for="input-3"
			>
				<b-form-input
					id="input-3"
					v-model="form.country"
					type="text"
					required
				></b-form-input>
			</b-form-group>
			<b-form-group
				class="body-font-size"
				id="input-group-4"
				label="City :"
				label-for="input-4"
			>
				<b-form-input
					id="input-4"
					v-model="form.city"
					type="text"
					required
				></b-form-input>
			</b-form-group>
			<b-form-group
				class="body-font-size"
				id="input-group-5"
				label="Neigbourhood :"
				label-for="input-5"
			>
				<b-form-input
					id="input-5"
					v-model="form.neigbourhood"
					type="text"
					required
				></b-form-input>
			</b-form-group>

			<div class="d-flex justify-content-between align-items-center">
				<b-button class="btn-custom mr-3" type="submit" variant="primary"
					>Save</b-button
				>
				<b-button class="btn-custom" type="reset" variant="success"
					>Cancel</b-button
				>
			</div>
		</b-form>
	</div>
</template>

<script>
	export default {
		name: "FormCreateShippingAddress",
		data() {
			return {
				form: {
					name: "",
					phone: "",
					country: "",
					city: "",
					neigbourhood: "",
				},
			};
		},
		methods: {
			onSubmit(event) {
				event.preventDefault();
				alert(JSON.stringify(this.form));
			},
			onReset(event) {
				event.preventDefault();
				// Reset our form values
				this.form.name = "";
				this.form.phone = "";
				this.form.country = "";
				this.form.city = "";
				this.form.neigbourhood = "";
			},
		},
	};
</script>
<style scoped>
	.btn-custom {
		height: 38px;
		min-width: 123px;
		font-size: 14px;
	}
	@media only screen and (max-width: 768px) {
		.btn-custom {
			display: block;
			width: 100%;
		}
	}
</style>
