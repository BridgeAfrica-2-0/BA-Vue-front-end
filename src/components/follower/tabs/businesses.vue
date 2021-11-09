<template>
	<div>
		<fas-icon
			class="primary mr-2 pt-1 icon-size primary"
			:icon="['fas', 'handshake']"
		/>
		Businesses

		<hr />

		<div class="business" v-if="noBusiness == false">
			<b-row>
				<b-col lg="6" class="p-0 mb-2" v-for="item in busineses" :key="item.id">
					<div class="people-style shadow h-100">
						<b-row>
							<b-col md="3" xl="3" lg="3" cols="5" sm="3">
								<div class="center-img">
									<splide :options="options" class="r-image">
										<splide-slide cl>
											<img :src="item.logo_path" class="r-image" />
										</splide-slide>
									</splide>
								</div>
							</b-col>
							<b-col md="5" cols="7" lg="9" xl="5" sm="5">
								<p class="textt text">
									<strong class="title"> {{ item.name }} </strong> <br />
									<span v-for="cat in item.category" :key="cat.id">
										{{ cat.name }}
									</span>
									<br />
									{{ count(item.followers) }} Community <br />

									<span class="location">
										<b-icon-geo-alt class="ico"></b-icon-geo-alt>
										{{ item.city }},
										<span v-for="nei in item.neigborhood" :key="nei.id">
											{{ nei.name }}
										</span>
									</span>
									<br />

									<read-more
										more-str="read more"
										class="readmore"
										:text="item.about_business"
										link="#"
										less-str="read less"
										:max-chars="100"
									>
									</read-more>
								</p>
							</b-col>

							<b-col lg="12" xl="4" md="4" cols="12" sm="4">
								<div class="s-button">
									<b-row>
										<b-col
											md="12"
											lg="4"
											xl="12"
											sm="12"
											cols="4"
											class="mt-2 text-center"
										>
											<b-button
												block
												size="sm"
												class="b-background shadow "
												variant="primary"
											>
												<i class="fas fa-user-plus  fa-lg btn-icon "></i>
												<span class="btn-com">Community</span>
											</b-button>
										</b-col>

										<b-col
											md="12"
											lg="4"
											xl="12"
											sm="12"
											cols="4"
											class="mt-2 text-center"
										>
											<b-button
												block
												size="sm"
												class="b-background shadow "
												variant="primary"
											>
												<i class="fas fa-envelope   fa-lg btn-icon "></i>
												<span class="btn-text">Message</span>
											</b-button>
										</b-col>

										<b-col
											md="12"
											lg="4"
											xl="12"
											sm="12"
											cols="4"
											class="mt-2 text-center"
										>
											<b-button
												block
												size="sm"
												class="b-background shadow "
												variant="primary"
											>
												<i class="fas fa-map-marked-alt  fa-lg btn-icon "></i>
												<span class="btn-text">Direction</span>
											</b-button>
										</b-col>
									</b-row>
								</div>
							</b-col>
						</b-row>
					</div>
				</b-col>
			</b-row>

			<infinite-loading @infinite="infiniteHandler"></infinite-loading>
		</div>
		<div v-show="noBusiness" class="no-business">
			<b-container>
				<h2>No Businesses Listed</h2>
				<hr />
			</b-container>
			<p>User has not listed any business. Please check back later</p>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		data() {
			return {
				noBusiness: false,
				foll_id: "",
				page: 1,
			};
		},

		methods: {
			count(number) {
				if (number >= 1000000) {
					return number / 1000000 + "M";
				}
				if (number >= 1000) {
					return number / 1000 + "K";
				} else return number;
			},

			infiniteHandler($state) {
				if (this.page == 1) {
					this.busineses.splice(0);
				}
				let url = "business/userBusiness/" + this.page + "?id=" + this.foll_id;

				this.$store
					.dispatch("follower/loadMoreUserBusiness", url)
					.then(({ data }) => {
						console.log("lala baledddd");
						console.log(data);
						if (data.length) {
							this.page += 1;

							this.busineses.push(...data);
							$state.loaded();
						} else {
							$state.complete();
						}
					})
					.catch((err) => {
						console.log({ err: err });
					});
			},
		},
		computed: {
			busineses() {
				return this.$store.state.follower.profileBusiness;
			},
		},
		mounted() {
			this.foll_id = this.$route.params.id;
			this.$store
				.dispatch("follower/profileBusiness", this.foll_id)
				.then((response) => {})
				.catch((error) => {
					console.log({ error: error });
				});
		},
	};
