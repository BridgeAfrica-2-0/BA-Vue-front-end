<template>
	<div>
		<b-card class="border shadow c-h">
			<span>
				<h6 class="mb-3 pl-1 title">
					<fas-icon class="icons" :icon="['fas', 'chart-line']" size="lg" />

					<b> {{ $t("dashboard.insights").toUpperCase() }} </b>
				</h6>
			</span>
			<p class="text">
				{{ $t("dashboard.discover_customers_shares") }} 
			</p>

			<div class="a-content">
				<line-chart
					ref="skills_chart"
					:chart-data="chartDat[0]"
					:options="options"
					class="chart"
				></line-chart>
			</div>
		</b-card>
	</div>
</template>

<script>
	import LineChart from "@/components/dasboard/charts/lineChart";

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		animation: {
			animateRotate: true,
		},
	};

	export default {
		name: "businessDashboard",
		components: { LineChart },
		data() {
			return {
				options,

				chartData: {
					labels: ["Posts 33k", "Visit 1.4k", "Share 870"],
					datasets: [
						{
							backgroundColor: ["#f2f200", "#8c008a", "#40c600"],
							data: [100, 50, 20],
						},
					],
				},
			};
		},
		computed: {
			business() {
				return this.$store.state.dashboard.dashboard_business;
			},

			labelArray() {
				let label = [];
				label.push(
					"Post " + this.$store.state.dashboard.dashboard_business.total_post
				);
				label.push(
					"Visit " + this.$store.state.dashboard.dashboard_business.total_shares
				);
				label.push(
					"Share " + this.$store.state.dashboard.dashboard_business.total_visit
				);

				return label;
			},

			insightData() {
				let insdata = [];
				insdata.push(this.$store.state.dashboard.dashboard_business.total_post);
				insdata.push(
					this.$store.state.dashboard.dashboard_business.total_shares
				);
				insdata.push(
					this.$store.state.dashboard.dashboard_business.total_visit
				);
				return insdata;
			},

			dataset() {
				let backgroundColor = ["#f2f200", "#8c008a", "#40c600"];
				let data = this.insightData;
				let dat = [];

				dat.push({ backgroundColor: backgroundColor, data: data });

				return dat;
			},

			chartDat() {
				let chartData = [];
				//chartData.push( "labels", this.labelArray );
				chartData.push({ labels: this.labelArray, datasets: this.dataset });

				return chartData;
			},

			loded() {
				let loaded = false;

				if (this.$store.state.dashboard.dashboard_business.total_post == []) {
					return loaded;
				} else {
					return true;
				}
			},
		},
	};
</script>

<style scoped>
	.picture {
		border-radius: 10px;
		width: 190px;
		flex-basis: 40%;
	}

	.text-lost {
		flex-basis: 60%;
		padding-left: 10px;
	}

	.c-h {
		height: 400px;
	}
	.chart {
	
		/* height: 250px;
		width: 360px; */

		height: 100%;
		width: 100%;
		padding: 10px;
	}

	.text-design {
		line-height: 40px;
	}

	.a-content {
		align-content: center;
		text-align: center;
	}

	/* @media only screen and (max-width: 365px) {


.chart {
		
		height: 150px;
		width: 200px;
	}

	} */
</style>

<style>

#doughnut-chart{

	/* height: 100% !important;
	width: 100% !important; */

	height: 250px !important;
	

}

</style>
