<template>
	<div>
		<b-form @submit="onSubmit" @reset="onReset">
			<b-form-group
				class="body-font-size"
				id="input-group-name"
				label="Name :"
				label-for="name-input"
			>
				<b-form-input
					id="name-input"
					v-model="username"
					type="text"
					required
					readonly
				></b-form-input>
			</b-form-group>

			<b-form-group
				class="body-font-size"
				id="input-group-phone"
				label="Phone :"
				label-for="phone-input"
			>
				<b-form-input
					id="phone-input"
					v-model="form.phone"
					type="tel"
					required
				></b-form-input>
			</b-form-group>

			<b-form-group
				class="body-font-size"
				id="input-group-country"
				label="Country :"
				label-for="country-input"
			>
				<b-form-select
					id="country-input"
					v-model="form.country"
					:options="countries"
					value-field="id"
					text-field="name"
					required
				></b-form-select>
			</b-form-group>

			<b-form-group
				class="body-font-size"
				id="input-group-region"
				label="Region :"
				label-for="region-input"
			>
				<b-form-select
					id="region-input"
					v-model="form.region"
					:options="regions"
					required
				></b-form-select>
			</b-form-group>
			<b-form-group
				class="body-font-size"
				id="input-group-city"
				label="City :"
				label-for="city-input"
			>
				<b-form-select
					id="city-input"
					v-model="form.city"
					:options="cities"
					required
				></b-form-select>
			</b-form-group>
			<b-form-group
				class="body-font-size"
				id="input-group-neigbourhood"
				label="Neigbourhood :"
				label-for="neigbourhood-input"
			>
				<b-form-input
					id="neigbourhood-input"
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
					region: "",
					city: "",
					neigbourhood: "",
				},
				regions: [
					{
						text: "Center",
						value: 1,
					},
					{
						text: "West",
						value: 2,
					},
					{
						text: "Nouth",
						value: 3,
					},
					{
						text: "South",
						value: 4,
					},
				],
				cities: [
					{
						text: "Yaoundé",
						value: 1,
					},
					{
						text: "Douala",
						value: 2,
					},
					{
						text: "Bafoussam",
						value: 3,
					},
				],
			};
		},
		computed: {
			username() {
				return this.$store.state.auth.user.user.name;
			},
			countries() {
				return this.$store.state.auth.country;
			},
		},
		mounted() {
			this.$store.dispatch("auth/country");
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
