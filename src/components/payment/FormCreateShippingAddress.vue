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
			<div class="row">
				<div class="col">
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
							@change="getRegions"
							required
						></b-form-select>
					</b-form-group>
				</div>
				<div class="col">
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
							value-field="id"
							text-field="name"
							@change="getDivisions"
							required
						></b-form-select>
					</b-form-group>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<b-form-group
						class="body-font-size"
						id="input-group-division"
						label="Division :"
						label-for="country-input"
					>
						<b-form-select
							id="division-input"
							v-model="form.division"
							:options="divisions"
							value-field="id"
							text-field="name"
							@change="getCouncils"
							required
						></b-form-select>
					</b-form-group>
				</div>
				<div class="col">
					<b-form-group
						class="body-font-size"
						id="input-group-council"
						label="Council :"
						label-for="council-input"
					>
						<b-form-select
							id="council-input"
							v-model="form.council"
							:options="councils"
							@change="getNeigbourhoods"
							value-field="id"
							text-field="name"
							required
						></b-form-select>
					</b-form-group>
				</div>
			</div>
			<b-form-group
				class="body-font-size"
				id="input-group-city"
				label="City :"
				label-for="city-input"
			>
				<b-form-input
					id="city-input"
					v-model="form.city"
					type="text"
					required
				></b-form-input>
			</b-form-group>

			<b-form-group
				class="body-font-size"
				id="input-group-neigbourhood"
				label="neigbourhood :"
				label-for="neigbourhood-input"
			>
				<b-form-select
					id="neigbourhood-input"
					v-model="form.neigbourhood"
					:options="neigbourhoods"
					value-field="id"
					text-field="name"
					required
				></b-form-select>
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
					division: "",
					council: "",
					city: "",
					neigbourhood: "",
				},
			};
		},
		computed: {
			username() {
				return this.$store.state.auth.user.user.name;
			},
			countries() {
				return this.$store.state.auth.country;
			},
			regions() {
				return this.$store.state.auth.region;
			},
			divisions() {
				return this.$store.state.auth.division;
			},
			councils() {
				return this.$store.state.auth.municipality;
			},
			neigbourhoods() {
				return this.$store.state.auth.locality;
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
			getRegions(country_id) {
				this.$store.dispatch("auth/region", { countryId: country_id });
			},
			getDivisions(region_id) {
				this.$store.dispatch("auth/division", { regionId: region_id });
			},
			getCouncils(division_id) {
				this.$store.dispatch("auth/municipality", { divisionId: division_id });
			},
			getNeigbourhoods(council_id) {
				this.$store.dispatch("auth/locality", { councilId: council_id });
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
