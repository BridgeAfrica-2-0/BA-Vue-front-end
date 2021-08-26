<template>
  <div>
    <b-card class="  border shadow c-h">
      <span>
        <h6 class="mb-3 pl-1 title">
          <fas-icon class="icons" :icon="['fas', 'chart-line']" size="lg" />

          <b> INSIGHTS </b>
        </h6>
      </span>
      <p class="text">
        Discover how customers feel about and interact with you
      </p>

      <div class="a-content">
        <line-chart
          ref="skills_chart"
          :chart-data="chartData"
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
    animateRotate: true
  }
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
            data: [this.$store.getters.getdetails.post, this.$store.getters.getdetails.visits, this.$store.getters.getdetails.shares]
          }
        ]
      }
    };
  },
  computed: {
    currentDataSet() {
      return this.chartData.datasets[0].data;
    }
  },
  props: ["selectedb"],
  // computed: {
  //   business() {
  //     return this.$store.getters.getdetails.business;
  //   }
  // },
  created() {
    this.$store
      .dispatch("getdetails")
      .then(() => {
        console.log("the response");
      })
      .catch(err => {
        console.log({ err: err });
      });
  }
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
  display: block;
  height: 250px;
  width: 360px;
}
.text-design {
  line-height: 40px;
}

.a-content {
  align-content: center;
  text-align: center;
}
</style>
