<template>
	<div>
		<b-form @submit="onSubmit" @reset="onReset">
			<b-alert :show="errorAppend" variant="danger"
				>One problem must append!</b-alert
			>
			<b-form-group
				class="body-font-size"
				id="input-group-name"
				:label=" $t('general.Name')"
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
				:label="$t('general.Phone')"
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
				id="input-group-email"
				:label="$t('general.email')"
				label-for="email-input"
			>
				<b-form-input
					id="email-input"
					v-model="form.email"
					type="email"
					required
				></b-form-input>
			</b-form-group>
			<div class="row">
				<div class="col">
					<b-form-group
						class="body-font-size"
						id="input-group-country"
						:label="$t('general.Country')"
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
						:label="$t('general.Region')"
						label-for="region-input"
					>
						<b-form-select
							id="region-input"
							v-model="form.region"
							:options="regions"
							value-field="id"
							text-field="name"
							@change="getDestinations"
							required
						></b-form-select>
					</b-form-group>
				</div>
			</div>
			<!-- <div class="row">
				<div class="col">
					<b-form-group
						class="body-font-size"
						id="input-group-division"
						label="Division :"
						label-for="country-input"
					>
						<b-form-select
							id="division-input"
							v-model="form.division_id"
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
							v-model="form.council_id"
							:options="councils"
							@change="getNeigbourhoods"
							value-field="id"
							text-field="name"
							required
						></b-form-select>
					</b-form-group>
				</div>
			</div> -->
			<!-- <b-form-group
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
			</b-form-group> -->
			<b-form-group
				class="body-font-size"
				id="input-group-region"
				:label="$t('general.Destination')"
				label-for="destination-input"
			>
				<b-form-select
					id="destination-input"
					v-model="form.city"
					:options="destinations"
					value-field="id"
					text-field="name"
					required
				></b-form-select>
			</b-form-group>

			<!-- <b-form-group
				class="body-font-size"
				id="input-group-neigbourhood"
				label="neigbourhood :"
				label-for="neigbourhood-input"
			>
				<b-form-select
					id="neigbourhood-input"
					v-model="form.neighbourhood_id"
					:options="neigbourhoods"
					value-field="id"
					text-field="name"
					required
				></b-form-select>
			</b-form-group> -->

			<div class="d-flex justify-content-between align-items-center">
				<b-button class="btn-custom bg-secondary text-light" type="reset"  variant="secondary"
					>{{$t("general.Cancel")}}</b-button>

				<b-button class="btn-custom mr-3" type="submit" variant="primary">
					<b-spinner v-if="loading" small variant="light"></b-spinner>
					{{$t("general.Save")}}</b-button>

			</div>

			<div class="mt-3 pr-3" v-if="shippingsTab.length && current_step==1"> 
				<p role="button" class="text-center" @click="closesipping" > Skip <b-icon variant="primary" icon="arrow-right-circle-fill"> </b-icon> </p>
			</div>

		</b-form>
		
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name: "FormCreateShippingAddress",

		props: {
			form: {
				type: Object,
				require: true,
			},
			 current_step:{
			 require: true,
		 },
			modal: Boolean,
			mode: {
				type: String,
				default: "create",
			},
		},
		data() {
			return {
				errorAppend: false,
				loading: false,
				countries: [],
				regions: [],
				destinations: []
			};
		},
		created(){
			this.getcountries();
			console.log(this.form.country);
			
		},
		computed: {
			username() {
				return this.$store.state.auth.user.user.name;
			},

			 shippingsTab() {
				return this.$store.state.checkout.allShipping;
				
			},


			// countries() {
			// 	return this.$store.state.auth.country;
			// },
			// regions() {
			// 	return this.$store.state.auth.region;
			// },
			// divisions() {
			// 	return this.$store.state.auth.division;
			// },
			// councils() {
			// 	return this.$store.state.auth.municipality;
			// },
			// neigbourhoods() {
			// 	return this.$store.state.auth.locality;
			// },
		},
		mounted() {
			// this.$store.dispatch("auth/country");
			if (this.mode !== "create") {
				this.getRegions(this.form.country);
				this.getDestinations(this.form.region);
			}
		},
		methods: {
			closesipping(){
               
			 
								this.$emit("closecshippingm");
						
								this.$emit("switchstep", 2);
						

			},

			onSubmit(event) {
				event.preventDefault();
				this.loading = true;
				this.form.name = this.username;
				//if component is called in create mode
				if (this.mode === "create") {
					this.$store
						.dispatch("checkout/createShipping", this.form)
						.then(() => {
							this.loading = false;
							this.errorAppend = false;
							if (this.modal) {
								this.$emit("closecshippingm");
							} else {
								this.$emit("switchstep", 2);
							}
						})
						.catch(() => {
							this.loading = false;
							this.errorAppend = true;
							if (this.modal) {
								this.$emit("closecshippingm");
							}
						});
				} else {
					//if component is called in edit mode
					let formData = new FormData();
					let shippingUp = {
						id: this.form.id,
						data: {
							region_id: this.form.region_id,
							country_id: this.form.country_id,
							name: this.username,
							phone: this.form.phone,
							city: this.form.city,
							neighbourhood_id: 1,
							email: this.form.email,
						},
					};

					for (let key in shippingUp.data) {
						formData.append(key, shippingUp.data[key]);
					}
					shippingUp.data = formData;

					this.$store
						.dispatch("checkout/updateShippingAddress", shippingUp)
						.then(() => {
							this.loading = false;
						})
						.catch(() => {
							this.loading = false;
						});
						//close modal if component is modal
					if (this.modal) {
						this.$emit("closecshippingm");
					}
				}
			},
			onReset(event) {
				event.preventDefault();
				if (this.mode === "create") {
					this.form.name = "";
					this.form.phone = "";
					this.form.country_id = "";
					this.form.city = "";
					this.form.neighbourhood_id = "";
					this.form.region_id = "";
					this.form.division_id = "";
					this.form.council_id = "";
				}
				if (this.modal) {
					this.$emit("closecshippingm");
				}
			},
			async getcountries(){
				this.loading = true;
				await axios.get(`shipping-address/get-country`)
					.then(res =>{
						// this.countries = res.data.data
						let data = [];
						for (let i = 0; i < res.data.data.length; i++) {
							let country = {
								id : res.data.data[i].country,
								name: res.data.data[i].country
							};
							data.push(country)
						}
						this.countries = data;
						this.loading = false;
						
					})
					.catch(err => console.dir(err))
			},
			async getRegions(country) {
				this.loading = true;
				console.log(country);
				let data = {
					country: country
				}
				await axios.post(`shipping-address/select-region`, data)
						.then(res =>{ 
							let data = [];
							for (let i = 0; i < res.data.data.length; i++) {
								let region = {
									id : res.data.data[i].regions,
									name: res.data.data[i].regions
								};
								data.push(region)
							}
							this.loading = false;
							this.regions = data;
						})
						.catch(err => console.dir(err));
				// this.form.region_id = undefined;
				// this.form.division_id = undefined;
				// this.form.council_id = undefined;
				// this.form.neighbourhood_id = undefined;
				// this.$store.dispatch("auth/region", { countryId: country_id });
			},
			async getDestinations(region){
				this.loading = true;
				console.log(region);
				let data = {
					region: region
				}
				await axios.post(`shipping-address/select-destination`, data)
						.then(res =>{ 
							let data = [];
							for (let i = 0; i < res.data.data.length; i++) {
								let region = {
									id : res.data.data[i].destinations,
									name: res.data.data[i].destinations
								};
								data.push(region)
							}
							this.destinations = data;
							this.loading = false;
							console.log(res.data.data);
						})
						.catch(err => console.dir(err));
			}
			// getDivisions(region_id) {
			// 	this.form.division_id = undefined;
			// 	this.form.council_id = undefined;
			// 	this.form.neighbourhood_id = undefined;
			// 	this.$store.dispatch("auth/division", { regionId: region_id });
			// },
			// getCouncils(division_id) {
			// 	this.form.council_id = undefined;
			// 	this.form.neighbourhood_id = undefined;
			// 	this.$store.dispatch("auth/municipality", { divisionId: division_id });
			// },
			// getNeigbourhoods(council_id) {
			// 	this.form.neighbourhood_id = undefined;
			// 	this.$store.dispatch("auth/locality", { councilId: council_id });
			// },
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
