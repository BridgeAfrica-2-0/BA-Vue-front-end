<template>
	<div>
		<b-card title="" header-tag="header" footer-tag="footer">
			<div style="float:right" class="edit cursor-pointer" @click="editContact">
				<b-icon icon="pencil-fill" variant="primary"></b-icon>
			</div>
			<h6 class="mb-2"><b>{{$t("businessf.Intro")}}
				</b></h6>

			<b-card-text>
				<p class="d-flex justify-content-start align-items-start">
					<b-icon icon="briefcase-fill" class="primary icon-size"></b-icon>
					<span v-for="cat in business_intro.category" :key="cat.id">
						{{ cat.name }}
					</span>
				</p>
				<p class="d-flex justify-content-start align-items-start">
					<b-icon icon="search" class="primary icon-size"></b-icon>
					<span v-for="(keyword, index) in business_intro.keywords" :key="index"
						>{{ keyword }},
					</span>
				</p>
				<p class="d-flex justify-content-start align-items-start">
					<b-icon icon="geo-alt-fill" class="primary icon-size"></b-icon>
					{{ business_intro.city }}
				</p>
				<p class="d-flex justify-content-start align-items-start">
					<b-icon icon="link" class="primary icon-size"></b-icon>
					{{ business_intro.website }}
				</p>
				<p class="d-flex justify-content-start align-items-start">
					<b-icon icon="people-fill" class="primary icon-size"></b-icon>
					{{ business_intro.community }} {{$t("businessf.Community")}}
				</p>
				<p class="d-flex justify-content-start align-items-start">
					<b-icon icon="telephone-fill" class="primary icon-size"></b-icon>
					{{ business_intro.phone }}
				</p>
				<p class="d-flex justify-content-start align-items-start">
					<b-icon icon="envelope-fill" class="primary icon-size"></b-icon>
					{{ business_intro.email }}
				</p>
				<p class="d-flex justify-content-start align-items-start">
					<b-icon icon="clock" class="primary icon-size"></b-icon>
					<b-link class="mr-2"> {{$t("businessf.Open_now")}}</b-link>
					<b-dropdown size="sm" variant="transperent">
						<template #button-content>
							{{ business_intro.business_open_hours[0].day }}
							<span class="ml-2">
								({{ business_intro.business_open_hours[0].opening_time }}
								<span
									v-if="
										business_intro.business_open_hours[0].opening_time >=
											'00:00:00' &&
											business_intro.business_open_hours[0].opening_time <
												'12:00:00'
									"
									>AM</span
								>
								<span v-else>PM</span> -
								{{ business_intro.business_open_hours[0].closing_time }}
								<span
									v-if="
										business_intro.business_open_hours[0].closing_time >=
											'00:00:00' &&
											business_intro.business_open_hours[0].closing_time <
												'12:00:00'
									"
									>AM</span
								>
								<span v-else>PM</span>)
							</span>
						</template>
						<b-dropdown-item
							v-for="(open_hours, index) in business_intro.business_open_hours"
							:key="index"
						>
							{{ open_hours.day }}
							<span class="ml-2">
								({{ open_hours.opening_time }}
								<!-- check if is AM or PM -->
								<span
									v-if="
										open_hours.opening_time >= '00:00:00' &&
											open_hours.opening_time < '12:00:00'
									"
									>AM</span
								>
								<span v-else>PM</span>
								- {{ open_hours.closing_time }}
								<span
									v-if="
										open_hours.closing_time >= '00:00:00' &&
											open_hours.closing_time < '12:00:00'
									"
									>AM</span
								>
								<span v-else>PM</span>)
							</span>
						</b-dropdown-item>
					</b-dropdown>
				</p>
			</b-card-text>

			<GmapMap
				:center="{ lat: business_intro.lat, lng: business_intro.lng }"
				:zoom="12"
				style="width:100%;  height: 250px;"
			>
				<GmapMarker
					:position="{ lat: business_intro.lat, lng: business_intro.lng }"
				/>
			</GmapMap>
		</b-card>

		<b-modal
			id="bv-modal-example2"
			hide-footer
			:title="$t('businessf.Edit_Address')"
			v-model="edit2"
			size="lg"
		>
			<b-form>
				{{ blec }}
				<b-row>
					<div class="form-group col-md-6">
						<label for="username">{{$t("businessf.Busness_Name")}}:</label><br />
						<input
							type="text"
							name="name"
							id="name"
							:placeholder="$t('businessf.Busness_Name')"
							class="form-control"
							v-model="form.name"
						/>
					</div>

					<div class="form-group col-md-6">
						<label for="alias">{{$t("businessf.Category")}}:</label><br />

						<b-form-select
							:options="categories"
							class="mb-3"
							value-field="item"
							v-model="form.category"
							text-field="name"
						></b-form-select>
					</div>
				</b-row>

				<b-row>
					<b-form-group
						id="input-group-2"
						:label="$t('businessf.Phone_Contact')"
						label-for="input-2"
						label-size="sm"
						class="col-md-6"
					>
						<b-form-input
							id="input-1"
							class="mt-1"
							v-model="form.phone"
							type="tel"
							required
						></b-form-input>
					</b-form-group>

					<b-form-group
						class="col-md-6"
						id="input-group-2"
						:label="$t('businessf.Business_Email')"
						label-for="input-2"
						label-size="sm"
					>
						<b-form-input
							id="input-1"
							class="mt-1"
							v-model="form.email"
							type="email"
							required
						></b-form-input>
					</b-form-group>
				</b-row>

				<b-row>
					<div class="form-group col-md-6">
						<label for="keywords">{{$t("businessf.Keywords")}}</label><br />
						<div class="col-md-12 pl-0 pr-0">
							<b-form-tags
								input-id="alias"
								v-model="form.keywords"
							></b-form-tags>
						</div>
					</div>

					<div class="form-group col-md-6">
						<label for="country" class="username"> {{$t("businessf.Country")}} :</label><br />

						<country-select
							v-model="form.country"
							:country="country"
							topCountry="CM"
							class="form-control text"
						/>
					</div>
				</b-row>

				<b-row>
					<div class="form-group col-md-6">
						<label for="country" class="username"> {{$t("businessf.Region")}} :</label><br />
						<region-select
							v-model="form.region"
							:country="country"
							:region="region"
							class="form-control text"
						/>
					</div>
					<b-form-group
						id="input-group-2"
						:label="$t('businessf.City')"
						label-for="input-2"
						label-size="sm"
						class="col-md-6"
					>
						<b-form-input
							id="input-1"
							class="mt-1"
							v-model="form.city"
							type="text"
							required
						></b-form-input>
					</b-form-group>
				</b-row>

				<b-button class="mt-3 btn-block" variant="primary" @click="validate">
					{{$t("businessf.Modify")}}
				</b-button>
			</b-form>
		</b-modal>
	</div>