</script>

<style scoped>
	.no-business {
	  border: 1px solid #ccc;
	  width: 50%;
	  height: 40%;
	  padding: 40px;
	  margin-left: 270px;
	}

	.icon {
	  height: 24px;
	  width: 24px;
	}


	.primary-bg {
	  background-color: rgb(242, 242, 242);
	  border: none;
	}

	h2,
	p {
	  text-align: center;
	  font-size: 12px;
	  font-family: Helvetica;
	}

	@media only screen and (max-width: 768px) {
	  p {
	    font-size: 12px;
	    font-family: Helvetica;
	  }
	  span {
	    margin-left: 6px;
	  }
	}

			.btn {
				padding-top: 6px;
				font-size: 10px;

				height: 28px;
				width: 85px;
			}

			.r-image {
				border-radius: 8px;

				height: 100px;
				width: 100px;
			}

		@media only screen and (min-width: 768px) {
			.title {
				font-size: 20px;
				color: black;

				line-height: 35px;
				font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
			}

			.textt {
				color: #000;

				font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
				font-weight: normal;
				font-size: 14px;
				line-height: 30px;
				color: rgba(117, 114, 128, 1);
				text-align: left;

				font-weight: normal;
				line-height: 20px;
				font-style: normal;

				padding: 1px;
				text-align: left;

				margin-left: 30px;

				margin-right: -5px;

				line-height: 25px;
			}

			.location {
				margin-bottom: 30px;
			}

			.btn {
				padding-top: 6px;
				height: 38px;
				width: 123px;
				font-size: 14px;
			}

			.r-image {
				border-radius: 8px;

				height: 160px;
				width: 160px;
			}
		}

		.stock {
			color: green;
		}

		.b1 {
			width: 100px;
			margin-left: -20px;
		}

		.b2 {
			width: 120px;

			margin-left: -15px;
		}

		.btn {
			display: flex;
		}

		.ico {
			margin-right: 5px;
		}

		@media only screen and (min-width: 768px) {
			.people-style {
				border-top-left-radius: 5px;

				border-bottom-left-radius: 5px;

				border-top-right-radius: 5px;

				border-bottom-right-radius: 5px;

				background: white;

				background-color: #fff;
				background-clip: border-box;
				border: 1px solid rgba(0, 0, 0, 0.125);
				margin-bottom: 10px;

				margin-right: 8px;

				padding: 7px;
			}
		}

		@media only screen and (max-width: 768px) {
			.people-style {
				border-top-left-radius: 5px;

				border-bottom-left-radius: 5px;

				border-top-right-radius: 5px;

				border-bottom-right-radius: 5px;

				background: white;

				background-color: #fff;
				background-clip: border-box;
				border: 1px solid rgba(0, 0, 0, 0.125);
				margin-bottom: 10px;

				padding: 7px;
			}

			.btn {
				display: flex;

				padding-right: 60px;
			}

			h4 {
				font-size: 15px;
			}
		}

		@media only screen and (max-width: 520px) {
			.btn {
				display: flex;
			}
		}

		@media only screen and (min-width: 992px) and (max-width: 1265px) {
			.textt {
				color: #000;
				font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
				font-weight: normal;
				font-size: 14px;
				line-height: 30px;
				color: rgba(117, 114, 128, 1);
				text-align: left;
				font-weight: normal;
				line-height: 20px;
				font-style: normal;
				padding: 1px;
				text-align: left;
				margin-left: 55px;
				margin-right: -5px;
				line-height: 25px;
			}
		}
</style>