</template>

<script>
	import axios from "axios";

	import { validationMixin } from "vuelidate";

	import { required, email, minLength } from "vuelidate/lib/validators";

	export default {
		mixins: [validationMixin],
		data() {
			return {
				form: this.$store.state.businessOwner.businessInfo,
				blec: this.business_intro,
				center: null,

				country: null,
				region: null,
				url: null,

				markers: [],

				position: {
					lat: 0,
					lng: 0,
				},

				currentPlace: null,

				places: [],

				category: "",
				categories: [
					{ item: "Professional_and_home_service", name: "Professionals" },
					{ item: "Agriculture ", name: "Agriculture " },
					{ item: "Restaurant ", name: " Restaurant " },
					{ item: "Electronics ", name: "Electronics " },
					{ item: "Handicrafts", name: "Handicrafts" },
					{ item: "clothing", name: "clothing" },
					{ item: "Mechanics", name: "Mechanics" },
					{ item: "Health_unit ", name: "Health unit " },
					{ item: "Bars", name: "Bars" },
					{ item: "Hair_and_beauty ", name: "Hair and beauty " },
					{ item: "Real_estate ", name: "Real_estate " },
					{ item: "Travelling ", name: "Travelling " },
					{ item: "Hotels", name: "Hotels" },
					{ item: "station", name: " station  " },
					{ item: "Mayor_concils", name: "Mayor_concils" },
					{ item: "Taxis service", name: "Taxis service" },
				],

				edit1: false,
				edit2: false,
				leftTitle: "About Mapoure Agrobusiness",
				textToo:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit.\n" +
					"              Asperiores temporibus, rerum iste id obcaecati quae odit accusamus\n" +
					"              reprehenderit, ipsa nam laudantium pariatur. Harum, soluta. Nam\n" +
					"              accusantium hic numquam architecto debitis. Lorem ipsum dolor sit\n" +
					"              amet consectetur adipisicing elit. Asperiores temporibus, rerum\n" +
					"              iste id obcaecati quae odit accusamus reprehenderit, ipsa nam\n" +
					"              laudantium pariatur. Harum, soluta. Nam accusantium hic numquam\n" +
					"              architecto debitis. Asperiores temporibus, rerum iste id obcaecati\n" +
					"              quae odit accusamus reprehenderit, ipsa nam laudantium pariatur.\n" +
					"              Harum, soluta. Nam accusantium hic numquam architecto debitis.",
				workedAt: "Current or Last Organization",
				lastEducation: "Last Education",
				homeTown: "Dummy",
				cityName: "Dummy",
				followed: "525",
				telephone: "+1 (234) 567-8974",
				email: "info@businessname.com",
			};
		},

		validations: {
			form: {
				name: {
					required,
				},

				category: {
					required,
				},
			},
		},

		methods: {
			/**
			 * Used to edit biography
			 * @return void
			 */

			getValidationClass(fieldName) {
				const field = this.$v.form[fieldName];
				if (field) {
					return {
						red: field.$invalid && field.$dirty,
					};
				}
			},

			validate() {
				this.$v.form.$touch();
				if (this.$v.form.$anyError) {
					console.log("error error");
					return false;
				} else {
					console.log("no error error");

					this.UpdateBusiness();
					return true;
				}
			},

			UpdateBusiness() {
				let formData2 = new FormData();

				formData2.append("region", this.form.region);
				formData2.append("city", this.form.city);
				formData2.append("country", this.form.country);

				formData2.append("address", this.form.adress);

				formData2.append("lat", this.form.lat);
				formData2.append("lng", this.form.lng);

				formData2.append("neighbor", this.form.neighbor);

				formData2.append("name", this.form.name);
				formData2.append("category", this.form.category);
				formData2.append("keywords", this.form.keywords);
				formData2.append("phone", this.form.phone);
				formData2.append("email", this.form.email);
				formData2.append("about_business", this.about);

				this.axios
					.post("business/update/" + this.url, formData2, {
						headers: {
							"Content-Type": "multipart/form-data",
						},
					})
					.then((response) => {
						console.log(response);

						this.flashMessage.show({
							status: "success",
							blockClass: "custom-block-class",
							message: "Business Profile updated",
						});
					})
					.catch((err) => {
						console.log({ err: err });

						this.sendingB = false;

						if (err.response.status == 422) {
							console.log({ err: err });
							console.log(err.response.data.message);

							this.flashMessage.show({
								status: "error",

								message: err.response.data.message,
								blockClass: "custom-block-class",
							});
						} else {
							this.flashMessage.show({
								status: "error",

								message: "Unable to update Your Business",
								blockClass: "custom-block-class",
							});
							console.log({ err: err });
						}
					});
			},

			setcoordintes() {
				//  this.position.lat = this.$store.state.businessOwner.businessInfo.lat;
				this.position.lng = 10;

				// this.center={ lat:10, lng: 20 }
			},

			editBio() {
				this.edit1 = !this.edit1;
			},
			/**
			 * Used to edit contact info
			 * @return void
			 */
			editContact() {
				this.$router.push({path:`/business_owner/${this.url}`, query: {currentTab: 1}})
				// (this.form = this.business_intro), (this.edit2 = !this.edit2);
				console.log("editContact");
				// localStorage.setItem("ba-business-active-tab", 0);
			},

			/**
			 *
			 * @param idForm
			 */
			//   validate(idForm) {
			//     this.$bvModal.hide(idForm);
			//   },
		},

		computed: {
			business_intro() {
				return this.$store.state.businessOwner.businessInfo;
			},
		},

		mounted() {
			this.setcoordintes();
			this.url = this.$route.params.id;
		},
	};
</script>

<style scoped>
	@media (max-width: 768px) {
		.primary {
			margin-right: 6px;
			font-size: 12px !important;
		}

		.card-text {
			font-size: 14px !important;
		}
	}

	@media (min-width: 768px) {
		.primary {
			margin-right: 8px;
			font-size: 14px !important;
		}

		.card-text {
			font-size: 14px !important;
		}
	}
</style>

<style>
	.icon-size {
		width: 24px;
		height: 24px;
	}
	
</style>
